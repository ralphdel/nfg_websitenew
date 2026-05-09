import { PageHero } from "@/components/common/PageBlocks";

export const metadata = {
  title: "Privacy Policy | Nigerian Foundries Group"
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        body="NFG should treat RFQ details, drawings, photos and technical files as confidential client information. This page provides a launch-ready privacy placeholder that legal counsel can replace through the CMS."
        primaryCta={{ label: "Contact NFG", href: "/contact" }}
        theme="digital"
      />
      <section className="section">
        <div className="container narrow-content">
          <p>
            Website enquiries are used to respond to technical, commercial, supplier, career and general requests.
            Confidential RFQ uploads should be handled through secure private storage or a controlled form service,
            not a public CMS media library.
          </p>
        </div>
      </section>
    </main>
  );
}
