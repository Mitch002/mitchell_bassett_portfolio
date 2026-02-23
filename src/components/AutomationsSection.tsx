"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import AutomationCard from "./AutomationCard";
import { AUTOMATIONS } from "@/content/automations";

export default function AutomationsSection() {
  return (
    <section id="systems" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Systems & Automations"
            title="Built to Run Without Me"
            description="GTM automation examples — deployed systems I built, plus concept prototypes that demonstrate how I think about workflow design."
          />
        </AnimatedSection>

        <AnimatedSection staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AUTOMATIONS.map((item) => (
              <AutomationCard key={item.title} item={item} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
