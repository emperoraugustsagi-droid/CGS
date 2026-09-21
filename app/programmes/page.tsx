import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageIntro, PageShell, SectionHeading } from "../../components/page-shell";
import { centreStudyOfferings, programmes } from "../site-data";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Explore Gender Studies postgraduate programmes and Centre study offerings at Nasarawa State University, Keffi.",
};

export default function ProgrammesPage() {
  return <PageShell>
    <div className="programmes-page">
      <PageIntro eyebrow="Study at CGS" title="Choose the pathway that matches your next step.">
        <p>CGS supports study from certificate and diploma learning through postgraduate and doctoral research.</p>
        <p>The current NSUK postgraduate listing includes five Gender Studies entries. Admissions, deadlines and delivery arrangements can change, so confirm current guidance with the Centre before applying.</p>
      </PageIntro>

      <section className="section page-visual programmes-pathway" aria-labelledby="programme-visual-title">
        <div className="container page-visual__grid page-visual__grid--reverse">
          <div className="page-visual__copy">
            <Eyebrow>Understanding the pathways</Eyebrow>
            <h2 id="programme-visual-title">Different levels serve different academic and professional goals.</h2>
            <p>Certificate and diploma learning can provide an entry point into Gender Studies, while postgraduate programmes support deeper professional, academic and research development.</p>
            <p>These routes should not be read as one compulsory ladder. The right next step depends on your background, goals and the Centre’s current admissions guidance.</p>
          </div>
          <figure className="page-visual__media">
            <Image src="/assets/cgs-academic-event.jpeg" alt="Academic ceremony at Nasarawa State University" fill sizes="(max-width: 820px) 100vw, 55vw" />
            <figcaption>Learning, recognition and progression</figcaption>
          </figure>
        </div>
      </section>

      <section className="section page-section programmes-postgraduate" aria-labelledby="programme-list-title">
        <div className="container">
          <SectionHeading eyebrow="Postgraduate programmes" title="Five current Gender Studies listings." id="programme-list-title">
            These titles follow the current NSUK School of Postgraduate Studies public listing. Contact CGS for current entry requirements, duration and application guidance.
          </SectionHeading>

          <div className="programme-list programme-list--page">
            {programmes.map((programme, index) => <article className="programme-row" key={programme.code}>
              <span className="index">0{index + 1}</span>
              <div className="programme-row__title"><strong>{programme.code}</strong><h3>{programme.title}</h3></div>
              <div className="programme-row__detail"><span>{programme.format}</span><p>{programme.summary}</p></div>
              <Link href="/contact" aria-label={`Ask about ${programme.title}`}>Ask CGS <Arrow diagonal /></Link>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section page-section page-section--paper programmes-other" aria-labelledby="other-study-title">
        <div className="container page-grid page-grid--wide">
          <div>
            <Eyebrow>Other Centre study offerings</Eyebrow>
            <h2 id="other-study-title">Certificate and diploma learning.</h2>
          </div>
          <div className="prose">
            <p>The official NSUK learning platform lists Gender Studies Certificate and Diploma programmes. Their current admissions and delivery arrangements should be confirmed directly with CGS.</p>
          </div>
        </div>

        <div className="container programme-offerings">
          {centreStudyOfferings.map((offering, index) => <article key={offering.code}>
            <span className="index">0{index + 1}</span>
            <div><small>{offering.format}</small><h3>{offering.title}</h3><p>{offering.summary}</p></div>
            <Link className="text-link" href="/contact">Ask for current guidance <Arrow diagonal /></Link>
          </article>)}
        </div>
      </section>

      <section className="section page-section programmes-choose" aria-labelledby="choose-pathway-title">
        <div className="container page-grid page-grid--wide">
          <div>
            <Eyebrow>Choosing a pathway</Eyebrow>
            <h2 id="choose-pathway-title">Start with the outcome you want, then confirm eligibility.</h2>
          </div>
          <div className="prose">
            <p>Foundation learning may suit someone building practical gender knowledge. Postgraduate diploma study can support transition into advanced study. Masters programmes deepen academic or professional work, while research degrees focus increasingly on independent scholarship.</p>
            <p>This is orientation, not an eligibility assessment. CGS should confirm the programme that fits your qualifications and goals.</p>
            <Link className="text-link" href="/contact">Ask CGS about your next step <Arrow diagonal /></Link>
          </div>
        </div>
      </section>

      <section className="section page-visual page-visual--paper programmes-research-link" aria-labelledby="programmes-research-title">
        <div className="container page-visual__grid">
          <figure className="page-visual__media">
            <Image src="/assets/cgs-research-workshop.jpg" alt="CGS participants working together during a research workshop" fill sizes="(max-width: 820px) 100vw, 55vw" />
            <figcaption>Study connected to inquiry</figcaption>
          </figure>
          <div className="page-visual__copy">
            <Eyebrow>Study and research</Eyebrow>
            <h2 id="programmes-research-title">Advanced study becomes stronger when it stays close to real questions.</h2>
            <p>Gender Studies at CGS sits in conversation with development, governance, health, education, leadership and public life.</p>
            <Link className="text-link" href="/research">Explore the Centre’s research focus <Arrow diagonal /></Link>
          </div>
        </div>
      </section>

      <section className="section page-section programmes-guidance" aria-labelledby="admissions-guidance-title">
        <div className="container page-grid page-grid--wide">
          <div>
            <Eyebrow>Current admissions guidance</Eyebrow>
            <h2 id="admissions-guidance-title">Confirm the details before you apply.</h2>
          </div>
          <div className="prose">
            <p>Programme requirements, deadlines, schedules and delivery arrangements can change. The website deliberately avoids publishing unverified admissions details.</p>
            <p>When you contact the Centre, mention the programme you are interested in and your current academic or professional background.</p>
            <Link className="button button--accent" href="/contact">Contact CGS <Arrow /></Link>
          </div>
        </div>
      </section>

      <ContactBand title="Need help choosing a programme?" text="Tell CGS what you want to study or achieve, and ask for the current programme and admissions guidance that applies to you." />
    </div>
  </PageShell>;
}
