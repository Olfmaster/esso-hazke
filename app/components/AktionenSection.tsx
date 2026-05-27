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
            <h3>Frische Brötchen vom Bäcker</h3>
            <p>
              In Kooperation mit unserem lokalen Bäcker – genau dann, wenn Sie
              sie brauchen.
            </p>
          </div>
        </div>
        <div
          className="aktion-card gsap-up"
          style={{
            borderStyle: "dashed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 160,
          }}
        >
          <div style={{ textAlign: "center", color: "var(--muted)" }}>
            <div
              style={{ fontSize: 28, marginBottom: 8, color: "var(--red)" }}
            >
              +
            </div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>
              Neue Aktion anlegen
              <br />
              <small style={{ fontWeight: 300 }}>
                (im CMS selbst verwalten)
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
