import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { LangProvider } from "@/i18n/useLanguage";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://blinplin.com";

export const metadata: Metadata = {
  title: "Openfans You are the star.",
  description:
    "Openfans is a Web3 decentralized fan economy platform combining embodied AI robot Eve, P2P direct connection, and token economy. Discover creators, connect directly, and own your AI companion.",
  keywords: [
    "Openfans",
    "Web3",
    "fan economy",
    "AI companion robot",
    "Eve robot",
    "decentralized",
    "creator platform",
    "P2P connection",
    "embodied AI",
    "silicone robot",
  ],
  authors: [{ name: "Openfans" }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    siteName: "Openfans",
    title: "Openfans You are the star.",
    description:
      "Openfans combines embodied AI robot Eve, P2P direct connection, and token economy for creators and fans.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Openfans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Openfans You are the star.",
    description:
      "Embodied AI robot Eve + P2P connection + Web3 token economy. You are the star.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f1a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Openfans",
      url: siteUrl,
      description:
        "A Web3-based decentralized fan economy platform combining embodied AI robot Eve, P2P direct connection, and token economy.",
      foundingDate: "2026",
      knowsAbout: [
        "Artificial Intelligence",
        "Web3",
        "Fan Economy",
        "Companion Robot",
        "Blockchain",
      ],
    },
    {
      "@type": "WebSite",
      name: "Openfans",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/discover?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0f0f1a] text-[#f0e6ff]">
        <LangProvider>
          <Nav />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
