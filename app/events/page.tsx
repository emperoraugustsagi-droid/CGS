import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, Eyebrow, PageIntro, PageShell, SectionHeading } from "../../components/page-shell";
import { events } from "../site-data";
import { siteUrl } from "../../lib/site-config";

export const metadata: Metadata = {
  title: "Events",
  description: "Explore upcoming events from the Centre for Gender Studies at Nasarawa State University, Keffi, including the First International Gender Conference ’26.",
};

export default function EventsPage() {
  const event = events[0];
  const eventUrl = `${siteUrl}/events`;

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.theme,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Keffi",
        addressRegion: "Nasarawa State",
        addressCountry: "NG",
      },
    },
    organizer: {
      "@type": "EducationalOrganization",
      name: "Centre for Gender Studies, Nasarawa State University, Keffi",
      url: siteUrl,
    },
    url: eventUrl,
  };

  return <PageShell>
    <div className="events-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

    <PageIntro eyebrow="Events at CGS" title="Where scholarship becomes a shared experience.">
      <p>Conferences, conversations and academic gatherings create space for ideas to be tested, challenged and carried into wider public life.</p>
      <p>The Centre’s next major gathering is the First International Gender Conference ’26.</p>
    </PageIntro>

    <section className="section event-feature events-feature" aria-labelledby="featured-event-title">
      <div className="container event-feature__grid">
        <div className="event-feature__date" aria-label={event.dateLabel}>
          <span>NOV</span>
          <strong>04</strong>
          <small>TO 07 · 2026</small>
        </div>
        <div className="event-feature__content">
          <Eyebrow>Upcoming · {event.type}</Eyebrow>
          <h2 id="featured-event-title">{event.title}</h2>
          <p className="event-theme"><strong>Conference theme:</strong> {event.theme}</p>
          <p>{event.summary}</p>
          <dl className="event-facts">
            <div><dt>Conference dates</dt><dd>{event.dateLabel}</dd></div>
            <div><dt>Venue</dt><dd>{event.venue}</dd></div>
            <div><dt>Early bird closes</dt><dd>{event.deadlines.earlyBirdRegistration}</dd></div>
          </dl>
          <div className="event-feature__actions">
            <a className="button button--accent" href={event.website} target="_blank" rel="noreferrer">Conference website <Arrow /></a>
            <a className="text-link" href={`mailto:${event.emails[0]}?subject=${encodeURIComponent("First International Gender Conference registration")}`}>Ask about registration <Arrow diagonal /></a>
          </div>
          <p className="event-feature__note">Abstract submission closes {event.deadlines.abstractSubmission}. Standard registration closes {event.deadlines.standardRegistration}.</p>
        </div>
      </div>
    </section>

    <section className="section page-section page-section--paper events-dates" aria-labelledby="event-dates-title">
      <div className="container page-grid page-grid--wide">
        <div>
          <Eyebrow>Important dates</Eyebrow>
          <h2 id="event-dates-title">From abstract submission to conference week.</h2>
        </div>
        <div className="event-deadlines">
          <div><span>01</span><strong>30 Sep 2026</strong><small>Abstract submission deadline</small></div>
          <div><span>02</span><strong>07 Oct 2026</strong><small>Notification of acceptance</small></div>
          <div><span>03</span><strong>10 Oct 2026</strong><small>Early bird registration deadline</small></div>
          <div><span>04</span><strong>21 Oct 2026</strong><small>Full paper submission deadline</small></div>
          <div><span>05</span><strong>28 Oct 2026</strong><small>Standard registration deadline</small></div>
          <div><span>06</span><strong>4–7 Nov 2026</strong><small>Conference dates</small></div>
        </div>
      </div>
    </section>

    <section className="section page-visual events-special" aria-labelledby="event-feature-title">
      <div className="container page-visual__grid">
        <figure className="page-visual__media">
          <Image src="/assets/cgs-speaker-podium.png" alt="A speaker addressing an audience during a CGS academic event" fill sizes="(max-width: 820px) 100vw, 55vw" />
          <figcaption>Academic exchange at CGS</figcaption>
        </figure>
        <div className="page-visual__copy">
          <Eyebrow>Special feature</Eyebrow>
          <h2 id="event-feature-title">A conference built around ideas, dialogue and inclusion.</h2>
          <p>The conference includes a special book launch, <strong>“{event.specialFeature.title}”</strong>, by His Excellency, Engr. Abdullahi A. Sule.</p>
          <p>Its programme brings together public leadership, academic inquiry and conversations around gender, crisis and resilience.</p>
        </div>
      </div>
    </section>

    <section className="section page-section events-leadership" aria-labelledby="event-guests-title">
      <div className="container">
        <SectionHeading eyebrow="Conference leadership" title="The people convening the conversation." id="event-guests-title" single />
        <div className="event-people">
          {event.programmeLeads.map(([role, name, detail], index) => <article key={name}>
            <span className="index">0{index + 1}</span>
            <small>{role}</small>
            <h3>{name}</h3>
            <p>{detail}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section event-subthemes events-subthemes" aria-labelledby="event-subthemes-title">
      <div className="container">
        <SectionHeading eyebrow="Conference subthemes" title="Twelve lenses on gender, crisis and resilience." id="event-subthemes-title" light single />
        <div className="event-subtheme-grid">
          {event.subthemes.map((subtheme, index) => <article key={subtheme}><span className="index">{String(index + 1).padStart(2, "0")}</span><h3>{subtheme}</h3></article>)}
        </div>
      </div>
    </section>

    <section className="section page-section page-section--paper events-registration" aria-labelledby="registration-title">
      <div className="container">
        <SectionHeading eyebrow="Conference registration" title="Choose the category that matches how you will participate." id="registration-title">Early-bird fees apply through {event.deadlines.earlyBirdRegistration}. Standard rates apply after that date.</SectionHeading>
        <div className="event-table-wrap">
          <table className="event-table">
            <thead><tr><th>Category</th><th>Early bird</th><th>Standard</th></tr></thead>
            <tbody>{event.registrationFees.map(([category, early, standard]) => <tr key={category}><th scope="row">{category}</th><td>{early}</td><td>{standard}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="event-registration-note">
          <strong>Additional co-author fees</strong>
          <p>For jointly authored papers, the presenting/first author pays the full registration fee above. Additional listed co-authors pay the following fees:</p>
          <div className="event-coauthors">{event.coAuthorFees.map(([position, fee]) => <span key={position}><small>{position}</small><strong>{fee}</strong></span>)}</div>
        </div>
      </div>
    </section>

    <section className="section page-section events-payment-section" aria-labelledby="payment-title">
      <div className="container event-contact-grid">
        <div>
          <Eyebrow>Payment details</Eyebrow>
          <h2 id="payment-title">Register using the conference payment details.</h2>
          <dl className="event-payment">
            <div><dt>Bank</dt><dd>{event.payment.bank}</dd></div>
            <div><dt>Account name</dt><dd>{event.payment.accountName}</dd></div>
            <div><dt>Account number</dt><dd>{event.payment.accountNumber}</dd></div>
          </dl>
          <a className="button button--accent" href={event.website} target="_blank" rel="noreferrer">Open conference website <Arrow /></a>
        </div>
        <div>
          <Eyebrow>Conference contacts</Eyebrow>
          <div className="event-contacts">
            {event.contacts.map(([name, phone]) => <a href={`tel:${phone.replaceAll(" ", "")}`} key={name}><span>{name}</span><strong>{phone}</strong></a>)}
          </div>
          <div className="event-emails">
            {event.emails.map((email) => <a href={`mailto:${email}`} key={email}>{email}</a>)}
          </div>
          <p className="event-feature__note">WhatsApp and text: {event.whatsappPhones.join(" · ")}</p>
        </div>
      </div>
    </section>

    <section className="contact-band events-contact-band">
      <div className="container contact-band__inner">
        <div>
          <Eyebrow light>First International Gender Conference ’26</Eyebrow>
          <h2>Planning to attend or submit a paper?</h2>
          <p>Abstracts close {event.deadlines.abstractSubmission}. Early-bird registration closes {event.deadlines.earlyBirdRegistration}.</p>
        </div>
        <a className="button button--accent" href={event.website} target="_blank" rel="noreferrer">Conference website <Arrow /></a>
      </div>
    </section>
    </div>
  </PageShell>;
}
