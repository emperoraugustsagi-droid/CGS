import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, ContactBand, Eyebrow, PageShell } from "../../components/page-shell";
import { researchAreas, site, teamProfiles } from "../site-data";

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
    <div className="about-page">
    <section className="about-hero" aria-labelledby="about-title">
      <div className="container about-hero__layout">
        <div className="about-hero__copy">
          <Eyebrow light>About the Centre</Eyebrow>
          <h1 id="about-title">Gender offers a critical lens on how society is structured, experienced and changed.</h1>
          <div className="about-hero__body">
            <p>{site.name} at {site.university} brings research, teaching and public engagement together to examine how gender shapes institutions, opportunity and everyday life—and to move evidence into public life.</p>
            <div className="about-hero__actions">
              <Link className="button button--accent" href="#purpose">Discover our purpose <Arrow /></Link>
              <Link className="text-link text-link--light" href="#people">Meet the people <Arrow diagonal /></Link>
            </div>
          </div>
        </div>
        <figure className="about-hero__media">
          <Image src="/assets/WhatsApp Image 2026-09-24 at 1.36.45 PM.jpeg" alt="University and programme participants gathered together outside a campus venue" fill priority sizes="(max-width: 820px) 100vw, 44vw" />
          <figcaption><span>Centre for Gender Studies</span><span>Knowledge is collective</span></figcaption>
        </figure>
      </div>
    </section>

    <section className="section about-purpose-mandate" id="purpose" aria-labelledby="purpose-title">
      <div className="container about-purpose-mandate__intro">
        <div className="about-purpose-mandate__heading">
          <Eyebrow>Purpose &amp; mandate</Eyebrow>
          <h2 id="purpose-title">Understanding gender. Building knowledge. Connecting it to society.</h2>
        </div>
        <div className="about-purpose-mandate__copy">
          <p>Gender shapes education, health, work, leadership, family life, institutions and public policy. CGS studies those patterns through evidence, context and careful inquiry.</p>
          <p>That work comes together through three connected responsibilities: producing knowledge, developing expertise and bringing serious gender analysis into public conversation.</p>
        </div>
      </div>

      <div className="container principle-grid about-purpose-mandate__pillars" aria-label="CGS mandate">
        {pillars.map(([number, label, title, text]) => (
          <article key={number}>
            <div className="about-purpose-mandate__pillar-head">
              <span className="index">{number}</span>
              <p className="label">{label}</p>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="section about-public" aria-labelledby="conversation-title">
      <div className="container about-public__layout">
        <figure className="about-public__media">
          <Image src="/assets/WhatsApp Image 2026-09-24 at 1.36.47 PM (1).jpeg" alt="A speaker addressing participants from a university podium" fill sizes="(max-width: 820px) 100vw, 55vw" />
          <figcaption><span>Knowledge in practice</span><strong>Scholarship shared in public</strong></figcaption>
        </figure>
        <div className="about-public__copy">
          <Eyebrow>Knowledge in public</Eyebrow>
          <h2 id="conversation-title">Scholarship becomes more useful when it enters the conversation.</h2>
          <p>CGS connects research and classroom learning with workshops, institutional dialogue, professional development and community engagement—making serious gender analysis available where people are learning, working and making decisions.</p>
          <Link className="text-link" href="/activity">See the Centre in action <Arrow diagonal /></Link>
        </div>
      </div>
    </section>

    <section className="section about-lens" aria-labelledby="lens-title">
      <div className="container about-lens__intro">
        <div>
          <Eyebrow>How we study society</Eyebrow>
          <h2 id="lens-title">Gender is not a single subject. It is a lens across public life.</h2>
        </div>
        <div className="about-lens__summary">
          <p>Our work crosses disciplines because questions of opportunity, wellbeing, power and participation rarely fit neatly inside one field.</p>
          <Link className="text-link" href="/research">Explore our research focus <Arrow diagonal /></Link>
        </div>
      </div>

      <ul className="container about-lens__matrix" aria-label="CGS areas of study">
        {researchAreas.map(([title, focus], index) => (
          <li key={title}>
            <span className="about-lens__index">0{index + 1}</span>
            <div>
              <strong>{title}</strong>
              <small>{focus}</small>
            </div>
          </li>
        ))}
      </ul>
    </section>

    <section className="section about-people-leadership" id="people" aria-labelledby="people-title">
      <div className="container about-people-leadership__intro">
        <Eyebrow>People of CGS</Eyebrow>
        <h2 id="people-title">Leadership that keeps scholarship connected to public life.</h2>
      </div>

      <div className="container about-director">
        <figure className="about-director__media">
          <Image
            src="/assets/cgs-director-comfort-adokwe.jpeg"
            alt="Dr. Comfort Ayine Adokwe-Obed, Director of the Centre for Gender Studies"
            fill
            sizes="(max-width: 820px) 100vw, 38vw"
          />
          <figcaption>Centre leadership</figcaption>
        </figure>

        <div className="about-director__copy">
          <p className="about-director__role">Director</p>
          <h3>Dr. Comfort Ayine Adokwe-Obed</h3>
          <p className="about-director__department">Senior Lecturer · Department of Public Administration</p>
          <p className="about-director__summary">Her work brings public policy, governance, gender analysis and development into conversation. As Director, she leads a Centre connecting academic study with capacity development, institutional engagement and the practical questions facing society.</p>
          <div className="about-director__links">
            <a className="text-link" href={site.directorLinkedIn} target="_blank" rel="noreferrer">View LinkedIn profile <Arrow diagonal /></a>
            <Link className="text-link" href="#team">Meet the wider team <Arrow diagonal /></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section about-team" id="team" aria-labelledby="team-title">
      <div className="container about-team__inner">
        <header className="about-team__heading">
          <Eyebrow>Centre team</Eyebrow>
          <h2 id="team-title">The people supporting CGS programmes and scholarship.</h2>
          <p>Across academics, programmes, communication and administration, the team helps turn the Centre&apos;s mandate into day-to-day work.</p>
        </header>

        <div className="team-profile-grid">
          {teamProfiles.map((member, index) => (
            <article className="team-profile-card" key={member.name}>
              <figure className="team-profile-card__media">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                  quality={88}
                  style={{ objectFit: "cover", objectPosition: member.imagePosition }}
                />
                <span className="team-profile-card__index">0{index + 1}</span>
              </figure>
              <div className="team-profile-card__body">
                <p className="team-profile-card__role">{member.role}</p>
                <h3>{member.name}</h3>
                <p className="team-profile-card__department">{member.department}</p>
                <p className="team-profile-card__summary">{member.summary}</p>
                {"linkedin" in member && member.linkedin ? (
                  <a className="text-link team-profile-card__link" href={member.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn profile <Arrow diagonal />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="about-next" aria-labelledby="next-title">
      <div className="container about-next__inner">
        <div className="about-next__intro">
          <Eyebrow>Continue exploring</Eyebrow>
          <h2 id="next-title">Explore more of CGS.</h2>
        </div>

        <nav className="about-next__nav" aria-label="Explore more of CGS">
          <Link href="/programmes"><span>Programmes</span><Arrow diagonal /></Link>
          <Link href="/research"><span>Research</span><Arrow diagonal /></Link>
          <Link href="/events"><span>Events</span><Arrow diagonal /></Link>
          <Link href="/activity"><span>Activity</span><Arrow diagonal /></Link>
        </nav>
      </div>
    </section>

    <ContactBand title="Work with the Centre" text="Connect with CGS about a programme, research question, event, training need, partnership or public conversation." />
    </div>
  </PageShell>;
}
