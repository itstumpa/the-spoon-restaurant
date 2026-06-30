"use client";

import { galleryImages } from "@/lib/gallery-data";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";
import { useCallback, useMemo, useState } from "react";

import FeaturedGallery from "@/components/gallery/FeaturedGallery";
import GalleryCategoryNav from "@/components/gallery/GalleryCategoryNav";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import GalleryHero from "@/components/gallery/GalleryHero";
import InstagramFeed from "@/components/gallery/InstagramFeed";
import Lightbox from "@/components/gallery/Lightbox";
import MasonryGallery from "@/components/gallery/MasonryGallery";
import VideoSection from "@/components/gallery/VideoSection";
import { Pagination } from "@/components/menu/Pagination";

const ITEMS_PER_PAGE = 12;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter images by category
  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter(
      (img: GalleryImage) => img.category === activeCategory,
    );
  }, [activeCategory]);

  // Paginate
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(filteredImages.length / ITEMS_PER_PAGE)),
    [filteredImages.length],
  );

  const paginatedImages = useMemo(
    () =>
      filteredImages.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      ),
    [filteredImages, currentPage],
  );

  const handleCategoryChange = useCallback(
    (category: GalleryCategory): void => {
      setActiveCategory(category);
      setCurrentPage(1);
      setLightboxIndex(null);
      window.scrollTo({ top: 300, behavior: "smooth" });
    },
    [],
  );

  const handlePageChange = useCallback((page: number): void => {
    setCurrentPage(page);
    setLightboxIndex(null);
    window.scrollTo({ top: 300, behavior: "smooth" });
  }, []);

  const openLightbox = useCallback((index: number): void => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback((): void => {
    setLightboxIndex(null);
  }, []);

  const navigateLightbox = useCallback((newIndex: number): void => {
    setLightboxIndex(newIndex);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <GalleryHero />

      {/* Category Navigation */}
      <GalleryCategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Featured Gallery — only show on "all" view */}
      {activeCategory === "all" && <FeaturedGallery />}

      {/* Main Masonry Gallery */}
      <MasonryGallery images={paginatedImages} onImageClick={openLightbox} />

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* Video Section — only on "all" view */}
      {activeCategory === "all" && <VideoSection />}

      {/* Instagram Feed — only on "all" view */}
      {activeCategory === "all" && <InstagramFeed />}

      {/* Call to Action */}
      <GalleryCTA />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={paginatedImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </main>
  );
}
