"use client";

import styles from "./Documents.module.css";

const documents = [
  {
    id: 1,
    icon: "📋",
    category: "Приказ",
    title: "Приказ №152 о статусе регионального оператора",
    desc: "О присвоении МУП «Экотехпром» статуса регионального оператора по обращению с ТКО без конкурсного отбора",
    format: "PDF",
    color: "#3b82f6",
    file: "/doc/order-152-regional-operator-status.pdf",
    originalName: "Приказ №152",
  },
  {
    id: 2,
    icon: "🤝",
    category: "Соглашение №1",
    title: "Соглашение об организации деятельности по обращению с ТКО",
    desc: "Соглашение №1 об организации деятельности по обращению с ТКО на территории КБР",
    format: "PDF",
    color: "#8b5cf6",
    file: "/doc/agreement-1-solid-waste-management-kbr.pdf",
    originalName: "Соглашение №1",
  },
  {
    id: 3,
    icon: "🤝",
    category: "Соглашение №2",
    title: "Соглашение об организации деятельности по обращению с ТКО",
    desc: "Соглашение №2 об организации деятельности по обращению с ТКО на территории КБР",
    format: "PDF",
    color: "#ec4899",
    file: "/doc/agreement-2-solid-waste-management-kbr.pdf",
    originalName: "Соглашение №2",
  },
  {
    id: 4,
    icon: "🤝",
    category: "Соглашение №3",
    title: "Соглашение об организации деятельности по обращению с ТКО",
    desc: "Соглашение №3 об организации деятельности по обращению с ТКО на территории КБР",
    format: "PDF",
    color: "#f59e0b",
    file: "/doc/agreement-3-solid-waste-management-kbr.pdf",
    originalName: "Соглашение №3",
  },
  {
    id: 5,
    icon: "📄",
    category: "Договор",
    title: "Типовой договор на оказание услуг по обращению с ТКО",
    desc: "Типовой договор для физических и юридических лиц на 2026 год",
    format: "DOCX",
    color: "#2ecc71",
    file: "/doc/standard-contract-solid-waste-services-2026.docx",
    originalName: "Типовой договор 2026",
  },
];

export default function Documents() {
  return (
    <section className={styles.section} id="documents">
      <div className="container">
        <div className={styles.header}>
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Нормативно-правовая база
          </div>
          <h2 className="section-title">Документы и правовые акты</h2>
          <p className="section-subtitle">
            Нормативная документация, регулирующая деятельность регионального оператора.
            Все документы доступны для скачивания.
          </p>
        </div>

        <div className={styles.grid}>
          {documents.map((doc) => (
            <div key={doc.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap} style={{ "--doc-color": doc.color } as React.CSSProperties}>
                  <span className={styles.icon}>{doc.icon}</span>
                </div>
                <span className={styles.format} style={{ "--doc-color": doc.color } as React.CSSProperties}>
                  {doc.format}
                </span>
              </div>

              <div className={styles.category}>{doc.category}</div>
              <h3 className={styles.title}>{doc.title}</h3>
              <p className={styles.desc}>{doc.desc}</p>

              <a
                href={doc.file}
                download={`${doc.originalName}.${doc.format.toLowerCase()}`}
                className={styles.downloadBtn}
                style={{ "--doc-color": doc.color } as React.CSSProperties}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Скачать
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
