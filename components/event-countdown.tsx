"use client";

import { useEffect, useMemo, useState } from "react";

type EventCountdownProps = {
  target: string;
  label?: string;
  compact?: boolean;
  className?: string;
};

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

function getRemaining(target: string): Remaining {
  const targetTime = new Date(target).getTime();
  const diff = Math.max(0, targetTime - Date.now());

  if (!Number.isFinite(targetTime) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, complete: true };
  }

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
    complete: false,
  };
}

export function EventCountdown({
  target,
  label = "Conference begins in",
  compact = false,
  className = "",
}: EventCountdownProps) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  const dateLabel = useMemo(() => {
    const date = new Date(target);
    if (Number.isNaN(date.getTime())) return "the conference";
    return new Intl.DateTimeFormat("en-NG", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Africa/Lagos",
    }).format(date);
  }, [target]);

  useEffect(() => {
    const update = () => setRemaining(getRemaining(target));
    update();

    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const values = remaining ?? {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    complete: false,
  };

  if (remaining?.complete) {
    return (
      <div className={`event-countdown event-countdown--complete ${compact ? "event-countdown--compact" : ""} ${className}`}>
        <span className="event-countdown__kicker">Conference update</span>
        <strong>The conference is underway.</strong>
      </div>
    );
  }

  const units = [
    ["Days", values.days],
    ["Hours", values.hours],
    ["Minutes", values.minutes],
    ["Seconds", values.seconds],
  ] as const;

  return (
    <div
      className={`event-countdown ${compact ? "event-countdown--compact" : ""} ${className}`}
    >
      <p className="event-countdown__sr">
        Countdown to the conference beginning on {dateLabel}.
      </p>
      <div className="event-countdown__topline" aria-hidden="true">
        <span>{label}</span>
        <i />
      </div>
      <div className="event-countdown__grid" aria-hidden="true">
        {units.map(([unit, value]) => (
          <div className="event-countdown__unit" key={unit}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
