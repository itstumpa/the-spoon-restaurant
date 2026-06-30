"use client";

import { Container } from "@/components/ui/Container";
import { menuItems } from "@/lib/data";
import type { MenuItem } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type Category = "starters" | "mains" | "desserts" | "drinks";

const categories: { key: Category; label: string }[] = [
  { key: "starters", label: "Starters" },
  { key: "mains", label: "Mains" },
  { key: "desserts", label: "Desserts" },
  { key: "drinks", label: "Drinks" },
];

const categoryIcons: Record<Category, string> = {
  starters: "Starters",
  mains: "Mains",
  desserts: "Desserts",
  drinks: "Drinks",
};

const sectionVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.97 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.article
      variants={cardVariants}
      custom={index}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary font-heading font-bold text-sm px-3 py-1 rounded-full shadow-sm">
          {item.price}
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">
          {item.name}
        </h3>
        <p className="mt-2 text-text-muted font-body text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("starters");
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToCategory = (key: Category) => {
    setActiveCategory(key);
    const el = categoryRefs.current[key];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-bg-dark">
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(200,133,58,0.08),transparent_60%)]"
          aria-hidden="true"
        />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <span className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
              From Our Kitchen
            </span>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
              Our Menu
            </h1>
            <p className="mt-4 text-white/70 font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Crafted with passion, rooted in tradition — explore our
              Mediterranean-inspired menu.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Sticky Category Nav */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-border/50">
        <Container>
          <nav className="flex items-center justify-center gap-1 py-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => scrollToCategory(cat.key)}
                  className={`relative min-h-[44px] px-5 py-2 rounded-xl font-heading text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-text-muted hover:text-text"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menuPageTab"
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
              );
            })}
          </nav>
        </Container>
      </div>

      {/* Menu Sections */}
      <div className="py-16 lg:py-20 bg-bg-surface">
        <Container>
          <div className="space-y-16 lg:space-y-20">
            {categories.map((cat, sectionIndex) => {
              const sectionItems = menuItems.filter(
                (item) => item.category === cat.key,
              );

              return (
                <motion.section
                  key={cat.key}
                  ref={(el) => {
                    categoryRefs.current[cat.key] = el;
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={sectionVariants}
                  id={`category-${cat.key}`}
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-text">
                        {cat.label}
                      </h2>
                      <div className="mt-1.5 w-16 h-1 bg-primary/30 rounded-full" />
                    </div>
                  </div>

                  {/* Items Grid */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                  >
                    {sectionItems.map((item, i) => (
                      <MenuCard key={item.id} item={item} index={i} />
                    ))}
                  </motion.div>
                </motion.section>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}
