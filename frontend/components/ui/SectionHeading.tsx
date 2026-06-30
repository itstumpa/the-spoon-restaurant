import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {badge && (
        <span
          className={cn(
            "mb-2 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "bg-white/10 text-accent" : "bg-primary/10 text-primary",
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight",
          light ? "text-white" : "text-text",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-2 text-base leading-relaxed md:text-lg",
            light ? "text-white/70" : "text-text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
