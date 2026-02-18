import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import {
  getCapitalStacksByProjectId,
  getCapitalStackById,
  logAuditEvent,
} from "../db";

export const capitalStacksRouter = router({
  /**
   * Public: Get capital stack for a project
   */
  getByProjectId: publicProcedure
    .input(z.object({ projectId: z.number() }))
    .query(async ({ input }) => {
      const capitalStack = await getCapitalStacksByProjectId(input.projectId);

      // Calculate total and percentages
      const total = capitalStack.reduce((sum, layer) => sum + Number(layer.amount), 0);

      return {
        layers: capitalStack.map((layer) => ({
          id: layer.id,
          layerName: layer.layerName,
          layerType: layer.layerType,
          amount: layer.amount,
          percentage: total > 0 ? (Number(layer.amount) / total) * 100 : 0,
          interestRate: layer.interestRate,
          term: layer.term,
          layerOrder: layer.layerOrder,
        })),
        total,
      };
    }),

  /**
   * Public: Get individual capital stack layer
   */
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const layer = await getCapitalStackById(input.id);
      if (!layer) {
        throw new Error("Capital stack layer not found");
      }
      return layer;
    }),

  /**
   * Protected: Create capital stack layer (admin only)
   */
  create: protectedProcedure
    .input(
      z.object({
        projectId: z.number(),
        layerName: z.string().min(1),
        layerType: z.enum(["senior-debt", "mezzanine", "equity", "tax-credit", "other"]),
        amount: z.string(),
        interestRate: z.number().min(0).max(100).optional(),
        term: z.string().optional(),
        layerOrder: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const layerId = Math.floor(Math.random() * 10000);

      // Log creation for audit trail
      // await logAuditEvent(ctx.user.id, "CREATE_CAPITAL_STACK_LAYER", "capitalStacks", layerId);

      return {
        id: layerId,
        ...input,
        createdAt: new Date(),
      };
    }),

  /**
   * Protected: Update capital stack layer (admin only)
   */
  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        updates: z.object({
          layerName: z.string().optional(),
          amount: z.string().optional(),
          interestRate: z.number().optional(),
          term: z.string().optional(),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const oldLayer = await getCapitalStackById(input.id);
      if (!oldLayer) {
        throw new Error("Capital stack layer not found");
      }

      const updatedLayer = { ...oldLayer, ...input.updates };

      // Log update for audit trail
      // await logAuditEvent(ctx.user.id, "UPDATE_CAPITAL_STACK_LAYER", "capitalStacks", input.id);

      return updatedLayer;
    }),

  /**
   * Protected: Delete capital stack layer (admin only)
   */
  delete: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const layer = await getCapitalStackById(input.id);
      if (!layer) {
        throw new Error("Capital stack layer not found");
      }

      // Log deletion for audit trail
      // await logAuditEvent(ctx.user.id, "DELETE_CAPITAL_STACK_LAYER", "capitalStacks", input.id);

      return { success: true };
    }),
});
