"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Expand, Search } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=800&fit=crop&q=85",
    alt: "Grilled ribeye steak with herb butter and roasted vegetables",
    category: "Mains",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=800&fit=crop&q=85",
    alt: "Wood-fired margherita pizza with fresh basil",
    category: "Pizza",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=800&fit=crop&q=85",
    alt: "Gourmet burger with aged cheddar and caramelized onions",
    category: "Burgers",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=800&fit=crop&q=85",
    alt: "Handmade tagliatelle with slow-cooked bolognese",
    category: "Pasta",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=800&fit=crop&q=85",
    alt: "Pan-seared scallops with cauliflower puree and microgreens",
    category: "Seafood",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=800&fit=crop&q=85",
    alt: "Chocolate lava cake with vanilla bean ice cream",
    category: "Desserts",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=800&fit=crop&q=85",
    alt: "Fresh Mediterranean salad with olives and feta",
    category: "Starters",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=800&fit=crop&q=85",
    alt: "Craft cocktail with fresh herbs and citrus",
    category: "Drinks",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop&q=85",
    alt: "Elegant dining room with warm lighting",
    category: "Ambience",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=800&fit=crop&q=85",
    alt: "Chef plating a signature dish",
    category: "Behind the Scenes",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop&q=85",
    alt: "Fresh ingredients on marble countertop",
    category: "Ingredients",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=800&fit=crop&q=85",
    alt: "Wine cellar with curated selection",
    category: "Wine & Bar",
  },
];

const categories = [
  "All",
  "Mains",
  "Pizza",
  "Burgers",
  "Pasta",
  "Seafood",
  "Desserts",
  "Starters",
  "Drinks",
  "Ambience",
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxOpen(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(null);
    document.body.style.overflow = "";
  };

  const currentImage =
    lightboxOpen !== null ? filteredImages[lightboxOpen] : null;

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-20 bg-bg-dark"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(109,140,46,0.06),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            badge="Gallery"
            title="A Visual Journey"
            subtitle="Explore our culinary creations, elegant spaces, and the moments that make dining at The Spoon unforgettable."
            light
          />

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Gallery categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px] ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-elevated"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            role="list"
          >
            {filteredImages.map((image, index) => (
              <motion.article
                key={image.id}
                variants={cardVariants}
                role="listitem"
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white mb-2">
                        {image.category}
                      </span>
                      <h4 className="font-heading text-white font-semibold text-base">
                        {image.alt.split(" ").slice(0, 3).join(" ")}...
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Expand className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Subtle border */}
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </motion.article>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300 font-medium">
              <Search className="h-5 w-5" />
              Load More Images
            </button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image fullscreen view"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain rounded-xl"
                priority
              />
              <div className="absolute -top-14 right-0 flex items-center gap-2">
                <span className="text-white/60 text-sm font-medium">
                  {currentImage.category}
                </span>
                <button
                  onClick={closeLightbox}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close lightbox"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
