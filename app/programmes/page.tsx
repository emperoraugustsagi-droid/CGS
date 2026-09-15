import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageIntro, PageShell } from "../../components/page-shell";
import { programmes, site } from "../site-data";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Explore certificate, postgraduate, master’s, M.Phil. and PhD pathways in Gender Studies at Nasarawa State University, Keffi.",
};

export default function ProgrammesPage() {
  return <PageShell>
    <PageIntro eyebrow="Study at CGS" title="Choose the level that matches your next step.">
      <p>From professional development to original doctoral research, the Centre offers six pathways into deeper gender knowledge.</p>
      <p>Admissions, duration and application requirements can change. Contact {site.name} for current guidance before making an application.</p>
    </PageIntro>
    <section className="section page-visual" aria-labelledby="programme-visual-title">
      <div className="container page-visual__grid page-visual__grid--reverse">
        <div className="page-visual__copy"><Eyebrow>Learning pathway</Eyebrow><h2 id="programme-visual-title">Build knowledge at the pace your work requires.</h2><p>CGS brings together professional learning, advanced study and research degrees so that gender analysis can meet people at different stages of their academic and working lives.</p></div>
        <figure className="page-visual__media"><Image src="/assets/cgs-academic-event.jpeg" alt="Academic ceremony at Nasarawa State University" fill sizes="(max-width: 820px) 100vw, 55vw" /><figcaption>Learning, recognition and progression</figcaption></figure>
      </div>
    </section>
    <section className="section page-section" aria-labelledby="programme-list-title">
      <div className="container"><div className="section-heading section-heading--single"><div><Eyebrow>Programme index</Eyebrow><h2 id="programme-list-title">A complete study pathway.</h2></div></div>
        <div className="programme-list programme-list--page">{programmes.map((programme, index) => <article className="programme-row" key={programme.code}><span className="index">0{index + 1}</span><div className="programme-row__title"><strong>{programme.code}</strong><h3>{programme.title}</h3></div><div className="programme-row__detail"><span>{programme.format}</span><p>{programme.summary}</p></div><a href={`mailto:${site.email}?subject=${encodeURIComponent(`${programme.title} enquiry`)}`} aria-label={`Enquire about ${programme.title}`}>Enquire <Arrow diagonal /></a></article>)}</div>
        <div className="page-note"><p>For current admissions guidance, contact the Centre directly. The site does not publish unverified deadlines or requirements.</p><Link className="text-link" href="/contact">Ask about a programme <Arrow diagonal /></Link></div>
      </div>
    </section>
    <ContactBand title="Not sure where to begin?" text="Tell us what you want to learn or do, and the Centre can point you towards the most relevant pathway." />
  </PageShell>;
}
