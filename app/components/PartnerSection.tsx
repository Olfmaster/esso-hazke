"use client";

import { useScrollReveal } from "./lib/useGsap";

type Partner = {
  titel: string;
  text: string;
  details?: string[];
  person: string;
  tel: string;
  telHref: string;
  adresse?: string;
};

const partner: Partner[] = [
  {
    titel: "Waschanlage & Waschboxen",
    text: "Waschanlage sowie Waschboxen zur Selbstbedienung – direkt bei uns vor Ort.",
    person: "Michael Bienhaus",
    tel: "0152 36107109",
    telHref: "tel:+4915236107109",
  },
  {
    titel: "Mietwagen",
    text: "Fahrzeuge zum Mieten – für Personentransport, Umzüge und Urlaub.",
    details: ["9-Sitzer für Personen", "Transporter für Umzüge", "Wohnmobil"],
    person: "Michael Bienhaus",
    tel: "0152 36107109",
    telHref: "tel:+4915236107109",
  },
  {
    titel: "Werkstatt: Autoservice Biermann",
    text: "Unser Partner für Reparatur, Wartung und Service rund ums Fahrzeug.",
    person: "Frank Biermann",
    tel: "06452 9393773",
    telHref: "tel:+4964529393773",
    adresse: "Battenfelder Str. 6",
  },
];

export default function PartnerSection() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <div className="future-outer" ref={ref}>
      <section className="partner-section" id="leistungen">
        <div>
          <div className="section-label gsap-left">Partner vor Ort</div>
          <h2 className="section-title gsap-left">
            Mehr als
            <br />
            nur Tanken
          </h2>
          <p className="section-lead gsap-left" style={{ marginTop: 16 }}>
            Waschen, mieten, reparieren – gemeinsam mit unseren Partnern decken
            wir alles rund ums Fahrzeug ab. Bitte wenden Sie sich für diese
            Angebote direkt an den jeweiligen Ansprechpartner.
          </p>
        </div>
        <div className="partner-cards">
          {partner.map((p) => (
            <div className="partner-card gsap-right" key={p.titel}>
              <div className="future-dot" />
              <div className="partner-body">
                <strong>{p.titel}</strong>
                <p>{p.text}</p>
                {p.details && (
                  <ul className="partner-list">
                    {p.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
                <div className="partner-contact">
                  <span>{p.person}</span>
                  {p.adresse && <span>{p.adresse}</span>}
                  <a href={p.telHref}>{p.tel}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
