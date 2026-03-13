import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import {
  notifyCapitalCallSMS,
  notifyUrgentUpdateSMS,
  notifyDistributionSMS,
  notifyAlertSMS,
} from "../_core/smsService";

export const smsRouter = router({
  /**
   * Protected: Send SMS capital call alert
   */
  sendCapitalCallAlert: protectedProcedure
    .input(
      z.object({
        phoneNumber: z.string(),
        projectName: z.string(),
        capitalAmount: z.string(),
        dueDate: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await notifyCapitalCallSMS(
        input.phoneNumber,
        input.projectName,
        input.capitalAmount,
        input.dueDate
      );

      return { success };
    }),

  /**
   * Protected: Send SMS urgent update alert
   */
  sendUrgentUpdateAlert: protectedProcedure
    .input(
      z.object({
        phoneNumber: z.string(),
        projectName: z.string(),
        updateTitle: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await notifyUrgentUpdateSMS(
        input.phoneNumber,
        input.projectName,
        input.updateTitle
      );

      return { success };
    }),

  /**
   * Protected: Send SMS distribution notification
   */
  sendDistributionAlert: protectedProcedure
    .input(
      z.object({
        phoneNumber: z.string(),
        projectName: z.string(),
        distributionAmount: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await notifyDistributionSMS(
        input.phoneNumber,
        input.projectName,
        input.distributionAmount
      );

      return { success };
    }),

  /**
   * Protected: Send generic SMS alert
   */
  sendAlert: protectedProcedure
    .input(
      z.object({
        phoneNumber: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await notifyAlertSMS(input.phoneNumber, input.message);

      return { success };
    }),
});
