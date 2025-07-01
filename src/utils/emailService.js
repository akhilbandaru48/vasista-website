/**
 * Email Service Utility
 * Handles sending emails through different providers (SendGrid, Mailgun, etc.)
 */

import { generateContactEmail, generateContactEmailText, emailConfig } from './emailTemplate.js';

/**
 * Send email using SendGrid (most common)
 */
export const sendEmailViaSendGrid = async (formData, apiKey, toEmail) => {
  try {
    const emailHTML = generateContactEmail(formData);
    const emailText = generateContactEmailText(formData);
    const subject = emailConfig.subject(formData);

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: toEmail }],
            subject: subject,
          },
        ],
        from: { email: 'noreply@vasista.com', name: 'Vasista Contact Form' },
        reply_to: { email: formData.email, name: formData.name },
        content: [
          {
            type: 'text/html',
            value: emailHTML,
          },
          {
            type: 'text/plain',
            value: emailText,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`SendGrid API error: ${response.status}`);
    }

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('SendGrid email error:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Send email using Mailgun
 */
export const sendEmailViaMailgun = async (formData, apiKey, domain, toEmail) => {
  try {
    const emailHTML = generateContactEmail(formData);
    const emailText = generateContactEmailText(formData);
    const subject = emailConfig.subject(formData);

    const formDataToSend = new FormData();
    formDataToSend.append('from', 'Vasista Contact Form <noreply@vasista.com>');
    formDataToSend.append('to', toEmail);
    formDataToSend.append('reply-to', formData.email);
    formDataToSend.append('subject', subject);
    formDataToSend.append('html', emailHTML);
    formDataToSend.append('text', emailText);

    const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${apiKey}`)}`,
      },
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error(`Mailgun API error: ${response.status}`);
    }

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Mailgun email error:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Send email using EmailJS (client-side email service)
 */
export const sendEmailViaEmailJS = async (formData, serviceId, templateId, userId) => {
  try {
    // Note: This requires EmailJS to be loaded in the HTML
    if (typeof window !== 'undefined' && window.emailjs) {
      const templateParams = {
        to_email: 'info@vasista.com', // Your business email
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        phone: formData.phone || 'Not provided',
        project_type: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
      };

      const response = await window.emailjs.send(serviceId, templateId, templateParams, userId);
      return { success: true, message: 'Email sent successfully' };
    } else {
      throw new Error('EmailJS not loaded');
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Send email using a simple serverless function (Vercel, Netlify, etc.)
 */
export const sendEmailViaServerless = async (formData, endpoint) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Serverless function error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Serverless email error:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Fallback email method using mailto link (for development/testing)
 */
export const sendEmailViaMailto = (formData) => {
  try {
    const subject = encodeURIComponent(emailConfig.subject(formData));
    const body = encodeURIComponent(generateContactEmailText(formData));
    const mailtoLink = `mailto:info@vasista.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    return { success: true, message: 'Email client opened' };
  } catch (error) {
    console.error('Mailto error:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Main email sending function that tries different methods
 */
export const sendContactEmail = async (formData, options = {}) => {
  const {
    method = 'sendgrid', // 'sendgrid', 'mailgun', 'emailjs', 'serverless', 'mailto'
    apiKey,
    toEmail = 'info@vasista.com',
    domain, // for Mailgun
    serviceId, // for EmailJS
    templateId, // for EmailJS
    userId, // for EmailJS
    endpoint, // for serverless
  } = options;

  try {
    let result;

    switch (method.toLowerCase()) {
      case 'sendgrid':
        if (!apiKey) {
          throw new Error('SendGrid API key is required');
        }
        result = await sendEmailViaSendGrid(formData, apiKey, toEmail);
        break;

      case 'mailgun':
        if (!apiKey || !domain) {
          throw new Error('Mailgun API key and domain are required');
        }
        result = await sendEmailViaMailgun(formData, apiKey, domain, toEmail);
        break;

      case 'emailjs':
        if (!serviceId || !templateId || !userId) {
          throw new Error('EmailJS service ID, template ID, and user ID are required');
        }
        result = await sendEmailViaEmailJS(formData, serviceId, templateId, userId);
        break;

      case 'serverless':
        if (!endpoint) {
          throw new Error('Serverless endpoint is required');
        }
        result = await sendEmailViaServerless(formData, endpoint);
        break;

      case 'mailto':
        result = sendEmailViaMailto(formData);
        break;

      default:
        throw new Error(`Unsupported email method: ${method}`);
    }

    return result;
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Configuration helper for different email providers
 */
export const emailProviderConfig = {
  sendgrid: {
    name: 'SendGrid',
    setup: 'Get API key from SendGrid dashboard',
    envVars: ['SENDGRID_API_KEY'],
  },
  mailgun: {
    name: 'Mailgun',
    setup: 'Get API key and domain from Mailgun dashboard',
    envVars: ['MAILGUN_API_KEY', 'MAILGUN_DOMAIN'],
  },
  emailjs: {
    name: 'EmailJS',
    setup: 'Create account and get service ID, template ID, and user ID',
    envVars: ['EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', 'EMAILJS_USER_ID'],
  },
  serverless: {
    name: 'Serverless Function',
    setup: 'Deploy email function to Vercel/Netlify',
    envVars: ['EMAIL_ENDPOINT'],
  },
}; 