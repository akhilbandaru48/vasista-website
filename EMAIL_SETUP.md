# Email System Setup Guide

This guide will help you set up the professional email system for your Vasista contact form.

## 🎯 Overview

The contact form now includes:
- ✅ **Improved CSS** with modern design, better spacing, and responsive layout
- ✅ **Professional Email Templates** with inline CSS for maximum compatibility
- ✅ **Multiple Email Service Options** (SendGrid, Mailgun, EmailJS, Serverless)
- ✅ **Fallback Methods** for development and testing

## 📧 Email Service Options

### Option 1: SendGrid (Recommended)

**Pros:** Reliable, great deliverability, free tier available
**Setup Time:** 5-10 minutes

1. **Create SendGrid Account**
   - Go to [sendgrid.com](https://sendgrid.com)
   - Sign up for a free account (100 emails/day free)

2. **Get API Key**
   - Go to Settings → API Keys
   - Create a new API key with "Mail Send" permissions
   - Copy the API key

3. **Configure Environment Variables**
   ```bash
   # Create .env.local file in your project root
   REACT_APP_SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```

4. **Update ContactForm Component**
   ```javascript
   const emailOptions = {
     method: 'sendgrid',
     apiKey: process.env.REACT_APP_SENDGRID_API_KEY,
     toEmail: 'info@vasista.com', // Your business email
   };
   ```

### Option 2: Mailgun

**Pros:** Good deliverability, developer-friendly
**Setup Time:** 10-15 minutes

1. **Create Mailgun Account**
   - Go to [mailgun.com](https://mailgun.com)
   - Sign up and verify your domain

2. **Get API Key and Domain**
   - Go to Settings → API Keys
   - Copy your API key and domain

3. **Configure Environment Variables**
   ```bash
   REACT_APP_MAILGUN_API_KEY=your_mailgun_api_key_here
   REACT_APP_MAILGUN_DOMAIN=your_domain.mailgun.org
   ```

4. **Update ContactForm Component**
   ```javascript
   const emailOptions = {
     method: 'mailgun',
     apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
     domain: process.env.REACT_APP_MAILGUN_DOMAIN,
     toEmail: 'info@vasista.com',
   };
   ```

### Option 3: EmailJS (Client-side)

**Pros:** No server required, easy setup
**Setup Time:** 5-10 minutes

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://emailjs.com)
   - Sign up for a free account

2. **Create Email Service**
   - Go to Email Services
   - Add Gmail, Outlook, or other email service
   - Copy the Service ID

3. **Create Email Template**
   - Go to Email Templates
   - Create a new template with variables:
     - `{{to_email}}`
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{subject}}`
     - `{{message}}`
     - `{{phone}}`
     - `{{project_type}}`
     - `{{budget}}`
   - Copy the Template ID

4. **Get User ID**
   - Go to Account → API Keys
   - Copy your Public Key (User ID)

5. **Add EmailJS to HTML**
   ```html
   <!-- Add to index.html -->
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script type="text/javascript">
     (function() {
       emailjs.init("YOUR_USER_ID");
     })();
   </script>
   ```

6. **Configure Environment Variables**
   ```bash
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_USER_ID=your_user_id
   ```

7. **Update ContactForm Component**
   ```javascript
   const emailOptions = {
     method: 'emailjs',
     serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
     templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
     userId: process.env.REACT_APP_EMAILJS_USER_ID,
   };
   ```

### Option 4: Serverless Function (Vercel/Netlify)

**Pros:** Full control, no client-side API keys
**Setup Time:** 15-20 minutes

1. **Deploy Serverless Function**
   - Copy `api/send-email.js` to your project
   - For Vercel: Place in `/api/send-email.js`
   - For Netlify: Place in `/functions/send-email.js`

2. **Configure Environment Variables**
   ```bash
   # For SendGrid
   SENDGRID_API_KEY=your_sendgrid_api_key
   
   # For Mailgun
   MAILGUN_API_KEY=your_mailgun_api_key
   MAILGUN_DOMAIN=your_domain.mailgun.org
   
   # For SMTP (Gmail, Outlook, etc.)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

3. **Update ContactForm Component**
   ```javascript
   const emailOptions = {
     method: 'serverless',
     endpoint: '/api/send-email', // or your deployed function URL
   };
   ```

### Option 5: Mailto Fallback (Development)

**Pros:** No setup required, works immediately
**Cons:** Opens user's email client

```javascript
const emailOptions = {
  method: 'mailto',
};
```

## 🎨 Email Template Features

The email template includes:

- **Professional Design** with Vasista branding
- **Responsive Layout** that works on all devices
- **Inline CSS** for maximum email client compatibility
- **All Form Fields** including optional ones
- **Clickable Reply Button** for easy response
- **Business Information** in footer
- **Plain Text Fallback** for accessibility

### Email Template Structure

```
┌─────────────────────────────────────┐
│           Vasista Header            │
├─────────────────────────────────────┤
│     New Contact Form Submission     │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │      Contact Information        │ │
│ │  • Name: Aarav Singh               │ │
│ │  • Email: aarav@example.com      │ │
│ │  • Phone: +1 (555) 123-4567     │ │
│ │  • Subject: Project Consultation │ │
│ │  • Project Type: Kitchen Remodel │ │
│ │  • Budget: $25,000 - $50,000    │ │
│ │  • Message: [User's message]    │ │
│ └─────────────────────────────────┘ │
│                                     │
│        [Reply Button]               │
├─────────────────────────────────────┤
│           Footer Info               │
└─────────────────────────────────────┘
```

## 🚀 Quick Start

1. **Choose your email service** from the options above
2. **Follow the setup instructions** for your chosen service
3. **Update the ContactForm component** with your configuration
4. **Test the form** by submitting a test message
5. **Check your email** to see the professional template

## 🔧 Customization

### Modify Email Template

Edit `src/utils/emailTemplate.js` to customize:
- Colors and branding
- Layout and spacing
- Content and messaging
- Footer information

### Modify Form Styling

Edit `src/components/ui/ContactForm/ContactForm.module.css` to customize:
- Form appearance
- Input styling
- Button design
- Responsive behavior

### Add New Fields

1. Add field to form data in `ContactForm.jsx`
2. Add field to email template in `emailTemplate.js`
3. Update validation if needed

## 🛠 Troubleshooting

### Common Issues

**Email not sending:**
- Check API keys and configuration
- Verify environment variables are loaded
- Check browser console for errors
- Test with mailto fallback first

**Email template not displaying correctly:**
- Email clients have limited CSS support
- Use inline CSS (already implemented)
- Test in multiple email clients

**Form validation errors:**
- Check required field validation
- Verify email format validation
- Ensure all required fields are filled

### Testing

1. **Development Testing:**
   ```javascript
   // Use mailto method for quick testing
   const emailOptions = { method: 'mailto' };
   ```

2. **Production Testing:**
   - Submit test form with real data
   - Check email delivery and formatting
   - Test reply functionality

## 📱 Mobile Optimization

The email template is fully responsive and includes:
- Mobile-specific CSS media queries
- Optimized layout for small screens
- Touch-friendly button sizes
- Readable font sizes

## 🔒 Security Considerations

- **Never expose API keys** in client-side code
- **Use environment variables** for sensitive data
- **Validate form data** on both client and server
- **Implement rate limiting** for production use
- **Use HTTPS** for all API calls

## 📞 Support

If you need help setting up the email system:

1. Check the troubleshooting section above
2. Verify your email service configuration
3. Test with the mailto fallback method
4. Review the console for error messages

## 🎉 Success!

Once configured, your contact form will:
- ✅ Send professional HTML emails
- ✅ Include all form data in a clean layout
- ✅ Work across all major email clients
- ✅ Be fully responsive on mobile devices
- ✅ Provide excellent user experience

Your Vasista contact form is now ready to impress clients with professional communication! 