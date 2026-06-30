"use client";

import { Button, Container } from "@/components/ui";
import type { BlogPost } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { easeSmooth } from "./constants";

export function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <section className="bg-bg pb-0 pt-12 md:pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeSmooth }}
          className="mb-8 flex items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            <Sparkles className="size-3" /> Featured Story
          </span>
          <span className="h-px flex-1 bg-border/40" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeSmooth }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-3 lg:aspect-auto"
          >
            <div className="relative h-full min-h-[300px] w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Category badge on image */}
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold capitalize text-text shadow-sm backdrop-blur-sm">
              {post.categoryLabel}
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeSmooth, delay: 0.15 }}
            className="flex flex-col justify-center lg:col-span-2"
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                {post.publishDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-4 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight text-text">
              <Link
                href={`/blog/${post.slug}`}
                className="transition-colors hover:text-primary"
              >
                {post.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3">
              <div className="relative size-11 overflow-hidden rounded-full ring-2 ring-primary/10">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-text">
                  {post.author.name}
                </p>
                <p className="text-xs text-text-muted">{post.author.role}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link href={`/blog/${post.slug}`}>
                <Button variant="accent" size="lg">
                  Read Full Story <ArrowRight className="size-4 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
