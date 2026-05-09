import Link from "next/link";
import { Card } from "@/components/common/Card";
import { PageHero, TagList } from "@/components/common/PageBlocks";
import { getCapabilities } from "@/lib/content";

export const metadata = {
  title: "Capabilities | Nigerian Foundries Group",
  description: "NFG capabilities: ferrous foundry, non-ferrous foundry, machining, fabrication, laser scanning, material analysis, additive manufacturing and Vezapp digital production control."
};

export const revalidate = 60;

export default async function CapabilitiesPage() {
  const capabilities = await getCapabilities();

  return (
    <main>
      <PageHero
        eyebrow="Capabilities"
        title="Manufacturing routes that can work together."
        body="The right solution may be a casting, machined part, fabricated assembly, anode, wear plate, digital drawing, prototype or combined route."
        primaryCta={{ label: "Send Part / Drawing", href: "/rfq" }}
        secondaryCta={{ label: "View Solutions", href: "/solutions" }}
        theme="digital"
      />
      <section className="section">
        <div className="container grid grid-3">
          {capabilities.map((capability) => (
            <Card title={capability.title} body={capability.body} icon={capability.icon} key={capability.slug}>
              <TagList items={(capability.capabilities || []).slice(0, 4)} />
              <Link className="text-link" href={`/capabilities/${capability.slug}`}>View capability</Link>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
