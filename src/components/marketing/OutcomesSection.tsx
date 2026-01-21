"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Workflow, Sparkles, ArrowUpRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Globe,
    title: "Website Upgrades",
    description: "Fast, secure, mobile-friendly websites that convert visitors into customers. SSL, SEO, and analytics included.",
    href: "/solutions/website-upgrades",
    stats: "3x faster load times",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    description: "Custom dashboards, customer portals, inventory systems, and CRM solutions tailored to your operations.",
    href: "/solutions/web-apps",
    stats: "50% less admin time",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps with offline mode, push notifications, and GPS tracking for field teams.",
    href: "/solutions/mobile-apps",
    stats: "Works offline",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate approvals, invoicing, payment reminders, stock alerts, and staff task tracking.",
    href: "/solutions/workflow-automation",
    stats: "10+ hours saved weekly",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description: "Chatbots, document automation, knowledge base Q&A, and intelligent analytics for smarter decisions.",
    href: "/solutions/ai-solutions",
    stats: "24/7 customer support",
    color: "bg-pink-500/10 text-pink-600",
  },
];

export function OutcomesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Modern Solutions for Traditional Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            From mining operations to retail chains, we help Zimbabwean companies 
            digitize their operations and compete in the modern economy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={solution.href}
                className="group block h-full p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl ${solution.color} mb-4`}>
                  <solution.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {solution.stats}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
