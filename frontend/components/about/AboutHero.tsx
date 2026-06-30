"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] sm:h-[65vh] md:h-[70vh] overflow-hidden pt-24 lg:pt-28">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=1000&fit=crop&q=80"
        alt="Elegant restaurant interior"
        fill
        unoptimized
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,140,46,0.15),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-3xl"
        >
          <span className="inline-block mb-4 rounded-full bg-accent/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm border border-accent/20">
            Our Story
          </span>

          <h1 className="font-heading text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-white leading-tight mb-4">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
              Our Restaurant
            </span>
          </h1>

          <p className="text-white/80 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A journey of flavor, family, and tradition — discover what makes The
            Spoon a beloved Austin landmark.
          </p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 rounded-full border-2 border-white/30 mx-auto flex justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-accent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
