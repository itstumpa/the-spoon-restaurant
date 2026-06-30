"use client";

import { Pagination } from "@/components/menu/Pagination";
import { Button, Container } from "@/components/ui";
import type { BlogPost } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, RefreshCw } from "lucide-react";
import { BlogCard } from "./BlogCard";

export function BlogGridSection({
  posts,
  hasActiveFilters,
  handleReset,
  totalPages,
  currentPage,
  onPageChange,
}: {
  posts: BlogPost[];
  hasActiveFilters: boolean;
  handleReset: () => void;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <section className="bg-bg pb-16">
      <Container>
        <AnimatePresence mode="wait">
          {posts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-primary/5">
                <FileText className="size-10 text-primary/40" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text">
                No articles found
              </h3>
              <p className="mt-2 max-w-md text-text-muted">
                {hasActiveFilters
                  ? "Try adjusting your search or filter to find what you're looking for."
                  : "Check back soon for new stories and updates from our kitchen."}
              </p>
              {hasActiveFilters && (
                <Button
                  variant="accent"
                  size="sm"
                  className="mt-6"
                  onClick={handleReset}
                >
                  <RefreshCw className="mr-1.5 size-3.5" />
                  Reset Filters
                </Button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}
      </Container>
    </section>
  );
}
