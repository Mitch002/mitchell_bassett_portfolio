import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import AutomationPipelineDiagram from "@/components/AutomationPipelineDiagram";
import { CASE_STUDIES } from "@/content/work";

const study = CASE_STUDIES["vbrl-ai-workflow-ops-system"];

export const metadata: Metadata = {
  title: `${study.title} — ${study.company} | Mitchell Bassett`,
  description: study.positioning,
};

export default function VBRLAIWorkflowOpsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudyLayout
          study={study}
          diagram={<AutomationPipelineDiagram />}
        />
      </main>
      <Footer />
    </>
  );
}
