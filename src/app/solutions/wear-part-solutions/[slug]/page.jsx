import { notFound } from "next/navigation";
import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { RelatedSolutionNav } from "@/components/common/RelatedSolutionNav";
import { Button } from "@/components/common/Button";
import { wearSolutionPages } from "@/data/wearSolutionsContent";

function renderSection(section) {
  if (section.cards?.length) {
    return (
      <section className="content-block" key={section.title}>
        <h2>{section.title}</h2>
        {section.body ? <p>{section.body}</p> : null}
        <div className="grid grid-3 content-card-grid">
          {section.cards.map((card) => (
            <Card title={card.title} body={card.body} icon={card.icon} key={card.title} />
          ))}
        </div>
      </section>
    );
  }

  if (section.items?.length) {
    return (
      <section className="content-block" key={section.title}>
        <h2>{section.title}</h2>
        {section.body ? <p>{section.body}</p> : null}
        <div className="list-grid">
          {section.items.map((item) => (
            <article key={item}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="content-block" key={section.title}>
      <h2>{section.title}</h2>
      {section.body ? <p>{section.body}</p> : null}
    </section>
  );
}

export function generateStaticParams() {
  return Object.keys(wearSolutionPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = wearSolutionPages[slug];

  return {
    title: page ? page.metaTitle : "Wear Solution | Nigerian Foundries Group",
    description: page?.metaDescription
  };
}

export default async function WearChildPage({ params }) {
  const { slug } = await params;
  const page = wearSolutionPages[slug];
  if (!page) notFound();

  return (
    <main>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        body={page.hero.body}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        tertiaryCta={page.hero.tertiaryCta}
        chips={page.hero.chips}
        theme="wear"
      />

      <section className="section">
        <div className="container detail-main">
          {page.sections.map((section) => renderSection(section))}

          <section className="content-block">
            <h2>{page.closing.title}</h2>
            <p>{page.closing.body}</p>
            <div className="hero-actions">
              <Button href={page.closing.primaryCta.href}>{page.closing.primaryCta.label}</Button>
              <Button href={page.closing.secondaryCta.href} variant="ghost">
                {page.closing.secondaryCta.label}
              </Button>
            </div>
          </section>

          <RelatedSolutionNav title="Related wear pages" links={page.relatedLinks} />
        </div>
      </section>
    </main>
  );
}
