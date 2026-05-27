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
        <a href="#" className="insta-link gsap-fade">
          @esso_badwildungen auf Instagram folgen →
        </a>
      </section>
    </div>
  );
}
