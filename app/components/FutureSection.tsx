"use client";

import { useScrollReveal } from "./lib/useGsap";

export default function FutureSection() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <div className="future-outer" ref={ref}>
      <section className="future-section">
        <div>
          <div className="section-label gsap-left">Ausblick</div>
          <h2 className="section-title gsap-left">
            Was noch
            <br />
            kommt
          </h2>
          <p className="section-lead gsap-left" style={{ marginTop: 16 }}>
            Diese Tankstelle wächst mit ihrer Gemeinschaft. In den nächsten
            Jahren sind weitere Services geplant.
          </p>
        </div>
        <div className="future-cards">
          <div className="future-card gsap-right">
            <div className="future-dot" />
            <div>
              <strong>Waschanlage</strong>
              <span>Geplant in ca. 2 Jahren</span>
            </div>
          </div>
          <div className="future-card gsap-right">
            <div className="future-dot" />
            <div>
              <strong>Mietwagenservice</strong>
              <span>Geplant in ca. 2 Jahren</span>
            </div>
          </div>
          <div className="future-card gsap-right">
            <div className="future-dot yellow" />
            <div>
              <strong>Weitere Kooperationen</strong>
              <span>Offen für neue Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
