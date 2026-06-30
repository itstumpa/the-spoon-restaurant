"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import type { NewsItem } from "@/types";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

/* ─────────────────────── Data ─────────────────────── */

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "Seasonal Menu",
    date: "2025-06-28",
    title: "Summer Harvest Tasting Menu Now Available",
    excerpt:
      "Celebrate the season with our new summer menu, featuring heirloom tomatoes, fresh herbs, and locally sourced produce.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 2,
    category: "Wine & Spirits",
    date: "2025-06-22",
    title: "An Evening With Our Sommelier: Wine Pairing Guide",
    excerpt:
      "Our sommelier shares expert tips on pairing wines with each course of your dining experience.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=150&h=150&fit=crop&q=80",
  },
  {
    id: 3,
    category: "Sustainability",
    date: "2025-06-15",
    title: "Farm to Table: Meet Our Local Partners",
    excerpt:
      "We sit down with the growers and farmers who supply The Spoon with the freshest seasonal ingredients.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&h=150&fit=crop&q=80",
  },
];

const featuredArticle: NewsItem & { readTime?: string } = {
  id: 0,
  category: "Behind the Scenes",
  date: "2025-06-30",
  title: "Behind the Scenes In Our Kitchen",
  excerpt:
    "Step inside the heart of The Spoon and meet the team that brings our award-winning dishes to life, from early morning prep to final plating.",
  image:
    "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=1000&fit=crop&q=80",
  readTime: "5 min read",
};

/* ─────────────────── Framer Variants ─────────────────── */

const headerVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const listItemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.25 + i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const featuredVariants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─────────────────── Helpers ─────────────────── */

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* ─────────────────── Component ─────────────────── */

export default function LatestNews() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Featured card pagination state
  const totalFeatured = 3;
  const [featuredIdx, setFeaturedIdx] = useState(0);

  const prevFeatured = () =>
    setFeaturedIdx((p) => (p - 1 + totalFeatured) % totalFeatured);
  const nextFeatured = () =>
    setFeaturedIdx((p) => (p + 1) % totalFeatured);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 lg:py-20 bg-bg overflow-hidden"
    >
      {/* ── Premium Background Gradients ── */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_30%,rgba(109,140,46,0.06),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/3 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,133,58,0.05),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-primary/[0.03] blur-2xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 xl:gap-20">
          {/* ═══════════ LEFT COLUMN (40%) ═══════════ */}
          <div className="lg:col-span-2">
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Badge */}
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                News &amp; Blog
              </span>

              {/* Heading */}
              <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-text">
                Latest News &amp; Updates
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-md text-base leading-relaxed text-text-muted font-body">
                Stay updated with our latest menus, chef events, seasonal
                offers, and behind-the-scenes stories.
              </p>
            </motion.div>

            {/* ── News List ── */}
            <div className="mt-10 space-y-1">
              {newsItems.map((item, i) => (
                <motion.article
                  key={item.id}
                  custom={i}
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <div className="group flex items-start gap-4 rounded-2xl p-3 transition-colors duration-300 hover:bg-primary/[0.04] cursor-pointer">
                    {/* Thumbnail */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.06] rounded-xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Category */}
                      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>

                      {/* Title */}
                      <h3 className="mt-1.5 truncate font-heading text-sm font-bold text-text sm:text-base">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-0.5 line-clamp-1 text-sm text-text-muted font-body">
                        {item.excerpt}
                      </p>

                      {/* Date */}
                      <time
                        dateTime={item.date}
                        className="mt-1 block text-xs text-text/50 font-body"
                      >
                        {formatDate(item.date)}
                      </time>
                    </div>

                    {/* Arrow button */}
                    <button
                      type="button"
                      className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-text/40 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white group-hover:shadow-sm"
                      aria-label={`Read ${item.title}`}
                    >
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </div>

                  {/* Subtle divider (not after last) */}
                  {i < newsItems.length - 1 && (
                    <div className="ml-[116px] border-b border-border/60" />
                  )}
                </motion.article>
              ))}
            </div>

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8"
            >
              <Button variant="default" size="lg" className="gap-2">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* ═══════════ RIGHT COLUMN (60%) ═══════════ */}
          <div className="lg:col-span-3">
            <motion.article
              variants={featuredVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group relative overflow-hidden rounded-3xl bg-bg-dark shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-auto lg:h-[600px] xl:h-[640px]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 via-45% to-transparent" />

                {/* Subtle top-left glass accent */}
                <div className="absolute left-6 top-6">
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    Featured
                  </span>
                </div>

                {/* ── Bottom content overlay ── */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                  {/* Accent line */}
                  <div className="mb-4 h-0.5 w-12 rounded-full bg-accent" />

                  <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 font-body sm:text-base">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Read time */}
                  {featuredArticle.readTime && (
                    <p className="mt-2 text-xs text-white/50 font-body">
                      {featuredArticle.readTime}
                    </p>
                  )}

                  {/* CTA */}
                  <div className="mt-5">
                    <button
                      type="button"
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-text shadow-lg transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-xl"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* ── Bottom-right navigation ── */}
                <div className="absolute bottom-6 right-6 hidden items-center gap-3 sm:flex lg:bottom-8 lg:right-8">
                  <button
                    type="button"
                    onClick={prevFeatured}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/60 transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white"
                    aria-label="Previous article"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <span className="font-heading text-sm font-medium tracking-wider text-white/60">
                    {String(featuredIdx + 1).padStart(2, "0")}
                    <span className="mx-1 text-white/30">/</span>
                    {String(totalFeatured).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={nextFeatured}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/60 transition-all duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white"
                    aria-label="Next article"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
