import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageIntro, PageShell } from "../../components/page-shell";
import { events, site } from "../site-data";

export const metadata: Metadata = {
  title: "Events",
  description: "Explore upcoming events from the Centre for Gender Studies at Nasarawa State University, Keffi, including the First CGS International Conference.",
};

export default function EventsPage() {
  const featuredEvent = events[0];

  return <PageShell>
    <PageIntro eyebrow="Events at CGS" title="Where scholarship becomes a shared experience.">
      <p>Conferences, conversations and academic gatherings create space for ideas to be tested, challenged and carried into wider public life.</p>
      <p>Explore what is coming next at the Centre and contact CGS for the latest registration guidance.</p>
    </PageIntro>

    <section className="section event-feature" aria-labelledby="featured-event-title">
      <div className="container event-feature__grid">
        <div className="event-feature__date" aria-label={featuredEvent.dateLabel}>
          <span>NOV</span>
          <strong>03</strong>
          <small>→ 08 · 2026</small>
        </div>
        <div className="event-feature__content">
          <Eyebrow>Upcoming · {featuredEvent.type}</Eyebrow>
          <h2 id="featured-event-title">{featuredEvent.title}</h2>
          <p>{featuredEvent.summary}</p>
          <dl className="event-facts">
            <div><dt>Conference dates</dt><dd>{featuredEvent.dateLabel}</dd></div>
            <div><dt>Registration closes</dt><dd>{featuredEvent.registrationDeadline}</dd></div>
            <div><dt>Status</dt><dd>{featuredEvent.status}</dd></div>
          </dl>
          <div className="event-feature__actions">
            <a className="button button--wine" href={featuredEvent.registrationHref}>Register / ask for details <Arrow /></a>
            <Link className="text-link" href="/contact">Contact CGS <Arrow diagonal /></Link>
          </div>
          <p className="event-feature__note">Registration details, participation requirements and any further conference information should be confirmed directly with the Centre.</p>
        </div>
      </div>
    </section>

    <section className="section page-visual page-visual--paper" aria-labelledby="events-context-title">
      <div className="container page-visual__grid">
        <figure className="page-visual__media">
          <Image src="/assets/cgs-speaker-podium.png" alt="A speaker addressing an audience during a CGS academic event" fill sizes="(max-width: 820px) 100vw, 55vw" />
          <figcaption>Academic exchange at CGS</figcaption>
        </figure>
        <div className="page-visual__copy">
          <Eyebrow>Why events matter</Eyebrow>
          <h2 id="events-context-title">Research grows stronger when people meet around the questions.</h2>
          <p>CGS events create opportunities for researchers, students, practitioners and institutions to exchange knowledge, challenge assumptions and connect academic work to public concerns.</p>
          <p>The Events page looks forward. For documented workshops and institutional activities that have already taken place, visit Activity.</p>
          <Link className="text-link" href="/activity">Explore CGS activity <Arrow diagonal /></Link>
        </div>
      </div>
    </section>

    <section className="section page-section" aria-labelledby="event-guidance-title">
      <div className="container page-grid page-grid--wide">
        <div><Eyebrow>Before you register</Eyebrow><h2 id="event-guidance-title">Confirm the latest conference information with the Centre.</h2></div>
        <div className="prose">
          <p>The conference is scheduled for {featuredEvent.dateLabel}, with registration closing on {featuredEvent.registrationDeadline}. Because programme details and participation guidance can change, contact CGS for the current registration instructions.</p>
          <a className="text-link" href={featuredEvent.registrationHref}>Ask about conference registration <Arrow diagonal /></a>
        </div>
      </div>
    </section>

    <ContactBand title="Planning to attend?" text={`Registration for the First CGS International Conference closes ${featuredEvent.registrationDeadline}. Contact the Centre for current participation details.`} />
  </PageShell>;
}
