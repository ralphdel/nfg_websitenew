import Link from "next/link";

export function RelatedSolutionNav({ title = "Related pages", links = [] }) {
  if (!links.length) return null;

  return (
    <section className="content-block">
      <h2>{title}</h2>
      <div className="related-links">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
