"use client";

import { ChevronDownIcon } from "@/components/menu/ChevronDownIcon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { faqData } from "@/lib/data";
import type { ApiResponse, ContactFormData } from "@/types";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle,
  ChevronDown,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Play,
  Send,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

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

const contactCards = [
  {
    icon: MapPin,
    title: "Our Address",
    detail: "142 Maple Street\nAustin, TX 78701",
    description: "In the heart of downtown, across from Maple Park.",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+1 (512) 555-0142",
    description: "Available 10 AM – 10 PM daily.",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "hello@thespoon.com",
    description: "We reply within 24 hours.",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    detail: "Mon–Thu 11 AM – 10 PM\nFri–Sat 11 AM – 11 PM\nSun 10 AM – 9 PM",
    description: "Holiday hours may vary.",
  },
];

const mapInfo = {
  address: "142 Maple Street, Austin, TX 78701",
  landmarks: [
    "Maple Park (0.1 mi)",
    "Austin Convention Center (0.6 mi)",
    "Texas State Capitol (1.2 mi)",
  ],
  parking:
    "Complimentary valet Thu–Sun evenings. Street parking & public garage half a block away.",
  transit: "Bus routes 10, 20, and 30 stop at Maple & 2nd St, a 2-minute walk.",
};

/* ------------------------------------------------------------------ */
/*  Framer Motion variants                                             */
/* ------------------------------------------------------------------ */

const easeOut = [0.16, 1, 0.3, 1] as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, ease: easeOut },
  },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slideLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slideRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const scaleIn = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const cardHover = {
  rest: { y: 0, boxShadow: "0 1px 3px 0 rgba(0,0,0,0.06)" },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
    transition: { duration: 0.35, ease: easeOut },
  },
};

/* ------------------------------------------------------------------ */
/*  Social icon resolver                                               */
/* ------------------------------------------------------------------ */

const socialIconMap: Record<string, React.ElementType> = {
  Camera,
  Users,
  MessageCircle,
  Play,
};

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item                                                 */
/* ------------------------------------------------------------------ */

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-primary/20 bg-primary/[0.03]"
          : "border-[#e5e7eb] bg-white hover:border-primary/10"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          <HelpCircle
            className={`h-5 w-5 shrink-0 transition-colors duration-300 ${
              isOpen ? "text-primary" : "text-text-muted"
            }`}
          />
          <span className="font-heading text-base font-semibold text-text">
            {question}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className={`shrink-0 rounded-full p-1 transition-colors duration-300 ${
            isOpen
              ? "bg-primary/10 text-primary"
              : "bg-gray-100 text-text-muted"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <p className="font-body text-sm leading-relaxed text-text-muted">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  /* ---------- Parallax hero ---------- */

  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  /* ---------- Form handlers ---------- */

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

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  /* ---------- Render ---------- */

  return (
    <>
      {/* ================================================================ */}
      {/*  HERO                                                           */}
      {/* ================================================================ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-bg-dark pt-24 lg:pt-28"
      >
        {/* Background image */}
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&h=1080&fit=crop&q=80"
            alt="Contact The Spoon"
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
            priority
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bg-dark/90" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 px-4 text-center"
        >
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center justify-center gap-2 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span>/</span>
            <span className="text-accent">Contact Us</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="font-heading text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.1] text-white"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            We&apos;d love to hear from you — whether it&apos;s a reservation
            inquiry, feedback, or just to say hello.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/50"
            >
              <ChevronDownIcon className="size-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/*  SECTION 2 — Contact Form + Restaurant Image                    */}
      {/* ================================================================ */}
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
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
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
                      We&apos;ll respond within 24 hours. Your information is
                      kept private and secure.
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

      {/* ================================================================ */}
      {/*  SECTION 3 — Interactive Map                                    */}
      {/* ================================================================ */}
      <section className="bg-bg py-10 lg:py-14">
        <Container>
          <SectionHeading
            badge="Visit Us"
            title="Find Your Way"
            subtitle="Nestled in downtown Austin, we're easy to reach whether you're driving, walking, or taking transit."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5"
          >
            {/* Left — Map */}
            <motion.div
              variants={fadeUp}
              className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-lg lg:col-span-3"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27560.197604178255!2d-97.759282!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5b222b8b4d3%3A0x3f3b5b5c5d6e7f8a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Spoon Restaurant location on Google Maps"
                className="rounded-2xl"
              />
            </motion.div>

            {/* Right — Info panel */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <div className="flex h-full flex-col justify-center space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-text">
                      Address
                    </h4>
                    <p className="mt-0.5 font-body text-sm text-text-muted">
                      {mapInfo.address}
                    </p>
                  </div>
                </div>

                {/* Nearby Landmarks */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Navigation className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-text">
                      Nearby Landmarks
                    </h4>
                    <ul className="mt-1 space-y-0.5">
                      {mapInfo.landmarks.map((lm) => (
                        <li
                          key={lm}
                          className="font-body text-sm text-text-muted"
                        >
                          {lm}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-text">
                      Parking
                    </h4>
                    <p className="mt-0.5 font-body text-sm text-text-muted">
                      {mapInfo.parking}
                    </p>
                  </div>
                </div>

                {/* Transit */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Navigation className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-text">
                      Public Transit
                    </h4>
                    <p className="mt-0.5 font-body text-sm text-text-muted">
                      {mapInfo.transit}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://maps.google.com/?q=142+Maple+Street+Austin+TX+78701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg border border-accent/30 bg-background px-3.5 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none select-none"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ================================================================ */}
      {/*  SECTION 4 — FAQ Accordion                                      */}
      {/* ================================================================ */}
      <section className="py-10 lg:py-14">
        <Container>
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before your visit."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mx-auto mt-10 max-w-3xl space-y-3"
          >
            {faqData.map((faq, i) => (
              <motion.div key={faq.id} variants={fadeUp}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === faq.id}
                  onToggle={() => toggleFaq(faq.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ================================================================ */}
      {/*  SECTION 6 — Reservation CTA                                    */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-bg-dark py-14 lg:py-20">
        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=800&fit=crop&q=80"
            alt=""
            fill
            className="object-cover object-center"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,133,58,0.1),transparent_70%)]"
            aria-hidden="true"
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-white">
              Ready for an Unforgettable <br />
              Dining Experience?
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-white/70 sm:text-lg">
              Reserve your table today and discover why The Spoon is
              Austin&apos;s favorite destination for Mediterranean-inspired
              cuisine.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/reservations"
                className="inline-flex min-h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-lg border border-transparent bg-accent px-3.5 text-base font-medium text-accent-foreground transition-all hover:bg-accent/80 focus-visible:outline-none select-none"
              >
                <CalendarDays className="h-4 w-4" />
                Book a Table
              </Link>
              <Link
                href="/menu"
                className="inline-flex min-h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-3.5 text-base font-medium text-white transition-all hover:bg-white/10 focus-visible:outline-none select-none"
              >
                View Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
