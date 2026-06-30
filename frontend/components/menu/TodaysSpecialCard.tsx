"use client";

import { Button } from "@/components/ui";
import type { MenuItem } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, Timer } from "lucide-react";
import Image from "next/image";
import { Badge } from "./Badge";
import { StarRating } from "./StarRating";
import { easeSmooth } from "./constants";

export function TodaysSpecialCard({
  item,
  index,
}: {
  item: MenuItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: easeSmooth, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, 192px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent sm:bg-gradient-to-r" />
          <div className="absolute left-3 top-3">
            <Badge variant="chef">
              <ChefHat className="size-2.5" /> Chef&apos;s Pick
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center p-5">
          <h3 className="font-heading text-lg font-bold text-text">
            {item.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-text-muted">
            {item.description}
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-text-muted">
            {item.prepTime && (
              <span className="inline-flex items-center gap-1">
                <Timer className="size-3" /> {item.prepTime}
              </span>
            )}
            <StarRating rating={item.rating} size="xs" />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-heading text-xl font-bold text-primary">
              {item.price}
            </span>
            <Button variant="accent" size="xs">
              Order <ArrowRight className="size-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
