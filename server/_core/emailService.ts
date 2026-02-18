/**
 * Email Notification Service
 * Handles transactional emails for project milestones, capital calls, and investor updates
 * Uses Manus built-in email API
 */

import { ENV } from "./env";

interface EmailPayload {
  to: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
}

interface EmailTemplate {
  type:
    | "project_milestone"
    | "capital_call"
    | "distribution"
    | "document_upload"
    | "investor_inquiry"
    | "project_update";
  data: Record<string, any>;
}

/**
 * Send transactional email via Manus API
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  try {
    const response = await fetch(
      `${ENV.forgeApiUrl}/v1/email/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ENV.forgeApiKey}`,
        },
        body: JSON.stringify({
          to: payload.to,
          subject: payload.subject,
          htmlContent: payload.htmlContent,
          textContent: payload.textContent,
          replyTo: payload.replyTo || "no-reply@guardiandevelopmentgroup.com",
          cc: payload.cc,
          bcc: payload.bcc,
        }),
      }
    );

    if (!response.ok) {
      console.error(
        `[Email Service] Failed to send email: ${response.status} ${response.statusText}`
      );
      return false;
    }

    console.log(`[Email Service] Email sent successfully to ${payload.to}`);
    return true;
  } catch (error) {
    console.error("[Email Service] Error sending email:", error);
    return false;
  }
}

/**
 * Project Milestone Notification
 */
export async function notifyProjectMilestone(
  investorEmail: string,
  projectName: string,
  milestoneName: string,
  completionDate: string
): Promise<boolean> {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Project Milestone Completed</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 40px; border-radius: 0 0 8px 8px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Dear Investor,
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          We are pleased to inform you that a significant milestone has been reached on your investment:
        </p>
        
        <div style="background: white; border-left: 4px solid #c9a961; padding: 20px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; color: #666; font-size: 14px;">Project</p>
          <p style="margin: 0; color: #1a3a52; font-size: 18px; font-weight: bold;">${projectName}</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Milestone</p>
          <p style="margin: 0; color: #1a3a52; font-size: 18px; font-weight: bold;">${milestoneName}</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Completion Date</p>
          <p style="margin: 0; color: #1a3a52; font-size: 18px; font-weight: bold;">${completionDate}</p>
        </div>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          For detailed project updates and financial performance metrics, please log into your investor dashboard.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://guardiandevelopmentgroup.com/investor-dashboard" 
             style="background: #c9a961; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            View Dashboard
          </a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        
        <p style="color: #666; font-size: 12px; line-height: 1.6;">
          This is an automated notification from Guardian Development Group. Please do not reply to this email.
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: investorEmail,
    subject: `${projectName} - ${milestoneName} Completed`,
    htmlContent,
    textContent: `Project milestone completed: ${projectName} - ${milestoneName} on ${completionDate}`,
  });
}

/**
 * Capital Call Notification
 */
export async function notifyCapitalCall(
  investorEmail: string,
  projectName: string,
  capitalAmount: string,
  dueDate: string,
  callPercentage: string
): Promise<boolean> {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Capital Call Notice</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 40px; border-radius: 0 0 8px 8px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Dear Investor,
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          A capital call has been issued for your investment. Please review the details below:
        </p>
        
        <div style="background: white; border-left: 4px solid #c9a961; padding: 20px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; color: #666; font-size: 14px;">Project</p>
          <p style="margin: 0; color: #1a3a52; font-size: 18px; font-weight: bold;">${projectName}</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Capital Amount</p>
          <p style="margin: 0; color: #c9a961; font-size: 24px; font-weight: bold;">${capitalAmount}</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Call Percentage</p>
          <p style="margin: 0; color: #1a3a52; font-size: 16px;">${callPercentage} of committed capital</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Due Date</p>
          <p style="margin: 0; color: #d9534f; font-size: 18px; font-weight: bold;">${dueDate}</p>
        </div>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Please ensure funds are transferred by the due date. Wire instructions and additional details are available in your investor dashboard.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://guardiandevelopmentgroup.com/investor-dashboard" 
             style="background: #c9a961; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            View Capital Call Details
          </a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        
        <p style="color: #666; font-size: 12px; line-height: 1.6;">
          This is an automated notification from Guardian Development Group. Please do not reply to this email.
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: investorEmail,
    subject: `Capital Call - ${projectName}`,
    htmlContent,
    textContent: `Capital call issued: ${capitalAmount} due by ${dueDate}`,
  });
}

