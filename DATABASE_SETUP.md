# DATABASE_SETUP.md

**This project is now a static Next.js site. There is no database or admin dashboard.**

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Set up your email service and templates for repair bookings and callback requests.
3. Update your EmailJS service, template, and public key in `src/utils/database-integration.js`.

## Notes
- All form submissions are sent to your email via EmailJS.
- There is no data storage or admin dashboard.
- You can deploy the static site to any static hosting provider (Vercel, Netlify, GitHub Pages, etc). 