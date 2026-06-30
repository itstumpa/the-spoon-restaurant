"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { fadeUp, scaleIn, staggerContainer } from "./about-variants";

export default function OurStory({
  onOpenLightbox,
}: {
  onOpenLightbox: (index: number) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-6 md:py-12 bg-bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Bento Image Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {/* Image 1 - tall */}
            <motion.div
              variants={scaleIn}
              custom={0}
              className="relative row-span-2 rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
              onClick={() => onOpenLightbox(0)}
            >
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=800&fit=crop&q=80"
                alt="Elegant restaurant dining area"
                fill
                unoptimized
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              variants={scaleIn}
              custom={1}
              className="relative h-40 sm:h-48 md:h-56 rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
              onClick={() => onOpenLightbox(1)}
            >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&q=80"
                alt="Open kitchen with chefs"
                fill
                unoptimized
                sizes="(max-width: 1024px) 25vw, 200px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              variants={scaleIn}
              custom={2}
              className="relative h-40 sm:h-48 md:h-56 rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
              onClick={() => onOpenLightbox(2)}
            >
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80"
                alt="Beautifully plated dish"
                fill
                unoptimized
                sizes="(max-width: 1024px) 25vw, 200px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} custom={0}>
              <SectionHeading
                badge="Since 2010"
                title="From Maple Street to Your Plate"
                subtitle="What started as a small family kitchen on Maple Street has grown into a gathering place for Mediterranean-inspired dining."
                align="left"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-text-muted font-body text-base leading-relaxed"
            >
              Every dish tells a story — from the sun-ripened tomatoes and
              aromatic herbs we source from local farms to the time-honored
              recipes inspired by the coasts of Greece, Italy, and Morocco. We
              believe the best meals are shared, and the warmest memories are
              made around a table full of vibrant, soulful food.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-text-muted font-body text-base leading-relaxed"
            >
              At The Spoon, you&apos;re not just a guest — you&apos;re family.
              Whether you&apos;re joining us for wood-grilled specialties,
              sharing small plates with friends, or celebrating a special
              occasion, we promise a Mediterranean experience that lingers long
              after the last bite.
            </motion.p>

            {/* Founder signature */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="pt-4 flex items-center gap-4"
            >
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
                  alt="Founder"
                  fill
                  unoptimized
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-text">
                  Marco Valenti
                </p>
                <p className="text-sm text-text-muted font-body">
                  Founder &amp; Head Chef
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={4}>
              <Link href="/menu">
                <Button variant="accent" size="lg">
                  Explore Our Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
