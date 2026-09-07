import Image from "next/image";
import { SiteHeader } from "../components/site-header";

const programmes = [
  { code: "ECGS", title: "Executive Certificate in Gender Studies", mode: "Part-time", description: "For students, public servants, development practitioners and community leaders building practical knowledge of gender equality, leadership, human rights and social inclusion." },
  { code: "PGDGS", title: "Postgraduate Diploma in Gender Studies", mode: "Part-time", description: "For graduates and professionals who want to connect gender perspectives with public management, leadership, ethics and service delivery." },
  { code: "MGS", title: "Master of Gender Studies", mode: "Full-time · Professional", description: "For academics, practitioners and policymakers developing advanced skills for gender-responsive policy, advocacy and professional practice." },
  { code: "MSc", title: "Master of Science in Gender Studies", mode: "Full-time", description: "Build strong research, policy analysis and scholarly writing skills for work in universities, government and development organisations." },
  { code: "M.Phil.", title: "Master of Philosophy in Gender Studies", mode: "Full-time · Research", description: "Develop independent scholarship and advanced research expertise in a chosen area of Gender Studies." },
  { code: "PhD", title: "Doctor of Philosophy in Gender Studies", mode: "Full-time · Research", description: "Produce original research and develop the methods to address complex gender questions in Nigeria and beyond." },
];

