"use client";

import Image from "next/image";
import { useScrollReveal } from "./lib/useGsap";

export default function FirmenSection() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <div className="firmen-outer" ref={ref}>
      <section className="firmen-section">
        <div className="firmen-intro">
          <div>
            <div className="section-label gsap-left">Für Unternehmen</div>
            <h2 className="section-title gsap-left">
              Firmentanken &<br />
              Rechnungskauf
            </h2>
            <p className="section-lead gsap-left" style={{ marginTop: 16 }}>
              Privatpersonen und Firmen können bei uns unkompliziert auf
              Rechnung tanken.
            </p>
            <div className="gsap-left" style={{ marginTop: 28 }}>
              <a href="#kontakt" className="btn-red">
                Jetzt anfragen
              </a>
            </div>
          </div>
          <div className="gsap-right">
            <Image
              src="/bezahlen.webp"
              alt="Firmentanken auf Rechnung"
              width={800}
              height={600}
              style={{
                width: "100%",
                aspectRatio: "4/3",
                objectFit: "cover",
                borderRadius: 8,
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
        <div className="firmen-grid">
          <div className="firmen-item gsap-up">
            <div className="firmen-num">1×</div>
            <h4>Anmelden</h4>
            <p>
              Kurzes Gespräch – persönlich oder per Telefon. Kein Papierkram.
            </p>
          </div>
          <div className="firmen-item gsap-up">
            <div className="firmen-num">∞</div>
            <h4>Tanken</h4>
            <p>Einfach vorfahren und tanken – Ihr Verbrauch wird erfasst.</p>
          </div>
          <div className="firmen-item gsap-up">
            <div className="firmen-num">1×</div>
            <h4>Abrechnung</h4>
            <p>
              Monatlich eine übersichtliche Rechnung – transparent und bequem.
            </p>
          </div>
          <div className="firmen-item gsap-up">
            <div className="firmen-num">✓</div>
            <h4>Mehrsprachig</h4>
            <p>Wir heißen Kunden aus allen Kulturen herzlich willkommen.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
