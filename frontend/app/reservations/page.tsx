"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { timeSlots } from "@/lib/data";
import type { ApiResponse, ReservationFormData } from "@/types";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(data: ReservationFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (!data.date) {
    errors.date = "Please select a date.";
  }

  if (!data.time) {
    errors.time = "Please select a time.";
  }

  if (!data.guests || data.guests < 1) {
    errors.guests = "Please select the number of guests.";
  }

  return errors;
}

const initialFormData: ReservationFormData = {
  fullName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: 2,
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function ReservationsPage() {
  const [formData, setFormData] =
    useState<ReservationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSuccess(false);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData(initialFormData);
        setErrors({});
      }
    } catch {
      // Submission failed silently
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-bg-dark">
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(58,90,64,0.12),transparent_60%)]"
          aria-hidden="true"
        />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <span className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
              Book Your Experience
            </span>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
              Reserve Your Table
            </h1>
            <p className="mt-4 text-white/70 font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Book your spot at The Spoon. We can not wait to welcome you for an
              unforgettable dining experience.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left — Decorative Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {/* Restaurant Image */}
              <motion.div
                variants={fadeInUp}
                custom={0}
                className="relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&h=400&fit=crop&q=80"
                  alt="The Spoon dining room"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-text">
                    <UtensilsCrossed className="h-3.5 w-3.5 text-primary" />
                    Dine with us tonight
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                custom={1}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-heading font-bold text-text">
                    Why Dine With Us?
                  </h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Farm-to-table seasonal ingredients sourced from local Texas farms",
                    "Award-winning wine list featuring over 200 labels from around the world",
                    "Intimate ambiance with live jazz music on weekends",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm font-body text-text-muted"
                    >
                      <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-primary text-xs font-bold">
                          ✓
                        </span>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                custom={2}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <h3 className="font-heading font-bold text-text mb-4 text-base sm:text-lg">
                  Need Help?
                </h3>
                <p className="text-text-muted font-body text-sm mb-3">
                  Call us or send an email and our team will assist you with
                  your reservation.
                </p>
                <div className="space-y-2 text-sm font-body">
                  <p className="text-text">
                    <span className="font-semibold">Phone:</span>{" "}
                    <span className="text-text-muted">(512) 555-0142</span>
                  </p>
                  <p className="text-text">
                    <span className="font-semibold">Email:</span>{" "}
                    <span className="text-text-muted">
                      reservations@thespoon.com
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                custom={3}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-8 shadow-sm"
              >
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,133,58,0.08),transparent_60%)]"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-text mb-3 text-base sm:text-lg">
                    Hours
                  </h3>
                  <div className="space-y-2 text-sm font-body">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Mon – Thu</span>
                      <span className="text-text font-semibold">
                        11am – 10pm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Fri – Sat</span>
                      <span className="text-text font-semibold">
                        11am – 11pm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Sunday</span>
                      <span className="text-text font-semibold">
                        10am – 9pm
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut" as const,
                  }}
                  className="bg-white rounded-2xl p-8 sm:p-12 text-center shadow-sm h-full flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.15,
                      type: "spring" as const,
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-5" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text mb-3">
                    Thank You!
                  </h2>
                  <p className="text-text-muted font-body text-base sm:text-lg max-w-sm">
                    Your table has been reserved. We look forward to serving
                    you!
                  </p>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => setIsSuccess(false)}
                    className="mt-6"
                  >
                    Make Another Reservation
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-6"
                    noValidate
                  >
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-text mb-1">
                      Booking Details
                    </h2>
                    <p className="text-text-muted font-body text-sm mb-4">
                      Fill in the details below and we will confirm your
                      reservation.
                    </p>

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-heading font-semibold text-text mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
                          errors.fullName
                            ? "border-red-400"
                            : "border-[#e5e7eb]"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500 font-body">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-heading font-semibold text-text mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
                          errors.email ? "border-red-400" : "border-[#e5e7eb]"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-body">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-heading font-semibold text-text mb-1.5"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
                          errors.phone ? "border-red-400" : "border-[#e5e7eb]"
                        }`}
                        placeholder="+1 (512) 000-0000"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 font-body">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Date & Time Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-heading font-semibold text-text mb-1.5"
                        >
                          <span className="flex items-center gap-1.5">
                            <CalendarDays className="w-4 h-4 text-primary" />
                            Date <span className="text-red-500">*</span>
                          </span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
                            errors.date ? "border-red-400" : "border-[#e5e7eb]"
                          }`}
                        />
                        {errors.date && (
                          <p className="mt-1 text-xs text-red-500 font-body">
                            {errors.date}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="time"
                          className="block text-sm font-heading font-semibold text-text mb-1.5"
                        >
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-primary" />
                            Time <span className="text-red-500">*</span>
                          </span>
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
                            errors.time ? "border-red-400" : "border-[#e5e7eb]"
                          }`}
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                        {errors.time && (
                          <p className="mt-1 text-xs text-red-500 font-body">
                            {errors.time}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label
                        htmlFor="guests"
                        className="block text-sm font-heading font-semibold text-text mb-1.5"
                      >
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-primary" />
                          Number of Guests{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
                          errors.guests ? "border-red-400" : "border-[#e5e7eb]"
                        }`}
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                          (num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </option>
                          ),
                        )}
                      </select>
                      {errors.guests && (
                        <p className="mt-1 text-xs text-red-500 font-body">
                          {errors.guests}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full min-h-[52px] text-base"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? "Reserving..." : "Reserve a Table"}
                    </Button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
