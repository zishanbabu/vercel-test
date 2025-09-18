# DoorStep Mobile Repair

This project is now a **static Next.js site**. All forms use [EmailJS](https://www.emailjs.com/) for submissions. There is **no database, no admin dashboard, and no server-side code**.

## Features
- Static site generated with Next.js
- Device repair booking form (sends via EmailJS)
- Callback request form (sends via EmailJS)
- Modern, responsive UI

## How to Use
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
```bash
npm run dev
   ```
4. To build and export static HTML:
   ```bash
   npm run build
   npm run export
   ```

## Configuration
- Update your EmailJS service, template, and public key in `src/utils/database-integration.js` if needed.

## Notes
- There is **no admin dashboard** or data storage. All form submissions are sent to your email via EmailJS.
- You can deploy the static site to any static hosting provider (Vercel, Netlify, GitHub Pages, etc).
