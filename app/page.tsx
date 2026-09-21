import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Arrow } from "../components/page-shell";
import { HomeHeroCarousel } from "../components/home-hero-carousel";
import { activities, events, programmes, researchAreas } from "./site-data";

const images = {
  director: "/assets/cgs-director-comfort-adokwe.jpeg",
  community: "/assets/cgs-advisory-group.jpg",
  study: "/assets/cgs-research-workshop.jpg",
  researchStory: "/assets/cgs-awareness-campaign.jpg",
};

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
function ResearchIcon({ index }: { index: number }) {
  const paths = [
    <><circle cx="18" cy="10" r="4"/><circle cx="9" cy="15" r="3"/><circle cx="27" cy="15" r="3"/><path d="M8 30v-3c0-5 4.4-9 10-9s10 4 10 9v3M2 30v-2c0-3 2.4-5 6-5M34 30v-2c0-3-2.4-5-6-5"/></>,
    <><path d="m18 4 12 5v8c0 7-5.2 11-12 15C11.2 28 6 24 6 17V9l12-5Z"/><path d="m12 18 4 4 8-9"/></>,
    <><circle cx="18" cy="10" r="5"/><path d="M8 31v-4c0-5 4.4-9 10-9s10 4 10 9v4"/></>,
    <><path d="M18 31S6 24 6 14a6 6 0 0 1 12-2 6 6 0 0 1 12 2c0 10-12 17-12 17Z"/><path d="M10 18h5l2-4 3 8 2-4h4"/></>,
    <><path d="M5 8c5-2 9-.9 13 2.5V31c-4-3.4-8-4.5-13-2.5V8ZM31 8c-5-2-9-.9-13 2.5V31c4-3.4 8-4.5 13-2.5V8Z"/></>,
    <><path d="M5 31h26M8 31V13h20v18M5 13h26M11 9h14M15 5h6"/><path d="M13 18v8M18 18v8M23 18v8"/></>,
  ];
  return <span className="research-grid__icon" aria-hidden="true"><svg viewBox="0 0 36 36">{paths[index]}</svg></span>;
}

