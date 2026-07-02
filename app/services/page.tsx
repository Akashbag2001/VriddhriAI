import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const BASE_URL = "https://vriddhri-ai-yh23.vercel.app";

export const metadata: Metadata = {
  title: "Services — VriddhiAI | Web Dev, AI Agents, SEO & Digital Marketing",
  description:
    "VriddhiAI offers web development, UI/UX design, e-commerce, SEO, Meta & Google Ads, AI agents, AI callers, web chat, social media DM automation, digital marketing, and social media management.",
  keywords: [
    "AI web development services",
    "custom AI chatbot development",
    "AI caller voice agent",
    "social media DM automation",
    "SEO services India",
    "Google Ads management",
    "Meta Ads agency",
    "digital marketing agency",
    "social media management",
    "performance marketing",
    "AI agents automation",
    "web chat integration",
    "Next.js development agency",
    "e-commerce development India",
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Services — VriddhiAI | AI Web Development & Custom Chatbots",
    description:
      "Premium AI-powered web development, custom chatbots, and intelligent digital experiences. Explore what VriddhiAI can build for you.",
    url: `${BASE_URL}/services`,
    siteName: "VriddhiAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "VriddhiAI Services — AI Web Development & Custom Chatbots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — VriddhiAI | AI Web Development & Custom Chatbots",
    description:
      "Premium AI-powered web development, custom chatbots, and intelligent digital experiences.",
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@VriddhiAI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "VriddhiAI Web & AI Development Services",
  provider: {
    "@type": "ProfessionalService",
    name: "VriddhiAI",
    url: BASE_URL,
  },
  description:
    "AI-powered web development, custom chatbots, e-commerce stores, and high-performance Next.js websites for global clients.",
  areaServed: "Worldwide",
  serviceType: [
    "Web Development",
    "AI Chatbot Development",
    "E-Commerce Development",
    "AI Integration",
    "UI/UX Design",
  ],
  url: `${BASE_URL}/services`,
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ServicesSection />
      <Footer />
    </main>
  );
}
