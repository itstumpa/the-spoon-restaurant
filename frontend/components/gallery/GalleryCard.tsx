"use client";

import type { GalleryImage } from "@/types/gallery";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

interface GalleryCardProps {
  image: GalleryImage;
  index: number;
  colSpan?: number;
  rowSpan?: number;
  onClick: () => void;
}

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.97 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function GalleryCard({
  image,
  index,
  colSpan = 1,
  rowSpan = 1,
  onClick,
}: GalleryCardProps) {
  const isHero = colSpan >= 2 && rowSpan >= 2;
  const isTall = colSpan === 1 && rowSpan >= 2;

  return (
    <motion.button
      variants={cardVariants}
      custom={index}
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-xl bg-bg-surface text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        minHeight: isHero
          ? "clamp(320px, 45vh, 520px)"
          : isTall
            ? "clamp(300px, 40vh, 480px)"
            : "clamp(200px, 28vh, 320px)",
      }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
        sizes={
          colSpan > 1
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 22vw"
        }
        loading="lazy"
      />

      {/* Gradient overlay for hero items */}
      {isHero && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 p-4 transition-all duration-500 group-hover:bg-black/55">
        {/* Magnifying glass icon */}
        <div className="mb-3 translate-y-4 rounded-full border border-white/40 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Search className="h-5 w-5 text-white" />
        </div>

        {/* Title */}
        <h3 className="translate-y-4 text-center font-heading text-lg font-bold text-white opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
          {image.title}
        </h3>

        {/* Category badge */}
        <span className="mt-2 translate-y-4 rounded-full bg-accent/90 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
          {image.category}
        </span>
      </div>

      {/* Subtle shadow */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
    </motion.button>
  );
}
