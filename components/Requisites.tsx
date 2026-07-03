"use client";

import styles from "./Requisites.module.css";

const requisites = [
  { label: "Полное наименование", value: "Муниципальное унитарное предприятие «Экотехпром»", wide: true },
  { label: "ИНН", value: "0726008909" },
  { label: "КПП", value: "072601001" },
  { label: "Юридический адрес", value: "360001, КБР, г. Нальчик, ул. Абидова, д. 17", wide: true },
  { label: "Почтовый адрес", value: "360004, КБР, г. Нальчик, ул. Тургенева, д. 21А", wide: true },
  { label: "Расчётный счёт (Р/с)", value: "40702810460640000877" },
  { label: "Корреспондентский счёт (К/с)", value: "30101810907020000615" },
  { label: "БИК", value: "040702615" },
  { label: "Банк", value: "Ставропольское отделение №5230 ПАО Сбербанк", wide: true },
  { label: "Электронная почта", value: "info@ecotech07.ru" },
  { label: "Горячая линия", value: "+7 (866) 222-92-00" },
];

export default function Requisites() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Brief visual feedback handled via CSS :active
    });
  };

  return (
    <section className={styles.section} id="requisites">
      <div className="container">
        <div className={styles.header}>
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <path d="M2 10h20"/>
            </svg>
            Организация
          </div>
          <h2 className="section-title">Реквизиты организации</h2>
          <p className="section-subtitle">
            Официальные реквизиты МУП «Экотехпром» для оформления платёжных
            документов и договоров. Нажмите на значение для копирования.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="1.8">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.cardTitle}>МУП «Экотехпром»</h3>
              <p className={styles.cardSub}>Региональный оператор по обращению с ТКО · КБР</p>
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Действующий оператор
            </div>
          </div>

          <div className={styles.grid}>
            {requisites.map((r, i) => (
              <div
                key={i}
                className={`${styles.row} ${r.wide ? styles.wide : ""}`}
                onClick={() => handleCopy(r.value)}
                title="Нажмите для копирования"
              >
                <span className={styles.rowLabel}>{r.label}</span>
                <span className={styles.rowValue}>
                  {r.value}
                  <svg className={styles.copyIcon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
