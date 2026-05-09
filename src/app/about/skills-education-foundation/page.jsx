import Link from "next/link";
import { IndustrialTrainingForm } from "@/components/forms/IndustrialTrainingForm";
import { Card } from "@/components/common/Card";
import { PageHero, TagList } from "@/components/common/PageBlocks";
import {
  skillsEducationCards,
  skillsEducationPage,
  talentPipelineCards,
  trainingExposureAreas,
  tvetSkillAreas,
  universityPartnerships
} from "@/data/siteContent";

export const metadata = {
  title: "Skills, Education & Foundation | Nigerian Foundries Group",
  description: "NFG skills, education, university MOU, industrial training, foundation and TVET development journey."
};

function tvetDisplayText(status) {
  if (status.currentStatus === "accredited" && status.managementApprovedForPublicDisplay) {
    return "TVET-accredited training pathway";
  }
  return status.publicStatusText || "TVET development journey";
}

export default function SkillsEducationFoundationPage() {
  const mouCopy = skillsEducationPage.universityPartnershipsCountApproved && skillsEducationPage.verifiedUniversityMouCount
    ? `NFG has signed MOUs with ${skillsEducationPage.verifiedUniversityMouCount} Nigerian universities to support industrial learning, research collaboration and technical exposure.`
    : "NFG maintains university partnership pathways designed to expose students and academic teams to real manufacturing challenges.";

  return (
    <main>
      <PageHero
        eyebrow="Skills, Education & Foundation"
        title={skillsEducationPage.heroHeadline}
        body={skillsEducationPage.heroSubheadline}
        primaryCta={{ label: "Partner With NFG", href: "/contact" }}
        secondaryCta={{ label: "Explore Industrial Training", href: "/about/industrial-training" }}
        theme="digital"
      />

      <section className="section section-off">
        <div className="container detail-grid">
          <div className="detail-main">
            <section className="content-block" id="why-skills-matter">
              <p className="eyebrow">Why this matters</p>
              <h2>Nigeria Cannot Industrialise Without Industrial Skills</h2>
              <p>
                Modern manufacturing requires more than machines. It requires people who understand
                materials, processes, drawings, safety, quality, measurement, maintenance, digital
                tools and production discipline.
              </p>
              <p>
                NFG's experience across foundry operations, machining, fabrication, corrosion
                protection, reverse engineering and 3D printing gives students and young
                professionals exposure to the real industrial world, not only classroom theory.
              </p>
              <h3>Industrial skill gaps NFG can expose learners to</h3>
              <div className="list-grid">
                {[
                  "Practical foundry knowledge",
                  "Machine shop exposure",
                  "Fabrication and welding awareness",
                  "Quality and inspection discipline",
                  "Reverse engineering and digital drawings",
                  "Safety and workplace discipline",
                  "Industrial problem-solving mindset"
                ].map((item) => (
                  <article key={item}>
                    <span />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-block" id="university-partnerships">
              <p className="eyebrow">{skillsEducationPage.universitySafeWording}</p>
              <h2>University Partnerships and MOUs</h2>
              <p>{mouCopy}</p>
              <p>
                These partnerships create pathways for students, lecturers and technical teams to
                engage with real foundry, engineering and manufacturing challenges.
              </p>
              <div className="grid grid-2 content-card-grid">
                {universityPartnerships.map((partner) => (
                  <Card title={partner.universityName} label={partner.verificationStatus} key={partner.slug}>
                    <p>{partner.shortDescription}</p>
                    <p><strong>Location:</strong> {partner.location}</p>
                    <p><strong>Year signed:</strong> {partner.yearSigned}</p>
                    <TagList items={partner.collaborationType} />
                  </Card>
                ))}
              </div>
            </section>

            <section className="content-block" id="industrial-training">
              <p className="eyebrow">Industrial training</p>
              <h2>Industrial Training in a Real Manufacturing Environment</h2>
              <p>
                NFG provides industrial training exposure for students and young technical talent
                across its manufacturing ecosystem. Trainees can observe and learn from real
                operations in foundry production, machining, fabrication, quality control,
                engineering, reverse engineering and advanced manufacturing.
              </p>
              <div className="grid grid-3 content-card-grid">
                {trainingExposureAreas.map((area) => (
                  <Card title={area.title} body={area.body} icon={area.icon} key={area.title} />
                ))}
              </div>
              <div className="center-action">
                <Link className="btn btn-primary" href="/about/industrial-training">Apply for Industrial Training / Enquire</Link>
              </div>
            </section>

            <section className="content-block" id="foundation">
              <p className="eyebrow">Nigerian Foundries Educational Foundation</p>
              <h2>Nigerian Foundries Educational Foundation</h2>
              <p>
                The Nigerian Foundries Educational Foundation reflects NFG's long-term commitment
                to education, technical awareness and the development of future industrial talent.
                The Foundation supports the broader mission of helping young Nigerians see
                manufacturing, engineering and technical skills as serious career pathways.
              </p>
              <div className="grid grid-2 content-card-grid">
                {[
                  ["Purpose", "To promote technical education, industrial awareness and skills development."],
                  ["Focus areas", "Manufacturing education, technical exposure, industrial careers and youth development."],
                  ["Beneficiaries", "Students, young technicians, engineering learners, industrial trainees and future manufacturing professionals."],
                  ["Future opportunities", "Planned initiatives may include scholarships, technical awareness programs, factory visits, equipment exposure, competitions, workshops and industry talks."]
                ].map(([title, body]) => (
                  <Card title={title} body={body} key={title} />
                ))}
              </div>
            </section>

            <section className="content-block" id="tvet-journey">
              <p className="eyebrow">{tvetDisplayText(skillsEducationPage.tvetStatus)}</p>
              <h2>Toward Structured TVET and Technical Skills Development</h2>
              <p>
                NFG is building a pathway toward structured technical and vocational training linked
                to real industrial requirements. The goal is to connect training with actual
                manufacturing needs: foundry work, machining, fabrication, quality, maintenance,
                digital engineering and advanced manufacturing.
              </p>
              <TagList items={tvetSkillAreas} />
              <p className="small-note">
                Current public status: {tvetDisplayText(skillsEducationPage.tvetStatus)}. The site will only use TVET-accredited wording when CMS status is accredited and management approval is enabled.
              </p>
            </section>

            <section className="content-block" id="talent-pipeline">
              <p className="eyebrow">Talent pipeline</p>
              <h2>Creating a Pipeline of Industrial Talent</h2>
              <p>
                NFG's transformation requires people who can think, measure, question, document and
                improve. Through industrial training, graduate exposure and technical mentoring, NFG
                is developing a new generation of industrial problem-solvers.
              </p>
              <div className="grid grid-3 content-card-grid">
                {talentPipelineCards.map((card) => (
                  <Card title={card.title} body={card.body} icon={card.icon} key={card.title} />
                ))}
              </div>
              <div className="center-action">
                <Link className="btn btn-secondary" href="/about/careers">Explore Careers at NFG</Link>
              </div>
            </section>
          </div>

          <aside className="detail-aside">
            <Card title="Building the Parts. Building the People." body="NFG's Nigerian Content story includes local manufacturing and the human capacity needed to sustain it." />
            {skillsEducationCards.map((item) => (
              <Card title={item.title} body={item.shortDescription} icon={item.icon} key={item.title}>
                <Link className="text-link" href={item.href}>{item.cta}</Link>
              </Card>
            ))}
          </aside>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-grid">
          <div>
            <p className="eyebrow">Education and skills partnerships</p>
            <h2>Are you a university, student or institution interested in industrial skills development?</h2>
            <p>
              NFG welcomes serious education and skills-development conversations that connect
              Nigerian students and technical learners with real industrial manufacturing exposure.
            </p>
            <div className="cta-actions">
              <Link className="btn btn-primary" href="/contact">Partner With NFG</Link>
              <Link className="btn btn-secondary" href="/about/industrial-training">Enquire About Industrial Training</Link>
              <Link className="btn btn-ghost" href="mailto:info@nigerianfoundriesgroup.com?subject=Nigerian%20Foundries%20Educational%20Foundation">Contact the Foundation</Link>
            </div>
          </div>
          <IndustrialTrainingForm />
        </div>
      </section>
    </main>
  );
}
