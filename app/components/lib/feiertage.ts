// Gesetzliche Feiertage in Hessen – für jedes Jahr automatisch berechnet, damit
// die Liste nicht jährlich von Hand nachgepflegt werden muss.

export type Feiertag = {
  /** ISO-Datum, YYYY-MM-DD */
  datum: string;
  name: string;
};

export type FeiertagsInfo = Feiertag & {
  /** Öffnungszeiten für diesen Tag, oder null wenn (noch) nicht hinterlegt. */
  zeiten: string | null;
};

/**
 * Abweichende Öffnungszeiten je Feiertag. Schlüssel ist das ISO-Datum.
 *
 * >>> HIER PFLEGEN <<<  Ist für einen Feiertag nichts eingetragen, zeigt das
 * Popup statt einer Uhrzeit den Hinweis, dass abweichende Zeiten gelten und
 * man kurz anrufen soll. Es wird also nie eine falsche Zeit angezeigt.
 *
 * Beispiel:
 *   "2026-12-25": "08:00 – 14:00 Uhr",
 *   "2026-12-26": "geschlossen",
 */
export const FEIERTAGS_ZEITEN: Record<string, string> = {};

/** Wie viele Tage im Voraus auf einen Feiertag hingewiesen wird. */
export const VORLAUF_TAGE = 3;

/** Ostersonntag nach der anonymen gregorianischen Osterformel. */
function osterSonntag(jahr: number): Date {
  const a = jahr % 19;
  const b = Math.floor(jahr / 100);
  const c = jahr % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const monat = Math.floor((h + l - 7 * m + 114) / 31); // 3 = März, 4 = April
  const tag = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(jahr, monat - 1, tag);
}

function iso(d: Date): string {
  const monat = String(d.getMonth() + 1).padStart(2, "0");
  const tag = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${monat}-${tag}`;
}

function plusTage(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

export function feiertageHessen(jahr: number): Feiertag[] {
  const ostern = osterSonntag(jahr);

  return [
    { datum: `${jahr}-01-01`, name: "Neujahr" },
    { datum: iso(plusTage(ostern, -2)), name: "Karfreitag" },
    { datum: iso(plusTage(ostern, 1)), name: "Ostermontag" },
    { datum: `${jahr}-05-01`, name: "Tag der Arbeit" },
    { datum: iso(plusTage(ostern, 39)), name: "Christi Himmelfahrt" },
    { datum: iso(plusTage(ostern, 50)), name: "Pfingstmontag" },
    { datum: iso(plusTage(ostern, 60)), name: "Fronleichnam" },
    { datum: `${jahr}-10-03`, name: "Tag der Deutschen Einheit" },
    { datum: `${jahr}-12-25`, name: "1. Weihnachtstag" },
    { datum: `${jahr}-12-26`, name: "2. Weihnachtstag" },
    // Keine gesetzlichen Feiertage, laut Protokoll aber genau die Tage mit den
    // stärksten Abweichungen ("insbesondere um Weihnachten und Neujahr").
    { datum: `${jahr}-12-24`, name: "Heiligabend" },
    { datum: `${jahr}-12-31`, name: "Silvester" },
  ];
}

/**
 * Der nächste Feiertag innerhalb des Vorlauffensters, oder null.
 * Gibt den zeitlich nächsten zurück – heute schlägt morgen.
 */
export function aktuellerFeiertag(heute: Date = new Date()): FeiertagsInfo | null {
  // Über den Jahreswechsel hinaus suchen, damit Neujahr ab dem 29.12. greift.
  const kandidaten = [
    ...feiertageHessen(heute.getFullYear()),
    ...feiertageHessen(heute.getFullYear() + 1),
  ];

  for (let i = 0; i <= VORLAUF_TAGE; i++) {
    const tag = iso(plusTage(heute, i));
    const treffer = kandidaten.find((f) => f.datum === tag);
    if (treffer) {
      return { ...treffer, zeiten: FEIERTAGS_ZEITEN[treffer.datum] ?? null };
    }
  }

  return null;
}
