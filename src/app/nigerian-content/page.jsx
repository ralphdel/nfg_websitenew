import Link from "next/link";
import { Card } from "@/components/common/Card";
import { PageHero, TagList } from "@/components/common/PageBlocks";
import { getHomepageContent } from "@/lib/content";

export const metadata = {
  title: "Nigerian Content | Nigerian Foundries Group",
  description: "NFG Nigerian Content capability across local manufacturing, Metec West Africa, Imenco, Hardox, Enduraclad, Shell-supported additive manufacturing, universities and TVET."
};

export const revalidate = 60;

export default async function NigerianContentPage() {
  const { nigerianContent, skillsEducation } = await getHomepageContent();

  return (
    <main>
      <PageHero
        eyebrow="Nigerian Content"
        title="Nigerian Content Is Not a Slogan. It Is Industrial Capacity."
        body="NFG supports local manufacturing for Nigeria's strategic industries through foundry work, wear solutions, sacrificial anodes, machining, fabrication, reverse engineering and advanced manufacturing development."
        primaryCta={{ label: "Discuss Local Manufacturing", href: "/rfq" }}
        secondaryCta={{ label: "View Certifications", href: "/nigerian-content/certifications-awards" }}
        theme="foundry"
      />
      <section className="section">
        <div className="container grid grid-4">
          {nigerianContent.slice(0, 1).map((item) => (
            <Card title={item.title} body={item.body} icon={item.icon} key={item.title} />
          ))}
        </div>
        <div className="container content-block nigerian-skills-block">
          <p className="eyebrow">People, skills and knowledge transfer</p>
          <h2>Nigerian Content Includes Skills, Not Just Products</h2>
          <p>
            Local manufacturing cannot survive without local skills. NFG's Nigerian Content journey
            includes the development of people: students, engineers, technicians, quality
            professionals and future manufacturing leaders.
          </p>
          <p>
            Through university partnerships, industrial training, the Nigerian Foundries Educational
            Foundation and structured technical skills development, NFG is helping strengthen the
            human capacity behind Nigeria's industrial future.
          </p>
          <div className="grid grid-3 nigerian-skills-grid">
            {skillsEducation.slice(0, 4).map((item) => (
              <Card title={item.title} body={item.body || item.shortDescription} icon={item.icon} key={item.title}>
                <TagList items={(item.points || []).slice(0, 2)} />
                <Link className="text-link" href={item.href}>{item.cta}</Link>
              </Card>
            ))}
          </div>
          <div className="cta-actions cta-actions-dark">
            <Link className="btn btn-primary" href="/about/skills-education-foundation">View Skills & Education</Link>
            <Link className="btn btn-secondary" href="/contact">Partner With NFG</Link>
            <Link className="btn btn-secondary" href="/about/industrial-training">Request Industrial Training Information</Link>
          </div>
        </div>
        <div className="container grid grid-4 nigerian-content-rest">
          {nigerianContent.slice(1).map((item) => (
            <Card title={item.title} body={item.body} icon={item.icon} key={item.title} />
          ))}
        </div>
        <div className="container linked-band">
          <Link className="text-link" href="/nigerian-content/metec-imenco">Metec West Africa + Imenco</Link>
          <Link className="text-link" href="/nigerian-content/certifications-awards">Certifications & Awards</Link>
        </div>
      </section>
    </main>
  );
}
