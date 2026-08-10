"use client";

import Image from "next/image";
import { useScrollReveal } from "./lib/useGsap";

const gruppen = [
  {
    titel: "Flottenkarten",
    hinweis: "Für Firmen- und Vielfahrer",
    items: ["Esso Card", "Shell", "DKV", "UTA"],
  },
  {
    titel: "Kreditkarten",
    hinweis: "An der Kasse und an der Säule",
    items: ["Visa", "American Express"],
  },
  {
    titel: "Mobil bezahlen",
    hinweis: "Kontaktlos mit dem Smartphone",
    items: ["Google Pay"],
  },
  {
    titel: "Esso App",
    hinweis: "Direkt an der Zapfsäule per Handy bezahlen",
    items: ["Esso App"],
  },
];

export default function ZahlungSection() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <div className="firmen-outer" ref={ref}>
      <section className="firmen-section" id="zahlung">
        <div className="firmen-intro">
          <div>
            <div className="section-label gsap-left">Bezahlen</div>
            <h2 className="section-title gsap-left">
              Zahlungsmittel &<br />
              Tankkarten
            </h2>
            <p className="section-lead gsap-left" style={{ marginTop: 16 }}>
              Bei uns tanken Sie bequem mit Karte, Handy oder Flottenkarte – an
              der Kasse und direkt an der Zapfsäule.
            </p>
          </div>
          <div className="gsap-right">
            <Image
              src="/bezahlen.webp"
              alt="Bezahlen an der Esso Tankstelle in Battenberg"
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
        <div className="zahlung-grid">
          {gruppen.map((g) => (
            <div className="zahlung-card gsap-up" key={g.titel}>
              <h4>{g.titel}</h4>
              <p>{g.hinweis}</p>
              <ul className="zahlung-chips">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
