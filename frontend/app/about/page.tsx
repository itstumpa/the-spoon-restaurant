"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  aboutTestimonials,
  aboutValuesData,
  galleryImages,
  teamMembers,
  timelineMilestones,
} from "@/lib/data";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  Leaf,
  Quote,
  Recycle,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Icon mapping ───────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Award,
  Sparkles,
  Star,
  Heart,
  Leaf,
  Recycle,
  Users,
  Clock,
};

function resolveIcon(name: string): React.ElementType {
  return iconMap[name] || Star;
}

// ─── Framer Motion Variants ────────────────────────────
const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.12,
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const scaleIn = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: (i = 0) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.1,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const slideLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.12,
    },
  }),
};

const slideRight = {
  hidden: { x: 60, opacity: 0 },
  visible: (i = 0) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.12,
    },
  }),
};

// ─── CountUp component ─────────────────────────────────
function CountUp({
  value,
  suffix = "",
  displayValue,
}: {
  value: number;
  suffix?: string;
  displayValue?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (displayValue) {
      setCurrent(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (progress >= 1) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value, displayValue]);

  return <span ref={ref}>{displayValue || `${current}${suffix}`}</span>;
}

// ─── Lightbox component ────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
}: {
  images: { src: string; alt: string }[];
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
  );
}

