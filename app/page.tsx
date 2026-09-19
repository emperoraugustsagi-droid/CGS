import Image from "next/image";
import { SiteHeader } from "../components/site-header";
import { team } from "./site-data";

const images = {
  heroDesktop: "/assets/cgs-hero-desktop.png",
  heroMobile: "/assets/cgs-hero-mobile-v3.png",
  director: "/assets/cgs-director-comfort-adokwe.jpeg",
  community: "/assets/cgs-advisory-group.jpg",
  study: "/assets/cgs-research-workshop.jpg",
  researchStory: "/assets/cgs-awareness-campaign.jpg",
};

const programmes = [
  { code: "ECGS", title: "Executive Certificate in Gender Studies", format: "Part-time certificate", summary: "A practical foundation for students, public servants, development practitioners and community leaders." },
  { code: "PGDGS", title: "Postgraduate Diploma in Gender Studies", format: "Part-time postgraduate diploma", summary: "For graduates and professionals building gender awareness for public service and organisational practice." },
  { code: "MGS", title: "Master of Gender Studies", format: "Full-time professional degree", summary: "Advanced interdisciplinary study for academics, practitioners, policymakers and professionals." },
  { code: "MSc", title: "Master of Science in Gender Studies", format: "Full-time master’s degree", summary: "Research, policy analysis and scholarly training for academic and development-focused careers." },
  { code: "M.Phil.", title: "Master of Philosophy in Gender Studies", format: "Full-time research degree", summary: "Advanced theoretical and research training for independent scholarship and consultancy." },
  { code: "PhD", title: "Doctor of Philosophy in Gender Studies", format: "Full-time doctoral degree", summary: "Original research for scholars prepared to advance knowledge and address complex gender questions." },
] as const;

const researchAreas = [
  ["Gender & Development", "Opportunity, work and economic life"], ["Gender-Based Violence", "Prevention, response and lived experience"], ["Women & Leadership", "Participation, power and decision-making"], ["Gender & Health", "Health, wellbeing and access to care"], ["Gender & Education", "Learning, opportunity and social expectations"], ["Gender & Governance", "Policy, institutions and public life"],
] as const;

