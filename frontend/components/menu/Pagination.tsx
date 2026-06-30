"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { ChevronDownIcon } from "./ChevronDownIcon";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = useMemo(() => {
    const items: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) items.push(i);
    } else {
      items.push(1);
      if (currentPage > 3) items.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) items.push(i);
      if (currentPage < totalPages - 2) items.push("...");
      items.push(totalPages);
    }
    return items;
  }, [currentPage, totalPages]);

  return (
    <nav className="mt-12 flex items-center justify-center gap-1.5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-white text-text-muted transition-all hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Previous page"
      >
        <ChevronDownIcon className="size-4 rotate-90" />
      </button>

      {pages.map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="flex size-10 items-center justify-center text-sm text-text-muted/50"
          >
            ...
          </span>
        ) : (
          <motion.button
            key={page}
            onClick={() => onPageChange(page)}
            className={`relative flex size-10 items-center justify-center rounded-xl text-sm font-medium transition-all ${
              page === currentPage
                ? "text-white"
                : "text-text-muted hover:bg-primary/10 hover:text-primary"
            }`}
          >
            {page === currentPage && (
              <motion.div
                layoutId="activePage"
                className="absolute inset-0 rounded-xl bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{page}</span>
          </motion.button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-white text-text-muted transition-all hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Next page"
      >
        <ChevronDownIcon className="size-4 -rotate-90" />
      </button>
    </nav>
  );
}
