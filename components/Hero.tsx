"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      r: number;
      speed: number;
      opacity: number;
      dx: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        dx: (Math.random() - 0.5) * 0.3,
      });
    }

    let animFrame: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(46, 204, 113, ${p.opacity})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.dx;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      }
      animFrame = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.hero} id="about">
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.gridOverlay} />

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Официальный старт деятельности · 2026
          </div>

          <h1 className={styles.title}>
            Чистота — наша
            <br />
            <span className={styles.titleGradient}>ответственность.</span>
            <br />
          </h1>

          <p className={styles.desc}>
            МУП «Экотехпром» — региональный оператор по обращению с твёрдыми
            коммунальными отходами на территории Кабардино-Балкарской
            Республики. Обеспечиваем экологическую стабильность и чистоту
            каждого района.
          </p>

          <div className={styles.certBanner}>
            <div className={styles.certIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#2ecc71"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.27l6.91-1.01L12 2z"
                  stroke="#2ecc71"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className={styles.certTitle}>
                Приказ №152 · Без конкурсного отбора
              </p>
              <p className={styles.certText}>
                О присвоении МУП «Экотехпром» статуса регионального оператора
                КБР
              </p>
            </div>
          </div>

          <div className={styles.phoneBanner}>
            <div className={styles.phoneBannerIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <p className={styles.phoneBannerTitle}>
                Для заключения договора на вывоз ТКО звоните по номерам:
              </p>
              <div className={styles.phoneBannerNumbers}>
                <a href="tel:+79287062763" className={styles.phoneLink}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '1px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+7 928 706 27 63</span>
                </a>
                <a href="tel:+79287092164" className={styles.phoneLink}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '1px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+7 928 709 21 64</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button
              className="btn-primary"
              onClick={() => scrollTo("#contact")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              Подать заявку
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo("#tariffs")}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6M9 12h6M9 15h4" />
              </svg>
              Посмотреть тарифы
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.right}>
          <div className={styles.statsGrid}>
            {[
              { value: "10+", label: "районов обслуживания", icon: "📍" },
              {
                value: "500к+",
                label: "жителей в зоне ответственности",
                icon: "👥",
              },
              { value: "24/7", label: "диспетчерская служба", icon: "🕐" },
              { value: "100%", label: "соответствие нормативам", icon: "✅" },
            ].map((s, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statIcon}>{s.icon}</span>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.scrollHint}>
            <div className={styles.scrollLine} />
            <span>Прокрутите вниз</span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z"
            fill="#0a1628"
          />
        </svg>
      </div>
    </section>
  );
}
