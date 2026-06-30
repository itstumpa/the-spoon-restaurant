"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutStats } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  value,
  suffix,
  label,
  isInView,
}: {
  value: number;
  suffix: string;
  label: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm sm:text-base text-text-muted font-body">
        {label}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-bg-dark">
      {/* Background accent */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(58,90,64,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Image Collage */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main image */}
              <div className="col-span-2 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                  aria-hidden="true"
                />
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop&q=80"
                  alt="The Spoon restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Small accent image */}
              <div className="relative h-40 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&q=80"
                  alt="Fine dining experience"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Small accent image */}
              <div className="relative h-40 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80"
                  alt="Gourmet plating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative corner accent */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/30 rounded-br-2xl hidden lg:block"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right: Story Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <SectionHeading
                badge="Our Story"
                title="Where Every Meal Feels Like Home"
                subtitle="The Spoon brings the sun-soaked flavors of the Mediterranean to your table. Fresh herbs, premium olive oil, and locally sourced ingredients — every dish tells a story of tradition and passion."
                align="left"
                light
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-heading font-semibold text-accent hover:text-accent/80 transition-colors duration-300"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10"
            >
              {aboutStats.map((stat) => (
                <AnimatedCounter
                  key={stat.id}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
