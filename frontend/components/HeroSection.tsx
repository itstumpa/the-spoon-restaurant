import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/F5F0E8/C8853A?text=The+Spoon')" }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-4xl sm:text-5xl lg:text-6xl" role="img" aria-label="spoon">
            🥄
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white">
            The Spoon
          </h1>
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-body mt-4 mb-10 max-w-2xl mx-auto">
          Simple Ingredients. Soulful Flavors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 rounded-lg bg-primary text-white font-body font-semibold text-base hover:brightness-110 transition-all duration-200 shadow-lg w-full sm:w-auto"
          >
            View Menu
          </Link>
          <Link
            href="/reservations"
            className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 rounded-lg bg-accent text-white font-body font-semibold text-base hover:brightness-110 transition-all duration-200 shadow-lg w-full sm:w-auto"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
}
