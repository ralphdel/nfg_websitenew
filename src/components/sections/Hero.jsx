import { ArrowRight, CalendarDays, FileUp } from "lucide-react";
import { Button } from "@/components/common/Button";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <div className="industrial-frame">
          <div className="frame-top">Foundry / Machining / Reverse Engineering</div>
          <div className="frame-grid">
            <span>Cast</span>
            <span>Scan</span>
            <span>Machine</span>
            <span>Protect</span>
            <span>Print</span>
            <span>Track</span>
          </div>
        </div>
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">Built in Nigeria. Supported locally. Trusted since 1969.</p>
          <h1>We Keep Critical Industries Moving.</h1>
          <p className="hero-sub">
            Nigerian Foundries Group manufactures, reverse-engineers and repairs the industrial
            parts Africa depends on - from castings and wear solutions to corrosion protection,
            machining, fabrication and advanced 3D printing.
          </p>
          <p className="hero-proof">Made in Nigeria. Engineered for uptime. Trusted since 1969.</p>
          <div className="hero-actions">
            <Button href="#contact" icon={FileUp}>Send Us a Part / Drawing</Button>
            <Button href="#capabilities" variant="secondary" icon={ArrowRight}>Explore Our Capabilities</Button>
            <Button href="#contact" variant="ghost" icon={CalendarDays}>Book a Facility Visit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
