"use client";

import { Button } from "@/components/ui";
import type { MenuItem } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, Leaf, Sparkles, Timer } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./Badge";
import { SpiceIndicator } from "./SpiceIndicator";
import { StarRating } from "./StarRating";
import { easeStandard } from "./constants";

export function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const badges: React.ReactNode[] = [];
  if (item.isChefsChoice)
    badges.push(
      <Badge key="chef" variant="chef">
        <ChefHat className="size-2.5" /> Chef
      </Badge>,
    );
  if (item.isSignature)
    badges.push(
      <Badge key="sig" variant="signature">
        <Sparkles className="size-2.5" /> Signature
      </Badge>,
    );
  if (item.isPopular)
    badges.push(
      <Badge key="pop" variant="popular">
        Popular
      </Badge>,
    );
  if (item.isNew)
    badges.push(
      <Badge key="new" variant="new">
        New
      </Badge>,
    );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: easeStandard, delay: index * 0.04 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold capitalize text-text shadow-sm backdrop-blur-sm">
          {item.category}
        </span>

        {/* Price badge */}
        <span className="absolute bottom-3 left-3 rounded-full bg-primary/95 px-3.5 py-1.5 text-sm font-bold text-white shadow-lg backdrop-blur-sm">
          {item.price}
        </span>

        {/* Badges on image */}
        {badges.length > 0 && (
          <div className="absolute right-3 top-3 flex flex-wrap gap-1.5">
            {badges}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name & Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-bold text-text">
            {item.name}
          </h3>
          <StarRating rating={item.rating} />
        </div>

        {/* Description */}
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-text-muted">
          {item.description}
        </p>

        {/* Meta row */}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-text-muted">
          {item.prepTime && (
            <span className="inline-flex items-center gap-1">
              <Timer className="size-3" />
              {item.prepTime}
            </span>
          )}
          {item.spiceLevel && (
            <span className="inline-flex items-center gap-1">
              <SpiceIndicator level={item.spiceLevel} />
            </span>
          )}
          {item.isVegetarian && (
            <span className="inline-flex items-center gap-1 text-emerald-600">
              <Leaf className="size-3" />
              Vegetarian
            </span>
          )}
          {item.isGlutenFree && <Badge variant="gf">GF</Badge>}
        </div>

        {/* CTA */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <Button
            variant="outline-accent"
            size="sm"
            className="w-full"
            onClick={() => {
              const link = document.createElement("a");
              link.href = `/reservations?dish=${encodeURIComponent(item.name)}`;
              link.click();
            }}
          >
            Order Now <ArrowRight className="size-3.5 ml-1" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
