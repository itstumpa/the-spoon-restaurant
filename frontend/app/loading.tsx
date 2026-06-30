import { UtensilsCrossed } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Animated logo */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-pulse">
          <UtensilsCrossed className="w-7 h-7 text-primary" />
        </div>
        {/* Spinning ring */}
        <div className="absolute -inset-2 rounded-2xl border-2 border-transparent border-t-primary border-r-primary/40 animate-spin" />
      </div>

      {/* Text skeleton */}
      <div className="space-y-3 text-center">
        <div className="h-5 w-48 rounded-full bg-gray-100 animate-pulse mx-auto" />
        <div className="h-3 w-36 rounded-full bg-gray-100 animate-pulse mx-auto" />
      </div>

      {/* Screen reader text */}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
