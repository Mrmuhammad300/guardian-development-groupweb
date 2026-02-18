import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import {
  getInvestorById,
  listInvestors,
  getProjectInvestorsByInvestorId,
  logAuditEvent,
} from "../db";

export const investorsRouter = router({
  /**
   * Public: List active investors (basic info only)
   */
  list: publicProcedure
    .input(
      z.object({
        stage: z.enum(["seed", "series-a", "growth", "institutional"]).optional(),
        entityType: z.enum(["individual", "family-office", "spv", "jv", "institution"]).optional(),
        limit: z.number().min(1).max(100).default(20),
        offset: z.number().min(0).default(0),
      })
    )
    .query(async ({ input }) => {
      const investors = await listInvestors({
        stage: input.stage,
        entityType: input.entityType,
        limit: input.limit,
        offset: input.offset,
      });

      return {
        investors: investors.map((inv) => ({
          id: inv.id,
          name: inv.name,
          entityType: inv.entityType,
          investmentStage: inv.investmentStage,
          totalDeployed: inv.totalDeployed,
          website: inv.website,
        })),
        total: investors.length,
      };
    }),

  /**
   * Public: Get investor profile by ID
   */
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const investor = await getInvestorById(input.id);
      if (!investor) {
        throw new Error("Investor not found");
      }

      const projects = await getProjectInvestorsByInvestorId(input.id);

      return {
        investor: {
          id: investor.id,
          name: investor.name,
          entityType: investor.entityType,
          investmentStage: investor.investmentStage,
          totalDeployed: investor.totalDeployed,
          website: investor.website,
        },
        projectCount: projects.length,
      };
    }),

  /**
   * Protected: Get full investor details (authenticated users)
   */
  getFullProfile: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const investor = await getInvestorById(input.id);
      if (!investor) {
        throw new Error("Investor not found");
      }

      await logAuditEvent(
        ctx.user?.id,
        "VIEW_INVESTOR_PROFILE",
        "investors",
        input.id,
        undefined,
        undefined,
        ctx.req.headers["x-forwarded-for"] as string | undefined,
        ctx.req.headers["user-agent"] as string | undefined
      );

      const projects = await getProjectInvestorsByInvestorId(input.id);

      return {
        investor,
        projects,
      };
    }),

  /**
   * Protected: Create new investor (admin only)
   */
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        entityType: z.enum(["individual", "family_office", "spv", "jv", "partnership", "corporation", "institutional"]),
        investmentStage: z.enum(["pre_qualification", "qualified", "active", "portfolio", "exited"]),
        accreditationStatus: z.enum(["pending", "verified", "expired"]),
        website: z.string().url().optional(),
        email: z.string().email(),
        phone: z.string().optional(),
        minimumInvestment: z.string().optional(),
        maximumInvestment: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const investorId = Math.floor(Math.random() * 10000);

      await logAuditEvent(
        ctx.user.id,
        "CREATE_INVESTOR",
        "investors",
        investorId,
        undefined,
        input as any,
        ctx.req.headers["x-forwarded-for"] as string | undefined,
        ctx.req.headers["user-agent"] as string | undefined
      );

      return {
        id: investorId,
        ...input,
        totalDeployed: "0",
        isActive: true,
        createdAt: new Date(),
      };
    }),

  /**
   * Protected: Update investor (admin only)
   */
  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        updates: z.object({
          name: z.string().optional(),
          investmentStage: z.enum(["pre_qualification", "qualified", "active", "portfolio", "exited"]).optional(),
          accreditationStatus: z.enum(["pending", "verified", "expired"]).optional(),
          isActive: z.boolean().optional(),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const oldInvestor = await getInvestorById(input.id);
      if (!oldInvestor) {
        throw new Error("Investor not found");
      }

      const updatedInvestor = { ...oldInvestor, ...input.updates };

      await logAuditEvent(
        ctx.user.id,
        "UPDATE_INVESTOR",
        "investors",
        input.id,
        oldInvestor as any,
        input.updates as any,
        ctx.req.headers["x-forwarded-for"] as string | undefined,
        ctx.req.headers["user-agent"] as string | undefined
      );

      return updatedInvestor;
    }),
});
