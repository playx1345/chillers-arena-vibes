import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const weeklySchedule = [
  {
    day: "Monday",
    activity: "Bear Rush",
    time: "3pm - 11pm",
    type: "special",
    color: "primary",
  },
  {
    day: "Tuesday",
    activity: "Movie and Games Night",
    time: "6pm - 11pm",
    type: "entertainment",
    color: "secondary",
  },
  {
    day: "Wednesday",
    activity: "Ladies' Night",
    time: "8pm - 2am",
    type: "special",
    color: "accent",
    popular: true,
  },
  {
    day: "Thursday",
    activity: "17:59 @Arena / Karaoke Night",
    time: "8pm - 2am",
    type: "music",
    color: "primary",
  },
  {
    day: "Friday",
    activity: "Weekend Affire",
    time: "8pm - 2am",
    type: "special",
    color: "accent",
  },
  {
    day: "Saturday",
    activity: "OldSkol Music Time",
    time: "3pm - 11pm",
    type: "music",
    color: "primary",
  },
  {
    day: "Sunday",
    activity: "Live Band Night",
    time: "6pm - 11pm",
    type: "music",
    color: "primary",
    popular: true,
  },
];

export function WeeklySchedule() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase mb-4">
            <span className="text-primary neon-text-blue">Weekly</span>{" "}
            <span className="text-foreground">Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Something exciting happening every day of the week at Chiller's Arena
          </p>
        </div>

        {/* Weekly Schedule Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 md:gap-6">
          {weeklySchedule.map((schedule, index) => (
            <Card
              key={schedule.day}
              className={cn(
                "group bg-card border-border overflow-hidden transition-all duration-500 animate-slide-up hover:scale-105",
                schedule.popular && "border-accent/50 shadow-[0_0_20px_rgba(255,20,147,0.2)]",
                schedule.color === "primary" && "hover:border-primary/50",
                schedule.color === "accent" && "hover:border-accent/50",
                schedule.color === "secondary" && "hover:border-secondary/50"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Day Badge */}
                <div className="mb-4">
                  <span
                    className={cn(
                      "inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider",
                      schedule.color === "primary" && "bg-primary/20 text-primary neon-text-blue",
                      schedule.color === "accent" && "bg-accent/20 text-accent neon-text-pink",
                      schedule.color === "secondary" && "bg-secondary/20 text-secondary"
                    )}
                  >
                    {schedule.day}
                  </span>
                  {schedule.popular && (
                    <span className="ml-2 text-accent text-xl">⭐</span>
                  )}
                </div>

                {/* Activity Name */}
                <h3 className="text-xl font-display font-bold mb-3 min-h-[3.5rem] group-hover:text-primary transition-colors">
                  {schedule.activity}
                </h3>

                {/* Time */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="font-semibold">{schedule.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            All activities subject to change. Follow us on social media for updates.
          </p>
        </div>
      </div>
    </section>
  );
}
