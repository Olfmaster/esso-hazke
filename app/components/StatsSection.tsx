"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./lib/useGsap";

type Stat = { num: number; suffix: string; label: string; format?: "de" };

const stats: Stat[] = [
  { num: 200, suffix: "+", label: "Zufriedene Kunden im Monat" },
  { num: 1689, suffix: "+", label: "Verkaufte Brötchen", format: "de" },
  { num: 95, suffix: "+", label: "Erfolgreiche Aktionen" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const items = root.querySelectorAll<HTMLElement>(".stat-item");
      gsap.from(items, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: root, start: "top 75%" },
      });

      // Number counter
      root.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value ?? "0");
        const suffix = el.dataset.suffix ?? "";
        const isDe = el.dataset.format === "de";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: root, start: "top 75%" },
          onUpdate: () => {
            const rounded = Math.round(obj.val);
            const formatted = isDe
              ? rounded.toLocaleString("de-DE")
              : String(rounded);
            el.textContent = formatted + suffix;
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div className="stats-outer" ref={ref}>
      <div className="stats-section">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div
              className="stat-num"
              data-value={s.num}
              data-suffix={s.suffix}
              data-format={s.format ?? ""}
            >
              0{s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
