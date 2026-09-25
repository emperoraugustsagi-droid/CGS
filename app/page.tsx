import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Arrow } from "../components/page-shell";
import { HomeHeroCarousel } from "../components/home-hero-carousel";
import { ProgrammeShowcase } from "../components/programme-showcase";
import { EventSpotlightPopup } from "../components/event-spotlight-popup";
import { EventCountdown } from "../components/event-countdown";
import { HomeGallery } from "../components/home-gallery";
import { PartnersBand } from "../components/partners-band";
import { activities, events, programmes, researchAreas } from "./site-data";

const images = {
  director: "/assets/cgs-director-comfort-adokwe.jpeg",
  community: "/assets/WhatsApp Image 2026-09-24 at 1.36.47 PM (2).jpeg",
};

const researchImages = [
  { src: "/assets/WhatsApp Image 2026-08-04 at 2.03.57 PM (1).jpeg", position: "center 44%" },
  { src: "/assets/cgs-awareness-campaign.jpg", position: "center 38%" },
  { src: "/assets/cgs-academic-event.jpeg", position: "center 24%" },
  { src: "/assets/WhatsApp Image 2026-09-24 at 1.36.46 PM (1).jpeg", position: "center 46%" },
  { src: "/assets/WhatsApp Image 2026-09-24 at 1.36.46 PM (2).jpeg", position: "center 44%" },
  { src: "/assets/WhatsApp Image 2026-09-24 at 1.36.45 PM.jpeg", position: "center 44%" },
] as const;

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <p className={light ? "eyebrow eyebrow--light" : "eyebrow"}>{children}</p>; }
function ProofIcon({ name }: { name: "book" | "community" | "impact" }) {
  if (name === "book") return <svg className="proof-strip__icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 7.5c4.8-1.8 8.8-.9 12 2.3v17.4c-3.2-3.2-7.2-4-12-2.3V7.5Zm24 0c-4.8-1.8-8.8-.9-12 2.3v17.4c3.2-3.2 7.2-4 12-2.3V7.5Z"/></svg>;
  if (name === "community") return <svg className="proof-strip__icon" viewBox="0 0 32 32" aria-hidden="true"><circle cx="11" cy="10" r="4"/><circle cx="22.5" cy="11.5" r="3.2"/><path d="M3.5 27v-3.2c0-4 3.3-7.3 7.5-7.3s7.5 3.3 7.5 7.3V27M19.5 18.5c.9-.5 2-.8 3.1-.8 3.3 0 5.9 2.6 5.9 5.8V27"/></svg>;
  return <svg className="proof-strip__icon" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12"/><path d="M4.5 16h23M16 4c3.4 3.3 5.1 7.3 5.1 12S19.4 24.7 16 28c-3.4-3.3-5.1-7.3-5.1-12S12.6 7.3 16 4Z"/></svg>;
}
function MandateIcon({ name }: { name: "research" | "teaching" | "engagement" }) {
  if (name === "research") return <svg className="mandate-list__icon" viewBox="0 0 40 40" aria-hidden="true"><path d="M10 6h17v24H10zM14 11h9M14 16h9M14 21h5"/><circle cx="27" cy="27" r="5"/><path d="m31 31 4 4"/></svg>;
  if (name === "teaching") return <svg className="mandate-list__icon" viewBox="0 0 40 40" aria-hidden="true"><path d="m4 13 16-7 16 7-16 7L4 13Z"/><path d="M10 16v8c5 4 15 4 20 0v-8M34 14v11"/><circle cx="34" cy="27" r="2"/></svg>;
  return <svg className="mandate-list__icon" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="11" r="5"/><circle cx="9" cy="16" r="3.5"/><circle cx="31" cy="16" r="3.5"/><path d="M10 32v-3c0-5 4.4-9 10-9s10 4 10 9v3M3 32v-2c0-3.5 2.7-6.5 6.5-6.5M37 32v-2c0-3.5-2.7-6.5-6.5-6.5"/></svg>;
}
function ProgrammeIcon({ index }: { index: number }) {
  const paths = [
    <><path d="M9 6h16v23H9zM13 11h8M13 16h8M13 21h5"/><circle cx="25" cy="25" r="5"/><path d="m29 29 4 4"/></>,
    <><path d="m4 12 14-6 14 6-14 6L4 12Z"/><path d="M9 15v7c4.5 3.6 9.5 3.6 14 0v-7M32 13v10"/><circle cx="32" cy="26" r="2"/></>,
    <><circle cx="18" cy="10" r="5"/><circle cx="8" cy="15" r="3.5"/><circle cx="28" cy="15" r="3.5"/><path d="M8 31v-3c0-5 4.4-9 10-9s10 4 10 9v3M2 31v-2c0-3.5 2.6-6 6-6M34 31v-2c0-3.5-2.6-6-6-6"/></>,
    <><path d="M7 27V16M15 27V11M23 27V7M31 27V14"/><path d="M5 29h29"/></>,
    <><path d="M5 8c5-2 9-.9 13 2.5V31c-4-3.4-8-4.5-13-2.5V8ZM31 8c-5-2-9-.9-13 2.5V31c4-3.4 8-4.5 13-2.5V8Z"/></>,
    <><path d="M20 5a9 9 0 0 0-5 16v4h10v-4a9 9 0 0 0-5-16Z"/><path d="M16 30h8M17 34h6"/></>,
  ];
  return <span className="programme-row__icon" aria-hidden="true"><svg viewBox="0 0 36 36">{paths[index]}</svg></span>;
}
export default function Home() {
  return <><SiteHeader /><main id="main" className="home-page">
    <section className="hero" id="top" aria-labelledby="hero-title">
      <HomeHeroCarousel />
      <div className="container proof-strip" aria-label="Centre at a glance">
        <div><ProofIcon name="book"/><strong>{String(programmes.length).padStart(2, "0")}</strong><span data-mobile-label="Postgraduate programmes">Postgraduate programmes</span></div>
        <div><ProofIcon name="community"/><strong>Executive Certificate</strong><span data-mobile-label="Study pathways">Professional Centre learning</span></div>
        <div><ProofIcon name="impact"/><strong>Research · Teaching · Engagement</strong><span data-mobile-label="Public engagement">Knowledge connected to public life</span></div>
        <a className="proof-strip__scroll" href="#about">Scroll to explore <span aria-hidden="true">⌄</span></a>
      </div>
    </section>
    <section className="section mandate-section" id="about" aria-labelledby="mandate-title"><div className="container mandate-layout"><div className="section-intro"><Eyebrow>Our mandate</Eyebrow><h2 id="mandate-title">Gender shapes institutions. We study how, and what can change.</h2><p>CGS is a multidisciplinary home for advanced study, research and public engagement at Nasarawa State University, Keffi.</p></div><div className="mandate-list">{[["01","Research","Produce evidence.","Examine the policies, systems and social expectations that shape people’s opportunities.","research"],["02","Teaching","Develop expertise.","Equip students and professionals with the knowledge and methods needed for serious gender analysis.","teaching"],["03","Engagement","Inform public life.","Bring scholarship into conversation with communities, institutions, practitioners and policymakers.","engagement"]].map(([i,l,h,p,icon])=><article key={i}><div className="mandate-list__marker"><MandateIcon name={icon as "research" | "teaching" | "engagement"}/><span className="index">{i}</span></div><div><p className="label">{l}</p><h3>{h}</h3><p>{p}</p></div></article>)}</div></div><div className="container mandate-cta"><p>Knowledge. People. <em>A fairer tomorrow.</em></p><Link className="text-link" href="/about">About the Centre <Arrow /></Link></div></section>
    <section className="section programmes programmes--home" id="programmes" aria-labelledby="programmes-title">
      <div className="container">
        <div className="section-heading">
          <div><Eyebrow>Study at CGS</Eyebrow><h2 id="programmes-title"><span className="study-title__lead">Choose the level that matches</span> <em>your next step.</em></h2></div>
          <p>CGS supports different routes into gender study, from executive certificate learning to postgraduate and doctoral research.</p>
        </div>
        <div className="programme-list">
          {[
            ["01", "Executive learning", "Executive Certificate", "Build focused, practical Gender Studies knowledge through an executive learning pathway designed for professionals and institutional leaders."],
            ["02", "Postgraduate transition", "PGD Gender Studies", "Build a postgraduate foundation before progressing further in academic or professional study."],
            ["03", "Advanced study", "Academic & professional masters", "Choose between academic research-oriented study and a professional masters pathway."],
            ["04", "Research degrees", "M.Phil./Ph.D. & Ph.D.", "Progress into advanced research and original doctoral scholarship in Gender Studies."],
          ].map(([number, label, title, summary], index) => <article className="programme-row" key={number}>
            <span className="index">{number}</span>
            <ProgrammeIcon index={index}/>
            <div className="programme-row__title"><strong>{label}</strong><h3>{title}</h3></div>
            <div className="programme-row__detail"><span>Study pathway</span><p>{summary}</p></div>
            <Link href="/programmes" aria-label={`Explore ${title}`}>Explore <Arrow diagonal /></Link>
          </article>)}
        </div>
        <ProgrammeShowcase />
        
      </div>
    </section>
    <section className="section research research--home research-gallery" id="research" aria-labelledby="research-title">
      <div className="container research-gallery__header">
        <div>
          <Eyebrow>Research focus</Eyebrow>
          <h2 id="research-title">Questions grounded in the realities <em>of society.</em></h2>
          <div className="research-gallery__intro">
            <span>06 areas of inquiry</span>
            <p>Our research explores how gender intersects with development, institutions, health, education, leadership and public life.</p>
          </div>
        </div>
      </div>
      <div className="container research-gallery__grid">
        {researchAreas.map(([title, description], index) => (
          <Link className={`research-card research-card--${index + 1}`} href="/research" key={title}>
            <figure>
              <Image
                src={researchImages[index].src}
                alt=""
                fill
                sizes={index === 0 || index === 5 ? "(max-width: 820px) 100vw, 65vw" : "(max-width: 820px) 100vw, 34vw"}
                quality={88}
                style={{ objectFit: "cover", objectPosition: researchImages[index].position }}
              />
            </figure>
            <div className="research-card__content">
              <span className="index">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="research-card__arrow" aria-hidden="true"><Arrow diagonal /></span>
            </div>
          </Link>
        ))}
      </div>
      <div className="container research-gallery__footer">
        <Link className="text-link" href="/research">Explore all research <Arrow diagonal /></Link>
      </div>
    </section>
    <section className="home-event home-event--compact" id="events" aria-labelledby="home-event-title">
      <div className="container home-event-compact">
        <div className="home-event-compact__date" aria-label={events[0].dateLabel}>
          <strong>04–07</strong>
          <span>NOV · 2026</span>
        </div>
        <div className="home-event-compact__copy">
          <Eyebrow>Upcoming at CGS</Eyebrow>
          <h2 id="home-event-title">{events[0].title}</h2>
          <p>{events[0].theme}</p>
          <EventCountdown
            target="2026-11-04T00:00:00+01:00"
            compact
            className="home-event-compact__countdown"
          />
          <div className="home-event-compact__meta">
            <span><strong>{events[0].deadlines.abstractSubmission}</strong> Abstract deadline</span>
            <span>{events[0].venue}</span>
          </div>
        </div>
        <div className="home-event-compact__actions">
          <a className="button button--accent" href={events[0].website} target="_blank" rel="noreferrer">Visit conference website <Arrow /></a>
          <Link className="text-link" href="/events">View event details <Arrow diagonal /></Link>
        </div>
      </div>
    </section>
    <section className="section leadership leadership--home" id="leadership" aria-labelledby="leadership-title"><div className="container leadership__layout"><div className="director-card"><figure><Image src={images.director} alt="Dr. Comfort Ayine Adokwe-Obed, Director of the Centre for Gender Studies" fill sizes="(max-width: 760px) 45vw, 260px" /></figure><div><span>Director, Centre for Gender Studies</span><strong>Dr. Comfort Ayine<br/>Adokwe-Obed</strong><small>Senior Lecturer, Department of Public Administration</small><div className="director-card__links"><a className="text-link" href="https://www.linkedin.com/in/adokwe-comfort-392a4223b/" target="_blank" rel="noreferrer">View LinkedIn profile <Arrow diagonal /></a><Link className="text-link" href="/contact">Contact the Centre <Arrow diagonal /></Link></div></div></div><div className="leadership__copy"><Eyebrow>Leadership</Eyebrow><h2 id="leadership-title">Policy scholarship with an institutional purpose.</h2><p>Dr. Comfort Ayine Adokwe-Obed serves as Director of the Centre, with academic interests connecting public policy, governance, gender analysis and development.</p><p>Her leadership connects the Centre’s teaching, research, capacity development and public engagement.</p></div></div><div className="container leadership-handoff">
        <Link className="leadership-team-strip" href="/about#team">
          <div>
            <span>Meet the Centre</span>
            <strong>Explore the team behind CGS</strong>
            <p>Meet the academic, programmes and administrative team supporting the Centre&apos;s work.</p>
          </div>
          <span className="leadership-team-strip__action">Meet the team <Arrow diagonal /></span>
        </Link>
      </div></section>
    <section className="section activity" id="activity" aria-labelledby="activity-title"><div className="container activity__layout"><figure className="activity__media"><Image src={images.community} alt="Members of the CGS academic and advisory community gathered after a Centre meeting" fill sizes="(max-width: 760px) 100vw, 52vw" /><figcaption>An institutional community for gender scholarship</figcaption></figure><div className="activity__copy"><Eyebrow>Current at CGS</Eyebrow><h2 id="activity-title">A Centre that convenes people around serious questions on gender.</h2><p>Recent Centre records show an active academic and institutional community. Explore the documented activity on this site, with source folders available as supporting evidence.</p><div className="activity-list">{activities.map(activity=><Link href={`/activity#${activity.id}`} key={activity.title}><span>{activity.type}</span><strong>{activity.title}</strong><small>{activity.description}</small><Arrow diagonal /></Link>)}</div></div></div></section>
    <HomeGallery />
    <PartnersBand />
    <section className="engage" id="engage" aria-labelledby="engage-title"><div className="container engage__layout"><div><Eyebrow light>Choose your next step</Eyebrow><h2 id="engage-title">What brings you to CGS?</h2></div><div className="engage__options"><Link href="/programmes"><span>Study</span><strong>Find the right programme</strong><Arrow diagonal /></Link><Link href="/research"><span>Research</span><strong>Explore questions and collaboration</strong><Arrow diagonal /></Link><Link href="/events"><span>Events</span><strong>See what is coming next</strong><Arrow diagonal /></Link><Link href="/contact"><span>Engage</span><strong>Training, dialogue or another enquiry</strong><Arrow diagonal /></Link></div></div></section>
    <EventSpotlightPopup
      title={events[0].title}
      theme={events[0].theme}
      dateLabel={events[0].dateLabel}
      venue={events[0].venue}
      abstractDeadline={events[0].deadlines.abstractSubmission}
      earlyBirdDeadline={events[0].deadlines.earlyBirdRegistration}
      website={events[0].website}
      countdownTarget="2026-11-04T00:00:00+01:00"
    />
  </main><SiteFooter /></>;
}
