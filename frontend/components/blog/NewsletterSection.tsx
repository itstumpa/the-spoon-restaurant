"use client";

import { Container } from "@/components/ui";
import { motion } from "framer-motion";
import { Mail, SendHorizonal } from "lucide-react";
import { easeSmooth } from "./constants";

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-bg-dark py-20">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeSmooth }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-accent/10">
            <Mail className="size-8 text-accent" />
          </div>

          <h2 className="font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-white">
            Stay Updated With Our <br className="hidden sm:block" />
            Latest Stories
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-white/60">
            Subscribe to our newsletter and never miss a recipe, a chef story,
            or an exclusive event invitation.
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full rounded-full border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-accent/50 focus:bg-white/10"
              />
            </div>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 active:scale-[0.97]"
            >
              Subscribe <SendHorizonal className="size-4" />
            </button>
          </form>

          <p className="mt-4 text-xs text-white/30">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
