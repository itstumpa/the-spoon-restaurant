import {
  Award,
  Clock,
  Heart,
  Leaf,
  Recycle,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Award,
  Sparkles,
  Star,
  Heart,
  Leaf,
  Recycle,
  Users,
  Clock,
};

export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] || Star;
}

// ─── Framer Motion Variants ────────────────────────────
export const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.12,
    },
  }),
};

export const scaleIn = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: (i = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.1,
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
