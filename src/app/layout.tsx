import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "✦ Maná Diário | Um ritual diário de fé para começar melhor todas as manhãs",
  description:
    "Receba todas as manhãs pelo WhatsApp uma leitura bíblica, reflexão, oração guiada e aplicação prática. Antes de o dia ganhar pressa, um momento com Deus. A partir de R$ 24,98/mês.",
  keywords: [
    "devocional diário",
    "devocional whatsapp",
    "maná diário",
    "oração da manhã",
    "leitura bíblica diária",
    "momento com deus",
    "ritual matinal de fé",
  ],
  authors: [{ name: "Maná Diário" }],
  creator: "Maná Diário",
  publisher: "Maná Diário",
  robots: "index, follow",
  openGraph: {
    title: "Antes de o dia ganhar pressa, um momento com Deus.",
    description:
      "Conheça o Maná Diário. Um ritual diário de fé para começar melhor todas as manhãs, direto no seu WhatsApp.",
    url: "https://manadiario.cloud",
    siteName: "Maná Diário",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antes de o dia ganhar pressa, um momento com Deus. | Maná Diário",
    description:
      "Seu devocional da manhã direto no WhatsApp. Leitura, reflexão, oração e aplicação prática.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${newsreader.variable}`}
    >
      <body className="bg-[#F7F4EC] text-[#292A24] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
