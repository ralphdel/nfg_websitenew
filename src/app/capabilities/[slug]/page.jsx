import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities } from "@/data/siteContent";

export function generateStaticParams() {
  return capabilities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = capabilities.find((item) => item.slug === slug);
  return {
    title: page ? `${page.title} | Nigerian Foundries Group` : "Capability | Nigerian Foundries Group"
  };
}

export default async function CapabilityPage({ params }) {
  const { slug } = await params;
  const page = capabilities.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <main className="simple-page">
      <div className="container">
        <Link className="text-link" href="/#capabilities">Back to capabilities</Link>
        <h1>{page.title}</h1>
        <p>{page.body}</p>
        <p>
          This page is ready to connect to Sanity CMS for detailed capability copy, image galleries,
          project examples, downloadable documents and RFQ routing.
        </p>
      </div>
    </main>
  );
}
