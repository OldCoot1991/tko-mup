"use client";

import styles from "./ContactForm.module.css";

const contacts = [
  {
    id: "address",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Юридический адрес",
    value: "г. Нальчик, ул. Абидова, д. 17",
    href: "https://maps.yandex.ru/?text=Нальчик+Абидова+17",
    sub: "КБР, 360001",
    isEmail: false,
  },
  {
    id: "postal",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "Почтовый адрес",
    value: "г. Нальчик, ул. Тургенева, д. 21А",
    href: "https://maps.yandex.ru/?text=Нальчик+Тургенева+21",
    sub: "КБР, 360004",
    isEmail: false,
  },
  {
    id: "hours",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Режим работы",
    value: "Пн–Пт: 9:00–18:00",
    href: "#",
    sub: "Суббота–Воскресенье: выходной",
    isEmail: false,
  },
];

export default function ContactForm() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.bgGlow} />

      <div className="container">
        <div className={styles.header}>
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Обратная связь
          </div>
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle">
            Для вопросов, обращений и заключения договора — напишите в договорной отдел или позвоните по указанным номерам.
          </p>
        </div>

        <div className={styles.heroGrid}>
          {/* Email — hero card */}
          <a
            href="mailto:info@ecotech07.ru"
            className={styles.emailCard}
          >
            <div className={styles.emailCardLeft}>
              <div className={styles.emailIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="1.8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className={styles.emailLabel}>Электронная почта</p>
                <p className={styles.emailValue}>info@ecotech07.ru</p>
                <p className={styles.emailSub}>Для общих вопросов и обращений</p>
              </div>
            </div>
            <div className={styles.emailAction}>
              <span>Написать</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </div>
          </a>

          {/* Phone — hero card */}
          <div className={styles.phoneCard}>
            <div className={styles.phoneCardLeft}>
              <div className={styles.contractContent}>
                <p className={styles.phoneLabel}>Заключение договоров на вывоз ТКО</p>
                <div className={styles.phoneNumbersColumn}>
                  <div className={styles.contractContactGroup}>
                    <div className={styles.contractSideIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className={styles.contractContactLinks}>
                      <a href="tel:+79287062763" className={styles.phoneNumber}>
                        <span>+7 928 706 27 63</span>
                      </a>
                      <a href="tel:+79287092164" className={styles.phoneNumber}>
                        <span>+7 928 709 21 64</span>
                      </a>
                    </div>
                  </div>
                  <div className={styles.contractContactGroup}>
                    <div className={styles.contractSideIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <a href="mailto:dogovor@ecotech07.ru" className={`${styles.phoneNumber} ${styles.contractEmail}`}>
                      <span className={styles.contractEmailText}>
                        <span className={styles.contractEmailLabel}>Почта договорного отдела</span>
                        <span>dogovor@ecotech07.ru</span>
                      </span>
                    </a>
                  </div>
                </div>
                <p className={styles.phoneSub}>Звоните по указанным номерам для оформления договора</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>

          {/* Other contact items */}
          {contacts.filter(c => !c.isEmail).map((c) => (
            <a
              key={c.id}
              href={c.href}
              className={styles.contactItem}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <div className={styles.contactIcon}>{c.icon}</div>
              <div>
                <p className={styles.contactLabel}>{c.label}</p>
                <p className={styles.contactValue}>{c.value}</p>
                <p className={styles.contactSub}>{c.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
