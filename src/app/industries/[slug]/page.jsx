import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/data/siteContent";

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = industries.find((item) => item.slug === slug);
  return {
    title: page ? `${page.title} | Nigerian Foundries Group` : "Industry | Nigerian Foundries Group"
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const page = industries.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <main className="simple-page">
      <div className="container">
        <Link className="text-link" href="/#industries">Back to industries</Link>
        <h1>{page.title}</h1>
        <p><strong>Pain:</strong> {page.pain}</p>
        <p><strong>NFG solution:</strong> {page.solution}</p>
        <p>
          This route is prepared for Sanity CMS content. It can later be expanded with sector
          photography, case studies, downloadable capability sheets and industry-specific enquiry routing.
        </p>
      </div>
    </main>
  );
}
