import Link from "next/link";
import { capabilities, industries } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-mark">NFG</span>
            <strong>Nigerian Foundries Group</strong>
          </div>
          <p>
            Industrial castings, wear solutions, corrosion protection, machining, fabrication,
            reverse engineering and advanced manufacturing. Built in Nigeria. Supported locally.
            Trusted since 1969.
          </p>
        </div>
        <div>
          <h3>Capabilities</h3>
          {capabilities.slice(0, 6).map((item) => (
            <Link href={`/capabilities/${item.slug}`} key={item.slug}>
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Industries</h3>
          {industries.slice(0, 6).map((item) => (
            <Link href={`/industries/${item.slug}`} key={item.slug}>
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <Link href="#contact">Send Your RFQ</Link>
          <Link href="#contact">WhatsApp Technical Sales</Link>
          <Link href="#contact">Book a Facility Visit</Link>
          <Link href="/documents/nfg-company-profile.pdf">Download Company Profile</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Copyright 2026 Nigerian Foundries Group Limited. All rights reserved.</span>
        <span>ISO 9001 | Nigerian Content | Since 1969</span>
      </div>
    </footer>
  );
}
