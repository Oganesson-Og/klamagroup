"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, LayoutDashboard, Smartphone, Workflow, Sparkles, Check, BarChart3, Users, Shield, Zap, Bell, MapPin, Camera, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { CTASection } from "@/components/marketing/CTASection";

const solutions = [
  {
    icon: Globe,
    title: "Website Upgrades",
    description: "Transform your outdated website into a fast, secure, mobile-friendly lead generation machine.",
    features: ["SSL encryption", "Mobile responsive", "SEO optimization", "WhatsApp integration", "Lead capture forms", "Analytics dashboard"],
    href: "/solutions/website-upgrades",
    gradient: "from-brand-600 to-brand-500",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    description: "Custom dashboards, customer portals, inventory systems, and business management tools.",
    features: ["Custom dashboards", "Client portals", "Inventory management", "CRM systems", "Approval workflows", "Real-time analytics"],
    href: "/solutions/web-apps",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile apps with offline support for your field teams.",
    features: ["iOS & Android", "Offline mode", "Push notifications", "GPS tracking", "Photo capture", "Barcode scanning"],
    href: "/solutions/mobile-apps",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate manual processes with automated approvals, invoicing, and notifications.",
    features: ["Approval chains", "Auto-invoicing", "Payment reminders", "Stock alerts", "Task assignment", "Report generation"],
    href: "/solutions/workflow-automation",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description: "Intelligent chatbots, document automation, and data-driven insights for smarter decisions.",
    features: ["Customer chatbots", "Document Q&A", "Invoice extraction", "Anomaly detection", "Lead qualification", "Report summarization"],
    href: "/solutions/ai-solutions",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="bg-hero min-h-screen relative">
          <div className="absolute inset-0 vignette pointer-events-none" />
          <div className="absolute inset-0 pattern-diagonal opacity-40 pointer-events-none" />
          
          <div className="section-padding relative">
            <div className="container-wide">
              {/* Header */}
              <motion.div 
                className="text-center max-w-3xl mx-auto mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slateCool-100">
                  Modern Solutions for{" "}
                  <span className="text-hero-gradient">Traditional Businesses</span>
                </h1>
                <p className="text-lg text-slateCool-400">
                  From website upgrades to AI-powered automation, we provide end-to-end
                  software solutions tailored for Zimbabwean enterprises.
                </p>
              </motion.div>

              {/* Solutions Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link href={solution.href}>
                      <div className="group h-full p-6 rounded-2xl border border-white/10 bg-ink-800/50 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-6`}>
                          <solution.icon className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-slateCool-100 group-hover:text-brand-500 transition-colors">
                          {solution.title}
                        </h2>
                        <p className="text-slateCool-400 mb-4">
                          {solution.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {solution.features.slice(0, 4).map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-slateCool-300">
                              <div className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <span className="inline-flex items-center gap-2 text-brand-500 font-medium group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <CTASection variant="dark" />
      </main>
      <Footer />
    </div>
  );
}
