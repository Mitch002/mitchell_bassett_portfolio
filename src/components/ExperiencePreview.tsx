import Link from "next/link";
import { EXPERIENCE } from "@/content/experience";

export default function ExperiencePreview() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-mint-neon mb-3">Experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">From strategy to the systems that make it work.</h2>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-lg">
              My work spans agency growth strategy, early-stage technology marketing,
              and building an independent digital solutions business. I bring the
              strategy and hands-on implementation together.
            </p>
            <Link href="/experience" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-mint-neon hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint-neon">
              Explore my experience <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="border-t border-white/10">
            {EXPERIENCE.slice(0, 3).map((role) => (
              <div key={role.company} className="grid gap-2 border-b border-white/10 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{role.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{role.company}</p>
                </div>
                <p className="text-xs font-mono text-gray-500 sm:text-right">{role.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
