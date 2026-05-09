import Link from "next/link";
import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { getResourcesContent } from "@/lib/content";

export const metadata = {
  title: "Resources | Nigerian Foundries Group",
  description: "NFG resources including case studies, insights, downloads and FAQs."
};

export const revalidate = 60;

export default async function ResourcesPage() {
  const { resourcePages } = await getResourcesContent();

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Practical information for technical and procurement teams."
        body="Use resources to review case studies, read industrial insights, access downloads and answer common RFQ questions."
        primaryCta={{ label: "Send RFQ", href: "/rfq" }}
        secondaryCta={{ label: "Downloads", href: "/resources/downloads" }}
        theme="digital"
      />
      <section className="section">
        <div className="container grid grid-4">
          {resourcePages.map((page) => (
            <Card title={page.title} body={page.summary} icon={page.icon} key={page.slug}>
              <Link className="text-link" href={`/resources/${page.slug}`}>Open resource</Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
