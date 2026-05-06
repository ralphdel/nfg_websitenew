import { caseStudies } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ProofSection() {
  return (
    <section className="section" id="proof">
      <div className="container">
        <SectionHeader
          eyebrow="Proof and selected work"
          title="Practical industrial examples, without inflated claims."
          body="These examples are framed conservatively where numbers are not yet verified for publication."
        />
        <div className="grid grid-2">
          {caseStudies.map((item) => (
            <Card title={item.title} body={item.body} label={item.label} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
