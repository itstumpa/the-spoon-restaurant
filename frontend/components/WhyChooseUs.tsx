"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useInView } from "framer-motion";
import { Award, CheckCircle2, Heart, Leaf, Truck, Users } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Leaf,
    title: "Farm-Fresh Ingredients",
    description:
      "Sourced daily from local farms within 50 miles, ensuring peak-season flavor and maximum freshness in every dish.",
  },
  {
    icon: Heart,
    title: "Crafted with Passion",
    description:
      "Every recipe is developed with generations of culinary expertise, blending Mediterranean tradition with modern technique.",
  },
  {
    icon: Award,
    title: "Award-Winning Chefs",
    description:
      "Our kitchen is led by chefs with Michelin-star experience and international culinary competition victories.",
  },
  {
    icon: Truck,
    title: "Sustainable Practices",
    description:
      "Zero-waste kitchen philosophy, compostable packaging, and partnerships with local organic farms.",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    description:
      "From the moment you arrive, our team treats you like family — attentive service without pretension.",
  },
  {
    icon: CheckCircle2,
    title: "Dietary Excellence",
    description:
      "Extensive gluten-free, vegetarian, vegan, and allergen-friendly options crafted with the same care as our signature dishes.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(58,90,64,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(58,90,64,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading
            badge="Why Choose Us"
            title="Where Excellence Meets Authenticity"
            subtitle="Six reasons why The Spoon has been Austin's most beloved Mediterranean destination for over 16 years."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <motion.article
                key={feature.title}
                variants={itemVariants}
                custom={i}
                className="group relative p-6 lg:p-8 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500"
              >
                {/* Icon Wrapper */}
                <div className="relative mb-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <feature.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  {/* Decorative accent */}
                  <div
                    className="absolute -top-2 -right-2 h-8 w-8 rounded-full border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="mt-3 text-text-muted font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
