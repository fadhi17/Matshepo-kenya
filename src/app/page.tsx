import { Hero } from "@/components/home/Hero";
import { TrustHighlights } from "@/components/home/TrustHighlights";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { CategoryCards } from "@/components/home/CategoryCards";
import { WaterproofingBanner } from "@/components/home/WaterproofingBanner";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { QualitySection } from "@/components/home/QualitySection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { QuoteSection } from "@/components/home/QuoteSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <WelcomeSection />
      <CategoryCards />
      <WaterproofingBanner />
      <FeaturedProducts />
      <QualitySection />
      <AboutPreview />
      <QuoteSection />
    </>
  );
}
