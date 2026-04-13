import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Samuel — Data Analyst",
  description:
    "Portafolio profesional de analista de datos. Transformo datos complejos en insights accionables y visualizaciones estratégicas.",
  keywords: ["data analyst", "data scientist", "portfolio", "python", "sql", "machine learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
