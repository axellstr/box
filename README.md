# Sexbox — Premium Adult E-commerce Template

A modern, beautifully designed Astro + Tailwind CSS e-commerce template for adult/intimate product stores. Built with performance, aesthetics, and developer experience in mind.

![Astro](https://img.shields.io/badge/Astro-v6.0-FF5D01?style=flat-square&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.2-38B2AC?style=flat-square&logo=tailwindcss)
![Stripe](https://img.shields.io/badge/Stripe-Ready-635BFF?style=flat-square&logo=stripe)
![License](https://img.shields.io/badge/License-Commercial-green?style=flat-square)

---

## Live Preview

> Add your demo URL here

---

## What's Included

### Pages (7 Total)
| Page | Description |
|------|-------------|
| **Homepage** | Hero section, brand ticker, featured products, categories, testimonials |
| **Shop** | Full product catalog with filtering and sorting |
| **Product Detail** | Dynamic `[slug]` pages with gallery, reviews, add-to-cart |
| **Cart** | Full shopping cart with quantity controls |
| **Contact** | Contact form page |
| **Checkout Success** | Post-purchase confirmation |
| **Checkout Cancel** | Cancelled checkout fallback |

### Components (20+ Reusable)

#### Sections
- `Hero.astro` — Full-width hero with headline, CTA, and image
- `Header.astro` — Sticky navigation with cart indicator
- `Footer.astro` — Multi-column footer with links
- `AnnouncementBar.astro` — Top banner for promos
- `BrandTicker.astro` — Infinite scrolling brand/product ticker
- `ProductGrid.astro` — Responsive product grid section
- `CategoryBrowse.astro` — Category navigation cards
- `Testimonials.astro` — Customer reviews section

#### UI Components
- `Button.astro` — Primary/secondary/outline variants with sizes
- `ProductCard.astro` — Product card with badges, ratings, pricing
- `StarRating.astro` — 5-star rating display
- `Badge.astro` — Tag/label component
- `Breadcrumb.astro` — Navigation breadcrumbs
- `QuantitySelector.astro` — +/- quantity input
- `SectionHeading.astro` — Consistent section titles
- `TestimonialCard.astro` — Review card component

### Features

#### Design System
- **Custom color palette** — `ink`, `surface`, `accent`, `muted` with opacity support
- **Typography** — Clash Display (headings) + Montserrat (body)
- **Spacing scale** — Extended with 18, 88, 128 units
- **Shadows** — Card and hover shadow utilities
- **Animations** — Ticker, fade-in, slide-down keyframes
- **Custom utilities** — `container-main`, `text-balance`, `scrollbar-hide`

#### E-commerce
- **8 Demo Products** with full data (pricing, ratings, descriptions, item counts)
- **Product categories** — Starter, Solo, Couples, Premium, Subscription, Wellness, Adventurous, Travel
- **Cart system** — LocalStorage-based with add/remove/update/clear
- **Stripe Checkout** — Ready-to-use API endpoint for payments
- **Dynamic routing** — `/product/[slug]` for product pages
- **Filtering & sorting** — Price ranges, categories, sort options

#### Technical
- **Astro 6** — Latest framework with Islands architecture
- **Tailwind CSS 4** — Utility-first styling with `@theme` config
- **TypeScript** — Full type safety with interfaces
- **Lucide Icons** — Icon integration via `@lucide/astro`
- **SSR Support** — Node adapter configured for server-side rendering
- **SEO Ready** — Meta tags, descriptions, proper semantic HTML

---

## Project Structure

```
sexbox/
├── public/
│   └── logo.png              # Brand logo
├── src/
│   ├── assets/
│   │   └── background.svg
│   ├── components/
│   │   ├── sections/         # Page sections (8)
│   │   └── ui/               # UI components (8)
│   ├── data/
│   │   └── products.ts       # Product data + helpers
│   ├── layouts/
│   │   └── Layout.astro      # Base layout
│   ├── lib/
│   │   └── cart.ts           # Cart logic
│   ├── pages/
│   │   ├── api/
│   │   │   └── checkout.ts   # Stripe API
│   │   ├── checkout/
│   │   │   ├── success.astro
│   │   │   └── cancel.astro
│   │   ├── product/
│   │   │   └── [slug].astro
│   │   ├── index.astro
│   │   ├── shop.astro
│   │   ├── cart.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css        # Tailwind + design tokens
├── astro.config.mjs
├── package.json
└── README.md
```

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Stripe Setup

1. Create a `.env` file in the root:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_key_here
   ```
2. The checkout API at `/api/checkout` handles cart → Stripe session creation

---

## Customization Guide

### Branding
1. Replace `public/logo.png` with your logo
2. Update colors in `src/styles/global.css` under `@theme`
3. Modify fonts (currently Clash Display + Montserrat)

### Products
Edit `src/data/products.ts`:
- `allPackages` — Main product array
- Add/remove products with full TypeScript support
- Modify categories, pricing, descriptions

### Stripe
Configure shipping countries in `src/pages/api/checkout.ts`

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 6.0.8 | Framework |
| Tailwind CSS | 4.2.2 | Styling |
| Stripe | 20.4.1 | Payments |
| Lucide | 1.6.0 | Icons |
| Node Adapter | 10.0.3 | SSR |

---

## Gumroad Pricing Analysis

### Value Breakdown

| Asset | Estimated Value |
|-------|-----------------|
| **7 Complete Pages** | $70 |
| **20+ Reusable Components** | $100 |
| **Custom Design System** | $50 |
| **Stripe Integration** | $40 |
| **Cart System** | $30 |
| **TypeScript Types** | $20 |
| **Responsive Design** | $30 |
| **Production-Ready Code** | $30 |
| **Total Component Value** | **$370** |

### Market Comparison (Adult E-commerce Templates)

| Marketplace | Price Range |
|-------------|-------------|
| ThemeForest | $29 - $79 |
| Creative Market | $39 - $99 |
| Gumroad (Astro templates) | $29 - $149 |
| UI8 | $49 - $199 |

### Recommended Gumroad Pricing

| Tier | Price | Includes |
|------|-------|----------|
| **Standard License** | **$49** | Personal/single commercial project |
| **Extended License** | **$99** | Unlimited projects, client work |
| **Team License** | **$199** | Organization-wide, white-label rights |

### Suggested Launch Pricing

- **Launch discount**: $39 (20% off) for first 50 buyers
- **Regular price**: $49 (Standard License)
- **Expected revenue** (100 sales): $3,900 - $4,900

### What Makes This Valuable

1. **Niche Focus** — Few quality adult e-commerce templates exist
2. **Modern Stack** — Astro 6 + Tailwind 4 (latest versions)
3. **Payment Ready** — Stripe integration saves 4-8 hours
4. **Mobile First** — Fully responsive out of the box
5. **Clean Code** — TypeScript, well-organized, documented
6. **Privacy Conscious** — LocalStorage cart (no accounts needed)

---

## License

Commercial license required for use. Contact for licensing terms.

---

## Support

For questions or customization requests, reach out via [your contact method].
