"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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
    <section className="relative py-6 md:py-12 overflow-hidden bg-bg-surface">
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

          <div className="mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
