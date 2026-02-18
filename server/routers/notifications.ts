import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import {
  notifyProjectMilestone,
  notifyCapitalCall,
  notifyDistribution,
  notifyDocumentUpload,
  notifyInquiryAcknowledgment,
} from "../_core/emailService";

export const notificationsRouter = router({
  /**
   * Protected: Send project milestone notification (admin only)
   */
  sendMilestoneNotification: protectedProcedure
    .input(
      z.object({
        investorEmail: z.string().email(),
        projectName: z.string(),
        milestoneName: z.string(),
        completionDate: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await notifyProjectMilestone(
        input.investorEmail,
        input.projectName,
        input.milestoneName,
        input.completionDate
      );

      return { success };
    }),

  /**
   * Protected: Send capital call notification (admin only)
   */
  sendCapitalCallNotification: protectedProcedure
    .input(
      z.object({
        investorEmail: z.string().email(),
        projectName: z.string(),
        capitalAmount: z.string(),
        dueDate: z.string(),
        callPercentage: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await notifyCapitalCall(
        input.investorEmail,
        input.projectName,
        input.capitalAmount,
        input.dueDate,
        input.callPercentage
      );

      return { success };
    }),

  /**
   * Protected: Send distribution notification (admin only)
   */
  sendDistributionNotification: protectedProcedure
    .input(
      z.object({
        investorEmail: z.string().email(),
        projectName: z.string(),
        distributionAmount: z.string(),
        distributionDate: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await notifyDistribution(
        input.investorEmail,
        input.projectName,
        input.distributionAmount,
        input.distributionDate
      );

      return { success };
    }),

  /**
   * Protected: Send document upload notification (admin only)
   */
  sendDocumentNotification: protectedProcedure
    .input(
      z.object({
        investorEmail: z.string().email(),
        projectName: z.string(),
        documentTitle: z.string(),
        documentType: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await notifyDocumentUpload(
        input.investorEmail,
        input.projectName,
        input.documentTitle,
        input.documentType
      );

      return { success };
    }),

  /**
   * Public: Send inquiry acknowledgment
   */
  sendInquiryAcknowledgment: protectedProcedure
    .input(
      z.object({
        inquirerEmail: z.string().email(),
        inquirerName: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const success = await notifyInquiryAcknowledgment(
        input.inquirerEmail,
        input.inquirerName
      );

      return { success };
    }),
});
