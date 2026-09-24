import Image from "next/image";

export function PartnersBand() {
  return (
    <section className="partners-band" aria-labelledby="partners-band-title">
      <div className="container partners-band__inner">
        <div className="partners-band__intro">
          <span className="partners-band__eyebrow">Partners & collaborators</span>
          <h2 id="partners-band-title">Working together for gender equity.</h2>
        </div>

        <div className="partners-band__partner">
          <div className="partners-band__logo">
            <Image
              src="/assets/gender-mobile-logo.webp"
              alt="Gender Mobile Initiative"
              width={137}
              height={51}
              sizes="137px"
            />
          </div>
          <div className="partners-band__copy">
            <strong>Gender Mobile Initiative</strong>
            <p>
              Advancing gender equity and strengthening prevention and response to
              sexual and gender-based violence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
