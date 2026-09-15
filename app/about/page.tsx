import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageShell } from "../../components/page-shell";
import { researchAreas, site, team } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the Centre for Gender Studies at Nasarawa State University, Keffi, and its mandate for research, teaching and engagement.",
};

export default function AboutPage() {
  return <PageShell>
    <section className="about-hero" aria-labelledby="about-title">
      <div className="container about-hero__layout">
        <div className="about-hero__copy">
          <Eyebrow light>About the Centre</Eyebrow>
          <h1 id="about-title">Where gender questions become public knowledge.</h1>
          <div className="about-hero__body">
            <p>{site.name} at {site.university} is a place for serious, interdisciplinary work on gender and society.</p>
            <p>Through teaching, research and public engagement, we examine the forces that shape opportunity, participation and everyday life, then bring evidence into the conversations that matter.</p>
            <div className="page-intro__actions"><Link className="button button--gold" href="/programmes">Explore programmes <Arrow /></Link><Link className="text-link text-link--light" href="#team">Meet the Centre team <Arrow diagonal /></Link></div>
          </div>
        </div>
        <figure className="about-hero__media">
          <Image src="/assets/cgs-advisory-group.jpg" alt="Members of the CGS academic and advisory community gathered together" fill priority sizes="(max-width: 820px) 100vw, 48vw" />
          <figcaption><span>CGS academic and advisory community</span><span>Knowledge is collective</span></figcaption>
        </figure>
      </div>
    </section>

    <section className="section page-section" aria-labelledby="mandate-title">
      <div className="container page-grid page-grid--wide">
        <div><Eyebrow>Our purpose</Eyebrow><h2 id="mandate-title">Make gender visible where decisions are made.</h2></div>
        <div className="prose"><p>Gender influences who is heard, who benefits, who leads and whose experiences are taken seriously. CGS creates space to study those patterns with care, discipline and context.</p><p>We bring research, teaching and engagement together because evidence is most useful when it can be questioned, applied and shared beyond the university.</p></div>
      </div>
      <div className="container principle-grid">
        <article><span className="index">01</span><h3>Ask better questions.</h3><p>Examine the systems, policies and social expectations that shape people’s lives.</p></article>
        <article><span className="index">02</span><h3>Build useful knowledge.</h3><p>Equip students and professionals with the concepts, methods and confidence to analyse gender in their fields.</p></article>
        <article><span className="index">03</span><h3>Bring evidence into dialogue.</h3><p>Connect scholarship with public institutions, practitioners, communities and the questions they are already facing.</p></article>
      </div>
    </section>

    <section className="section page-visual page-visual--paper" aria-labelledby="about-visual-title">
      <div className="container page-visual__grid">
        <figure className="page-visual__media"><Image src="/assets/cgs-speaker-podium.png" alt="A university speaker addressing an audience at a CGS event" fill sizes="(max-width: 820px) 100vw, 55vw" /><figcaption>Scholarship shared in public</figcaption></figure>
        <div className="page-visual__copy"><Eyebrow>A Centre in conversation</Eyebrow><h2 id="about-visual-title">Ideas gain strength when they are tested in public.</h2><p>CGS treats knowledge as something to be shared, challenged and applied. From the classroom to workshops, policy conversations and community engagement, we create room for thoughtful exchange.</p><p>This is how research stays connected to the people, institutions and realities it seeks to understand.</p></div>
      </div>
    </section>

    <section className="section page-section page-section--paper" aria-labelledby="identity-title">
      <div className="container page-grid page-grid--wide"><div><Eyebrow>What we bring together</Eyebrow><h2 id="identity-title">Gender is not a single subject. It is a way of seeing society more clearly.</h2></div><div className="prose"><p>At CGS, gender analysis sits in conversation with governance, development, education, health, work, leadership, culture and public policy.</p><p>We work across disciplines because the questions that shape opportunity, wellbeing and participation do not sit neatly within one field.</p></div></div>
      <ul className="container about-fields" aria-label="CGS areas of study">{researchAreas.map(([title], index) => <li key={title}><span className="index">0{index + 1}</span><strong>{title}</strong></li>)}</ul>
    </section>
    <section className="section page-section" aria-labelledby="leadership-title">
      <div className="container person-feature">
        <figure className="person-feature__media"><Image src="/assets/cgs-director-comfort-adokwe.jpeg" alt="Dr. Comfort Ayine Adokwe-Obed, Director of the Centre for Gender Studies" fill sizes="(max-width: 820px) 100vw, 40vw" /></figure>
        <div className="person-feature__copy"><Eyebrow>Centre leadership</Eyebrow><h2 id="leadership-title">Leadership that keeps scholarship connected to public life.</h2><p className="person-feature__role">Dr. Comfort Ayine Adokwe-Obed, Director</p><p>Dr. Comfort Ayine Adokwe-Obed is a Senior Lecturer in the Department of Public Administration and the Director of CGS. Her work brings public policy, governance, gender analysis and development into conversation.</p><p>Her leadership brings research, teaching, policy engagement and capacity development together in the Centre’s work.</p><div className="leadership__links"><a className="text-link" href={site.directorLinkedIn} target="_blank" rel="noreferrer">View LinkedIn profile <Arrow diagonal /></a><Link className="text-link" href="#team">Meet the Centre team <Arrow diagonal /></Link></div></div>
      </div>
    </section>
    <section className="section page-section" id="team" aria-labelledby="team-title">
      <div className="container team-page-section"><div><Eyebrow>The wider Centre team</Eyebrow><h2 id="team-title">The scholars and staff who make the work possible.</h2><p className="team-page-section__intro">CGS brings academic leadership, teaching, communication, administration and programme delivery together around one shared purpose.</p></div><div className="team-roster__list">{team.map(([name, role], index) => <div key={name}><span className="index">0{index + 1}</span><strong>{name}</strong><small>{role}</small></div>)}</div></div>
    </section>
    <ContactBand title="Work with the Centre" text="Connect with CGS about a programme, research question, training need or public conversation." />
  </PageShell>;
}
