"use client";

import { Container } from "@/components/ui";
import { motion } from "framer-motion";
import { ArrowUpDown, Search, SlidersHorizontal, X } from "lucide-react";
import { easeSmooth, type BlogSortOption } from "./constants";

export function BlogSearchFilter({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters,
  totalResults,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  sortBy: BlogSortOption;
  setSortBy: (s: BlogSortOption) => void;
  showFilters: boolean;
  setShowFilters: (v: boolean) => void;
  totalResults: number;
}) {
  const sortOptions: { label: string; value: BlogSortOption }[] = [
    { label: "Latest", value: "latest" },
    { label: "Oldest", value: "oldest" },
    { label: "Most Popular", value: "popular" },
  ];

  return (
    <section className="bg-bg py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeSmooth }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border/30 bg-white py-2.5 pl-11 pr-10 text-sm text-text outline-none transition-all placeholder:text-text-muted/60 focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-text"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* Sort + Filter */}
            <div className="flex items-center gap-3">
              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as BlogSortOption)}
                  className="appearance-none rounded-full border border-border/30 bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-text outline-none transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ArrowUpDown className="pointer-events-none absolute right-3.5 top-1/2 size-3.5 -translate-y-1/2 text-text-muted" />
              </div>

              {/* Filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                  showFilters
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border/30 bg-white text-text-muted hover:border-text-muted/30"
                }`}
              >
                <SlidersHorizontal className="size-3.5" />
                Filters
              </button>
            </div>
          </div>

          {/* Results count */}
          <p className="mt-3 text-sm text-text-muted">
            {totalResults === 0
              ? "No articles found"
              : totalResults === 1
                ? "1 article found"
                : `${totalResults} articles found`}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
