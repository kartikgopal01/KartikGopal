# EmailJS Setup Guide for Contact Form

This guide explains how to configure EmailJS to make the contact form in the portfolio functional.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which is usually sufficient for a portfolio site

## Step 2: Create an Email Service

1. After signing in, go to the "Email Services" tab
2. Click on "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Give your service a name (e.g., "Portfolio Contact")
6. Note down the Service ID for later use

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click on "Create New Template"
3. Design your email template using the following variables:
   - `{{user_name}}`: Sender's name
   - `{{user_email}}`: Sender's email
   - `{{subject}}`: Email subject
   - `{{message}}`: Email message
4. Save the template and note down the Template ID

Here's a sample template:

**Subject line:**
```
New Contact Form Submission: {{subject}}
```

**Email body:**
```html
<h2>New Message from Portfolio Contact Form</h2>
<p><strong>From:</strong> {{user_name}} ({{user_email}})</p>
<p><strong>Subject:</strong> {{subject}}</p>
<h3>Message:</h3>
<p>{{message}}</p>
```

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your Public Key

## Step 5: Update Your Code

Open the `src/components/ContactSection.js` file and replace the placeholder values with your actual EmailJS credentials:

```javascript
const serviceId = 'YOUR_EMAILJS_SERVICE_ID';  // Replace with your Service ID
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';  // Replace with your Public Key
```

## Testing

After setting up EmailJS:
1. Start your React app with `npm start`
2. Navigate to the contact section
3. Fill out the form and submit
4. You should receive an email to the address you configured in your EmailJS service

## Troubleshooting

- If emails aren't being received, check your spam folder
- Verify that all IDs are correct in your code
- Check the EmailJS dashboard for any error logs
- Ensure your email service is properly connected

For more information, visit the [EmailJS documentation](https://www.emailjs.com/docs/). 