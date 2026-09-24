"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./page-shell";
import { EventCountdown } from "./event-countdown";

type EventSpotlightProps = {
  title: string;
  theme: string;
  dateLabel: string;
  venue: string;
  abstractDeadline: string;
  earlyBirdDeadline: string;
  website: string;
  countdownTarget: string;
};

const SESSION_KEY = "cgs-conference-spotlight-seen";

export function EventSpotlightPopup({
  title,
  theme,
  dateLabel,
  venue,
  abstractDeadline,
  earlyBirdDeadline,
  website,
  countdownTarget,
}: EventSpotlightProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY) === "1") return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      window.sessionStorage.setItem(SESSION_KEY, "1");
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    window.setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="event-spotlight"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div
        ref={dialogRef}
        className="event-spotlight__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-spotlight-title"
        tabIndex={-1}
      >
        <button
          className="event-spotlight__close"
          type="button"
          aria-label="Close conference announcement"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div className="event-spotlight__date" aria-label={`Conference dates ${dateLabel}`}>
          <span>04–07</span>
          <strong>NOV</strong>
          <small>2026</small>
        </div>

        <div className="event-spotlight__content">
          <p className="event-spotlight__eyebrow">Upcoming at CGS · International conference</p>
          <h2 id="event-spotlight-title">{title}</h2>
          <p className="event-spotlight__theme">{theme}</p>

          <EventCountdown
            target={countdownTarget}
            className="event-countdown--spotlight"
          />

          <div className="event-spotlight__facts">
            <div>
              <span>Deadlines</span>
              <strong>Abstracts · {abstractDeadline}</strong>
              <small>Early bird · {earlyBirdDeadline}</small>
            </div>
            <div>
              <span>Venue</span>
              <strong>{venue}</strong>
            </div>
          </div>

          <div className="event-spotlight__actions">
            <a
              className="button button--accent"
              href={website}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Visit conference website <Arrow />
            </a>
            <Link className="text-link" href="/events" onClick={() => setOpen(false)}>
              View event details <Arrow diagonal />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
