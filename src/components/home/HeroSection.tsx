import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    title: "Mega Block Party 0.1",
    subtitle: "The First Wave - The Biggest Street Party in Nasarawa",
    date: "January 31, 2026",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80",
  },
  {
    title: "Chillers Sensation",
    subtitle: "Where Legends Are Made",
    date: "Every Saturday",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80",
  },
  {
    title: "DJ Play X Live",
    subtitle: "Resident DJ Sessions",
    date: "Weekly Shows",
    image: "https://images.unsplash.com/photo-1571266028243-d220c6cf3a51?w=1920&q=80",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
      ))}

      {/* Animated Spotlight Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] animate-bounce-subtle" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-primary animate-fade-in-down">
            <Calendar className="w-5 h-5 animate-bounce-subtle" />
            <span className="font-medium">{slide.date}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight">
            <span className="text-primary neon-text-blue gradient-text-animated animate-slide-in-left inline-block">
              {slide.title.split(" ")[0]}
            </span>
            <br />
            <span className="text-foreground animate-slide-in-right inline-block stagger-1">
              {slide.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in-up stagger-2">
            {slide.subtitle}
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-zoom-in stagger-3">
            <MapPin className="w-4 h-4" />
            <span>Gauta/Stadium Road, Keffi, Nasarawa State</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up stagger-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 neon-border-pink hover-lift shimmer-effect"
            >
              <Link to="/events">
                View Events <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 hover-glow"
            >
              <Link to="/contact">Find Us</Link>
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12 animate-fade-in stagger-5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-500 hover-scale ${
                index === currentSlide
                  ? "bg-primary w-8 shadow-lg shadow-primary/50"
                  : "bg-muted hover:bg-muted-foreground w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-neon" />
        </div>
      </div>
    </section>
  );
}
