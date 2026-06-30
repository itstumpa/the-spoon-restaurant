"use client";

import { Container } from "@/components/ui/Container";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

/* ──────────── Social Links ──────────── */

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

/* ──────────── Quick Links ──────────── */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];

/* ──────────── Contact Details ──────────── */

const contactDetails = [
  { icon: MapPin, text: "123 Maple Street, Austin, TX 78701" },
  { icon: Phone, text: "(512) 555-0187" },
  { icon: Mail, text: "hello@thespoon.com" },
];

const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 10:00 PM" },
  { day: "Saturday – Sunday", time: "9:00 AM – 11:00 PM" },
];

/* ──────────── Framer Motion Variants ──────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const columnVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const linkVariants = {
  hidden: { x: -12, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2 + i * 0.06,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const socialVariants = {
  hidden: { y: 12, opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.4 + i * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const bottomVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ──────────── Component ──────────── */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      ref={sectionRef}
      className="relative bg-bg-dark text-white overflow-hidden"
    >
      {/* ── Decorative Top Gradient Line ── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary via-50% to-accent" />

      {/* ── Background Decorative Elements ── */}
      <div
        className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/[0.04] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-white/[0.015] blur-3xl"
        aria-hidden="true"
      />

      {/* ── Subtle Grid Pattern Overlay ── */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size_60px_60px]"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-14 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
        >
          {/* ═══════ COL 1 — Brand ═══════ */}
          <motion.div
            variants={columnVariants}
            className="sm:col-span-2 lg:col-span-4"
          >
            {/* Radial glow behind logo */}
            <div
              className="absolute top-0 left-0 h-40 w-40 -translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/10 blur-[80px]"
              aria-hidden="true"
            />

            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-heading font-bold group relative"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/30">
                <UtensilsCrossed className="h-5 w-5" />
              </span>
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                The Spoon
              </span>
            </Link>

            <p className="mt-4 text-white/55 text-sm font-body leading-relaxed max-w-xs">
              Serving unforgettable dining experiences crafted with passion,
              fresh ingredients, and exceptional hospitality.
            </p>

            <p className="mt-3 text-[11px] font-body text-primary/60 tracking-wider uppercase">
              ★ Est. 2010 — Austin, TX
            </p>

            {/* Social Icons */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-7 flex items-center gap-3"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  custom={i}
                  variants={socialVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:border-primary/40 hover:bg-primary/10 hover:text-primary min-h-[44px] min-w-[44px]"
                  aria-label={social.label}
                >
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══════ COL 2 — Quick Links ═══════ */}
          <motion.div
            variants={columnVariants}
            className="lg:col-span-2 lg:pl-4"
          >
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <Link
                    href={link.href}
                    className="group relative inline-flex items-center gap-1.5 py-2 text-sm font-body text-white/55 transition-colors duration-300 hover:text-white min-h-[44px]"
                  >
                    <span className="relative overflow-hidden">
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronRight className="h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-accent" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ═══════ COL 3 — Contact ═══════ */}
          <motion.div
            variants={columnVariants}
            className="lg:col-span-3 lg:pl-4"
          >
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactDetails.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-sm font-body text-white/55"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-accent ring-1 ring-white/[0.06]">
                    <item.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="pt-1">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Hours */}
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-3.5 w-3.5 text-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40 font-heading">
                  Opening Hours
                </span>
              </div>
              <ul className="space-y-2">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-sm font-body"
                  >
                    <span className="text-white/45">{h.day}</span>
                    <span className="text-white/80 font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ═══════ COL 4 — Newsletter ═══════ */}
          <motion.div
            variants={columnVariants}
            className="sm:col-span-2 lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-xl sm:p-7">
              <h3 className="font-heading text-base font-bold text-white">
                Stay Updated
              </h3>
              <p className="mt-2 text-sm font-body text-white/50 leading-relaxed">
                Be the first to know about seasonal specials, exclusive events,
                and new menu arrivals.
              </p>

              <form onSubmit={handleSubscribe} className="mt-5">
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative mt-3 w-full overflow-hidden rounded-xl bg-primary px-5 py-3 text-sm font-heading font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20 min-h-[48px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {subscribed ? (
                      <motion.span
                        key="done"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1.5"
                      >
                        Subscribed!
                      </motion.span>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </form>

              <p className="mt-3 text-[11px] font-body text-white/30 text-center">
                We respect your privacy. No spam.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ═══════ Bottom Bar ═══════ */}
        <motion.div
          variants={bottomVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <p className="text-white/30 text-xs font-body text-center sm:text-left">
            &copy; {currentYear} The Spoon. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs font-body">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
              (item, i, arr) => (
                <span key={item} className="flex items-center gap-4">
                  <span className="text-white/35 transition-colors duration-300 hover:text-white/70 cursor-default">
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="h-3 w-px bg-white/[0.06]" />
                  )}
                </span>
              )
            )}
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
