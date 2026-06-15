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

export function DrainageMunicipalUpgradeSections({ page }) {
  if (!page) return null;

  return (
    <>
      <section className="section section-off">
        <div className="container">
          <SectionHeader align="left" title={page.valueSection.title} body={page.valueSection.body} />
          <div className="grid grid-3">
            {page.valueSection.cards.map((card) => (
              <Card title={card.title} body={card.body} key={card.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader align="left" title={page.solutionsSection.title} body={page.solutionsSection.body} />
          <div className="content-block">
            <div className="list-grid">
              {page.solutionsSection.items.map((item) => (
                <article key={item}>
                  <span />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-off">
        <div className="container">
          <SectionHeader align="left" title={page.securitySection.title} body={page.securitySection.body} />
          <div className="wear-route-table-wrap">
            <table className="wear-route-table">
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>NFG design response</th>
                </tr>
              </thead>
              <tbody>
                {page.securitySection.rows.map((row) => (
                  <tr key={row.requirement}>
                    <td>{row.requirement}</td>
                    <td>{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="content-block" style={{ marginTop: "24px" }}>
            <h2>{page.securitySection.callout}</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <p className="eyebrow">Engineering note</p>
            <h2>{page.warningSection.title}</h2>
            <p>{page.warningSection.body}</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-grid">
          <div>
            <p className="eyebrow">Drainage review</p>
            <h2>{page.finalCta.title}</h2>
            <p>{page.finalCta.body}</p>
            <div className="cta-actions">
              <Button href={page.finalCta.primaryCta.href}>{page.finalCta.primaryCta.label}</Button>
              <Button href={page.finalCta.secondaryCta.href} variant="ghost">
                {page.finalCta.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
