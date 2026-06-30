"use client";

import { Container, SectionHeading } from "@/components/ui";
import type { MenuItem } from "@/types";
import { TodaysSpecialCard } from "./TodaysSpecialCard";

export function TodaysSpecialSection({
  todaysSpecial,
}: {
  todaysSpecial: MenuItem[];
}) {
  return (
    <section className="bg-bg-dark py-20">
      <Container>
        <SectionHeading
          badge="Chef's Selection"
          title="Today's Special"
          subtitle="Hand-picked recommendations from Chef Marco — available only while supplies last"
          light
        />
        <div className="mt-12 space-y-4">
          {todaysSpecial.length > 0 ? (
            todaysSpecial.map((item, i) => (
              <TodaysSpecialCard key={item.id} item={item} index={i} />
            ))
          ) : (
            <p className="text-center text-white/50">
              Ask your server about today&apos;s chef specials.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
