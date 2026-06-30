"use client";

import { CategoryNav } from "@/components/menu/CategoryNav";
import type { SortOption } from "@/components/menu/constants";
import { ITEMS_PER_PAGE } from "@/components/menu/constants";
import { MenuGridSection } from "@/components/menu/MenuGridSection";
import { MenuHero } from "@/components/menu/MenuHero";
import { ReservationCTA } from "@/components/menu/ReservationCTA";
import { SearchFilterBar } from "@/components/menu/SearchFilterBar";
import { SpecialOfferBanner } from "@/components/menu/SpecialOfferBanner";
import { TodaysSpecialSection } from "@/components/menu/TodaysSpecialSection";
import type { FilterState } from "@/components/menu/types";
import { menuItems } from "@/lib/data";
import type { MenuItem } from "@/types";
import { useEffect, useMemo, useState } from "react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [filters, setFilters] = useState<FilterState>({
    vegetarian: false,
    spicy: false,
    glutenFree: false,
    chefsChoice: false,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Today's special – Chef's Choice items
  const todaysSpecial = useMemo(
    () => menuItems.filter((item) => item.isChefsChoice).slice(0, 3),
    [],
  );

  // Filtered + sorted items
  const filteredItems = useMemo(() => {
    let items: MenuItem[] = [...menuItems];

    // Category
    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q),
      );
    }

    // Filters
    if (filters.vegetarian) items = items.filter((item) => item.isVegetarian);
    if (filters.spicy)
      items = items.filter((item) => item.spiceLevel && item.spiceLevel >= 2);
    if (filters.glutenFree) items = items.filter((item) => item.isGlutenFree);
    if (filters.chefsChoice) items = items.filter((item) => item.isChefsChoice);

    // Sort
    if (sortBy === "popular") {
      items.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price") {
      items.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", "")),
      );
    } else if (sortBy === "newest") {
      items.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
    }

    return items;
  }, [activeCategory, searchQuery, sortBy, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy, filters]);

  const toggleFilter = (key: keyof FilterState) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setFilters({
      vegetarian: false,
      spicy: false,
      glutenFree: false,
      chefsChoice: false,
    });
    setSortBy("popular");
    setActiveCategory("all");
  };

  const hasActiveFilters = !!(
    searchQuery ||
    Object.values(filters).some(Boolean) ||
    sortBy !== "popular" ||
    activeCategory !== "all"
  );

  return (
    <>
      <MenuHero />
      <SearchFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filters={filters}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        toggleFilter={toggleFilter}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />
      <CategoryNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <MenuGridSection
        filteredItems={filteredItems}
        paginatedItems={paginatedItems}
        hasActiveFilters={hasActiveFilters}
        clearFilters={clearFilters}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeCategory={activeCategory}
      />
      <SpecialOfferBanner />
      <TodaysSpecialSection todaysSpecial={todaysSpecial} />
      <ReservationCTA />
    </>
  );
}
