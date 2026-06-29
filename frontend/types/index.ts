export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "starters" | "mains" | "desserts" | "drinks";
  tags?: string[];
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
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface WhyDinePoint {
  id: string;
  title: string;
  description: string;
  icon: string;
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
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
