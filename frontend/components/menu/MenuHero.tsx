"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { easeSmooth } from "./constants";

export function MenuHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-bg-dark pt-24 lg:pt-28"
    >
      {/* Background image */}
      <motion.div style={{ scale: heroScale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop&q=80"
          alt="Elegant restaurant dining"
          fill
          sizes="100vw"
          className="object-cover"
          unoptimized
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bg-dark/90" />

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 px-4 text-center"
      >
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60"
        >
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <span className="text-accent">Menu</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeSmooth, delay: 0.2 }}
          className="font-heading text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.1] text-white"
        >
          Explore Our Menu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeSmooth, delay: 0.35 }}
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          A curated selection of dishes crafted with passion, from wood-fired
          pizzas to slow-smoked BBQ — each plate tells a story of flavor and
          tradition.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/50"
          >
            <ChevronDownIcon className="size-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
