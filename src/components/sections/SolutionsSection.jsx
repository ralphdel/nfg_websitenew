import Link from "next/link";
import { solutions } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function SolutionsSection({ solutions: solutionsProp = solutions }) {
  return (
    <section className="section section-off" id="solutions">
      <div className="container">
        <SectionHeader
          eyebrow="Solutions"
          title="Multiple manufacturing routes, one practical starting point."
          body="Send the broken part, drawing, photo or problem. NFG helps identify the part, understand the failure condition and select the route that fits the application."
        />
        <div className="grid grid-3">
          {solutionsProp.map((solution, index) => (
            <Card
              title={solution.navTitle || solution.title}
              body={solution.summary}
              icon={solution.icon}
              key={solution.slug || solution._id || `${solution.title || "solution"}-${index}`}
            >
              <div className="tag-list">
                {(solution.technologies || []).slice(0, 3).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Link className="text-link" href={`/solutions/${solution.slug}`}>
                View solution
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
