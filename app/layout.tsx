import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./site.css";
import "./hero-mobile.css";
import "./mandate-mobile-center.css";
import "./mandate-cta-mobile.css";
import "./programmes-mobile-center.css";
import "./research-mobile-center.css";
import "./activity-mobile-center.css";
import "./content-cards-mobile.css";
import "./desktop-hero.css";
import "./desktop-flow.css";
import "./hero-carousel.css";
import "./eyebrow-cleanup.css";
import "./editorial-center-desktop.css";
import "./motion.css";
import "./homepage-spacing.css";
import { siteUrl } from "../lib/site-config";
import { ScrollToTop } from "../components/scroll-to-top";
import { SiteMotion } from "../components/site-motion";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Centre for Gender Studies | NSUK", template: "%s | Centre for Gender Studies" },
  description: "Research, teaching and public engagement focused on gender and society at Nasarawa State University, Keffi.",
  applicationName: "Centre for Gender Studies",
  keywords: ["gender studies", "Nasarawa State University", "gender research", "gender studies programmes", "Keffi"],
  openGraph: {
    type: "website",
    siteName: "Centre for Gender Studies",
    title: "Centre for Gender Studies | NSUK",
    description: "Research, teaching and public engagement focused on gender and society at Nasarawa State University, Keffi.",
    images: [{ url: "/assets/cgs-research-workshop.jpg", width: 1600, height: 1067, alt: "Participants at a CGS research workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Centre for Gender Studies | NSUK", description: "Research, teaching and public engagement focused on gender and society at Nasarawa State University, Keffi.", images: ["/assets/cgs-research-workshop.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Centre for Gender Studies",
    alternateName: "CGS NSUK",
    url: siteUrl,
    email: "genderstudies@nsuk.edu.ng",
    telephone: ["08035810883", "09065535223"],
    address: { "@type": "PostalAddress", streetAddress: "Old Administrative Block / Lincoln Building", addressCountry: "NG" },
    parentOrganization: { "@type": "CollegeOrUniversity", name: "Nasarawa State University, Keffi" },
  };

  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /><ScrollToTop /><SiteMotion />{children}</body></html>;
}
