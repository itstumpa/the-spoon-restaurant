"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { teamMembers, values } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChefHat, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const fadeUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const valueIcons: Record<string, React.ReactNode> = {
  Quality: <ChefHat className="h-8 w-8" />,
  Community: <Heart className="h-8 w-8" />,
  Consistency: <Users className="h-8 w-8" />,
};

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });

  const teamRef = useRef<HTMLDivElement>(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-bg-dark">
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(200,133,58,0.08),transparent_60%)]"
          aria-hidden="true"
        />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <span className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
              About Us
            </span>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
              Our Story
            </h1>
            <p className="mt-4 text-white/70 font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              A celebration of Mediterranean flavors — served with warmth and
              tradition since 2010.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-16 lg:py-20">
        <Container>
          <motion.div
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div
              variants={fadeUpVariants}
              custom={0}
              className="relative"
            >
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&q=80"
                  alt="The Spoon restaurant interior"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Decorative element */}
              <div
                className="absolute -bottom-3 -left-3 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 hidden lg:block"
                aria-hidden="true"
              />
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              custom={1}
              className="space-y-6"
            >
              <SectionHeading
                badge="Since 2010"
                title="From Maple Street to Your Plate"
                subtitle="What started as a small family kitchen on Maple Street has grown into a gathering place for Mediterranean-inspired dining."
                align="left"
              />
              <p className="text-text-muted font-body text-base leading-relaxed">
                Every dish tells a story — from the sun-ripened tomatoes and
                aromatic herbs we source from local farms to the time-honored
                recipes inspired by the coasts of Greece, Italy, and Morocco. We
                believe the best meals are shared, and the warmest memories are
                made around a table full of vibrant, soulful food.
              </p>
              <p className="text-text-muted font-body text-base leading-relaxed">
                At The Spoon, you&apos;re not just a guest — you&apos;re family.
                Whether you&apos;re joining us for wood-grilled specialties,
                sharing small plates with friends, or celebrating a special
                occasion, we promise you a Mediterranean experience that lingers
                long after the last bite.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="py-14 bg-primary/5 border-y border-primary/10">
        <Container>
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "16+", label: "Years Serving Austin" },
              { value: "50mi", label: "Local Farm Radius" },
              { value: "50K+", label: "Happy Guests" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm sm:text-base text-text-muted font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-16 lg:py-20 bg-bg-surface">
        <Container>
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <SectionHeading
              badge="Our Values"
              title="What We Stand For"
              subtitle="The principles that guide everything we do — from kitchen to table."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <motion.article
                  key={value.id}
                  variants={fadeUpVariants}
                  custom={i}
                  className="group bg-bg-surface rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {valueIcons[value.title] || <Heart className="h-8 w-8" />}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-muted font-body text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Meet The Team */}
      <section ref={teamRef} className="py-16 lg:py-20 bg-bg-surface">
        <Container>
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <SectionHeading
              badge="Our Team"
              title="Meet The People Behind The Spoon"
              subtitle="Passionate cooks, friendly servers, and the folks who make every meal special."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {teamMembers.map((member, i) => (
                <motion.article
                  key={member.id}
                  variants={fadeUpVariants}
                  custom={i}
                  className="group text-center"
                >
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 160px, 192px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 px-4">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-text">
                      {member.name}
                    </h3>
                    <p className="text-accent font-body font-semibold text-sm sm:text-base mt-1">
                      {member.role}
                    </p>
                    {member.bio && (
                      <p className="mt-3 text-text-muted font-body text-sm leading-relaxed max-w-xs mx-auto">
                        {member.bio}
                      </p>
                    )}
                    <div className="mt-5 w-12 h-0.5 bg-primary/30 mx-auto rounded-full" />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20 bg-bg-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(58,90,64,0.1),transparent_60%)]"
          aria-hidden="true"
        />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <SectionHeading
              title="Ready to Experience The Spoon?"
              subtitle="Book a table and taste the warmth of homestyle cooking — we'll save you a seat."
              light
            />
            <div className="mt-8">
              <Link href="/reservations">
                <Button variant="accent" size="lg">
                  Make a Reservation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
