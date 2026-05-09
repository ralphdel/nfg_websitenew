import Link from "next/link";
import { Button } from "@/components/common/Button";

export function PageHero({ eyebrow, title, body, primaryCta, secondaryCta, theme = "foundry", media }) {
  return (
    <section className={`page-hero page-hero-${theme}`}>
      <div className="container page-hero-grid">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {body ? <p>{body}</p> : null}
          {(primaryCta || secondaryCta) ? (
            <div className="hero-actions">
              {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
              {secondaryCta ? <Button href={secondaryCta.href} variant="ghost">{secondaryCta.label}</Button> : null}
            </div>
          ) : null}
        </div>
        <MediaPlaceholder label={eyebrow || title} alt={media?.altText || `${title} media placeholder`} theme={theme} media={media} />
      </div>
    </section>
  );
}

export function MediaPlaceholder({ label, alt, theme = "foundry", media }) {
  const image = media?.desktopImage || media?.image?.asset?.url;

  return (
    <div
      className={`media-placeholder media-${theme}`}
      role="img"
      aria-label={alt}
      style={image ? {
        backgroundImage: `linear-gradient(135deg, rgba(8, 22, 40, 0.38), rgba(8, 22, 40, 0.74)), url("${image}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      } : undefined}
    >
      <span>{label}</span>
    </div>
  );
}

export function TagList({ items = [], light = false }) {
  if (!items.length) return null;
  return (
    <div className={`tag-list ${light ? "tag-list-light" : ""}`}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export function SectionList({ title, items = [] }) {
  if (!items.length) return null;
  return (
    <section className="content-block">
      <h2>{title}</h2>
      <div className="list-grid">
        {items.map((item) => (
          <article key={item}>
            <span />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RelatedLinks({ title, items = [], basePath }) {
  if (!items.length) return null;
  return (
    <section className="content-block">
      <h2>{title}</h2>
      <div className="related-links">
        {items.map((item) => (
          <Link href={`${basePath}/${item.slug || item}`} key={item.slug || item}>
            {item.title || item}
          </Link>
        ))}
      </div>
    </section>
  );
}
