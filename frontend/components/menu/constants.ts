export const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Starters", value: "starters" },
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
  { label: "Pizza", value: "pizza" },
  { label: "Pasta", value: "pasta" },
  { label: "Burgers", value: "burgers" },
  { label: "Seafood", value: "seafood" },
  { label: "BBQ", value: "bbq" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Desserts", value: "desserts" },
  { label: "Drinks", value: "drinks" },
] as const;

export const easeSmooth = [0.16, 1, 0.3, 1] as const;
export const easeStandard = [0.25, 0.46, 0.45, 0.94] as const;

export type SortOption = "popular" | "price" | "newest";

export const ITEMS_PER_PAGE = 8;
