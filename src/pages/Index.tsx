import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { MegaBlockPartySection } from "@/components/home/MegaBlockPartySection";
import { WeeklySchedule } from "@/components/home/WeeklySchedule";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { DJSpotlight } from "@/components/home/DJSpotlight";
import { GalleryPreview } from "@/components/home/GalleryPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <MegaBlockPartySection />
        <WeeklySchedule />
        <FeaturedEvents />
        <DJSpotlight />
        <GalleryPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
