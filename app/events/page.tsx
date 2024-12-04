"use client";

import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    title: "Introduction to Programming",
    date: "November 15, 2024",
    location: "Main Campus",
    description: "Learn the basics of programming with our expert instructors.",
  },
  {
    title: "Leadership Workshop",
    date: "November 20, 2024",
    location: "Virtual",
    description: "Develop essential leadership skills for the modern workplace.",
  },
  {
    title: "Tech Career Fair",
    date: "December 5, 2024",
    location: "Conference Center",
    description: "Connect with leading tech companies and explore career opportunities.",
  },
];

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-muted-foreground">
          Join our events to enhance your skills and expand your network.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.title}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}