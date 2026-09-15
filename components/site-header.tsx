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
            <Image src="/assets/cgs-logo.jpg" alt="Centre for Gender Studies logo" width={48} height={48} priority />
            <span><strong>Centre for Gender Studies</strong><small>Nasarawa State University, Keffi</small></span>
          </Link>
          <button ref={menuButton} className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? " ×" : " +"}</span></button>
          <nav id="site-nav" className={open ? "site-nav site-nav--open" : "site-nav"} aria-label="Primary navigation">
            {navigation.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Contact CGS <span aria-hidden="true">↗</span></Link>
          </nav>
        </div>
      </header>
    </>
  );
}
