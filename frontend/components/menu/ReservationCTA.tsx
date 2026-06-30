"use client";

import { Button, Container } from "@/components/ui";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { easeSmooth } from "./constants";

export function ReservationCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=800&fit=crop&q=80"
          alt="Restaurant ambiance"
          fill
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 size-80 rounded-full border border-accent/10" />

        <Container className="relative z-10 flex min-h-[420px] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeSmooth }}
            className="max-w-2xl text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              <Sparkles className="size-3.5" /> Reserve Your Experience
            </span>
            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
              Found Your Favorite Dish?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Book a table and savor the flavors of The Spoon. Whether it&apos;s
              a romantic dinner or a family celebration, we&apos;re ready to
              welcome you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/reservations">
                <Button variant="accent" size="lg">
                  Book a Table <ArrowRight className="size-4 ml-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <Phone className="size-4 mr-1" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
