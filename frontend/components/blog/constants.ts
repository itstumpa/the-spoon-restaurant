export const BLOG_CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Restaurant News", value: "news" },
  { label: "Recipes", value: "recipes" },
  { label: "Chef Stories", value: "chef-stories" },
  { label: "Events", value: "events" },
  { label: "Seasonal Menu", value: "seasonal" },
  { label: "Tips", value: "tips" },
  { label: "Healthy Eating", value: "healthy" },
] as const;

export const easeSmooth = [0.16, 1, 0.3, 1] as const;
export const easeStandard = [0.25, 0.46, 0.45, 0.94] as const;

export type BlogSortOption = "latest" | "oldest" | "popular";

export const ITEMS_PER_PAGE = 8;
