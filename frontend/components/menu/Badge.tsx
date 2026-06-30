export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "chef" | "popular" | "new" | "signature" | "veg" | "gf";
}) {
  const styles: Record<string, string> = {
    default: "bg-primary/10 text-primary",
    chef: "bg-accent/10 text-accent",
    popular: "bg-amber-50 text-amber-700 border border-amber-200",
    new: "bg-green-50 text-green-700 border border-green-200",
    signature: "bg-purple-50 text-purple-700 border border-purple-200",
    veg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    gf: "bg-blue-50 text-blue-700 border border-blue-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
        styles[variant] || styles.default
      }`}
    >
      {children}
    </span>
  );
}
