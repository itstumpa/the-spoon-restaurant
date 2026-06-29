"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Image from "next/image";
import type { ContactFormData, ApiResponse } from "@/types";

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
  }

  return errors;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

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
      // Submission failed silently — mock stub should always work
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 lg:pb-24">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text">
            Get In Touch
          </h1>
          <p className="mt-3 text-text-muted font-body text-base sm:text-lg max-w-xl mx-auto">
            Have a question or just want to say hello? We would love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-text mb-6">
                Visit Us
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl mt-0.5" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-text">
                      Address
                    </p>
                    <p className="text-text-muted font-body text-sm sm:text-base">
                      142 Maple Street, Austin, Texas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl mt-0.5" aria-hidden="true">
                    📞
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-text">
                      Phone
                    </p>
                    <p className="text-text-muted font-body text-sm sm:text-base">
                      +1 (512) 000-0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl mt-0.5" aria-hidden="true">
                    ✉️
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-text">
                      Email
                    </p>
                    <p className="text-text-muted font-body text-sm sm:text-base">
                      hello@thespoon.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-primary text-xl mt-0.5" aria-hidden="true">
                    🕐
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-text">
                      Hours
                    </p>
                    <p className="text-text-muted font-body text-sm sm:text-base">
                      Mon–Sun 11am–11pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="https://placehold.co/800x400/EDE8DC/3A5A40?text=Map+of+Austin%2C+Texas"
                alt="Map showing The Spoon location at 142 Maple Street, Austin, Texas"
                width={800}
                height={400}
                unoptimized
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {isSuccess ? (
              <div className="bg-surface rounded-2xl p-8 sm:p-12 text-center shadow-sm h-full flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">
                  Message Sent!
                </h2>
                <p className="text-text-muted font-body text-base sm:text-lg max-w-sm">
                  Thank you! We will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg bg-primary text-white font-body font-semibold text-base hover:brightness-110 transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-6"
                noValidate
              >
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-text mb-2">
                  Send Us a Message
                </h2>

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
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                      errors.name ? "border-red-400" : "border-surface"
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
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                      errors.email ? "border-red-400" : "border-surface"
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
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y ${
                      errors.message ? "border-red-400" : "border-surface"
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[52px] rounded-lg bg-primary text-white font-body font-semibold text-base hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
