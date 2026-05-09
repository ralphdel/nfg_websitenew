import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { getLeadership } from "@/lib/content";

export const metadata = {
  title: "Leadership | Nigerian Foundries Group",
  description: "NFG leadership profiles for management and technical leadership."
};

export const revalidate = 60;

export default async function LeadershipPage() {
  const leadership = await getLeadership();

  return (
    <main>
      <PageHero
        eyebrow="Leadership"
        title="Experienced stewardship with technical depth."
        body="Leadership profiles are CMS-managed with photos, bios, areas of responsibility, optional quotes, LinkedIn links and display order."
        primaryCta={{ label: "Contact NFG", href: "/contact" }}
        secondaryCta={{ label: "Transformation Journey", href: "/about/transformation-journey" }}
        theme="digital"
      />
      <section className="section">
        <div className="container grid grid-3">
          {leadership.map((person) => (
            <Card title={person.name} label={person.role} key={person.name}>
              <p>{person.body}</p>
              <p><strong>Area:</strong> {person.areaOfResponsibility}</p>
              {person.quote ? <p className="quote">"{person.quote}"</p> : null}
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
