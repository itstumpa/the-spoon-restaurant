"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { Award, Heart, Leaf, Star, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const iconMap: Record<string, typeof Award> = {
  Award,
  Heart,
  Leaf,
  Star,
  UtensilsCrossed,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function MeetOurChefs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-bg-surface">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(58,90,64,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(58,90,64,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
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
            badge="Our Culinary Team"
            title="Meet Our Chefs"
            subtitle="Award-winning talent united by a passion for authentic Mediterranean flavors and warm hospitality."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {teamMembers.map((chef, i) => (
              <motion.article
                key={chef.id}
                variants={itemVariants}
                custom={i}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">
                      {chef.name}
                    </h3>
                    <p className="mt-1 text-primary font-medium text-sm">
                      {chef.role}
                    </p>
                  </div>

                  <p className="text-text-muted font-body text-sm leading-relaxed">
                    {chef.bio}
                  </p>

                  {/* Awards */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-text-muted text-xs font-body mb-2">
                      <Award
                        className="h-3.5 w-3.5 text-accent"
                        aria-hidden="true"
                      />
                      <span>Accolades</span>
                    </div>
                    <ul className="space-y-1.5">
                      {chef.awards?.map((award, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-text-muted font-body"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
