import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow"><span aria-hidden="true" />Page not found</p><h1>Let’s find the right place for your question.</h1><p>The page you requested does not exist or may have moved.</p><Link className="button button--gold" href="/">Return to the CGS homepage <span aria-hidden="true">→</span></Link></main>;
}
