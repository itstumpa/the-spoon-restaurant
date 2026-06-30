"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// ---------- Data ----------
interface Offer {
  id: string;
  image: string;
  discountBadge: string;
  badgeColor: string;
  title: string;
  description: string;
  validity: string;
  cta: string;
}

const offers: Offer[] = [
  {
    id: "offer-1",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=900&fit=crop&q=80",
    discountBadge: "30% OFF",
    badgeColor: "bg-accent",
    title: "Premium Steak Night",
    description: "Prime-cut grilled steak with truffle mash and red wine jus",
    validity: "Mon\u2013Thu \u00b7 6pm\u20139pm",
    cta: "View Deal",
  },
  {
    id: "offer-2",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=900&fit=crop&q=80",
    discountBadge: "Buy 1 Get 1",
    badgeColor: "bg-primary",
    title: "Artisan Pizza Duo",
    description:
      "Two hand-tossed pizzas with premium toppings and a side of dips",
    validity: "Every Tuesday \u00b7 All day",
    cta: "Order Now",
  },
  {
    id: "offer-3",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=900&fit=crop&q=80",
    discountBadge: "Today's Special",
    badgeColor: "bg-rose-500",
    title: "Truffle Mushroom Pasta",
    description:
      "House-made fettuccine with wild mushrooms in a creamy truffle sauce",
    validity: "Available until 10pm",
    cta: "View Deal",
  },
  {
    id: "offer-4",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&h=900&fit=crop&q=80",
    discountBadge: "20% OFF",
    badgeColor: "bg-blue-500",
    title: "Mediterranean Seafood",
    description:
      "Fresh catch of the day with lemon herb butter and roasted vegetables",
    validity: "Fri\u2013Sun \u00b7 Dinner only",
    cta: "Order Now",
  },
  {
    id: "offer-5",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=900&fit=crop&q=80",
    discountBadge: "Free Dessert",
    badgeColor: "bg-purple-500",
    title: "Gourmet Burger Combo",
    description:
      "Angus beef burger with aged cheddar, caramelized onions, and truffle fries",
    validity: "Daily \u00b7 Lunch & Dinner",
    cta: "View Deal",
  },
  {
    id: "offer-6",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=900&fit=crop&q=80",
    discountBadge: "Chef's Pick",
    badgeColor: "bg-orange-500",
    title: "Harvest Bowl Delight",
    description:
      "Seasonal vegetables, quinoa, roasted chickpeas, and tahini dressing",
    validity: "Available all week",
    cta: "Order Now",
  },
];

// ---------- Motion Variants ----------
const leftVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ---------- Component ----------
export default function BestDeals() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const onInit = useCallback((api: any) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const handleMouseEnter = useCallback(() => {
    const autoplay = (emblaApi?.plugins() as any)?.autoplay;
    if (autoplay) autoplay.stop();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    const autoplay = (emblaApi?.plugins() as any)?.autoplay;
    if (autoplay) autoplay.play();
  }, [emblaApi]);

  return (
    <section
      ref={sectionRef}
      className="relative py-6 md:py-12 overflow-hidden bg-bg"
    >
      {/* Decorative background shapes */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgb(109,140,46) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgb(200,133,58) 0%, transparent 70%)",
        }}
      />

      <Container>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              },
            },
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10 lg:gap-12 items-center">
            {/* Left Column — Title Section */}
            <motion.div
              variants={leftVariants}
              className="flex flex-col items-start text-left"
            >
              <span className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] bg-primary/10 text-primary">
                Special Offers
              </span>
              <h2 className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight text-text mt-1">
                Best Deals <span className="text-primary">For You</span>
              </h2>
              <p className="mt-4 text-text-muted font-body text-base leading-relaxed max-w-sm">
                Curated dining packages designed to give you the best value
                without compromising on quality or experience.
              </p>
              <Link href="/menu" className="mt-8">
                <Button variant="default" size="lg" className="group">
                  View All Offers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            {/* Right Column — Carousel */}
            <motion.div
              variants={cardVariants}
              className="min-w-0 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden rounded-[24px]" ref={emblaRef}>
                <div className="flex -ml-4">
                  {offers.map((offer) => (
                    <div
                      key={offer.id}
                      className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                    >
                      <div className="relative h-[420px] rounded-[24px] overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 group/card border border-white/20">
                        {/* Image */}
                        <Image
                          src={offer.image}
                          alt={offer.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                        {/* Discount Badge — Top Right */}
                        <div className="absolute top-4 right-4">
                          <span
                            className={`inline-block px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full ${offer.badgeColor} text-white shadow-lg`}
                          >
                            {offer.discountBadge}
                          </span>
                        </div>

                        {/* Content — Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
                          <h3 className="font-heading text-lg font-bold text-white">
                            {offer.title}
                          </h3>
                          <p className="mt-1 text-sm text-white/75 font-body leading-relaxed line-clamp-2">
                            {offer.description}
                          </p>
                          <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between">
                            <span className="text-xs text-white/55 font-body">
                              {offer.validity}
                            </span>
                            <span className="text-accent font-semibold text-sm font-body flex items-center gap-1.5 transition-all duration-300 group-hover/card:gap-2.5">
                              {offer.cta}
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={scrollPrev}
                disabled={prevBtnDisabled}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-card hover:shadow-elevated flex items-center justify-center text-text hover:text-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous offers"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={nextBtnDisabled}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-card hover:shadow-elevated flex items-center justify-center text-text hover:text-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next offers"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-6 gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-primary/25 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to offer ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
