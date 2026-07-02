import { Navbar } from "@/components/navbar";
import { PortfolioSection } from "@/components/portfolio-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const BASE_URL = "https://vriddhri-ai-yh23.vercel.app";

export const metadata: Metadata = {
  title: "Work & Portfolio — VriddhiAI | Our Projects",
  description:
    "Browse VriddhiAI's portfolio of AI-powered web projects, Next.js sites, custom applications, and creative digital experiences built for global clients.",
  keywords: [
    "VriddhiAI portfolio",
    "web development projects",
    "AI web app portfolio",
    "Next.js project examples",
    "freelance agency portfolio",
  ],
  alternates: { canonical: `${BASE_URL}/work` },
  openGraph: {
    title: "Work & Portfolio — VriddhiAI | Our Projects",
    description:
      "Browse VriddhiAI's portfolio of AI-powered web projects, Next.js sites, custom applications, and creative digital experiences.",
    url: `${BASE_URL}/work`,
    siteName: "VriddhiAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "VriddhiAI Work & Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Portfolio — VriddhiAI | Our Projects",
    description:
      "Browse VriddhiAI's portfolio of AI-powered web projects and creative digital experiences.",
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@VriddhiAI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "VriddhiAI Portfolio",
  description:
    "A curated collection of web and AI projects built by VriddhiAI for clients worldwide.",
  url: `${BASE_URL}/work`,
  publisher: {
    "@type": "ProfessionalService",
    name: "VriddhiAI",
    url: BASE_URL,
  },
};

export default function WorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
