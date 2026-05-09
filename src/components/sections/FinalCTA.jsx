import { CalendarDays, Download, MessageCircle, Send } from "lucide-react";
import { RFQForm } from "@/components/forms/RFQForm";
import { Button } from "@/components/common/Button";
import { siteSettings } from "@/data/siteContent";

export function FinalCTA({ siteSettings: siteSettingsProp = siteSettings }) {
  const settings = siteSettingsProp;

  return (
    <section className="final-cta" id="contact">
      <div className="container final-grid">
        <div>
          <p className="eyebrow">Start the technical conversation</p>
          <h2>Send Us Your Broken Part, Drawing or Problem</h2>
          <p>
            Send the sample, drawing, photo or site problem. NFG will review the requirement and
            advise the route: casting, machining, fabrication, reverse engineering, corrosion
            protection, wear solution or advanced manufacturing development.
          </p>
          <div className="cta-actions">
            <Button href={`mailto:${settings.salesEmail || settings.primaryEmail}?subject=NFG%20RFQ`} icon={Send}>Email Technical Sales</Button>
            <Button href={`https://wa.me/${settings.whatsappNumber}`} variant="secondary" icon={MessageCircle}>WhatsApp Technical Sales</Button>
            <Button href={`mailto:${settings.salesEmail || settings.primaryEmail}?subject=Facility%20Visit%20Request`} variant="ghost" icon={CalendarDays}>Book a Facility Visit</Button>
            <Button href="/documents/nfg-company-profile.pdf" variant="ghost" icon={Download}>Download Company Profile</Button>
          </div>
        </div>
        <RFQForm compact siteSettings={settings} />
      </div>
    </section>
  );
}
