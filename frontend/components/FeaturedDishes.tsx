import Image from "next/image";
import { featuredDishes } from "@/lib/data";

export default function FeaturedDishes() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text">
          American Classics
        </h2>
        <p className="mt-3 text-text-muted font-body text-base sm:text-lg max-w-xl mx-auto">
          Our most beloved dishes, crafted with passion and the finest ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredDishes.map((dish) => (
          <article
            key={dish.id}
            className="bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-text">
                {dish.name}
              </h3>
              <p className="mt-2 text-text-muted font-body text-sm sm:text-base leading-relaxed">
                {dish.description}
              </p>
              <p className="mt-3 text-primary font-heading font-bold text-lg sm:text-xl">
                {dish.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
