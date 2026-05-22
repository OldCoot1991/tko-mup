import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "МУП «Чистый Город» — Региональный оператор по обращению с ТКО в КБР",
  description:
    "Официальный сайт регионального оператора по обращению с твёрдыми коммунальными отходами в Кабардино-Балкарской Республике. Тарифы, документы, подача заявки на вывоз мусора.",
  keywords:
    "ТКО, КБР, вывоз мусора, региональный оператор, Кабардино-Балкария, Нальчик, твёрдые коммунальные отходы",
  openGraph: {
    title: "МУП «Чистый Город» — Региональный оператор ТКО КБР",
    description:
      "Официальный информационный ресурс регионального оператора по обращению с ТКО в Кабардино-Балкарской Республике.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
