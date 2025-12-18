import { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/shared/PageHeader";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

// Sample images as fallback/demo content
const sampleImages: GalleryImage[] = [
  {
    id: "profile-1",
    src: "https://images.unsplash.com/photo-1571266028243-d220c6cf3a51?w=800&q=80",
    alt: "DJ Play X - Profile Picture",
    category: "artists",
  },
  {
    id: "event-1",
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    alt: "Live Performance",
    category: "events",
  },
  {
    id: "event-2",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    alt: "Crowd at Chillers Arena",
    category: "events",
  },
  {
    id: "gallery-1",
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    alt: "DJ Setup",
    category: "gallery",
  },
  {
    id: "event-3",
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    alt: "Night Vibes",
    category: "events",
  },
  {
    id: "gallery-2",
    src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80",
    alt: "Turntables",
    category: "gallery",
  },
  {
    id: "event-4",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "Dance Floor",
    category: "events",
  },
  {
    id: "artists-1",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    alt: "Live DJ Performance",
    category: "artists",
  },
  {
    id: "gallery-3",
    src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    alt: "Stage Lights",
    category: "gallery",
  },
  {
    id: "event-5",
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    alt: "Party Atmosphere",
    category: "events",
  },
  {
    id: "hero-1",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    alt: "Music Festival Vibes",
    category: "hero",
  },
  {
    id: "gallery-4",
    src: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80",
    alt: "Mixing Console",
    category: "gallery",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "gallery", label: "Gallery" },
  { id: "events", label: "Events" },
  { id: "artists", label: "Artists" },
  { id: "hero", label: "Hero" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<GalleryImage[]>(sampleImages);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("generated_images")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching images:", error);
        // Use sample images as fallback
        setImages(sampleImages);
        setIsLoading(false);
        return;
      }

      const galleryImages: GalleryImage[] = (data || []).map((img) => ({
        id: img.id,
        src: supabase.storage.from("generated-images").getPublicUrl(img.storage_path).data.publicUrl,
        alt: img.prompt.substring(0, 50),
        category: img.category,
      }));

      // Merge with sample images if database is empty, ensuring profile picture is first
      if (galleryImages.length === 0) {
        setImages(sampleImages);
      } else {
        setImages(galleryImages);
      }
    } catch (error) {
      console.error("Error:", error);
      // Use sample images as fallback
      setImages(sampleImages);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredImages = activeCategory === "all"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHeader
          title="Gallery"
          subtitle="Relive the magic from our unforgettable nights"
        />

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Photo Credit */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Camera className="w-5 h-5 text-neon-gold" />
              <span className="text-muted-foreground">
                Photography by <span className="text-neon-gold font-semibold">Jay Photography</span>
              </span>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`text-xs sm:text-sm transition-all duration-300 ${
                    activeCategory === category.id 
                      ? "bg-primary hover:bg-primary/90 scale-105 shadow-lg shadow-primary/50" 
                      : "border-border hover:border-primary hover:scale-105"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Loading State */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-accent mb-4" />
                <p className="text-muted-foreground">Loading gallery...</p>
              </div>
            ) : filteredImages.length === 0 ? (
              <div className="text-center py-20">
                <Camera className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4 animate-bounce-subtle" />
                <p className="text-muted-foreground text-lg">No images found in this category</p>
                <p className="text-muted-foreground/70 text-sm mt-2">
                  Try selecting a different category
                </p>
              </div>
            ) : (
              /* Gallery Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {filteredImages.map((image, index) => (
                  <Dialog key={image.id}>
                    <DialogTrigger asChild>
                      <div
                        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group hover-lift"
                        style={{ 
                          opacity: 0,
                          animation: `fade-in 0.6s ease-out ${index * 0.05}s forwards`
                        }}
                        onClick={() => setSelectedImage(image.id)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-125 group-hover:rotate-2"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <Camera className="w-8 h-8 text-primary mb-2 mx-auto animate-bounce-subtle" />
                            <span className="text-foreground font-bold text-sm sm:text-base">View Full Size</span>
                          </div>
                        </div>
                        {/* Neon border effect on hover */}
                        <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 pointer-events-none" />
                        {/* Category badge */}
                        {image.id === "profile-1" && (
                          <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                            Profile
                          </div>
                        )}
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-4xl p-2 sm:p-4 bg-transparent border-none">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto max-h-[85vh] object-contain rounded-xl animate-zoom-in"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-background/80 hover:bg-background backdrop-blur-sm"
                          onClick={() => setSelectedImage(null)}
                        >
                          <X className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background backdrop-blur-sm"
                          onClick={handlePrevious}
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background backdrop-blur-sm"
                          onClick={handleNext}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </Button>
                        {/* Image info */}
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-background/80 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{image.alt}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
