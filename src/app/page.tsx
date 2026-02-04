import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCards } from "@/components/home/FeatureCards";
import { QuickStartCards } from "@/components/home/QuickStartCards";
import { RoadmapPreview } from "@/components/home/RoadmapPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <RoadmapPreview />
      <QuickStartCards />
    </>
  );
}
