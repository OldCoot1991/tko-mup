"use client";

import { useState } from "react";
import styles from "./Tariffs.module.css";

type Tab = "population" | "commercial";

export default function Tariffs() {
  const [active, setActive] = useState<Tab>("population");

  return (
    <section className={styles.section} id="tariffs">
      <div className={styles.bgDecor} />

      <div className="container">
        <div className={styles.header}>
          <div className="badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
            </svg>
            Актуальные тарифы 2026
          </div>
          <h2 className="section-title">Тарифы и нормативы ТКО</h2>
          <p className="section-subtitle">
            Тарифы утверждены Государственным Комитетом КБР по тарифам и защите прав потребителей на 2026 год.
          </p>
        </div>

        {/* Switcher */}
        <div className={styles.switcher}>
          <button
            className={`${styles.switchBtn} ${active === "population" ? styles.switchActive : ""}`}
            onClick={() => setActive("population")}
          >
            <span>🏠</span> Для физических лиц
          </button>
          <button
            className={`${styles.switchBtn} ${active === "commercial" ? styles.switchActive : ""}`}
            onClick={() => setActive("commercial")}
          >
            <span>🏢</span> Для организаций
          </button>
        </div>

        {/* ── ФИЗИЧЕСКИЕ ЛИЦА ── */}
        {active === "population" && (
          <div className={styles.content}>
            {/* Тариф на услугу рег.оператора */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                Тарифы на услугу регионального оператора по обращению с ТКО
                <span className={styles.blockUnit}>(руб. за 1 куб.м.)</span>
              </h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Зона</th>
                      <th>с 01.01.2026 по 30.09.2026</th>
                      <th>с 01.10.2026 по 31.12.2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 зона</td>
                      <td className={styles.val}>356,73</td>
                      <td className={styles.val}>378,33</td>
                    </tr>
                    <tr>
                      <td>2 зона</td>
                      <td className={styles.val}>388,15</td>
                      <td className={styles.val}>410,32</td>
                    </tr>
                    <tr>
                      <td>3 зона</td>
                      <td className={styles.val}>358,43</td>
                      <td className={styles.val}>383,21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Нормативы и плата — период 1 */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                Нормативы накопления ТКО / Плата на 1 человека в месяц по зонам
                <span className={styles.blockUnit}>(руб.) &mdash; с 01.01.2026 по 30.09.2026</span>
              </h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Категория жилья</th>
                      <th>Норматив</th>
                      <th>1 зона</th>
                      <th>2 зона</th>
                      <th>3 зона</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Многоквартирные жилые дома (ТКО, в т.ч. КГО)</td>
                      <td className={styles.norm}>2,83 м³/год<br/>на 1 проживающего</td>
                      <td className={styles.val}>84,13</td>
                      <td className={styles.val}>91,54</td>
                      <td className={styles.val}>84,53</td>
                    </tr>
                    <tr>
                      <td>Индивидуальные жилые дома (ТКО, в т.ч. КГО)</td>
                      <td className={styles.norm}>3,11 м³/год<br/>на 1 проживающего</td>
                      <td className={styles.val}>92,45</td>
                      <td className={styles.val}>100,60</td>
                      <td className={styles.val}>92,89</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Нормативы и плата — период 2 */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                Нормативы накопления ТКО / Плата на 1 человека в месяц по зонам
                <span className={styles.blockUnit}>(руб.) &mdash; с 01.10.2026 по 31.12.2026</span>
              </h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Категория жилья</th>
                      <th>Норматив</th>
                      <th>1 зона</th>
                      <th>2 зона</th>
                      <th>3 зона</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Многоквартирные жилые дома (ТКО, в т.ч. КГО)</td>
                      <td className={styles.norm}>2,83 м³/год<br/>на 1 проживающего</td>
                      <td className={styles.val}>89,22</td>
                      <td className={styles.val}>96,77</td>
                      <td className={styles.val}>90,37</td>
                    </tr>
                    <tr>
                      <td>Индивидуальные жилые дома (ТКО, в т.ч. КГО)</td>
                      <td className={styles.norm}>3,11 м³/год<br/>на 1 проживающего</td>
                      <td className={styles.val}>98,05</td>
                      <td className={styles.val}>106,34</td>
                      <td className={styles.val}>99,32</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── ОРГАНИЗАЦИИ ── */}
        {active === "commercial" && (
          <div className={styles.content}>
            {/* Тариф на услугу рег.оператора */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                Тарифы на услугу регионального оператора по обращению с ТКО
                <span className={styles.blockUnit}>(руб. за 1 куб.м.)</span>
              </h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Зона</th>
                      <th>с 01.01.2026 по 30.09.2026</th>
                      <th>с 01.10.2026 по 31.12.2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 зона</td>
                      <td className={styles.val}>356,73</td>
                      <td className={styles.val}>378,33</td>
                    </tr>
                    <tr>
                      <td>2 зона</td>
                      <td className={styles.val}>388,15</td>
                      <td className={styles.val}>410,32</td>
                    </tr>
                    <tr>
                      <td>3 зона</td>
                      <td className={styles.val}>358,43</td>
                      <td className={styles.val}>383,21</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Тариф на захоронение */}
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>
                Тарифы на захоронение ТКО
                <span className={styles.blockUnit}>(руб. за 1 тонну)</span>
              </h3>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Объект</th>
                      <th>с 01.01.2026 по 30.09.2026</th>
                      <th>с 01.10.2026 по 31.12.2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Полигон ТКО Урвань</td>
                      <td className={styles.val}>308,19</td>
                      <td className={styles.val}>308,19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        <div className={styles.note}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>
            <strong>Важно:</strong> Тарифы носят справочный характер. Окончательный расчёт производится
            по заключённому договору. По вопросам расчёта обратитесь по электронной почте:{" "}
            <a href="mailto:dogovor@ecotech07.ru">dogovor@ecotech07.ru</a>
          </p>
        </div>
      </div>
    </section>
  );
}
