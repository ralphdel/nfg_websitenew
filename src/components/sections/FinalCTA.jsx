import { CalendarDays, Download, MessageCircle, Send, Upload } from "lucide-react";
import { Button } from "@/components/common/Button";

export function FinalCTA() {
  return (
    <section className="final-cta" id="contact">
      <div className="container final-grid">
        <div>
          <p className="eyebrow">Start the technical conversation</p>
          <h2>Have a broken part, drawing, photo or industrial problem?</h2>
          <p>
            Send it to NFG. Our technical team will review the requirement and advise the best
            route - casting, machining, fabrication, reverse engineering, corrosion protection,
            wear solution or 3D printing.
          </p>
          <div className="cta-actions">
            <Button href="mailto:info@nigerianfoundries.com?subject=NFG%20RFQ" icon={Send}>Send Your RFQ</Button>
            <Button href="https://wa.me/2340000000000" variant="secondary" icon={MessageCircle}>WhatsApp Technical Sales</Button>
            <Button href="mailto:info@nigerianfoundries.com?subject=Facility%20Visit%20Request" variant="ghost" icon={CalendarDays}>Book a Facility Visit</Button>
            <Button href="/documents/nfg-company-profile.pdf" variant="ghost" icon={Download}>Download Company Profile</Button>
          </div>
        </div>
        <form className="rfq-form">
          <label>
            Enquiry type
            <select defaultValue="rfq">
              <option value="rfq">RFQ / replacement part</option>
              <option value="wear">Wear solution</option>
              <option value="corrosion">Corrosion protection</option>
              <option value="reverse">Reverse engineering</option>
              <option value="visit">Facility visit</option>
            </select>
          </label>
          <label>
            Work email
            <input type="email" placeholder="name@company.com" />
          </label>
          <label>
            Requirement
            <textarea placeholder="Describe the broken part, drawing, material, industry or problem." rows={4} />
          </label>
          <label className="upload-field">
            <Upload size={18} aria-hidden="true" />
            <span>Upload drawing/photo option prepared for backend connection</span>
            <input type="file" />
          </label>
          <button type="button">Prepare RFQ Submission</button>
        </form>
      </div>
    </section>
  );
}
