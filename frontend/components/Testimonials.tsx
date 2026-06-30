"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Testimonials() {
  const [[activeIndex, dir], setActiveIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

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
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  const testimonial = testimonials[activeIndex];

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-16 lg:py-20 bg-bg-dark overflow-hidden"
      style={{ opacity }}
    >
      {/* ---- Hero-style Gradient Backgrounds ---- */}
      {/* Main green radial glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_50%,rgba(109,140,46,0.15),transparent_70%)]"
        aria-hidden="true"
      />
      {/* Amber accent glow */}
      <div
        className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,133,58,0.08),transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      {/* Subtle top-right light */}
      <div
        className="absolute top-0 right-0 h-64 w-64 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04),transparent_70%)]"
        aria-hidden="true"
      />
      {/* Floating decorative blobs */}
      <div
        className="absolute top-1/4 left-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl animate-blob"
        aria-hidden="true"
        style={{ animationDuration: "20s", animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-1/4 right-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl animate-blob"
        aria-hidden="true"
        style={{ animationDuration: "25s", animationDelay: "-5s" }}
      />
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHZpZXdCb3g9JzAgMCA2MCA2MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxwYXRoIGQ9J00zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6JyBmaWxsPScjNkQ4QzJFJyBmaWxsLW9wYWNpdHk9JzAuMDInLz48L2c+PC9zdmc+')]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeading
            badge="Testimonials"
            title="What Our Guests Say"
            subtitle="Real words from real people who have dined with us."
            light
          />

          {/* Carousel */}
          <div
            className="relative mt-12 max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Large decorative quote icon with parallax */}
            <motion.div
              style={{ y: parallaxY }}
              className="absolute -top-8 -left-4 sm:-left-8 text-primary/15 pointer-events-none"
              aria-hidden="true"
            >
              <Quote className="h-20 w-20 sm:h-28 sm:w-28" />
            </motion.div>

            <div className="relative min-h-[280px] sm:min-h-[240px] flex items-center">
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
                  <motion.div
                    variants={itemVariants}
                    className="relative bg-white/3 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl"
                  >
                    {/* Top decorative accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />

                    {/* Stars */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="mb-6 flex items-center justify-center gap-1"
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: 0.35 + i * 0.05,
                            type: "spring",
                            stiffness: 400,
                          }}
                        >
                          <Star
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-accent fill-accent"
                                : "text-white/20"
                            }`}
                          />
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Quote */}
                    <blockquote className="max-w-3xl">
                      <p className="text-white/90 font-body text-base sm:text-lg lg:text-xl leading-relaxed italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </blockquote>

                    {/* Author */}
                    <footer className="mt-8 flex flex-col items-center gap-4">
                      {testimonial.avatar && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.5,
                            type: "spring",
                            stiffness: 300,
                          }}
                          className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/40 ring-2 ring-white/5 shadow-lg"
                        >
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                          {/* Accent ring */}
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-accent border-2 border-bg-dark flex items-center justify-center">
                            <Star className="h-3 w-3 text-bg-dark fill-current" />
                          </div>
                        </motion.div>
                      )}
                      <div className="text-center">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-3 rounded-full" />
                        <p className="font-heading font-semibold text-white text-base sm:text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-white/50 text-sm font-body mt-1">
                          Verified Guest
                        </p>
                      </div>
                    </footer>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 min-h-[44px] min-w-[44px]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goTo(i)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2.5 rounded-full transition-all duration-500 min-h-[8px] ${
                      i === activeIndex
                        ? "w-10 bg-accent"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === activeIndex ? "true" : "false"}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 min-h-[44px] min-w-[44px]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Keyboard hint */}
            <p className="text-center text-white/30 text-xs mt-6 font-body">
              Use ← → arrow keys to navigate
            </p>
          </div>
        </motion.div>
      </Container>

      {/* Keyboard navigation */}
      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
      `}</style>
    </motion.section>
  );
}
