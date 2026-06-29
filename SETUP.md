# Cucina Kraft — Luxury Interior Design Website

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Setup EmailJS (for the Contact Form)

1. Go to https://www.emailjs.com/ and create a free account
2. Create a new Email Service (Gmail/Outlook/etc.)
3. Create an Email Template with these variables:
   - `{{from_name}}` — Client name
   - `{{from_email}}` — Client email
   - `{{phone}}` — Phone number
   - `{{project_type}}` — Kitchen/Wardrobe/etc.
   - `{{budget}}` — Budget range
   - `{{message}}` — Vision/Message
   - `{{location}}` — City
4. Copy your Service ID, Template ID, and Public Key
5. Open `src/utils/constants.js` and update:

```js
export const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key',
}
```

## Replace Placeholder Images

All images use Unsplash URLs for development. Replace with your actual project photos:

- Hero image: High-resolution kitchen/interior photo (1920x1080+)
- About image: Workshop/team photo
- Product images: Each product category photo
- Gallery images: Completed project photos
- Testimonial avatars: Client headshots

Update paths in `src/utils/constants.js`

## Customize Content

All text content, contact details, and site config is in:
`src/utils/constants.js`

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Tech Stack

- React 19 + Vite
- TailwindCSS v3
- Framer Motion (animations)
- GSAP + ScrollTrigger (scroll animations)
- Lenis (smooth scroll)
- SwiperJS (sliders)
- React Router v7
- React Hook Form
- EmailJS
- Lucide React (icons)

## Performance

- Code splitting via Vite manualChunks
- Lazy loading images
- Smooth scroll with Lenis
- GPU-accelerated animations
- Minimal re-renders with proper React patterns
