"use client";

import { useScrollReveal } from "./lib/useGsap";

export default function RedStrip() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1, duration: 0.7 });

  return (
    <div className="red-strip-outer" ref={ref}>
      <div className="red-strip">
        <div className="strip-item gsap-up">
          <div className="strip-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className="strip-text">
            7 Tage die Woche
            <small>Tanken nur zu den Öffnungszeiten</small>
          </div>
        </div>
        <div className="strip-item gsap-up">
          <div className="strip-icon">
            <svg viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9" />
            </svg>
          </div>
          <div className="strip-text">
            Frische Brötchen
            <small>Sonntags von der Bäckerei Eckhardt</small>
          </div>
        </div>
        <div className="strip-item gsap-up">
          <div className="strip-icon">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <div className="strip-text">
            Karte, Handy & Flottenkarte
            <small>Esso Card, DKV, UTA, Shell u. a.</small>
          </div>
        </div>
        <div className="strip-item gsap-up">
          <div className="strip-icon">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.8 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.71 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="strip-text">
            06452 9291909
            <small>Telefonisch Mo–Fr 08:30–16:00</small>
          </div>
        </div>
      </div>
    </div>
  );
}
