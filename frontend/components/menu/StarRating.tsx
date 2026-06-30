import { Star } from "lucide-react";

export function StarRating({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "xs";
}) {
  const sizeClass = size === "sm" ? "size-4" : "size-3";
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < Math.round(rating)
              ? "fill-accent text-accent"
              : "fill-none text-text-light/30"
          }`}
        />
      ))}
      <span className="ml-1 text-xs font-medium text-text-muted">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}
