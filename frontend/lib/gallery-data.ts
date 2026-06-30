import type {
  GalleryCategoryOption,
  GalleryImage,
  InstagramPost,
} from "@/types/gallery";

export const GALLERY_CATEGORIES: GalleryCategoryOption[] = [
  { value: "all", label: "All" },
  { value: "food", label: "Food" },
  { value: "drinks", label: "Drinks" },
  { value: "restaurant", label: "Restaurant" },
  { value: "chefs", label: "Chefs" },
  { value: "events", label: "Events" },
  { value: "desserts", label: "Desserts" },
  { value: "customers", label: "Customers" },
];

export const galleryImages: GalleryImage[] = [
  // ─── Food ──────────────────────────────────────────────
  {
    id: "food-1",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=1000&fit=crop&q=85",
    alt: "Grilled ribeye steak with herb butter and roasted vegetables",
    width: 800,
    height: 1000,
    category: "food",
    title: "Prime Ribeye",
    description:
      "Dry-aged prime ribeye with rosemary garlic butter and seasonal vegetables.",
    isFeatured: true,
  },
  {
    id: "food-2",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=900&fit=crop&q=85",
    alt: "Pan-seared salmon with asparagus and lemon butter sauce",
    width: 800,
    height: 900,
    category: "food",
    title: "Seared Salmon",
    description:
      "Atlantic salmon with asparagus spears and citrus beurre blanc.",
    isFeatured: true,
  },
  {
    id: "food-3",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop&q=85",
    alt: "Fresh garden salad with balsamic glaze",
    width: 800,
    height: 800,
    category: "food",
    title: "Garden Medley",
    description:
      "Organic farm-fresh greens with heirloom tomatoes and balsamic reduction.",
    isInstagram: true,
    likes: 1247,
    caption: "Nothing beats a fresh garden harvest! 🌿",
  },
  {
    id: "food-4",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=1100&fit=crop&q=85",
    alt: "Wood-fired margherita pizza with fresh basil",
    width: 800,
    height: 1100,
    category: "food",
    title: "Margherita Pizza",
    description:
      "Hand-tossed wood-fired pizza with San Marzano tomatoes, mozzarella, and basil.",
  },
  {
    id: "food-5",
    src: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&h=700&fit=crop&q=85",
    alt: "Gourmet burger with aged cheddar and caramelized onions",
    width: 800,
    height: 700,
    category: "food",
    title: "Signature Burger",
    description:
      "Wagyu beef patty with aged cheddar, caramelized onions, and truffle aioli.",
  },
  {
    id: "food-6",
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=850&fit=crop&q=85",
    alt: "Handmade tagliatelle pasta with truffle sauce",
    width: 800,
    height: 850,
    category: "food",
    title: "Truffle Tagliatelle",
    description: "House-made pasta with black truffle cream and parmesan.",
  },
  {
    id: "food-7",
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=950&fit=crop&q=85",
    alt: "Pan-seared scallops with cauliflower puree",
    width: 800,
    height: 950,
    category: "food",
    title: "Seared Scallops",
    description: "Diver scallops with cauliflower velouté and micro herbs.",
    isInstagram: true,
    likes: 2134,
    caption: "Perfection on a plate. ✨",
  },
  {
    id: "food-8",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=750&fit=crop&q=85",
    alt: "Elegant fine dining presentation",
    width: 800,
    height: 750,
    category: "food",
    title: "Art on a Plate",
    description: "Our chef's daily tasting course — a symphony of flavors.",
  },

  // ─── Drinks ────────────────────────────────────────────
  {
    id: "drinks-1",
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=1050&fit=crop&q=85",
    alt: "Craft cocktail with fresh herbs and citrus",
    width: 800,
    height: 1050,
    category: "drinks",
    title: "Herb Citrus Spritz",
    description:
      "House-infused gin with fresh thyme, lemon, and sparkling water.",
    isFeatured: true,
  },
  {
    id: "drinks-2",
    src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&h=850&fit=crop&q=85",
    alt: "Elegant wine glasses on candlelit table",
    width: 800,
    height: 850,
    category: "drinks",
    title: "Wine Pairing",
    description:
      "Curated wine selections from our cellar, perfectly paired with each course.",
    isInstagram: true,
    likes: 1876,
    caption: "Date night perfection. 🍷",
  },
  {
    id: "drinks-3",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=950&fit=crop&q=85",
    alt: "Chocolate martini with garnishes",
    width: 800,
    height: 950,
    category: "drinks",
    title: "Chocolate Martini",
    description: "Premium vodka with dark crème de cacao and a chocolate rim.",
  },
  {
    id: "drinks-4",
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=700&fit=crop&q=85",
    alt: "Classic margarita cocktail",
    width: 800,
    height: 700,
    category: "drinks",
    title: "Classic Margarita",
    description: "Tequila, fresh lime, agave nectar, and a salted rim.",
  },
  {
    id: "drinks-5",
    src: "https://images.unsplash.com/photo-1436076863931-9352313a6af0?w=800&h=1000&fit=crop&q=85",
    alt: "Espresso coffee with latte art",
    width: 800,
    height: 1000,
    category: "drinks",
    title: "Artisan Coffee",
    description: "Single-origin espresso with velvety micro-foam latte art.",
    isBehindScene: true,
  },

  // ─── Restaurant ────────────────────────────────────────
  {
    id: "restaurant-1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=900&fit=crop&q=85",
    alt: "Elegant restaurant interior with warm lighting",
    width: 800,
    height: 900,
    category: "restaurant",
    title: "The Dining Room",
    description:
      "Warm amber lighting, linen-draped tables, and an intimate atmosphere.",
    isFeatured: true,
  },
  {
    id: "restaurant-2",
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=750&fit=crop&q=85",
    alt: "Beautiful outdoor patio seating area",
    width: 800,
    height: 750,
    category: "restaurant",
    title: "Garden Patio",
    description:
      "Al fresco dining under string lights surrounded by lush greenery.",
  },
  {
    id: "restaurant-3",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=1000&fit=crop&q=85",
    alt: "Wine cellar with curated selection",
    width: 800,
    height: 1000,
    category: "restaurant",
    title: "The Wine Cellar",
    description: "Over 500 labels from boutique vineyards around the world.",
    isInstagram: true,
    likes: 3456,
    caption: "Our little slice of wine heaven. 🍇",
  },
  {
    id: "restaurant-4",
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=850&fit=crop&q=85",
    alt: "Private dining room for special events",
    width: 800,
    height: 850,
    category: "restaurant",
    title: "Private Dining",
    description:
      "An exclusive space for intimate celebrations and corporate gatherings.",
  },
  {
    id: "restaurant-5",
    src: "https://images.unsplash.com/photo-1586999768265-24af89630739?w=800&h=700&fit=crop&q=85",
    alt: "Modern bar area with ambient lighting",
    width: 800,
    height: 700,
    category: "restaurant",
    title: "The Bar",
    description:
      "Our mixologists craft bespoke cocktails in an art deco setting.",
  },
  {
    id: "restaurant-6",
    src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=950&fit=crop&q=85",
    alt: "Restaurant entrance with elegant facade",
    width: 800,
    height: 950,
    category: "restaurant",
    title: "The Entrance",
    description:
      "Where every evening begins — our grand entrance with limestone columns.",
    isBehindScene: true,
  },

  // ─── Chefs ─────────────────────────────────────────────
  {
    id: "chefs-1",
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=1000&fit=crop&q=85",
    alt: "Executive chef plating a signature dish",
    width: 800,
    height: 1000,
    category: "chefs",
    title: "Chef Marco",
    description:
      "Our executive chef with 20 years of culinary mastery across three continents.",
    isBehindScene: true,
  },
  {
    id: "chefs-2",
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=850&fit=crop&q=85",
    alt: "Chef team preparing dishes in kitchen",
    width: 800,
    height: 850,
    category: "chefs",
    title: "The Brigade",
    description: "Our talented team working in harmony during evening service.",
    isBehindScene: true,
  },
  {
    id: "chefs-3",
    src: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&h=750&fit=crop&q=85",
    alt: "Pastry chef decorating a dessert",
    width: 800,
    height: 750,
    category: "chefs",
    title: "Pastry Artistry",
    description:
      "Our pastry chef adding the final touches to a chocolate creation.",
    isBehindScene: true,
    isInstagram: true,
    likes: 2891,
    caption: "The art of pastry. 🎨🍫",
  },
  {
    id: "chefs-4",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=900&fit=crop&q=85",
    alt: "Chef working with fresh ingredients",
    width: 800,
    height: 900,
    category: "chefs",
    title: "Farm to Fork",
    description: "Our chefs hand-select the freshest ingredients each morning.",
    isBehindScene: true,
  },

  // ─── Events ────────────────────────────────────────────
  {
    id: "events-1",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=800&fit=crop&q=85",
    alt: "Beautiful wedding reception setup",
    width: 800,
    height: 800,
    category: "events",
    title: "Wedding Reception",
    description:
      "An intimate wedding celebration with custom floral arrangements and candlelight.",
    isInstagram: true,
    likes: 4567,
    caption: "Love was in the air at The Spoon! 💍",
  },
  {
    id: "events-2",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=950&fit=crop&q=85",
    alt: "Corporate event dinner setup",
    width: 800,
    height: 950,
    category: "events",
    title: "Corporate Dining",
    description:
      "Elegant corporate events with personalized menus and dedicated service.",
  },
  {
    id: "events-3",
    src: "https://images.unsplash.com/photo-1426170042590-5c1e21d02acb?w=800&h=700&fit=crop&q=85",
    alt: "Wine tasting event",
    width: 800,
    height: 700,
    category: "events",
    title: "Wine Tasting",
    description:
      "Monthly wine tasting events featuring renowned vintners and sommeliers.",
  },
  {
    id: "events-4",
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=1050&fit=crop&q=85",
    alt: "Live music night at the restaurant",
    width: 800,
    height: 1050,
    category: "events",
    title: "Live Jazz Nights",
    description:
      "Every Friday, enjoy live jazz while savoring our seasonal tasting menu.",
  },

  // ─── Desserts ──────────────────────────────────────────
  {
    id: "desserts-1",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=900&fit=crop&q=85",
    alt: "Chocolate lava cake with vanilla ice cream",
    width: 800,
    height: 900,
    category: "desserts",
    title: "Chocolate Lava Cake",
    description:
      "Warm dark chocolate cake with a molten center and Madagascar vanilla ice cream.",
    isFeatured: true,
  },
  {
    id: "desserts-2",
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=750&fit=crop&q=85",
    alt: "Artisan tiramisu dessert",
    width: 800,
    height: 750,
    category: "desserts",
    title: "Classic Tiramisu",
    description:
      "Layers of espresso-soaked ladyfingers with mascarpone cream and cocoa.",
    isInstagram: true,
    likes: 3245,
    caption: "Dessert first, always. 🍫☕",
  },
  {
    id: "desserts-3",
    src: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&h=1000&fit=crop&q=85",
    alt: "Creme brulee with fresh berries",
    width: 800,
    height: 1000,
    category: "desserts",
    title: "Crème Brûlée",
    description:
      "Classic vanilla custard with caramelized sugar and seasonal berries.",
  },
  {
    id: "desserts-4",
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=850&fit=crop&q=85",
    alt: "Artisan cheese platter with fruits and nuts",
    width: 800,
    height: 850,
    category: "desserts",
    title: "Cheese Board",
    description:
      "A curated selection of artisan cheeses with honey, nuts, and dried fruits.",
  },

  // ─── Customers ─────────────────────────────────────────
  {
    id: "customers-1",
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=800&fit=crop&q=85",
    alt: "Happy couple enjoying dinner at restaurant",
    width: 800,
    height: 800,
    category: "customers",
    title: "Celebrating Love",
    description: "Guests enjoying a romantic evening with our tasting menu.",
    isInstagram: true,
    likes: 2876,
    caption: "Couples who dine together, thrive together. 💑",
  },
  {
    id: "customers-2",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=700&fit=crop&q=85",
    alt: "Family celebration dinner",
    width: 800,
    height: 700,
    category: "customers",
    title: "Family Gatherings",
    description:
      "Multi-generational families sharing stories and delicious food.",
  },
  {
    id: "customers-3",
    src: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&h=950&fit=crop&q=85",
    alt: "Friends having dinner together",
    width: 800,
    height: 950,
    category: "customers",
    title: "Friends Night Out",
    description:
      "Laughter, good wine, and unforgettable flavors shared among friends.",
    isInstagram: true,
    likes: 1987,
    caption: "Good food + great company = best nights. 🥂",
  },
  {
    id: "customers-4",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&h=850&fit=crop&q=85",
    alt: "Birthday celebration at the restaurant",
    width: 800,
    height: 850,
    category: "customers",
    title: "Birthday Bliss",
    description:
      "Celebrating life's special moments with bespoke cakes and champagne.",
  },
];

/** A dedicated featured set — one large hero image + two supporting */
export const featuredSet = {
  featured:
    galleryImages.find((img) => img.id === "food-1") ?? galleryImages[0],
  supporting: [
    galleryImages.find((img) => img.id === "restaurant-1") ?? galleryImages[2],
    galleryImages.find((img) => img.id === "desserts-1") ?? galleryImages[3],
  ],
};

/** Behind-the-scenes images */
export const behindSceneImages = galleryImages.filter(
  (img) => img.isBehindScene,
);

/** Instagram-style posts */
export const instagramPosts: InstagramPost[] = galleryImages
  .filter((img) => img.isInstagram && img.likes)
  .map((img, idx) => ({
    id: `ig-${idx}`,
    src: img.src.replace("fit=crop&q=85", "fit=crop&q=85&w=600&h=600"),
    alt: img.alt,
    width: 600,
    height: 600,
    likes: img.likes ?? 0,
    caption: img.caption ?? img.title,
  }));

/** Video thumbnail for the video section */
export const videoData = {
  thumbnail:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop&q=85",
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  title: "The Spoon Experience",
  description:
    "Step inside and experience the symphony of flavors, the warmth of our service, and the art of fine dining at The Spoon.",
};
