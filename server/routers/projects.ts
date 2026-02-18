import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import {
  getProjectBySlug,
  getProjectById,
  listProjects,
  getCapitalStacksByProjectId,
  getProjectInvestorsByProjectId,
  getProjectUpdatesByProjectId,
  logAuditEvent,
} from "../db";

export const projectsRouter = router({
  /**
   * Public: Get featured projects for homepage/projects page
   */
  list: publicProcedure
    .input(
      z.object({
        status: z.enum(["planning", "development", "stabilized", "exited"]).optional(),
        type: z.enum(["residential", "commercial", "mixed-use", "industrial", "infrastructure"]).optional(),
        limit: z.number().min(1).max(100).default(20),
        offset: z.number().min(0).default(0),
      })
    )
    .query(async ({ input }) => {
      const projects = await listProjects({
        status: input.status,
        type: input.type,
        limit: input.limit,
        offset: input.offset,
      });

      return {
        projects,
        total: projects.length,
      };
    }),

  /**
   * Public: Get project details by slug
   */
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const project = await getProjectBySlug(input.slug);
      if (!project) {
        throw new Error("Project not found");
      }
      return project;
    }),

  /**
   * Public: Get project details by ID with capital stack
   */
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const project = await getProjectById(input.id);
      if (!project) {
        throw new Error("Project not found");
      }

      const capitalStack = await getCapitalStacksByProjectId(input.id);
      const investors = await getProjectInvestorsByProjectId(input.id);
      const updates = await getProjectUpdatesByProjectId(input.id, 10);

      return {
        project,
        capitalStack,
        investors,
        recentUpdates: updates,
      };
    }),

  /**
   * Protected: Get full project details including sensitive financial data
   */
  getFullDetails: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const project = await getProjectById(input.id);
      if (!project) {
        throw new Error("Project not found");
      }

      // Log access for audit trail
      // await logAuditEvent(ctx.user?.id, "VIEW_PROJECT_DETAILS", "projects", input.id);

      const capitalStack = await getCapitalStacksByProjectId(input.id);
      const investors = await getProjectInvestorsByProjectId(input.id);
      const updates = await getProjectUpdatesByProjectId(input.id, 50);

      return {
        project,
        capitalStack,
        investors,
        allUpdates: updates,
      };
    }),

  /**
   * Protected: Create new project (admin only)
   */
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        slug: z.string().min(1),
        description: z.string(),
        location: z.string(),
        projectType: z.enum(["residential", "commercial", "mixed-use", "industrial", "infrastructure"]),
        projectStatus: z.enum(["planning", "development", "stabilized", "exited"]),
        totalCapital: z.number().positive(),
        targetReturn: z.number().min(0).max(100),
        timeline: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      // TODO: Insert project into database
      // For now, return mock response
      const projectId = Math.floor(Math.random() * 10000);

      // Log creation for audit trail
      // await logAuditEvent(ctx.user.id, "CREATE_PROJECT", "projects", projectId);

      return {
        id: projectId,
        ...input,
        createdAt: new Date(),
      };
    }),

  /**
   * Protected: Update project (admin only)
   */
  update: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        updates: z.object({
          name: z.string().optional(),
          description: z.string().optional(),
          projectStatus: z.enum(["planning", "development", "stabilized", "exited"]).optional(),
          targetReturn: z.number().optional(),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const oldProject = await getProjectById(input.id);
      if (!oldProject) {
        throw new Error("Project not found");
      }

      // TODO: Update project in database
      const updatedProject = { ...oldProject, ...input.updates };

      // Log update for audit trail
      // await logAuditEvent(ctx.user.id, "UPDATE_PROJECT", "projects", input.id);

      return updatedProject;
    }),
});
