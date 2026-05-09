import { ClipboardCheck, Gauge, ListChecks, TimerReset } from "lucide-react";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

const vezappPoints = [
  {
    title: "Production tracking",
    icon: Gauge,
    body: "Create clearer visibility on where each order is in the process."
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
    body: "Structured information improves follow-up and accountability."
  }
];

export function VezappSection({ items = vezappPoints }) {
  const points = items.length ? items : vezappPoints;

  return (
    <section className="section section-off" id="vezapp">
      <div className="container split">
        <SectionHeader
          align="left"
          eyebrow="Digital production control"
          title="From Manual Follow-Up to Digital Production Control"
          body="With Vezapp, NFG is improving production tracking, scheduling discipline, quality checkpoints and communication between sales, planning, production and management."
        />
        <div className="grid grid-2 compact-grid">
          {points.map((point) => (
            <Card title={point.title} body={point.body} icon={point.icon} key={point.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
