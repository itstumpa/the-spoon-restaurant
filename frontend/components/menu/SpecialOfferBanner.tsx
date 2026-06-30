"use client";

import { Button, Container } from "@/components/ui";
import { motion } from "framer-motion";
import { ArrowRight, Percent } from "lucide-react";
import Image from "next/image";
import { easeSmooth } from "./constants";

export function SpecialOfferBanner() {
  return (
    <section className="relative overflow-hidden bg-bg-dark">
      <div className="relative mx-auto max-w-[1440px]">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=800&fit=crop&q=80"
            alt="Weekend special"
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/95 via-bg-dark/80 to-bg-dark/95" />
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border border-accent/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full border border-accent/10" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center justify-between gap-8 py-16 md:flex-row">
            {/* Text */}
            <div className="max-w-xl text-center md:text-left">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent"
              >
                <Percent className="size-3.5" /> Limited Offer
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-white"
              >
                Weekend Special — <span className="text-accent">20% Off</span>{" "}
                All Pasta & Pizza
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-base leading-relaxed text-white/70"
              >
                Every Friday through Sunday, enjoy our handcrafted pasta and
                wood-fired pizzas at a delicious discount. Dine-in or takeout —
                the taste of Italy awaits.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                <Button variant="accent" size="lg">
                  Claim Offer <ArrowRight className="size-4 ml-1" />
                </Button>
                <p className="text-xs text-white/50">
                  *Valid Fri–Sun. Cannot combine with other offers.
                </p>
              </motion.div>
            </div>

            {/* Decorative image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeSmooth }}
              className="relative shrink-0"
            >
              <div className="relative size-48 overflow-hidden rounded-2xl shadow-2xl md:size-56">
                <Image
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop&q=80"
                  alt="Pasta special"
                  fill
                  sizes="224px"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                <div className="absolute -bottom-2 -right-2 flex size-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-lg">
                  20%
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
