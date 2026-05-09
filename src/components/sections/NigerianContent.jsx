import { partnerships } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function NigerianContent({ items = partnerships }) {
  return (
    <section className="section section-navy" id="nigerian-content">
      <div className="container">
        <SectionHeader
          inverse
          eyebrow="Nigerian Content"
          title="Nigerian Content Is Not a Slogan. It Is Industrial Capacity."
          body="Through Nigerian Foundries Group and Metec West Africa, local manufacturing becomes practical support for strategic industries: castings, wear parts, sacrificial anodes, corrosion-protection assemblies, machining, fabrication and advanced manufacturing development."
        />
        <div className="grid grid-3">
          {items.map((item) => (
            <Card title={item.title} body={item.body} icon={item.icon} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
