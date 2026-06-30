"use client";

import { GALLERY_CATEGORIES } from "@/lib/gallery-data";
import type { GalleryCategory } from "@/types/gallery";
import { motion } from "framer-motion";
import { useRef } from "react";

interface GalleryCategoryNavProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
}

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const chipVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.04,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export default function GalleryCategoryNav({
  activeCategory,
  onCategoryChange,
}: GalleryCategoryNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-[72px] z-30 border-b border-border/60 bg-bg/90 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <nav aria-label="Gallery categories" className="relative">
          {/* Desktop: all visible */}
          <div
            ref={scrollRef}
            className="flex items-center gap-1.5 overflow-x-auto py-4 scrollbar-none md:justify-center md:gap-2"
          >
            {GALLERY_CATEGORIES.map((cat, i) => {
              const isActive = activeCategory === cat.value;
              return (
                <motion.button
                  key={cat.value}
                  variants={chipVariants}
                  custom={i}
                  onClick={() => onCategoryChange(cat.value)}
                  className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 min-h-[44px] ${
                    isActive ? "text-white" : "text-text-muted hover:text-text"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-active-category"
                      className="absolute inset-0 rounded-full bg-primary shadow-md"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </nav>
      </div>
    </motion.div>
  );
}