// ─── Testimonial Card ──────────────────────────────────
function TestimonialCard({
  testimonial,
  active,
}: {
  testimonial: (typeof aboutTestimonials)[number];
  active: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className="w-full"
    >
      <div className="bg-bg-surface/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/5 shadow-lg">
        <Quote className="w-10 h-10 text-primary/20 mb-4" />
        <p className="text-text font-body text-base md:text-lg leading-relaxed italic mb-6">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-accent fill-accent"
                  : "text-border"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {testimonial.avatar && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                unoptimized
                sizes="48px"
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-heading font-bold text-text">
              {testimonial.name}
            </p>
            {testimonial.location && (
              <p className="text-text-muted text-sm font-body">
                {testimonial.location}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════
export default function AboutPage() {
  // ── Refs for in-view ──
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-60px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });
  const chefsRef = useRef(null);
  const chefsInView = useInView(chefsRef, { once: true, margin: "-60px" });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-60px" });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-60px" });

  // ── Testimonial carousel state ──
  const [testiIndex, setTestiIndex] = useState(0);
  const testiTimer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    testiTimer.current = setInterval(() => {
      setTestiIndex((p) => (p + 1) % aboutTestimonials.length);
    }, 5000);
    return () => clearInterval(testiTimer.current);
  }, []);

  // ── Gallery lightbox state ──
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  // ── Why Choose Us features ──
  const whyFeatures = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      text: "We source from local farms within 50 miles, ensuring every dish is packed with peak-season flavor and nutritional goodness.",
    },
    {
      icon: Award,
      title: "Award-Winning Chefs",
      text: "Our culinary team brings decades of expertise and multiple accolades, crafting each plate with precision and passion.",
    },
    {
      icon: Clock,
      title: "Fast Reservation",
      text: "Book your table in seconds with our seamless online reservation system. No waiting, no hassle — just great food.",
    },
    {
      icon: Sparkles,
      title: "Luxury Dining",
      text: "Immerse yourself in an elegant ambiance with warm lighting, curated music, and impeccable service from the moment you arrive.",
    },
    {
      icon: Heart,
      title: "Excellent Service",
      text: "Our staff treats every guest like family, anticipating your needs and ensuring a memorable dining experience every time.",
    },
    {
      icon: UtensilsCrossed,
      title: "Seasonal Menus",
      text: "Our menu evolves with the seasons, featuring fresh harvests and innovative creations that keep you coming back for more.",
    },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          1. PAGE HERO
          ═══════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[420px] sm:h-[65vh] md:h-[70vh] overflow-hidden pt-24 lg:pt-28">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=1000&fit=crop&q=80"
          alt="Elegant restaurant interior"
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,140,46,0.15),transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 rounded-full bg-accent/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm border border-accent/20">
              Our Story
            </span>

            <h1 className="font-heading text-[clamp(2.5rem,7vw,4.5rem)] font-bold text-white leading-tight mb-4">
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                Our Restaurant
              </span>
            </h1>

            <p className="text-white/80 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A journey of flavor, family, and tradition — discover what makes
              The Spoon a beloved Austin landmark.
            </p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-6 h-10 rounded-full border-2 border-white/30 mx-auto flex justify-center pt-2"
              >
                <div className="w-1 h-2 rounded-full bg-accent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. OUR STORY — Bento Gallery + Text
          ═══════════════════════════════════════════════════ */}
      <section ref={storyRef} className="py-6 md:py-12 bg-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Bento Image Grid */}
            <motion.div
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {/* Image 1 - tall */}
              <motion.div
                variants={scaleIn}
                custom={0}
                className="relative row-span-2 rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=800&fit=crop&q=80"
                  alt="Elegant restaurant dining area"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </motion.div>

              {/* Image 2 */}
              <motion.div
                variants={scaleIn}
                custom={1}
                className="relative h-40 sm:h-48 md:h-56 rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
                onClick={() => openLightbox(1)}
              >
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&q=80"
                  alt="Open kitchen with chefs"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 25vw, 200px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </motion.div>

              {/* Image 3 */}
              <motion.div
                variants={scaleIn}
                custom={2}
                className="relative h-40 sm:h-48 md:h-56 rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
                onClick={() => openLightbox(2)}
              >
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80"
                  alt="Beautifully plated dish"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 25vw, 200px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </motion.div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} custom={0}>
                <SectionHeading
                  badge="Since 2010"
                  title="From Maple Street to Your Plate"
                  subtitle="What started as a small family kitchen on Maple Street has grown into a gathering place for Mediterranean-inspired dining."
                  align="left"
                />
              </motion.div>

              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-text-muted font-body text-base leading-relaxed"
              >
                Every dish tells a story — from the sun-ripened tomatoes and
                aromatic herbs we source from local farms to the time-honored
                recipes inspired by the coasts of Greece, Italy, and Morocco. We
                believe the best meals are shared, and the warmest memories are
                made around a table full of vibrant, soulful food.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-text-muted font-body text-base leading-relaxed"
              >
                At The Spoon, you&apos;re not just a guest — you&apos;re family.
                Whether you&apos;re joining us for wood-grilled specialties,
                sharing small plates with friends, or celebrating a special
                occasion, we promise a Mediterranean experience that lingers
                long after the last bite.
              </motion.p>

              {/* Founder signature */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="pt-4 flex items-center gap-4"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
                    alt="Founder"
                    fill
                    unoptimized
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-text">
                    Marco Valenti
                  </p>
                  <p className="text-sm text-text-muted font-body">
                    Founder &amp; Head Chef
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <Link href="/menu">
                  <Button variant="accent" size="lg">
                    Explore Our Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. OUR JOURNEY — Timeline
          ═══════════════════════════════════════════════════ */}
      <section className="py-6 md:py-8 bg-bg-surface relative overflow-hidden">
        {/* Background accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <SectionHeading
            badge="Our Journey"
            title="Key Milestones"
            subtitle="From a humble beginning to an Austin institution — every step of our story."
          />

          <div className="relative mt-16">
            {/* Center line (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

            {/* Mobile line */}
            <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-primary/20" />

            {timelineMilestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              const Icon = resolveIcon(milestone.icon);

              return (
                <motion.div
                  key={milestone.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={i}
                  variants={fadeUp}
                  className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                    isLeft
                      ? "lg:flex-row lg:pr-[calc(50%+2rem)]"
                      : "lg:flex-row-reverse lg:pl-[calc(50%+2rem)]"
                  } lg:gap-8`}
                >
                  {/* Timeline dot + icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border-2 border-white ${
                        isLeft
                          ? "bg-primary text-white"
                          : "bg-accent text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 min-w-0 group ${
                      isLeft ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="bg-bg rounded-2xl p-6 md:p-8 shadow-md hover:shadow-elevated transition-all duration-500 border border-primary/5">
                      <span
                        className={`inline-block text-sm font-bold font-heading tracking-wider mb-2 ${
                          isLeft ? "text-accent" : "text-primary"
                        }`}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-text mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-text-muted font-body text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. OUR VALUES
          ═══════════════════════════════════════════════════ */}
      <section ref={valuesRef} className="py-6 lg:py-10 bg-bg">
        <Container>
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionHeading
              badge="Our Values"
              title="What We Stand For"
              subtitle="The principles that guide everything we do — from kitchen to table."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {aboutValuesData.map((value, i) => {
                const Icon = resolveIcon(value.icon);
                return (
                  <motion.article
                    key={value.id}
                    variants={fadeUp}
                    custom={i}
                    className="group bg-bg-surface rounded-2xl p-8 shadow-sm hover:shadow-elevated transition-all duration-500 border border-transparent hover:border-primary/10"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-text mb-3">
                      {value.title}
                    </h3>
                    <p className="text-text-muted font-body text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                    <div className="mt-5 w-10 h-0.5 bg-primary/30 rounded-full group-hover:w-full transition-all duration-500" />
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. MEET OUR CHEFS
          ═══════════════════════════════════════════════════ */}
      <section
        ref={chefsRef}
        className="py-6 md:py-10 bg-bg-surface relative overflow-hidden"
      >
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate={chefsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionHeading
              badge="Our Team"
              title="Meet the People Behind The Spoon"
              subtitle="Passionate chefs, award-winning talents — the heart and soul of our kitchen."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <motion.article
                  key={member.id}
                  variants={fadeUp}
                  custom={i}
                  className="group bg-bg rounded-2xl overflow-hidden shadow-md hover:shadow-elevated transition-all duration-500"
                >
                  {/* Portrait */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Social icons overlay */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {["facebook", "instagram", "twitter"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent transition-colors"
                          aria-label={`${social} profile`}
                        >
                          <span className="text-xs font-bold uppercase">
                            {social[0]}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-heading font-bold text-text">
                      {member.name}
                    </h3>
                    <p className="text-accent font-body font-semibold text-sm mt-1">
                      {member.role}
                    </p>
                    {member.bio && (
                      <p className="mt-3 text-text-muted font-body text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                    {member.experience && (
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <span className="text-xs font-body text-text-muted">
                          <span className="text-primary font-semibold">
                            {member.experience}
                          </span>{" "}
                          of experience
                        </span>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. WHY CHOOSE US
          ═══════════════════════════════════════════════════ */}
      <section
        ref={whyRef}
        className="py-6 md:py-14 bg-bg-surface relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <SectionHeading
              badge="Why Choose Us"
              title="The Spoon Difference"
              subtitle="What sets us apart — from farm-fresh ingredients to unforgettable dining experiences."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {whyFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    custom={i}
                    className="flex gap-5 bg-bg rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-elevated transition-all duration-500 group border border-transparent hover:border-accent/10"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-heading font-bold text-text mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-text-muted font-body text-sm leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. RESERVATION CTA
          ═══════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&h=900&fit=crop&q=80"
          alt="Restaurant ambiance"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,140,46,0.15),transparent_60%)]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block mb-4 rounded-full bg-accent/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm border border-accent/20">
              Join Us
            </span>

            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight mb-4">
              Ready to Experience The Spoon?
            </h2>

            <p className="text-white/70 font-body text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Book a table and taste the warmth of homestyle cooking —
              we&apos;ll save you a seat. Whether it&apos;s a romantic dinner or
              a family celebration, every meal at The Spoon is an occasion to
              remember.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/reservations">
                <Button
                  variant="accent"
                  size="lg"
                  className="text-base px-8 py-6"
                >
                  <span className="mr-2">Book a Table</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/menu">
                <Button
                  variant="outline-accent"
                  size="lg"
                  className="text-base px-8 py-6"
                >
                  Explore Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════
          LIGHTBOX
          ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
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
      </AnimatePresence>
    </>
  );
}
