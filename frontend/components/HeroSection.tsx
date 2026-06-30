"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trustIndicators = [
  "Fresh Ingredients",
  "Award Winning Chefs",
  "Same Day Reservation",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const leftItemVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.97]);
  const imageParallax = useTransform(scrollYProgress, [0, 0.2], [0, 60]);
  const contentParallax = useTransform(scrollYProgress, [0, 0.2], [0, 30]);

  return (
    <motion.section
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-dark pt-20"
    >
      {/* ---- Premium Background Effects ---- */}
      {/* Main green radial glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_50%,rgba(109,140,46,0.15),transparent_70%)]"
        aria-hidden="true"
      />
      {/* Amber accent glow */}
      <div
        className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,133,58,0.08),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      {/* Subtle top-right light */}
      <div
        className="absolute top-0 right-0 h-64 w-64 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04),transparent_70%)]"
        aria-hidden="true"
      />
      {/* Glassmorphism accent shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-[12%] left-[4%] h-40 w-40 rounded-full border border-white/[0.04] bg-white/[0.03] blur-xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute bottom-[18%] right-[6%] h-64 w-64 rounded-full border border-white/[0.02] bg-white/[0.01] blur-2xl"
        aria-hidden="true"
      />
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full  py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)] py-16 lg:py-0"
        >
          {/* ---- Left Column ---- */}
          <div className="flex flex-col ">
            {/* Premium Badge */}
            <motion.div variants={fadeUpVariants}>
              <span className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Fresh &bull; Organic &bull; Mediterranean
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={leftItemVariants}
              className="max-w-xl font-heading text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight text-white"
            >
              Where <span className="text-primary-lighter">Mediterranean</span>
              <br />
              Meets the <span className="text-accent">Table</span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white font-body"
            >
              Farm-fresh ingredients, inspired by the sun-drenched coasts of the
              Mediterranean. Every dish is a celebration of flavor, crafted with
              passion and served with warmth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Link href="/reservations">
                <Button
                  variant="default"
                  size="lg"
                  className="h-12 min-w-[180px] rounded-xl px-8 text-base font-semibold shadow-elevated bg-primary hover:bg-primary-light text-white"
                >
                  Reserve a Table
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/menu">
                <Button
                  variant="accent"
                  size="lg"
                  className="h-12 min-w-[160px] rounded-xl px-8 text-base font-semibold shadow-elevated"
                >
                  Explore Menu
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
            >
              {trustIndicators.map((indicator) => (
                <span
                  key={indicator}
                  className="inline-flex items-center gap-2 text-sm text-white font-body"
                >
                  <Check className="h-4 w-4 text-primary-lighter shrink-0" />
                  {indicator}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ---- Right Column — Premium Food Image ---- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92, x: 50 },
              visible: {
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: 0.4,
                },
              },
            }}
            className="relative w-full max-w-lg lg:ml-auto"
          >
            <motion.div
              style={{ y: imageParallax }}
              className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&h=1250&fit=crop&q=85"
                alt="Premium grilled steak with roasted vegetables and herbs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
            </motion.div>

            {/* Decorative frame accent */}
            <div
              className="absolute -bottom-5 -left-5 lg:-bottom-8 lg:-left-8 w-full h-full rounded-3xl border border-white/5 -z-10"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
      </motion.div>
    </motion.section>
  );
}
