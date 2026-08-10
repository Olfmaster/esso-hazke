"use client";

import { useState } from "react";
import { useScrollReveal } from "./lib/useGsap";

type FaqItem = { q: string; a: React.ReactNode };

const items: FaqItem[] = [
  {
    q: "Kann ich rund um die Uhr tanken?",
    a: (
      <>
        Nein. Die Station hat <strong>sieben Tage die Woche</strong> geöffnet,
        die Zapfsäulen sind aber <strong>nur während der Öffnungszeiten</strong>{" "}
        in Betrieb. Einen Nachttank-Automaten gibt es nicht.
      </>
    ),
  },
  {
    q: "Welche Karten und Zahlungsmittel werden akzeptiert?",
    a: (
      <>
        Flottenkarten (<strong>Esso Card, Shell, DKV, UTA</strong>), Visa und
        American Express sowie Google Pay. Über die <strong>Esso App</strong>{" "}
        können Sie außerdem direkt mit dem Handy an der Zapfsäule bezahlen.
      </>
    ),
  },
  {
    q: "Gibt es sonntags frische Brötchen?",
    a: (
      <>
        Ja! In Kooperation mit der <strong>Bäckerei Eckhardt aus Hatzfeld</strong>{" "}
        bieten wir sonntags frische Brötchen an. An Feiertagen kann die
        Lieferung abweichen – aktuelle Infos immer hier auf der Website.
      </>
    ),
  },
  {
    q: "Gibt es eine Waschanlage, Mietwagen oder eine Werkstatt?",
    a: (
      <>
        Ja, über unsere Partner vor Ort: Waschanlage und{" "}
        <strong>Waschboxen zur Selbstbedienung</strong> sowie Mietwagen
        (9-Sitzer, Transporter für Umzüge, Wohnmobil) über Michael Bienhaus,
        Tel. 0152 36107109. Für Reparatur und Wartung: Autoservice Biermann,
        Battenfelder Str. 6, Tel. 06452 9393773.
      </>
    ),
  },
  {
    q: "Wie sind die Öffnungszeiten an Feiertagen?",
    a: (
      <>
        An hessischen Feiertagen gelten abweichende Zeiten – besonders um
        Weihnachten und Neujahr. Wir blenden sie{" "}
        <strong>rechtzeitig auf der Startseite ein</strong>. Da die Zapfsäulen
        nur während der Öffnungszeiten laufen, gilt das auch fürs Tanken.
      </>
    ),
  },
  {
    q: "Werden offene Stellen ausgeschrieben?",
    a: (
      <>
        Aktuelle Stellenangebote finden Sie hier auf der Website. Bewerbungen
        per <strong>Online-Formular mit Datei-Upload</strong> – direkt an die
        Inhaberin.
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
              Die Station hat sieben Tage die Woche geöffnet. Getankt werden
              kann ausschließlich während dieser Zeiten – die Zapfsäulen laufen
              nicht rund um die Uhr.
            </p>
            <div className="faq-oz">
              <div className="faq-oz-row">
                <span className="faq-oz-day">Station, Mo – So</span>
                {/* TODO: exakte Zeiten von Herrn Hazke, kommen per WhatsApp. */}
                <span className="faq-oz-time yellow">Zeiten folgen</span>
              </div>
              <div className="faq-oz-row">
                <span className="faq-oz-day">Feiertage</span>
                <span className="faq-oz-time yellow">Abweichend</span>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              An Feiertagen gelten abweichende Zeiten – wir blenden sie
              rechtzeitig auf der Startseite ein.
            </p>
            <div className="faq-oz" style={{ marginTop: 16 }}>
              <div className="faq-oz-row">
                <span className="faq-oz-day">Telefonisch, Mo – Fr</span>
                <span className="faq-oz-time green">08:30 – 16:00 Uhr</span>
              </div>
            </div>
            <p style={{ marginTop: 16 }}>
              Telefon: <strong>06452 9291909</strong>
              <br />
              Im Notfall: <strong>0174 1575465</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
