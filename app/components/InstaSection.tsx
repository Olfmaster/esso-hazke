"use client";

import { useScrollReveal } from "./lib/useGsap";

export default function InstaSection() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <div className="insta-outer" ref={ref}>
      <section className="insta-section">
        <div className="section-label gsap-up">Social Media</div>
        <h2 className="section-title gsap-up">
          Folgen Sie uns
          <br />
          auf Instagram
        </h2>
        <p className="section-lead gsap-up">
          Aktionen, Angebote und Neuigkeiten posten wir zuerst auf Instagram und
          Facebook.
        </p>
        <div className="insta-grid">
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="insta-ph gsap-scale" key={i}>
              📸
            </div>
          ))}
        </div>
        <p
          className="gsap-fade"
          style={{
            fontSize: 13,
            color: "var(--muted)",
            marginBottom: 12,
          }}
        >
          Instagram-Feed wird nach API-Freischaltung eingebunden
        </p>
        <div className="insta-links">
          <a
            href="https://www.instagram.com/tankstelle_35088_valeriyahazke"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-link gsap-fade"
          >
            @tankstelle_35088_valeriyahazke auf Instagram folgen →
          </a>
          <a
            href="https://www.facebook.com/share/17LNgw5euc/"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-link gsap-fade"
          >
            Esso-Station Bienhaus auf Facebook →
          </a>
        </div>
      </section>
    </div>
  );
}
