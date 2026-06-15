import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TagList } from "@/components/common/PageBlocks";

export function ReverseEngineeringProcessSection({ section }) {
  if (!section) return null;

  return (
    <section className="section section-off">
      <div className="container">
        <SectionHeader align="left" title={section.title} body={section.intro} />
        <div className="grid grid-3 process-grid">
          {section.steps.map((step, index) => (
            <Card title={step.title} body={`What NFG does: ${step.what}`} key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <p>
                <strong>Why it matters:</strong> {step.why}
              </p>
            </Card>
          ))}
        </div>
        <div className="content-block" style={{ marginTop: "24px" }}>
          <h2>{section.callout}</h2>
          <TagList items={section.routeTags} />
          <div className="hero-actions">
            <Button href={section.ctaPrimary.href}>{section.ctaPrimary.label}</Button>
            <Button href={section.ctaSecondary.href} variant="ghost">
              {section.ctaSecondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AdditiveManufacturingFlowSection({ section }) {
  if (!section) return null;

  return (
    <section className="section section-off">
      <div className="container">
        <SectionHeader align="left" title={section.title} body={section.intro} />
        <div className="wear-route-table-wrap">
          <table className="wear-route-table additive-flow-table">
            <thead>
              <tr>
                <th>NFG foundation</th>
                <th>Digital manufacturing future</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.foundation}>
                  <td>{row.foundation}</td>
                  <td>{row.future}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="content-block" style={{ marginTop: "24px" }}>
          <h2>{section.callout}</h2>
          <div className="hero-actions">
            <Button href={section.ctaPrimary.href}>{section.ctaPrimary.label}</Button>
            <Button href={section.ctaSecondary.href} variant="ghost">
              {section.ctaSecondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
