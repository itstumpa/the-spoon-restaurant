"use client";

import { Button, Container } from "@/components/ui";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { easeSmooth } from "./constants";

export function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1920&h=800&fit=crop&q=80"
          alt="Restaurant atmosphere"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          unoptimized
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-white">
            Experience These Stories in Person
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
            Every article comes to life on our plates. Visit The Spoon and taste
            the recipes, meet the chefs, and create your own story.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/reservations">
              <Button variant="accent" size="lg">
                <ChefHat className="mr-2 size-4" />
                Book a Table
                <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <UtensilsCrossed className="mr-2 size-4" />
                View Our Menu
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
