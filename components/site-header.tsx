"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { navigation } from "../app/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } }}>
        <div className="container header__inner">
          <Link className="brand" href="/" aria-label="Centre for Gender Studies home">
            <span className="brand__marks" aria-hidden="true">
              <Image src="https://www.pngkey.com/png/detail/371-3715555_nasarawa-state-university-keffi-nsuk.png" alt="" width={48} height={48} priority />
              <Image src="/assets/cgs-logo.jpg" alt="" width={48} height={48} priority />
            </span>
            <span className="brand__copy">
              <strong><span>Centre for</span> <span>Gender Studies</span></strong>
              <small>Nasarawa State University, Keffi</small>
            </span>
          </Link>
          <button ref={menuButton} className={open ? "menu-button menu-button--open" : "menu-button"} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span aria-hidden="true"/><span aria-hidden="true"/><span aria-hidden="true"/></button>
          <nav id="site-nav" className={open ? "site-nav site-nav--open" : "site-nav"} aria-label="Primary navigation">
            {navigation.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Contact CGS <span className="link-arrow link-arrow--diagonal" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7 17 17 7M8 7h9v9" /></svg></span></Link>
          </nav>
        </div>
      </header>
    </>
  );
}
