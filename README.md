# Klama Static Website

A static website version of the Klama marketing site, built for deployment to GitHub Pages.

## Features

- Full marketing website with all pages
- Interactive showcase demos (Granite Mining, Savanna Cafe, Swift Logistics)
- Contact and audit request forms via Formspree
- Framer Motion animations
- Dark theme design

## Tech Stack

- **Framework**: Next.js 15 with static export
- **Styling**: TailwindCSS, shadcn/ui
- **Animations**: Framer Motion
- **Forms**: Formspree
- **Deployment**: GitHub Pages via GitHub Actions

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the site: `npm run build`
2. The output will be in the `out/` directory
3. Deploy the `out/` directory to your hosting provider

## Form Configuration

Forms use Formspree. To configure:

1. Create a Formspree account at https://formspree.io
2. Create forms for:
   - Contact form
   - Audit request form
3. Update the form action URLs in:
   - `src/components/forms/ContactForm.tsx`
   - `src/components/forms/AuditRequestForm.tsx`

## Project Structure

```
website/
├── public/           # Static assets
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # React components
│   │   ├── marketing/  # Marketing page components
│   │   ├── forms/      # Form components
│   │   └── ui/         # shadcn/ui components
│   └── lib/         # Utilities
├── .github/         # GitHub Actions workflow
└── next.config.mjs  # Next.js configuration
```

## Related

- Main Klama web app (parent repository)
- [Klama website](https://klama.co.zw)
