import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EXPERIENCE, EXPERTISE, INDUSTRIES } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience & Skills | Mitchell Bassett",
  description:
    "Explore Mitchell Bassett's experience in growth marketing, marketing operations, CRM automation, paid acquisition, and analytics.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="max-w-4xl mb-20">
            <p className="text-xs font-mono uppercase tracking-widest text-mint-neon mb-5">
              Professional experience
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
              Strategy, systems, and hands-on execution.
            </h1>
            <p className="mt-7 text-lg text-gray-300 leading-relaxed max-w-3xl">
              I work across the customer acquisition process: researching markets,
              developing offers, planning campaigns, building conversion paths,
              configuring CRM follow-up, and making performance measurable.
              My background spans agency strategy, early-stage technology,
              independent business ownership, and technical field operations.
            </p>
            <p className="mt-5 text-sm text-gray-400 max-w-3xl leading-relaxed">
              Roles of interest: growth marketing, marketing operations, CRM and lifecycle marketing,
              performance marketing, and marketing automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:bassettmitchell7@gmail.com" className="inline-flex items-center rounded-full bg-indigo-electric px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint-neon">
                Discuss an opportunity
              </a>
              <Link href="/#work" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-indigo-electric transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint-neon">
                View selected work
              </Link>
            </div>
          </header>

          <section aria-labelledby="career-heading" className="mb-24">
            <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-5 mb-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-mint-neon mb-3">Career</p>
                <h2 id="career-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Work history</h2>
              </div>
              <span className="hidden sm:block text-sm text-gray-500">Connecticut, United States</span>
            </div>
            <div className="divide-y divide-white/10">
              {EXPERIENCE.map((role) => (
                <article key={role.company} className="grid gap-7 py-10 md:grid-cols-[15rem_minmax(0,1fr)]">
                  <div>
                    <p className="text-sm text-mint-neon font-mono">{role.dates}</p>
                    <p className="mt-2 text-sm text-gray-400">{role.company}</p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">{role.title}</h3>
                    <p className="mt-3 text-gray-300 leading-relaxed max-w-3xl">{role.summary}</p>
                    <ul className="mt-6 space-y-3 max-w-3xl">
                      {role.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm sm:text-base text-gray-400 leading-relaxed">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-electric" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {role.tags.map((tag) => <span key={tag} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300">{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="expertise-heading" className="mb-24">
            <p className="text-xs font-mono uppercase tracking-widest text-mint-neon mb-3">Capabilities</p>
            <h2 id="expertise-heading" className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">What I bring to a team</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {EXPERTISE.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-500 max-w-3xl leading-relaxed">
              GoHighLevel is my deepest CRM specialization. I have also worked with or evaluated other platforms and collaborate with developers on broader technical systems.
            </p>
          </section>

          <section aria-labelledby="context-heading" className="grid gap-12 lg:grid-cols-2 border-t border-white/10 pt-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-mint-neon mb-3">Industry context</p>
              <h2 id="context-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Experience across different buying journeys</h2>
              <p className="mt-4 text-gray-400 leading-relaxed">I adapt acquisition and follow-up systems to the business model, customer decision, sales cycle, and operational constraints.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {INDUSTRIES.map((industry) => <span key={industry} className="rounded-md bg-white/[0.05] px-3 py-1.5 text-sm text-gray-300">{industry}</span>)}
              </div>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-mint-neon mb-3">Background</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Practical learning and technical discipline</h2>
              <p className="mt-4 text-gray-400 leading-relaxed">My education includes Montville High School and Southeast Lineman Training Center. Since moving into marketing and technology, I have continued learning through client work, self-directed study, and hands-on implementation in analytics, Python, automation, CRM systems, and AI workflows.</p>
              <p className="mt-4 text-gray-400 leading-relaxed">The shift from utility linework to business ownership and marketing shaped how I approach unfamiliar problems: learn the system, find the failure point, and build a practical solution with the people involved.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
