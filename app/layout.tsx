import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeremy Tillman",
  url: "https://tillhouse.co",
  jobTitle: "Product Executive",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/jrtillman/",
    "https://github.com/tillhouse",
  ],
};

export const metadata: Metadata = {
  title: "Jeremy Tillman | NYC Product Executive & AI-Native Leadership",
  description:
    "NYC-based product executive helping startups build and scale AI-native and privacy-focused products. Fractional, interim, and full-time leadership.",
  keywords: [
    "product leadership",
    "fractional executive",
    "AI products",
    "startup advisor",
    "product management",
  ],
  authors: [{ name: "Jeremy Tillman" }],
  icons: {
    icon: "/images/logos/Logo Files/Favicons/Favicon - Inverted.png",
    apple: "/images/logos/Logo Files/Favicons/Favicon - Inverted.png",
  },
  openGraph: {
    title: "Jeremy Tillman | NYC Product Executive & AI-Native Leadership",
    description:
      "NYC-based product executive helping startups build, ship, and scale AI-native products.",
    url: "https://tillhouse.co",
    siteName: "Tillhouse",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tillhouse.co/images/headshots/Tillman-00654-Edit.jpg",
        width: 1200,
        height: 800,
        alt: "Jeremy Tillman - NYC Product Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Tillman | NYC Product Executive & AI-Native Leadership",
    description:
      "NYC-based product executive helping startups build, ship, and scale AI-native products.",
    images: ["https://tillhouse.co/images/headshots/Tillman-00654-Edit.jpg"],
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
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </body>
    </html>
  );
}

