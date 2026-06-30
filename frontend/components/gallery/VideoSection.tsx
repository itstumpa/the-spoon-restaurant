"use client";

import { Container } from "@/components/ui/Container";
import { videoData } from "@/lib/gallery-data";
import { motion, useInView } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function VideoSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={ref} className="py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Thumbnail */}
          <div className="relative aspect-video w-full">
            <Image
              src={videoData.thumbnail}
              alt={videoData.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center md:items-start md:p-12 lg:p-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group mb-6 rounded-full bg-accent/90 p-4 shadow-lg shadow-accent/20 backdrop-blur-sm transition-all hover:bg-accent hover:shadow-xl hover:shadow-accent/30 md:p-5"
              aria-label="Play video"
            >
              <Play className="h-7 w-7 fill-white text-white md:h-8 md:w-8" />
            </button>

            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {videoData.title}
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/60 md:text-base">
              {videoData.description}
            </p>
          </div>
        </motion.div>

        {/* Video Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white md:right-6 md:top-6"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="w-full max-w-5xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                <video
                  controls
                  autoPlay
                  className="h-full w-full"
                  poster={videoData.thumbnail}
                >
                  <source src={videoData.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
