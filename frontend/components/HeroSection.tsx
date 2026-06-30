"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
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
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const leftItemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.97]);
  const imageParallax = useTransform(scrollYProgress, [0, 0.2], [0, 40]);

  return (
    <motion.section
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-dark"
    >
      {/* ---- Premium Background Effects ---- */}
      {/* Main green radial glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(58,90,64,0.12),transparent_70%)]"
        aria-hidden="true"
      />
      {/* Amber accent glow */}
      <div
        className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,133,58,0.06),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      {/* Subtle top-right light */}
      <div
        className="absolute top-0 right-0 h-64 w-64 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_70%)]"
        aria-hidden="true"
      />
      {/* Glassmorphism accent shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-[15%] left-[5%] h-40 w-40 rounded-full border border-white/[0.03] bg-white/[0.02] blur-xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute bottom-[20%] right-[8%] h-56 w-56 rounded-full border border-white/[0.02] bg-white/[0.01] blur-2xl"
        aria-hidden="true"
      />
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)] py-20 lg:py-0"
        >
          {/* ---- Left Column ---- */}
          <div className="flex flex-col">
            {/* Premium Badge */}
            <motion.div variants={fadeUpVariants}>
              <span className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent" />
                Fresh &bull; Organic &bull; Mediterranean
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={leftItemVariants}
              className="max-w-xl font-heading text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-white"
            >
              Where <span className="text-primary-lighter">Mediterranean</span>
              <br />
              Meets the <span className="text-accent">Table</span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-white font-body"
            >
              Farm-fresh ingredients, inspired by the sun-drenched coasts of the
              Mediterranean. Every dish is a celebration of flavor, crafted with
              passion and served with warmth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
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
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustIndicators.map((indicator) => (
                <span
                  key={indicator}
                  className="inline-flex items-center gap-2 text-sm text-white font-body"
                >
                  <Check className="h-3.5 w-3.5 text-primary-lighter" />
                  {indicator}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ---- Right Column — Premium Food Image ---- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92, x: 40 },
              visible: {
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: 0.3,
                },
              },
            }}
            className="relative"
          >
            <motion.div
              style={{ y: imageParallax }}
              className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=1000&fit=crop&q=85"
                alt="Premium grilled steak with roasted vegetables"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Decorative frame accent */}
            <div
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-full h-full rounded-3xl border border-white/5 -z-10"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
