import { RFQForm } from "@/components/forms/RFQForm";
import { PageHero } from "@/components/common/PageBlocks";
import { getIndustries, getSiteSettings } from "@/lib/content";

export const metadata = {
  title: "RFQ / Technical Review | Nigerian Foundries Group",
  description: "Send NFG your broken part, drawing, photo or industrial problem for technical review."
};

export const revalidate = 60;

export default async function RFQPage() {
  const [industries, siteSettings] = await Promise.all([getIndustries(), getSiteSettings()]);
  const formIndustries = industries.map(({ title, slug }) => ({ title, slug }));

  return (
    <main>
      <PageHero
        eyebrow="RFQ / Technical Review"
        title="Send Us Your Broken Part, Drawing or Problem"
        body="The fastest way to start is to describe the part, failure condition, industry, urgency and available drawing or sample. Attach confidential files directly to the email that opens after submission until secure private upload storage is connected."
        primaryCta={{ label: "Contact Page", href: "/contact" }}
        secondaryCta={{ label: "Reverse Engineering", href: "/solutions/reverse-engineering" }}
        theme="scan"
      />
      <section className="section">
        <div className="container rfq-page-grid">
          <div className="rfq-guidance">
            <p className="eyebrow">What helps us respond</p>
            <h2>Useful RFQ details</h2>
            <ul>
              <li>Photos of the broken, worn or corroded part.</li>
              <li>Drawing, STEP, STL, DXF, DWG or PDF where available.</li>
              <li>Equipment name, OEM number and material if known.</li>
              <li>Operating environment, failure history and urgency.</li>
              <li>Quantity required and preferred response method.</li>
            </ul>
            <p className="security-note">
              Confidential RFQ uploads should use secure backend/private storage in production. Public Sanity assets are for website media, brochures and approved documents only.
            </p>
          </div>
          <RFQForm industries={formIndustries} siteSettings={siteSettings} />
        </div>
      </section>
    </main>
  );
}
