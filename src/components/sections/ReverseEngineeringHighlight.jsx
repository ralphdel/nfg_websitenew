import { ScanLine } from "lucide-react";
import { reverseEngineeringHighlights } from "@/data/siteContent";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";

export function ReverseEngineeringHighlight({ highlights = reverseEngineeringHighlights }) {
  return (
    <section className="section" id="reverse-engineering-highlight">
      <div className="container split">
        <SectionHeader
          align="left"
          eyebrow="Reverse engineering"
          title="No drawing is not the end of the job."
          body="NFG can start with a failed part, photo, drawing, scan or site condition. The goal is not just to copy geometry; it is to understand the process, failure condition and route to a manufacturable local solution."
        />
        <div className="timeline-card">
          {highlights.map((item, index) => (
            <div className="timeline-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
          <Button href="/solutions/reverse-engineering" icon={ScanLine}>Start Reverse Engineering</Button>
        </div>
      </div>
    </section>
  );
}
