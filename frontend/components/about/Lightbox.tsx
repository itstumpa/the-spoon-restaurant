"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LightboxImage {
  src: string;
  alt: string;
}

export default function Lightbox({
  images,
  index,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
      if (e.key === "ArrowRight")
        setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl max-h-[85vh] w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
          />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-body bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            {images[currentIndex].alt}
          </p>
        </motion.div>

        {/* Thumbnails strip */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                i === currentIndex
                  ? "border-white scale-110"
                  : "border-white/30 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                width={56}
                height={40}
                unoptimized
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
