"use client";

import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav";
import { BlogGridSection } from "@/components/blog/BlogGridSection";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogSearchFilter } from "@/components/blog/BlogSearchFilter";
import type { BlogSortOption } from "@/components/blog/constants";
import { ITEMS_PER_PAGE } from "@/components/blog/constants";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { PopularArticles } from "@/components/blog/PopularArticles";
import { blogPosts } from "@/lib/blog-data";
import type { BlogCategory, BlogPost } from "@/types";
import { useEffect, useMemo, useState } from "react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<BlogSortOption>("latest");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Extract featured post
  const featuredPost = useMemo(
    () => blogPosts.find((p) => p.isFeatured) ?? blogPosts[0],
    [],
  );

  // Popular posts
  const popularPosts = useMemo(() => blogPosts.filter((p) => p.isPopular), []);

  // Filtered + sorted posts (excluding featured)
  const filteredPosts = useMemo(() => {
    let posts: BlogPost[] = blogPosts.filter((p) => p.id !== featuredPost.id);

    // Category
    if (activeCategory !== "all") {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    // Sort
    if (sortBy === "latest") {
      // Simple reverse chronological — months are pre-sorted in data
      posts.sort(
        (a, b) =>
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
      );
    } else if (sortBy === "oldest") {
      posts.sort(
        (a, b) =>
          new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime(),
      );
    } else if (sortBy === "popular") {
      posts.sort((a, b) => {
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return 0;
      });
    }

    return posts;
  }, [activeCategory, searchQuery, sortBy, featuredPost.id]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const hasActiveFilters = !!(
    searchQuery ||
    activeCategory !== "all" ||
    sortBy !== "latest"
  );

  const handleReset = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setSortBy("latest");
  };

  return (
    <>
      <BlogHero />
      <FeaturedArticle post={featuredPost} />
      <BlogCategoryNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <BlogSearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        totalResults={filteredPosts.length}
      />
      <BlogGridSection
        posts={paginatedPosts}
        hasActiveFilters={hasActiveFilters}
        handleReset={handleReset}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <PopularArticles posts={popularPosts} />
    </>
  );
}
