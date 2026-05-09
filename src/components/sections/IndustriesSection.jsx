import Link from "next/link";
import { industries } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function IndustriesSection({ industries: industriesProp = industries }) {
  return (
    <section className="section" id="industries">
      <div className="container">
        <SectionHeader
          eyebrow="Industries"
          title="Built for the sectors where downtime is expensive."
          body="Plant managers, maintenance teams, technical directors and procurement teams need credible local support. Each sector has different operating pressure, so NFG starts with the application and failure condition."
        />
        <div className="grid grid-3">
          {industriesProp.map((industry) => (
            <Card title={industry.title} icon={industry.icon} key={industry.slug}>
              <p><strong>Pain:</strong> {industry.pain}</p>
              <p><strong>NFG fit:</strong> {industry.solution}</p>
              <div className="tag-list">
                {(industry.commonParts || []).slice(0, 3).map((part) => (
                  <span key={part}>{part}</span>
                ))}
              </div>
              <Link className="text-link" href={`/industries/${industry.slug}`}>View industry page</Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