export default function Home() {
  return <><SiteHeader /><main id="main" className="home-page">
    <section className="hero" id="top" aria-labelledby="hero-title">
      <HomeHeroCarousel />
      <div className="container proof-strip" aria-label="Centre at a glance">
        <div><ProofIcon name="book"/><strong>{String(programmes.length).padStart(2, "0")}</strong><span data-mobile-label="Postgraduate programmes">Postgraduate programmes</span></div>
        <div><ProofIcon name="community"/><strong>Certificate + Diploma</strong><span data-mobile-label="Study pathways">Additional Centre learning</span></div>
        <div><ProofIcon name="impact"/><strong>Research · Teaching · Engagement</strong><span data-mobile-label="Public engagement">Knowledge connected to public life</span></div>
        <a className="proof-strip__scroll" href="#about">Scroll to explore <span aria-hidden="true">⌄</span></a>
      </div>
    </section>
    <section className="section mandate-section" id="about" aria-labelledby="mandate-title"><div className="container mandate-layout"><div className="section-intro"><Eyebrow>Our mandate</Eyebrow><h2 id="mandate-title">Gender shapes institutions. We study how, and what can change.</h2><p>CGS is a multidisciplinary home for advanced study, research and public engagement at Nasarawa State University, Keffi.</p></div><div className="mandate-list">{[["01","Research","Produce evidence.","Examine the policies, systems and social expectations that shape people’s opportunities.","research"],["02","Teaching","Develop expertise.","Equip students and professionals with the knowledge and methods needed for serious gender analysis.","teaching"],["03","Engagement","Inform public life.","Bring scholarship into conversation with communities, institutions, practitioners and policymakers.","engagement"]].map(([i,l,h,p,icon])=><article key={i}><div className="mandate-list__marker"><MandateIcon name={icon as "research" | "teaching" | "engagement"}/><span className="index">{i}</span></div><div><p className="label">{l}</p><h3>{h}</h3><p>{p}</p></div></article>)}</div></div><div className="container mandate-cta"><p>Knowledge.<br/>People.<br/><em>A fairer tomorrow.</em></p><Link className="text-link" href="/about">About the Centre <Arrow /></Link></div></section>
    <section className="section programmes programmes--home" id="programmes" aria-labelledby="programmes-title">
      <div className="container">
        <div className="section-heading">
          <div><Eyebrow>Study at CGS</Eyebrow><h2 id="programmes-title">Choose the level that matches <em>your next step.</em></h2></div>
          <p>CGS supports different routes into gender study, from certificate and diploma learning to postgraduate and doctoral research.</p>
        </div>
        <figure className="programmes__feature"><Image src={images.study} alt="CGS research workshop with participants gathered around a table" fill sizes="(max-width: 620px) 100vw, 760px" /><figcaption><span>Learning for<br/>a more equal<br/>tomorrow.</span></figcaption></figure>
        <div className="programme-list">
          {[
            ["01", "Foundation learning", "Certificate & diploma", "Begin with structured Gender Studies learning and confirm current admission arrangements directly with CGS."],
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
        <div className="programme-support">
          <div><strong>See the verified programme structure.</strong><p>Explore current postgraduate listings and Centre study offerings, then contact CGS for up-to-date admissions guidance.</p></div>
          <Link className="button button--accent" href="/programmes">View all programmes <Arrow /></Link>
        </div>
        
      </div>
    </section>
    <section className="section research research--home" id="research" aria-labelledby="research-title"><div className="container research__header"><Eyebrow light>Research focus</Eyebrow><h2 id="research-title">Questions grounded in the realities <em>of society.</em></h2><p>Our areas of inquiry reflect the many ways gender intersects with development, institutions, health, education, leadership and public life.</p><figure className="research__feature"><Image src={images.researchStory} alt="Women taking part in a domestic violence awareness and survivor support campaign" fill sizes="(max-width: 620px) 100vw, 760px" /><figcaption>Evidence, dialogue and survivor support</figcaption></figure></div><div className="container research-grid">{researchAreas.map(([title,description],index)=><article key={title}><span className="index">0{index+1}</span><ResearchIcon index={index}/><div className="research-grid__copy"><h3>{title}</h3><p>{description}</p></div><span className="research-grid__arrow"><Arrow /></span></article>)}</div><div className="container research__action"><div className="research-cta"><ResearchIcon index={0}/><div><strong>Explore the Centre&apos;s research focus.</strong><p>See the areas of inquiry, evidence and ways to begin a research conversation.</p></div><Link href="/research" aria-label="Explore CGS research"><Arrow diagonal /></Link></div></div></section>
    <section className="section home-event" id="events" aria-labelledby="home-event-title"><div className="container home-event__grid"><div className="home-event__date" aria-label={events[0].dateLabel}><span>NOV</span><strong>04</strong><small>TO 07 · 2026</small></div><div className="home-event__copy"><Eyebrow>Upcoming at CGS</Eyebrow><p className="label">{events[0].type}</p><h2 id="home-event-title">{events[0].title}</h2><p className="home-event__theme">{events[0].theme}</p><p>{events[0].summary}</p><div className="home-event__facts"><span><strong>{events[0].dateLabel}</strong>Conference dates</span><span><strong>{events[0].deadlines.abstractSubmission}</strong>Abstracts close</span><span><strong>{events[0].deadlines.earlyBirdRegistration}</strong>Early bird closes</span></div><div className="home-event__actions"><Link className="button button--accent" href="/events">View event details <Arrow /></Link><a className="text-link" href={events[0].website} target="_blank" rel="noreferrer">Conference website <Arrow diagonal /></a></div></div></div></section>
    <section className="section leadership leadership--home" id="leadership" aria-labelledby="leadership-title"><div className="container leadership__layout"><div className="director-card"><figure><Image src={images.director} alt="Dr. Comfort Ayine Adokwe-Obed, Acting Director of the Centre for Gender Studies" fill sizes="(max-width: 760px) 45vw, 260px" /></figure><div><span>Ag. Director, Centre for Gender Studies</span><strong>Dr. Comfort Ayine<br/>Adokwe-Obed</strong><small>Senior Lecturer, Department of Public Administration</small><div className="director-card__links"><a className="text-link" href="https://www.linkedin.com/in/adokwe-comfort-392a4223b/" target="_blank" rel="noreferrer">View LinkedIn profile <Arrow diagonal /></a><Link className="text-link" href="/contact">Contact the Centre <Arrow diagonal /></Link></div></div></div><div className="leadership__copy"><Eyebrow>Leadership</Eyebrow><h2 id="leadership-title">Policy scholarship with an institutional purpose.</h2><p>Dr. Comfort Ayine Adokwe-Obed serves as Ag. Director of the Centre, with academic interests connecting public policy, governance, gender analysis and development.</p><p>Her leadership connects the Centre’s teaching, research, capacity development and public engagement.</p></div></div><div className="container leadership-handoff"><div><Eyebrow>Meet the Centre</Eyebrow><p>Leadership is only one part of the institution. Explore the wider academic and administrative team behind CGS.</p></div><Link className="text-link" href="/about#team">Meet the wider team <Arrow diagonal /></Link></div></section>
    <section className="section activity" id="activity" aria-labelledby="activity-title"><div className="container activity__layout"><figure className="activity__media"><Image src={images.community} alt="Members of the CGS academic and advisory community gathered after a Centre meeting" fill sizes="(max-width: 760px) 100vw, 52vw" /><figcaption>An institutional community for gender scholarship</figcaption></figure><div className="activity__copy"><Eyebrow>Current at CGS</Eyebrow><h2 id="activity-title">A Centre that convenes people around serious questions.</h2><p>Recent Centre records show an active academic and institutional community. Explore the documented activity on this site, with source folders available as supporting evidence.</p><div className="activity-list">{activities.map(activity=><Link href={`/activity#${activity.id}`} key={activity.title}><span>{activity.type}</span><strong>{activity.title}</strong><small>{activity.description}</small><Arrow diagonal /></Link>)}</div></div></div></section>
    <section className="engage" id="engage" aria-labelledby="engage-title"><div className="container engage__layout"><div><Eyebrow light>Choose your next step</Eyebrow><h2 id="engage-title">What brings you to CGS?</h2></div><div className="engage__options"><Link href="/programmes"><span>Study</span><strong>Find the right programme</strong><Arrow diagonal /></Link><Link href="/research"><span>Research</span><strong>Explore questions and collaboration</strong><Arrow diagonal /></Link><Link href="/events"><span>Events</span><strong>See what is coming next</strong><Arrow diagonal /></Link><Link href="/contact"><span>Engage</span><strong>Training, dialogue or another enquiry</strong><Arrow diagonal /></Link></div></div></section>
  </main><SiteFooter /></>;
}