function Weave({ className = "" }: { className?: string }) {
  return <svg className={`weave ${className}`} viewBox="0 0 200 200" fill="none" aria-hidden="true">
    {Array.from({ length: 9 }, (_, i) => <ellipse key={i} cx="100" cy="100" rx="91" ry="29" stroke="currentColor" strokeWidth="1.4" transform={`rotate(${i * 20} 100 100)`} />)}
    <circle cx="100" cy="100" r="12" fill="currentColor" />
  </svg>;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return <>
    <SiteHeader />
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-kicker"><p className="eyebrow"><span className="status-dot" /> Centre for Gender Studies / NSUK</p><span className="location">Keffi, Nigeria</span></div>
        <div className="hero-grid">
          <div className="hero-copy"><h1 id="hero-title">Learn how society works.<br /><em>Help make it fairer.</em></h1><p>Postgraduate programmes and research in Gender Studies at Nasarawa State University, Keffi.</p><div className="hero-actions"><a className="button button-ink" href="#programmes">Explore programmes <Arrow /></a><a className="small-link" href="#about">See what we do <Arrow diagonal /></a></div></div>
          <figure className="hero-photo"><Image src="/assets/expo-community.jpg" alt="Centre for Gender Studies representatives together at the Abuja Business and Investment Expo" fill preload sizes="(max-width: 700px) 100vw, 55vw" /><figcaption><span className="status-dot" /> Learning with people. Working for change.<a href="#impact" aria-label="See the Centre's work"><Arrow diagonal /></a></figcaption></figure>
        </div>
      </section>
      <div className="chapter-strip" aria-label="What the Centre does"><span>Different voices.<br /><strong>Shared futures.</strong></span><span>Study <i aria-hidden="true">↗</i></span><span>Research <i aria-hidden="true">↗</i></span><span>Work with communities <i aria-hidden="true">↗</i></span></div>
      <section className="section about" id="about">
        <div className="section-label"><span>01 / The Centre</span><span>A space for possibility</span></div>
        <div className="about-content"><h2>We study how gender shapes lives.<br /><em>Then help make opportunity fairer.</em></h2><div className="about-text"><p className="lead">Gender affects education, work, leadership and everyday life.</p><p>At the Centre for Gender Studies, Nasarawa State University, Keffi, we teach and research how those effects are felt. We connect students, researchers, policymakers and communities to practical ideas for a fairer society.</p><p>Our work includes gender equality, women’s empowerment, public policy, leadership, human rights, peacebuilding and social inclusion.</p><a className="text-link" href="#research">Explore our research areas <Arrow diagonal /></a></div></div>
        <div className="about-foot"><span className="mini-weave"><Weave /></span><p>Rooted in Nigeria.<br /><strong>Open to wider conversations.</strong></p><span className="about-note">An interdisciplinary home for<br />gender study, research and action at NSUK.</span></div>
      </section>
      <section className="section programmes" id="programmes">
        <div className="section-label"><span>02 / Study with us</span><span>Six programmes. Your next chapter.</span></div>
        <div className="study-layout"><div className="study-intro"><span className="oversized-number" aria-hidden="true">06<span>↗</span></span><h2>Choose the programme that fits your <em>next step.</em></h2><p>Six programmes for professionals, graduates and researchers — from an executive certificate to a PhD.</p><a className="text-link" href="mailto:genderstudies@nsuk.edu.ng?subject=Programme%20guidance">Help me choose <Arrow diagonal /></a><p className="study-note">Not sure where to begin?<br />Tell us what you want to do.</p></div>
          <div className="programme-list">{programmes.map((programme, index) => <details className="programme" name="programmes" key={programme.code}><summary><span className="programme-number">0{index + 1}</span><span className="programme-title">{programme.title}<small>{programme.code} / {programme.mode}</small></span><span className="expand-icon" aria-hidden="true">+</span></summary><div className="programme-content"><p>{programme.description}</p><a className="text-link" href={`mailto:genderstudies@nsuk.edu.ng?subject=${encodeURIComponent(`${programme.title} enquiry`)}`}>Ask about this programme <Arrow diagonal /></a></div></details>)}</div></div>
      </section>
      <section className="impact" id="impact">
        <div className="impact-image"><Image src="/assets/expo-panel.jpg" alt="Centre representatives taking part in the Abuja Business and Investment Expo" fill sizes="(max-width: 700px) 100vw, 50vw" /><span className="image-stamp">Beyond<br />the classroom.<Arrow diagonal /></span><p className="image-credit">CGS Campus Ambassadors / Abuja Expo 3.0</p></div>
        <div className="impact-copy"><p className="eyebrow">03 / Knowledge in motion</p><h2>Our work goes<br /><em>beyond the classroom.</em></h2><p>At Abuja Business &amp; Investment Expo 3.0, CGS campus ambassadors joined discussions on entrepreneurship, women’s leadership and access to opportunity.</p><p>From bold business ideas to the barriers women face when seeking investment, one message stood out: talent needs opportunity.</p><a className="text-link" href="#expo-story">Read the Expo story <Arrow diagonal /></a></div>
      </section>
      <section className="section research" id="research">
        <div className="section-label"><span>04 / Research &amp; engagement</span><span>Questions worth asking</span></div>
        <div className="research-heading"><h2>Research that connects<br /><em>to real life.</em></h2><p>We study the policies, beliefs and systems that shape people’s opportunities.</p></div>
        <div className="research-list">
          <article><span>01</span><h3>Power, policy<br />&amp; representation</h3><p>Who makes decisions, and who gets heard?</p><span className="research-mark" aria-hidden="true">↗</span></article>
          <article><span>02</span><h3>Learning, livelihoods<br />&amp; opportunity</h3><p>How do education and work open doors?</p><span className="research-mark" aria-hidden="true">↗</span></article>
          <article><span>03</span><h3>Peace, rights<br />&amp; belonging</h3><p>What helps people live safely and take part?</p><span className="research-mark" aria-hidden="true">↗</span></article>
        </div>
      </section>
      <section className="section news" id="news">
        <div className="section-label"><span>05 / From the Centre</span><span>People. Ideas. Happenings.</span></div>
        <div className="journal-heading"><h2>What we’re doing<br /><em>and learning.</em></h2><a className="text-link" href="mailto:genderstudies@nsuk.edu.ng?subject=Upcoming%20CGS%20events">Ask about upcoming events <Arrow diagonal /></a></div>
        <article className="journal-story" id="expo-story"><div className="journal-photo"><Image src="/assets/expo-stage.jpg" alt="Panel discussion on stage at Abuja Business and Investment Expo 3.0" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="journal-copy"><p className="eyebrow">Field notes / Abuja, Nigeria</p><h3>Talent is everywhere.<br /><em>Opportunity should be, too.</em></h3><p>At Abuja Business &amp; Investment Expo 3.0, young entrepreneurs pitched ideas spanning waste transformation, food and cybersecurity. Alongside them, the women’s leadership session explored the distance between capability and access.</p><p>Representing NSUK, the Centre’s campus ambassadors joined a conversation about mentorship, representation and the support needed to turn ideas into lasting opportunities.</p><a className="text-link" href="mailto:genderstudies@nsuk.edu.ng?subject=Abuja%20Expo%20enquiry">Connect with us about this work <Arrow diagonal /></a></div></article>
      </section>
      <section className="contact" id="contact"><div className="section-label"><span>The next step starts with you</span><span>Keffi, Nigeria</span></div><div className="contact-main"><h2>Have a question about<br /><em>studying or working with us?</em></h2><a className="contact-arrow" href="mailto:genderstudies@nsuk.edu.ng" aria-label="Email the Centre for Gender Studies"><Arrow diagonal /></a></div><div className="contact-bottom"><p>Ask about programmes, research, partnerships or events.<br />We’d be glad to hear from you.</p><a href="mailto:genderstudies@nsuk.edu.ng">Email the Centre <Arrow diagonal /></a></div></section>
    </main>
    <footer><div className="footer-top"><a className="brand" href="#top"><Image src="/assets/cgs-logo.jpg" alt="" width={52} height={52} /><span><strong>Centre for<br />Gender Studies</strong><small>Nasarawa State University, Keffi</small></span></a><p>Old Administrative Block /<br />Lincoln Building, NSUK<br /><a href="tel:+2348035810883">0803 581 0883</a></p><div className="footer-links"><a href="#about">The Centre</a><a href="#programmes">Study with us</a><a href="#research">Research &amp; engagement</a><a href="#news">From the Centre</a></div><a className="back-top" href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Centre for Gender Studies, NSUK.</span><span>Different voices. Shared futures.</span></div></footer>
  </>;
}
