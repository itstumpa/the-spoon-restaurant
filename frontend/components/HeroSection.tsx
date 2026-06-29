"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const heroWordVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const floatingVariants2 = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 },
  },
};

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.98]);

  return (
    <motion.section
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,133,58,0.06),transparent_60%)]"
        aria-hidden="true"
      />

      {/* Decorative floating shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-[15%] left-[8%] h-32 w-32 rounded-full border border-primary/10 bg-primary/5 blur-sm"
        aria-hidden="true"
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute top-[25%] right-[12%] h-24 w-24 rounded-full border border-accent/10 bg-accent/5 blur-sm"
        aria-hidden="true"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-[20%] left-[15%] h-20 w-20 rounded-full border border-primary/8 bg-primary/3 blur-sm"
        aria-hidden="true"
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute bottom-[30%] right-[8%] h-40 w-40 rounded-full border border-accent/8 bg-accent/3 blur-sm"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent backdrop-blur-sm">
              Austin&apos;s Favorite Kitchen
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="max-w-4xl font-heading text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            {"Simple Ingredients.".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  variants={heroWordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <br />
            {"Soulful Flavors.".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  variants={heroWordVariants}
                  className="inline-block text-primary"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            Experience warm American hospitality at The Spoon. Fresh local
            ingredients, homestyle cooking, and a cozy atmosphere in the heart
            of Austin, Texas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/menu">
              <Button
                variant="default"
                size="lg"
                className="h-12 min-w-[180px] rounded-xl px-8 text-base font-semibold shadow-elevated"
              >
                View Menu
              </Button>
            </Link>
            <Link href="/reservations">
              <Button
                variant="accent"
                size="lg"
                className="h-12 min-w-[180px] rounded-xl px-8 text-base font-semibold shadow-elevated"
              >
                Book a Table
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
