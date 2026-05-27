"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./lib/useGsap";

export default function BaeckerSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from(".baecker-visual", {
        opacity: 0,
        scale: 0.94,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 75%" },
      });
      gsap.from(".baecker-content > *", {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root, start: "top 75%" },
      });

      // Subtle image parallax
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div className="baecker-outer" ref={ref}>
      <section className="baecker-section">
        <div className="baecker-visual">
          <div ref={imgRef} style={{ width: "100%", height: "110%" }}>
            <Image
              src="/backware.webp"
              alt="Frische Brötchen vom Bäcker"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
        <div className="baecker-content">
          <div className="section-label">Kooperation</div>
          <h2 className="section-title">
            Frische Brötchen
            <br />
            jeden Sonntag
          </h2>
          <p className="section-lead" style={{ marginTop: 16 }}>
            In Kooperation mit unserem lokalen Bäcker aus dem Nachbardorf gibt
            es bei uns frische Brötchen – genau dann, wenn Sie sie brauchen.
          </p>
          <div className="baecker-note">
            <strong>Hinweis:</strong> An Feiertagen kann die Lieferung
            abweichen. Aktuelle Infos immer hier auf der Website.
          </div>
        </div>
      </section>
    </div>
  );
}
