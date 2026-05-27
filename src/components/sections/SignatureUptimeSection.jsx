import Link from "next/link";
import { AlertTriangle, ArrowRight, CalendarDays, Clock3, ClipboardCheck, Factory, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { signatureUptimeSection as fallbackSignatureUptimeSection } from "@/data/siteContent";

function BulletList({ items = [], light = false }) {
  if (!items.length) return null;

  return (
    <ul className={`signature-bullets ${light ? "is-light" : ""}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SignatureSupportCard({ title, subtitle, body, bullets, cta, icon: Icon }) {
  return (
    <article className="signature-support-card">
      <div className="card-icon">
        <Icon size={24} aria-hidden="true" />
      </div>
      <p className="signature-card-subtitle">{subtitle}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <BulletList items={bullets} />
      {cta ? (
        <Link className="text-link" href={cta.href}>
          {cta.label}
        </Link>
      ) : null}
    </article>
  );
}

export function HomepageSignatureUptimeSection({ section = fallbackSignatureUptimeSection }) {
  if (section.displayOnHomepage === false) return null;

  const homepage = section.homepage || fallbackSignatureUptimeSection.homepage;
  const planned = homepage.plannedCard || fallbackSignatureUptimeSection.homepage.plannedCard;
  const emergency = homepage.emergencyCard || fallbackSignatureUptimeSection.homepage.emergencyCard;

  return (
    <section className="section signature-home" id={homepage.sectionId || "homepage-signature-uptime-solution"}>
      <div className="container">
        <SectionHeader
          align="left"
          eyebrow={homepage.eyebrow || section.eyebrow}
          title={homepage.headline}
          body={homepage.body}
        />
        <div className="signature-home-grid">
          <SignatureSupportCard
            title={planned.title}
            subtitle={planned.subtitle}
            body={planned.body}
            bullets={planned.bullets}
            cta={planned.cta}
            icon={CalendarDays}
          />
          <SignatureSupportCard
            title={emergency.title}
            subtitle={emergency.subtitle}
            body={emergency.body}
            bullets={emergency.bullets}
            cta={emergency.cta}
            icon={Clock3}
          />
        </div>
      </div>
    </section>
  );
}

export function SolutionsSignatureUptimeSection({ section = fallbackSignatureUptimeSection }) {
  if (section.displayOnSolutionsPage === false) return null;

  return (
    <section className="section section-off signature-full" id={section.anchorId || "signature-uptime-solution"}>
      <div className="container">
        <SectionHeader eyebrow={section.eyebrow} title={section.headline} body={section.introText} />

        <div className="signature-two-column">
          <article className="signature-panel">
            <div className="card-icon">
              <CalendarDays size={24} aria-hidden="true" />
            </div>
            <p className="signature-card-subtitle">1. {section.plannedSupportTitle}</p>
            <h3>{section.plannedSupportSubtitle}</h3>
            <p>{section.plannedSupportBody}</p>
            <BulletList items={section.plannedSupportBullets} />
            {section.plannedSupportCta ? (
              <Button href={section.plannedSupportCta.href} variant="primary">
                {section.plannedSupportCta.label}
              </Button>
            ) : null}
          </article>

          <article className="signature-panel">
            <div className="card-icon">
              <AlertTriangle size={24} aria-hidden="true" />
            </div>
            <p className="signature-card-subtitle">2. {section.emergencySupportTitle}</p>
            <h3>{section.emergencySupportSubtitle}</h3>
            <p>{section.emergencySupportBody}</p>
            <BulletList items={section.emergencySupportBullets} />
            {section.emergencySupportCta ? (
              <Button href={section.emergencySupportCta.href} variant="secondary">
                {section.emergencySupportCta.label}
              </Button>
            ) : null}
          </article>
        </div>

        <div className="signature-route-flow" aria-label="Signature uptime workflow into technical solutions">
          <span><CalendarDays size={16} aria-hidden="true" /> Plan ahead</span>
          <ArrowRight size={18} aria-hidden="true" />
          <span><ClipboardCheck size={16} aria-hidden="true" /> Review the problem</span>
          <ArrowRight size={18} aria-hidden="true" />
          <span><Factory size={16} aria-hidden="true" /> Choose the technical route</span>
        </div>

        <aside className="signature-cost-callout">
          <div className="signature-callout-icon">
            <Clock3 size={28} aria-hidden="true" />
          </div>
          <div>
            <h3>{section.hiddenCostHeadline}</h3>
            <p>{section.hiddenCostBody}</p>
          </div>
        </aside>

        <div className="signature-stocking-block">
          <div>
            <p className="eyebrow">Critical repeat parts</p>
            <h3>{section.stockingHeadline}</h3>
            <p>{section.stockingBody}</p>
            {section.stockingCta ? (
              <Button href={section.stockingCta.href} variant="primary">
                {section.stockingCta.label}
              </Button>
            ) : null}
          </div>
          <div>
            <p className="signature-card-subtitle">Suitable for</p>
            <BulletList items={section.stockingBullets} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SignatureUptimeStrip({ section = fallbackSignatureUptimeSection }) {
  if (section.displayOnSolutionPages === false) return null;

  const strip = section.strip || fallbackSignatureUptimeSection.strip;

  return (
    <section className="signature-strip-wrap" aria-label="NFG Signature Uptime Solution support">
      <div className="container">
        <div className="signature-strip">
          <div className="signature-strip-icon">
            <ShieldCheck size={24} aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">NFG Signature Solution</p>
            <h2>{strip.title}</h2>
            <p>{strip.body}</p>
          </div>
          <div className="signature-strip-actions">
            {strip.primaryCta ? (
              <Button href={strip.primaryCta.href} variant="primary">
                {strip.primaryCta.label}
              </Button>
            ) : null}
            {strip.secondaryCta ? (
              <Button href={strip.secondaryCta.href} variant="ghost">
                {strip.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
