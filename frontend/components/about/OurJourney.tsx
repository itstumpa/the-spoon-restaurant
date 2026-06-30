"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timelineMilestones } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeUp, resolveIcon } from "./about-variants";

export default function OurJourney() {
  return (
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
                      isLeft ? "bg-primary text-white" : "bg-accent text-white"
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
  );
}
