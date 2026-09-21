import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, ContactBand, Eyebrow, PageIntro, PageShell, SectionHeading } from "../../components/page-shell";
import { researchAreas, site } from "../site-data";

export const metadata: Metadata = {
  title: "Research",
  description: "Discover the Centre for Gender Studies research focus across development, violence, leadership, health, education and governance.",
};

export default function ResearchPage() {
  return <PageShell>
    <PageIntro eyebrow="Research focus" title="Questions grounded in the realities of society.">
      <p>Our areas of inquiry reflect the ways gender intersects with development, institutions, health, education, leadership and public life.</p>
      <p>Research questions can be complex. The Centre creates space for interdisciplinary study, careful analysis and evidence that can travel into teaching, policy and dialogue.</p>
    </PageIntro>
    <section className="section page-visual page-visual--paper" aria-labelledby="research-visual-title">
      <div className="container page-visual__grid">
        <figure className="page-visual__media"><Image src="/assets/cgs-research-workshop.jpg" alt="Participants gathered around a table during a CGS research workshop" fill sizes="(max-width: 820px) 100vw, 55vw" /><figcaption>Questions worked through together</figcaption></figure>
        <div className="page-visual__copy"><Eyebrow>From question to evidence</Eyebrow><h2 id="research-visual-title">Research is a practice of attention.</h2><p>It asks us to look closely, listen carefully and stay with complexity long enough to understand what is really happening.</p><p>That is the spirit behind the Centre’s research focus.</p></div>
      </div>
    </section>
    <section className="section research research--page" aria-labelledby="research-areas-title"><div className="container"><SectionHeading eyebrow="Areas of inquiry" title="Where gender meets society." id="research-areas-title" light single /><div className="research-grid">{researchAreas.map(([title, description], index) => <article key={title}><span className="index">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section page-section" aria-labelledby="research-conversation-title"><div className="container page-grid page-grid--wide"><div><Eyebrow>Research with purpose</Eyebrow><h2 id="research-conversation-title">Good questions need good conversations.</h2></div><div className="prose"><p>CGS welcomes conversations with students, researchers, practitioners, institutions and communities whose work connects with these areas.</p><a className="text-link" href={`mailto:${site.email}?subject=Research%20enquiry`}>Discuss a research question <Arrow diagonal /></a></div></div></section>
    <ContactBand title="Bring a research question" text="Start a conversation about collaboration, supervision, public dialogue or a research idea." />
  </PageShell>;
}
