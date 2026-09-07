"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const links = [
  ["About", "#about"],
  ["Study", "#programmes"],
  ["Research", "#research"],
  ["Impact", "#impact"],
  ["News", "#news"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="notice"><span>Nasarawa State University, Keffi</span><a href="#programmes">Find your path in Gender Studies <span aria-hidden="true">↗</span></a></div>
    <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } }}>
      <a className="brand" href="#top" aria-label="Centre for Gender Studies home">
        <Image src="/assets/cgs-logo.jpg" alt="Centre for Gender Studies logo" width={50} height={50} priority />
        <span><strong>Centre for<br />Gender Studies</strong><small>Nasarawa State University, Keffi</small></span>
      </a>
      <button ref={menuButton} className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button>
      <nav id="site-nav" className={open ? "open" : ""} aria-label="Primary navigation">
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="mailto:genderstudies@nsuk.edu.ng?subject=Study%20enquiry">Make an enquiry <span>→</span></a>
      </nav>
    </header>
  </>;
}
