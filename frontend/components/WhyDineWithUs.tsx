import { whyDinePoints } from "@/lib/data";

export default function WhyDineWithUs() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text">
            Why Dine With Us
          </h2>
          <p className="mt-3 text-text-muted font-body text-base sm:text-lg max-w-xl mx-auto">
            What makes The Spoon a place you will keep coming back to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {whyDinePoints.map((point) => (
            <article
              key={point.id}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span
                className="inline-flex items-center justify-center text-4xl sm:text-5xl mb-4"
                role="img"
                aria-label={point.title}
              >
                {point.icon}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-text mb-3">
                {point.title}
              </h3>
              <p className="text-text-muted font-body text-sm sm:text-base leading-relaxed">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
