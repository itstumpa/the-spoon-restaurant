"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Award, Star, Heart, UtensilsCrossed, Leaf } from "lucide-react";

const chefDetails = [
  {
    id: "tm1",
    name: "Chef Marco Rossi",
    role: "Executive Chef",
    experience: "30+ Years",
    specialty: "Mediterranean & Italian",
    awards: ["Michelin Star 2018", "James Beard Nominee 2021", "Best Chef Austin 2022"],
    bio: "Born in Tuscany, Chef Marco brings three decades of culinary mastery. Trained under Michelin-starred chefs across Europe before bringing his expertise to Austin.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=600&fit=crop&q=80",
    icons: [Award, Star, Heart],
  },
  {
    id: "tm2",
    name: "Chef Sofia Andersson",
    role: "Sous Chef",
    experience: "12+ Years",
    specialty: "Seafood & Modern European",
    awards: ["Rising Star Chef 2020", "Sustainable Seafood Champion 2023"],
    bio: "Swedish-born with a passion for sustainable seafood. Chef Sofia champions zero-waste cooking and sources exclusively from responsible fisheries.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop&q=80",
    icons: [Leaf, Heart, UtensilsCrossed],
  },
  {
    id: "tm3",
    name: "Chef James Mitchell",
    role: "Pastry Chef",
    experience: "15+ Years",
    specialty: "French Patisserie & Desserts",
    awards: ["World Pastry Cup 2019", "Best Dessert Menu Texas 2023"],
    bio: "Classically trained in Paris, Chef James creates desserts that are both visually stunning and deeply flavorful. His chocolate work is renowned statewide.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=600&fit=crop&q=80",
    icons: [Award, Star, Heart],
  },
];

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
    <section className="relative py-20 lg:py-28 overflow-hidden bg-bg-surface">
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {chefDetails.map((chef, i) => (
              <motion.article
                key={chef.id}
                variants={itemVariants}
                custom={i}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-w-1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Experience badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-text text-xs font-semibold">
                    {chef.experience}
                  </div>
                  {/* Specialty badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
                    {chef.specialty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">
                      {chef.name}
                    </h3>
                    <p className="mt-1 text-primary font-medium text-sm">{chef.role}</p>
                  </div>

                  <p className="text-text-muted font-body text-sm leading-relaxed">
                    {chef.bio}
                  </p>

                  {/* Awards */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-text-muted text-xs font-body mb-2">
                      <Award className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      <span>Accolades</span>
                    </div>
                    <ul className="space-y-1.5">
                      {chef.awards.map((award, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-text-muted font-body">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
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