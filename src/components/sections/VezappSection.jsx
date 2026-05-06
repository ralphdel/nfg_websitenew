import { ClipboardCheck, Gauge, ListChecks, TimerReset } from "lucide-react";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

const vezappPoints = [
  {
    title: "Live job tracking",
    icon: Gauge,
    body: "Know where each order is in the process."
  },
  {
    title: "Quality checkpoints",
    icon: ClipboardCheck,
    body: "Record inspection and process data at defined stages."
  },
  {
    title: "Scheduling visibility",
    icon: TimerReset,
    body: "Reduce surprises and improve delivery planning."
  },
  {
    title: "Management accountability",
    icon: ListChecks,
    body: "Data replaces guesswork."
  }
];

export function VezappSection() {
  return (
    <section className="section section-off" id="vezapp">
      <div className="container split">
        <SectionHeader
          align="left"
          eyebrow="Digital production control"
          title="Digital Production Control Has Arrived at NFG."
          body="With Vezapp, we are moving from manual follow-up to live production visibility, better scheduling discipline, quality checkpoints and clearer delivery accountability."
        />
        <div className="grid grid-2 compact-grid">
          {vezappPoints.map((point) => (
            <Card title={point.title} body={point.body} icon={point.icon} key={point.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
