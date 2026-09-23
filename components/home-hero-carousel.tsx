import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./page-shell";

const leadership = [
  {
    role: "Vice-Chancellor",
    image: "/assets/nsuk-vice-chancellor-saadatu-liman.jpeg",
    objectPosition: "50% 22%",
  },
  {
    role: "DVC Academic",
    image: "https://spgs.nsuk.edu.ng/wp-content/uploads/2025/09/542092165_1188100066686717_1667538861005516670_n-768x548.jpg",
    objectPosition: "50% 28%",
  },
  {
    role: "CGS Director",
    image: "/assets/cgs-director-comfort-adokwe.jpeg",
    objectPosition: "50% 20%",
  },
] as const;

export function HomeHeroCarousel() {
  return (
    <div className="container hero__layout hero-institutional">
      <figure className="hero__media" aria-hidden="true">
        <Image
          src="/assets/cgs-research-workshop.jpg"
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
        <div className="hero-leadership__heading">
          <span>University &amp; Centre leadership</span>
          <small>Part of the NSUK academic community</small>
        </div>
        <div className="hero-leadership__portraits">
          {leadership.map((person) => (
            <figure className="hero-leadership__portrait" key={person.role}>
              <div className="hero-leadership__image">
                <Image
                  src={person.image}
                  alt=""
                  fill
                  sizes="(max-width: 620px) 88px, 150px"
                  quality={88}
                  style={{ objectFit: "cover", objectPosition: person.objectPosition }}
                />
              </div>
              <figcaption>{person.role}</figcaption>
            </figure>
          ))}
        </div>
      </aside>
    </div>
  );
}
