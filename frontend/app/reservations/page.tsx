"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { timeSlots } from "@/lib/data";
import type { ReservationFormData, ApiResponse } from "@/types";

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
  guests: 1,
};

export default function ReservationsPage() {
  const [formData, setFormData] = useState<ReservationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
    // Clear error when user changes the field
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
      // Submission failed silently — mock stub should always work
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-10 lg:mb-14">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text">
          Reserve Your Table
        </h1>
        <p className="mt-3 text-text-muted font-body text-base sm:text-lg max-w-xl mx-auto">
          Book your spot at The Spoon. We can not wait to welcome you.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-surface rounded-2xl p-8 sm:p-12 text-center shadow-sm">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3">
            Thank You!
          </h2>
          <p className="text-text-muted font-body text-base sm:text-lg">
            Your table has been reserved. We look forward to serving you!
          </p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="mt-6 inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-lg bg-primary text-white font-body font-semibold text-base hover:brightness-110 transition-all duration-200"
          >
            Make Another Reservation
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-surface rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-6"
          noValidate
        >
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
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                errors.fullName ? "border-red-400" : "border-surface"
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
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                errors.email ? "border-red-400" : "border-surface"
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
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                errors.phone ? "border-red-400" : "border-surface"
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
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                  errors.date ? "border-red-400" : "border-surface"
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
                Time <span className="text-red-500">*</span>
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                  errors.time ? "border-red-400" : "border-surface"
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
              Number of Guests <span className="text-red-500">*</span>
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border bg-white font-body text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                errors.guests ? "border-red-400" : "border-surface"
              }`}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
            {errors.guests && (
              <p className="mt-1 text-xs text-red-500 font-body">
                {errors.guests}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[52px] rounded-lg bg-primary text-white font-body font-semibold text-base hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
          >
            {isSubmitting ? "Reserving..." : "Reserve a Table"}
          </button>
        </form>
      )}
    </div>
  );
}
