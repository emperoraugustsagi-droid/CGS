import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageIntro, PageShell } from "../../components/page-shell";
import { centreStudyOfferings, programmes } from "../site-data";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Explore Gender Studies postgraduate programmes and Centre study offerings at Nasarawa State University, Keffi.",
};

const studyPathways = [
  {
    number: "01",
    label: "Foundation",
    title: "Certificate & Diploma",
    text: "Build core knowledge in Gender Studies and strengthen your grounding before more advanced study.",
  },
  {
    number: "02",
    label: "Professional",
    title: "PGD & Professional Masters",
    text: "Develop applied gender analysis for professional practice, institutions and public-facing work.",
  },
  {
    number: "03",
    label: "Academic",
    title: "M.Sc. Gender Studies",
    text: "Deepen academic study, research methods and scholarly engagement with gender and society.",
  },
  {
    number: "04",
    label: "Research",
    title: "M.Phil./Ph.D. & Ph.D.",
    text: "Progress toward independent, original research and doctoral-level scholarship in Gender Studies.",
  },
] as const;

export default function ProgrammesPage() {
  return <PageShell>
    <div className="programmes-page">
      <PageIntro eyebrow="Study at CGS" title="Choose the pathway that matches your next step.">
        <p>Explore postgraduate study and Centre learning pathways in Gender Studies at Nasarawa State University, Keffi.</p>
        <p className="programmes-intro__note">Programme requirements, deadlines and delivery arrangements should be confirmed with CGS before you apply.</p>
      </PageIntro>

      <section className="section programmes-pathway" aria-labelledby="programme-pathway-title">
        <div className="container programmes-pathway__intro">
          <Eyebrow>Find your pathway</Eyebrow>
          <h2 id="programme-pathway-title">Start with the outcome you want, then confirm the level that fits.</h2>
          <p>CGS offers different routes into Gender Studies. These pathways are orientation—not an eligibility assessment—so confirm the programme that matches your qualifications and goals with the Centre.</p>
        </div>

        <div className="container programmes-pathway__grid">
          {studyPathways.map((pathway) => (
            <article key={pathway.number}>
              <div className="programmes-pathway__meta">
                <span>{pathway.number}</span>
                <small>{pathway.label}</small>
              </div>
              <h3>{pathway.title}</h3>
              <p>{pathway.text}</p>
            </article>
          ))}
        </div>

        <div className="container programmes-pathway__action">
          <Link className="text-link" href="/contact">Ask CGS about your next step <Arrow diagonal /></Link>
        </div>
      </section>

      <section className="section programmes-postgraduate" aria-labelledby="programme-list-title">
        <div className="container programmes-postgraduate__intro">
          <Eyebrow>Postgraduate programmes</Eyebrow>
          <h2 id="programme-list-title">Five Gender Studies pathways currently listed by NSUK.</h2>
          <p>Use this directory to compare the current programme titles and study orientation. Contact CGS for entry requirements, duration and application guidance.</p>
        </div>

        <div className="container programme-directory">
          {programmes.map((programme, index) => (
            <article className="programme-directory__row" key={programme.code}>
              <span className="programme-directory__index">0{index + 1}</span>

              <div className="programme-directory__identity">
                <span className="programme-directory__code">{programme.code}</span>
                <h3>{programme.title}</h3>
                <small>{programme.format}</small>
              </div>

              <p className="programme-directory__summary">{programme.summary}</p>

              <Link
                className="programme-directory__action"
                href="/contact"
                aria-label={`Ask CGS about ${programme.title}`}
              >
                Ask CGS <Arrow diagonal />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section programmes-other" aria-labelledby="other-study-title">
        <div className="container programmes-other__intro">
          <Eyebrow>Other Centre study offerings</Eyebrow>
          <h2 id="other-study-title">Certificate and diploma learning.</h2>
          <p>The NSUK learning platform also lists Certificate and Diploma programmes in Gender Studies. Confirm current admissions and delivery arrangements directly with CGS.</p>
        </div>

        <div className="container programmes-other__grid">
          {centreStudyOfferings.map((offering, index) => (
            <article className="programmes-other__item" key={offering.code}>
              <span className="programmes-other__index">0{index + 1}</span>

              <div className="programmes-other__content">
                <span className="programmes-other__format">{offering.format}</span>
                <h3>{offering.title}</h3>
                <p>{offering.summary}</p>
              </div>

              <Link
                className="programmes-other__action"
                href="/contact"
                aria-label={`Ask CGS about ${offering.title}`}
              >
                Ask for guidance <Arrow diagonal />
              </Link>
            </article>
          ))}
        </div>
      </section>

      

      <section className="section programmes-research-link" aria-labelledby="programmes-research-title">
        <div className="container programmes-research-link__layout">
          <figure className="programmes-research-link__media">
            <Image
              src="/assets/cgs-research-workshop.jpg"
              alt="CGS participants working together during a research workshop"
              fill
              sizes="(max-width: 820px) 100vw, 55vw"
            />
            <figcaption>
              <span>Study in practice</span>
              <strong>Inquiry connected to real questions</strong>
            </figcaption>
          </figure>

          <div className="programmes-research-link__copy">
            <Eyebrow>Study and research</Eyebrow>
            <h2 id="programmes-research-title">Advanced study becomes stronger when it stays close to real questions.</h2>
            <p>Gender Studies at CGS connects advanced learning with questions across development, governance, health, education, leadership and public life.</p>
            <Link className="text-link" href="/research">Explore the Centre’s research focus <Arrow diagonal /></Link>
          </div>
        </div>
      </section>

      <section className="programmes-guidance" aria-labelledby="admissions-guidance-title">
        <div className="container programmes-guidance__inner">
          <div className="programmes-guidance__heading">
            <Eyebrow>Before you apply</Eyebrow>
            <h2 id="admissions-guidance-title">Confirm the current details with CGS.</h2>
          </div>

          <p className="programmes-guidance__copy">Requirements, deadlines, schedules and delivery arrangements can change. When you contact the Centre, mention the programme you are interested in and your current academic or professional background.</p>

          <Link className="button button--accent programmes-guidance__action" href="/contact">
            Contact CGS <Arrow />
          </Link>
        </div>
      </section>

      <ContactBand title="Need help choosing a programme?" text="Tell CGS what you want to study or achieve, and ask for the current programme and admissions guidance that applies to you." />
    </div>
  </PageShell>;
}
