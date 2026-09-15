import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, Eyebrow, PageIntro, PageShell } from "../../components/page-shell";
import { site } from "../site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Centre for Gender Studies at Nasarawa State University, Keffi, about programmes, research, training and public dialogue.",
};

const enquiries = [
  ["Study", "Programme guidance and next steps", "Programme guidance"],
  ["Research", "Collaboration, supervision and evidence", "Research enquiry"],
  ["Training", "Capacity development and professional learning", "Training and capacity development"],
  ["Dialogue", "Policy, institutions and public engagement", "Policy and public dialogue"],
] as const;

export default function ContactPage() {
  return <PageShell>
    <PageIntro eyebrow="Contact CGS" title="Start with the question you are carrying.">
      <p>Whether you are considering a programme, exploring a research collaboration or looking for a partner in public dialogue, the Centre is ready to hear from you.</p>
    </PageIntro>
    <section className="section page-visual page-visual--quiet" aria-labelledby="contact-visual-title">
      <div className="container page-visual__grid page-visual__grid--reverse">
        <div className="page-visual__copy"><Eyebrow>A first conversation</Eyebrow><h2 id="contact-visual-title">Bring the question. We will find the right starting point.</h2><p>Some enquiries begin with a clear plan. Others begin with a question that is still taking shape. Both are welcome.</p></div>
        <figure className="page-visual__media"><Image src="/assets/cgs-community-portrait.jpeg" alt="A member of the CGS community in a welcoming interior" fill sizes="(max-width: 820px) 100vw, 55vw" /><figcaption>Conversation begins with listening</figcaption></figure>
      </div>
    </section>
    <section className="section page-section" aria-labelledby="contact-title"><div className="container contact-page-grid"><div><Eyebrow>Find us</Eyebrow><h2 id="contact-title">A direct line to the Centre.</h2><address className="contact-details"><span>{site.address}</span><a href={`mailto:${site.email}`}>{site.email}</a>{site.phones.map((phone) => <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>{phone}</a>)}</address></div><div className="contact-options">{enquiries.map(([label, title, subject]) => <a href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`} key={label}><span>{label}</span><strong>{title}</strong><Arrow diagonal /></a>)}</div></div></section>
    <section className="section page-section page-section--paper" aria-labelledby="contact-note-title"><div className="container page-grid page-grid--wide"><div><Eyebrow>A note on information</Eyebrow><h2 id="contact-note-title">Ask us for the current details.</h2></div><div className="prose"><p>Admissions requirements, dates and programme arrangements can change. The Centre’s team can provide the most current guidance for your enquiry.</p><a className="text-link" href={`mailto:${site.email}?subject=CGS%20enquiry`}>Email the Centre <Arrow diagonal /></a></div></div></section>
  </PageShell>;
}
