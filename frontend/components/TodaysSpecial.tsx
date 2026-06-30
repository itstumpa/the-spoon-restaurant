"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Clock, Flame, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const specials = [
  {
    id: "sp1",
    name: "Mediterranean Sea Bass",
    description:
      "Whole branzino grilled with lemon, oregano, and extra virgin olive oil. Served with roasted seasonal vegetables and herb quinoa.",
    price: "$34.00",
    originalPrice: "$38.00",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop&q=80",
    badge: "Chef's Special",
    badgeColor: "bg-accent text-accent-foreground",
    tags: ["GF", "DF"],
    icon: Flame,
  },
  {
    id: "sp2",
    name: "Lamb Tagine",
    description:
      "Slow-braised Moroccan lamb with apricots, almonds, and ras el hanout. Served with saffron couscous and preserved lemon yogurt.",
    price: "$32.00",
    originalPrice: "$36.00",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&q=80",
    badge: "Limited Time",
    badgeColor: "bg-primary text-primary-foreground",
    tags: ["DF"],
    icon: Sparkles,
  },
  {
    id: "sp3",
    name: "Vegetarian Moussaka",
    description:
      "Layers of eggplant, zucchini, potatoes, and rich béchamel sauce. Baked to golden perfection with a side of Greek salad.",
    price: "$24.00",
    originalPrice: "$28.00",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80",
    badge: "Vegetarian",
    badgeColor: "bg-emerald-500 text-white",
    tags: ["V", "GF"],
    icon: Leaf,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

const tagColors: Record<string, string> = {
  GF: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  V: "bg-violet-500/15 text-violet-600 border-violet-500/30",
  DF: "bg-blue-500/15 text-blue-600 border-blue-500/30",
};

export default function TodaysSpecial() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-bg-dark">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(58,90,64,0.12),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading
            badge="Today's Special"
            title="Chef's Daily Creations"
            subtitle="Limited availability — crafted fresh each morning with the finest seasonal ingredients."
            light
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {specials.map((special, i) => (
              <motion.article
                key={special.id}
                variants={itemVariants}
                custom={i}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={special.image}
                    alt={special.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${special.badgeColor}`}
                    >
                      {special.badge}
                    </span>
                  </div>
                  {/* Timer indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white/90 text-xs font-medium">
                    <Clock className="h-3 w-3 text-accent" aria-hidden="true" />
                    <span>Available Today</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  {/* Tags */}
                  {special.tags && special.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {special.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${tagColors[tag]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary-lighter transition-colors duration-300">
                    {special.name}
                  </h3>
                  <p className="mt-2 text-white/70 font-body text-sm leading-relaxed">
                    {special.description}
                  </p>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-2xl font-heading font-bold text-accent">
                      {special.price}
                    </span>
                    <span className="text-white/40 line-through text-sm">
                      {special.originalPrice}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                      <special.icon className="h-3 w-3" aria-hidden="true" />
                      Save 10%
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            custom={specials.length}
            className="mt-12 text-center"
          >
            <Link href="/menu">
              <Button
                variant="outline-accent"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Full Menu
                <svg
                  className="ml-2 h-4 w-4"
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
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
