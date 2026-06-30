"use client";

import { Container } from "@/components/ui/Container";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const contactInfo = [
  { icon: MapPin, text: "123 Maple Street, Austin, TX 78701" },
  { icon: Phone, text: "(512) 555-0187" },
  { icon: Clock, text: "Mon–Sun: 11:00 AM – 10:00 PM" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-bg-dark text-white overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-accent via-50%" />

      {/* Background decorative elements */}
      <div
        className="absolute top-40 -left-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="sm:col-span-2 lg:col-span-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-heading font-bold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <UtensilsCrossed className="h-5 w-5" />
              </span>
              The Spoon
            </Link>
            <p className="mt-4 text-white/55 text-sm font-body leading-relaxed max-w-xs">
              Where Mediterranean Meets the Table. Farm-fresh ingredients,
              inspired by the sun-drenched coasts of the Mediterranean.
            </p>
            {/* Contact */}
            <ul className="mt-6 space-y-3">
              {contactInfo.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-2.5 text-white/55 text-sm font-body"
                >
                  <item.icon className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="lg:col-span-2"
          >
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm font-body transition-colors duration-300 inline-flex items-center gap-1.5 group min-h-[44px]"
                  >
                    <span className="h-px w-0 group-hover:w-4 bg-accent transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="lg:col-span-2"
          >
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-5">
              Hours
            </h3>
            <ul className="space-y-3 text-white/55 text-sm font-body">
              <li className="flex justify-between">
                <span>Mon – Thu</span>
                <span className="text-white/70">11am – 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Fri – Sat</span>
                <span className="text-white/70">11am – 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white/70">10am – 9pm</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="sm:col-span-2 lg:col-span-4"
          >
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-5">
              Stay in Touch
            </h3>
            <p className="text-white/55 text-sm font-body mb-4">
              Subscribe for exclusive updates, seasonal specials, and event
              invites.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-accent px-4 py-2.5 text-white hover:bg-accent-light transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-sm font-semibold"
                  >
                    Done!
                  </motion.span>
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>

            {/* Social */}
            <div className="mt-6">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 min-h-[44px] min-w-[44px]"
                    aria-label={social.label}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/30 text-xs font-body">
            &copy; {currentYear} The Spoon. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/30 text-xs font-body">
            <span>Privacy Policy</span>
            <span className="w-px h-3 bg-white/10" />
            <span>Terms of Service</span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
