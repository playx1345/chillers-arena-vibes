import { Calendar, MapPin, Music, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recurringEvents } from "@/lib/events-data";

const monthlyEvents = recurringEvents;

export function MonthlyEvents() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 texture-graffiti" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Special Events</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-4">
            <span className="text-accent neon-text-pink">Recurring</span>{" "}
            <span className="text-foreground">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mark your calendars for these unmissable monthly and quarterly celebrations
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {monthlyEvents.map((event, index) => (
            <Card
              key={event.id}
              className="bg-card border-border overflow-hidden group hover:border-accent/50 transition-all duration-500 animate-slide-up shadow-lg hover:shadow-[0_0_30px_rgba(255,20,147,0.2)]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Event Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Recurrence Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      event.recurrence === "MONTHLY"
                        ? "bg-accent text-accent-foreground font-bold text-sm px-4 py-2"
                        : "bg-primary text-primary-foreground font-bold text-sm px-4 py-2"
                    }
                  >
                    {event.recurrence}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>

                {/* Schedule Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-foreground">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{event.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Music className="w-5 h-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-sm">What to Expect</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
