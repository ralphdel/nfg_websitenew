import { processSteps } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function HowWeWork() {
  return (
    <section className="section section-off" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="How we work"
          title="We engineer before we manufacture."
          body="The route depends on the part, operating environment, material and urgency. The process stays disciplined."
        />
        <div className="grid grid-4 process-grid">
          {processSteps.map((step, index) => (
            <Card title={step.title} body={step.body} icon={step.icon} key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
