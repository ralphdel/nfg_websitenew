import Link from "next/link";
import { capabilities } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function CapabilitiesSection() {
  return (
    <section className="section section-navy" id="capabilities">
      <div className="container">
        <SectionHeader
          inverse
          eyebrow="What we make"
          title="Integrated manufacturing capability under one group."
          body="From one-off emergency parts to repeat industrial supply, NFG combines foundry experience with reverse engineering, fabrication, wear solutions and additive manufacturing."
        />
        <div className="grid grid-3">
          {capabilities.map((capability) => (
            <Card title={capability.title} body={capability.body} icon={capability.icon} key={capability.slug}>
              <Link className="text-link light" href={`/capabilities/${capability.slug}`}>Explore capability</Link>
            </Card>
          ))}
        </div>
        <div className="wear-note">
          <div>
            <h3>Hardox Wearparts</h3>
            <p>For impact, abrasion and structural wear. We fabricate and support Hardox wear solutions for dump bodies, chutes, liners, hoppers and heavy-duty wear structures.</p>
          </div>
          <div>
            <h3>Enduraclad / CCO Solutions</h3>
            <p>For severe sliding abrasion and cement/mining wear. We provide chromium-carbide overlay solutions for VRM tables, liners, chutes and high-wear surfaces.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
