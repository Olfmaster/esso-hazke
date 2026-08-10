"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./lib/useGsap";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // 1) Pre-paint initial state (no .js-on CSS fallback — pure GSAP).
      gsap.set(".hero-bg img", { scale: 1.15, opacity: 0 });
      gsap.set(".hero-overlay", { opacity: 0 });
      gsap.set(".hero-eyebrow", { opacity: 0, x: -20 });
      gsap.set(".hero-word > span", { yPercent: 110, opacity: 0 });
      gsap.set(".hero-sub", { opacity: 0, y: 20 });
      gsap.set(".hero-meta-item", { opacity: 0, y: 14 });
      gsap.set(".hero-cta > *", { opacity: 0, y: 18 });
      gsap.set(".hero-scroll-hint", { opacity: 0 });

      // 2) Entry timeline.
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1,
      });

      tl.to(
        ".hero-bg img",
        { opacity: 1, scale: 1, duration: 1.6, ease: "expo.out" },
        0,
      )
        .to(".hero-overlay", { opacity: 1, duration: 1.2 }, 0.1)
        .to(".hero-eyebrow", { opacity: 1, x: 0, duration: 0.6 }, 0.5)
        .to(
          ".hero-word > span",
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.07,
            ease: "expo.out",
          },
          0.6,
        )
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.7 }, 1.0)
        .to(
          ".hero-meta-item",
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          1.15,
        )
        .to(
          ".hero-cta > *",
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          1.3,
        )
        .to(".hero-scroll-hint", { opacity: 1, duration: 0.6 }, 1.7);

      // 3) Continuous slow ken-burns zoom after entry.
      gsap.to(".hero-bg img", {
        scale: 1.08,
        duration: 18,
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: 1.6,
      });

      // 4) Parallax: image slides up slightly as user scrolls past the hero.
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
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
    <div className="hero-outer" id="top" ref={rootRef}>
      <div className="hero-bg" ref={bgRef}>
        <Image
          src="/Esso_hero.webp"
          alt="Esso Tankstelle in Battenberg (Eder)"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-overlay" />

      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">Esso · Battenberg (Eder)</div>
          <h1 className="hero-headline">
            <span className="word hero-word">
              <span>Ihre</span>
            </span>{" "}
            <span className="word hero-word">
              <span>Esso</span>
            </span>
            <br />
            <span className="word hero-word accent">
              <span>Tankstelle</span>
            </span>
            <br />
            <span className="word hero-word">
              <span>vor</span>
            </span>{" "}
            <span className="word hero-word">
              <span>Ort.</span>
            </span>
          </h1>
          <p className="hero-sub">
            Tanken, Einkauf und mehr — direkt in{" "}
            <strong>Battenberg (Eder)</strong>. Immer frisch, immer verlässlich.
          </p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>7 Tage die Woche geöffnet</span>
            </div>
            <div className="hero-meta-item">
              <svg viewBox="0 0 24 24">
                <path d="M3 21h10V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16z" />
                <path d="M13 10h3a2 2 0 0 1 2 2v5a2 2 0 0 0 3 0V9l-3-3" />
              </svg>
              <span>Tanken nur zu den Öffnungszeiten</span>
            </div>
            <div className="hero-meta-item">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.8 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.71 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>06452 9291909</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#kontakt" className="btn-red">
              So findest du uns
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#aktionen" className="btn-ghost">
              Aktuelle Aktionen
            </a>
          </div>
        </div>
      </section>

      <div className="hero-scroll-hint" aria-hidden="true">
        Scroll
      </div>
    </div>
  );
}
