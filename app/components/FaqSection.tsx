"use client";

import { useState } from "react";
import { useScrollReveal } from "./lib/useGsap";

type FaqItem = { q: string; a: React.ReactNode };

const items: FaqItem[] = [
  {
    q: "Kann ich als Firma auf Rechnung tanken?",
    a: (
      <>
        Ja – sowohl Privatpersonen als auch Unternehmen können bei uns auf
        Rechnung tanken. Die Abrechnung erfolgt <strong>monatlich</strong>,
        übersichtlich und ohne versteckte Gebühren.
      </>
    ),
  },
  {
    q: "Gibt es sonntags frische Brötchen?",
    a: (
      <>
        Ja! In Kooperation mit unserem lokalen Bäcker bieten wir{" "}
        <strong>sonntags frische Brötchen</strong> an. An Feiertagen kann die
        Lieferung abweichen – aktuelle Infos immer hier auf der Website.
      </>
    ),
  },
  {
    q: "Wie sind die Öffnungszeiten an Feiertagen?",
    a: (
      <>
        Die Öffnungszeiten an Feiertagen werden vom Inhaber individuell
        angepasst und <strong>rechtzeitig hier angekündigt</strong>. Die
        Zapfsäulen sind grundsätzlich rund um die Uhr verfügbar.
      </>
    ),
  },
  {
    q: "Werden offene Stellen ausgeschrieben?",
    a: (
      <>
        Aktuelle Stellenangebote finden Sie hier auf der Website. Bewerbungen
        per <strong>Online-Formular mit Datei-Upload</strong> – direkt an den
        Inhaber.
      </>
    ),
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <div className="faq-outer" ref={ref}>
      <section className="faq-section" id="faq">
        <div className="section-label gsap-up">Häufige Fragen</div>
        <h2 className="section-title gsap-up">
          Wir haben
          <br />
          Antworten
        </h2>
        <div className="faq-grid">
          <div className="faq-list">
            {items.map((it, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className={`faq-item gsap-up${isOpen ? " open" : ""}`}
                >
                  <button
                    className="faq-btn"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q">{it.q}</span>
                    <span className="faq-icon">
                      <svg viewBox="0 0 14 14">
                        <line x1="7" y1="1" x2="7" y2="13" />
                        <line x1="1" y1="7" x2="13" y2="7" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-body">
                    <div className="faq-inner">
                      <p className="faq-text">{it.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="faq-aside gsap-right">
            <div className="section-label">Öffnungszeiten</div>
            <h3>
              Wann wir
              <br />
              für Sie da sind
            </h3>
            <p>
              Die Zapfsäulen sind rund um die Uhr verfügbar.
              Shopöffnungszeiten:
            </p>
            <div className="faq-oz">
              <div className="faq-oz-row">
                <span className="faq-oz-day">Montag – Sonntag</span>
                <span className="faq-oz-time green">06:00 – 24:00 Uhr</span>
              </div>
              <div className="faq-oz-row">
                <span className="faq-oz-day">Tanken (Zapfsäulen)</span>
                <span className="faq-oz-time green">24/7</span>
              </div>
              <div className="faq-oz-row">
                <span className="faq-oz-day">Feiertage</span>
                <span className="faq-oz-time yellow">Siehe Ankündigungen</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
