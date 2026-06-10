"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" stroke="#2ecc71" strokeWidth="1.5"/>
                    <path d="M9 13h14M11 13V11a5 5 0 0110 0v2M13 13v8m3-8v8m3-8v8" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M10 21h12" stroke="#2ecc71" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.logoName}>МУП «Экотехпром»</p>
                  <p className={styles.logoSub}>Региональный оператор ТКО КБР</p>
                </div>
              </div>
              <p className={styles.brandDesc}>
                Официальный региональный оператор по обращению с твёрдыми
                коммунальными отходами на территории Кабардино-Балкарской Республики.
              </p>
              <div className={styles.certBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Приказ №152 · Региональный оператор КБР
              </div>
            </div>

            {/* Navigation */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Навигация</h4>
              <nav className={styles.links}>
                {[
                  { href: "#about", label: "О компании" },
                  { href: "#documents", label: "Документы" },
                  { href: "#tariffs", label: "Тарифы и нормативы" },
                  { href: "#requisites", label: "Реквизиты" },
                  { href: "#contact", label: "Обратная связь" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className={styles.link}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contacts */}
            <div className={`${styles.col} ${styles.hideOnMobile}`}>
              <h4 className={styles.colTitle}>Контакты</h4>
              <div className={styles.contactAction}>
                <div className={styles.contactGroup}>
                  <p className={styles.contactActionDesc}>Горячая линия</p>
                  <a href="tel:+79896400523" className={styles.footerPhone}>
                    +7 989 640 05 23
                  </a>
                </div>
                <div className={styles.contactGroup}>
                  <p className={styles.contactActionDesc}>Электронная почта</p>
                  <a href="mailto:info@ecotech07.ru" className={styles.footerPhone}>
                    info@ecotech07.ru
                  </a>
                </div>
                <p className={styles.contactActionDesc}>
                  Для заключения договора на вывоз ТКО:
                </p>
                <div className={styles.footerPhones}>
                  <a href="tel:+79287062763" className={styles.footerPhone}>
                    +7 928 706 27 63
                  </a>
                  <a href="tel:+79287092164" className={styles.footerPhone}>
                    +7 928 709 21 64
                  </a>
                  <a href="mailto:dogovor@ecotech07.ru" className={styles.footerPhone}>
                    dogovor@ecotech07.ru
                  </a>
                </div>
                <a 
                  href="#contact" 
                  className={`btn-primary ${styles.contactBtn}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Свяжитесь с нами
                </a>
              </div>
            </div>

            {/* Requisites */}
            <div className={`${styles.col} ${styles.hideOnMobile}`}>
              <h4 className={styles.colTitle}>Реквизиты</h4>
              <div className={styles.reqList}>
                <div className={styles.reqRow}>
                  <span className={styles.reqKey}>ИНН</span>
                  <span className={styles.reqVal}>0726008909</span>
                </div>
                <div className={styles.reqRow}>
                  <span className={styles.reqKey}>КПП</span>
                  <span className={styles.reqVal}>072601001</span>
                </div>
                <div className={styles.reqRow}>
                  <span className={styles.reqKey}>Р/счёт</span>
                  <span className={styles.reqVal}>40702810460640000877</span>
                </div>
                <div className={styles.reqRow}>
                  <span className={styles.reqKey}>К/счёт</span>
                  <span className={styles.reqVal}>30101810907020000615</span>
                </div>
                <div className={styles.reqRow}>
                  <span className={styles.reqKey}>БИК</span>
                  <span className={styles.reqVal}>040702615</span>
                </div>
                <div className={styles.reqRow}>
                  <span className={styles.reqKey}>Банк</span>
                  <span className={styles.reqVal}>Ставропольское отд. №5230 ПАО Сбербанк</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>
              © {year} МУП «Экотехпром» — Региональный оператор КБР. Все права защищены.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink} onClick={(e) => e.preventDefault()}>
                Политика конфиденциальности
              </a>
              <span className={styles.separator}>·</span>
              <a href="mailto:dogovor@ecotech07.ru" className={styles.bottomLink}>
                dogovor@ecotech07.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
