"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { useRef, useState } from "react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Instant Confirmation",
    description:
      "Real-time availability with immediate booking confirmation via email and SMS.",
  },
  {
    icon: Sparkles,
    title: "Special Requests",
    description:
      "Dietary needs, seating preferences, celebrations — we accommodate it all.",
  },
  {
    icon: Users,
    title: "Flexible Changes",
    description:
      "Modify or cancel up to 2 hours before your reservation at no charge.",
  },
  {
    icon: Calendar,
    title: "Book 90 Days Ahead",
    description:
      "Plan your special occasions well in advance with our extended booking window.",
  },
];

const timeSlots = [
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
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ReservationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    occasion: "",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
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
    <section className="relative py-20 lg:py-28 overflow-hidden bg-bg-dark">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(58,90,64,0.15),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <SectionHeading
            badge="Reserve Your Table"
            title="Book Your Experience"
            subtitle="Reserve a table in just a few clicks. We'll take care of the rest."
            light
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Benefits & Info */}
            <motion.div
              variants={itemVariants}
              custom={0}
              className="space-y-8"
            >
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    variants={itemVariants}
                    custom={i + 1}
                    className="flex gap-4 p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                      <benefit.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-white/60 font-body text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h4 className="font-heading font-semibold text-white">
                  Questions? Contact Us
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      icon: MapPin,
                      text: "123 Maple Street, Austin, TX 78701",
                    },
                    { icon: Phone, text: "(512) 555-0187" },
                    { icon: Mail, text: "reservations@thespoon.com" },
                    { icon: Clock, text: "Mon–Sun: 11:00 AM – 10:00 PM" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-white/70 font-body text-sm"
                    >
                      <item.icon
                        className="h-5 w-5 text-accent shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Booking Form */}
            <motion.div variants={itemVariants} custom={5}>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-elevated">
                {/* Decorative top accent */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-b-full"
                  aria-hidden="true"
                />

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <CheckCircle2
                        className="h-8 w-8 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-text mb-2">
                      Reservation Confirmed!
                    </h3>
                    <p className="text-text-muted font-body">
                      We've sent a confirmation to your email. We look forward
                      to serving you!
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Book Another Table
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Date */}
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-text mb-1.5"
                        >
                          Date <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <Calendar
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted"
                            aria-hidden="true"
                          />
                          <input
                            type="date"
                            id="date"
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
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Time */}
                      <div>
                        <label
                          htmlFor="time"
                          className="block text-sm font-medium text-text mb-1.5"
                        >
                          Time <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <Clock
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted"
                            aria-hidden="true"
                          />
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-white text-text appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                          <svg
                            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Guests */}
                    <div>
                      <label
                        htmlFor="guests"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Guests <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <Users
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted"
                          aria-hidden="true"
                        />
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-white text-text appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                        >
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(
                            (num) => (
                              <option key={num} value={num.toString()}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </option>
                            ),
                          )}
                          <option value="13">13+ (Private Dining)</option>
                        </select>
                        <svg
                          className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Occasion */}
                    <div>
                      <label
                        htmlFor="occasion"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Occasion (Optional)
                      </label>
                      <div className="relative">
                        <Sparkles
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted"
                          aria-hidden="true"
                        />
                        <select
                          id="occasion"
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-white text-text appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                        >
                          <option value="">Select occasion</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="birthday">Birthday</option>
                          <option value="business">Business Dinner</option>
                          <option value="date">Date Night</option>
                          <option value="family">Family Gathering</option>
                          <option value="other">Other</option>
                        </select>
                        <svg
                          className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Email <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted"
                          aria-hidden="true"
                        />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Phone <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted"
                          aria-hidden="true"
                        />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(512) 555-0187"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="requests"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Special Requests
                      </label>
                      <textarea
                        id="requests"
                        name="requests"
                        value={formData.requests}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Dietary restrictions, seating preference, accessibility needs..."
                        className="w-full p-4 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full shadow-elevated"
                      >
                        {submitted ? "Confirming..." : "Reserve Table"}
                      </Button>
                      <p className="mt-3 text-center text-sm text-text-muted">
                        By booking, you agree to our{" "}
                        <a
                          href="/terms"
                          className="text-primary hover:underline"
                        >
                          Terms
                        </a>{" "}
                        &{" "}
                        <a
                          href="/privacy"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
