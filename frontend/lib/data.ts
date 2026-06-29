import type { MenuItem, Testimonial, TeamMember, WhyDinePoint, ValueItem } from "@/types";

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "s1",
    name: "Mac & Cheese",
    description: "Creamy three-cheese blend with a crispy breadcrumb topping, baked to golden perfection.",
    price: "$9.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Mac+%26+Cheese",
    category: "starters",
  },
  {
    id: "s2",
    name: "Clam Chowder",
    description: "Rich New England-style chowder loaded with fresh clams, potatoes, and cream.",
    price: "$8.49",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Clam+Chowder",
    category: "starters",
  },
  {
    id: "s3",
    name: "Buffalo Wings",
    description: "Crispy chicken wings tossed in house-made buffalo sauce, served with ranch dip.",
    price: "$11.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Buffalo+Wings",
    category: "starters",
  },
  {
    id: "s4",
    name: "Southern Fried Pickles",
    description: "Dill pickle slices battered and fried golden, served with spicy remoulade.",
    price: "$7.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Fried+Pickles",
    category: "starters",
  },
  // Mains
  {
    id: "m1",
    name: "BBQ Ribs",
    description: "Slow-smoked pork ribs glazed with our signature bourbon BBQ sauce, served with coleslaw.",
    price: "$24.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=BBQ+Ribs",
    category: "mains",
  },
  {
    id: "m2",
    name: "Classic Burger",
    description: "Half-pound Angus beef patty with aged cheddar, lettuce, tomato, and secret sauce on a brioche bun.",
    price: "$16.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Classic+Burger",
    category: "mains",
  },
  {
    id: "m3",
    name: "Pulled Pork Sandwich",
    description: "Tender pulled pork piled high on a toasted bun with tangy Carolina-style sauce.",
    price: "$15.49",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Pulled+Pork",
    category: "mains",
  },
  {
    id: "m4",
    name: "Country Fried Steak",
    description: "Hand-breaded beef cutlet fried crisp, smothered in creamy gravy with mashed potatoes.",
    price: "$18.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Country+Fried+Steak",
    category: "mains",
  },
  // Desserts
  {
    id: "d1",
    name: "New York Cheesecake",
    description: "Silky cream cheese filling on a graham cracker crust, topped with fresh berries.",
    price: "$8.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Cheesecake",
    category: "desserts",
  },
  {
    id: "d2",
    name: "Apple Pie",
    description: "Warm spiced apple filling in a flaky butter crust, served with vanilla ice cream.",
    price: "$7.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Apple+Pie",
    category: "desserts",
  },
  {
    id: "d3",
    name: "Chocolate Brownie Sundae",
    description: "Fudgy warm brownie topped with vanilla bean ice cream, hot fudge, and whipped cream.",
    price: "$9.49",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Brownie+Sundae",
    category: "desserts",
  },
  {
    id: "d4",
    name: "Banana Pudding",
    description: "Layers of vanilla wafers, fresh bananas, and creamy pudding topped with meringue.",
    price: "$6.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Banana+Pudding",
    category: "desserts",
  },
  // Drinks
  {
    id: "dr1",
    name: "Fresh Lemonade",
    description: "House-squeezed lemons with a touch of cane sugar and fresh mint.",
    price: "$3.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Lemonade",
    category: "drinks",
  },
  {
    id: "dr2",
    name: "Iced Tea",
    description: "Southern-style sweet tea brewed fresh daily, served over ice with a lemon wedge.",
    price: "$2.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Iced+Tea",
    category: "drinks",
  },
  {
    id: "dr3",
    name: "Milkshake",
    description: "Thick and creamy hand-spun milkshake available in chocolate, vanilla, or strawberry.",
    price: "$5.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Milkshake",
    category: "drinks",
  },
  {
    id: "dr4",
    name: "Root Beer Float",
    description: "Frosty root beer with a generous scoop of vanilla ice cream and a cherry on top.",
    price: "$4.99",
    image: "https://placehold.co/400x300/F5F0E8/3A5A40?text=Root+Beer+Float",
    category: "drinks",
  },
];

export const featuredDishes: MenuItem[] = [
  {
    ...menuItems.find((item) => item.name === "BBQ Ribs")!,
    tags: ["GF"],
  },
  {
    ...menuItems.find((item) => item.name === "Classic Burger")!,
    tags: [],
  },
  {
    ...menuItems.find((item) => item.name === "New York Cheesecake")!,
    tags: ["V"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    text: "The BBQ ribs are absolutely incredible — fall-off-the-bone tender with the most amazing smoky flavor. This place feels like home.",
    rating: 5,
  },
  {
    id: "t2",
    name: "James R.",
    text: "Best burger in Texas! You can taste the quality in every bite. The atmosphere is warm and welcoming. Highly recommend.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Emily W.",
    text: "We come here every Sunday after church. The staff remembers our order and the banana pudding is pure heaven.",
    rating: 4,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Chef Marco",
    role: "Head Chef",
    image: "https://placehold.co/400x400/EDE8DC/3A5A40?text=Chef+Marco",
  },
  {
    id: "tm2",
    name: "Lisa",
    role: "Manager",
    image: "https://placehold.co/400x400/EDE8DC/3A5A40?text=Lisa",
  },
  {
    id: "tm3",
    name: "Jake",
    role: "Sous Chef",
    image: "https://placehold.co/400x400/EDE8DC/3A5A40?text=Jake",
  },
];

export const whyDinePoints: WhyDinePoint[] = [
  {
    id: "w1",
    title: "Fresh Local Ingredients",
    description: "We source from local farms within 50 miles, ensuring every dish is packed with peak-season flavor.",
    icon: "🥕",
  },
  {
    id: "w2",
    title: "Homestyle Cooking",
    description: "Our recipes have been passed down through generations — made from scratch, just like grandma used to make.",
    icon: "🍳",
  },
  {
    id: "w3",
    title: "Warm Hospitality",
    description: "From the moment you walk in, you are family. Our team treats every guest like an old friend.",
    icon: "🤝",
  },
];

export const values: ValueItem[] = [
  {
    id: "v1",
    title: "Quality",
    description: "We never cut corners. Every ingredient is hand-selected, every dish made to order with care and pride.",
  },
  {
    id: "v2",
    title: "Community",
    description: "We believe restaurants are gathering places. We support local charities and host community events year-round.",
  },
  {
    id: "v3",
    title: "Consistency",
    description: "Whether it's your first visit or your hundredth, you can count on the same great taste and service every time.",
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
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];
