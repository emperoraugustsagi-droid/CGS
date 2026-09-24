import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "../app/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__identity">
          <Link className="footer__brand" href="/">
            <Image src="/assets/cgs-logo.jpg" alt="" width={50} height={50} />
            <span>
              <strong>CGS</strong>
              <small>
                {site.name}
                <br />
                {site.university}
              </small>
            </span>
          </Link>
          <p>Research, teaching and public engagement focused on gender and society.</p>
        </div>

        <div className="footer__column">
          <strong className="footer__label">Contact</strong>
          <address>
            <span>{site.address}</span>
            {site.phones.map((phone) => (
              <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>
                {phone}
              </a>
            ))}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>

        <div className="footer__column footer__socials">
          <strong className="footer__label">Connect</strong>
          <a href={site.socials.whatsapp.href} target="_blank" rel="noreferrer">
            <span>{site.socials.whatsapp.label}</span>
            <small>{site.socials.whatsapp.value}</small>
          </a>
          <div>
            <span>{site.socials.facebook.label}</span>
            <small>{site.socials.facebook.value}</small>
          </div>
          <div>
            <span>{site.socials.tiktok.label}</span>
            <small>{site.socials.tiktok.value}</small>
          </div>
        </div>

        <nav className="footer__column" aria-label="Footer navigation">
          <strong className="footer__label">Explore</strong>
          {navigation.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}, NSUK.</span>
        <span>Evidence. Dialogue. Understanding.</span>
      </div>
    </footer>
  );
}
