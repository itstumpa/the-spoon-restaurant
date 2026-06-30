"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { featuredDishes } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const dishVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const tagColors: Record<string, string> = {
  GF: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  V: "bg-violet-500/15 text-violet-600 border-violet-500/30",
  DF: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  Chef: "bg-amber-500/15 text-amber-600 border-amber-500/30",
};

export default function PopularDishes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading
            badge="Popular Dishes"
            title="Guest Favorites"
            subtitle="Our most ordered dishes — loved by thousands of guests who keep coming back for these signature flavors."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredDishes.map((dish, i) => (
              <motion.article
                key={dish.id}
                variants={dishVariants}
                custom={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Dietary tags */}
                  {dish.tags && dish.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border",
                            tagColors[tag] || "bg-white/80 text-text border-white/20",
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* View icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-primary backdrop-blur-sm">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">
                        {dish.name}
                      </h3>
                      <p className="mt-2 text-text-muted font-body text-sm sm:text-base leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                      <span className="text-sm font-semibold text-text">4.9</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-primary font-heading font-bold text-lg sm:text-xl">
                      {dish.price}
                    </span>
                    <span className="text-text-muted text-sm font-body">Per serving</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View Full Menu CTA */}
          <motion.div
            variants={dishVariants}
            custom={featuredDishes.length}
            className="mt-12 text-center"
          >
            <Link href="/menu">
              <Button variant="default" size="lg" className="shadow-elevated">
                View Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}