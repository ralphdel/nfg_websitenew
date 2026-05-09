import { Anchor, ShieldCheck } from "lucide-react";
import { Card } from "@/components/common/Card";
import { PageHero, SectionList } from "@/components/common/PageBlocks";

export const metadata = {
  title: "Metec West Africa + Imenco | Nigerian Foundries Group",
  description: "Nigerian manufacturing and international offshore corrosion-protection technology through Metec West Africa sacrificial anodes and Imenco clamp integration."
};

export default function MetecImencoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Metec West Africa + Imenco"
        title="Nigerian manufacturing connected to offshore corrosion-protection technology."
        body="Metec West Africa manufactures sacrificial anodes locally, while Imenco clamping devices can be attached to NFG anodes for offshore retrofit and corrosion-protection applications."
        primaryCta={{ label: "Contact Metec", href: "/rfq?type=corrosion" }}
        secondaryCta={{ label: "Corrosion Protection", href: "/solutions/corrosion-protection" }}
        theme="marine"
      />
      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <section className="content-block">
              <h2>The problem</h2>
              <p>Offshore corrosion and retrofit difficulty can force operators into long external supply chains. NFG positions local manufacturing as a practical route for Nigerian Content and local accountability.</p>
            </section>
            <div className="grid grid-2">
              <Card title="Nigerian solution" body="Metec West Africa manufactures sacrificial anodes locally for offshore, marine and industrial corrosion-protection applications." icon={Anchor} />
              <Card title="International technology" body="Imenco clamping devices can be attached to NFG anodes for offshore retrofit and corrosion-protection applications." icon={ShieldCheck} />
            </div>
            <SectionList
              title="Applications"
              items={["Offshore structures", "Marine vessels", "Ports", "Jetties", "Subsea structures", "Windmills", "Coastal infrastructure", "Power assets"]}
            />
          </div>
          <aside className="detail-aside">
            <Card title="Nigerian Content relevance" body="This combines Nigerian manufacturing capacity with international offshore corrosion-protection technology. Partner and claim details remain CMS-managed for approval." />
            <Card title="Next step" body="Send asset type, exposure condition, project location, drawings/photos and retrofit requirement for review." />
          </aside>
        </div>
      </section>
    </main>
  );
}
