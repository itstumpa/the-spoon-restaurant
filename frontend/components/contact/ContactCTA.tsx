"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { easeOut } from "./contact-variants";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-14 lg:py-20">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=800&fit=crop&q=80"
          alt=""
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,133,58,0.1),transparent_70%)]"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white">
            Ready for an Unforgettable <br />
            Dining Experience?
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-white/70 sm:text-lg">
            Reserve your table today and discover why The Spoon is
            Austin&apos;s favorite destination for Mediterranean-inspired
            cuisine.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/reservations"
              className="inline-flex min-h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-lg border border-transparent bg-accent px-3.5 text-base font-medium text-accent-foreground transition-all hover:bg-accent/80 focus-visible:outline-none select-none"
            >
              <CalendarDays className="h-4 w-4" />
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex min-h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-3.5 text-base font-medium text-white transition-all hover:bg-white/10 focus-visible:outline-none select-none"
            >
              View Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
