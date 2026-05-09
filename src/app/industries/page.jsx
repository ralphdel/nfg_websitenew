import Link from "next/link";
import { Card } from "@/components/common/Card";
import { PageHero, TagList } from "@/components/common/PageBlocks";
import { getIndustries } from "@/lib/content";

export const metadata = {
  title: "Industries | Nigerian Foundries Group",
  description: "Industrial sectors supported by NFG: cement, mining, quarries, dredging, oil and gas, marine, power, infrastructure and manufacturing."
};

export const revalidate = 60;

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Local manufacturing support for heavy industrial operators."
        body="NFG helps plant, maintenance, technical and procurement teams address failed, worn, corroded or unavailable parts across Nigeria and West Africa."
        primaryCta={{ label: "Send Part / Drawing", href: "/rfq" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
        theme="wear"
      />
      <section className="section">
        <div className="container grid grid-3">
          {industries.map((industry) => (
            <Card title={industry.title} icon={industry.icon} key={industry.slug}>
              <p><strong>Pain:</strong> {industry.pain}</p>
              <p><strong>NFG solution:</strong> {industry.solution}</p>
              <TagList items={(industry.routes || []).slice(0, 4)} />
              <Link className="text-link" href={`/industries/${industry.slug}`}>View industry</Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
