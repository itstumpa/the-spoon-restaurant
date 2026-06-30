import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  // ═══════════════ Featured Article ═══════════════
  {
    id: "b1",
    title: "Behind the Pass: A Day in the Life of Chef Marco",
    slug: "behind-the-pass-chef-marco",
    excerpt:
      "Step into the kitchen at 6 AM and follow Chef Marco through service, tasting, mentoring, and the relentless pursuit of culinary perfection that defines The Spoon.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&h=800&fit=crop&q=80",
    category: "chef-stories",
    categoryLabel: "Chef Stories",
    author: {
      name: "Elena Rossi",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      role: "Food Editor",
    },
    publishDate: "June 28, 2026",
    readingTime: "8 min read",
    isFeatured: true,
    isPopular: true,
    tags: ["chef", "kitchen", "behind-the-scenes"],
  },
  // ═══════════════ Regular Articles ═══════════════
  {
    id: "b2",
    title: "Summer Mediterranean Bowl Recipe You Need to Try",
    slug: "summer-mediterranean-bowl-recipe",
    excerpt:
      "Fresh herbs, grilled vegetables, and our signature lemon-tahini dressing come together in this vibrant summer bowl that's as nutritious as it is delicious.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80",
    category: "recipes",
    categoryLabel: "Recipes",
    author: {
      name: "Chef Marco",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      role: "Head Chef",
    },
    publishDate: "June 25, 2026",
    readingTime: "5 min read",
    isFeatured: false,
    isPopular: true,
    tags: ["recipe", "summer", "mediterranean", "healthy"],
  },
  {
    id: "b3",
    title: "The Spoon Earns Prestigious Wine Spectator Award",
    slug: "wine-spectator-award-2026",
    excerpt:
      "We're honored to announce that our carefully curated wine list has been recognized with the Award of Excellence for the third consecutive year.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop&q=80",
    category: "news",
    categoryLabel: "Restaurant News",
    author: {
      name: "Elena Rossi",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      role: "Food Editor",
    },
    publishDate: "June 22, 2026",
    readingTime: "4 min read",
    isFeatured: false,
    isPopular: true,
    tags: ["award", "wine", "recognition"],
  },
  {
    id: "b4",
    title: "Farm to Table: Meet Our Local Partners",
    slug: "farm-to-table-local-partners",
    excerpt:
      "Sustainability starts with relationships. Discover the farms and producers who supply The Spoon with the freshest seasonal ingredients year-round.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop&q=80",
    category: "seasonal",
    categoryLabel: "Seasonal Menu",
    author: {
      name: "Maria Santos",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
      role: "Sustainability Lead",
    },
    publishDate: "June 18, 2026",
    readingTime: "6 min read",
    isFeatured: false,
    isPopular: false,
    tags: ["farm-to-table", "sustainability", "local"],
  },
  {
    id: "b5",
    title: "5 Wine Pairing Tips for Your Next Dinner Party",
    slug: "wine-pairing-tips-dinner-party",
    excerpt:
      "Our sommelier shares expert advice on matching wines with Mediterranean flavors, from light whites to bold reds, so you can host with confidence.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop&q=80",
    category: "tips",
    categoryLabel: "Tips",
    author: {
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
      role: "Sommelier",
    },
    publishDate: "June 14, 2026",
    readingTime: "5 min read",
    isFeatured: false,
    isPopular: true,
    tags: ["wine", "pairing", "tips", "entertaining"],
  },
  {
    id: "b6",
    title: "Summer Solstice Dinner: A Night to Remember",
    slug: "summer-solstice-dinner-recap",
    excerpt:
      "Relive the magic of our annual Summer Solstice celebration — a four-course tasting menu under the stars, paired with live music and handcrafted cocktails.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800&h=600&fit=crop&q=80",
    category: "events",
    categoryLabel: "Events",
    author: {
      name: "Elena Rossi",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      role: "Food Editor",
    },
    publishDate: "June 10, 2026",
    readingTime: "4 min read",
    isFeatured: false,
    isPopular: false,
    tags: ["event", "summer", "celebration"],
  },
  {
    id: "b7",
    title: "The Art of Pasta Making: From Scratch to Plate",
    slug: "art-of-pasta-making",
    excerpt:
      "Chef Marco reveals the secrets behind our fresh pasta — the flour, the eggs, the technique, and the love that transforms simple ingredients into something extraordinary.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=800&h=600&fit=crop&q=80",
    category: "recipes",
    categoryLabel: "Recipes",
    author: {
      name: "Chef Marco",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      role: "Head Chef",
    },
    publishDate: "June 6, 2026",
    readingTime: "7 min read",
    isFeatured: false,
    isPopular: false,
    tags: ["pasta", "recipe", "technique"],
  },
  {
    id: "b8",
    title: "Why Seasonal Eating Is Better for You and the Planet",
    slug: "seasonal-eating-benefits",
    excerpt:
      "Eating with the seasons isn't just a culinary trend — it's a philosophy that supports local agriculture, reduces carbon footprint, and delivers peak flavor.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&q=80",
    category: "healthy",
    categoryLabel: "Healthy Eating",
    author: {
      name: "Maria Santos",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
      role: "Sustainability Lead",
    },
    publishDate: "June 2, 2026",
    readingTime: "5 min read",
    isFeatured: false,
    isPopular: false,
    tags: ["seasonal", "sustainability", "health", "nutrition"],
  },
  {
    id: "b9",
    title: "Introducing Our New Autumn Tasting Menu",
    slug: "autumn-tasting-menu-2026",
    excerpt:
      "Warm spices, root vegetables, and robust flavors define our latest tasting menu — a celebration of autumn's bounty crafted by Chef Marco and his team.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=80",
    category: "seasonal",
    categoryLabel: "Seasonal Menu",
    author: {
      name: "Chef Marco",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      role: "Head Chef",
    },
    publishDate: "May 28, 2026",
    readingTime: "4 min read",
    isFeatured: false,
    isPopular: false,
    tags: ["menu", "autumn", "tasting"],
  },
  {
    id: "b10",
    title: "Meet the Team: How Our Pastry Chef Creates Magic",
    slug: "meet-pastry-chef",
    excerpt:
      "From delicate phyllo layers to decadent chocolate creations, our pastry chef shares her journey and the inspiration behind The Spoon's signature desserts.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1486427944544-d2c246c4df3e?w=800&h=600&fit=crop&q=80",
    category: "chef-stories",
    categoryLabel: "Chef Stories",
    author: {
      name: "Elena Rossi",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      role: "Food Editor",
    },
    publishDate: "May 22, 2026",
    readingTime: "6 min read",
    isFeatured: false,
    isPopular: false,
    tags: ["pastry", "chef", "dessert"],
  },
  {
    id: "b11",
    title: "A Guide to Mediterranean Herbs and Spices",
    slug: "guide-mediterranean-herbs-spices",
    excerpt:
      "Oregano, sumac, za'atar, saffron — explore the vibrant palette of herbs and spices that define Mediterranean cooking and how to use them at home.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&h=600&fit=crop&q=80",
    category: "tips",
    categoryLabel: "Tips",
    author: {
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
      role: "Sommelier",
    },
    publishDate: "May 16, 2026",
    readingTime: "6 min read",
    isFeatured: false,
    isPopular: false,
    tags: ["herbs", "spices", "mediterranean", "guide"],
  },
  {
    id: "b12",
    title: "Mother's Day Brunch: A Special Celebration",
    slug: "mothers-day-brunch-2026",
    excerpt:
      "We welcomed families for an unforgettable Mother's Day brunch featuring a sparkling wine reception, live piano, and a specially curated three-course menu.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&q=80",
    category: "events",
    categoryLabel: "Events",
    author: {
      name: "Maria Santos",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
      role: "Sustainability Lead",
    },
    publishDate: "May 12, 2026",
    readingTime: "3 min read",
    isFeatured: false,
    isPopular: false,
    tags: ["event", "brunch", "mothers-day", "family"],
  },
];
