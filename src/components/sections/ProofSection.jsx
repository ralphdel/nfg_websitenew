import Link from "next/link";
import { caseStudies } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ProofSection({ caseStudies: caseStudiesProp = caseStudies }) {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <SectionHeader
          eyebrow="Selected case studies"
          title="Industrial examples without inflated claims."
          body="NFG should earn trust through process clarity. These examples avoid fake metrics and confidential client names unless approved."
        />
        <div className="grid grid-2">
          {caseStudiesProp.filter((item) => item.featured !== false).map((item, index) => (
            <Card
              title={item.title}
              label={item.label}
              key={item.slug || item._id || `${item.title || "case-study"}-${index}`}
            >
              <p><strong>Problem:</strong> {item.problem}</p>
              <p><strong>NFG approach:</strong> {item.nfgApproach}</p>
              <p><strong>Result:</strong> {item.result}</p>
              <Link className="text-link" href="/resources/case-studies">Read case studies</Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
