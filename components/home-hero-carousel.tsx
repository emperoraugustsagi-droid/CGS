"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./page-shell";

const slides = [
  {
    eyebrow: "Research at CGS",
    title: [<>Researching gender.</>, <>Understanding society.</>, <>Informing <em>change.</em></>],
    summary: "We examine how gender shapes institutions, opportunity and everyday life, then connect rigorous scholarship with teaching, policy and public engagement.",
    mobileSummary: "Research, teaching and public engagement connecting gender scholarship to real life.",
    image: "/assets/cgs-research-workshop.jpg",
    alt: "Participants at a Centre for Gender Studies research workshop gathered around a conference table",
    objectPosition: "center 48%",
    primary: { label: "Explore research", href: "/research" },
    secondary: { label: "Study at CGS", href: "/programmes" },
    control: "Research",
  },
  {
    eyebrow: "Institutional leadership",
    title: [<>Building dialogue.</>, <>Strengthening institutions.</>, <>Shaping <em>practice.</em></>],
    summary: "CGS brings scholars, university leadership and partners into serious conversation around evidence, policy, teaching and institutional change.",
    mobileSummary: "Scholarship and institutional dialogue focused on evidence, policy and change.",
    image: "/assets/cgs-advisory-group.jpg",
    alt: "Members of the CGS academic and advisory community gathered after a Centre meeting",
    objectPosition: "center 42%",
    primary: { label: "Meet the Centre", href: "/about" },
    secondary: { label: "Recent activity", href: "/activity" },
    control: "Leadership",
  },
  {
    eyebrow: "Public engagement",
    title: [<>Knowledge in public life.</>, <>Community, advocacy,</>, <>and <em>action.</em></>],
    summary: "The Centre connects research with public engagement, bringing gender scholarship into conversation with communities, practitioners and wider society.",
    mobileSummary: "Gender scholarship brought into conversation with communities and public life.",
    image: "/assets/cgs-awareness-campaign.jpg",
    alt: "Women taking part in a gender awareness and survivor support campaign",
    objectPosition: "center 38%",
    primary: { label: "Explore activity", href: "/activity" },
    secondary: { label: "Contact CGS", href: "/contact" },
    control: "Engagement",
  },
];

function PauseIcon({ paused }: { paused: boolean }) {
  return paused ? (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5 14 10l-7 4.5v-9Z" /></svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6.5 5.5v9M13.5 5.5v9" /></svg>
  );
}

export function HomeHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (manualPaused || interactionPaused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [manualPaused, interactionPaused, reducedMotion]);

  return (
    <div
      className="container hero__layout hero-carousel"
      aria-roledescription="carousel"
      aria-label="Centre for Gender Studies stories"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={() => setInteractionPaused(false)}
    >
      {slides.map((slide, index) => {
        const active = index === activeIndex;
        return (
          <article
            className={`hero-carousel__slide${active ? " is-active" : ""}`}
            aria-hidden={!active}
            key={slide.control}
          >
            <div className="hero__copy">
              <p className="eyebrow eyebrow--light">{slide.eyebrow}</p>
              <h1 id={index === 0 ? "hero-title" : `hero-title-${index}`}>
                {slide.title.map((line, lineIndex) => <span key={lineIndex}>{line}</span>)}
              </h1>
              <p>
                <span className="hero__summary-desktop">{slide.summary}</span>
                <span className="hero__summary-mobile">{slide.mobileSummary}</span>
              </p>
              <div className="hero__actions">
                <Link className="button button--accent" href={slide.primary.href}>{slide.primary.label} <Arrow /></Link>
                <Link className="text-link text-link--light" href={slide.secondary.href}>{slide.secondary.label} <Arrow /></Link>
              </div>
            </div>
            <figure className="hero__media">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                quality={88}
                style={{ objectFit: "cover", objectPosition: slide.objectPosition }}
              />
            </figure>
          </article>
        );
      })}

      <div className="hero-carousel__controls" aria-label="Choose a hero story">
        <button
          className="hero-carousel__pause"
          type="button"
          aria-label={manualPaused ? "Play hero stories" : "Pause hero stories"}
          onClick={() => setManualPaused((current) => !current)}
        >
          <PauseIcon paused={manualPaused} />
        </button>
        {slides.map((slide, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            aria-label={`Show slide ${index + 1}: ${slide.control}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            key={slide.control}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{slide.control}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
