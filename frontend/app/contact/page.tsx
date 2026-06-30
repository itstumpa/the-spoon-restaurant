"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import type { ApiResponse, ContactFormData } from "@/types";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

const initialFormData: ContactFormData = { name: "", email: "", message: "" };

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    content: "142 Maple Street\nAustin, TX 78701",
  },
  { icon: Phone, label: "Phone", content: "+1 (512) 000-0000" },
  { icon: Mail, label: "Email", content: "hello@thespoon.com" },
];

const businessHours = [
  { day: "Monday – Thursday", hours: "11:00 AM – 10:00 PM" },
  { day: "Friday – Saturday", hours: "11:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 9:00 PM" },
];

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function ContactPage() {
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
      const response = await fetch("/api/contact", {
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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_40%,rgba(200,133,58,0.08),transparent_60%)]"
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
              Get in Touch
            </span>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-white/70 font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Whether it is a special occasion or a quiet dinner, we are here to
              make it memorable. Reach out anytime.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Sidebar — Info + Hours + Map */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info Cards */}
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-text text-base sm:text-lg">
                        {item.label}
                      </h3>
                      <p className="text-text-muted font-body text-sm mt-0.5 whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Business Hours */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={3}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-text text-base sm:text-lg">
                    Hours of Operation
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {businessHours.map(({ day, hours }) => (
                    <div
                      key={day}
                      className="flex items-center justify-between text-sm font-body"
                    >
                      <span className="text-text-muted">{day}</span>
                      <span className="text-text font-semibold">{hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={4}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-52 sm:h-56">
                  <Image
                    src="https://placehold.co/800x400/EDE8DC/3A5A40?text=Map+of+Austin%2C+Texas"
                    alt="Map showing The Spoon location at 142 Maple Street, Austin, Texas"
                    width={800}
                    height={400}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <p className="font-heading font-bold text-text text-sm">
                      The Spoon Restaurant
                    </p>
                    <p className="text-text-muted font-body text-xs mt-0.5">
                      142 Maple Street, Austin, TX
                    </p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="w-8 h-8 text-accent drop-shadow-lg" />
                  </div>
                </div>
              </motion.div>
            </div>

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
                    Message Sent!
                  </h2>
                  <p className="text-text-muted font-body text-base sm:text-lg max-w-sm">
                    Thank you! We will get back to you soon.
                  </p>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => setIsSuccess(false)}
                    className="mt-6"
                  >
                    Send Another Message
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
                      Send Us a Message
                    </h2>
                    <p className="text-text-muted font-body text-sm mb-4">
                      We typically reply within 24 hours.
                    </p>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-heading font-semibold text-text mb-1.5"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${
                          errors.name ? "border-red-400" : "border-[#e5e7eb]"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-body">
                          {errors.name}
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
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-body">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-heading font-semibold text-text mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-y ${
                          errors.message ? "border-red-400" : "border-[#e5e7eb]"
                        }`}
                        placeholder="Tell us what is on your mind..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500 font-body">
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
                          Send Message <Send className="w-4 h-4" />
                        </span>
                      )}
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
