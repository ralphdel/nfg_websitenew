import { notFound } from "next/navigation";
import { PageHero, SectionList } from "@/components/common/PageBlocks";
import { aboutPages, findBySlug } from "@/data/siteContent";

const staticAboutRoutes = ["skills-education-foundation", "industrial-training"];

export function generateStaticParams() {
  return aboutPages
    .filter((item) => !staticAboutRoutes.includes(item.slug))
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = findBySlug(aboutPages, slug);
  return {
    title: page ? `${page.title} | Nigerian Foundries Group` : "About | Nigerian Foundries Group",
    description: page?.summary
  };
}

export default async function AboutDetailPage({ params }) {
  const { slug } = await params;
  const page = findBySlug(aboutPages, slug);
  if (!page) notFound();

  return (
    <main>
      <PageHero
        eyebrow="About"
        title={page.title}
        body={page.summary}
        primaryCta={{ label: "Contact NFG", href: "/contact" }}
        secondaryCta={{ label: "Leadership", href: "/about/leadership" }}
        theme={page.slug.includes("facilities") ? "foundry" : page.slug.includes("careers") ? "digital" : "wear"}
      />
      <section className="section">
        <div className="container narrow-content">
          <SectionList title="Page focus" items={page.sections} />
        </div>
      </section>
    </main>
  );
}
