import { partnerships } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function NigerianContent() {
  return (
    <section className="section section-navy" id="nigerian-content">
      <div className="container">
        <SectionHeader
          inverse
          eyebrow="Nigerian Content in Action"
          title="Localising critical industrial manufacturing in Nigeria."
          body="Through Nigerian Foundries Group and Metec West Africa, we help localise critical industrial manufacturing in Nigeria - from castings and wear parts to sacrificial anodes, corrosion-protection assemblies, machining, fabrication and additive manufacturing."
        />
        <div className="grid grid-3">
          {partnerships.map((item) => (
            <Card title={item.title} body={item.body} icon={item.icon} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
