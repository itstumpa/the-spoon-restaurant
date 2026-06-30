"use client";

import { Container } from "@/components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ChevronDownIcon } from "./ChevronDownIcon";
import type { SortOption } from "./constants";
import { easeStandard } from "./constants";
import { FilterChip } from "./FilterChip";

interface FilterState {
  vegetarian: boolean;
  spicy: boolean;
  glutenFree: boolean;
  chefsChoice: boolean;
}

export function SearchFilterBar({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  filters,
  showFilters,
  setShowFilters,
  toggleFilter,
  clearFilters,
  hasActiveFilters,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  sortBy: SortOption;
  setSortBy: (s: SortOption) => void;
  filters: FilterState;
  showFilters: boolean;
  setShowFilters: (s: boolean) => void;
  toggleFilter: (key: keyof FilterState) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
}) {
  return (
    <div className="sticky top-0 z-30 border-b border-border/30 bg-bg/90 py-3 shadow-sm backdrop-blur-xl">
      <Container>
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-full rounded-xl border border-border/60 bg-white py-2.5 pl-10 pr-4 text-sm text-text outline-none transition-all placeholder:text-text-muted/60 focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none rounded-xl border border-border/60 bg-white py-2.5 pl-3.5 pr-9 text-sm text-text outline-none transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
            >
              <option value="popular">Popular</option>
              <option value="price">Price</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
          </div>

          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
              showFilters || Object.values(filters).some(Boolean)
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-border/60 bg-white text-text-muted hover:border-text-muted/30"
            }`}
          >
            <SlidersHorizontal className="size-4" />
            Filters
            {Object.values(filters).filter(Boolean).length > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {Object.values(filters).filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {/* Filter chips */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeStandard }}
              className="overflow-hidden"
            >
              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border/20 pt-3">
                <FilterChip
                  label="Vegetarian"
                  active={filters.vegetarian}
                  onClick={() => toggleFilter("vegetarian")}
                />
                <FilterChip
                  label="Spicy"
                  active={filters.spicy}
                  onClick={() => toggleFilter("spicy")}
                />
                <FilterChip
                  label="Gluten Free"
                  active={filters.glutenFree}
                  onClick={() => toggleFilter("glutenFree")}
                />
                <FilterChip
                  label="Chef's Choice"
                  active={filters.chefsChoice}
                  onClick={() => toggleFilter("chefsChoice")}
                />
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="ml-auto text-xs font-medium text-text-muted underline underline-offset-2 transition-colors hover:text-text"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}
