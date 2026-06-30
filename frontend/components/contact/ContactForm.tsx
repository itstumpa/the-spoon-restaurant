"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import type { ApiResponse, ContactFormData } from "@/types";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { slideLeft, slideRight } from "./contact-variants";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

/* ------------------------------------------------------------------ */
/*  Validation helpers                                                 */
/* ------------------------------------------------------------------ */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  }
  return errors;
}

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result: ApiResponse = await res.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData(initialFormData);
        setErrors({});
      }
    } catch {
      /* silently fail */
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 lg:py-14">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ---------- Left: Form ---------- */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center justify-center rounded-2xl border border-[#e5e7eb] bg-white p-10 text-center shadow-sm sm:p-14"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <CheckCircle className="mx-auto mb-5 h-16 w-16 text-primary" />
                </motion.div>
                <h3 className="mb-2 font-heading text-2xl font-bold text-text sm:text-3xl">
                  Message Sent!
                </h3>
                <p className="max-w-sm font-body text-base text-text-muted">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => setIsSuccess(false)}
                  className="mt-7"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <div>
                <SectionHeading
                  badge="Contact Form"
                  title="Send Us a Message"
                  subtitle="We'd love to hear from you — fill in the form and we'll respond promptly."
                  align="left"
                />

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-8 space-y-5"
                >
                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block font-heading text-sm font-semibold text-text"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full min-h-[48px] rounded-xl border bg-white px-4 py-2.5 font-body text-sm text-text placeholder-text-muted/40 transition-all focus:outline-none focus:ring-2 ${
                          errors.name
                            ? "border-red-400 focus:ring-red-200"
                            : "border-[#e5e7eb] focus:border-primary/40 focus:ring-primary/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs font-body text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block font-heading text-sm font-semibold text-text"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full min-h-[48px] rounded-xl border bg-white px-4 py-2.5 font-body text-sm text-text placeholder-text-muted/40 transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-red-400 focus:ring-red-200"
                            : "border-[#e5e7eb] focus:border-primary/40 focus:ring-primary/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs font-body text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row: Phone + Subject */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block font-heading text-sm font-semibold text-text"
                      >
                        Phone{" "}
                        <span className="text-text-muted/60">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (512) 555-0142"
                        className="w-full min-h-[48px] rounded-xl border border-[#e5e7eb] bg-white px-4 py-2.5 font-body text-sm text-text placeholder-text-muted/40 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-1.5 block font-heading text-sm font-semibold text-text"
                      >
                        Subject{" "}
                        <span className="text-text-muted/60">(optional)</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="General Inquiry"
                        className="w-full min-h-[48px] rounded-xl border border-[#e5e7eb] bg-white px-4 py-2.5 font-body text-sm text-text placeholder-text-muted/40 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block font-heading text-sm font-semibold text-text"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      className={`w-full resize-y rounded-xl border bg-white px-4 py-3 font-body text-sm text-text placeholder-text-muted/40 transition-all focus:outline-none focus:ring-2 ${
                        errors.message
                          ? "border-red-400 focus:ring-red-200"
                          : "border-[#e5e7eb] focus:border-primary/40 focus:ring-primary/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs font-body text-red-500">
                        {errors.message}
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
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>

                  <p className="text-center font-body text-xs text-text-muted">
                    We&apos;ll respond within 24 hours. Your information is kept
                    private and secure.
                  </p>
                </form>
              </div>
            )}
          </motion.div>

          {/* ---------- Right: Image ---------- */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[3/4] lg:aspect-[4/5]"
          >
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=1000&fit=crop&q=80"
              alt="Elegant fine dining restaurant interior with ambient lighting"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              unoptimized
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              aria-hidden="true"
            />
            {/* Floating label */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
              <p className="font-heading text-sm font-bold text-text">
                The Spoon Restaurant
              </p>
              <p className="mt-0.5 font-body text-xs text-text-muted">
                Where every meal tells a story
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
