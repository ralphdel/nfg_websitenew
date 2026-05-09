import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/common/Card";
import { PageHero } from "@/components/common/PageBlocks";
import { getResourcesContent } from "@/lib/content";

export const revalidate = 60;

export async function generateStaticParams() {
  const { resourcePages } = await getResourcesContent();
  return resourcePages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { resourcePages } = await getResourcesContent();
  const page = resourcePages.find((item) => item.slug === slug);
  return {
    title: page ? `${page.title} | Nigerian Foundries Group` : "Resources | Nigerian Foundries Group",
    description: page?.summary
  };
}

export default async function ResourceDetailPage({ params }) {
  const { slug } = await params;
  const resources = await getResourcesContent();
  const page = resources.resourcePages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title={page.title}
        body={page.summary}
        primaryCta={{ label: "Send RFQ", href: "/rfq" }}
        secondaryCta={{ label: "Contact NFG", href: "/contact" }}
        theme="digital"
      />
      <section className="section">
        <div className="container">
          {slug === "case-studies" ? <CaseStudies caseStudies={resources.caseStudies} /> : null}
          {slug === "insights" ? <Insights blogPosts={resources.blogPosts} /> : null}
          {slug === "downloads" ? <Downloads downloads={resources.downloads} /> : null}
          {slug === "faqs" ? <Faqs faqs={resources.faqs} /> : null}
        </div>
      </section>
    </main>
  );
}

function CaseStudies({ caseStudies }) {
  return (
    <div className="grid grid-2">
      {caseStudies.map((item) => (
        <Card title={item.title} label={item.confidentialityStatus} key={item.slug}>
          <p><strong>Industry:</strong> {item.industry}</p>
          <p><strong>Problem:</strong> {item.problem}</p>
          <p><strong>NFG process:</strong> {item.nfgApproach}</p>
          <p><strong>Route:</strong> {item.manufacturingRoute}</p>
          <p><strong>Result:</strong> {item.result}</p>
        </Card>
      ))}
    </div>
  );
}

function Insights({ blogPosts }) {
  return (
    <div className="grid grid-3">
      {blogPosts.map((post) => (
        <Card title={post.title} label={post.category} key={post.title}>
          <p>{post.excerpt}</p>
          <p className="small-note">Publish date: {post.publishDate}</p>
        </Card>
      ))}
    </div>
  );
}

function Downloads({ downloads }) {
  return (
    <div className="grid grid-4">
      {downloads.map((download) => (
        <Card title={download.title} label={download.category} key={download.href}>
          <p>{download.description}</p>
          <Link className="text-link" href={download.href}>Download PDF</Link>
        </Card>
      ))}
    </div>
  );
}

function Faqs({ faqs }) {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
          <span>{faq.category}</span>
        </details>
      ))}
    </div>
  );
}
