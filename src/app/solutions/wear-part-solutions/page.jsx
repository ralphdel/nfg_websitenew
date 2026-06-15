import Link from "next/link";
import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { RelatedSolutionNav } from "@/components/common/RelatedSolutionNav";
import { SignatureUptimeStrip } from "@/components/sections/SignatureUptimeSection";
import { wearOverviewPage, wearOverviewRouteRows } from "@/data/wearSolutionsContent";

export const metadata = {
  title: wearOverviewPage.metaTitle,
  description: wearOverviewPage.metaDescription
};

export default function WearPartSolutionsOverviewPage() {
  return (
    <main>
      <PageHero
        eyebrow={wearOverviewPage.hero.eyebrow}
        title={wearOverviewPage.hero.title}
        body={wearOverviewPage.hero.body}
        primaryCta={wearOverviewPage.hero.primaryCta}
        secondaryCta={wearOverviewPage.hero.secondaryCta}
        chips={wearOverviewPage.hero.chips}
        theme="wear"
      />

      <section className="section">
        <div className="container narrow-content">
          <div className="content-block">
            <p className="eyebrow">Wear overview</p>
            <h2>{wearOverviewPage.intro.title}</h2>
            <p>{wearOverviewPage.intro.body}</p>
          </div>
        </div>
      </section>

      <section className="section section-off">
        <div className="container">
          <div className="content-block">
            <p className="eyebrow">Wear Route Selector</p>
            <h2>Start with the wear problem, then choose the route.</h2>
            <p>NFG can combine routes where the application requires it.</p>
            <div className="wear-route-table-wrap">
              <table className="wear-route-table">
                <thead>
                  <tr>
                    <th>Wear problem</th>
                    <th>Best NFG route</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {wearOverviewRouteRows.map((row) => (
                    <tr key={`${row.problem}-${row.route}`}>
                      <td>{row.problem}</td>
                      <td>{row.route}</td>
                      <td>
                        <Link className="text-link" href={row.href}>
                          Open route
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {wearOverviewPage.routeCards.map((card) => (
              <Card title={card.title} body={card.body} icon={card.icon} label={card.subtitle} key={card.title}>
                <Link className="text-link" href={card.href}>
                  {card.cta}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SignatureUptimeStrip section={wearOverviewPage.signatureStrip} />

      <section className="section">
        <div className="container">
          <RelatedSolutionNav title="Wear page navigation" links={wearOverviewPage.relatedLinks} />
        </div>
      </section>
    </main>
  );
}
