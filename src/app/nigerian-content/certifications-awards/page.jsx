import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { getCertifications } from "@/lib/content";

export const metadata = {
  title: "Certifications & Awards | Nigerian Foundries Group",
  description: "NFG certificates, awards and recognitions with verification status, issuing body, year, description and CMS-managed media fields."
};

export const revalidate = 60;

export default async function CertificationsAwardsPage() {
  const certifications = await getCertifications();

  return (
    <main>
      <PageHero
        eyebrow="Certifications & Awards"
        title="Every major proof point needs a verification status."
        body="Certificates, awards and recognitions are housed here with issuing body, year, description, certificate image/PDF support and a clear verified, pending or internal-only status."
        primaryCta={{ label: "Request Supplier Documentation", href: "/contact" }}
        secondaryCta={{ label: "Nigerian Content", href: "/nigerian-content" }}
        theme="digital"
      />
      <section className="section">
        <div className="container grid grid-3">
          {certifications.map((item) => (
            <Card title={item.title} label={item.verificationStatus} key={item.title}>
              <p><strong>Issuing body:</strong> {item.issuingBody}</p>
              <p><strong>Year:</strong> {item.year}</p>
              <p>{item.description}</p>
              <p className="small-note">Certificate image and PDF fields are managed in Sanity when approved.</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
