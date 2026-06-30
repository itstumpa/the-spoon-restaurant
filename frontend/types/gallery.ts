export type GalleryCategory =
  | "all"
  | "food"
  | "drinks"
  | "restaurant"
  | "chefs"
  | "events"
  | "desserts"
  | "customers";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: GalleryCategory;
  title: string;
  description: string;
  /** For Instagram-style posts */
  likes?: number;
  /** For Instagram-style posts */
  caption?: string;
  /** Featured in the featured section */
  isFeatured?: boolean;
  /** Behind the scenes */
  isBehindScene?: boolean;
  /** Instagram-grid */
  isInstagram?: boolean;
}

export interface GalleryCategoryOption {
  value: GalleryCategory;
  label: string;
}

export interface InstagramPost {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  likes: number;
  caption: string;
}
