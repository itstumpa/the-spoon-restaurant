"use client";

import AboutHero from "@/components/about/AboutHero";
import Lightbox from "@/components/about/Lightbox";
import MeetOurChefs from "@/components/about/MeetOurChefs";
import OurJourney from "@/components/about/OurJourney";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import ReservationCTA from "@/components/about/ReservationCTA";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import { galleryImages } from "@/lib/data";
import { useState } from "react";

export default function AboutPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <>
      <AboutHero />
      <OurStory onOpenLightbox={openLightbox} />
      <OurJourney />
      <OurValues />
      <MeetOurChefs />
      <WhyChooseUs />
      <ReservationCTA />

      {lightboxOpen && (
        <Lightbox
          images={galleryImages.map((img) => ({
            src: img.src,
            alt: img.alt,
          }))}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
