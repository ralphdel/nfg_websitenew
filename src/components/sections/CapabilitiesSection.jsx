import Link from "next/link";
import { capabilities } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function CapabilitiesSection({ capabilities: capabilitiesProp = capabilities }) {
  return (
    <section className="section section-navy" id="capabilities">
      <div className="container">
        <SectionHeader
          inverse
          eyebrow="Capabilities"
          title="Foundry experience connected to modern industrial support."
          body="NFG combines ferrous and non-ferrous foundry work, machining, fabrication, laser scanning, material analysis, additive manufacturing and digital production control."
        />
        <div className="grid grid-3">
          {capabilitiesProp.map((capability) => (
            <Card title={capability.title} body={capability.body} icon={capability.icon} key={capability.slug}>
              <Link className="text-link light" href={`/capabilities/${capability.slug}`}>Explore capability</Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
