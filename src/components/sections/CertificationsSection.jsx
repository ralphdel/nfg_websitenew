import Link from "next/link";
import { certifications } from "@/data/siteContent";
import { Card } from "@/components/common/Card";
import { SectionHeader } from "@/components/common/SectionHeader";

export function CertificationsSection({ items = certifications }) {
  const homepageItems = items.filter((item) => item.displayOnHomepage !== false);

  return (
    <section className="section section-off" id="certifications">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications and recognitions"
          title="Proof records are managed carefully."
          body="Certificates, awards and recognitions are CMS-managed. Items remain marked pending until management-approved evidence is uploaded."
        />
        <div className="grid grid-3">
          {homepageItems.map((item) => (
            <Card title={item.title} body={item.description} label={item.verificationStatus} key={item.title}>
              <p><strong>Issuing body:</strong> {item.issuingBody}</p>
              <p><strong>Year:</strong> {item.year}</p>
            </Card>
          ))}
        </div>
        <div className="center-action">
          <Link className="text-link" href="/nigerian-content/certifications-awards">
            View all certificates and awards
          </Link>
        </div>
      </div>
    </section>
  );
}
