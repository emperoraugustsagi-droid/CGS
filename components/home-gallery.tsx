"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./page-shell";

const galleryItems = [
  {
    src: "/assets/WhatsApp Image 2026-09-24 at 1.36.45 PM (1).jpeg",
    alt: "Participants seated in a university auditorium during a CGS-related institutional session",
    label: "Academic community",
    title: "Learning in shared spaces",
    position: "center 48%",
  },
  {
    src: "/assets/WhatsApp Image 2026-09-24 at 1.36.46 PM (2).jpeg",
    alt: "A facilitator addressing participants in a university auditorium",
    label: "Knowledge exchange",
    title: "Ideas carried into the room",
    position: "center 46%",
  },
  {
    src: "/assets/WhatsApp Image 2026-09-24 at 1.36.46 PM (3).jpeg",
    alt: "Two participants sharing a warm moment during an institutional gathering",
    label: "Community",
    title: "Connection beyond the programme",
    position: "center 40%",
  },
  {
    src: "/assets/WhatsApp Image 2026-09-24 at 1.36.47 PM.jpeg",
    alt: "Two participants standing together during a university programme",
    label: "Participation",
    title: "People at the centre of the work",
    position: "center 38%",
  },
  {
    src: "/assets/WhatsApp Image 2026-09-24 at 1.36.47 PM (3).jpeg",
    alt: "Participants arriving together at a university venue",
    label: "Institutional life",
    title: "Showing up for the conversation",
    position: "center 42%",
  },
  {
    src: "/assets/WhatsApp Image 2026-09-24 at 1.36.48 PM.jpeg",
    alt: "Participants walking into a university programme venue",
    label: "Engagement",
    title: "A community in motion",
    position: "center 44%",
  },
  {
    src: "/assets/WhatsApp Image 2026-08-04 at 2.03.57 PM (1).jpeg",
    alt: "A group of participants gathered for a university training session",
    label: "Collective learning",
    title: "Learning is built together",
    position: "center 42%",
  },
  {
    src: "/assets/WhatsApp Image 2026-08-04 at 2.08.14 PM.jpeg",
    alt: "Academic portrait of a member of the university community",
    label: "People of CGS",
    title: "Scholarship has a human face",
    position: "center 22%",
  },
  {
    src: "/assets/WhatsApp Image 2026-08-04 at 2.08.15 PM.jpeg",
    alt: "Academic portrait of a member of the university community",
    label: "Academic community",
    title: "People who carry the work forward",
    position: "center 22%",
  },
  {
    src: "/assets/WhatsApp Image 2026-08-04 at 2.03.38 PM.jpeg",
    alt: "A presenter addressing participants during a university learning session",
    label: "Public engagement",
    title: "Ideas shared in public",
    position: "center 46%",
  },
] as const;