/**
 * Distribution Notification
 */
export async function notifyDistribution(
  investorEmail: string,
  projectName: string,
  distributionAmount: string,
  distributionDate: string
): Promise<boolean> {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Distribution Received</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 40px; border-radius: 0 0 8px 8px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Dear Investor,
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          A distribution has been processed for your investment:
        </p>
        
        <div style="background: white; border-left: 4px solid #5cb85c; padding: 20px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; color: #666; font-size: 14px;">Project</p>
          <p style="margin: 0; color: #1a3a52; font-size: 18px; font-weight: bold;">${projectName}</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Distribution Amount</p>
          <p style="margin: 0; color: #5cb85c; font-size: 24px; font-weight: bold;">${distributionAmount}</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Distribution Date</p>
          <p style="margin: 0; color: #1a3a52; font-size: 16px;">${distributionDate}</p>
        </div>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          The funds have been transferred to your designated account. Please allow 2-3 business days for the transfer to appear in your account.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://guardiandevelopmentgroup.com/investor-dashboard" 
             style="background: #c9a961; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            View Transaction Details
          </a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        
        <p style="color: #666; font-size: 12px; line-height: 1.6;">
          This is an automated notification from Guardian Development Group. Please do not reply to this email.
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: investorEmail,
    subject: `Distribution - ${projectName}`,
    htmlContent,
    textContent: `Distribution received: ${distributionAmount} on ${distributionDate}`,
  });
}

/**
 * Document Upload Notification
 */
export async function notifyDocumentUpload(
  investorEmail: string,
  projectName: string,
  documentTitle: string,
  documentType: string
): Promise<boolean> {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">New Document Available</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 40px; border-radius: 0 0 8px 8px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Dear Investor,
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          A new document has been uploaded to your project:
        </p>
        
        <div style="background: white; border-left: 4px solid #c9a961; padding: 20px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0; color: #666; font-size: 14px;">Project</p>
          <p style="margin: 0; color: #1a3a52; font-size: 18px; font-weight: bold;">${projectName}</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Document</p>
          <p style="margin: 0; color: #1a3a52; font-size: 16px; font-weight: bold;">${documentTitle}</p>
          
          <p style="margin: 15px 0 0 0; color: #666; font-size: 14px;">Type</p>
          <p style="margin: 0; color: #1a3a52; font-size: 14px;">${documentType}</p>
        </div>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Log in to your investor dashboard to download and review the document.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://guardiandevelopmentgroup.com/investor-dashboard" 
             style="background: #c9a961; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            View Document
          </a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        
        <p style="color: #666; font-size: 12px; line-height: 1.6;">
          This is an automated notification from Guardian Development Group. Please do not reply to this email.
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: investorEmail,
    subject: `New Document: ${documentTitle} - ${projectName}`,
    htmlContent,
    textContent: `New document available: ${documentTitle} for ${projectName}`,
  });
}

/**
 * Investor Inquiry Acknowledgment
 */
export async function notifyInquiryAcknowledgment(
  inquirerEmail: string,
  inquirerName: string
): Promise<boolean> {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%); color: white; padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Thank You for Your Interest</h1>
      </div>
      
      <div style="background: #f8f9fa; padding: 40px; border-radius: 0 0 8px 8px;">
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Dear ${inquirerName},
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Thank you for your inquiry regarding Guardian Development Group. We have received your message and appreciate your interest in our platform.
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          Our team will review your inquiry and contact you within 2-3 business days with more information and next steps.
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6;">
          In the meantime, feel free to explore our investor portal to learn more about our current projects and investment opportunities.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://guardiandevelopmentgroup.com/investor-portal" 
             style="background: #c9a961; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            Explore Opportunities
          </a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        
        <p style="color: #666; font-size: 12px; line-height: 1.6;">
          Guardian Development Group | Aurora, OH | https://guardiandevelopmentgroup.com
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: inquirerEmail,
    subject: "Thank You for Your Interest - Guardian Development Group",
    htmlContent,
    textContent: `Thank you for your inquiry. We will contact you shortly.`,
  });
}
