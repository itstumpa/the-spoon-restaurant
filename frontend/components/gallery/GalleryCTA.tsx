"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ctaImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1000&fit=crop&q=85";

export default function GalleryCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-bg-dark"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={ctaImage}
          alt="Restaurant dining experience"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
          priority
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,140,46,0.12),transparent_60%)]" />

      {/* Content */}
      <Container className="relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm"
          >
            Join Us
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white"
          >
            Ready to Experience It Yourself?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base leading-relaxed text-white/65 md:text-lg"
          >
            From the first bite to the last toast, every moment at The Spoon is
            crafted to be unforgettable. Book your table today and discover what
            makes us special.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/reservations">
              <Button
                variant="accent"
                size="lg"
                className="h-12 px-8 text-base"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Table
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="outline"
                size="lg"
                className="h-12 border-white/20 bg-white/10 px-8 text-base text-white backdrop-blur-sm hover:bg-white/20"
              >
                Explore Menu
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
