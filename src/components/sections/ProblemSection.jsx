import Link from "next/link";
import { problemCards } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ProblemSection({ problems = problemCards }) {
  return (
    <section className="section section-dark" id="problem">
      <div className="container">
        <SectionHeader
          inverse
          eyebrow="The industrial problem"
          title="The part failed. The plant is waiting. Imports are too slow."
          body="In heavy industry, one failed part can stop a process. The problem is often bigger than the part itself: no drawing, unknown material, unavailable OEM, long import lead time, foreign exchange exposure, or repeated wear and corrosion."
        />
        <div className="grid grid-3">
          {problems.map((problem) => (
            <Card title={problem.title} body={problem.description} icon={problem.icon} key={problem.title}>
              <Link className="text-link light" href={problem.href}>
                Review solution
              </Link>
            </Card>
          ))}
        </div>
        <p className="section-afterword">
          NFG starts by understanding your process and pain point, then identifies the part,
          reverse-engineers it where required, selects the material and manufacturing route,
          and provides a practical local solution.
        </p>
      </div>
    </section>
  );
}
