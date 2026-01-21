"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mountain, Coffee, Truck, TrendingUp, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { CTASection } from "@/components/marketing/CTASection";

// Website showcase templates
const showcaseTemplates = [
  {
    title: "Mining & Export",
    company: "ZimbabweStone",
    href: "/showcase/granite-mining",
    description: "Professional granite exporter website with premium dark aesthetic",
    industry: "Mining",
    gradient: "from-emerald-600 to-emerald-800",
    accentColor: "emerald",
    icon: Mountain,
    image: "/marketing/case-studies/case-study-mining.png",
    features: ["Product Catalog", "Quote Request", "Global Shipping"],
    mockElements: {
      primary: "bg-emerald-500",
      secondary: "bg-emerald-900",
      accent: "text-emerald-400",
    },
  },
  {
    title: "Restaurant & Café",
    company: "Savanna Café",
    href: "/showcase/savanna-cafe",
    description: "Warm African hospitality café with online reservations",
    industry: "Hospitality",
    gradient: "from-amber-600 to-orange-700",
    accentColor: "amber",
    icon: Coffee,
    image: "/marketing/case-studies/case-study-cafe.png",
    features: ["Menu Display", "Table Booking", "Gallery"],
    mockElements: {
      primary: "bg-amber-500",
      secondary: "bg-amber-900",
      accent: "text-amber-400",
    },
  },
  {
    title: "Logistics & Delivery",
    company: "Swift Logistics",
    href: "/showcase/swift-logistics",
    description: "Modern logistics company with real-time shipment tracking",
    industry: "Transport",
    gradient: "from-sky-500 to-blue-600",
    accentColor: "sky",
    icon: Truck,
    image: "/marketing/case-studies/case-study-logistics.png",
    features: ["Live Tracking", "Quote Calculator", "Client Portal"],
    mockElements: {
      primary: "bg-sky-500",
      secondary: "bg-sky-900",
      accent: "text-sky-400",
    },
  },
];

// Results data
const caseResults = [
  {
    template: "granite-mining",
    results: [
      { metric: "+320%", label: "Website Traffic" },
      { metric: "1.8s", label: "Load Time" },
      { metric: "47", label: "Leads/Month" },
    ],
  },
  {
    template: "savanna-cafe",
    results: [
      { metric: "+85%", label: "Online Orders" },
      { metric: "4.9★", label: "Google Rating" },
      { metric: "200+", label: "Monthly Bookings" },
    ],
  },
  {
    template: "swift-logistics",
    results: [
      { metric: "-90%", label: "Delivery Disputes" },
      { metric: "99.2%", label: "On-Time Rate" },
      { metric: "50+", label: "Drivers on App" },
    ],
  },
];

function WebsitePreviewCard({ template, index }: { template: typeof showcaseTemplates[0]; index: number }) {
  const results = caseResults[index]?.results || [];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={template.href}>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-ink-800/50 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50">
          {/* Browser Preview */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {/* Browser chrome */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-3 bg-ink-900/90 backdrop-blur border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-ink-700 rounded-md px-3 py-1 text-xs text-slateCool-400 max-w-xs">
                  {template.company.toLowerCase().replace(/\s/g, '')}.co.zw
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-brand-500 font-medium">View Live Demo</span>
                <ExternalLink className="w-3 h-3 text-brand-500" />
              </div>
            </div>
            
            {/* Website content preview */}
            <div className="absolute inset-0">
              <img
                src={template.image}
                alt={`${template.company} case study preview`}
                className="object-cover w-full h-full"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-35`} />
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-ink-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-ink-900 font-semibold"
              >
                <Eye className="w-5 h-5" />
                View Demo Site
              </motion.div>
            </div>
          </div>
          
          {/* Card content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <template.icon className={`w-4 h-4 ${template.mockElements.accent}`} />
                  <span className={`text-xs font-medium ${template.mockElements.accent}`}>{template.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-slateCool-100 group-hover:text-brand-500 transition-colors">
                  {template.company}
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slateCool-400 group-hover:text-brand-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            
            <p className="text-sm text-slateCool-400 mb-4">{template.description}</p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {template.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2 py-1 text-xs bg-white/5 text-slateCool-300 rounded border border-white/5"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            {/* Results */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center gap-1 mb-2">
                <TrendingUp className="w-3 h-3 text-emerald-500" />
                <span className="text-xs text-slateCool-400">Results achieved</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {results.map((result) => (
                  <div key={result.label}>
                    <p className="text-lg font-bold text-brand-500">{result.metric}</p>
                    <p className="text-xs text-slateCool-500">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
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
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-500 text-sm mb-6"
                >
                  <Eye className="w-4 h-4" />
                  Live Demo Websites
                </motion.span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slateCool-100">
                  See Our Work{" "}
                  <span className="text-hero-gradient">In Action</span>
                </h1>
                <p className="text-lg text-slateCool-400">
                  Explore real website templates we&apos;ve built for different industries.
                  Click any preview to experience the full interactive demo.
                </p>
              </motion.div>

              {/* Website Showcase Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {showcaseTemplates.map((template, i) => (
                  <WebsitePreviewCard key={template.title} template={template} index={i} />
                ))}
              </div>

              {/* Additional info section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-ink-800/50 rounded-2xl border border-white/10 p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slateCool-100 mb-4">
                      Want Something Similar?
                    </h2>
                    <p className="text-slateCool-400 mb-6">
                      These templates showcase what&apos;s possible. Your website will be custom-designed 
                      to match your brand, industry, and specific business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact">
                        <Button size="lg">
                          Start Your Project
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/free-website-audit">
                        <Button size="lg" variant="secondary">
                          Free Website Audit
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-ink-900/50 rounded-xl p-4 border border-white/5">
                      <p className="text-3xl font-bold text-brand-500">200+</p>
                      <p className="text-sm text-slateCool-400">Websites Delivered</p>
                    </div>
                    <div className="bg-ink-900/50 rounded-xl p-4 border border-white/5">
                      <p className="text-3xl font-bold text-brand-500">15+</p>
                      <p className="text-sm text-slateCool-400">Industries Served</p>
                    </div>
                    <div className="bg-ink-900/50 rounded-xl p-4 border border-white/5">
                      <p className="text-3xl font-bold text-brand-500">98%</p>
                      <p className="text-sm text-slateCool-400">Client Satisfaction</p>
                    </div>
                    <div className="bg-ink-900/50 rounded-xl p-4 border border-white/5">
                      <p className="text-3xl font-bold text-brand-500">2-4</p>
                      <p className="text-sm text-slateCool-400">Week Delivery</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <CTASection variant="dark" />
      </main>
      <Footer />
    </div>
  );
}
