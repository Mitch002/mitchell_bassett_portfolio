import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import ExperimentLoopDiagram from "@/components/ExperimentLoopDiagram";
import { CASE_STUDIES } from "@/content/work";

const study = CASE_STUDIES["vbrl-growth-experimentation-system"];

export const metadata: Metadata = {
  title: `${study.title} — ${study.company} | Mitchell Bassett`,
  description: study.positioning,
};

export default function VBRLGrowthExperimentationPage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudyLayout
          study={study}
          diagram={<ExperimentLoopDiagram />}
        />
      </main>
      <Footer />
    </>
  );
}
