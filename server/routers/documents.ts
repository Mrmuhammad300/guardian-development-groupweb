import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { documents } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { storagePut, storageGet } from "../storage";
import { nanoid } from "nanoid";

export const documentsRouter = router({
  /**
   * Public: List documents for a project
   */
  listByProject: publicProcedure
    .input(z.object({ projectId: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const docs = await db
        .select()
        .from(documents)
        .where(eq(documents.projectId, input.projectId));

      return {
        documents: docs.map((doc) => ({
          id: doc.id,
          title: doc.title,
          documentType: doc.documentType,
          fileSize: doc.fileSize,
          createdAt: doc.createdAt,
          fileUrl: doc.fileUrl,
          accessLevel: doc.accessLevel,
        })),
        total: docs.length,
      };
    }),

  /**
   * Protected: Upload document (admin only)
   */
  upload: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        title: z.string().min(1),
        documentType: z.enum([
          "term_sheet",
          "financial_report",
          "legal_document",
          "operational_report",
          "risk_assessment",
          "market_analysis",
          "track_record",
          "other",
        ]),
        fileData: z.string(), // Base64 encoded file data
        fileType: z.string(),
        accessLevel: z
          .enum(["public", "qualified_investors", "portfolio_investors", "admin"])
          .default("admin"),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      try {
        // Decode base64 file data
        const fileBuffer = Buffer.from(input.fileData, "base64");

        // Generate unique file key for S3
        const fileKey = `documents/${input.projectId}/${nanoid()}-${input.title}`;

        // Upload to S3
        const { url } = await storagePut(fileKey, fileBuffer, input.fileType);

        // Store metadata in database
        const docId = Math.floor(Math.random() * 1000000);
        await db.insert(documents).values({
          id: docId,
          projectId: input.projectId,
          title: input.title,
          documentType: input.documentType,
          fileSize: fileBuffer.length,
          fileUrl: url,
          fileType: input.fileType,
          accessLevel: input.accessLevel,
          description: input.description,
          tags: input.tags,
          version: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        return {
          id: docId,
          title: input.title,
          fileUrl: url,
          createdAt: new Date(),
        };
      } catch (error) {
        console.error("[Document Upload] Error:", error);
        throw new Error("Failed to upload document");
      }
    }),

  /**
   * Protected: Get signed download URL for document
   */
  getDownloadUrl: protectedProcedure
    .input(z.object({ documentId: z.number() }))
    .query(async ({ input, ctx }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const doc = await db
        .select()
        .from(documents)
        .where(eq(documents.id, input.documentId))
        .limit(1);

      if (!doc || doc.length === 0) {
        throw new Error("Document not found");
      }

      // Verify user has access to this document's project
      // TODO: Implement project access check based on accessLevel

      // Return presigned URL
      const { url: downloadUrl } = await storageGet(doc[0].fileUrl);

      return {
        downloadUrl,
        title: doc[0].title,
      };
    }),

  /**
   * Protected: Delete document (admin only)
   */
  delete: protectedProcedure
    .input(z.object({ documentId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const doc = await db
        .select()
        .from(documents)
        .where(eq(documents.id, input.documentId))
        .limit(1);

      if (!doc || doc.length === 0) {
        throw new Error("Document not found");
      }

      // Delete from database
      await db.delete(documents).where(eq(documents.id, input.documentId));

      // TODO: Delete from S3 bucket

      return { success: true };
    }),

  /**
   * Protected: List all documents (admin only)
   */
  listAll: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user?.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const docs = await db.select().from(documents);

    return {
      documents: docs.map((doc) => ({
        id: doc.id,
        projectId: doc.projectId,
        title: doc.title,
        documentType: doc.documentType,
        fileSize: doc.fileSize,
        createdAt: doc.createdAt,
        accessLevel: doc.accessLevel,
      })),
      total: docs.length,
    };
  }),
});
