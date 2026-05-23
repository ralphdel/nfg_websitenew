import { Users } from "lucide-react";
import { leadership } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";

export function LeadershipSnapshot({ people = leadership }) {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <SectionHeader
          eyebrow="Leadership snapshot"
          title="Experienced stewardship with technical depth."
          body="A short homepage view of the people leading NFG's manufacturing, operational and technical transformation. Full profiles, photos and approval status are CMS-managed."
        />
        <div className="grid grid-3">
          {people.map((person, index) => (
            <Card
              title={person.name}
              body={person.body}
              label={person.role}
              key={person._id || person.name || `${person.role || "leader"}-${index}`}
            />
          ))}
        </div>
        <div className="center-action">
          <Button href="/about/leadership" variant="secondary" icon={Users}>Meet the Leadership Team</Button>
        </div>
      </div>
    </section>
  );
}
