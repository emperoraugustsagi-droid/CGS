import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, ContactBand, Eyebrow, PageIntro, PageShell, SectionHeading } from "../../components/page-shell";
import { activities } from "../site-data";

export const metadata: Metadata = {
  title: "Activity",
  description: "Explore documented Centre for Gender Studies workshops and institutional activities.",
};

export default function ActivityPage() {
  return <PageShell>
    <PageIntro eyebrow="Activity at CGS" title="A Centre that convenes people around serious questions.">
      <p>Research becomes more useful when people have places to meet, test ideas, share evidence and listen to different experiences.</p>
      <p>Explore the Centre’s supplied activity records below. Links open the original documentation folders.</p>
    </PageIntro>
    <section className="section page-section" aria-labelledby="activity-records-title"><div className="container"><SectionHeading eyebrow="Documented activity" title="Scholarship in conversation." id="activity-records-title" single /><div className="activity-card-grid">{activities.map((activity) => <a className="activity-card" href={activity.href} target="_blank" rel="noreferrer" key={activity.title}><figure><Image src={activity.image} alt="" fill sizes="(max-width: 820px) 100vw, 50vw" /></figure><div><span>{activity.type}</span><h3>{activity.title}</h3><p>{activity.description}</p><Arrow diagonal /></div></a>)}</div></div></section>
    <section className="section page-section page-section--paper" aria-labelledby="future-title"><div className="container page-grid page-grid--wide"><div><Eyebrow>Keep exploring</Eyebrow><h2 id="future-title">More activity will follow as it is documented.</h2></div><div className="prose"><p>This page intentionally presents only activity records supplied to the Centre’s website project. It does not invent dates, events or claims that have not yet been verified.</p></div></div></section>
    <ContactBand title="Share an activity with CGS" text="Contact the Centre with a verified event, workshop or institutional record for consideration." />
  </PageShell>;
}
