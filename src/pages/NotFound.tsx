import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Music2, Calendar } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex min-h-[calc(100vh-200px)] items-center justify-center relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-neon" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-neon" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Number with neon effect */}
            <div className="mb-8 animate-bounce-in">
              <h1 className="text-9xl md:text-[200px] font-display font-black uppercase mb-4">
                <span className="text-primary neon-text-blue">4</span>
                <span className="text-accent neon-text-pink">0</span>
                <span className="text-primary neon-text-blue">4</span>
              </h1>
            </div>

            {/* Message */}
            <div className="space-y-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Party Not Found!
              </h2>
              <p className="text-xl text-muted-foreground">
                Looks like this page took a wrong turn on the way to the club.
              </p>
              <p className="text-lg text-muted-foreground">
                The page <span className="text-primary font-mono">{location.pathname}</span> doesn't exist.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 neon-border"
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-bold px-8"
              >
                <Link to="/events">
                  <Calendar className="w-5 h-5 mr-2" />
                  View Events
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary hover:bg-primary/10 font-bold px-8"
                onClick={() => window.history.back()}
              >
                <a>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </a>
              </Button>
            </div>

            {/* Fun message */}
            <div className="mt-12 p-6 glass rounded-2xl inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Music2 className="w-12 h-12 text-accent mx-auto mb-3 animate-pulse-neon" />
              <p className="text-muted-foreground">
                While you're here, check out our upcoming events at{" "}
                <Link to="/events" className="text-accent font-semibold neon-underline">
                  Chiller's Arena
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
