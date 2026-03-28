# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start Commands

```bash
npm run dev       # Start dev server (localhost:3000, hot reload)
npm run build     # Build for production
npm run preview   # Preview production build locally
npm astro        # Run Astro CLI directly
```

- **Node requirement**: >=22.12.0
- **Dev server** auto-rebuilds on file changes; open http://localhost:3000

## Architecture Overview

### Framework & Deployment
- **Astro 6** with SSR enabled (`output: 'server'`)
- **Vercel adapter** for serverless deployment with image optimization
- **Tailwind CSS 4** via Vite plugin integration
- **TypeScript** strict mode throughout

### Component Structure

**Page Sections** (`src/components/sections/`):
- `Hero.astro`, `Header.astro`, `Footer.astro`, `AnnouncementBar.astro`
- `BrandTicker.astro` (infinite scrolling), `ProductGrid.astro`, `CategoryBrowse.astro`, `Testimonials.astro`
- Imported into specific pages; sections compose to build full pages

**UI Components** (`src/components/ui/`):
- `Button.astro`, `ProductCard.astro`, `Badge.astro`, `Breadcrumb.astro`
- `StarRating.astro`, `QuantitySelector.astro`, `SectionHeading.astro`, `TestimonialCard.astro`
- Reusable across sections and pages; support variants and props

**Layout**:
- `Layout.astro` wraps all pages; handles meta tags, nav, footer
- Single base layout — keep navigation/footer logic here

### Data & Product Management

**Product Data** (`src/data/products.ts`):
- `allPackages: Product[]` — 8 curated product boxes
- **Key interfaces**: `Product` (id, slug, title, price, rating, category, etc.), `CartItem` extends Product with quantity/selections, `Review`
- **Helper functions**: `getProductBySlug()`, `getProductsByCategory()`, `getAllProductSlugs()`
- **Collections**: `newArrivals`, `topSelling`, `featuredPackages`, `heroPackages`, `testimonials`, `categories`, `sortOptions`, `priceRanges`
- Add/edit products here; all product data is static and imported

**Cart System** (`src/lib/cart.ts`):
- Persists to `localStorage` (key: `"sexbox-cart"`) for SSR-safe client-side cart
- **Functions**: `getCart()`, `addToCart()`, `removeFromCart()`, `updateQuantity()`, `clearCart()`, `getCartCount()`, `getCartTotal()`
- Dispatches `window.CustomEvent("cart-updated")` on change — listen in client components for UI sync
- Handles variant selection (size/color) with composite keys

### Pages & Routing

- `index.astro` — Homepage (hero, ticker, featured, testimonials)
- `shop.astro` — Product listing with filters, sorting, category navigation
- `product/[slug].astro` — Dynamic product detail (full gallery, reviews, add-to-cart)
- `cart.astro` — Cart with quantity controls, checkout button
- `contact.astro` — Contact form page
- `checkout/success.astro`, `checkout/cancel.astro` — Post-purchase pages

### Payment Integration

**Stripe Checkout** (`src/pages/api/checkout.ts`):
- POST endpoint at `/api/checkout` — receives cart items, creates Stripe session
- **Input**: `{ items: [{ id, slug, quantity, selectedSize?, selectedColor? }] }`
- **Output**: `{ url: string }` (Stripe session URL) or error
- **Config**:
  - Allowed countries: EU (GR, CY, DE, FR, IT, ES, NL, BE, AT, PT) + US, GB, IE, Nordic, Eastern Europe
  - Currency: EUR (hardcoded)
  - Success/cancel URLs redirect to `/checkout/success?session_id=` and `/checkout/cancel`
- **Setup**: Set `STRIPE_SECRET_KEY=sk_test_...` in `.env` before testing checkout

### Design System

**Tokens** (`src/styles/global.css`):
- Colors: `--color-ink`, `--color-surface`, `--color-accent`, `--color-muted` (with opacity variants)
- Fonts: Clash Display (headings), Montserrat (body)
- Spacing: 0–256px (4px grid) plus custom units: 18, 88, 128
- Shadows: `--shadow-card`, `--shadow-hover`
- Animations: `ticker` (infinite), `fade-in`, `slide-down`
- Custom utilities: `container-main`, `text-balance`, `scrollbar-hide`

### Image Handling

- Placeholder images from `https://placehold.co` (demo only)
- Vercel adapter provides image optimization in production (sizes: 640, 750, 828, 1080, 1200, 1920, 2048, 3840)
- Update `astro.config.mjs` `imagesConfig.domains` to add real image CDN

## Key Implementation Details

### Client-Side State (Cart)
Cart lives in `localStorage` with client-side JS. Components listening for cart updates should:
1. Import cart functions from `src/lib/cart.ts`
2. Listen to `window.addEventListener("cart-updated", ...)` for synced UI
3. Use `getCart()` on page load to hydrate, `getCartCount()` for header badge

### Product Variants
Products support `selectedSize` and `selectedColor` — stored in cart. Cart uses composite key (`id::size::color`) to track unique variants separately. Update `Product` interface if adding new variant types.

### TypeScript Paths
Strict mode enabled; ESM module syntax throughout. No aliases configured — use relative imports.

### Deployment Notes
- SSR-enabled for Vercel; `output: 'server'` in Astro config
- API routes require `export const prerender = false` (like `checkout.ts`)
- Image optimization handled by Vercel adapter; no `sharp` needed locally
