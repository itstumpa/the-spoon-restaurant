import type {
  AboutValue,
  GalleryImage,
  MenuItem,
  StatItem,
  TeamMember,
  Testimonial,
  TimelineItem,
  ValueItem,
  WhyDinePoint,
} from "@/types";

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "s1",
    name: "Mac & Cheese",
    description:
      "Creamy three-cheese blend with a crispy breadcrumb topping, baked to golden perfection.",
    price: "$9.99",
    image:
      "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&h=400&fit=crop&q=80",
    category: "starters",
  },
  {
    id: "s2",
    name: "Clam Chowder",
    description:
      "Rich New England-style chowder loaded with fresh clams, potatoes, and cream.",
    price: "$8.49",
    image:
      "https://images.unsplash.com/photo-1605902396830-aca29e974e9c?w=600&h=400&fit=crop&q=80",
    category: "starters",
  },
  {
    id: "s3",
    name: "Buffalo Wings",
    description:
      "Crispy chicken wings tossed in house-made buffalo sauce, served with ranch dip.",
    price: "$11.99",
    image:
      "https://images.unsplash.com/photo-1608039829572-fa113c5e1733?w=600&h=400&fit=crop&q=80",
    category: "starters",
  },
  {
    id: "s4",
    name: "Southern Fried Pickles",
    description:
      "Dill pickle slices battered and fried golden, served with spicy remoulade.",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=600&h=400&fit=crop&q=80",
    category: "starters",
  },
  // Mains
  {
    id: "m1",
    name: "BBQ Ribs",
    description:
      "Slow-smoked pork ribs glazed with our signature bourbon BBQ sauce, served with coleslaw.",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&q=80",
    category: "mains",
  },
  {
    id: "m2",
    name: "Classic Burger",
    description:
      "Half-pound Angus beef patty with aged cheddar, lettuce, tomato, and secret sauce on a brioche bun.",
    price: "$16.99",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop&q=80",
    category: "mains",
  },
  {
    id: "m3",
    name: "Pulled Pork Sandwich",
    description:
      "Tender pulled pork piled high on a toasted bun with tangy Carolina-style sauce.",
    price: "$15.49",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop&q=80",
    category: "mains",
  },
  {
    id: "m4",
    name: "Grilled Salmon",
    description:
      "Atlantic salmon fillet grilled to perfection, served with seasonal vegetables and lemon butter sauce.",
    price: "$22.99",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop&q=80",
    category: "mains",
  },
  // Desserts
  {
    id: "d1",
    name: "New York Cheesecake",
    description:
      "Silky cream cheese filling on a graham cracker crust, topped with fresh berries.",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop&q=80",
    category: "desserts",
  },
  {
    id: "d2",
    name: "Apple Crumble",
    description:
      "Warm spiced apple filling with buttery oat crumble topping, served with vanilla bean ice cream.",
    price: "$7.99",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop&q=80",
    category: "desserts",
  },
  {
    id: "d3",
    name: "Chocolate Lava Cake",
    description:
      "Rich dark chocolate cake with a molten center, served with vanilla ice cream and fresh berries.",
    price: "$9.49",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop&q=80",
    category: "desserts",
  },
  {
    id: "d4",
    name: "Crème Brûlée",
    description:
      "Classic vanilla custard with a caramelized sugar crust, garnished with fresh raspberries.",
    price: "$6.99",
    image:
      "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&h=400&fit=crop&q=80",
    category: "desserts",
  },
  // Drinks
  {
    id: "dr1",
    name: "Fresh Lemonade",
    description:
      "House-squeezed lemons with a touch of cane sugar and fresh mint.",
    price: "$3.99",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&h=400&fit=crop&q=80",
    category: "drinks",
  },
  {
    id: "dr2",
    name: "Iced Tea",
    description:
      "Southern-style sweet tea brewed fresh daily, served over ice with a lemon wedge.",
    price: "$2.99",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop&q=80",
    category: "drinks",
  },
  {
    id: "dr3",
    name: "Craft Cocktail",
    description:
      "Handcrafted cocktail with premium spirits, fresh juices, and artisanal garnishes.",
    price: "$5.99",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop&q=80",
    category: "drinks",
  },
  {
    id: "dr4",
    name: "Espresso Martini",
    description:
      "Smooth blend of vodka, espresso, and coffee liqueur — the perfect after-dinner indulgence.",
    price: "$4.99",
    image:
      "https://images.unsplash.com/photo-1513553404607-988bf2703777?w=600&h=400&fit=crop&q=80",
    category: "drinks",
  },
];

