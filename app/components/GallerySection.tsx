"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "./lib/useGsap";
import Lightbox, { type LightboxItem } from "./Lightbox";

// Order matters — CSS grid-template-areas assigns slots a..j by nth-child.
// Slots: a=2×2 big, b=1×2 tall, c/d=1×1, e=2×1 wide, f/g=1×1, h=1×2 tall,
//        i=2×2 big, j=1×2 tall.
const items: LightboxItem[] = [
  {
    kind: "photo",
    src: "/Esso_hero.webp",
    alt: "Esso Tankstelle Außenansicht",
    caption: "Tankstelle bei Tag",
  },
  {
    kind: "photo",
    src: "/backware.webp",
    alt: "Frische Brötchen",
    caption: "Sonntags vom Bäcker",
  },
  { kind: "placeholder", label: "Shop innen", tint: "var(--blue-deep)" },
  { kind: "placeholder", label: "Kraftstoffe", tint: "var(--blue-dark)" },
  {
    kind: "photo",
    src: "/bezahlen.webp",
    alt: "Bezahlen an der Kasse",
    caption: "Schnelle Abwicklung",
  },
  { kind: "placeholder", label: "Snacks & Getränke", tint: "var(--blue)" },
  { kind: "placeholder", label: "Inhaberin", tint: "var(--red-dark)" },
  { kind: "placeholder", label: "Team", tint: "var(--red)" },
  { kind: "placeholder", label: "Waschanlage & Waschboxen", tint: "var(--dark)" },
  { kind: "placeholder", label: "Mietwagen", tint: "var(--blue-deep)" },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const headingEls = root.querySelectorAll<HTMLElement>(".gsap-up");
      gsap.to(headingEls, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root, start: "top 80%" },
      });
      const tiles = root.querySelectorAll<HTMLElement>(".gallery-item");
      gsap.from(tiles, {
        opacity: 0,
        y: 30,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
        stagger: { each: 0.05 },
        scrollTrigger: { trigger: root, start: "top 78%" },
      });
    }, root);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div className="gallery-outer" ref={ref}>
      <section className="gallery-section" id="impressionen">
        <div className="section-label gsap-up">Einblicke</div>
        <h2 className="section-title gsap-up">
          Vom Tank
          <br />
          bis zum Brötchen
        </h2>
        <p className="section-lead gsap-up">
          Impressionen aus dem Alltag unserer Tankstelle in Battenberg (Eder).
        </p>
        <div className="gallery-grid">
          {items.map((it, i) => (
            <button
              key={i}
              className={`gallery-item ${
                it.kind === "placeholder" ? "gallery-item--ph" : ""
              }`}
              onClick={() => setOpenIdx(i)}
              aria-label={
                it.kind === "photo" ? it.caption : `${it.label} – Foto folgt`
              }
              style={
                it.kind === "placeholder"
                  ? ({ "--placeholder-bg": it.tint } as React.CSSProperties)
                  : undefined
              }
            >
              {it.kind === "photo" ? (
                <>
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="caption">{it.caption}</div>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="9" cy="11" r="2" />
                    <path d="M21 17l-5-5-9 9" />
                  </svg>
                  <span className="ph-label">{it.label}</span>
                </>
              )}
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        items={items}
        openIndex={openIdx}
        onClose={() => setOpenIdx(null)}
        onNavigate={setOpenIdx}
      />
    </div>
  );
}
