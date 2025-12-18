// Weekly Schedule Data
export const weeklySchedule = [
  {
    day: "Monday",
    activity: "Bear Rush",
    time: "3pm - 11pm",
    type: "special",
    color: "primary" as const,
  },
  {
    day: "Tuesday",
    activity: "Movie and Games Night",
    time: "6pm - 11pm",
    type: "entertainment",
    color: "secondary" as const,
  },
  {
    day: "Wednesday",
    activity: "Ladies' Night",
    time: "8pm - 2am",
    type: "special",
    color: "accent" as const,
    popular: true,
  },
  {
    day: "Thursday",
    activity: "17:59 @Arena / Karaoke Night",
    time: "8pm - 2am",
    type: "music",
    color: "primary" as const,
  },
  {
    day: "Friday",
    activity: "Weekend Affire",
    time: "8pm - 2am",
    type: "special",
    color: "accent" as const,
  },
  {
    day: "Saturday",
    activity: "OldSkol Music Time",
    time: "3pm - 11pm",
    type: "music",
    color: "primary" as const,
  },
  {
    day: "Sunday",
    activity: "Live Band Night",
    time: "6pm - 11pm",
    type: "music",
    color: "primary" as const,
    popular: true,
  },
];

// Recurring Events Data
export const recurringEvents = [
  {
    id: "keffi-block-party",
    title: "Keffi Block Party",
    recurrence: "MONTHLY" as const,
    schedule: "Last Saturday of every month",
    time: "4:00 PM - 12:00 AM",
    location: "Stadium Road, Keffi",
    description: "The biggest street party in Nasarawa State! Join us for live performances, amazing food vendors, and non-stop music. A community celebration bringing together families, friends, and music lovers.",
    highlights: ["Live Performances", "Street Food", "DJ Sets", "Family Friendly"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
  {
    id: "nasarawa-industry-night",
    title: "Nasarawa Industry Night",
    recurrence: "QUARTERLY" as const,
    schedule: "Once every quarter",
    time: "8:00 PM - 2:00 AM",
    location: "Chiller's Arena, Keffi",
    description: "A prestigious networking event celebrating the business and creative industries of Nasarawa State. Connect with industry leaders, enjoy premium entertainment, and experience the best of what our state has to offer.",
    highlights: ["Networking", "Premium Entertainment", "Industry Leaders", "Live Music"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
];
