/**
 * Email Template Generator for Contact Form Submissions
 * Generates professional HTML emails with inline CSS for maximum compatibility
 */

export const generateContactEmail = (formData) => {
  const {
    name,
    email,
    phone,
    subject,
    projectType,
    budget,
    message
  } = formData;

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Vasista</title>
    <style>
        /* Reset styles for email clients */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        /* Responsive design */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                padding: 20px !important;
            }
            .header-content {
                padding: 20px !important;
            }
            .content-section {
                padding: 30px 20px !important;
            }
            .footer-content {
                padding: 20px !important;
            }
            .field-row {
                display: block !important;
                width: 100% !important;
                margin-bottom: 15px !important;
            }
            .field-label {
                display: block !important;
                width: 100% !important;
                margin-bottom: 5px !important;
            }
            .field-value {
                display: block !important;
                width: 100% !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333;">
    <!-- Email Container -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <!-- Main Email Content -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" class="email-container" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td class="header-content" style="background: linear-gradient(135deg, #174c3c 0%, #2d3a1a 100%); padding: 40px 30px; text-align: center;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Vasista</h1>
                                        <p style="margin: 10px 0 0 0; color: #f7c948; font-size: 16px; font-weight: 500;">Interior Design & Renovation</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td class="content-section" style="padding: 40px 30px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 20px 0; color: #174c3c; font-size: 24px; font-weight: 600;">New Contact Form Submission</h2>
                                        <p style="margin: 0 0 30px 0; color: #666; font-size: 16px;">You have received a new contact form submission from your website. Here are the details:</p>
                                        
                                        <!-- Submission Details -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #fdf8ee; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
                                            <tr>
                                                <td>
                                                    <h3 style="margin: 0 0 20px 0; color: #174c3c; font-size: 18px; font-weight: 600;">Contact Information</h3>
                                                    
                                                    <!-- Name -->
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="field-row" style="margin-bottom: 15px;">
                                                        <tr>
                                                            <td class="field-label" style="width: 120px; padding-right: 15px; vertical-align: top;">
                                                                <strong style="color: #174c3c; font-size: 14px;">Name:</strong>
                                                            </td>
                                                            <td class="field-value" style="vertical-align: top;">
                                                                <span style="color: #333; font-size: 14px;">${name}</span>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <!-- Email -->
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="field-row" style="margin-bottom: 15px;">
                                                        <tr>
                                                            <td class="field-label" style="width: 120px; padding-right: 15px; vertical-align: top;">
                                                                <strong style="color: #174c3c; font-size: 14px;">Email:</strong>
                                                            </td>
                                                            <td class="field-value" style="vertical-align: top;">
                                                                <a href="mailto:${email}" style="color: #f7c948; font-size: 14px; text-decoration: none;">${email}</a>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    ${phone ? `
                                                    <!-- Phone -->
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="field-row" style="margin-bottom: 15px;">
                                                        <tr>
                                                            <td class="field-label" style="width: 120px; padding-right: 15px; vertical-align: top;">
                                                                <strong style="color: #174c3c; font-size: 14px;">Phone:</strong>
                                                            </td>
                                                            <td class="field-value" style="vertical-align: top;">
                                                                <a href="tel:${phone}" style="color: #f7c948; font-size: 14px; text-decoration: none;">${phone}</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    ` : ''}

                                                    <!-- Subject -->
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="field-row" style="margin-bottom: 15px;">
                                                        <tr>
                                                            <td class="field-label" style="width: 120px; padding-right: 15px; vertical-align: top;">
                                                                <strong style="color: #174c3c; font-size: 14px;">Subject:</strong>
                                                            </td>
                                                            <td class="field-value" style="vertical-align: top;">
                                                                <span style="color: #333; font-size: 14px;">${subject}</span>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    ${projectType ? `
                                                    <!-- Project Type -->
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="field-row" style="margin-bottom: 15px;">
                                                        <tr>
                                                            <td class="field-label" style="width: 120px; padding-right: 15px; vertical-align: top;">
                                                                <strong style="color: #174c3c; font-size: 14px;">Project Type:</strong>
                                                            </td>
                                                            <td class="field-value" style="vertical-align: top;">
                                                                <span style="color: #333; font-size: 14px;">${projectType}</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    ` : ''}

                                                    ${budget ? `
                                                    <!-- Budget -->
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="field-row" style="margin-bottom: 15px;">
                                                        <tr>
                                                            <td class="field-label" style="width: 120px; padding-right: 15px; vertical-align: top;">
                                                                <strong style="color: #174c3c; font-size: 14px;">Budget Range:</strong>
                                                            </td>
                                                            <td class="field-value" style="vertical-align: top;">
                                                                <span style="color: #333; font-size: 14px;">${budget}</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    ` : ''}

                                                    <!-- Message -->
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="field-row" style="margin-bottom: 15px;">
                                                        <tr>
                                                            <td class="field-label" style="width: 120px; padding-right: 15px; vertical-align: top;">
                                                                <strong style="color: #174c3c; font-size: 14px;">Message:</strong>
                                                            </td>
                                                            <td class="field-value" style="vertical-align: top;">
                                                                <div style="color: #333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                    <!-- Submission Time -->
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="field-row">
                                                        <tr>
                                                            <td class="field-label" style="width: 120px; padding-right: 15px; vertical-align: top;">
                                                                <strong style="color: #174c3c; font-size: 14px;">Submitted:</strong>
                                                            </td>
                                                            <td class="field-value" style="vertical-align: top;">
                                                                <span style="color: #666; font-size: 14px;">${currentDate}</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Action Buttons -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="text-align: center;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="display: inline-block;">
                                                        <tr>
                                                            <td style="background: linear-gradient(135deg, #f7c948, #ffe066); border-radius: 8px; padding: 12px 24px;">
                                                                <a href="mailto:${email}?subject=Re: ${subject}" style="color: #2d3a1a; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-block;">Reply to ${name}</a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="footer-content" style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">
                                            <strong>Vasista</strong> - Interior Design & Renovation
                                        </p>
                                        <p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">
                                            📧 <a href="mailto:info@vasista.com" style="color: #f7c948; text-decoration: none;">info@vasista.com</a> | 
                                            📞 <a href="tel:+15551234567" style="color: #f7c948; text-decoration: none;">+1 (555) 123-4567</a>
                                        </p>
                                        <p style="margin: 0; color: #999; font-size: 12px;">
                                            This email was sent from your website contact form. Please respond within 24 hours for the best customer experience.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;

  return emailHTML;
};

/**
 * Generate a plain text version of the email for fallback
 */
export const generateContactEmailText = (formData) => {
  const {
    name,
    email,
    phone,
    subject,
    projectType,
    budget,
    message
  } = formData;

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
NEW CONTACT FORM SUBMISSION - Vasista
=====================================

Contact Information:
-------------------
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Subject: ${subject}
${projectType ? `Project Type: ${projectType}` : ''}
${budget ? `Budget Range: ${budget}` : ''}

Message:
--------
${message}

Submitted: ${currentDate}

---
Vasista - Interior Design & Renovation
Email: info@vasista.com
Phone: +1 (555) 123-4567

This email was sent from your website contact form. Please respond within 24 hours for the best customer experience.
  `.trim();
};

/**
 * Email configuration for different email services
 */
export const emailConfig = {
  // For use with email services like SendGrid, Mailgun, etc.
  subject: (formData) => `New Contact Form Submission - ${formData.subject}`,
  
  // Email headers
  headers: {
    'Content-Type': 'text/html; charset=UTF-8',
    'X-Priority': '1',
    'X-MSMail-Priority': 'High',
    'Importance': 'high'
  }
}; 