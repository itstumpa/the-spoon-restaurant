"use client";

import type { GalleryImage } from "@/types/gallery";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GalleryCard from "./GalleryCard";

interface MasonryGalleryProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

interface BentoSpan {
  col: number;
  row: number;
}

function getBentoSpan(index: number, total: number): BentoSpan {
  // 12-item bento pattern — fills exactly 4 rows × 4 columns
  // ┌──────────┬──────┬──────┐
  // │  HERO    │  a   │  b   │
  // │  (2×2)   │──────┼──────┤
  // │          │  c   │  d   │
  // ├────┬─────┤──────┴──────┤
  // │WIDE(2×1) │  e   │  f   │
  // ├────┴─────┼──────┼──────┤
  // │  g   │ h │  i   │  j   │
  // └──────┴───┴──────┴──────┘
  const pattern: BentoSpan[] = [
    { col: 2, row: 2 }, // 0: Hero anchor
    { col: 1, row: 1 }, // 1
    { col: 1, row: 1 }, // 2
    { col: 1, row: 1 }, // 3
    { col: 1, row: 1 }, // 4
    { col: 2, row: 1 }, // 5: Wide
    { col: 1, row: 1 }, // 6
    { col: 1, row: 1 }, // 7
    { col: 1, row: 1 }, // 8
    { col: 1, row: 1 }, // 9
    { col: 1, row: 1 }, // 10
    { col: 1, row: 1 }, // 11
  ];

  const span = pattern[index % 12];

  // Avoid orphaned large spans near the end
  if (total - index <= 1 && span.row > 1) {
    return { col: 1, row: 1 };
  }

  return span;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export default function MasonryGallery({
  images,
  onImageClick,
}: MasonryGalleryProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-text-muted">No images found for this category.</p>
      </div>
    );
  }

  return (
    <section ref={ref} className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5"
          style={{ gridAutoFlow: "dense" }}
        >
          {images.map((image, index) => {
            const span = getBentoSpan(index, images.length);
            return (
              <GalleryCard
                key={image.id}
                image={image}
                index={index}
                colSpan={span.col}
                rowSpan={span.row}
                onClick={() => onImageClick(index)}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
