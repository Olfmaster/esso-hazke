"use client";

import { useScrollReveal } from "./lib/useGsap";

// ACHTUNG – PLATZHALTER: Diese Stimmen sind erfunden und dürfen NICHT live
// gehen. Vor dem Livegang durch echte Kundenbewertungen ersetzen (z. B. aus
// Google Business) oder die Sektion aus page.tsx entfernen.
const reviews = [
  {
    text: "Seit der Übernahme hat sich hier wirklich was getan. Immer sauber, freundlich und die Preise stimmen. Ich tanke nur noch hier.",
    name: "Anna Hoffmann",
    role: "Stammkundin",
  },
  {
    text: "Sonntags die frischen Brötchen holen und gleichzeitig tanken – das ist einfach praktisch. Toller Service!",
    name: "Markus Schreiber",
    role: "Stammkunde",
  },
  {
    text: "Tanken, Waschbox und Werkstatt an einem Ort – für mich als Vielfahrer genau richtig. Immer ein offenes Ohr.",
    name: "Stefan Brandt",
    role: "Stammkunde",
  },
];

export default function ReviewsSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 0.12 });

  return (
    <section className="reviews-section" ref={ref}>
      <div className="section-label gsap-up">Das sagen unsere Kunden</div>
      <h2 className="section-title gsap-up">
        Stimmen aus
        <br />
        Battenberg
      </h2>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review-card gsap-up" key={i}>
            <div className="review-stars">★★★★★</div>
            <div className="review-quote">&ldquo;</div>
            <p className="review-text">{r.text}</p>
            <div className="review-name">{r.name}</div>
            <div className="review-role">{r.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
