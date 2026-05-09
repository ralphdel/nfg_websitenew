import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/common/Card";
import { PageHero, SectionList, TagList } from "@/components/common/PageBlocks";
import { getCapabilities, getCapabilityBySlug, getSolutions } from "@/lib/content";

function itemSlug(item) {
  if (!item) return "";
  if (typeof item === "string") return item;
  if (typeof item.slug === "string") return item.slug;
  return item.slug?.current || "";
}

export const revalidate = 60;

export async function generateStaticParams() {
  const capabilities = await getCapabilities();
  return capabilities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getCapabilityBySlug(slug);
  return {
    title: page ? `${page.title} | Nigerian Foundries Group` : "Capability | Nigerian Foundries Group",
    description: page?.body
  };
}

export default async function CapabilityPage({ params }) {
  const { slug } = await params;
  const page = await getCapabilityBySlug(slug);
  if (!page) notFound();

  const solutions = await getSolutions();
  const relatedSolutions = (page.relatedSolutions || [])
    .map((solution) => {
      const slug = itemSlug(solution);
      return solutions.find((item) => item.slug === slug) || (typeof solution === "object" ? solution : null);
    })
    .filter(Boolean);

  const inferredSolutions = solutions.filter((solution) =>
    (solution.technologies || []).some((technology) => page.body.toLowerCase().includes(technology.split(" ")[0].toLowerCase()))
  ).slice(0, 3);

  return (
    <main>
      <PageHero
        eyebrow="Capability"
        title={page.title}
        body={page.body}
        primaryCta={{ label: "Request Technical Review", href: "/rfq" }}
        secondaryCta={{ label: "Contact NFG", href: "/contact" }}
        theme={page.slug.includes("metec") ? "marine" : page.slug.includes("digital") || page.slug.includes("additive") ? "digital" : "foundry"}
        media={page.media}
      />
      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <SectionList title="What this capability covers" items={page.capabilities} />
            <SectionList title="Processes" items={page.processes} />
            <section className="content-block">
              <h2>Materials</h2>
              <TagList items={page.materials} />
            </section>
            <section className="content-block">
              <h2>Related solutions</h2>
              <div className="grid grid-3">
                {(relatedSolutions.length ? relatedSolutions : inferredSolutions.length ? inferredSolutions : solutions.slice(0, 3)).map((solution) => (
                  <Card title={solution.navTitle || solution.title} body={solution.summary} icon={solution.icon} key={solution.slug}>
                    <Link className="text-link" href={`/solutions/${solution.slug}`}>View solution</Link>
                  </Card>
                ))}
              </div>
            </section>
          </div>
          <aside className="detail-aside">
            <Card
              title="CMS ready"
              body="This capability template supports hero media, equipment lists, process notes, materials, galleries, related solutions and CTA fields through Sanity schemas."
            />
            <Card
              title="RFQ guidance"
              body="Send the broken part, drawing, photo, operating condition, quantity and urgency so the team can select the route."
            />
          </aside>
        </div>
      </section>
    </main>
  );
}
