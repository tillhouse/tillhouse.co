import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EightBitProvider } from "@/components/EightBitProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremy Tillman | AI-Native Product Leadership",
  description:
    "Fractional and full-time product executive helping startups build, ship, and scale AI-native products.",
  keywords: [
    "product leadership",
    "fractional executive",
    "AI products",
    "startup advisor",
    "product management",
  ],
  authors: [{ name: "Jeremy Tillman" }],
  icons: {
    icon: "/images/logos/Logo Files/Favicons/browser.png",
    apple: "/images/logos/Logo Files/Favicons/iPhone.png",
  },
  openGraph: {
    title: "Jeremy Tillman | AI-Native Product Leadership",
    description:
      "Fractional and full-time product executive helping startups build, ship, and scale AI-native products.",
    url: "https://tillhouse.co",
    siteName: "Tillhouse",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Tillman | AI-Native Product Leadership",
    description:
      "Fractional and full-time product executive helping startups build, ship, and scale AI-native products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart.variable}`}>
      <body className="font-sans antialiased">
        <EightBitProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </EightBitProvider>
      </body>
    </html>
  );
}

