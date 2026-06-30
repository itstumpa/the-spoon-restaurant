"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { fadeUp, staggerContainer } from "./contact-variants";

const mapInfo = {
  address: "142 Maple Street, Austin, TX 78701",
  landmarks: [
    "Maple Park (0.1 mi)",
    "Austin Convention Center (0.6 mi)",
    "Texas State Capitol (1.2 mi)",
  ],
  parking:
    "Complimentary valet Thu–Sun evenings. Street parking & public garage half a block away.",
  transit:
    "Bus routes 10, 20, and 30 stop at Maple & 2nd St, a 2-minute walk.",
};

export default function ContactMap() {
  return (
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
  );
}
