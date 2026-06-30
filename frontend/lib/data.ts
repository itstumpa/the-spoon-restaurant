import type {
  MenuItem,
  StatItem,
  TeamMember,
  Testimonial,
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
    name: "Lisa",
    role: "Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    bio: "Creating warm dining experiences for over a decade.",
    experience: "12+ years",
    specialty: "Hospitality Management & Guest Relations",
    awards: [
      "Restaurant Manager of the Year 2021",
      "Top 50 Hospitality Leaders 2023",
    ],
  },
  {
    id: "tm3",
    name: "Jake",
    role: "Sous Chef",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&q=80",
    bio: "Specializing in farm-to-table seasonal cuisine.",
    experience: "8+ years",
    specialty: "Farm-to-Table & Seasonal Cuisine",
    awards: ["Rising Star Chef 2022", "Sustainable Cuisine Award 2023"],
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

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Chefs", href: "/chefs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
