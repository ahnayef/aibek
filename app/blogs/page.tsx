"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const blogs = [
  {
    title: "The Future of Education",
    date: "October 15, 2024",
    author: "Dr. Sarah Johnson",
    excerpt: "Exploring how technology is reshaping the educational landscape.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
  },
  {
    title: "Building Leadership Skills",
    date: "October 10, 2024",
    author: "Michael Chen",
    excerpt: "Key strategies for developing effective leadership capabilities.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  },
  {
    title: "Learning in the Digital Age",
    date: "October 5, 2024",
    author: "Emma Williams",
    excerpt: "Adapting to new learning methodologies in a digital world.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
        <p className="text-muted-foreground">
          Explore our collection of articles on education, leadership, and personal growth.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.title} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                {blog.date} • By {blog.author}
              </div>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{blog.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}