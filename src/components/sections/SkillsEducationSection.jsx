import Link from "next/link";
import { skillsEducationCards } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TagList } from "@/components/common/PageBlocks";

export function SkillsEducationSection({ items = skillsEducationCards }) {
  return (
    <section className="section section-navy skills-home" id="skills-education">
      <div className="container">
        <SectionHeader
          inverse
          eyebrow="Skills, Education & Nigerian Content"
          title="Building Nigeria's Industrial Skills Base"
          body="NFG's Nigerian Content commitment goes beyond making parts locally. We are also helping build the people, partnerships and technical skills required to sustain Nigerian manufacturing through university MOUs, industrial training, foundation initiatives and our journey toward structured TVET-based skills development."
        />
        <div className="grid grid-4">
          {items.map((item) => (
            <Card title={item.title} body={item.shortDescription} icon={item.icon} key={item.title}>
              <div className="skill-image-note" role="img" aria-label={`${item.title} media placeholder`}>
                {item.image}
              </div>
              <TagList items={(item.points || []).slice(0, 3)} light />
              <Link className="text-link light" href={item.href}>{item.cta}</Link>
            </Card>
          ))}
        </div>
        <div className="center-action">
          <Link className="btn btn-primary" href="/about/skills-education-foundation">
            Explore Skills & Education
          </Link>
        </div>
      </div>
    </section>
  );
}
