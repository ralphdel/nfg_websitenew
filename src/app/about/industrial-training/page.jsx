import { IndustrialTrainingForm } from "@/components/forms/IndustrialTrainingForm";
import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { industrialTrainingDepartments, trainingExposureAreas } from "@/data/siteContent";

export const metadata = {
  title: "Industrial Training | Nigerian Foundries Group",
  description: "Industrial training enquiry page for students and young technical talent seeking exposure to NFG's manufacturing ecosystem."
};

export default function IndustrialTrainingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industrial Training"
        title="Industrial Training in a Real Manufacturing Environment"
        body="NFG provides industrial training exposure for students and young technical talent across foundry production, machining, fabrication, quality control, engineering, reverse engineering and advanced manufacturing."
        primaryCta={{ label: "Send Enquiry", href: "#industrial-training-form" }}
        secondaryCta={{ label: "Skills & Education", href: "/about/skills-education-foundation" }}
        theme="wear"
      />
      <section className="section section-off">
        <div className="container detail-grid">
          <div className="detail-main">
            <section className="content-block">
              <p className="eyebrow">Training exposure areas</p>
              <h2>What students may observe and learn</h2>
              <p>
                Training placement depends on available capacity, safety requirements and departmental
                approval. The goal is serious exposure to real industrial discipline, not a guaranteed placement.
              </p>
              <div className="grid grid-3 content-card-grid">
                {trainingExposureAreas.map((area) => (
                  <Card title={area.title} body={area.body} icon={area.icon} key={area.title} />
                ))}
              </div>
            </section>

            <section className="content-block">
              <p className="eyebrow">Preferred departments</p>
              <h2>Department options for enquiry</h2>
              <div className="tag-list">
                {industrialTrainingDepartments.map((department) => (
                  <span key={department}>{department}</span>
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-aside" id="industrial-training-form">
            <Card
              title="Before you apply"
              body="Prepare your institution, course of study, current level, preferred department, required duration and SIWES / IT letter."
            />
            <IndustrialTrainingForm />
          </aside>
        </div>
      </section>
    </main>
  );
}
