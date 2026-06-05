"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "О компании" },
    { href: "#documents", label: "Документы" },
    { href: "#tariffs", label: "Тарифы" },
    { href: "#requisites", label: "Реквизиты" },
    { href: "#contact", label: "Контакты" },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <div className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#2ecc71" strokeWidth="1.5"/>
              <path d="M9 13h14M11 13V11a5 5 0 0110 0v2M13 13v8m3-8v8m3-8v8" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 21h12" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>МУП «Экотехпром»</span>
            <span className={styles.logoSub}>Региональный оператор КБР</span>
          </div>
        </a>

        {/* Nav */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navLinks.map((link) => (
            <button key={link.href} className={styles.navLink} onClick={() => scrollTo(link.href)}>
              {link.label}
            </button>
          ))}
          <a href="tel:+79287062763" className={styles.hotline}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2.5" style={{ marginRight: '2px' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+7 928 706 27 63</span>
          </a>
          <a href="mailto:mup.ekotehprom@yandex.ru" className={styles.hotline}>
            <span className={styles.hotlineDot} />
            <span>mup.ekotehprom@yandex.ru</span>
          </a>
          <button className="btn-primary" onClick={() => scrollTo("#contact")}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
            Подать заявку
          </button>
        </nav>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
