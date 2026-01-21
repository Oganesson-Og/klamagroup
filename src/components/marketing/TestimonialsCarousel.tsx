"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Klama completely transformed our outdated website. We went from losing customers due to slow loading to now getting 40+ leads per month. The investment paid for itself within 3 months.",
    author: "Tendai Moyo",
    role: "Managing Director",
    company: "Green Valley Mining",
    industry: "Mining",
    stats: "+320% website traffic",
  },
  {
    quote: "The inventory system they built for us has eliminated stock-outs across our 12 branches. We can now see real-time stock levels and automate reorders. Game changer for retail.",
    author: "Chipo Dziva",
    role: "Operations Manager",
    company: "Sunrise Supermarkets",
    industry: "Retail",
    stats: "Zero stock-outs in 6 months",
  },
  {
    quote: "Our drivers now use the mobile app even in areas with poor connectivity. Delivery confirmations with photos and signatures have reduced disputes by 90%. Customers can track orders live.",
    author: "Farai Ncube",
    role: "Fleet Manager",
    company: "Swift Logistics",
    industry: "Transport",
    stats: "90% fewer delivery disputes",
  },
  {
    quote: "The workflow automation handles our purchase approvals, invoice generation, and payment reminders. What used to take my team hours now happens automatically. Brilliant.",
    author: "Rudo Makoni",
    role: "Finance Director",
    company: "BuildRight Construction",
    industry: "Construction",
    stats: "15 hours saved per week",
  },
  {
    quote: "Parents love the school portal. They can check their children's grades, pay fees online, and receive updates instantly. Fee collection improved by 40% in the first term.",
    author: "Tatenda Gumbo",
    role: "Principal",
    company: "Sunrise Academy",
    industry: "Education",
    stats: "+40% on-time fee payments",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  React.useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Trusted by Leading Zimbabwean Companies
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl border p-8 md:p-12"
            >
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonials[current].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonials[current].author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-muted text-sm">
                    {testimonials[current].industry}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {testimonials[current].stats}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
