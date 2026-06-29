import { teamMembers, values } from "@/lib/data";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 lg:pb-24">
      {/* Our Story */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-16 lg:mb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text mb-6">
          Our Story
        </h1>
        <p className="text-text-muted font-body text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          The Spoon was born in 2010 from a love of honest, hearty American
          cooking. We believe every meal should feel like home. What started as
          a small family kitchen on Maple Street has grown into a gathering
          place where friends, families, and neighbors come together over plates
          of comfort food made with love.
        </p>
        <div className="mt-8 w-20 h-1 bg-accent mx-auto rounded-full" />
      </section>

      {/* Meet The Team */}
      <section className="bg-surface py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text text-center mb-12">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mt-8 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-text">
                    {member.name}
                  </h3>
                  <p className="text-accent font-body font-semibold text-sm sm:text-base mt-1">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text">
            Our Values
          </h2>
          <p className="mt-3 text-text-muted font-body text-base sm:text-lg max-w-xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value) => (
            <article key={value.id} className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-primary font-heading text-2xl sm:text-3xl font-bold">
                  {value.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-text mb-3">
                {value.title}
              </h3>
              <p className="text-text-muted font-body text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
