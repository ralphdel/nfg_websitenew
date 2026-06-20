"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/common/Button";
import { heroSlides } from "@/data/siteContent";
import { MuxVideoPlayer } from "@/components/common/MuxVideoPlayer";

const ROTATION_MS = 11000;

export function Hero({ slides = heroSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStart = useRef(null);
  const lastWheelSlideAt = useRef(0);
  const activeSlide = useMemo(() => slides[activeIndex] || slides[0], [activeIndex, slides]);
  const isPaused = hoverPaused || userPaused || reducedMotion;
  const bodyParagraphs = Array.isArray(activeSlide?.bodyParagraphs)
    ? activeSlide.bodyParagraphs.filter((paragraph) => typeof paragraph === "string" && paragraph.trim())
    : [];
  const heroPoster = activeSlide?.media?.posterImage;
  const heroImage = activeSlide?.media?.desktopImage || heroPoster;
  const playbackId = activeSlide?.media?.playbackId;
  const heroVideo = activeSlide?.media?.videoFileUrl || activeSlide?.media?.videoUrl;
  const showVideo = activeSlide?.media?.mediaType === "video" && (playbackId || heroVideo);
  const heroShouldAutoplay = false;
  const mediaCaption = showVideo ? activeSlide?.media?.caption : "";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, ROTATION_MS);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  const showSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
    setUserPaused(true);
  };

  const nextSlide = () => showSlide(activeIndex + 1);
  const previousSlide = () => showSlide(activeIndex - 1);

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const isTyping = target?.closest?.("input, textarea, select, [contenteditable='true']");

      if (isTyping || slides.length <= 1) return;

      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % slides.length);
        setUserPaused(true);
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
        setUserPaused(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [slides.length]);

  const onPointerDown = (event) => {
    if (slides.length <= 1 || event.button > 0) return;
    pointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY
    };
  };

  const onPointerUp = (event) => {
    const start = pointerStart.current;
    pointerStart.current = null;

    if (!start || start.id !== event.pointerId) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    const isHorizontalSwipe = Math.abs(deltaX) > 64 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25;

    if (!isHorizontalSwipe) return;

    if (deltaX < 0) nextSlide();
    if (deltaX > 0) previousSlide();
  };

  const onWheel = (event) => {
    const isHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 36;
    const now = Date.now();

    if (slides.length <= 1 || !isHorizontal || now - lastWheelSlideAt.current < 700) return;

    lastWheelSlideAt.current = now;
    setUserPaused(true);

    if (event.deltaX > 0) {
      setActiveIndex((current) => (current + 1) % slides.length);
    } else {
      setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    }
  };

  if (!activeSlide) return null;

  return (
    <section
      className={`hero hero-theme-${activeSlide.media?.theme || "foundry"}`}
      id="home"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      aria-roledescription="carousel"
      aria-label="NFG homepage highlights"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
      onWheel={onWheel}
    >
      <div
        className="hero-backdrop"
        aria-hidden="true"
      >
        <div className="hero-backdrop-grid" aria-hidden="true" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">{activeSlide.eyebrow}</p>
          <h1>{activeSlide.headline}</h1>
          {bodyParagraphs.length ? (
            <div className="hero-subcopy">
              {bodyParagraphs.map((paragraph) => (
                <p className="hero-sub" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="hero-sub">{activeSlide.body || activeSlide.subheadline}</p>
          )}
          {activeSlide.specificationTable && (
            <div className="hero-spec-table-container">
              {activeSlide.specificationTable.title && (
                <h4 className="hero-spec-table-title">{activeSlide.specificationTable.title}</h4>
              )}
              {activeSlide.specificationTable.rows && activeSlide.specificationTable.rows.length > 0 && (
                <table className="hero-spec-table">
                  <tbody>
                    {activeSlide.specificationTable.rows.map((row, i) => (
                      <tr key={i}>
                        <td className={`spec-label${row.labelBold ? " is-bold" : ""}`}>{row.label}</td>
                        <td className={`spec-value${row.valueBold === false ? "" : " is-bold"}`}>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
          {activeSlide.supportText ? <p className="hero-proof">{activeSlide.supportText}</p> : null}
          <div className="hero-actions">
            <Button href={activeSlide.primaryCta.href}>{activeSlide.primaryCta.label}</Button>
            <Button href={activeSlide.secondaryCta.href} variant="secondary" icon={ArrowRight}>
              {activeSlide.secondaryCta.label}
            </Button>
          </div>
          {(activeSlide.featureCards || []).length > 0 ? (
            <div className="hero-proof-chips" aria-label="Slide proof chips">
              {(activeSlide.featureCards || []).map((card) => (
                <span
                  className="hero-proof-chip"
                  key={card.title}
                  title={card.description || card.title}
                >
                  {card.title}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="hero-media-card" aria-label="Current hero media">
          {mediaCaption ? <div className="hero-media-caption">{mediaCaption}</div> : null}
          <div
            className="hero-media-frame"
            style={{
              "--media-aspect-ratio": activeSlide.media?.videoAspectRatio || "16 / 9",
              "--media-fit": activeSlide.media?.videoObjectFit || "cover"
            }}
          >
            {showVideo ? (
              playbackId ? (
                <MuxVideoPlayer
                  key={playbackId}
                  playbackId={playbackId}
                  isLazy={activeIndex > 0}
                  preload={activeIndex === 0 ? "auto" : "none"}
                  autoPlay={heroShouldAutoplay && activeSlide.media?.videoAutoplay !== false && !reducedMotion}
                  muted
                  loop
                  playsInline
                  poster={heroPoster || heroImage}
                  style={{
                    aspectRatio: activeSlide.media?.videoAspectRatio || "16/9",
                    "--media-object-fit": activeSlide.media?.videoObjectFit || "cover"
                  }}
                />
              ) : (
                <video
                  key={heroVideo}
                  autoPlay={heroShouldAutoplay && activeSlide.media?.videoAutoplay !== false && !reducedMotion}
                  muted
                  loop
                  controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
                  disablePictureInPicture
                  disableRemotePlayback
                  playsInline
                  preload="metadata"
                  poster={heroPoster || heroImage}
                  onContextMenu={(event) => event.preventDefault()}
                >
                  <source src={heroVideo} />
                </video>
              )
            ) : heroImage ? (
              <img src={heroImage} alt={activeSlide.media?.altText || activeSlide.headline} />
            ) : (
              <div className="hero-media-empty" aria-hidden="true" />
            )}
          </div>
        </aside>
      </div>

      <div className="container hero-controls">
        <div className="hero-arrows">
          <button type="button" onClick={previousSlide} aria-label="Previous hero slide">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={nextSlide} aria-label="Next hero slide">
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setUserPaused((value) => !value)}
            aria-label={userPaused || reducedMotion ? "Resume hero slides" : "Pause hero slides"}
          >
            {userPaused || reducedMotion ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
          </button>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={slide.headline}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show slide ${index + 1}: ${slide.headline}`}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => showSlide(index)}
            >
              <span>{slide.navLabel || String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="hero-progress" aria-hidden="true">
        <span
          key={`${activeIndex}-${isPaused}`}
          className={isPaused ? "is-paused" : ""}
          style={{ animationDuration: `${ROTATION_MS}ms` }}
        />
      </div>
    </section>
  );
}
