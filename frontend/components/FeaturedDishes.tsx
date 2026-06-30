"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { featuredDishes } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const tagColors: Record<string, string> = {
  GF: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  V: "bg-violet-500/15 text-violet-600 border-violet-500/30",
  DF: "bg-blue-500/15 text-blue-600 border-blue-500/30",
};

export default function FeaturedDishes() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-3 lg:py-8 overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <SectionHeading
            badge="Chef's Specials"
            title="American Classics"
            subtitle="Our most beloved dishes, crafted with passion and the finest Mediterranean ingredients."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredDishes.map((dish, i) => (
              <motion.article
                key={dish.id}
                variants={dishVariants}
                custom={i}
                className="group bg-bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                            tagColors[tag] ||
                              "bg-white/80 text-text border-white/20",
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
                <div className="p-4 sm:p-5">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-text-muted font-body text-sm sm:text-base leading-relaxed">
                    {dish.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-primary font-heading font-bold text-lg sm:text-xl">
                      {dish.price}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View Full Menu CTA */}
          <motion.div
            variants={dishVariants}
            custom={4}
            className="mt-8 text-center"
          >
            <Link href="/menu">
              <Button variant="default" size="lg">
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
