import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { LangProvider } from "@/i18n/useLanguage";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://openfans.one";

export const metadata: Metadata = {
  title: "Openfans – 具身智能机器人粉丝经济平台 | Web3 AI 社区",
  description:
    "Openfans 是结合具身智能 AI 机器人 Eve、P2P 硬直连和 Web3 代币经济的去中心化粉丝经济平台。发现创作者、订阅独家内容、连接你的 AI 陪伴机器人。Embodied AI robot Eve + P2P connection + decentralized fan economy.",
  keywords: [
    "Openfans",
    "Openfans one",
    "embodied AI fan platform",
    "具身智能粉丝平台",
    "AI robot fan community",
    "AI 机器人粉丝社区",
    "AI creator monetization platform",
    "AI 创作者变现平台",
    "Web3 content subscription platform",
    "Web3 内容订阅平台",
    "decentralized fan economy",
    "去中心化粉丝经济",
    "Eve robot",
    "AI companion robot",
    "silicone companion robot",
    "硅胶陪伴机器人",
    "Web3",
    "creator platform",
    "P2P connection",
    "embodied AI",
    "人形机器人粉丝经济",
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
    title: "Openfans – 具身智能机器人粉丝经济平台 | Web3 AI 社区",
    description:
      "Openfans 结合具身智能 AI 机器人 Eve、P2P 直连和 Web3 代币经济，为创作者和粉丝打造去中心化粉丝经济平台。发现、订阅、连接你的 AI 陪伴。",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Openfans - 具身智能粉丝经济平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Openfans – 具身智能机器人粉丝经济平台 | Web3 AI 社区",
    description:
      "具身智能 AI 机器人 Eve + P2P 直连 + Web3 代币经济。去中心化粉丝经济，你就是明星。",
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
        "A Web3-based decentralized fan economy platform combining embodied AI robot Eve, P2P direct connection, and token economy. Openfans.one focuses on Web3 content subscription and fan economy, distinct from the openfans.org open-source cloud computing community.",
      foundingDate: "2026",
      knowsAbout: [
        "Embodied AI",
        "Artificial Intelligence",
        "Fan Economy",
        "Web3",
        "Companion Robot",
        "Creator Monetization",
        "Blockchain",
        "P2P Connection",
      ],
      slogan: "You are the star.",
      product: [
        { "@type": "Product", name: "Eve Robot", description: "Embodied AI silicone companion robot" },
        { "@type": "Product", name: "Openfans Platform", description: "Web3 decentralized fan economy platform" },
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
    <html lang="zh-CN" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <LangProvider>
            <Nav />
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
