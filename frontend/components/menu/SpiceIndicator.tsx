import { Flame } from "lucide-react";

export function SpiceIndicator({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      title={`Spice level: ${level}/3`}
    >
      {Array.from({ length: 3 }, (_, i) => (
        <Flame
          key={i}
          className={`size-3 ${i < level ? "text-orange-500" : "text-text-light/20"}`}
        />
      ))}
    </span>
  );
}
