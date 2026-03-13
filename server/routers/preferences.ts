import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { getDb } from "../db";
import { emailPreferences, investors } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export const preferencesRouter = router({
  /**
   * Protected: Get investor email preferences
   */
  getPreferences: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.user) throw new Error("Unauthorized");

    const db = await getDb();
    if (!db) throw new Error("Database not available");

    try {
      const investor = await db
        .select()
        .from(investors)
        .where(eq(investors.userId, ctx.user.id))
        .limit(1);

      if (!investor || investor.length === 0) {
        throw new Error("No investor profile found");
      }

      const prefs = await db
        .select()
        .from(emailPreferences)
        .where(eq(emailPreferences.investorId, investor[0].id))
        .limit(1);

      if (prefs.length === 0) {
        return {
          investorId: investor[0].id,
          notifyMilestones: true,
          notifyCapitalCalls: true,
          notifyDistributions: true,
          notifyDocuments: true,
          notifyProjectUpdates: true,
          emailFrequency: "immediate",
          allowMarketing: false,
          allowSMS: false,
        };
      }

      return prefs[0];
    } catch (error) {
      console.error("[Preferences] Error fetching preferences:", error);
      throw new Error("Failed to fetch preferences");
    }
  }),

  /**
   * Protected: Update email preferences
   */
  updatePreferences: protectedProcedure
    .input(
      z.object({
        notifyMilestones: z.boolean().optional(),
        notifyCapitalCalls: z.boolean().optional(),
        notifyDistributions: z.boolean().optional(),
        notifyDocuments: z.boolean().optional(),
        notifyProjectUpdates: z.boolean().optional(),
        emailFrequency: z.enum(["immediate", "daily", "weekly", "monthly"]).optional(),
        allowMarketing: z.boolean().optional(),
        allowSMS: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.user) throw new Error("Unauthorized");

      const db = await getDb();
      if (!db) throw new Error("Database not available");

      try {
        const investor = await db
          .select()
          .from(investors)
          .where(eq(investors.userId, ctx.user.id))
          .limit(1);

        if (!investor || investor.length === 0) {
          throw new Error("No investor profile found");
        }

        const investorId = investor[0].id;

        const existingPrefs = await db
          .select()
          .from(emailPreferences)
          .where(eq(emailPreferences.investorId, investorId))
          .limit(1);

        if (existingPrefs.length === 0) {
          await db.insert(emailPreferences).values({
            investorId,
            notifyMilestones: input.notifyMilestones ?? true,
            notifyCapitalCalls: input.notifyCapitalCalls ?? true,
            notifyDistributions: input.notifyDistributions ?? true,
            notifyDocuments: input.notifyDocuments ?? true,
            notifyProjectUpdates: input.notifyProjectUpdates ?? true,
            emailFrequency: (input.emailFrequency ?? "immediate") as any,
            allowMarketing: input.allowMarketing ?? false,
            allowSMS: input.allowSMS ?? false,
          });
        } else {
          const updateData: any = {};
          if (input.notifyMilestones !== undefined)
            updateData.notifyMilestones = input.notifyMilestones;
          if (input.notifyCapitalCalls !== undefined)
            updateData.notifyCapitalCalls = input.notifyCapitalCalls;
          if (input.notifyDistributions !== undefined)
            updateData.notifyDistributions = input.notifyDistributions;
          if (input.notifyDocuments !== undefined)
            updateData.notifyDocuments = input.notifyDocuments;
          if (input.notifyProjectUpdates !== undefined)
            updateData.notifyProjectUpdates = input.notifyProjectUpdates;
          if (input.emailFrequency !== undefined)
            updateData.emailFrequency = input.emailFrequency;
          if (input.allowMarketing !== undefined)
            updateData.allowMarketing = input.allowMarketing;
          if (input.allowSMS !== undefined) updateData.allowSMS = input.allowSMS;

          await db
            .update(emailPreferences)
            .set(updateData)
            .where(eq(emailPreferences.investorId, investorId));
        }

        return { success: true, investorId };
      } catch (error) {
        console.error("[Preferences] Error updating preferences:", error);
        throw new Error("Failed to update preferences");
      }
    }),

  /**
   * Protected: Opt out of all notifications
   */
  optOutAll: protectedProcedure.mutation(async ({ ctx }) => {
    if (!ctx.user) throw new Error("Unauthorized");

    const db = await getDb();
    if (!db) throw new Error("Database not available");

    try {
      const investor = await db
        .select()
        .from(investors)
        .where(eq(investors.userId, ctx.user.id))
        .limit(1);

      if (!investor || investor.length === 0) {
        throw new Error("No investor profile found");
      }

      const investorId = investor[0].id;

      await db
        .update(emailPreferences)
        .set({
          notifyMilestones: false,
          notifyCapitalCalls: false,
          notifyDistributions: false,
          notifyDocuments: false,
          notifyProjectUpdates: false,
          allowMarketing: false,
          allowSMS: false,
        })
        .where(eq(emailPreferences.investorId, investorId));

      return { success: true };
    } catch (error) {
      console.error("[Preferences] Error opting out:", error);
      throw new Error("Failed to opt out");
    }
  }),

  /**
   * Protected: Opt in to all notifications
   */
  optInAll: protectedProcedure.mutation(async ({ ctx }) => {
    if (!ctx.user) throw new Error("Unauthorized");

    const db = await getDb();
    if (!db) throw new Error("Database not available");

    try {
      const investor = await db
        .select()
        .from(investors)
        .where(eq(investors.userId, ctx.user.id))
        .limit(1);

      if (!investor || investor.length === 0) {
        throw new Error("No investor profile found");
      }

      const investorId = investor[0].id;

      await db
        .update(emailPreferences)
        .set({
          notifyMilestones: true,
          notifyCapitalCalls: true,
          notifyDistributions: true,
          notifyDocuments: true,
          notifyProjectUpdates: true,
        })
        .where(eq(emailPreferences.investorId, investorId));

      return { success: true };
    } catch (error) {
      console.error("[Preferences] Error opting in:", error);
      throw new Error("Failed to opt in");
    }
  }),
});
