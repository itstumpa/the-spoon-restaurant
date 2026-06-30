"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { instagramPosts } from "@/lib/gallery-data";
import { motion, useInView } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

/** Inline Instagram SVG icon since lucide-react may not export it */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function InstagramFeed() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="overflow-hidden bg-bg-dark py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="@thespoon"
            title="Follow Us on Instagram"
            subtitle="Tag @thespoon for a chance to be featured on our page."
            light
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4"
        >
          {instagramPosts.slice(0, 8).map((post) => (
            <motion.a
              key={post.id}
              variants={itemVariants}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 transition-all duration-500 group-hover:bg-black/60">
                {/* Instagram icon */}
                <InstagramIcon className="h-6 w-6 translate-y-4 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />

                {/* Likes */}
                <div className="flex translate-y-4 items-center gap-1.5 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                  <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  <span className="text-sm font-semibold text-white">
                    {post.likes.toLocaleString()}
                  </span>
                </div>

                {/* Caption */}
                <p className="mt-1 max-w-[90%] translate-y-4 text-center text-xs text-white/80 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
