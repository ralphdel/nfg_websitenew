import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { LeadershipSnapshot } from "@/components/sections/LeadershipSnapshot";
import { NigerianContent } from "@/components/sections/NigerianContent";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ReverseEngineeringHighlight } from "@/components/sections/ReverseEngineeringHighlight";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { SkillsEducationSection } from "@/components/sections/SkillsEducationSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { VezappSection } from "@/components/sections/VezappSection";
import { WearComparison } from "@/components/sections/WearComparison";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { getHomepageContent } from "@/lib/content";

export const revalidate = 60;

export default async function HomePage() {
  const content = await getHomepageContent();

  return (
    <main>
      <Hero slides={content.heroSlides} />
      <TrustBar badges={content.trustBadges} />
      <ProblemSection problems={content.problems} />
      <HowWeWork steps={content.methodSteps} />
      <SolutionsSection solutions={content.solutions} />
      <IndustriesSection industries={content.industries} />
      <CapabilitiesSection capabilities={content.capabilities} />
      <WearComparison items={content.wearComparison} />
      <ReverseEngineeringHighlight highlights={content.reverseEngineeringHighlights} />
      <NigerianContent items={content.nigerianContent} />
      <SkillsEducationSection items={content.skillsEducation} />
      <VezappSection items={content.vezapp} />
      <CertificationsSection items={content.certifications} />
      <ProofSection caseStudies={content.caseStudies} />
      <LeadershipSnapshot people={content.leadership} />
      <FinalCTA siteSettings={content.siteSettings} />
    </main>
  );
}
