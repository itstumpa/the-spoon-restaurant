"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Clock,
  Heart,
  Leaf,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "./about-variants";

const whyFeatures: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
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

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-6 md:py-14 bg-bg-surface relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
  );
}
