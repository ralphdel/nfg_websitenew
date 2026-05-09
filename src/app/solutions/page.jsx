import { Card } from "@/components/common/Card";
import { PageHero, TagList } from "@/components/common/PageBlocks";
import { getSolutions } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "Solutions | Nigerian Foundries Group",
  description: "NFG solution routes for municipal castings, wear parts, corrosion protection, reverse engineering, machining, fabrication, assembly and 3D printing."
};

export const revalidate = 60;

export default async function SolutionsPage() {
  const solutions = await getSolutions();

  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Send the problem. NFG helps select the route."
        body="From broken parts and worn liners to corrosion protection and municipal castings, NFG starts by understanding the client problem before choosing the manufacturing route."
        primaryCta={{ label: "Send Part / Drawing", href: "/rfq" }}
        secondaryCta={{ label: "Contact Technical Sales", href: "/contact" }}
        theme="foundry"
      />
      <section className="section">
        <div className="container grid grid-3">
          {solutions.map((solution) => (
            <Card title={solution.title} body={solution.summary} icon={solution.icon} key={solution.slug}>
              <TagList items={solution.technologies.slice(0, 4)} />
              <Link className="text-link" href={`/solutions/${solution.slug}`}>View solution</Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
