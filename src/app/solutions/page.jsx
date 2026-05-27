import { Card } from "@/components/common/Card";
import { PageHero, TagList } from "@/components/common/PageBlocks";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SolutionsSignatureUptimeSection } from "@/components/sections/SignatureUptimeSection";
import { getSolutionsPageContent } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "Solutions | Nigerian Foundries Group",
  description: "NFG solution routes for municipal castings, wear parts, corrosion protection, reverse engineering, machining, fabrication, assembly and 3D printing."
};

export const revalidate = 60;

export default async function SolutionsPage() {
  const page = await getSolutionsPageContent();
  const solutions = page.solutions;
  const routesBanner = page.signatureUptimeSection?.routesBanner;

  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.headline}
        body={page.body}
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
        theme="foundry"
      />
      <SolutionsSignatureUptimeSection section={page.signatureUptimeSection} />
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Technical solution routes"
            title={routesBanner?.headline || "Six Technical Routes. One NFG Working Model."}
            body={routesBanner?.body || "Whether your requirement is planned or urgent, NFG begins with the problem, then guides you to the right solution route."}
          />
          <div className="grid grid-3">
            {solutions.map((solution) => (
              <Card title={solution.title} body={solution.summary} icon={solution.icon} key={solution.slug}>
                <TagList items={solution.technologies.slice(0, 4)} />
                <Link className="text-link" href={`/solutions/${solution.slug}`}>View solution</Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
