import Link from "next/link";
import { Button } from "@/components/common/Button";
import { MuxVideoPlayer } from "@/components/common/MuxVideoPlayer";

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
  const playbackId = media?.playbackId || media?.video?.asset?.playbackId;
  const video = media?.videoFileUrl || media?.videoFile?.asset?.url || media?.videoUrl;
  const poster = media?.posterImage?.asset?.url || media?.posterImage;
  const image = media?.desktopImage || media?.image?.asset?.url || poster;
  const showVideo = media?.mediaType === "video" && (playbackId || video);
  const caption = showVideo ? media?.caption : "";

  if (showVideo) {
    return (
      <div
        className={`media-placeholder media-${theme} has-video`}
        style={{
          "--media-aspect-ratio": media?.videoAspectRatio || "16 / 9",
          "--media-fit": media?.videoObjectFit || "cover",
          "--media-max-width": media?.videoMaxWidth ? `${media.videoMaxWidth}px` : "none"
        }}
      >
        {playbackId ? (
          <MuxVideoPlayer
            playbackId={playbackId}
            isLazy={true}
            preload="none"
            autoPlay={media?.videoAutoplay !== false}
            muted={true}
            loop={true}
            playsInline={true}
            poster={poster || image}
            ariaLabel={alt}
            style={{
              aspectRatio: media?.videoAspectRatio || "16/9",
              "--media-object-fit": media?.videoObjectFit || "cover"
            }}
          />
        ) : (
          <video
            autoPlay={media?.videoAutoplay !== false}
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster || image}
            aria-label={alt}
            controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            onContextMenu={(event) => event.preventDefault()}
          >
            <source src={video} />
          </video>
        )}
        {caption ? <div className="media-video-caption">{caption}</div> : null}
      </div>
    );
  }

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
