import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageShell } from "../../components/page-shell";
import { researchAreas, site, team } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Centre for Gender Studies at Nasarawa State University, Keffi, and discover how research, teaching and public engagement connect gender scholarship to society.",
};

const pillars = [
  ["01", "Research", "Produce evidence.", "Study the policies, institutions and social expectations that shape opportunity, participation and everyday life."],
  ["02", "Teaching", "Develop expertise.", "Equip students and professionals with the concepts, methods and confidence needed for rigorous gender analysis."],
  ["03", "Engagement", "Put knowledge in conversation.", "Connect scholarship with communities, practitioners, public institutions and the questions they are already facing."],
] as const;

export default function AboutPage() {
  return <PageShell>
    <section className="about-hero" aria-labelledby="about-title">
      <div className="container about-hero__layout">
        <div className="about-hero__copy">
          <Eyebrow light>About the Centre</Eyebrow>
          <h1 id="about-title">Understanding gender helps us understand society.</h1>
          <div className="about-hero__body">
            <p>{site.name} at {site.university} brings research, teaching and public engagement together to examine how gender shapes institutions, opportunity and everyday life.</p>
            <p>We create a place where difficult questions can be studied seriously, evidence can be tested, and knowledge can move beyond the university into public life.</p>
            <div className="page-intro__actions">
              <Link className="button button--gold" href="#purpose">Discover our purpose <Arrow /></Link>
              <Link className="text-link text-link--light" href="#people">Meet the people <Arrow diagonal /></Link>
            </div>
          </div>
        </div>
        <figure className="about-hero__media">
          <Image src="/assets/cgs-advisory-group.jpg" alt="Members of the CGS academic and advisory community gathered together" fill priority sizes="(max-width: 820px) 100vw, 48vw" />
          <figcaption><span>Centre for Gender Studies</span><span>Knowledge is collective</span></figcaption>
        </figure>
      </div>
    </section>

    <section className="section page-section" id="purpose" aria-labelledby="purpose-title">
      <div className="container page-grid page-grid--wide">
        <div>
          <Eyebrow>Why CGS exists</Eyebrow>
          <h2 id="purpose-title">Make visible the forces that shape who participates, who leads and who benefits.</h2>
        </div>
        <div className="prose">
          <p>Gender is present in education, health, work, leadership, family life, institutions and public policy. Understanding those patterns requires more than assumptions; it requires evidence, context and careful inquiry.</p>
          <p>CGS exists to build that understanding and develop people who can use it thoughtfully in scholarship, professional practice and public decision-making.</p>
        </div>
      </div>
    </section>

    <section className="section page-section page-section--paper" aria-labelledby="pillars-title">
      <div className="container page-grid page-grid--wide">
        <div><Eyebrow>Our mandate</Eyebrow><h2 id="pillars-title">One Centre. Three connected responsibilities.</h2></div>
        <div className="prose"><p>Research gives us evidence. Teaching develops people who can work with that evidence. Engagement brings knowledge into conversation with the society it is meant to serve.</p></div>
      </div>
      <div className="container principle-grid">
        {pillars.map(([number, label, title, text]) => <article key={number}><span className="index">{number}</span><p className="label">{label}</p><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="section page-visual page-visual--paper" aria-labelledby="conversation-title">
      <div className="container page-visual__grid">
        <figure className="page-visual__media">
          <Image src="/assets/cgs-speaker-podium.png" alt="A university speaker addressing an audience at a CGS event" fill sizes="(max-width: 820px) 100vw, 55vw" />
          <figcaption>Scholarship shared in public</figcaption>
        </figure>
        <div className="page-visual__copy">
          <Eyebrow>Knowledge in public</Eyebrow>
          <h2 id="conversation-title">Scholarship becomes more useful when it enters the conversation.</h2>
          <p>CGS connects classroom learning and research with workshops, institutional dialogue, professional development and community engagement.</p>
          <p>The aim is not simply to produce knowledge, but to make serious gender analysis available where people are learning, working and making decisions.</p>
          <Link className="text-link" href="/activity">See the Centre in action <Arrow diagonal /></Link>
        </div>
      </div>
    </section>

    <section className="section page-section" aria-labelledby="lens-title">
      <div className="container page-grid page-grid--wide">
        <div><Eyebrow>How we study society</Eyebrow><h2 id="lens-title">Gender is not a single subject. It is a lens across public life.</h2></div>
        <div className="prose"><p>Our work crosses disciplines because the questions that shape opportunity and wellbeing do not fit neatly inside one field.</p><p>These six areas provide a practical map of the questions CGS brings into research, teaching and public engagement.</p></div>
      </div>
      <ul className="container about-fields" aria-label="CGS areas of study">
        {researchAreas.map(([title, description], index) => <li key={title}><span className="index">0{index + 1}</span><strong>{title}</strong><small>{description}</small></li>)}
      </ul>
      <div className="container page-intro__actions"><Link className="text-link" href="/research">Explore our research focus <Arrow diagonal /></Link></div>
    </section>

    <section className="section page-section page-section--paper" id="people" aria-labelledby="leadership-title">
      <div className="container person-feature">
        <figure className="person-feature__media"><Image src="/assets/cgs-director-comfort-adokwe.jpeg" alt="Dr. Comfort Ayine Adokwe-Obed, Director of the Centre for Gender Studies" fill sizes="(max-width: 820px) 100vw, 40vw" /></figure>
        <div className="person-feature__copy">
          <Eyebrow>Centre leadership</Eyebrow>
          <h2 id="leadership-title">Keeping scholarship connected to people, institutions and public life.</h2>
          <p className="person-feature__role">Dr. Comfort Ayine Adokwe-Obed, Director</p>
          <p>Dr. Comfort Ayine Adokwe-Obed is a Senior Lecturer in the Department of Public Administration and Director of the Centre for Gender Studies. Her work brings public policy, governance, gender analysis and development into conversation.</p>
          <p>As Director, she leads a Centre that connects academic study with capacity development, institutional engagement and the practical questions facing society.</p>
          <div className="leadership__links"><a className="text-link" href={site.directorLinkedIn} target="_blank" rel="noreferrer">View LinkedIn profile <Arrow diagonal /></a><Link className="text-link" href="#team">Meet the wider team <Arrow diagonal /></Link></div>
        </div>
      </div>
    </section>

    <section className="section page-section" id="team" aria-labelledby="team-title">
      <div className="container team-page-section">
        <div><Eyebrow>The people behind the work</Eyebrow><h2 id="team-title">Different responsibilities. One shared Centre.</h2><p className="team-page-section__intro">Academic leadership, programmes and administration work together to make the Centre's teaching, research and engagement possible.</p></div>
        <div className="team-roster__list">{team.map(([name, role], index) => <div key={name}><span className="index">0{index + 1}</span><strong>{name}</strong><small>{role}</small></div>)}</div>
      </div>
    </section>

    <section className="section page-section page-section--paper" aria-labelledby="next-title">
      <div className="container page-grid page-grid--wide">
        <div><Eyebrow>Continue exploring</Eyebrow><h2 id="next-title">There is more than one way into the work of CGS.</h2></div>
        <div className="prose">
          <p>Study gender at the level that matches your next step, explore the questions shaping our research, or see how the Centre brings scholarship into public life.</p>
          <div className="leadership__links"><Link className="text-link" href="/programmes">Explore programmes <Arrow diagonal /></Link><Link className="text-link" href="/research">Explore research <Arrow diagonal /></Link><Link className="text-link" href="/activity">See our activity <Arrow diagonal /></Link></div>
        </div>
      </div>
    </section>

    <ContactBand title="Work with the Centre" text="Connect with CGS about a programme, research question, training need, partnership or public conversation." />
  </PageShell>;
}
