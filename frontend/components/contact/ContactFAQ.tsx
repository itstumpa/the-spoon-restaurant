"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqData } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { easeOut, fadeUp, staggerContainer } from "./contact-variants";

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
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
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
          {faqData.map((faq) => (
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
  );
}
