"use client";

import { useScrollReveal } from "./lib/useGsap";

export default function UeberSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.1 });

  return (
    <section className="ueber-section" id="ueber" ref={ref}>
      <div className="ueber-photo">
        <div className="ueber-photo-box gsap-left">
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ccc"
            strokeWidth="1.5"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>
            Foto der Inhaberin
            <br />
            kommt hier hin
          </span>
        </div>
        <div className="ueber-photo-accent gsap-scale" />
        <div className="ueber-photo-tag gsap-up">
          Inhaberin seit Januar 2026
          <small>Esso Tankstelle Battenberg (Eder)</small>
        </div>
      </div>
      <div className="ueber-content">
        <div className="section-label gsap-right">Über uns</div>
        <h2 className="section-title gsap-right">
          Ihr Ansprechpartner
          <br />
          vor Ort
        </h2>
        <p className="gsap-right" style={{ marginTop: 24 }}>
          Seit <strong>Januar 2026</strong> führe ich diese Esso Tankstelle mit
          vollem Einsatz. Als Existenzgründerin habe ich mir vorgenommen, dass
          Ihr Tankstopp hier immer angenehm, schnell und verlässlich ist.
        </p>
        <p className="gsap-right">
          Ich bin persönlich vor Ort – mit offenem Ohr für Ihre Wünsche. Diese
          Tankstelle ist mehr als nur ein Stopp:{" "}
          <strong>sie ist ein Treffpunkt für die Nachbarschaft.</strong>
        </p>
        <div className="ueber-values">
          <div className="ueber-val gsap-up">
            <div className="ueber-val-icon">
              <svg viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h4>Für alle offen</h4>
              <p>Mehrsprachige Kundengruppen willkommen.</p>
            </div>
          </div>
          <div className="ueber-val gsap-up">
            <div className="ueber-val-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h4>Verlässlichkeit</h4>
              <p>Klare Zeiten, transparente Abrechnung.</p>
            </div>
          </div>
          <div className="ueber-val gsap-up">
            <div className="ueber-val-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <h4>Lokal verwurzelt</h4>
              <p>
                Kooperationen mit der Bäckerei Eckhardt, dem Autoservice
                Biermann und der Waschanlage vor Ort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
