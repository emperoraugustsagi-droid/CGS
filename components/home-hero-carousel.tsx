"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./page-shell";

const slides = [
  {
    eyebrow: "University leadership",
    title: [<>Professor Sa’adatu</>, <>Hassan <em>Liman.</em></>],
    role: "Vice-Chancellor · Nasarawa State University, Keffi",
    summary: "The Centre for Gender Studies is part of NSUK’s academic community, connecting gender scholarship with the University’s wider teaching, research and public-service mission.",
    mobileSummary: "Vice-Chancellor of NSUK, the university within which the Centre for Gender Studies is situated.",
    image: "/assets/nsuk-vice-chancellor-saadatu-liman.jpeg",
    alt: "Official portrait used for the Vice-Chancellor of Nasarawa State University, Keffi",
    objectPosition: "72% 28%",
    primary: { label: "Visit NSUK", href: "https://nsuk.edu.ng/" },
    secondary: { label: "About the Centre", href: "/about" },
    control: "Vice-Chancellor",
  },
  {
    eyebrow: "Academic leadership",
    title: [<>Professor Maikano</>, <>Muhammad <em>Ari.</em></>],
    role: "Deputy Vice-Chancellor (Academic) · NSUK",
    summary: "CGS programmes, research and academic development sit within the University’s broader academic structure and standards.",
    mobileSummary: "Deputy Vice-Chancellor (Academic), connecting Centre activity to the wider academic mission of NSUK.",
    image: "https://spgs.nsuk.edu.ng/wp-content/uploads/2025/09/543107585_1188099703353420_1573205616288366401_n-768x548.jpg",
    alt: "NSUK academic leadership during an official School of Postgraduate Studies courtesy visit",
    objectPosition: "55% 42%",
    primary: { label: "About the Centre", href: "/about" },
    secondary: { label: "Study at CGS", href: "/programmes" },
    control: "DVC Academic",
  },
  {
    eyebrow: "Centre leadership",
    title: [<>Dr. Comfort</>, <>Adokwe-<em>Obed.</em></>],
    role: "Ag. Director · Centre for Gender Studies, NSUK",
    summary: "The Centre’s leadership advances teaching, research and public engagement as part of Nasarawa State University, Keffi.",
    mobileSummary: "Ag. Director of the Centre for Gender Studies, advancing the Centre’s work within NSUK.",
    image: "/assets/cgs-director-comfort-adokwe.jpeg",
    alt: "Dr. Comfort Adokwe-Obed, Acting Director of the Centre for Gender Studies",
    objectPosition: "72% 24%",
    primary: { label: "Meet the Centre", href: "/about#leadership" },
    secondary: { label: "Contact CGS", href: "/contact" },
    control: "CGS Director",
  },
] as const;

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
      aria-label="NSUK and Centre for Gender Studies leadership"
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
              <p className="hero__affiliation">An academic centre of Nasarawa State University, Keffi</p>
              <p className="eyebrow eyebrow--light">{slide.eyebrow}</p>
              <h1 id={index === 0 ? "hero-title" : `hero-title-${index}`}>
                {slide.title.map((line, lineIndex) => <span key={lineIndex}>{line}</span>)}
              </h1>
              <p className="hero__role">{slide.role}</p>
              <p className="hero__summary">
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

      <div className="hero-carousel__controls" aria-label="Choose a leadership profile">
        <button
          className="hero-carousel__pause"
          type="button"
          aria-label={manualPaused ? "Play leadership profiles" : "Pause leadership profiles"}
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
