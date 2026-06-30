"use client";

import { Container } from "@/components/ui";
import { motion } from "framer-motion";
import { Camera, ImageUp, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { easeSmooth } from "./constants";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop&q=80",
    alt: "Elegant restaurant interior",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=600&fit=crop&q=80",
    alt: "Chef plating a dish",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop&q=80",
    alt: "Beautifully presented food",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=600&fit=crop&q=80",
    alt: "Restaurant ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=600&fit=crop&q=80",
    alt: "Happy customers dining",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&q=80",
    alt: "Modern kitchen interior",
  },
];

export function GalleryPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: easeSmooth }}
          className="mb-8 flex items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            <Camera className="size-3" /> Gallery
          </span>
          <span className="h-px flex-1 bg-border/40" />
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: easeSmooth,
                delay: index * 0.06,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-110"
                unoptimized
              />

              {/* Overlay */}
              <motion.div
                initial={false}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex size-12 items-center justify-center rounded-full border-2 border-white/60 text-white/80"
                >
                  <ImageUp className="size-5" />
                </motion.div>
              </motion.div>

              {/* Corner accent */}
              <div className="absolute bottom-2 right-2 flex size-7 items-center justify-center rounded-md bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="size-3 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
