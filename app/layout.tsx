import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VriddhiAI — Premium Freelance Web Agency",
  description:
    "VriddhiAI is a premium freelance web agency crafting high-performance websites, e-commerce stores, and digital products that captivate and convert. Based in India, working worldwide.",
  keywords: [
    "web development",
    "freelance agency",
    "Next.js",
    "UI design",
    "e-commerce",
    "VriddhiAI",
    "India",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "VriddhiAI — Premium Freelance Web Agency",
    description: "We build digital experiences that grow your business.",
    type: "website",
    images: [
      {
        url: "/logo-full.png",
        width: 1024,
        height: 1024,
        alt: "VriddhiAI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VriddhiAI — Premium Freelance Web Agency",
    description: "We build digital experiences that grow your business.",
    images: ["/logo-full.png"],
  },
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
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-500 overflow-x-hidden">
        <ThreeBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
