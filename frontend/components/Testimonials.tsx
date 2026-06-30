"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";

const quoteVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -200 : 200,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4 },
  }),
};

export default function Testimonials() {
  const [[activeIndex, dir], setActiveIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const dir = index > activeIndex ? 1 : -1;
      setActiveIndex([index, dir]);
    },
    [activeIndex],
  );

  const next = useCallback(() => {
    setActiveIndex(([current]) => {
      const nextIndex = (current + 1) % testimonials.length;
      return [nextIndex, 1];
    });
  }, []);

  const prev = useCallback(() => {
    setActiveIndex(([current]) => {
      const prevIndex =
        (current - 1 + testimonials.length) % testimonials.length;
      return [prevIndex, -1];
    });
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="relative py-20 lg:py-28 bg-bg-dark overflow-hidden">
      {/* Decorative background gradient */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(58,90,64,0.08),transparent_60%)]"
        aria-hidden="true"
      />
      {/* Overlapping decorative circles */}
      <div
        className="absolute top-10 left-10 h-40 w-40 rounded-full border border-primary/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 h-56 w-56 rounded-full border border-accent/10 blur-2xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="What Our Guests Say"
          subtitle="Real words from real people who have dined with us."
          light
        />

        {/* Carousel */}
        <div
          className="relative mt-12 max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Large quote icon */}
          <div
            className="absolute -top-6 -left-2 sm:-left-6 text-primary/20"
            aria-hidden="true"
          >
            <Quote className="h-16 w-16 sm:h-24 sm:w-24" />
          </div>

          <div className="relative min-h-[260px] sm:min-h-[220px] flex items-center">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={activeIndex}
                custom={dir}
                variants={quoteVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="flex flex-col items-center text-center px-4">
                  {/* Stars */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className="mb-5"
                  >
                    <StarRating rating={testimonial.rating} />
                  </motion.div>

                  {/* Quote */}
                  <blockquote className="max-w-2xl">
                    <p className="text-white/85 font-body text-base sm:text-lg lg:text-xl leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author */}
                  <footer className="mt-6 flex flex-col items-center gap-3">
                    {testimonial.avatar && (
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/30 ring-2 ring-white/5">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <div className="w-10 h-0.5 bg-accent/50 mx-auto mb-2.5 rounded-full" />
                      <p className="font-heading font-semibold text-white text-base sm:text-lg">
                        {testimonial.name}
                      </p>
                    </div>
                  </footer>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 min-h-[44px] min-w-[44px]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-500 min-h-[8px] ${
                    i === activeIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 min-h-[44px] min-w-[44px]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
