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
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
              <Image src="https://www.pngkey.com/png/detail/371-3715555_nasarawa-state-university-keffi-nsuk.png" alt="Nasarawa State University, Keffi logo" width={48} height={48} priority style={{ width: 40, height: 40 }} />
              <Image src="/assets/cgs-logo.jpg" alt="Centre for Gender Studies logo" width={48} height={48} priority style={{ width: 40, height: 40 }} />
            </span>
            <span><strong>Centre for Gender Studies</strong><small>Nasarawa State University, Keffi</small></span>
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
