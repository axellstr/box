/** Placeholder image for products until real assets exist */
const catalogImageSrc = "https://picsum.photos/seed/sexbox/400/400";

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  colors?: string[];
  sizes?: string[];
  description?: string;
  shortDescription?: string;
  itemCount?: number;
  includes?: string[];
  isNew?: boolean;
  isSale?: boolean;
  isBestseller?: boolean;
  tag?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

/** All 8 Sexbox Packages */
export const allPackages: Product[] = [
  {
    id: "pkg-1",
    slug: "curiosity-starter",
    title: "Curiosity Starter",
    category: "Starter",
    price: 49,
    rating: 4.7,
    reviewCount: 234,
    image: catalogImageSrc,
    shortDescription: "Perfect introduction to intimate exploration",
    description: "The ideal starting point for those new to intimate toys. This thoughtfully curated box includes beginner-friendly essentials that prioritize comfort and discovery. Each item is selected for its gentle approach and quality materials.",
    itemCount: 4,
    includes: ["Compact vibrator", "Premium lubricant", "Satin storage pouch", "Getting started guide"],
    isNew: true,
    tag: "Best for Beginners",
  },
  {
    id: "pkg-2",
    slug: "solo-night-essentials",
    title: "Solo Night Essentials",
    category: "Solo",
    price: 79,
    originalPrice: 99,
    rating: 4.9,
    reviewCount: 512,
    image: catalogImageSrc,
    shortDescription: "Everything you need for the perfect me-time",
    description: "Designed for those who know exactly what they want. This premium solo collection features our most popular personal massagers and accessories. Every item is body-safe and whisper-quiet for discreet pleasure.",
    itemCount: 5,
    includes: ["Premium wand massager", "Warming lubricant", "Massage candle", "Silk blindfold", "Rechargeable bullet"],
    isSale: true,
    isBestseller: true,
    tag: "Most Popular",
  },
  {
    id: "pkg-3",
    slug: "couples-connection",
    title: "Couples Connection",
    category: "Couples",
    price: 129,
    rating: 4.8,
    reviewCount: 389,
    image: catalogImageSrc,
    shortDescription: "Strengthen your bond with shared experiences",
    description: "Bring new energy to your relationship with this couples-focused collection. Includes items designed for shared pleasure and intimate games that encourage communication and connection.",
    itemCount: 6,
    includes: ["Couples vibrator", "Massage oil set", "Intimate dice game", "Silk restraints", "Feather tickler", "Connection card deck"],
    isBestseller: true,
    tag: "Date Night Favorite",
  },
  {
    id: "pkg-4",
    slug: "luxury-indulgence",
    title: "Luxury Indulgence",
    category: "Premium",
    price: 249,
    originalPrice: 329,
    rating: 5.0,
    reviewCount: 156,
    image: catalogImageSrc,
    shortDescription: "The ultimate premium pleasure experience",
    description: "Our most luxurious offering featuring designer brands and premium materials. From app-controlled devices to artisan-crafted accessories, every item in this box represents the pinnacle of intimate luxury.",
    itemCount: 7,
    includes: ["App-controlled massager", "Silk robe", "Designer restraint set", "Premium lubricant trio", "Crystal pleasure wand", "Luxury candle", "Champagne bath salts"],
    isSale: true,
    tag: "Editor's Choice",
  },
  {
    id: "pkg-5",
    slug: "mystery-monthly",
    title: "Mystery Monthly",
    category: "Subscription",
    price: 59,
    rating: 4.6,
    reviewCount: 847,
    image: catalogImageSrc,
    shortDescription: "A surprise selection delivered every month",
    description: "Let us surprise you each month with a curated selection based on your preferences. Complete our quick quiz and receive personalized items that match your interests. Cancel anytime.",
    itemCount: 4,
    includes: ["3-4 surprise items monthly", "Based on your preference quiz", "Mix of toys & accessories", "Exclusive subscriber-only items"],
    isNew: true,
    tag: "Subscription",
  },
  {
    id: "pkg-6",
    slug: "wellness-sensual",
    title: "Wellness & Sensuality",
    category: "Wellness",
    price: 89,
    rating: 4.7,
    reviewCount: 278,
    image: catalogImageSrc,
    shortDescription: "Self-care meets sensual exploration",
    description: "A holistic approach to intimate wellness. This collection combines therapeutic massage tools with sensual accessories, perfect for those who view pleasure as part of their self-care routine.",
    itemCount: 5,
    includes: ["Pelvic floor trainer", "CBD massage oil", "Warming wand", "Jade roller", "Aromatherapy set"],
    tag: "Wellness Focus",
  },
  {
    id: "pkg-7",
    slug: "adventure-box",
    title: "Adventure Box",
    category: "Adventurous",
    price: 149,
    rating: 4.5,
    reviewCount: 203,
    image: catalogImageSrc,
    shortDescription: "For the experienced explorer ready for more",
    description: "Designed for those ready to push boundaries. This collection features advanced toys and accessories for experienced users seeking new sensations and experiences.",
    itemCount: 6,
    includes: ["Premium bondage kit", "Remote-controlled toy", "Sensation wheel", "Temperature play set", "Advanced vibrator", "Fantasy accessory"],
    tag: "For Explorers",
  },
  {
    id: "pkg-8",
    slug: "travel-discreet",
    title: "Travel Discreet",
    category: "Travel",
    price: 69,
    rating: 4.8,
    reviewCount: 445,
    image: catalogImageSrc,
    shortDescription: "Compact pleasure for on-the-go",
    description: "TSA-friendly and ultra-discreet. This travel-sized collection fits perfectly in your carry-on and features quiet, compact items that look like everyday accessories.",
    itemCount: 4,
    includes: ["Mini rechargeable vibe", "Travel-size lubricant", "Lipstick vibrator", "Discreet storage case"],
    isBestseller: true,
    tag: "Travel-Friendly",
  },
];

