import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import SelectedWork from "@/components/SelectedWork";
import AutomationsSection from "@/components/AutomationsSection";
import HowIThink from "@/components/HowIThink";
import StackGrid from "@/components/StackGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <SelectedWork />
        <AutomationsSection />
        <HowIThink />
        <StackGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
