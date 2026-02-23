import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { CASE_STUDIES } from "@/content/work";

const study = CASE_STUDIES["deep-tech-monetization-node-sale-gtm"];

export const metadata: Metadata = {
  title: `${study.title} — ${study.company} | Mitchell Bassett`,
  description: study.positioning,
};

export default function DeepTechMonetizationNodeSaleGTMPage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudyLayout study={study} />
      </main>
      <Footer />
    </>
  );
}
