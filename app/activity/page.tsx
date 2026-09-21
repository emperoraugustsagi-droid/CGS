import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageIntro, PageShell, SectionHeading } from "../../components/page-shell";
import { activities } from "../site-data";

export const metadata: Metadata = {
  title: "Activity",
  description: "Explore documented Centre for Gender Studies workshops and institutional activities.",
};

const mandateLinks = [
  ["Research", "See how academic questions are worked through in practice.", "/research"],
  ["Events", "See what is coming next and how to participate.", "/events"],
  ["About CGS", "Understand the Centre, its mandate and people.", "/about"],
] as const;

export default function ActivityPage() {
  const featured = activities[0];

  return <PageShell>
    <div className="activity-page">
      <PageIntro eyebrow="Activity at CGS" title="A Centre that convenes people around serious questions.">
        <p>Activity gives the Centre’s work a visible record: workshops, institutional gatherings and other documented moments where people come together around learning, inquiry and public life.</p>
        <p>This page presents only records supplied to the website project. Source folders are linked as supporting documentation rather than replacing the website experience.</p>
      </PageIntro>

      <section className="section page-visual activity-feature" aria-labelledby="activity-feature-title">
        <div className="container page-visual__grid">
          <figure className="page-visual__media">
            <Image src={featured.image} alt="Participants during a documented CGS research workshop" fill sizes="(max-width: 820px) 100vw, 55vw" />
            <figcaption>{featured.title}</figcaption>
          </figure>
          <div className="page-visual__copy">
            <Eyebrow>Featured activity</Eyebrow>
            <h2 id="activity-feature-title">{featured.title}</h2>
            <p>{featured.description}</p>
            <p>The supporting folder remains available for visitors who want to inspect the Centre-supplied documentation associated with this record.</p>
            <a className="text-link" href={featured.sourceHref} target="_blank" rel="noreferrer">Open supporting documentation <Arrow diagonal /></a>
          </div>
        </div>
      </section>

      <section className="section page-section activity-records" id="records" aria-labelledby="activity-records-title">
        <div className="container">
          <SectionHeading eyebrow="Documented activity" title="A growing record of the Centre’s work." id="activity-records-title">
            Each record stays on the CGS website first. External folders are supporting sources, not the primary experience.
          </SectionHeading>
          <div className="activity-record-list">
            {activities.map((item, index) => <article id={item.id} key={item.id}>
              <figure><Image src={item.image} alt="" fill sizes="(max-width: 820px) 100vw, 36vw" /></figure>
              <div className="activity-record-list__copy">
                <span className="index">0{index + 1}</span>
                <small>{item.type}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="text-link" href={item.sourceHref} target="_blank" rel="noreferrer">View source folder <Arrow diagonal /></a>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section page-section page-section--paper activity-context" aria-labelledby="activity-context-title">
        <div className="container page-grid page-grid--wide">
          <div>
            <Eyebrow>What activity makes visible</Eyebrow>
            <h2 id="activity-context-title">The Centre is more than a list of programmes and research themes.</h2>
          </div>
          <div className="prose">
            <p>Documented activity helps show the human and institutional side of CGS: people gathering, questions being discussed, and structures being built around the Centre’s academic work.</p>
            <p>As more verified records are supplied, this page can grow into a fuller institutional archive without inventing dates, outcomes or participation figures.</p>
          </div>
        </div>
      </section>

      <section className="section page-section activity-next" aria-labelledby="activity-next-title">
        <div className="container">
          <SectionHeading eyebrow="Continue exploring" title="Follow the work from evidence to participation." id="activity-next-title" single />
          <div className="activity-next-links">
            {mandateLinks.map(([label, text, href]) => <Link href={href} key={href}>
              <span>{label}</span><strong>{text}</strong><Arrow diagonal />
            </Link>)}
          </div>
        </div>
      </section>

      <ContactBand title="Share a verified activity with CGS" text="Contact the Centre with a documented workshop, event or institutional record for consideration on the website." />
    </div>
  </PageShell>;
}
