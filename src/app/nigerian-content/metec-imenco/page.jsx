import Link from "next/link";
import { Anchor, ShieldCheck } from "lucide-react";
import { Card } from "@/components/common/Card";
import { PageHero, SectionList, TagList } from "@/components/common/PageBlocks";
import { metecImencoPage } from "@/data/corrosionContent";

export const metadata = {
  title: metecImencoPage.metaTitle,
  description: metecImencoPage.metaDescription
};

export default function MetecImencoPage() {
  return (
    <main>
      <PageHero
        eyebrow={metecImencoPage.hero.eyebrow}
        title={metecImencoPage.hero.title}
        body={metecImencoPage.hero.body}
        primaryCta={metecImencoPage.hero.primaryCta}
        secondaryCta={metecImencoPage.hero.secondaryCta}
        chips={metecImencoPage.hero.chips}
        theme="marine"
      />
      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <section className="content-block">
              <p className="eyebrow">International technology + Nigerian-made anodes</p>
              <h2>Metec West Africa and Imenco Norway work together on retrofit CP pathways.</h2>
              <p>
                Through Metec West Africa's partnership with Imenco Norway, NFG connects Nigerian-made sacrificial anodes with retrofit clamp-on cathodic protection technology for offshore oil & gas assets, mooring systems, pipelines, tubulars and marine structures.
              </p>
            </section>
            <div className="grid grid-2">
              <Card title="Nigerian solution" body="Metec West Africa manufactures sacrificial anodes locally for offshore, marine and industrial corrosion-protection applications." icon={Anchor} />
              <Card title="International technology" body="Imenco clamping devices can be attached to NFG anodes for offshore retrofit and corrosion-protection applications." icon={ShieldCheck} />
            </div>
            <SectionList
              title="Applications"
              items={["Offshore structures", "Marine vessels", "Ports", "Jetties", "Subsea structures", "Windmills", "Coastal infrastructure", "Power assets"]}
            />
            <section className="content-block">
              <h2>Why anode quality matters</h2>
              <p>
                Sacrificial anodes must perform as designed in harsh offshore and marine environments. Alloy chemistry, casting integrity, current output, testing, inspection and documentation determine whether the anode will protect the asset through its required service life.
              </p>
              <TagList items={["Alloy chemistry", "Casting integrity", "Current output", "Testing and inspection", "Documentation", "Nigerian Content support"]} />
            </section>
            <section className="content-block">
              <h2>Video and retrofit reference</h2>
              <p>For the detailed retrofit CP technology explanation, use the corrosion protection page section.</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/solutions/corrosion-protection#imenco-retrofit-cp-technology">Open corrosion video section</Link>
                <Link className="btn btn-secondary" href="/rtq">Discuss Retrofit CP / Anode Requirements</Link>
              </div>
            </section>
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
