import { testimonials } from "@/lib/data";
import StarRating from "./StarRating";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text">
          What Our Guests Say
        </h2>
        <p className="mt-3 text-text-muted font-body text-base sm:text-lg max-w-xl mx-auto">
          Real words from real people who have dined with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="flex items-center gap-1 mb-4">
              <StarRating rating={testimonial.rating} />
            </div>
            <blockquote className="flex-1">
              <p className="text-text font-body text-sm sm:text-base leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </blockquote>
            <footer className="mt-6 pt-4 border-t border-white/50">
              <p className="font-heading font-semibold text-text">
                — {testimonial.name}
              </p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
