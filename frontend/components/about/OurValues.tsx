"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutValuesData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, resolveIcon, staggerContainer } from "./about-variants";

export default function OurValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-6 lg:py-10 bg-bg">
      <Container>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
  );
}