export function HomeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [railIndex, setRailIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const interactionTimerRef = useRef<number | null>(null);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    const firstCard = rail.querySelector<HTMLElement>(".home-gallery__card");
    if (!firstCard) return;

    const styles = window.getComputedStyle(rail);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    const step = firstCard.getBoundingClientRect().width + gap;

    rail.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const updateRailIndex = () => {
    const rail = railRef.current;
    if (!rail) return;

    const cards = Array.from(
      rail.querySelectorAll<HTMLElement>(".home-gallery__card"),
    );
    if (!cards.length) return;

    const railLeft = rail.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - railLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setRailIndex(closestIndex);
  };

  const pauseForInteraction = () => {
    setIsInteracting(true);

    if (interactionTimerRef.current !== null) {
      window.clearTimeout(interactionTimerRef.current);
    }
  };

  const resumeAfterInteraction = () => {
    if (interactionTimerRef.current !== null) {
      window.clearTimeout(interactionTimerRef.current);
    }

    interactionTimerRef.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, 2200);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || activeIndex !== null || isAutoPaused || isInteracting) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const advance = () => {
      if (document.hidden) return;

      const firstCard = rail.querySelector<HTMLElement>(".home-gallery__card");
      if (!firstCard) return;

      const styles = window.getComputedStyle(rail);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
      const step = firstCard.getBoundingClientRect().width + gap;
      const nearEnd =
        rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - step * 0.45;

      if (nearEnd) {
        rail.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        rail.scrollBy({ left: step, behavior: "smooth" });
      }
    };

    const interval = window.setInterval(advance, 3200);

    return () => window.clearInterval(interval);
  }, [activeIndex, isAutoPaused, isInteracting]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % galleryItems.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? galleryItems.length - 1
            : (current - 1 + galleryItems.length) % galleryItems.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  const active = activeIndex === null ? null : galleryItems[activeIndex];

  return (
    <>
      <section className="home-gallery home-gallery--rail" aria-labelledby="home-gallery-title">
        <div className="container home-gallery__heading">
          <div>
            <p className="eyebrow">Inside CGS</p>
            <h2 id="home-gallery-title">
              Moments of learning, dialogue <em>and community.</em>
            </h2>
          </div>
          <div className="home-gallery__intro">
            <p>
              A visual record of the people, conversations and activities that
              bring the Centre&apos;s work to life.
            </p>
            <Link className="text-link" href="/activity">
              Explore documented activity <Arrow diagonal />
            </Link>
          </div>
        </div>

        <div className="container home-gallery__rail-shell">
          <div className="home-gallery__toolbar" aria-label="Gallery controls">
            <div className="home-gallery__progress" aria-hidden="true">
              <span
                style={{
                  width: `${((railIndex + 1) / galleryItems.length) * 100}%`,
                }}
              />
            </div>
            <span className="home-gallery__count">
              {String(railIndex + 1).padStart(2, "0")} /{" "}
              {String(galleryItems.length).padStart(2, "0")}
            </span>
            <div className="home-gallery__controls">
              <button
                className="home-gallery__autoplay"
                type="button"
                onClick={() => setIsAutoPaused((paused) => !paused)}
                aria-label={isAutoPaused ? "Play gallery slideshow" : "Pause gallery slideshow"}
                aria-pressed={isAutoPaused}
              >
                {isAutoPaused ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="m9 7 8 5-8 5Z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 7v10M15 7v10" />
                  </svg>
                )}
              </button>
              <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous gallery images">
                <span className="home-gallery__control-icon home-gallery__control-icon--prev" aria-hidden="true">
                  <Arrow />
                </span>
              </button>
              <button type="button" onClick={() => scrollRail(1)} aria-label="Next gallery images">
                <span className="home-gallery__control-icon" aria-hidden="true">
                  <Arrow />
                </span>
              </button>
            </div>
          </div>

          <div
            className="home-gallery__track"
            ref={railRef}
            onScroll={updateRailIndex}
            onMouseEnter={pauseForInteraction}
            onMouseLeave={resumeAfterInteraction}
            onFocusCapture={pauseForInteraction}
            onBlurCapture={resumeAfterInteraction}
            onPointerDown={pauseForInteraction}
            onPointerUp={resumeAfterInteraction}
            onPointerCancel={resumeAfterInteraction}
            aria-label="CGS photo gallery"
            aria-roledescription="carousel"
          >
            {galleryItems.map((item, index) => (
              <button
                className="home-gallery__card"
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open image ${index + 1}: ${item.title}`}
                key={item.src}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 620px) 82vw, (max-width: 1024px) 44vw, 34vw"
                  quality={86}
                  style={{ objectFit: "cover", objectPosition: item.position }}
                />
                <span className="home-gallery__shade" />
                <span className="home-gallery__caption">
                  <small>{item.label}</small>
                  <strong>{item.title}</strong>
                </span>
                <span className="home-gallery__expand" aria-hidden="true">
                  <Arrow diagonal />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active ? (
        <div
          className="gallery-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div
            className="gallery-lightbox__dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            tabIndex={-1}
          >
            <button
              className="gallery-lightbox__close"
              type="button"
              aria-label="Close gallery"
              onClick={() => setActiveIndex(null)}
            >
              ×
            </button>

            <div className="gallery-lightbox__media">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="96vw"
                quality={92}
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="gallery-lightbox__footer">
              <div>
                <small>{active.label}</small>
                <strong>{active.title}</strong>
              </div>
              <span>
                {String((activeIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                {String(galleryItems.length).padStart(2, "0")}
              </span>
            </div>

            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              type="button"
              aria-label="Previous image"
              onClick={() =>
                setActiveIndex((current) =>
                  current === null
                    ? galleryItems.length - 1
                    : (current - 1 + galleryItems.length) % galleryItems.length,
                )
              }
            >
              <span className="gallery-lightbox__nav-icon gallery-lightbox__nav-icon--prev" aria-hidden="true">
                <Arrow />
              </span>
            </button>
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              type="button"
              aria-label="Next image"
              onClick={() =>
                setActiveIndex((current) =>
                  current === null ? 0 : (current + 1) % galleryItems.length,
                )
              }
            >
              <span className="gallery-lightbox__nav-icon" aria-hidden="true">
                <Arrow />
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
