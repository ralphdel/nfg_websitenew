import Link from "next/link";
import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { aboutPages } from "@/data/siteContent";

export const metadata = {
  title: "About | Nigerian Foundries Group",
  description: "NFG story, leadership, transformation journey, facilities and careers."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About NFG"
        title="From foundry roots to integrated industrial manufacturing."
        body="Founded in 1969, Nigerian Foundries Group has evolved into a second-generation industrial group supporting castings, machining, fabrication, corrosion protection, reverse engineering, 3D printing and digital transformation."
        primaryCta={{ label: "Our Story", href: "/about/story" }}
        secondaryCta={{ label: "Meet Leadership", href: "/about/leadership" }}
        theme="foundry"
      />
      <section className="section">
        <div className="container grid grid-4">
          {aboutPages.map((page) => (
            <Card title={page.title} body={page.summary} key={page.slug}>
              <Link className="text-link" href={`/about/${page.slug}`}>View page</Link>
            </Card>
          ))}
          <Card title="Leadership" body="Management profiles, technical leadership and approved bios are editable through Sanity.">
            <Link className="text-link" href="/about/leadership">View leadership</Link>
          </Card>
        </div>
      </section>
    </main>
  );
}
