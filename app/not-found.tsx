import Link from "next/link";
import { Arrow, Eyebrow, PageShell } from "../components/page-shell";

export default function NotFound() {
  return <PageShell><section className="not-found"><Eyebrow light>Page not found</Eyebrow><h1>Let’s find the right place for your question.</h1><p>The page you requested does not exist or may have moved.</p><Link className="button button--accent" href="/">Return to the CGS homepage <Arrow /></Link></section></PageShell>;
}
