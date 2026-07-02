import { Navbar } from "@/components/navbar";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const BASE_URL = "https://vriddhri-ai-yh23.vercel.app";

export const metadata: Metadata = {
  title: "Testimonials — VriddhiAI | Client Reviews",
  description:
    "See what clients say about VriddhiAI. Real reviews from businesses we've helped grow with AI-powered web solutions and intelligent digital experiences.",
  keywords: [
    "VriddhiAI reviews",
    "client testimonials web agency",
    "AI web development feedback",
    "freelance developer reviews India",
  ],
  alternates: { canonical: `${BASE_URL}/testimonials` },
  openGraph: {
    title: "Testimonials — VriddhiAI | Client Reviews",
    description:
      "Real reviews from clients who've grown their businesses with VriddhiAI's AI-powered web solutions.",
    url: `${BASE_URL}/testimonials`,
    siteName: "VriddhiAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "VriddhiAI Client Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials — VriddhiAI | Client Reviews",
    description:
      "Real reviews from clients who've grown their businesses with VriddhiAI's AI-powered web solutions.",
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@VriddhiAI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VriddhiAI Client Testimonials",
  description: "Reviews and testimonials from VriddhiAI clients worldwide.",
  url: `${BASE_URL}/testimonials`,
  itemListElement: [
    {
      "@type": "Review",
      reviewBody: "VriddhiAI delivered an exceptional website that exceeded our expectations.",
      author: { "@type": "Person", name: "Client" },
      itemReviewed: {
        "@type": "ProfessionalService",
        name: "VriddhiAI",
        url: BASE_URL,
      },
    },
  ],
};

export default function TestimonialsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
