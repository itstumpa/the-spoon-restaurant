"use client";

import { Container } from "@/components/ui";
import type { BlogCategory } from "@/types";
import { motion } from "framer-motion";
import { BLOG_CATEGORIES, easeSmooth } from "./constants";

export function BlogCategoryNav({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: BlogCategory;
  setActiveCategory: (c: BlogCategory) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeSmooth }}
      className="sticky top-0 z-20 border-b border-border/20 bg-bg shadow-sm"
    >
      <Container className="py-0">
        <nav className="flex gap-2 overflow-x-auto py-3 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value as BlogCategory)}
              className={`relative shrink-0 rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                activeCategory === cat.value
                  ? "text-white"
                  : "text-text-muted hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {activeCategory === cat.value && (
                <motion.div
                  layoutId="activeBlogCategory"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat.label}
              </span>
            </button>
          ))}
        </nav>
      </Container>
    </motion.div>
  );
}
