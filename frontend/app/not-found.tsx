"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Home, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,133,58,0.06),transparent_60%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          {/* Large decorative 404 */}
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="text-[clamp(6rem,15vw,12rem)] font-heading font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none"
          >
            404
          </motion.p>

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring" as const,
              stiffness: 250,
              damping: 18,
            }}
            className="flex items-center justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
              <UtensilsCrossed className="w-8 h-8 text-accent" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm"
          >
            Page Not Found
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mt-4"
          >
            Looks like you wandered <br className="hidden sm:block" />
            off the menu
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 text-white/60 font-body text-base sm:text-lg max-w-md mx-auto leading-relaxed"
          >
            The page you are looking for does not exist or has been moved. Let
            us get you back to something delicious.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/">
              <Button variant="default" size="lg">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline-accent" size="lg">
                <ArrowLeft className="w-4 h-4" />
                View Our Menu
              </Button>
            </Link>
          </motion.div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12 text-white/30 font-body text-xs tracking-wider uppercase"
          >
            The Spoon — Simple Ingredients. Soulful Flavors.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
