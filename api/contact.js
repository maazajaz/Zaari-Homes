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

    // Use Web3Forms (free service)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    // Debug logging
    console.log('Environment variable present:', !!web3formsKey);
    
    if (!web3formsKey) {
      console.error('WEB3FORMS_ACCESS_KEY not found in environment variables');
      return res.status(500).json({ 
        success: false, 
        message: 'Email service is not configured. Please contact us directly at zaarihomes@gmail.com' 
      });
    }

    // Send email via Web3Forms
    const formData = new URLSearchParams();
    formData.append('access_key', web3formsKey);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone || 'Not provided');
    formData.append('subject', `Zaari Homes Contact: ${subject}`);
    formData.append('message', message);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    // Check if response is ok
    if (!response.ok) {
      console.error('Web3Forms response not OK:', response.status, response.statusText);
      throw new Error(`Web3Forms API returned status ${response.status}`);
    }

    // Get response text first
    const responseText = await response.text();
    
    // Try to parse JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Web3Forms response:', responseText);
      throw new Error('Invalid response from email service');
    }

    if (data.success) {
      return res.status(200).json({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully. We will contact you within 24 hours.' 
      });
    } else {
      console.error('Web3Forms returned error:', data);
      throw new Error(data.message || 'Failed to send email');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again or contact us directly at zaarihomes@gmail.com' 
    });
  }
}
