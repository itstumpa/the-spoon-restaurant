"use client";

import { Container } from "@/components/ui/Container";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  Leaf,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* ──────────────── Framer Variants ──────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const bentoVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.96 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const contentVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

/* ──────────────── Bento image data ──────────────── */

const bentoImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=700&fit=crop&q=80",
    alt: "Elegant restaurant interior with warm lighting",
    gridClass: "col-span-1 row-span-2",
    aspectClass: "aspect-[4/3] sm:aspect-auto sm:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop&q=80",
    alt: "Beautifully plated signature dish",
    gridClass: "col-span-1 row-span-1",
    aspectClass: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=600&fit=crop&q=80",
    alt: "Chef preparing a gourmet meal",
    gridClass: "col-span-1 row-span-1",
    aspectClass: "aspect-square",
  },
];

/* ──────────────── Feature highlights ──────────────── */

const highlights = [
  {
    icon: Award,
    label: "Award-Winning Cuisine",
    desc: "Recognized for culinary excellence",
  },
  {
    icon: Leaf,
    label: "Farm-Fresh Ingredients",
    desc: "Sourced from local growers daily",
  },
  {
    icon: Users,
    label: "Exceptional Service",
    desc: "Where every guest feels at home",
  },
];

/* ──────────────── Component ──────────────── */

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden bg-bg"
    >
      {/* ── Premium Background Gradients ── */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(109,140,46,0.05),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,133,58,0.06),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-primary/[0.03] blur-2xl"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center"
        >
          {/* ═══════ LEFT: Bento Grid (55%) ═══════ */}
          <div className="lg:col-span-7 relative w-full">
            {/* ── Full bento grid (md+) ── */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-3 md:gap-4 auto-rows-auto">
              {bentoImages.map((img, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={bentoVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg border border-black/[0.06] ${img.gridClass} ${img.aspectClass}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-xl"
                    unoptimized
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Image ring */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/[0.06]" />
                </motion.div>
              ))}
            </div>

            {/* ── Single hero image (sm and below) ── */}
            <div className="sm:hidden">
              <motion.div
                custom={0}
                variants={bentoVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative overflow-hidden rounded-2xl shadow-xl border border-black/[0.06] aspect-[4/3] w-full"
              >
                <Image
                  src={bentoImages[0].src}
                  alt={bentoImages[0].alt}
                  fill
                  sizes="90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/[0.06]" />
              </motion.div>
            </div>

            {/* ── Floating Badge: 15+ Years ── */}
            <motion.div
              custom={0}
              variants={bentoVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute -left-2 -top-3 sm:-left-4 sm:-top-4 z-30"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
                className="flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white/90 px-3 py-2 shadow-2xl backdrop-blur-xl sm:gap-2.5 sm:rounded-2xl sm:px-4 sm:py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent sm:h-9 sm:w-9">
                  <Star className="h-3 w-3 fill-accent sm:h-4 sm:w-4" />
                </span>
                <div>
                  <p className="font-heading text-xs font-bold text-text sm:text-sm">
                    15+ Years
                  </p>
                  <p className="text-[10px] text-text-muted font-body sm:text-[11px]">
                    of Excellence
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ═══════ RIGHT: Story Content (45%) ═══════ */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-6"
          >
            {/* Badge */}
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </span>

            {/* Heading */}
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-text">
              Where Every Meal
              <br />
              Feels Like Home
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-text-muted font-body text-base leading-relaxed">
              <p>
                Nestled in the heart of Austin, The Spoon brings the
                sun-soaked flavors of the Mediterranean to your table. Every
                dish is crafted with passion, using time-honored recipes
                passed down through generations.
              </p>
              <p>
                We believe that great food starts with great ingredients.
                That&apos;s why we partner with local farms and artisans to
                source the freshest produce, premium olive oils, and
                sustainably raised proteins — ensuring every bite tells a
                story of quality and care.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-start gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <h.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-text">
                      {h.label}
                    </p>
                    <p className="text-sm text-text-muted font-body">
                      {h.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              custom={3}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>


          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
