import { problems } from "@/data/siteContent";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ProblemSection() {
  return (
    <section className="section section-dark" id="problem">
      <div className="container split">
        <SectionHeader
          align="left"
          inverse
          eyebrow="The problem we solve"
          title="When critical parts fail, waiting for imports is not a strategy."
          body="NFG helps industrial clients reduce downtime and import dependence by reverse-engineering, manufacturing and supporting critical parts locally. Bring us the broken part, the drawing, the photo, or the problem - our team will help turn it into a practical manufacturing solution."
        />
        <div className="problem-list">
          {problems.map((problem) => (
            <div className="problem-item" key={problem}>
              <span />
              {problem}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
