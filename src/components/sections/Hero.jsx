"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/common/Button";
import { heroSlides } from "@/data/siteContent";

const ROTATION_MS = 11000;

export function Hero({ slides = heroSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeSlide = useMemo(() => slides[activeIndex] || slides[0], [activeIndex, slides]);
  const isPaused = hoverPaused || userPaused || reducedMotion;
  const heroPoster = activeSlide?.media?.posterImage;
  const heroImage = activeSlide?.media?.desktopImage || heroPoster;
  const heroVideo = activeSlide?.media?.videoFileUrl || activeSlide?.media?.videoUrl;
  const showVideo = activeSlide?.media?.mediaType === "video" && heroVideo;

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

  if (!activeSlide) return null;

  return (
    <section
      className={`hero hero-theme-${activeSlide.media?.theme || "foundry"}`}
      id="home"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      aria-roledescription="carousel"
      aria-label="NFG homepage highlights"
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
          <p className="hero-sub">{activeSlide.subheadline}</p>
          {activeSlide.supportText ? <p className="hero-proof">{activeSlide.supportText}</p> : null}
          <div className="hero-actions">
            <Button href={activeSlide.primaryCta.href}>{activeSlide.primaryCta.label}</Button>
            <Button href={activeSlide.secondaryCta.href} variant="secondary" icon={ArrowRight}>
              {activeSlide.secondaryCta.label}
            </Button>
          </div>
        </div>

        <aside className="hero-media-card" aria-label="Current hero media">
          <div
            className="hero-media-frame"
            style={{
              "--media-aspect-ratio": activeSlide.media?.videoAspectRatio || "16 / 9",
              "--media-fit": activeSlide.media?.videoObjectFit || "cover"
            }}
          >
            {showVideo ? (
              <video
                key={heroVideo}
                autoPlay={activeSlide.media?.videoAutoplay !== false && !reducedMotion}
                muted
                loop
                controls
                playsInline
                preload="metadata"
                poster={heroPoster || heroImage}
              >
                <source src={heroVideo} />
              </video>
            ) : heroImage ? (
              <img src={heroImage} alt={activeSlide.media?.altText || activeSlide.headline} />
            ) : (
              <div className="hero-media-empty" aria-hidden="true" />
            )}
          </div>
        </aside>
      </div>

      <div className="container hero-feature-strip" aria-label="Slide supporting details">
        {(activeSlide.featureCards || []).map((card) => (
          <article key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
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
