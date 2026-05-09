import { processSteps } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function HowWeWork({ steps = processSteps }) {
  return (
    <section className="section section-off" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="NFG method"
          title="A Clear Path from Problem to Manufactured Part"
          body="The customer has the production problem. NFG acts as the guide with a practical route from part identification to local manufacturing and repeat support."
        />
        <div className="grid grid-5 process-grid">
          {steps.map((step, index) => (
            <Card title={step.title} body={step.body} icon={step.icon} key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