export const featuredDishes: MenuItem[] = [
  {
    ...menuItems.find((item) => item.name === "BBQ Ribs")!,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&q=80",
    tags: ["GF"],
  },
  {
    ...menuItems.find((item) => item.name === "Classic Burger")!,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&q=80",
    tags: [],
  },
  {
    ...menuItems.find((item) => item.name === "New York Cheesecake")!,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&h=600&fit=crop&q=80",
    tags: ["V"],
  },
  {
    ...menuItems.find((item) => item.name === "Grilled Salmon")!,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop&q=80",
    tags: ["GF"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    text: "The BBQ ribs are absolutely incredible — fall-off-the-bone tender with the most amazing smoky flavor. This place feels like home.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t2",
    name: "James R.",
    text: "Best burger in Texas! You can taste the quality in every bite. The atmosphere is warm and welcoming. Highly recommend.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "t3",
    name: "Emily W.",
    text: "We come here every Sunday after church. The staff remembers our order and the banana pudding is pure heaven.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Chef Marco",
    role: "Head Chef",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&q=80",
    bio: "30 years of culinary mastery across Europe and America.",
    experience: "30+ years",
    specialty: "Mediterranean & European Cuisine",
    awards: [
      "James Beard Award 2018",
      "Michelin Star 2015-2020",
      "Best Chef Austin 2022",
    ],
  },
  {
    id: "tm2",
    name: "Chef Ana",
    role: "Pastry Chef",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop&q=80",
    bio: "Crafting exquisite desserts and pastries with European flair.",
    experience: "12+ years",
    specialty: "French Pastry & Desserts",
    awards: [
      "Best Pastry Chef 2022",
      "International Dessert Competition Gold 2023",
    ],
  },
  {
    id: "tm3",
    name: "Chef Diego",
    role: "Grill Master",
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=400&fit=crop&q=80",
    bio: "Master of open-fire cooking and prime cuts from around the world.",
    experience: "8+ years",
    specialty: "Grill & Smoke Techniques",
    awards: ["Rising Star Chef 2022", "Best Steakhouse Menu 2023"],
  },
  {
    id: "tm4",
    name: "Chef Nina",
    role: "Sushi Chef",
    image:
      "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Expert in traditional Japanese techniques with a Mediterranean twist.",
    experience: "15+ years",
    specialty: "Japanese Fusion & Seafood",
    awards: ["Best New Fusion Concept 2023", "Seafood Excellence Award 2024"],
  },
];

export const whyDinePoints: WhyDinePoint[] = [
  {
    id: "w1",
    title: "Fresh Local Ingredients",
    description:
      "We source from local farms within 50 miles, ensuring every dish is packed with peak-season flavor.",
    icon: "🥕",
  },
  {
    id: "w2",
    title: "Homestyle Cooking",
    description:
      "Our recipes have been passed down through generations — made from scratch, just like grandma used to make.",
    icon: "🍳",
  },
  {
    id: "w3",
    title: "Warm Hospitality",
    description:
      "From the moment you walk in, you are family. Our team treats every guest like an old friend.",
    icon: "🤝",
  },
];

export const values: ValueItem[] = [
  {
    id: "v1",
    title: "Quality",
    description:
      "We never cut corners. Every ingredient is hand-selected, every dish made to order with care and pride.",
    icon: "🥩",
  },
  {
    id: "v2",
    title: "Community",
    description:
      "We believe restaurants are gathering places. We support local charities and host community events year-round.",
    icon: "🤝",
  },
  {
    id: "v3",
    title: "Consistency",
    description:
      "Whether it's your first visit or your hundredth, you can count on the same great taste and service every time.",
    icon: "⭐",
  },
];

export const timeSlots: string[] = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

export const aboutStats: StatItem[] = [
  { id: "st1", value: 16, suffix: "+", label: "Years Serving Austin" },
  { id: "st2", value: 50, suffix: "mi", label: "Local Farm Radius" },
  { id: "st3", value: 50000, suffix: "+", label: "Happy Guests Served" },
];

export const aboutTestimonials: Testimonial[] = [
  {
    id: "at1",
    name: "Sarah Mitchell",
    text: "The Spoon has become our family's favorite spot. Every visit feels like a celebration — the ambiance, the flavors, and the warmth are simply unmatched in Austin.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80",
    location: "Austin, TX",
  },
  {
    id: "at2",
    name: "James Rodriguez",
    text: "As a food writer, I've dined at hundreds of restaurants. The Spoon stands out for its genuine commitment to quality and the way every dish tells a story of passion and tradition.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80",
    location: "San Antonio, TX",
  },
  {
    id: "at3",
    name: "Emily Chen",
    text: "We hosted our anniversary dinner here and it was magical. From the personalized menu to the thoughtful service, every detail was perfect. Thank you for making it unforgettable.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80",
    location: "Dallas, TX",
  },
  {
    id: "at4",
    name: "Michael Thompson",
    text: "The wood-grilled specialties are out of this world. You can taste the decades of expertise in every bite. This is what authentic Mediterranean-inspired cuisine should taste like.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80",
    location: "Houston, TX",
  },
];

export const timelineMilestones: TimelineItem[] = [
  {
    id: "mil1",
    year: "2010",
    title: "Restaurant Founded",
    description:
      "The Spoon opened its doors on Maple Street with a simple mission: bring the warmth of home-cooked Mediterranean meals to the Austin community.",
    icon: "UtensilsCrossed",
  },
  {
    id: "mil2",
    year: "2013",
    title: "First Major Award",
    description:
      "Recognized as 'Best New Restaurant' by Austin Food Magazine, setting the stage for a decade of culinary excellence and community trust.",
    icon: "Award",
  },
  {
    id: "mil3",
    year: "2016",
    title: "Expanded Our Menu",
    description:
      "Introduced an expanded menu featuring wood-grilled specialties, artisanal cocktails, and a seasonal farm-to-table rotation that became our signature.",
    icon: "Sparkles",
  },
  {
    id: "mil4",
    year: "2019",
    title: "Michelin Recognition",
    description:
      "Earned a prestigious Michelin mention, drawing food enthusiasts from across Texas and cementing our reputation as a destination dining experience.",
    icon: "Star",
  },
  {
    id: "mil5",
    year: "2024",
    title: "Thousands of Happy Customers",
    description:
      "With over 50,000 guests served and a 4.9-star rating, we continue to grow while staying true to the family values that started it all.",
    icon: "Heart",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop&q=80",
    alt: "Elegant dining area with warm ambient lighting",
    width: 800,
    height: 1000,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&q=80",
    alt: "Open kitchen with chefs preparing fresh dishes",
    width: 800,
    height: 600,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80",
    alt: "Beautifully plated gourmet dish",
    width: 800,
    height: 600,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=1000&fit=crop&q=80",
    alt: "Cozy outdoor patio seating area",
    width: 800,
    height: 1000,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop&q=80",
    alt: "Signature dish presentation with vibrant colors",
    width: 800,
    height: 800,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&q=80",
    alt: "Warm and inviting restaurant interior",
    width: 800,
    height: 600,
  },
];

export const aboutValuesData: AboutValue[] = [
  {
    id: "av1",
    icon: "Leaf",
    title: "Farm-Fresh Quality",
    description:
      "We partner with local farms within 50 miles to bring you the freshest seasonal ingredients, supporting our community while delivering unparalleled flavor.",
  },
  {
    id: "av2",
    icon: "Award",
    title: "Award-Winning Kitchen",
    description:
      "Our culinary team has earned multiple accolades including a Michelin mention and James Beard recognition, reflecting our relentless pursuit of excellence.",
  },
  {
    id: "av3",
    icon: "Heart",
    title: "Family at Heart",
    description:
      "From our kitchen to your table, every dish is made with love. We treat every guest like family, creating an atmosphere where memories are made.",
  },
  {
    id: "av4",
    icon: "Recycle",
    title: "Sustainable Practices",
    description:
      "We are committed to eco-friendly operations — from compostable packaging to zero-waste cooking and energy-efficient kitchen equipment.",
  },
  {
    id: "av5",
    icon: "Users",
    title: "Community First",
    description:
      "We believe in giving back. Through charity events, local partnerships, and community programs, we strive to make Austin a better place for everyone.",
  },
  {
    id: "av6",
    icon: "Sparkles",
    title: "Innovation Daily",
    description:
      "Our menu evolves with the seasons and the latest culinary trends, ensuring every visit brings a new and exciting dining experience to our guests.",
  },
];

export const aboutPageStats: (StatItem & { displayValue?: string })[] = [
  { id: "aps1", value: 15, suffix: "+", label: "Years of Excellence" },
  { id: "aps2", value: 50000, suffix: "+", label: "Happy Guests" },
  { id: "aps3", value: 120, suffix: "+", label: "Menu Dishes" },
  {
    id: "aps4",
    value: 49,
    suffix: "",
    label: "Star Rating",
    displayValue: "4.9★",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq1",
    question: "Do I need a reservation?",
    answer:
      "While walk-ins are always welcome, we highly recommend making a reservation, especially on weekends and during peak hours. This ensures we can provide you with the best possible dining experience without any wait time.",
  },
  {
    id: "faq2",
    question: "Is parking available?",
    answer:
      "Yes, we offer complimentary valet parking from Thursday through Sunday evenings. Additionally, there is ample street parking and a public parking garage located just half a block from our restaurant on Maple Street.",
  },
  {
    id: "faq3",
    question: "Do you offer vegetarian or vegan options?",
    answer:
      "Absolutely! Our menu features a dedicated selection of vegetarian and vegan dishes, all crafted with the same Mediterranean-inspired flavors and farm-fresh ingredients. Our chefs are also happy to accommodate special dietary requests.",
  },
  {
    id: "faq4",
    question: "Can I book a private event?",
    answer:
      "Yes, we have a beautiful private dining room that can accommodate up to 40 guests, as well as a semi-private space for smaller gatherings. Our events team will work with you to create a customized menu and experience. Please reach out through our contact form for details.",
  },
  {
    id: "faq5",
    question: "Are pets allowed?",
    answer:
      "We love furry friends! Well-behaved pets are welcome on our outdoor patio, where we provide water bowls and treats. Service animals are always welcome in all areas of the restaurant.",
  },
  {
    id: "faq6",
    question: "Do you offer takeaway or delivery?",
    answer:
      "Yes, we offer both takeaway and delivery. You can place a takeaway order by calling us directly, or order delivery through our website and partner apps. Our packaging is eco-friendly and designed to keep your food fresh.",
  },
];

export const socialLinks = [
  {
    id: "soc1",
    platform: "Instagram",
    handle: "@thespoonaustin",
    url: "https://instagram.com",
    icon: "Camera",
    color: "hover:bg-pink-500",
    description: "Behind-the-scenes, daily specials, and food photography.",
  },
  {
    id: "soc2",
    platform: "Facebook",
    handle: "The Spoon Austin",
    url: "https://facebook.com",
    icon: "Users",
    color: "hover:bg-blue-600",
    description: "Events, updates, and community stories.",
  },
  {
    id: "soc3",
    platform: "X (Twitter)",
    handle: "@thespoonatx",
    url: "https://x.com",
    icon: "MessageCircle",
    color: "hover:bg-black",
    description: "Latest news, chef features, and quick updates.",
  },
  {
    id: "soc4",
    platform: "YouTube",
    handle: "The Spoon",
    url: "https://youtube.com",
    icon: "Play",
    color: "hover:bg-red-600",
    description: "Cooking tutorials, chef interviews, and virtual tours.",
  },
];
