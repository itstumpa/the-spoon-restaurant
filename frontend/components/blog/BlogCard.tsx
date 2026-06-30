"use client";

import { Button } from "@/components/ui";
import type { BlogPost } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { easeStandard } from "./constants";

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: easeStandard, delay: index * 0.07 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
    >
      {/* Image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold capitalize text-text shadow-sm backdrop-blur-sm">
          {post.categoryLabel}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Meta */}
        <div className="flex items-center gap-3 text-[11px] text-text-muted">
          <span className="inline-flex items-center gap-1">
            <Calendar className="size-3" />
            {post.publishDate}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" />
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-text">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-2 flex-1 line-clamp-2 text-sm leading-relaxed text-text-muted">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="mt-4 flex items-center gap-3 border-t border-border/30 pt-4">
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              sizes="32px"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text truncate">
              {post.author.name}
            </p>
            <p className="text-[11px] text-text-muted truncate">
              {post.author.role}
            </p>
          </div>
        </div>

        {/* Read More */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <Link href={`/blog/${post.slug}`}>
            <Button variant="outline-accent" size="sm" className="w-full">
              Read Article <ArrowRight className="size-3.5 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}
