import Link from "next/link";
import { industries } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <SectionHeader
          eyebrow="Industries we serve"
          title="Industrial sectors where local response matters."
          body="Each sector has different operating pressure. NFG starts with the failure mode, material requirement and service condition before recommending a route."
        />
        <div className="grid grid-3">
          {industries.map((industry) => (
            <Card title={industry.title} icon={industry.icon} key={industry.slug}>
              <p><strong>Pain:</strong> {industry.pain}</p>
              <p><strong>Solution:</strong> {industry.solution}</p>
              <Link className="text-link" href={`/industries/${industry.slug}`}>View sector focus</Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
