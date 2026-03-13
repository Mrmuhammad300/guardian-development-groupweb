import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { investors, projectUpdates } from "../../drizzle/schema";
import { eq, inArray } from "drizzle-orm";
import {
  notifyProjectMilestone,
  notifyCapitalCall,
  notifyDistribution,
} from "../_core/emailService";

export const campaignsRouter = router({
  /**
   * Protected: Send bulk milestone notification to all portfolio investors
   */
  sendBulkMilestoneNotification: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        projectName: z.string(),
        milestoneName: z.string(),
        completionDate: z.string(),
        investorIds: z.array(z.number()).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      try {
        let investorList: any[];
        if (input.investorIds && input.investorIds.length > 0) {
          investorList = await db
            .select()
            .from(investors)
            .where(inArray(investors.id, input.investorIds));
        } else {
          investorList = await db.select().from(investors);
        }

        const results = await Promise.all(
          investorList.map((investor) =>
            notifyProjectMilestone(
              investor.email || "",
              input.projectName,
              input.milestoneName,
              input.completionDate
            )
          )
        );

        const successCount = results.filter((r) => r).length;

        return {
          success: true,
          totalSent: investorList.length,
          successCount,
          failureCount: investorList.length - successCount,
        };
      } catch (error) {
        console.error("[Bulk Campaign] Error:", error);
        throw new Error("Failed to send bulk campaign");
      }
    }),

  /**
   * Protected: Send bulk capital call notification
   */
  sendBulkCapitalCall: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        projectName: z.string(),
        capitalAmount: z.string(),
        dueDate: z.string(),
        callPercentage: z.string(),
        investorIds: z.array(z.number()).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      try {
        let investorList: any[];
        if (input.investorIds && input.investorIds.length > 0) {
          investorList = await db
            .select()
            .from(investors)
            .where(inArray(investors.id, input.investorIds));
        } else {
          investorList = await db.select().from(investors);
        }

        const results = await Promise.all(
          investorList.map((investor) =>
            notifyCapitalCall(
              investor.email || "",
              input.projectName,
              input.capitalAmount,
              input.dueDate,
              input.callPercentage
            )
          )
        );

        const successCount = results.filter((r) => r).length;

        return {
          success: true,
          totalSent: investorList.length,
          successCount,
          failureCount: investorList.length - successCount,
        };
      } catch (error) {
        console.error("[Bulk Campaign] Error:", error);
        throw new Error("Failed to send bulk capital call");
      }
    }),

  /**
   * Protected: Send bulk distribution notification
   */
  sendBulkDistribution: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        projectName: z.string(),
        distributionAmount: z.string(),
        distributionDate: z.string(),
        investorIds: z.array(z.number()).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      try {
        let investorList: any[];
        if (input.investorIds && input.investorIds.length > 0) {
          investorList = await db
            .select()
            .from(investors)
            .where(inArray(investors.id, input.investorIds));
        } else {
          investorList = await db.select().from(investors);
        }

        const results = await Promise.all(
          investorList.map((investor) =>
            notifyDistribution(
              investor.email || "",
              input.projectName,
              input.distributionAmount,
              input.distributionDate
            )
          )
        );

        const successCount = results.filter((r) => r).length;

        return {
          success: true,
          totalSent: investorList.length,
          successCount,
          failureCount: investorList.length - successCount,
        };
      } catch (error) {
        console.error("[Bulk Campaign] Error:", error);
        throw new Error("Failed to send bulk distribution");
      }
    }),

  /**
   * Protected: Get campaign history
   */
  getCampaignHistory: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user?.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const updates = await db
      .select()
      .from(projectUpdates)
      .orderBy(projectUpdates.createdAt);

    return {
      campaigns: updates.map((update) => ({
        id: update.id,
        projectId: update.projectId,
        updateType: update.updateType,
        title: update.title,
        createdAt: update.createdAt,
      })),
      total: updates.length,
    };
  }),
});
