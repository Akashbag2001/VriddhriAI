import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vriddhiai.com"),
  title: "VriddhiAI — AI-Powered Web Agency & Software Development",
  description:
    "VriddhiAI is a premium freelance agency leveraging state-of-the-art AI to accelerate web development while building custom AI applications, chatbots, and intelligent interfaces for global clients.",
  keywords: [
    "AI web development",
    "AI integration agency",
    "custom AI chatbots",
    "AI software development",
    "machine learning web apps",
    "AI freelance developer",
    "AI user experience design",
    "Next.js AI agency",
    "intelligent automation services",
    "VriddhiAI solutions",
    "web development",
    "freelance agency",
    "Next.js",
    "UI design",
    "e-commerce",
    "VriddhiAI",
    "India",
  ],
  alternates: {
    canonical: "/",
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
  authors: [{ name: "VriddhiAI Team", url: "https://vriddhiai.com" }],
  creator: "VriddhiAI",
  publisher: "VriddhiAI",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "VriddhiAI — AI-Powered Web Agency & Software Development",
    description: "Immersive 3D interactive experiences, high-performance Next.js websites, and custom-tailored AI chatbots and integrations that scale your business.",
    url: "https://vriddhiai.com",
    siteName: "VriddhiAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "VriddhiAI — Premium AI Web Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VriddhiAI — AI-Powered Web Agency & Software Development",
    description: "Leveraging state-of-the-art AI to accelerate web development while building custom AI applications and chatbots.",
    images: ["/logo-full.png"],
    creator: "@VriddhiAI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "VriddhiAI",
  "url": "https://vriddhiai.com",
  "logo": "https://vriddhiai.com/logo-full.png",
  "image": "https://vriddhiai.com/logo-full.png",
  "description": "VriddhiAI is a premium freelance agency leveraging state-of-the-art AI to accelerate web development while building custom AI applications, chatbots, and intelligent interfaces.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "20.5937",
    "longitude": "78.9629"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://github.com/VriddhiAI",
    "https://linkedin.com/company/vriddhiai"
  ]
};

import { ThreeBackground } from "@/components/three-canvas";
import { CustomCursor } from "@/components/custom-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-500 overflow-x-hidden">
        <ThreeBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
