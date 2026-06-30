"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredSet } from "@/lib/gallery-data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function FeaturedGallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { featured, supporting } = featuredSet;

  return (
    <section ref={ref} className="py-3 md:py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="Featured"
            title="Moments That Define Us"
            subtitle="A curated selection of our most cherished captures — from the kitchen to the dining room."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
        >
          {/* Large featured image */}
          <motion.div
            variants={itemVariants}
            className="relative col-span-1 overflow-hidden rounded-xl md:col-span-2"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="mb-1 inline-block rounded-full bg-accent/90 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                Featured
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold text-white md:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-1 text-sm text-white/70">
                {featured.description}
              </p>
            </div>
          </motion.div>

          {/* Supporting images stacked */}
          <div className="flex flex-col gap-4 md:gap-6">
            {supporting.map((img) => (
              <motion.div
                key={img.id}
                variants={itemVariants}
                className="group relative flex-1 overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[160px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-heading text-base font-semibold text-white md:text-lg">
                    {img.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-white/60 md:text-sm">
                    {img.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
