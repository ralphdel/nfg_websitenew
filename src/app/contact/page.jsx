import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { contactCards } from "@/data/siteContent";
import { getSiteSettings } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "Contact | Nigerian Foundries Group",
  description: "Contact NFG for general enquiry, sales, RFQ, Metec corrosion protection, careers, facility visits, address, phone, email and WhatsApp."
};

export const revalidate = 60;

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const cards = contactCards.map((card) => {
    if (card.title === "General enquiry") {
      return { ...card, href: `mailto:${settings.primaryEmail}`, label: settings.primaryEmail };
    }
    if (card.title === "Sales / RFQ") {
      return { ...card, href: `mailto:${settings.salesEmail || settings.primaryEmail}?subject=NFG%20RFQ`, label: settings.salesEmail || settings.primaryEmail };
    }
    if (card.title === "WhatsApp technical sales") {
      return { ...card, href: `https://wa.me/${settings.whatsappNumber}`, label: settings.primaryPhone };
    }
    if (card.title === "Facility visit") {
      return { ...card, href: `mailto:${settings.salesEmail || settings.primaryEmail}?subject=Facility%20Visit%20Request` };
    }
    if (card.title === "Head Office & Otta Factory") {
      return { ...card, body: settings.address };
    }
    if (card.title === "Phone") {
      return { ...card, body: `Sales: ${(settings.salesPhones || [settings.primaryPhone]).join(", ")}. General: ${(settings.generalPhones || [settings.primaryPhone]).join(", ")}.`, href: `tel:${settings.primaryPhone.replace(/\s/g, "")}`, label: settings.primaryPhone };
    }
    return card;
  });

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to the right NFG team."
        body="For RFQs, facility visits, corrosion protection, careers and general enquiries, start here. Send a photo, drawing or short explanation when the enquiry is technical."
        primaryCta={{ label: "RFQ / Technical Review", href: "/rfq" }}
        secondaryCta={{ label: "Email Sales", href: `mailto:${settings.salesEmail || settings.primaryEmail}` }}
        theme="foundry"
      />
      <section className="section">
        <div className="container grid grid-3">
          {cards.map((card) => (
            <Card title={card.title} body={card.body} icon={card.icon} key={card.title}>
              <Link className="text-link" href={card.href}>{card.label}</Link>
            </Card>
          ))}
        </div>
      </section>
      <section className="section section-off" id="map">
        <div className="container map-panel">
          <div>
            <p className="eyebrow">Address</p>
            <h2>Head Office and Otta Factory</h2>
            <p>{settings.address}</p>
            <p><strong>Registered office:</strong> {settings.registeredOffice}</p>
            <p><strong>Office hours:</strong> {settings.officeHours}</p>
          </div>
          <div className="media-placeholder media-digital" role="img" aria-label="Map placeholder for NFG head office and Otta factory">
            <span>Map placeholder</span>
          </div>
        </div>
      </section>
    </main>
  );
}
