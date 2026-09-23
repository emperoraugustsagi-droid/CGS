"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow } from "./page-shell";

const slides = [
  {
    src: "/assets/cgs-research-workshop.jpg",
    alt: "CGS research workshop with participants gathered around a table",
    position: "center 42%",
  },
  {
    src: "/assets/expo-panel.jpg",
    alt: "Academic panel and institutional discussion involving the CGS community",
    position: "center 45%",
  },
  {
    src: "/assets/cgs-advisory-group.jpg",
    alt: "Members of the CGS academic and advisory community gathered together",
    position: "center 45%",
  },
] as const;

export function ProgrammeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <div className="programme-showcase">
      <div
        className="programme-showcase__carousel"
        aria-roledescription="carousel"
        aria-label="CGS learning and academic activity"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="programme-showcase__slides">
          {slides.map((slide, index) => (
            <figure
              className={`programme-showcase__slide${index === activeIndex ? " is-active" : ""}`}
              aria-hidden={index !== activeIndex}
              key={slide.src}
            >
              <Image
                src={slide.src}
                alt={index === activeIndex ? slide.alt : ""}
                fill
                sizes="(max-width: 820px) 100vw, 58vw"
                quality={88}
                style={{ objectFit: "cover", objectPosition: slide.position }}
              />
            </figure>
          ))}
        </div>

        <div className="programme-showcase__controls" aria-label="Choose an image">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`Show image ${index + 1} of ${slides.length}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              key={slide.src}
            >
              <span />
            </button>
          ))}
        </div>
        <p className="programme-showcase__count" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
      </div>

      <div className="programme-showcase__content">
        <p className="eyebrow">Study pathways</p>
        <h3>See the verified programme structure.</h3>
        <p>
          Explore current postgraduate listings and Centre study offerings, then
          contact CGS for up-to-date admissions guidance.
        </p>
        <Link className="button button--accent" href="/programmes">
          View all programmes <Arrow />
        </Link>
      </div>
    </div>
  );
}
