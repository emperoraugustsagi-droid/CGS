import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader /><main id="main">{children}</main><SiteFooter /></>;
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={light ? "eyebrow eyebrow--light" : "eyebrow"}><span aria-hidden="true" />{children}</p>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro"><div className="container page-intro__inner"><Eyebrow light>{eyebrow}</Eyebrow><h1>{title}</h1><div className="page-intro__body">{children}</div></div></section>;
}

export function SectionHeading({ eyebrow, title, id, children, light = false, single = false }: { eyebrow: string; title: string; id?: string; children?: React.ReactNode; light?: boolean; single?: boolean }) {
  const className = single ? "section-heading section-heading--single" : "section-heading";
  return <div className={className}><div><Eyebrow light={light}>{eyebrow}</Eyebrow><h2 id={id}>{title}</h2></div>{children ? <p>{children}</p> : null}</div>;
}

export function ContactBand({ title = "Have a question for CGS?", text = "Talk to the Centre about study, research, training or public dialogue." }: { title?: string; text?: string }) {
  return <section className="contact-band"><div className="container contact-band__inner"><div><Eyebrow light>Start a conversation</Eyebrow><h2>{title}</h2><p>{text}</p></div><Link className="button button--gold" href="/contact">Contact the Centre <Arrow /></Link></div></section>;
}
