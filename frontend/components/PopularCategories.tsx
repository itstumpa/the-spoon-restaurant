"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useInView } from "framer-motion";
import {
  Beef,
  Fish,
  Hamburger,
  IceCream,
  Pizza,
  Utensils,
  Wine,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const categories = [
  {
    id: "pizza",
    name: "Pizza",
    count: "12 Varieties",
    icon: Pizza,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&q=80",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "burger",
    name: "Burger",
    count: "8 Varieties",
    icon: Hamburger,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&q=80",
    color: "from-red-500 to-rose-600",
  },
  {
    id: "pasta",
    name: "Pasta",
    count: "10 Varieties",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=400&fit=crop&q=80",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "seafood",
    name: "Seafood",
    count: "6 Varieties",
    icon: Fish,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop&q=80",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "steak",
    name: "Steak",
    count: "5 Cuts",
    icon: Beef,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=400&fit=crop&q=80",
    color: "from-stone-600 to-stone-800",
  },
  {
    id: "dessert",
    name: "Dessert",
    count: "7 Varieties",
    icon: IceCream,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop&q=80",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "drinks",
    name: "Drinks",
    count: "15+ Options",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=400&fit=crop&q=80",
    color: "from-emerald-500 to-teal-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function PopularCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-bg-surface">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading
            badge="Popular Categories"
            title="Explore Our Culinary World"
            subtitle="Seven distinct categories, each crafted with the finest ingredients and authentic Mediterranean flair."
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 lg:gap-4">
            {categories.map((category, i) => (
              <motion.article
                key={category.id}
                variants={itemVariants}
                custom={i}
                className="group relative cursor-pointer"
              >
                {/* Image with gradient overlay */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 14vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    aria-hidden="true"
                  />
                  {/* Category color accent bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    aria-hidden="true"
                  />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 lg:p-6 text-center">
                  {/* Icon */}
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <category.icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="font-heading text-base lg:text-lg font-bold text-white group-hover:text-primary-lighter transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="mt-0.5 text-white/80 text-xs sm:text-sm font-body">
                    {category.count}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-text font-semibold text-sm">
                    Explore
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
