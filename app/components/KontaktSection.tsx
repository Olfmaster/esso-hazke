"use client";

import { useScrollReveal } from "./lib/useGsap";

export default function KontaktSection() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <div className="kontakt-outer" ref={ref}>
      <section className="kontakt-section" id="kontakt">
        <div>
          <div className="section-label gsap-left">Kontakt & Lage</div>
          <h2 className="section-title gsap-left">
            Wir sind
            <br />
            für Sie da
          </h2>
          <p
            className="section-lead gsap-left"
            style={{ marginTop: 16 }}
          >
            Fragen zu Zahlungsmitteln, Aktionen oder einfach mal vorbeischauen –
            wir freuen uns auf Sie.
          </p>
          <div className="kontakt-details">
            <div className="k-item gsap-left">
              <div className="k-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="k-text">
                <label>Adresse</label>
                <span>35088 Battenberg (Eder)</span>
              </div>
            </div>
            <div className="k-item gsap-left">
              <div className="k-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="k-text">
                <label>Öffnungszeiten</label>
                <span>Mo–Fr 08:30–16:00 Uhr</span>
              </div>
            </div>
            <div className="k-item gsap-left">
              <div className="k-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.8 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.71 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="k-text">
                <label>Telefon</label>
                <span>
                  <a href="tel:+4964529291909">06452 9291909</a>
                </span>
              </div>
            </div>
            <div className="k-item gsap-left">
              <div className="k-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="k-text">
                <label>Im Notfall</label>
                <span>
                  <a href="tel:+491741575465">0174 1575465</a>
                </span>
              </div>
            </div>
            <div className="k-item gsap-left">
              <div className="k-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="k-text">
                <label>E-Mail</label>
                <span>info@esso-hazke.de</span>
              </div>
            </div>
          </div>
          <div className="map-placeholder gsap-fade">
            🗺 Google Maps wird hier eingebunden
          </div>
        </div>
        <form
          className="kontakt-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="section-label gsap-right">Nachricht senden</div>
          <h2
            className="section-title gsap-right"
            style={{ color: "white", marginBottom: 28 }}
          >
            Schreiben
            <br />
            Sie uns
          </h2>
          <div className="form-row form-group gsap-right">
            <input
              className="form-input"
              type="text"
              placeholder="Vor- & Nachname"
            />
            <input
              className="form-input"
              type="text"
              placeholder="Unternehmen"
            />
          </div>
          <div className="form-group gsap-right">
            <input
              className="form-input"
              type="text"
              placeholder="Anliegen"
            />
          </div>
          <div className="form-group gsap-right">
            <input
              className="form-input"
              type="email"
              placeholder="E-Mail"
            />
          </div>
          <div className="form-group gsap-right">
            <textarea className="form-input" placeholder="Nachricht" />
          </div>
          <button className="form-submit gsap-right" type="submit">
            Abschicken
          </button>
        </form>
      </section>
    </div>
  );
}
