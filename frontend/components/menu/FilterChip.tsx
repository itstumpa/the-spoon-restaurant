import { Check } from "lucide-react";

export function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
        active
          ? "border-primary bg-primary text-white shadow-sm"
          : "border-border/60 bg-white text-text-muted hover:border-text-muted/30 hover:text-text"
      }`}
    >
      {active && <Check className="size-3" />}
      {label}
    </button>
  );
}
