"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "./about-variants";

export default function MeetOurChefs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-6 md:py-10 bg-bg-surface relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
  );
}
