"use client";

import { useScrollReveal } from "./lib/useGsap";

export default function AktionenSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="aktionen-section" id="aktionen" ref={ref}>
      <div className="section-label gsap-up">Aktuell & Wöchentlich</div>
      <h2 className="section-title gsap-up">
        Aktionen &<br />
        Angebote
      </h2>
      <p className="section-lead gsap-up">
        Regelmäßige Rabatte und Events – direkt vom Inhaber gepflegt.
      </p>
      <div className="aktionen-grid">
        <div className="aktion-card gsap-up">
          <div className="aktion-top">
            <span className="aktion-badge">Aktion</span>
            <span className="aktion-date">Bis 31.05.2026</span>
          </div>
          <div className="aktion-body">
            <h3>Beispielaktion – 5 ct Rabatt</h3>
            <p>
              Der Inhaber pflegt diese Aktionen selbst – jederzeit aktivier- und
              deaktivierbar.
            </p>
          </div>
        </div>
        <div className="aktion-card gsap-up">
          <div className="aktion-top dark">
            <span className="aktion-badge">Kooperation</span>
            <span className="aktion-date">Jeden Sonntag</span>
          </div>
          <div className="aktion-body">
            <h3>Frische Brötchen von der Bäckerei Eckhardt</h3>
            <p>
              In Kooperation mit der Bäckerei Eckhardt aus Hatzfeld – genau
              dann, wenn Sie sie brauchen.
            </p>
          </div>
        </div>
        <a
          href="https://www.instagram.com/tankstelle_35088_valeriyahazke"
          target="_blank"
          rel="noopener noreferrer"
          className="aktion-card aktion-card--insta gsap-up"
        >
          <div className="aktion-insta-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <h3>Folge uns auf Instagram</h3>
          <p>
            Damit du nie wieder eine aktuelle Aktion verpasst – alle Angebote
            zuerst auf <strong>@tankstelle_35088_valeriyahazke</strong>.
          </p>
          <span className="aktion-insta-link">
            Jetzt folgen
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
