import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { SectionPreviews } from "@/components/section-previews";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SectionPreviews />
      <Footer />
    </main>
  );
}
