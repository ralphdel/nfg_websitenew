import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/common/Card";
import { PageHero, SectionList, TagList } from "@/components/common/PageBlocks";
import { getIndustries, getIndustryBySlug, getResourcesContent, getSolutions } from "@/lib/content";

function itemSlug(item) {
  if (!item) return "";
  if (typeof item === "string") return item;
  if (typeof item.slug === "string") return item.slug;
  return item.slug?.current || "";
}

export const revalidate = 60;

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getIndustryBySlug(slug);
  return {
    title: page ? `${page.title} | Nigerian Foundries Group` : "Industry | Nigerian Foundries Group",
    description: page ? `${page.pain} ${page.solution}` : undefined
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const page = await getIndustryBySlug(slug);
  if (!page) notFound();

  const [solutions, resources] = await Promise.all([getSolutions(), getResourcesContent()]);

  const relatedSolutions = (page.relatedSolutions || [])
    .map((solution) => {
      const slug = itemSlug(solution);
      return solutions.find((item) => item.slug === slug) || (typeof solution === "object" ? solution : null);
    })
    .filter(Boolean);

  return (
    <main>
      <PageHero
        eyebrow="Industry"
        title={page.title}
        body={page.pain}
        primaryCta={page.cta}
        secondaryCta={{ label: "Explore NFG Solutions", href: "/solutions" }}
        theme={page.slug.includes("oil") || page.slug.includes("marine") ? "marine" : page.slug.includes("power") ? "digital" : "wear"}
        media={page.media}
      />

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <section className="content-block">
              <p className="eyebrow">NFG solution fit</p>
              <h2>How NFG supports this sector</h2>
              <p>{page.solution}</p>
              <TagList items={page.routes || []} />
            </section>

            <SectionList title="Common parts / applications" items={page.commonParts} />
            <SectionList title="Relevant materials" items={page.materials} />

            <section className="content-block">
              <h2>Related solutions</h2>
              <div className="grid grid-3">
                {relatedSolutions.map((solution) => (
                  <Card title={solution.navTitle || solution.title} body={solution.summary} icon={solution.icon} key={solution.slug}>
                    <Link className="text-link" href={`/solutions/${solution.slug}`}>View solution</Link>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <Card title="What to send" body="Send a sample, photo, drawing, material if known, quantity, urgency and operating environment." />
            <Card title="Case studies" body="Relevant summaries are kept confidential unless client approval is available.">
              {resources.caseStudies.slice(0, 4).map((item) => (
                <Link className="text-link" href="/resources/case-studies" key={item.slug}>{item.title}</Link>
              ))}
            </Card>
          </aside>
        </div>
      </section>
    </main>
  );
}
