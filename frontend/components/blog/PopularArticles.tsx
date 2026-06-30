"use client";

import { Container } from "@/components/ui";
import type { BlogPost } from "@/types";
import { motion } from "framer-motion";
import { Calendar, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { easeSmooth } from "./constants";

export function PopularArticles({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-bg py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: easeSmooth }}
          className="mb-8 flex items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            <TrendingUp className="size-3" /> Most Popular
          </span>
          <span className="h-px flex-1 bg-border/40" />
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {posts.slice(0, 4).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: easeSmooth,
                delay: index * 0.08,
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-start gap-4 rounded-xl p-3 transition-all hover:bg-white hover:shadow-md"
              >
                {/* Thumbnail */}
                <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {post.categoryLabel}
                  </span>
                  <h4 className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-text transition-colors group-hover:text-primary">
                    {post.title}
                  </h4>
                  <div className="mt-1.5 flex items-center gap-2 text-[10px] text-text-muted">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="size-2.5" />
                      {post.publishDate}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-2.5" />
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
