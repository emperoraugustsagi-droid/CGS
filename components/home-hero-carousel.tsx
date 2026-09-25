import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./page-shell";

const leadership = [
  {
    role: "Vice-Chancellor",
    image: "/assets/nsuk-vice-chancellor-saadatu-liman.jpeg",
    objectPosition: "50% 20%",
    scale: 1,
  },
  {
    role: "CGS Director",
    image: "/assets/cgs-director-comfort-adokwe.jpeg",
    objectPosition: "50% 18%",
    scale: 1.08,
  },
] as const;

export function HomeHeroCarousel() {
  return (
    <div className="container hero__layout hero-institutional">
      <figure className="hero__media" aria-hidden="true">
        <Image
          src="/assets/WhatsApp Image 2026-09-24 at 1.36.46 PM.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={88}
          style={{ objectFit: "cover", objectPosition: "center 46%" }}
        />
      </figure>

      <div className="hero__copy">
        <p className="hero__affiliation">Nasarawa State University, Keffi</p>
        <p className="eyebrow eyebrow--light">Centre for Gender Studies</p>
        <h1 id="hero-title">
          <span>Researching gender.</span>
          <span>Understanding society.</span>
          <span>Informing <em>change.</em></span>
        </h1>
        <p className="hero__summary">
          A multidisciplinary Centre for research, teaching and public engagement,
          advancing gender knowledge within the academic community of NSUK.
        </p>
        <div className="hero__actions">
          <Link className="button button--accent" href="/programmes">
            Explore programmes <Arrow />
          </Link>
          <Link className="text-link text-link--light" href="/research">
            Our research focus <Arrow />
          </Link>
        </div>
      </div>

      <aside className="hero-leadership" aria-label="University and Centre leadership">
        <p className="hero-leadership__heading">University &amp; Centre leadership</p>
        <div className="hero-leadership__portraits">
          {leadership.map((person) => (
            <figure
              className="hero-leadership__portrait"
              key={person.role}
              aria-label={person.role}
            >
              <div className="hero-leadership__image">
                <Image
                  src={person.image}
                  alt=""
                  fill
                  sizes="(max-width: 620px) 78px, 128px"
                  quality={88}
                  style={{
                    objectFit: "cover",
                    objectPosition: person.objectPosition,
                    transform: `scale(${person.scale})`,
                  }}
                />
              </div>
            </figure>
          ))}
        </div>
      </aside>
    </div>
  );
}
