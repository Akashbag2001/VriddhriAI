import { Navbar } from "@/components/navbar";
import { ProcessSection } from "@/components/process-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

const BASE_URL = "https://vriddhri-ai-yh23.vercel.app";

export const metadata: Metadata = {
  title: "Our Process — VriddhiAI | How We Build",
  description:
    "Discover VriddhiAI's streamlined development process — from discovery and design to deployment. See how we turn ideas into high-performance digital products.",
  keywords: [
    "web development process",
    "AI project workflow",
    "how we build websites",
    "software development lifecycle",
    "VriddhiAI process",
  ],
  alternates: { canonical: `${BASE_URL}/process` },
  openGraph: {
    title: "Our Process — VriddhiAI | How We Build",
    description:
      "From discovery and design to deployment — see how VriddhiAI turns ideas into high-performance digital products.",
    url: `${BASE_URL}/process`,
    siteName: "VriddhiAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "VriddhiAI Development Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process — VriddhiAI | How We Build",
    description:
      "From discovery and design to deployment — see how VriddhiAI turns ideas into high-performance digital products.",
    images: [`${BASE_URL}/opengraph-image`],
    creator: "@VriddhiAI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How VriddhiAI Builds Digital Products",
  description:
    "VriddhiAI's end-to-end development process from discovery to deployment.",
  url: `${BASE_URL}/process`,
  step: [
    {
      "@type": "HowToStep",
      name: "Discovery",
      text: "We learn about your business, goals, and target audience.",
    },
    {
      "@type": "HowToStep",
      name: "Design",
      text: "We craft wireframes and visual designs tailored to your brand.",
    },
    {
      "@type": "HowToStep",
      name: "Development",
      text: "We build your product using modern, performance-first technologies.",
    },
    {
      "@type": "HowToStep",
      name: "Deployment",
      text: "We deploy, test, and ensure everything runs smoothly at launch.",
    },
  ],
};

export default function ProcessPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ProcessSection />
      <Footer />
    </main>
  );
}
