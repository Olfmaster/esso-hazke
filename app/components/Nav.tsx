"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#aktionen", label: "Aktionen" },
  { href: "#leistungen", label: "Partner" },
  { href: "#zahlung", label: "Bezahlen" },
  { href: "#ueber", label: "Über uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="Zur Startseite">
          <Image
            src="/Esso_logo.png"
            alt="Esso"
            width={56}
            height={56}
            priority
          />
        </a>
        <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
          <a href="#kontakt" className="btn-red nav-cta" onClick={() => setOpen(false)}>
            Anfragen
          </a>
        </nav>
        <button
          className={`nav-burger ${open ? "nav-burger--open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
