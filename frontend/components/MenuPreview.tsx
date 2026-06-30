"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const categories = [
  { value: "starters", label: "Starters" },
  { value: "mains", label: "Mains" },
  { value: "desserts", label: "Desserts" },
  { value: "drinks", label: "Drinks" },
] as const;

const dishVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
  exit: { y: -20, opacity: 0, transition: { duration: 0.2 } },
};

function DishCard({ dish, index }: { dish: MenuItem; index: number }) {
  return (
    <motion.article
      variants={dishVariants}
      custom={index}
      layout
      className="group bg-bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
    >
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">
          {dish.name}
        </h3>
        <p className="mt-1.5 text-text-muted font-body text-xs sm:text-sm leading-relaxed line-clamp-2">
          {dish.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-primary font-heading font-bold text-base sm:text-lg">
            {dish.price}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<string>("starters");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filteredDishes = menuItems.filter(
    (item) => item.category === activeTab,
  );

  return (
    <section className="relative py-20 lg:py-28 bg-surface overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          <SectionHeading
            badge="Our Menu"
            title="A Taste of Everything"
            subtitle="From fresh starters to indulgent endings — explore our full range of Mediterranean-inspired flavors."
          />

          {/* Category Tabs */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-2xl bg-white border border-border p-1.5 shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveTab(cat.value)}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-heading font-semibold rounded-xl transition-colors duration-300 min-h-[44px]",
                    activeTab === cat.value
                      ? "text-white"
                      : "text-text-muted hover:text-text",
                  )}
                >
                  {activeTab === cat.value && (
                    <motion.span
                      layoutId="menuTabBg"
                      className="absolute inset-0 bg-primary rounded-xl"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dish Grid */}
          <div className="mt-10 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
              >
                {filteredDishes.map((dish, i) => (
                  <DishCard key={dish.id} dish={dish} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Full Menu CTA */}
          <motion.div
            variants={dishVariants}
            custom={0}
            className="mt-12 text-center"
          >
            <Link href="/menu">
              <Button variant="default" size="lg">
                Explore Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
