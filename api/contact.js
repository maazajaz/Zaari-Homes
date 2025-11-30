// Vercel Serverless Function for Contact Form
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Prepare email content
    const emailContent = {
      to: 'zaarihomes@gmail.com',
      from: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
This email was sent from the Zaari Homes contact form.
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0284c7; }
    .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #0ea5e9; }
    .message-box { background: white; padding: 15px; margin-top: 10px; border-radius: 6px; border: 1px solid #e5e7eb; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🏠 Zaari Homes</h1>
      <p>New Contact Form Submission</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">👤 Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">📧 Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">📱 Phone:</div>
        <div class="value">${phone || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">📝 Subject:</div>
        <div class="value">${subject}</div>
      </div>
      <div class="field">
        <div class="label">💬 Message:</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      <p>This email was sent from the Zaari Homes contact form at www.zaarihomes.com</p>
    </div>
  </div>
</body>
</html>
      `
    };

    // Use Web3Forms (free service)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (web3formsKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: name,
          email: email,
          phone: phone || 'Not provided',
          subject: `Zaari Homes Contact: ${subject}`,
          message: message,
          from_name: 'Zaari Homes Website',
          replyto: email,
        })
      });

      const data = await response.json();

      if (data.success) {
        return res.status(200).json({ 
          success: true, 
          message: 'Thank you! Your message has been sent successfully. We will contact you within 24 hours.' 
        });
      } else {
        throw new Error(data.message || 'Failed to send email via Web3Forms');
      }
    }

    // Fallback: Log the submission (for testing without API key)
    console.log('Contact form submission:', emailContent);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Message received! We will get back to you soon.',
      note: 'Email service not configured. Please add WEB3FORMS_ACCESS_KEY to environment variables.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again or contact us directly at zaarihomes@gmail.com' 
    });
  }
}
