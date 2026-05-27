"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { gsap } from "./lib/useGsap";

export type LightboxItem =
  | { kind: "photo"; src: string; alt: string; caption: string }
  | { kind: "placeholder"; label: string; tint: string };

type Props = {
  items: LightboxItem[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (idx: number) => void;
};

export default function Lightbox({
  items,
  openIndex,
  onClose,
  onNavigate,
}: Props) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const isOpen = openIndex !== null;

  const next = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex + 1) % items.length);
  }, [openIndex, items.length, onNavigate]);

  const prev = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex - 1 + items.length) % items.length);
  }, [openIndex, items.length, onNavigate]);

  // Keyboard navigation + body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("lightbox-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, next, prev]);

  // Open animation
  useEffect(() => {
    if (!isOpen || !stageRef.current || !backdropRef.current) return;
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    gsap.fromTo(
      stageRef.current,
      { opacity: 0, scale: 0.94, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: "expo.out",
      },
    );
  }, [isOpen]);

  // Image-swap animation when navigating
  useEffect(() => {
    if (!isOpen || !stageRef.current) return;
    gsap.fromTo(
      stageRef.current.querySelector(".lightbox-frame"),
      { opacity: 0, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" },
    );
  }, [openIndex, isOpen]);

  if (openIndex === null) return null;
  const item = items[openIndex];

  return (
    <div className="lightbox" role="dialog" aria-modal="true">
      <div
        ref={backdropRef}
        className="lightbox-backdrop"
        onClick={onClose}
      />
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Schließen"
      >
        <svg viewBox="0 0 24 24">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>
      <button
        className="lightbox-nav lightbox-nav--prev"
        onClick={prev}
        aria-label="Vorheriges Bild"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="lightbox-nav lightbox-nav--next"
        onClick={next}
        aria-label="Nächstes Bild"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="lightbox-stage" ref={stageRef}>
        {item.kind === "photo" ? (
          <>
            <div className="lightbox-frame">
              <Image
                src={item.src}
                alt={item.alt}
                width={1600}
                height={1000}
                sizes="90vw"
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <div className="lightbox-caption">{item.caption}</div>
          </>
        ) : (
          <>
            <div
              className="lightbox-frame is-placeholder"
              style={
                { background: item.tint } as React.CSSProperties
              }
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="9" cy="11" r="2" />
                <path d="M21 17l-5-5-9 9" />
              </svg>
              <div className="ph-big-label">{item.label}</div>
            </div>
            <div className="lightbox-caption">Foto folgt</div>
          </>
        )}
        <div className="lightbox-counter">
          {openIndex + 1} / {items.length}
        </div>
      </div>
    </div>
  );
}