const activities = [
  { type: "Academic development", title: "CGS Research Workshop", description: "See the Centre’s supplied record of a working session bringing its academic community together.", href: "https://drive.google.com/drive/folders/1hpHDTWqsrZHiBJ4_RJHPcIy-FU5TdIlh" },
  { type: "Institutional leadership", title: "Inauguration of the CGS Advisory Committee", description: "View the Centre’s documented advisory committee inauguration and institutional gathering.", href: "https://drive.google.com/drive/folders/1cKRh2d7ZJfGsUaSDe6bxrS7AkB8me2sC" },
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>; }
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
  return <><SiteHeader /><main id="main">
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div className="hero__copy">
          <Eyebrow light>Centre for Gender Studies · NSUK</Eyebrow>
          <h1 id="hero-title"><span>Researching gender.</span><span>Understanding society.</span><span>Informing <em>change.</em></span></h1>
          <p><span className="hero__summary-desktop">We examine how gender shapes institutions, opportunity and everyday life, then connect rigorous scholarship with teaching, policy and public engagement.</span><span className="hero__summary-mobile">Research, teaching and public engagement connecting gender scholarship to real life.</span></p>
          <div className="hero__actions"><a className="button button--gold" href="#programmes">Explore programmes <Arrow /></a><a className="text-link text-link--light" href="#research">Our research focus <Arrow /></a></div>
        </div>
        <figure className="hero__media"><picture><source media="(max-width: 620px)" srcSet={images.heroMobile} /><img src={images.heroDesktop} alt="Nigerian university student studying on campus" /></picture><figcaption><span>Centre for Gender Studies</span><span>Scholarship in conversation</span></figcaption></figure>
      </div>
      <div className="container proof-strip" aria-label="Centre at a glance">
        <div><ProofIcon name="book"/><strong>06</strong><span>Academic programmes</span></div>
        <div><ProofIcon name="community"/><strong>Certificate → PhD</strong><span data-mobile-label="Stronger communities">A complete study pathway</span></div>
        <div><ProofIcon name="impact"/><strong>Research · Teaching · Policy</strong><span data-mobile-label="Real-world impact">Knowledge connected to public life</span></div>
        <a className="proof-strip__scroll" href="#about">Scroll to explore <span aria-hidden="true">⌄</span></a>
      </div>
    </section>
    <section className="section mandate-section" id="about" aria-labelledby="mandate-title"><div className="container mandate-layout"><div className="section-intro"><Eyebrow>Our mandate</Eyebrow><h2 id="mandate-title">Gender shapes institutions. We study how, and what can change.</h2><p>CGS is a multidisciplinary home for advanced study, research and public engagement at Nasarawa State University, Keffi.</p></div><div className="mandate-list">{[["01","Research","Produce evidence.","Examine the policies, systems and social expectations that shape people’s opportunities.","research"],["02","Teaching","Develop expertise.","Equip students and professionals with the knowledge and methods needed for serious gender analysis.","teaching"],["03","Engagement","Inform public life.","Bring scholarship into conversation with communities, institutions, practitioners and policymakers.","engagement"]].map(([i,l,h,p,icon])=><article key={i}><div className="mandate-list__marker"><MandateIcon name={icon as "research" | "teaching" | "engagement"}/><span className="index">{i}</span></div><div><p className="label">{l}</p><h3>{h}</h3><p>{p}</p></div></article>)}</div></div><div className="container mandate-cta"><p>Knowledge.<br/>People.<br/><em>A fairer tomorrow.</em></p><a className="text-link" href="#research">Explore our work <Arrow /></a></div></section>
    <section className="section programmes programmes--home" id="programmes" aria-labelledby="programmes-title"><div className="container"><div className="section-heading"><div><Eyebrow>Study at CGS</Eyebrow><h2 id="programmes-title">Choose the level that matches <em>your next step.</em></h2></div><p>From professional development to original doctoral research, the Centre offers six pathways into deeper gender knowledge.</p></div><figure className="programmes__feature"><Image src={images.study} alt="CGS research workshop with participants gathered around a table" fill sizes="(max-width: 620px) 100vw, 760px" /><figcaption><span>Learning for<br/>a more equal<br/>tomorrow.</span></figcaption></figure><div className="programme-list">{programmes.map((programme,index)=><article className="programme-row" key={programme.code}><span className="index">0{index+1}</span><ProgrammeIcon index={index}/><div className="programme-row__title"><strong>{programme.code}</strong><h3>{programme.title}</h3></div><div className="programme-row__detail"><span>{programme.format}</span><p>{programme.summary}</p></div><a href={`mailto:genderstudies@nsuk.edu.ng?subject=${encodeURIComponent(`${programme.title} enquiry`)}`} aria-label={`Learn more about ${programme.title}`}>Learn more <Arrow diagonal /></a></article>)}</div><div className="programme-support"><div><strong>Not sure which pathway is right for you?</strong><p>Talk to the Centre about programmes and current application guidance.</p></div><a className="button button--wine" href="mailto:genderstudies@nsuk.edu.ng?subject=Programme%20guidance">Speak to us <Arrow /></a></div><div className="programme-footer-cta"><p>Knowledge. People. <em>A fairer tomorrow.</em></p></div></div></section>
    <section className="section research research--home" id="research" aria-labelledby="research-title"><div className="container research__header"><Eyebrow light>Research focus</Eyebrow><h2 id="research-title">Questions grounded in the realities <em>of society.</em></h2><p>Our areas of inquiry reflect the many ways gender intersects with development, institutions, health, education, leadership and public life.</p><figure className="research__feature"><Image src={images.researchStory} alt="Women taking part in a domestic violence awareness and survivor support campaign" fill sizes="(max-width: 620px) 100vw, 760px" /><figcaption>Evidence, dialogue and survivor support</figcaption></figure></div><div className="container research-grid">{researchAreas.map(([title,description],index)=><article key={title}><span className="index">0{index+1}</span><ResearchIcon index={index}/><div className="research-grid__copy"><h3>{title}</h3><p>{description}</p></div><span className="research-grid__arrow" aria-hidden="true">→</span></article>)}</div><div className="container research__action"><div className="research-cta"><ResearchIcon index={0}/><div><strong>Have a research question<br/>or collaboration idea?</strong><p>Let&apos;s explore it together.</p></div><a href="mailto:genderstudies@nsuk.edu.ng?subject=Research%20enquiry" aria-label="Discuss a research question"><Arrow diagonal /></a></div></div></section>
    <section className="section leadership leadership--home" id="leadership" aria-labelledby="leadership-title"><div className="container leadership__layout"><div className="director-card"><figure><Image src={images.director} alt="Dr. Comfort Ayine Adokwe-Obed, Director of the Centre for Gender Studies" fill sizes="(max-width: 760px) 45vw, 260px" /></figure><div><span>Director since February 2026</span><strong>Dr. Comfort Ayine<br/>Adokwe-Obed</strong><small>Senior Lecturer, Department of Public Administration</small><div className="director-card__links"><a className="text-link" href="https://www.linkedin.com/in/adokwe-comfort-392a4223b/" target="_blank" rel="noreferrer">View LinkedIn profile <Arrow diagonal /></a><a className="text-link" href="mailto:genderstudies@nsuk.edu.ng?subject=Connect%20with%20the%20CGS%20Director">Contact the Centre <Arrow diagonal /></a></div></div></div><div className="leadership__copy"><Eyebrow>Leadership</Eyebrow><h2 id="leadership-title">Policy scholarship with an institutional purpose.</h2><p>Dr. Comfort Ayine Adokwe-Obed leads the Centre with expertise in public policy and gender analysis. Her work spans governance, women’s empowerment, development and gender-responsive public policy.</p><p>Before becoming Director, she served as Deputy Director for Academics and Deputy Director of Programs at CGS.</p></div></div><div className="container team-roster" aria-labelledby="team-title"><div><Eyebrow>Centre team</Eyebrow><h3 id="team-title">The people supporting CGS programmes and scholarship.</h3><a className="text-link" href="/about#team">See more about the Centre team <Arrow diagonal /></a></div><div className="team-roster__list">{team.map(([name,role],index)=><div key={name}><span className="index">0{index+1}</span><strong>{name}</strong><small>{role}</small><span className="team-roster__arrow" aria-hidden="true">→</span></div>)}</div></div></section>
    <section className="section activity" id="activity" aria-labelledby="activity-title"><div className="container activity__layout"><figure className="activity__media"><Image src={images.community} alt="Members of the CGS academic and advisory community gathered after a Centre meeting" fill sizes="(max-width: 760px) 100vw, 52vw" /><figcaption>An institutional community for gender scholarship</figcaption></figure><div className="activity__copy"><Eyebrow>Current at CGS</Eyebrow><h2 id="activity-title">A Centre that convenes people around serious questions.</h2><p>Recent Centre records show an active academic and institutional community. Explore the supplied activity folders for the original documentation.</p><div className="activity-list">{activities.map(activity=><a href={activity.href} target="_blank" rel="noreferrer" key={activity.title}><span>{activity.type}</span><strong>{activity.title}</strong><small>{activity.description}</small><Arrow diagonal /></a>)}</div></div></div></section>
    <section className="engage" id="engage" aria-labelledby="engage-title"><div className="container engage__layout"><div><Eyebrow light>Start a conversation</Eyebrow><h2 id="engage-title">What brings you to CGS?</h2></div><div className="engage__options"><a href="mailto:genderstudies@nsuk.edu.ng?subject=Programme%20guidance"><span>Study</span><strong>Find the right programme</strong><Arrow diagonal /></a><a href="mailto:genderstudies@nsuk.edu.ng?subject=Research%20collaboration"><span>Research</span><strong>Discuss collaboration</strong><Arrow diagonal /></a><a href="mailto:genderstudies@nsuk.edu.ng?subject=Training%20and%20capacity%20development"><span>Training</span><strong>Build institutional capacity</strong><Arrow diagonal /></a><a href="mailto:genderstudies@nsuk.edu.ng?subject=Policy%20and%20public%20dialogue"><span>Policy</span><strong>Bring evidence into dialogue</strong><Arrow diagonal /></a></div></div></section>
  </main><footer className="site-footer"><div className="container footer__grid"><a className="footer__brand" href="/"><Image src="/assets/cgs-logo.jpg" alt="" width={50} height={50}/><span><strong>CGS</strong><small>Centre for Gender Studies<br/>Nasarawa State University, Keffi</small></span></a><p>Research, teaching and public engagement focused on gender and society.</p><address><span>Old Administrative Block / Lincoln Building, NSUK</span><a href="tel:+2348035810883">0803 581 0883</a><a href="tel:+2349065535223">0906 553 5223</a><a href="mailto:genderstudies@nsuk.edu.ng">genderstudies@nsuk.edu.ng</a></address><nav aria-label="Footer navigation"><a href="/about">About Us</a><a href="/programmes">Programmes</a><a href="/research">Research</a><a href="/activity">Activity</a><a href="/contact">Contact</a></nav></div><div className="container footer__bottom"><span>© {new Date().getFullYear()} Centre for Gender Studies, NSUK.</span><span>Evidence. Dialogue. Understanding.</span></div></footer></>;
}
