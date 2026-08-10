"use client";

import { useCallback, useEffect, useState } from "react";
import { aktuellerFeiertag, type FeiertagsInfo } from "./lib/feiertage";

/**
 * >>> HIER SCHALTEN <<<  Auf false setzen, wenn gerade niemand gesucht wird.
 * Das Feiertags-Popup läuft davon unabhängig weiter.
 */
const MITARBEITER_GESUCHT = true;

const VERZOEGERUNG_MS = 5000;

type Variante = "feiertag" | "mitarbeiter";

function datumsText(datum: string): string {
  const heute = new Date();
  const heuteIso = `${heute.getFullYear()}-${String(heute.getMonth() + 1).padStart(2, "0")}-${String(heute.getDate()).padStart(2, "0")}`;
  if (datum === heuteIso) return "heute";

  const [j, m, t] = datum.split("-").map(Number);
  return `am ${new Date(j, m - 1, t).toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
  })}`;
}

export default function Popup() {
  const [variante, setVariante] = useState<Variante | null>(null);
  const [feiertag, setFeiertag] = useState<FeiertagsInfo | null>(null);

  const schliessen = useCallback(() => setVariante(null), []);

  useEffect(() => {
    const naechsterFeiertag = aktuellerFeiertag();

    // Feiertag hat Vorrang – die beiden Popups erscheinen nie gleichzeitig.
    const naechste: Variante | null = naechsterFeiertag
      ? "feiertag"
      : MITARBEITER_GESUCHT
        ? "mitarbeiter"
        : null;
    if (!naechste) return;

    // Pro Browser-Session nur einmal zeigen, sonst nervt es bei jedem Seitenaufruf.
    const key = naechsterFeiertag
      ? `popup:feiertag:${naechsterFeiertag.datum}`
      : "popup:mitarbeiter";
    if (sessionStorage.getItem(key)) return;

    const timer = setTimeout(() => {
      setFeiertag(naechsterFeiertag);
      setVariante(naechste);
      sessionStorage.setItem(key, "1");
    }, VERZOEGERUNG_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!variante) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") schliessen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [variante, schliessen]);

  if (!variante) return null;

  return (
    <div className="popup-overlay" onClick={schliessen}>
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-titel"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close" onClick={schliessen} aria-label="Schließen">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        {variante === "feiertag" && feiertag ? (
          <>
            <div className="popup-label">Feiertag</div>
            <h3 id="popup-titel">{feiertag.name}</h3>
            {feiertag.zeiten ? (
              <>
                <p>
                  {datumsText(feiertag.datum)} gelten abweichende
                  Öffnungszeiten:
                </p>
                <div className="popup-zeiten">{feiertag.zeiten}</div>
              </>
            ) : (
              <p>
                {datumsText(feiertag.datum)} gelten abweichende Öffnungszeiten.
                Rufen Sie uns kurz an, dann sagen wir Ihnen genau Bescheid.
              </p>
            )}
            <a href="tel:+4964529291909" className="btn-red popup-cta">
              06452 9291909 anrufen
            </a>
          </>
        ) : (
          <>
            <div className="popup-label">Stellenangebot</div>
            <h3 id="popup-titel">Wir suchen Mitarbeiter</h3>
            <p>
              Lust auf ein Team vor Ort? Wir freuen uns über Ihre Bewerbung –
              auch initiativ. Schreiben Sie uns einfach kurz über das
              Kontaktformular.
            </p>
            <a href="#kontakt" className="btn-red popup-cta" onClick={schliessen}>
              Jetzt bewerben
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
            </a>
          </>
        )}
      </div>
    </div>
  );
}
