"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems } from "@/lib/data";
import type { MenuItem } from "@/types";

type Category = "starters" | "mains" | "desserts" | "drinks";

const categories: { key: Category; label: string }[] = [
  { key: "starters", label: "Starters" },
  { key: "mains", label: "Mains" },
  { key: "desserts", label: "Desserts" },
  { key: "drinks", label: "Drinks" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("starters");

  const filteredItems: MenuItem[] = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className="pt-24 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-10 lg:mb-14">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text">
          Our Menu
        </h1>
        <p className="mt-3 text-text-muted font-body text-base sm:text-lg max-w-xl mx-auto">
          Crafted with care, cooked with soul — explore our selection of American classics.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 lg:mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`min-h-[44px] px-5 sm:px-6 py-2.5 rounded-full font-body text-sm sm:text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface text-text-muted hover:bg-surface/80 hover:text-text"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <div className="relative h-48 sm:h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-text">
                  {item.name}
                </h3>
                <span className="text-primary font-heading font-bold text-base sm:text-lg whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-text-muted font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
