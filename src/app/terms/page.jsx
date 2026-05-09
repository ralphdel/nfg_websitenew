import { PageHero } from "@/components/common/PageBlocks";

export const metadata = {
  title: "Terms | Nigerian Foundries Group"
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Terms"
        title="Website Terms"
        body="This page gives the rebuilt website a non-broken terms route. Final legal wording should be reviewed and approved by NFG before launch."
        primaryCta={{ label: "Contact NFG", href: "/contact" }}
        theme="foundry"
      />
      <section className="section">
        <div className="container narrow-content">
          <p>
            Website information is provided for general industrial capability discussion. Quotations,
            technical recommendations, delivery commitments and confidential project terms should be
            confirmed through NFG's official commercial process.
          </p>
        </div>
      </section>
    </main>
  );
}
