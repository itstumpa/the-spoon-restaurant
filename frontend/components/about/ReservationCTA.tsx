"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReservationCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&h=900&fit=crop&q=80"
        alt="Restaurant ambiance"
        fill
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,140,46,0.15),transparent_60%)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block mb-4 rounded-full bg-accent/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm border border-accent/20">
            Join Us
          </span>

          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-4">
            Ready to Experience The Spoon?
          </h2>

          <p className="text-white/70 font-body text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Book a table and taste the warmth of homestyle cooking — we&apos;ll
            save you a seat. Whether it&apos;s a romantic dinner or a family
            celebration, every meal at The Spoon is an occasion to remember.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reservations">
              <Button
                variant="accent"
                size="lg"
                className="text-base px-8 py-6"
              >
                <span className="mr-2">Book a Table</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="outline-accent"
                size="lg"
                className="text-base px-8 py-6"
              >
                Explore Menu
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
