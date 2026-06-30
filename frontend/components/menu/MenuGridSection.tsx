"use client";

import { Button, Container } from "@/components/ui";
import type { MenuItem } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { MenuCard } from "./MenuCard";
import { Pagination } from "./Pagination";

export function MenuGridSection({
  filteredItems,
  paginatedItems,
  hasActiveFilters,
  clearFilters,
  totalPages,
  currentPage,
  setCurrentPage,
  activeCategory,
}: {
  filteredItems: MenuItem[];
  paginatedItems: MenuItem[];
  hasActiveFilters: boolean;
  clearFilters: () => void;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (p: number) => void;
  activeCategory: string;
}) {
  return (
    <section className="bg-bg pb-24 pt-16">
      <Container>
        {/* Results info */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-text-muted">
            Showing{" "}
            <span className="font-semibold text-text">
              {filteredItems.length}
            </span>{" "}
            {filteredItems.length === 1 ? "dish" : "dishes"}
            {totalPages > 1 && (
              <>
                {" "}
                — Page{" "}
                <span className="font-semibold text-text">
                  {currentPage}
                </span>{" "}
                of {totalPages}
              </>
            )}
            {activeCategory !== "all" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold capitalize text-text">
                  {activeCategory}
                </span>
              </>
            )}
          </p>
          {hasActiveFilters && (
            <p className="text-xs text-text-muted/60">
              Filters active —{" "}
              <button
                onClick={clearFilters}
                className="font-medium text-primary underline underline-offset-2"
              >
                reset
              </button>
            </p>
          )}
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {paginatedItems.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
              <Search className="size-7 text-primary/60" />
            </div>
            <h3 className="font-heading text-xl font-bold text-text">
              No dishes found
            </h3>
            <p className="mt-2 max-w-sm text-sm text-text-muted">
              Try adjusting your search or filters to discover what&apos;s on
              the menu.
            </p>
            <Button
              variant="outline-accent"
              size="sm"
              className="mt-4"
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </Container>
    </section>
  );
}
