"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SystemCard from "./SystemCard";
import { FRAMEWORK } from "@/content/framework";

export default function HowIThink() {
  return (
    <section id="approach" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="How I Think"
            title="My GTM Operating System"
            description="Four systems that work together. Applicable across SaaS, services, and marketplaces — not just one vertical."
          />
        </AnimatedSection>

        <AnimatedSection staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FRAMEWORK.map((item) => (
              <SystemCard key={item.number} item={item} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
