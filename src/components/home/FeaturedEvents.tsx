import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const featuredEvents = [
  {
    id: 1,
    title: "Keffi Mega Block Party",
    date: "January 31, 2026",
    time: "4 PM",
    location: "Stadium Road, Keffi",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    description: "The biggest street party in Nasarawa State. Live performances, food vendors, and non-stop entertainment!",
    badge: "MEGA EVENT",
    highlight: true,
  },
  {
    id: 2,
    title: "Keffi Block Party",
    date: "Last Saturday Monthly",
    time: "4 PM",
    location: "Stadium Road, Keffi",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    description: "Monthly street party featuring live music, food vendors, and community vibes.",
    badge: "MONTHLY",
    highlight: false,
  },
  {
    id: 3,
    title: "Chillers Sensation",
    date: "Every Saturday",
    time: "10 PM",
    location: "Chiller's Arena",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    description: "Weekly party featuring DJ Play X and guest DJs spinning the hottest tracks.",
    badge: "WEEKLY",
    highlight: false,
  },
  {
    id: 4,
    title: "Valentine's Night Special",
    date: "February 14, 2026",
    time: "9 PM",
    location: "Chiller's Arena",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
    description: "A romantic evening of love songs, couples' dance, and special performances.",
    badge: "UPCOMING",
    highlight: false,
  },
];

export function FeaturedEvents() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 texture-graffiti" />
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-4">
            <span className="text-primary neon-text-blue gradient-text-animated">Upcoming</span> Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't miss out on the hottest events in Keffi. Get your spot now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredEvents.map((event, index) => (
            <Card
              key={event.id}
              className={cn(
                "group bg-card border-border overflow-hidden card-interactive animate-fade-in-up",
                event.highlight 
                  ? "border-accent/50 shadow-[0_0_30px_rgba(255,215,0,0.15)] animate-glow-pulse" 
                  : "hover:border-primary/50"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className={cn(
                  "absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm transition-all duration-300 shimmer-effect",
                  event.highlight 
                    ? "bg-accent/90 text-accent-foreground animate-bounce-subtle" 
                    : event.badge === "WEEKLY" 
                      ? "bg-primary/90 text-primary-foreground"
                      : "bg-muted/90 text-muted-foreground"
                )}>
                  {event.badge}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className={cn(
                  "text-xl font-display font-bold mb-2 transition-all duration-300 neon-underline",
                  event.highlight ? "text-accent" : "group-hover:text-primary"
                )}>
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                    <Clock className="w-4 h-4 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-primary" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 font-bold hover-lift shimmer-effect"
          >
            <Link to="/events">
              View All Events <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
