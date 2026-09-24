import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageIntro, PageShell, SectionHeading } from "../../components/page-shell";
import { activities, researchAreas } from "../site-data";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore the Centre for Gender Studies areas of inquiry across development, violence, leadership, health, education and governance.",
};

const researchPathways = [
  ["Teaching", "Bring research questions into academic learning and advanced study."],
  ["Institutional dialogue", "Use evidence to support serious conversations with practitioners and institutions."],
  ["Public engagement", "Connect scholarship with the wider questions communities and public life are already facing."],
] as const;

export default function ResearchPage() {
  return <PageShell>
    <div className="research-page">
      <PageIntro eyebrow="Research at CGS" title="Questions grounded in the realities of society.">
        <p>Gender intersects with institutions, opportunity, health, education, leadership and public life. Research helps make those intersections visible and open to careful analysis.</p>
        <p>CGS brings disciplines into conversation to examine how gender shapes institutions, opportunity and everyday life—producing evidence that strengthens scholarship, teaching and public understanding.</p>
      </PageIntro>

      <section className="section page-visual research-practice" aria-labelledby="research-practice-title">
        <div className="container page-visual__grid">
          <figure className="page-visual__media">
            <Image src="/assets/WhatsApp Image 2026-08-04 at 2.03.32 PM.jpeg" alt="A participant contributing during a university academic session" fill sizes="(max-width: 820px) 100vw, 55vw" />
            <figcaption>Research questions worked through together</figcaption>
          </figure>
          <div className="page-visual__copy">
            <Eyebrow>Research in practice</Eyebrow>
            <h2 id="research-practice-title">Research begins with attention before it arrives at conclusions.</h2>
            <p>Serious inquiry means looking closely at the systems, experiences and institutions surrounding a question, then testing what the evidence can actually support.</p>
            <p>That approach matters in Gender Studies because many of the questions cross disciplines and touch both private experience and public life.</p>
          </div>
        </div>
      </section>

      <section className="section research research--page research-areas-section" id="areas" aria-labelledby="research-areas-title">
        <div className="container">
          <SectionHeading eyebrow="Areas of inquiry" title="Six lenses for understanding gender and society." id="research-areas-title" light>
            These themes provide an editorial map of the questions presented across the CGS website. They are not presented as separate departments or formal research units.
          </SectionHeading>
          <div className="research-grid research-grid--detailed">
            {researchAreas.map(([title, description, detail], index) => <article key={title}>
              <span className="index">0{index + 1}</span>
              <h3>{title}</h3>
              <p className="research-grid__summary">{description}</p>
              <p className="research-grid__detail">{detail}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section page-section research-public-life" aria-labelledby="research-public-title">
        <div className="container page-grid page-grid--wide">
          <div>
            <Eyebrow>From research to public life</Eyebrow>
            <h2 id="research-public-title">Knowledge becomes more useful when it can move between settings.</h2>
          </div>
          <div className="prose">
            <p>Research can deepen teaching, sharpen institutional dialogue and give public conversations a stronger evidence base. Those connections are part of how CGS positions scholarship within wider social questions.</p>
          </div>
        </div>
        <div className="container research-pathways">
          {researchPathways.map(([title, text], index) => <article key={title}>
            <span className="index">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>)}
        </div>
      </section>

      <section className="section page-visual page-visual--paper research-evidence" aria-labelledby="research-evidence-title">
        <div className="container page-visual__grid page-visual__grid--reverse">
          <div className="page-visual__copy">
            <Eyebrow>Evidence of activity</Eyebrow>
            <h2 id="research-evidence-title">See where scholarship becomes visible.</h2>
            <p>{activities[0].description} Activity records give visitors a concrete view of how the Centre convenes academic and institutional work.</p>
            <Link className="text-link" href="/activity">Explore documented activity <Arrow diagonal /></Link>
          </div>
          <figure className="page-visual__media">
            <Image src={activities[0].image} alt="Participants during a documented CGS research workshop" fill sizes="(max-width: 820px) 100vw, 55vw" />
            <figcaption>{activities[0].title}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section page-section research-conversation" aria-labelledby="research-conversation-title">
        <div className="container page-grid page-grid--wide">
          <div>
            <Eyebrow>Start a research conversation</Eyebrow>
            <h2 id="research-conversation-title">Bring the question before the conclusion.</h2>
          </div>
          <div className="prose">
            <p>Students, researchers, practitioners and institutions can contact CGS about research ideas, collaboration, supervision enquiries, institutional research or public dialogue.</p>
            <div className="research-next-links">
              <Link href="/contact"><span>Collaboration</span><strong>Discuss a research idea</strong><Arrow diagonal /></Link>
              <Link href="/programmes"><span>Study</span><strong>Explore advanced study</strong><Arrow diagonal /></Link>
              <Link href="/events"><span>Exchange</span><strong>See upcoming academic events</strong><Arrow diagonal /></Link>
              <Link href="/activity"><span>Evidence</span><strong>See CGS in action</strong><Arrow diagonal /></Link>
            </div>
          </div>
        </div>
      </section>

      <ContactBand title="Bring a research question" text="Start a conversation about research, collaboration, supervision, institutional inquiry or public dialogue." />
    </div>
  </PageShell>;
}
