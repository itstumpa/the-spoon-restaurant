"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Tag, Clock, Users, Gift, ArrowRight } from "lucide-react";

const deals = [
  {
    id: "deal1",
    title: "Lunch Express",
    description: "Two-course lunch menu with starter and main. Perfect for business meetings or a quick gourmet break.",
    price: "$18",
    period: "/person",
    originalPrice: "$26",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&q=80",
    features: ["Mon–Fri 11am–3pm", "Starter + Main", "Coffee/Tea Included"],
    badge: "Best Value",
    badgeColor: "bg-accent text-accent-foreground",
    icon: Clock,
    cta: "Book Lunch",
  },
  {
    id: "deal2",
    title: "Family Feast",
    description: "Complete dinner for 4 with shared starters, 4 mains, 2 sides, and a dessert to share. Great for celebrations.",
    price: "$89",
    period: "/4 people",
    originalPrice: "$125",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&q=80",
    features: ["Daily after 5pm", "Feeds 4 People", "Bottle of House Wine"],
    badge: "Popular",
    badgeColor: "bg-primary text-primary-foreground",
    icon: Users,
    cta: "Reserve Table",
  },
  {
    id: "deal3",
    title: "Date Night",
    description: "Romantic dinner for two with a shared appetizer, two mains, a bottle of wine, and a shared dessert.",
    price: "$75",
    period: "/couple",
    originalPrice: "$105",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&q=80",
    features: ["Daily after 6pm", "2 Courses + Dessert", "Bottle of Wine Included"],
    badge: "Romantic",
    badgeColor: "bg-rose-500 text-white",
    icon: Gift,
    cta: "Book Now",
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

export default function BestDeals() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading
            badge="Special Offers"
            title="Best Deals For You"
            subtitle="Curated dining packages designed to give you the best value without compromising on quality or experience."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deals.map((deal, i) => (
              <motion.article
                key={deal.id}
                variants={itemVariants}
                custom={i}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${deal.badgeColor}`}>
                      {deal.badge}
                    </span>
                  </div>
                  {/* Savings indicator */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-text text-xs font-semibold">
                    Save {Math.round(((parseFloat(deal.originalPrice.replace('$', '')) - parseFloat(deal.price.replace('$', ''))) / parseFloat(deal.originalPrice.replace('$', ''))) * 100)}%
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <deal.icon className="h-4 w-4" aria-hidden="true" />
                    <span>{deal.title}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-text group-hover:text-primary transition-colors duration-300">
                    {deal.title}
                  </h3>
                  <p className="text-text-muted font-body text-sm leading-relaxed">
                    {deal.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 pt-2 border-t border-border">
                    {deal.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-text-muted font-body">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 pt-2">
                    <span className="text-3xl font-heading font-bold text-primary">
                      {deal.price}
                    </span>
                    <span className="text-text-muted line-through">
                      {deal.originalPrice}
                    </span>
                    <span className="ml-auto text-text-muted text-sm">{deal.period}</span>
                  </div>

                  {/* CTA */}
                  <Link href="/reservations">
                    <Button variant="outline" size="lg" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {deal.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}