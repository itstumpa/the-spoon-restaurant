export type MenuCategory =
  | "starters"
  | "breakfast"
  | "lunch"
  | "dinner"
  | "pizza"
  | "pasta"
  | "burgers"
  | "seafood"
  | "bbq"
  | "vegetarian"
  | "desserts"
  | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: MenuCategory;
  tags?: string[];
  /** Preparation time string, e.g. "15-20 min" */
  prepTime?: string;
  /** Spice level from 1 (mild) to 3 (hot) */
  spiceLevel?: 1 | 2 | 3;
  /** Whether the dish is vegetarian-friendly */
  isVegetarian: boolean;
  /** Customer rating out of 5 */
  rating: number;
  /** Chef's personal selection */
  isChefsChoice?: boolean;
  /** Most popular dishes */
  isPopular?: boolean;
  /** Restaurant signature dish */
  isSignature?: boolean;
  /** Gluten-free option */
  isGlutenFree?: boolean;
  /** Newly added to menu */
  isNew?: boolean;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar?: string;
  location?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  experience?: string;
  specialty?: string;
  awards?: string[];
}

export interface WhyDinePoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type BlogCategory =
  | "all"
  | "news"
  | "recipes"
  | "chef-stories"
  | "events"
  | "seasonal"
  | "tips"
  | "healthy";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: BlogCategory;
  categoryLabel: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishDate: string;
  readingTime: string;
  isFeatured: boolean;
  isPopular: boolean;
  tags: string[];
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface AboutValue {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  author?: string;
}
