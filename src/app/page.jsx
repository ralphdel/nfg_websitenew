import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { LeadershipSnapshot } from "@/components/sections/LeadershipSnapshot";
import { NigerianContent } from "@/components/sections/NigerianContent";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { VezappSection } from "@/components/sections/VezappSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <IndustriesSection />
      <CapabilitiesSection />
      <HowWeWork />
      <ProofSection />
      <VezappSection />
      <NigerianContent />
      <LeadershipSnapshot />
      <FinalCTA />
    </main>
  );
}
