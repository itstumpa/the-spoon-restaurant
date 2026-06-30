"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const newsItems = [
  {
    id: 1,
    category: "Seasonal Menu",
    date: "2024-12-15",
    readTime: "3 min read",
    title: "Winter Truffle Menu Launches This Friday",
    excerpt:
      "Experience the earthy elegance of black winter truffles in our exclusive seasonal tasting menu, featuring seven courses paired with rare vintages.",
    image:
      "https://images.unsplash.com/photo-1472191258689-2e5d5e6f0f7d?w=600&h=400&fit=crop&q=80",
    author: "Chef Marco Rossi",
  },
  {
    id: 2,
    category: "Events",
    date: "2024-12-10",
    readTime: "2 min read",
    title: "New Year's Eve Gala — Reserve Your Table",
    excerpt:
      "Ring in 2025 with our spectacular gala dinner. Live jazz, champagne reception, and a midnight tasting menu crafted by our executive chef.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&q=80",
    author: "Events Team",
  },
  {
    id: 3,
    category: "Sustainability",
    date: "2024-12-05",
    readTime: "4 min read",
    title: "Our Journey to Zero-Waste Kitchen",
    excerpt:
      "Discover how The Spoon achieved 94% waste diversion through composting, creative upcycling, and partnerships with local urban farms.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop&q=80",
    author: "Sustainability Director",
  },
];

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export default function LatestNews() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-20 bg-bg"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(109,140,46,0.04),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            badge="Latest News"
            title="Stories from Our Kitchen"
            subtitle="Discover seasonal menus, upcoming events, and the philosophy behind our craft."
            light={false}
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-white/50"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary">
                      <Tag className="h-3 w-3" />
                      {item.category}
                    </span>
                  </div>
                  {/* Read time */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-medium text-text">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-[calc(100%-240px)] min-h-[280px]">
                  <time
                    dateTime={item.date}
                    className="flex items-center gap-1.5 text-sm text-text/60 font-body mb-3"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>

                  <Link href={`/blog/${item.id}`} className="group">
                    <h3 className="font-heading text-xl font-bold text-text group-hover:text-primary transition-colors duration-300 mb-3 leading-snug">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-text/70 font-body text-base leading-relaxed mb-4 flex-1">
                    {item.excerpt}
                  </p>

                  <Link
                    href={`/blog/${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors duration-300 group"
                  >
                    Read Story
                    <motion.div
                      layoutId={`arrow-${item.id}`}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </div>

                {/* Author footer */}
                <div className="border-t border-text/10 px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary">
                      {item.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">
                      {item.author}
                    </p>
                    <p className="text-xs text-text/50">Executive Chef</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-14 text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              View All Stories
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
