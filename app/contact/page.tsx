import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const BASE_URL = "https://vriddhri-ai-yh23.vercel.app";

export const metadata: Metadata = {
  title: "Contact VriddhiAI — Start Your Project",
  description:
    "Get in touch with VriddhiAI. Let's build something remarkable together. Reach out for a free consultation on your next AI-powered web project.",
  keywords: [
    "contact VriddhiAI",
    "hire AI web developer India",
    "freelance web agency contact",
    "start a web project",
    "AI development consultation",
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact VriddhiAI — Start Your Project",
    description:
      "Let's build something remarkable together. Reach out to VriddhiAI for a free consultation on your next AI-powered web project.",
    url: `${BASE_URL}/contact`,
    siteName: "VriddhiAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Contact VriddhiAI — Start Your Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact VriddhiAI — Start Your Project",
    description:
      "Let's build something remarkable together. Reach out to VriddhiAI for a free consultation.",
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@VriddhiAI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact VriddhiAI",
  description:
    "Reach out to VriddhiAI for a free consultation on your next AI-powered web or software project.",
  url: `${BASE_URL}/contact`,
  mainEntity: {
    "@type": "ProfessionalService",
    name: "VriddhiAI",
    url: BASE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  },
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
