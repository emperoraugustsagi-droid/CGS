import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Eyebrow, PageIntro, PageShell, SectionHeading } from "../../components/page-shell";
import { site } from "../site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Centre for Gender Studies at Nasarawa State University, Keffi, about programmes, research, events, training and public dialogue.",
};

const enquiries = [
  {
    label: "Study",
    title: "Programme guidance and next steps",
    text: "Review the current study pathways, then contact CGS for the admissions guidance that applies to you.",
    href: "/programmes",
    action: "Explore programmes",
    subject: "Programme guidance",
  },
  {
    label: "Research",
    title: "Research, collaboration and supervision",
    text: "Explore the Centre’s areas of inquiry before starting a conversation about research or collaboration.",
    href: "/research",
    action: "Explore research",
    subject: "Research enquiry",
  },
  {
    label: "Events",
    title: "Conference and event participation",
    text: "See upcoming CGS events, deadlines and participation information before requesting further details.",
    href: "/events",
    action: "See upcoming events",
    subject: "Events and conference enquiry",
  },
  {
    label: "Training",
    title: "Capacity development and professional learning",
    text: "Contact the Centre about training needs, professional learning or institutional capacity development.",
    subject: "Training and capacity development",
  },
  {
    label: "Dialogue",
    title: "Institutional and public engagement",
    text: "Start a conversation about policy, public dialogue or an institutional engagement relevant to CGS.",
    subject: "Policy and public dialogue",
  },
  {
    label: "General",
    title: "Something else",
    text: "If your question does not fit one of the routes above, send the Centre a general enquiry.",
    subject: "General CGS enquiry",
  },
] as const;

export default function ContactPage() {
  return <PageShell>
    <div className="contact-page">
      <PageIntro eyebrow="Contact CGS" title="Start with the question you are carrying.">
        <p>Some enquiries need information first; others need a direct conversation. Choose the route closest to what you are trying to do.</p>
      </PageIntro>

      <section className="section page-visual contact-welcome" aria-labelledby="contact-visual-title">
        <div className="container page-visual__grid page-visual__grid--reverse">
          <div className="page-visual__copy">
            <Eyebrow>A first conversation</Eyebrow>
            <h2 id="contact-visual-title">Bring the question. Start with the most useful route.</h2>
            <p>Programme, research and event questions often have useful context elsewhere on the website. For training, institutional dialogue or general enquiries, you can contact the Centre directly.</p>
          </div>
          <figure className="page-visual__media">
            <Image src="/assets/WhatsApp Image 2026-09-24 at 1.36.48 PM (1).jpeg" alt="Two participants in conversation during a university gathering" fill sizes="(max-width: 820px) 100vw, 55vw" />
            <figcaption>Conversation begins with listening</figcaption>
          </figure>
        </div>
      </section>

      <section className="section page-section contact-router" aria-labelledby="contact-router-title">
        <div className="container">
          <SectionHeading eyebrow="Choose your enquiry" title="Find the right starting point." id="contact-router-title">
            Use the website for context where it can help, then contact CGS when you need current or specific guidance.
          </SectionHeading>
          <div className="contact-route-grid">
            {enquiries.map((item, index) => <article key={item.label}>
              <span className="index">0{index + 1}</span>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="contact-route-grid__actions">
                {"href" in item && item.href ? <Link className="text-link" href={item.href}>{item.action} <Arrow diagonal /></Link> : null}
                <a className="text-link" href={`mailto:${site.email}?subject=${encodeURIComponent(item.subject)}`}>Email CGS <Arrow diagonal /></a>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section page-section page-section--paper contact-direct" aria-labelledby="contact-direct-title">
        <div className="container contact-page-grid">
          <div>
            <Eyebrow>Direct contact</Eyebrow>
            <h2 id="contact-direct-title">A direct line to the Centre.</h2>
            <p className="contact-direct__intro">Use email for a written enquiry, or call the Centre using the supplied contact numbers.</p>
          </div>
          <address className="contact-details contact-details--expanded">
            <div><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div><small>Phone</small>{site.phones.map((phone) => <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>{phone}</a>)}</div>
            <div><small>Office</small><span>{site.address}</span></div>
          </address>
        </div>
      </section>

      <section className="section page-section contact-message" aria-labelledby="contact-message-title">
        <div className="container page-grid page-grid--wide">
          <div>
            <Eyebrow>Help us understand your enquiry</Eyebrow>
            <h2 id="contact-message-title">A useful first message can save a round of back-and-forth.</h2>
          </div>
          <div className="contact-message-list">
            <div><span>01</span><strong>Your name</strong><p>Tell the Centre who is making the enquiry.</p></div>
            <div><span>02</span><strong>Programme or topic</strong><p>Name the programme, research question, event or training need if you know it.</p></div>
            <div><span>03</span><strong>Organisation</strong><p>Include your institution or organisation when the enquiry is professional or collaborative.</p></div>
            <div><span>04</span><strong>What you need</strong><p>State the guidance, information or conversation you are requesting.</p></div>
          </div>
        </div>
      </section>

      <section className="section page-section contact-current" aria-labelledby="contact-current-title">
        <div className="container page-grid page-grid--wide">
          <div>
            <Eyebrow>Information changes</Eyebrow>
            <h2 id="contact-current-title">Confirm current details before acting.</h2>
          </div>
          <div className="prose">
            <p>Admissions requirements, deadlines, programme arrangements, event details and schedules can change. The Centre should confirm information that affects an application, registration or institutional engagement.</p>
            <a className="button button--accent" href={`mailto:${site.email}?subject=CGS%20enquiry`}>Email the Centre <Arrow /></a>
          </div>
        </div>
      </section>
    </div>
  </PageShell>;
}
