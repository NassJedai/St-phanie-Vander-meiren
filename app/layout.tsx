import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stephanievandermeiren.be"),
  title: {
    default: "Stéphanie Vander Meiren — Marionnettes, Illustration, Spectacle vivant",
    template: "%s · Stéphanie Vander Meiren",
  },
  description:
    "Artiste belge pluridisciplinaire — marionnettes, illustration jeunesse, scénographie. Compagnie des Vieux Luneux.",
  keywords: [
    "Stéphanie Vander Meiren",
    "Vieux Luneux",
    "marionnettes",
    "Bruxelles",
    "illustration jeunesse",
    "spectacle vivant",
    "scénographie",
    "ateliers artistiques",
  ],
  openGraph: {
    title: "Stéphanie Vander Meiren — Artiste pluridisciplinaire",
    description:
      "Marionnettes hyperréalistes, illustration jeunesse et spectacle vivant. Compagnie des Vieux Luneux.",
    type: "website",
    locale: "fr_BE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans bg-ink-950 text-cream-50 antialiased">
        {children}
      </body>
    </html>
  );
}
