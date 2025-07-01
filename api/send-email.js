/**
 * Serverless Function for Email Sending
 * Deploy this to Vercel or Netlify for server-side email handling
 * 
 * For Vercel: Place in /api/send-email.js
 * For Netlify: Place in /functions/send-email.js
 */

import { generateContactEmail, generateContactEmailText, emailConfig } from '../src/utils/emailTemplate.js';

// Email service configuration
const EMAIL_CONFIG = {
  // Choose your email service
  service: 'sendgrid', // 'sendgrid', 'mailgun', 'nodemailer'
  
  // SendGrid configuration
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
    fromEmail: 'noreply@vasista.com',
    fromName: 'Vasista Contact Form',
    toEmail: 'info@vasista.com',
  },
  
  // Mailgun configuration
  mailgun: {
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    fromEmail: 'noreply@vasista.com',
    fromName: 'Vasista Contact Form',
    toEmail: 'info@vasista.com',
  },
  
  // Nodemailer configuration (for Gmail, Outlook, etc.)
  nodemailer: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    fromEmail: 'noreply@vasista.com',
    fromName: 'Vasista Contact Form',
    toEmail: 'info@vasista.com',
  },
};

/**
 * Send email via SendGrid
 */
async function sendViaSendGrid(formData) {
  const { apiKey, fromEmail, fromName, toEmail } = EMAIL_CONFIG.sendgrid;
  
  if (!apiKey) {
    throw new Error('SendGrid API key not configured');
  }

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
      from: { email: fromEmail, name: fromName },
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
    const error = await response.text();
    throw new Error(`SendGrid API error: ${response.status} - ${error}`);
  }

  return { success: true };
}

/**
 * Send email via Mailgun
 */
async function sendViaMailgun(formData) {
  const { apiKey, domain, fromEmail, fromName, toEmail } = EMAIL_CONFIG.mailgun;
  
  if (!apiKey || !domain) {
    throw new Error('Mailgun API key or domain not configured');
  }

  const emailHTML = generateContactEmail(formData);
  const emailText = generateContactEmailText(formData);
  const subject = emailConfig.subject(formData);

  const formDataToSend = new FormData();
  formDataToSend.append('from', `${fromName} <${fromEmail}>`);
  formDataToSend.append('to', toEmail);
  formDataToSend.append('reply-to', formData.email);
  formDataToSend.append('subject', subject);
  formDataToSend.append('html', emailHTML);
  formDataToSend.append('text', emailText);

  const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
    },
    body: formDataToSend,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Mailgun API error: ${response.status} - ${error}`);
  }

  return { success: true };
}

/**
 * Send email via Nodemailer
 */
async function sendViaNodemailer(formData) {
  const { host, port, secure, auth, fromEmail, fromName, toEmail } = EMAIL_CONFIG.nodemailer;
  
  if (!host || !auth.user || !auth.pass) {
    throw new Error('SMTP configuration not complete');
  }

  // Note: You'll need to install nodemailer: npm install nodemailer
  const nodemailer = require('nodemailer');
  
  const transporter = nodemailer.createTransporter({
    host,
    port,
    secure,
    auth,
  });

  const emailHTML = generateContactEmail(formData);
  const emailText = generateContactEmailText(formData);
  const subject = emailConfig.subject(formData);

  const mailOptions = {
    from: `${fromName} <${fromEmail}>`,
    to: toEmail,
    replyTo: formData.email,
    subject,
    html: emailHTML,
    text: emailText,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}

/**
 * Main handler function
 */
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { formData } = req.body;

    // Validate required fields
    if (!formData || !formData.name || !formData.email || !formData.subject || !formData.message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, subject, message'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    let result;

    // Send email based on configured service
    switch (EMAIL_CONFIG.service) {
      case 'sendgrid':
        result = await sendViaSendGrid(formData);
        break;
      case 'mailgun':
        result = await sendViaMailgun(formData);
        break;
      case 'nodemailer':
        result = await sendViaNodemailer(formData);
        break;
      default:
        throw new Error(`Unsupported email service: ${EMAIL_CONFIG.service}`);
    }

    // Log successful submission
    console.log('Email sent successfully:', {
      from: formData.email,
      subject: formData.subject,
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Email sending error:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
}

// For Netlify Functions
export const handler = async (event, context) => {
  // Parse the request body
  const body = JSON.parse(event.body || '{}');
  
  // Create a mock response object
  const res = {
    status: (code) => ({
      json: (data) => ({
        statusCode: code,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(data),
      }),
    }),
    setHeader: () => {}, // No-op for Netlify
  };

  // Call the main handler
  return await handler({ method: event.httpMethod, body }, res);
}; 