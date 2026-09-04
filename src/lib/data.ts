export type ProductCategory =
  | "cakes"
  | "pastries"
  | "signature"
  | "cupcakes"
  | "seasonal";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory[];
  price: number;
  image: string;
  description?: string;
  badge?: "new" | "bestseller" | "limited";
};

export type CategoryMeta = {
  id: ProductCategory;
  label: string;
  description: string;
  image: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SiteInfo = {
  name: string;
  tagline: string;
  location: string;
  phone: string;
  hours: { days: string; time: string }[];
  social: { platform: string; handle: string; url: string }[];
};

// ── Site Info & Navigation ────────────────────────────────

export const siteInfo: SiteInfo = {
  name: "Moretti Bakery",
  tagline: "A Legacy of Sweetness, Love & Community",
  location: "640 Forest Ave, Staten Island, NY 10310",
  phone: "718-815-0252",
  hours: [
    { days: "Tuesday – Saturday", time: "7:00 AM – 4:00 PM" },
    { days: "Sunday",             time: "9:00 AM – 3:00 PM" },
    { days: "Monday",             time: "Closed" },
  ],
  social: [
    { platform: "Instagram", handle: "@moretticakes", url: "https://www.instagram.com/moretticakes" },
    { platform: "Facebook",  handle: "Moretti Bakery", url: "https://www.facebook.com/100057416771313/" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home",    href: "/"        },
  { label: "Menu",    href: "/menu"    },
  { label: "About",   href: "/about"   },
  { label: "Contact", href: "/contact" },
];

// ── Category Metadata ─────────────────────────────────────

export const categoryMeta: CategoryMeta[] = [
  { id: "cakes", label: "Cakes", description: "Delicious handcrafted cakes for every occasion.", image: "/images/cannoli-cake.jpg" },
  { id: "pastries", label: "Pastries", description: "Freshly baked morning delights.", image: "/images/croissant.jpg" },
  { id: "signature", label: "Signature", description: "Our most popular house specialties.", image: "/images/pistachio-dream-cake.png" },
  { id: "cupcakes", label: "Cupcakes", description: "Perfectly sized sweet treats.", image: "/images/assorted-jumbo-cupcakes.jpg" },
  { id: "seasonal", label: "Seasonal", description: "Limited time treats and holiday favorites.", image: "/images/seven-layer-cookies.png" },
];

// ── Products ─────────────────────────────────────────────

export const products: Product[] = [
  // Pastries
  { id: "assorted-muffin", name: "Assorted Muffin", category: ["pastries"], price: 3.50, image: "/images/assorted-muffin.jpg" },
  { id: "cinnamon-roll", name: "Cinnamon Roll", category: ["pastries"], price: 4.25, image: "/images/cinnamon-roll.jpg" },
  { id: "croissant", name: "Croissant", category: ["pastries"], price: 3.50, image: "/images/croissant.jpg" },
  { id: "danish-pastry", name: "Danish Pastry", category: ["pastries"], price: 3.75, image: "/images/danish-pastry.jpg" },
  { id: "gluten-free-muffin", name: "Gluten Free Muffin", category: ["pastries"], price: 19.99, image: "/images/gluten-free-muffin.jpg" },
  
  // Cakes & Signatures
  { id: "apple-cinnamon-crumb-dream-cake", name: "Apple Cinnamon Crumb Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/apple-cinnamon-crumb-dream-cake.png" },
  { id: "black-white-dream-cake", name: "Black & White Dream Cake", category: ["cakes", "signature"], price: 18.95, image: "/images/black-white-dream-cake.png" },
  { id: "blueberry-dream-cake", name: "Blueberry Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/blueberry-dream-cake.png" },
  { id: "brownie-caramel-dream-cake", name: "Brownie Caramel Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/brownie-caramel-dream-cake.png" },
  { id: "cannoli-cake", name: "Cannoli Cake", category: ["cakes", "signature"], price: 45.00, image: "/images/cannoli-cake.jpg" },
  { id: "cannoli-frankie-dream-cake", name: "Cannoli Frankie Dream Cake", category: ["cakes", "signature"], price: 25.95, image: "/images/cannoli-frankie-dream-cake.png" },
  { id: "caramelicious-dream-cake", name: "Caramelicious Dream Cake", category: ["cakes", "seasonal"], price: 19.95, image: "/images/caramelicious-dream-cake.png" },
  { id: "chocolate-chip-dream-cake", name: "Chocolate Chip Dream Cake", category: ["cakes"], price: 19.95, image: "/images/chocolate-chip-dream-cake.png" },
  { id: "chocolate-seven-layer-cake", name: "Chocolate Seven Layer Cake", category: ["cakes", "signature"], price: 45.00, image: "/images/chocolate-seven-layer-cake.png" },
  { id: "chocolatey-chocolate-chip-dream-cake", name: "Chocolatey Chocolate Chip Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/chocolatey-chocolate-chip-dream-cake.png" },
  { id: "cookie-monster-dream-cake", name: "Cookie Monster Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/cookie-monster-dream-cake.png" },
  { id: "lemon-coconut-dream-cake", name: "Lemon Coconut Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/lemon-coconut-dream-cake.png" },
  { id: "lemon-poppy-dream-cake", name: "Lemon Poppy Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/lemon-poppy-dream-cake.jpeg" },
  { id: "marble-dream-cake", name: "Marble Dream Cake", category: ["cakes", "seasonal"], price: 19.95, image: "/images/marble-dream-cake.png" },
  { id: "mini-dream-cake-platter", name: "Mini Dream Cake Platter", category: ["cakes", "seasonal"], price: 30.00, image: "/images/mini-dream-cake-platter.jpg" },
  { id: "oreo-cake", name: "Oreo Cake", category: ["cakes", "signature"], price: 45.00, image: "/images/oreo-cake.jpg" },
  { id: "pistachio-dream-cake", name: "Pistachio Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/pistachio-dream-cake.png" },
  { id: "reeses-dream-cake", name: "Reese's Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/reeses-dream-cake.png" },
  { id: "vanilla-cinnamon-crumb-dream-cake", name: "Vanilla Cinnamon Crumb Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/vanilla-cinnamon-crumb-dream-cake.png" },
  { id: "vanilla-raspberry-crumb-dream-cake", name: "Vanilla Raspberry Crumb Dream Cake", category: ["cakes", "signature"], price: 19.95, image: "/images/vanilla-raspberry-crumb-dream-cake.png" },
  
  // Cupcakes
  { id: "6-pack-cupcakes", name: "6-Pack Cupcakes", category: ["cupcakes"], price: 18.00, image: "/images/6-pack-cupcakes.jpg" },
  { id: "assorted-jumbo-cupcakes", name: "Assorted Jumbo Cupcakes", category: ["cupcakes"], price: 18.00, image: "/images/assorted-jumbo-cupcakes.jpg" },
  { id: "assorted-sesame-street-cupcakes", name: "Assorted Sesame Street Cupcakes", category: ["cupcakes"], price: 8.00, image: "/images/assorted-sesame-street-cupcakes.jpg" },
  { id: "cupcakes", name: "Cupcakes", category: ["cupcakes"], price: 3.75, image: "/images/cupcakes.jpg" },
  { id: "seven-layer-cupcakes", name: "Seven Layer Cupcakes", category: ["cupcakes"], price: 5.00, image: "/images/seven-layer-cupcakes.jpg" },
  
  // Seasonal
  { id: "butter-cookies", name: "Butter Cookies", category: ["seasonal"], price: 25.00, image: "/images/butter-cookies.jpg" },
  { id: "doggy-treats", name: "Doggy Treats", category: ["seasonal"], price: 7.99, image: "/images/doggy-treats.jpg" },
  { id: "jumbo-sugar-cookies", name: "Jumbo Sugar Cookies", category: ["seasonal"], price: 3.75, image: "/images/jumbo-sugar-cookies.jpg" },
  { id: "my-dads-cookies-chocolatta", name: "My Dad's Cookies Chocolatta", category: ["seasonal"], price: 8.99, image: "/images/my-dads-cookies-chocolatta-6-oz-170g.png" },
  { id: "smores-cookies", name: "S'mores Cookies", category: ["seasonal"], price: 3.50, image: "/images/smores-cookies.jpg" },
  { id: "seven-layer-chocolate-chip-cookies", name: "Seven Layer Chocolate Chip Cookies", category: ["seasonal"], price: 3.50, image: "/images/seven-layer-chocolate-chip-cookies.png" },
  { id: "seven-layer-cookies", name: "Seven Layer Cookies", category: ["seasonal"], price: 27.99, image: "/images/seven-layer-cookies.png" },
  { id: "sugar-free-cookies", name: "Sugar-Free Cookies", category: ["seasonal"], price: 24.99, image: "/images/sugar-free-cookies.jpg" }
];

// ── Helper utilities ──────────────────────────────────────

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category.includes(category));
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoryMeta(category: ProductCategory): CategoryMeta | undefined {
  return categoryMeta.find((c) => c.id === category);
}

export const faqs = [
  {
    q: "What types of baked goods do you offer?",
    a: "We offer a wide variety including cakes, pastries, signature cakes, cupcakes, and seasonal specials. Our menu spans classic flavors to unique creations — all made fresh daily.",
  },
  {
    q: "Are your baked goods made fresh?",
    a: "Absolutely. Yes, all of our baked goods are made fresh daily using high quality ingredients.",
  },
  {
    q: "Do you offer gluten-free options?",
    a: "Yes, we offer a selection of gluten-free baked goods to meet dietary needs.",
  }
];
