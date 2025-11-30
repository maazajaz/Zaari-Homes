# Contact Form Email Setup Guide

## Getting Your Free Email API Key

To make the contact form send real emails to zaarihomes@gmail.com, follow these steps:

### Option 1: Web3Forms (Recommended - Free & Easy)

1. **Visit Web3Forms**: Go to https://web3forms.com/
2. **Sign Up**: Click "Get Started" and enter your email (zaarihomes@gmail.com)
3. **Verify Email**: Check your inbox and verify your email
4. **Get Access Key**: Copy your Access Key from the dashboard
5. **Add to Vercel**:
   - Go to your Vercel project dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add new variable:
     - Name: `WEB3FORMS_ACCESS_KEY`
     - Value: (paste your access key)
   - Click **Save**
6. **Redeploy**: Trigger a new deployment for changes to take effect

### Features:
- ✅ Free up to 250 submissions/month
- ✅ No credit card required
- ✅ Email notifications to zaarihomes@gmail.com
- ✅ Spam filtering included
- ✅ CAPTCHA support

### Testing Locally:

1. Create `.env` file in the root directory:
```
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

2. Restart your dev server:
```bash
npm run dev
```

3. Test the contact form at http://localhost:5173/contact

### How It Works:

1. User fills out the contact form
2. Form data is sent to `/api/contact` endpoint
3. API validates the data
4. API sends email via Web3Forms to zaarihomes@gmail.com
5. User sees success/error message

### Email Format:

Recipients will receive a beautifully formatted email with:
- Customer's name
- Email address (clickable)
- Phone number
- Subject
- Message
- Timestamp

### Alternative Options:

If you need more advanced features, consider:
- **Resend**: https://resend.com (Free 100 emails/day)
- **SendGrid**: https://sendgrid.com (Free 100 emails/day)
- **EmailJS**: https://www.emailjs.com (Free 200 emails/month)

---

**Need Help?** Contact support or check the Web3Forms documentation at https://docs.web3forms.com/
