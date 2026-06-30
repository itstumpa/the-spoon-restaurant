"use client";

import type { GalleryImage } from "@/types/gallery";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect } from "react";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const current = images[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, goNext, goPrev]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white md:right-6 md:top-6"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Previous */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 z-10 rounded-full bg-white/10 p-2.5 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white md:left-6 md:p-3"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={current.id}
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative flex max-h-[85vh] max-w-[90vw] flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src={current.src.replace("fit=crop&q=85", "fit=crop&q=95&w=1800")}
              alt={current.alt}
              width={current.width > 1800 ? 1800 : current.width}
              height={current.height}
              className="max-h-[75vh] w-auto rounded-lg object-contain"
              style={{
                maxWidth: "90vw",
                maxHeight: "75vh",
              }}
              priority
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <h3 className="font-heading text-xl font-bold text-white">
              {current.title}
            </h3>
            <p className="mt-1 text-sm text-white/60">{current.description}</p>
            <span className="mt-2 inline-block rounded-full bg-accent/90 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
              {current.category}
            </span>
          </div>

          {/* Counter */}
          <span className="mt-3 text-xs text-white/40">
            {currentIndex + 1} / {images.length}
          </span>
        </motion.div>

        {/* Next */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 z-10 rounded-full bg-white/10 p-2.5 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white md:right-6 md:p-3"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
