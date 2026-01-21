"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We learn about your business, challenges, and goals. Free consultation to understand your needs.",
    duration: "Week 1",
  },
  {
    icon: Palette,
    title: "Design",
    description: "We create mockups and prototypes. You review and approve the look and feel.",
    duration: "Week 2-3",
  },
  {
    icon: Code,
    title: "Build",
    description: "Our engineers develop your solution with modern, scalable technology.",
    duration: "Week 4-8",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy, test thoroughly, and train your team. Go live with confidence.",
    duration: "Week 9-10",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance, updates, and 24/7 support. We're your long-term partner.",
    duration: "Ongoing",
  },
];

export function ProcessTimeline() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            From Idea to Launch in Weeks, Not Months
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven process ensures quality delivery while keeping you informed every step of the way.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-24 md:pl-0`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                    {step.duration}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground max-w-sm inline-block">{step.description}</p>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="h-16 w-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
