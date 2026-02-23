"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { WORK_ITEMS } from "@/content/work";

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading label="Selected Work" title="Proof of Impact" />
        </AnimatedSection>

        <AnimatedSection staggerChildren={0.12}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {WORK_ITEMS.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