/** Featured packages for homepage sections */
export const newArrivals: Product[] = allPackages.filter(p => p.isNew);
export const topSelling: Product[] = allPackages.filter(p => p.isBestseller || p.isSale);
export const featuredPackages: Product[] = allPackages.slice(0, 4);

/** Featured product with full reviews (for PDP demo) */
export const featuredProduct: Product & { reviews: Review[] } = {
  ...allPackages[1], // Solo Night Essentials
  images: [catalogImageSrc, catalogImageSrc, catalogImageSrc],
  reviews: [
    {
      id: "r1",
      author: "Jessica T.",
      rating: 5,
      date: "March 10, 2026",
      text: "Absolutely exceeded my expectations! The quality of every item is outstanding, and the packaging was so beautiful and discreet. This is now my go-to for solo relaxation nights.",
      verified: true,
    },
    {
      id: "r2",
      author: "Anonymous",
      rating: 5,
      date: "March 8, 2026",
      text: "The wand massager alone is worth the price. Everything arrived in perfect condition with no indication of what was inside. Will definitely be ordering again!",
      verified: true,
    },
    {
      id: "r3",
      author: "Michelle R.",
      rating: 4,
      date: "March 5, 2026",
      text: "Great variety in this box. The massage candle smells amazing and the lubricant is top quality. Only wish there was a storage solution included.",
      verified: true,
    },
    {
      id: "r4",
      author: "Sarah K.",
      rating: 5,
      date: "March 1, 2026",
      text: "I've tried several subscription boxes and this is by far the best curated one. Every item feels premium and thoughtfully selected. The silk blindfold is incredibly soft.",
      verified: true,
    },
    {
      id: "r5",
      author: "Anonymous",
      rating: 5,
      date: "February 25, 2026",
      text: "Perfect self-care gift. I bought this for myself and have no regrets. The quality is exceptional and everything works beautifully.",
      verified: true,
    },
    {
      id: "r6",
      author: "Lauren M.",
      rating: 4,
      date: "February 20, 2026",
      text: "Really impressed with the curation. The rechargeable bullet is whisper-quiet and powerful. Great value for everything included.",
      verified: true,
    },
  ],
};

export function getProductBySlug(slug: string): Product | (typeof featuredProduct) | null {
  if (slug === featuredProduct.slug) return featuredProduct;
  const fromList = allPackages.find((p) => p.slug === slug);
  return fromList ?? null;
}

export function getAllProductSlugs(): string[] {
  return allPackages.map(p => p.slug);
}

export function getAllProducts(): Product[] {
  return allPackages;
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return allPackages;
  return allPackages.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

/** Hero ticker: package names linking to product detail pages */
export const heroPackages: { name: string; slug: string }[] = allPackages.map(p => ({
  name: p.title,
  slug: p.slug,
}));

export const cartItems: CartItem[] = [];

export const testimonials = [
  {
    id: "t1",
    author: "Sarah M.",
    rating: 5,
    text: "The discreet packaging and quality of products from sexbox exceeded all my expectations. Every box feels like a luxurious treat to myself.",
    verified: true,
  },
  {
    id: "t2",
    author: "Anonymous",
    rating: 5,
    text: "Finally a company that understands what women want. The curation is thoughtful, the quality is premium, and the delivery is always discreet.",
    verified: true,
  },
  {
    id: "t3",
    author: "Jamie & Chris",
    rating: 5,
    text: "The Couples Connection box reignited our spark. We've ordered three times now and each box brings something new and exciting to try together.",
    verified: true,
  },
];

export const categories = [
  { name: "All Packages", image: catalogImageSrc, slug: "all", count: allPackages.length },
  { name: "Starter", image: catalogImageSrc, slug: "starter", count: allPackages.filter(p => p.category === "Starter").length },
  { name: "Solo", image: catalogImageSrc, slug: "solo", count: allPackages.filter(p => p.category === "Solo").length },
  { name: "Couples", image: catalogImageSrc, slug: "couples", count: allPackages.filter(p => p.category === "Couples").length },
  { name: "Premium", image: catalogImageSrc, slug: "premium", count: allPackages.filter(p => p.category === "Premium").length },
  { name: "Subscription", image: catalogImageSrc, slug: "subscription", count: allPackages.filter(p => p.category === "Subscription").length },
];

export const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
  { label: "Newest", value: "newest" },
];

export const priceRanges = [
  { label: "Under €50", min: 0, max: 50 },
  { label: "€50 - €100", min: 50, max: 100 },
  { label: "€100 - €150", min: 100, max: 150 },
  { label: "€150+", min: 150, max: Infinity },
];
