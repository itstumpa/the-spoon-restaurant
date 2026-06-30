"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

/* ────────────────────────────────
   Data
   ──────────────────────────────── */

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);

const infoCards = [
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Mon–Sun", "10:00 AM – 11:00 PM"],
  },
  {
    icon: Phone,
    title: "Contact",
    lines: ["(512) 555-0187", "reservations@thespoon.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["123 Maple Street", "Austin, TX 78701"],
  },
];

/* ────────────────────────────────
   Variants
   ──────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeInLeft = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const fadeInRight = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const fadeInUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerItem = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

/* ────────────────────────────────
   Component
   ──────────────────────────────── */

export default function ReservationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative overflow-hidden bg-bg-muted py-6 md:py-12">
      {/* ── Decorative background ── */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Subtle leaf‑like decoration */}
      <svg
        className="pointer-events-none absolute right-[5%] top-[10%] h-24 w-24 text-primary/10 lg:h-36 lg:w-36"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M50 10C45 30 30 45 10 50C30 55 45 70 50 90C55 70 70 55 90 50C70 45 55 30 50 10Z"
          fill="currentColor"
        />
      </svg>

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* ── Header ── */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 text-center md:mb-16"
          >
            <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Book a Table
            </span>
            <h2 className="font-heading text-[clamp(2rem,5vw,3.2rem)] font-bold leading-tight text-text">
              Reserve Your <span className="text-primary">Experience</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted font-body">
              Your table is just a few taps away. Choose your date, time, and
              preferences — we&rsquo;ll handle the rest with instant
              confirmation.
            </p>
          </motion.div>

          {/* ── Two‑column grid ── */}
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            {/* ════════════════════════════════════
                LEFT COLUMN – Restaurant Showcase
               ════════════════════════════════════ */}
            <motion.div
              variants={fadeInLeft}
              className="relative lg:col-span-7"
            >
              <div className="group relative h-full overflow-hidden rounded-3xl shadow-elevated">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85"
                  alt="Elegant restaurant interior with warm ambient lighting"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />

                {/* Dark gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* ── Floating badge – Rating ── */}
                <motion.div
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/90">
                    <Star className="h-5 w-5 fill-white text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-white">4.9</span>
                      <span className="text-sm text-white/70">/ 5.0</span>
                    </div>
                    <p className="text-xs text-white/60">
                      5,000+ Happy Customers
                    </p>
                  </div>
                </motion.div>

                {/* ── Floating badge – Since 2010 ── */}
                <motion.div
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute right-6 top-6 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 shadow-lg backdrop-blur-xl"
                >
                  <p className="text-center text-xs font-semibold uppercase tracking-wider text-white/80">
                    Since 2010
                  </p>
                  <p className="text-center text-[10px] text-white/50">
                    Award Winning
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* ════════════════════════════════════
                RIGHT COLUMN – Booking Form
               ════════════════════════════════════ */}
            <motion.div variants={fadeInRight} className="lg:col-span-5">
              <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-elevated sm:p-8">
                {submitted ? (
                  /* ── Success state ── */
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-text">
                      Reservation Confirmed!
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
                      Thank you! A confirmation email is on its way to your
                      inbox. We can&rsquo;t wait to serve you.
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="mt-8"
                      onClick={() => setSubmitted(false)}
                    >
                      Book Another Table
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    {/* ── Form header ── */}
                    <div className="mb-6">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                        Reserve Your Table
                      </span>
                      <h3 className="mt-1 font-heading text-2xl font-bold text-text">
                        Book a Table
                      </h3>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      noValidate
                    >
                      {/* ── Row 1: Name, Email ── */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="res-name"
                            className="mb-1.5 block text-sm font-medium text-text"
                          >
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="res-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text placeholder:text-text-muted transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="res-email"
                            className="mb-1.5 block text-sm font-medium text-text"
                          >
                            Email <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            id="res-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-text placeholder:text-text-muted transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                          />
                        </div>
                      </div>

                      {/* ── Row 2: Phone ── */}
                      <div>
                        <label
                          htmlFor="res-phone"
                          className="mb-1.5 block text-sm font-medium text-text"
                        >
                          Phone Number{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
                          <input
                            type="tel"
                            id="res-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(512) 555-0187"
                            className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-text placeholder:text-text-muted transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                          />
                        </div>
                      </div>

                      {/* ── Row 3: Date, Time, Guests ── */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div>
                          <label
                            htmlFor="res-date"
                            className="mb-1.5 block text-sm font-medium text-text"
                          >
                            Date <span className="text-destructive">*</span>
                          </label>
                          <div className="relative">
                            <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
                            <input
                              type="date"
                              id="res-date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              required
                              min={new Date().toISOString().split("T")[0]}
                              max={
                                new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
                                  .toISOString()
                                  .split("T")[0]
                              }
                              className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-text transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="res-time"
                            className="mb-1.5 block text-sm font-medium text-text"
                          >
                            Time <span className="text-destructive">*</span>
                          </label>
                          <div className="relative">
                            <Clock className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-text-muted" />
                            <select
                              id="res-time"
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              required
                              className="w-full appearance-none rounded-xl border border-border bg-white py-3 pl-11 pr-10 text-text transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                            >
                              <option value="">Select time</option>
                              {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="res-guests"
                            className="mb-1.5 block text-sm font-medium text-text"
                          >
                            Guests <span className="text-destructive">*</span>
                          </label>
                          <div className="relative">
                            <Users className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-text-muted" />
                            <select
                              id="res-guests"
                              name="guests"
                              value={formData.guests}
                              onChange={handleChange}
                              required
                              className="w-full appearance-none rounded-xl border border-border bg-white py-3 pl-11 pr-10 text-text transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                            >
                              {guestOptions.map((num) => (
                                <option key={num} value={num.toString()}>
                                  {num} {num === 1 ? "Guest" : "Guests"}
                                </option>
                              ))}
                              <option value="13">13+ (Private Dining)</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
                          </div>
                        </div>
                      </div>

                      {/* ── Row 4: Special Requests ── */}
                      <div>
                        <label
                          htmlFor="res-requests"
                          className="mb-1.5 block text-sm font-medium text-text"
                        >
                          Special Requests{" "}
                          <span className="font-normal text-text-muted">
                            (Optional)
                          </span>
                        </label>
                        <textarea
                          id="res-requests"
                          name="requests"
                          value={formData.requests}
                          onChange={handleChange}
                          rows={2}
                          placeholder="Dietary restrictions, seating preference, celebrations…"
                          className="w-full resize-none rounded-xl border border-border bg-white p-4 text-text placeholder:text-text-muted transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                        />
                      </div>

                      {/* ── CTA ── */}
                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full bg-primary text-base text-white shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_12px_28px_rgba(109,140,46,0.35)] active:translate-y-0"
                      >
                        Book a Table
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>

          {/* ════════════════════════════════════
              Bottom Info Cards
             ════════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-text">
                    {card.title}
                  </h4>
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-sm leading-snug text-text-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
