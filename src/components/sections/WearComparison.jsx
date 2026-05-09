import { wearComparison } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";

export function WearComparison({ items = wearComparison }) {
  return (
    <section className="section section-navy" id="wear-comparison">
      <div className="container">
        <SectionHeader
          inverse
          eyebrow="Wear route selection"
          title="Hardox and Enduraclad solve different wear problems."
          body="NFG helps clients choose the manufacturing route based on impact, abrasion, geometry and service environment instead of selling every wear problem the same way."
        />
        <div className="grid grid-2">
          {items.map((item) => (
            <Card title={item.title} body={item.description} icon={item.icon} label={item.subtitle} key={item.title}>
              <div className="tag-list tag-list-light">
                {(item.useCases || []).map((useCase) => (
                  <span key={useCase}>{useCase}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="center-action">
          <Button href="/rfq?type=wear" variant="primary">Send Us Your Worn Part</Button>
        </div>
      </div>
    </section>
  );
}
