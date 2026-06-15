import { notFound } from "next/navigation";
import { Card } from "@/components/common/Card";
import { MediaPlaceholder, PageHero, SectionList, TagList } from "@/components/common/PageBlocks";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SignatureUptimeStrip } from "@/components/sections/SignatureUptimeSection";
import { getCertifications, getIndustries, getResourcesContent, getSignatureUptimeSection, getSolutionBySlug, getSolutions } from "@/lib/content";
import Link from "next/link";
import { corrosionProtectionPage } from "@/data/corrosionContent";

function itemSlug(item) {
  if (!item) return "";
  if (typeof item === "string") return item;
  if (typeof item.slug === "string") return item.slug;
  return item.slug?.current || "";
}

export const revalidate = 60;

export async function generateStaticParams() {
  const solutions = await getSolutions();
  return solutions.filter((item) => item.slug !== "wear-part-solutions").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getSolutionBySlug(slug);
  if (slug === "corrosion-protection") {
    return {
      title: corrosionProtectionPage.metaTitle,
      description: corrosionProtectionPage.metaDescription
    };
  }
  return {
    title: page ? `${page.navTitle || page.title} | Nigerian Foundries Group` : "Solution | Nigerian Foundries Group",
    description: page?.summary
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const page = await getSolutionBySlug(slug);
  if (!page) notFound();

  const [industries, certifications, resources, signatureUptimeSection] = await Promise.all([
    getIndustries(),
    getCertifications(),
    getResourcesContent(),
    getSignatureUptimeSection()
  ]);

  const relatedIndustries = (page.relatedIndustries || [])
    .map((industry) => {
      const slug = itemSlug(industry);
      return industries.find((item) => item.slug === slug) || (typeof industry === "object" ? industry : null);
    })
    .filter(Boolean);

  if (slug === "corrosion-protection") {
    return (
      <main>
        <PageHero
          eyebrow={corrosionProtectionPage.hero.eyebrow}
          title={corrosionProtectionPage.hero.title}
          body={corrosionProtectionPage.hero.body}
          primaryCta={corrosionProtectionPage.hero.primaryCta}
          secondaryCta={corrosionProtectionPage.hero.secondaryCta}
          chips={corrosionProtectionPage.hero.chips}
          theme="marine"
          media={page.media}
        />

        <section className="section section-off" id={corrosionProtectionPage.video.anchorId}>
          <div className="container">
            <SectionHeader
              align="left"
              eyebrow={corrosionProtectionPage.video.title}
              title={corrosionProtectionPage.video.headline}
              body={corrosionProtectionPage.video.body}
            />
            <div className="split">
              <div className="content-block">
                <p className="eyebrow">Video</p>
                <h2>{corrosionProtectionPage.video.videoLabel}</h2>
                <p>{corrosionProtectionPage.video.placeholderNote}</p>
                <div className="hero-actions">
                  <Button href={corrosionProtectionPage.video.primaryCta.href}>{corrosionProtectionPage.video.primaryCta.label}</Button>
                  <Button href={corrosionProtectionPage.video.secondaryCta.href} variant="ghost">
                    {corrosionProtectionPage.video.secondaryCta.label}
                  </Button>
                </div>
              </div>
              <MediaPlaceholder
                label={corrosionProtectionPage.video.videoLabel}
                alt={corrosionProtectionPage.video.videoLabel}
                theme="marine"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              align="left"
              eyebrow="Proven offshore project experience"
              title="Metec West Africa has supplied sacrificial anodes and cathodic protection solutions for major offshore operators, contractors and project assets."
              body="Use text proof unless approved project images or logos are already available."
            />
            <div className="grid grid-3">
              {corrosionProtectionPage.projects.map((project) => (
                <Card title={project.title} body={project.body} icon={project.icon} key={project.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-off">
          <div className="container">
            <SectionHeader
              align="left"
              eyebrow="Quality assurance"
              title="Why Anode Quality Matters"
              body="Sacrificial anodes must perform as designed in harsh offshore and marine environments. Alloy chemistry, casting integrity, current output, testing, inspection and documentation determine whether the anode will protect the asset through its required service life."
            />
            <div className="grid grid-3">
              {corrosionProtectionPage.qualityCards.map((item) => (
                <Card title={item.title} body={item.body} icon={item.icon} key={item.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container detail-grid">
            <div className="detail-main">
              <section className="content-block">
                <p className="eyebrow">Customer problem</p>
                <h2>What clients usually need help with</h2>
                <TagList items={page.customerProblems} />
              </section>

              <section className="content-block">
                <p className="eyebrow">NFG solution</p>
                <h2>A practical route, not a generic promise</h2>
                <p>{page.summary}</p>
                <TagList items={page.technologies} />
              </section>

              <SectionList title="Applications" items={page.applications} />
              <SectionList title="Process" items={page.processSteps} />

              <section className="content-block">
                <h2>Materials / Technologies</h2>
                <TagList items={[...page.materials, ...page.technologies]} />
              </section>

              <section className="content-block">
                <h2>Related Industries</h2>
                <div className="grid grid-3">
                  {relatedIndustries.map((industry) => (
                    <Card title={industry.title} body={industry.pain} icon={industry.icon} key={industry.slug}>
                      <Link className="text-link" href={`/industries/${industry.slug}`}>View industry</Link>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <aside className="detail-aside">
              <Card title="Send this kind of requirement" body="Photos, drawings, failed samples, operating conditions and urgency are enough to start the technical conversation." />
              <Card title="Proof records" body="Certificates and recognitions are CMS-managed and marked pending until verified.">
                {certifications.slice(0, 4).map((item) => (
                  <p key={item.title}><strong>{item.title}:</strong> {item.verificationStatus}</p>
                ))}
              </Card>
              <Card title="Related case studies" body="Confidential summaries are shown without client names until approved.">
                {resources.caseStudies.slice(0, 3).map((item) => (
                  <Link className="text-link" href="/resources/case-studies" key={item.slug}>{item.title}</Link>
                ))}
              </Card>
            </aside>
          </div>
        </section>

        {page.showSignatureUptimeStrip === false ? null : <SignatureUptimeStrip section={signatureUptimeSection} />}
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="Solution"
        title={page.title}
        body={page.hero || page.summary}
        primaryCta={page.cta}
        secondaryCta={{ label: "Upload Drawing / Photo", href: "/rfq" }}
        theme={page.slug.includes("corrosion") ? "marine" : page.slug.includes("reverse") ? "scan" : page.slug.includes("wear") ? "wear" : "foundry"}
        media={page.media}
      />
      {page.showSignatureUptimeStrip === false ? null : <SignatureUptimeStrip section={signatureUptimeSection} />}

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-main">
            <section className="content-block">
              <p className="eyebrow">Customer problem</p>
              <h2>What clients usually need help with</h2>
              <TagList items={page.customerProblems} />
            </section>

            <section className="content-block">
              <p className="eyebrow">NFG solution</p>
              <h2>A practical route, not a generic promise</h2>
              <p>{page.summary}</p>
              <TagList items={page.technologies} />
            </section>

            <SectionList title="Applications" items={page.applications} />
            <SectionList title="Process" items={page.processSteps} />

            <section className="content-block">
              <h2>Materials / Technologies</h2>
              <TagList items={[...page.materials, ...page.technologies]} />
            </section>

            <section className="content-block">
              <h2>Related Industries</h2>
              <div className="grid grid-3">
                {relatedIndustries.map((industry) => (
                  <Card title={industry.title} body={industry.pain} icon={industry.icon} key={industry.slug}>
                    <Link className="text-link" href={`/industries/${industry.slug}`}>View industry</Link>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <Card title="Send this kind of requirement" body="Photos, drawings, failed samples, operating conditions and urgency are enough to start the technical conversation." />
            <Card title="Proof records" body="Certificates and recognitions are CMS-managed and marked pending until verified.">
              {certifications.slice(0, 4).map((item) => (
                <p key={item.title}><strong>{item.title}:</strong> {item.verificationStatus}</p>
              ))}
            </Card>
            <Card title="Related case studies" body="Confidential summaries are shown without client names until approved.">
              {resources.caseStudies.slice(0, 3).map((item) => (
                <Link className="text-link" href="/resources/case-studies" key={item.slug}>{item.title}</Link>
              ))}
            </Card>
          </aside>
        </div>
      </section>
    </main>
  );
}
