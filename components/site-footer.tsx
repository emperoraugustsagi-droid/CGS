import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "../app/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <Link className="footer__brand" href="/">
          <Image src="/assets/cgs-logo.jpg" alt="" width={50} height={50} />
          <span><strong>CGS</strong><small>{site.name}<br />{site.university}</small></span>
        </Link>
        <p>Research, teaching and public engagement focused on gender and society.</p>
        <address>
          <span>{site.address}</span>
          {site.phones.map((phone) => <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>{phone}</a>)}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </address>
        <nav aria-label="Footer navigation">
          {navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} {site.name}, NSUK.</span><span>Evidence. Dialogue. Understanding.</span></div>
    </footer>
  );
}
