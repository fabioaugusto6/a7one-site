import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A7 One — Marketing • Growth • AI",
  description:
    "Estratégia, marketing, tecnologia e inteligência artificial para acelerar empresas.",
  openGraph: {
    title: "A7 One — Marketing • Growth • AI",
    description:
      "Estratégia, marketing, tecnologia e inteligência artificial para acelerar empresas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
