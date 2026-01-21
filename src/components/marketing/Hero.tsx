"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play, CheckCircle, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "200+", label: "Businesses Transformed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5x", label: "Average Lead Increase" },
  { value: "24/7", label: "Support Available" },
];

const features = [
  { icon: Zap, text: "Lightning-fast websites" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: TrendingUp, text: "Measurable business growth" },
];

export function Hero() {
  const whatsappLink = "https://wa.me/263774569384?text=Hi%20Klama!%20I'm%20interested%20in%20upgrading%20my%20business%20with%20modern%20software.";

  return (
    <section className="relative overflow-hidden bg-hero min-h-screen">
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette pointer-events-none" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 pattern-diagonal opacity-60 pointer-events-none" />

      <div className="container-wide relative">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-sm font-medium text-brand-500"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
                </span>
                Trusted by 200+ Zimbabwean businesses
              </motion.div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
                <span className="text-slateCool-200">Upgrade Your Business with</span>{" "}
                <span className="text-hero-gradient">Modern Software</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-slateCool-400 max-w-lg leading-relaxed">
                From outdated websites to powerful web apps, mobile solutions, workflow 
                automation, and AI-powered tools. We help Zimbabwean companies compete 
                in the digital age.
              </p>

              {/* Feature list */}
              <div className="flex flex-wrap gap-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-slateCool-300"
                  >
                    <feature.icon className="h-5 w-5 text-brand-500" />
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <Button size="xl" className="w-full sm:w-auto">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="xl" variant="secondary" className="w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  href="/free-website-audit"
                  className="inline-flex items-center gap-2 text-sm text-slateCool-400 hover:text-brand-500 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Get a free website audit →
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main visual card */}
              <div className="relative rounded-2xl bg-ink-800/80 border border-white/10 shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-sm">
                <div className="p-6 md:p-8">
                  {/* Mock dashboard preview */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src="/brand/klama logo.png" alt="Klama" className="h-10 w-auto" />
                        <div>
                          <p className="font-semibold text-slateCool-200">Klama Dashboard</p>
                          <p className="text-sm text-slateCool-400">Real-time insights</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                        Live
                      </span>
                    </div>
                    
                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-brand-500">+147%</p>
                        <p className="text-sm text-slateCool-400">Website Traffic</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-brand-400">89</p>
                        <p className="text-sm text-slateCool-400">New Leads</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-slateCool-200">$24.5k</p>
                        <p className="text-sm text-slateCool-400">Revenue</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold text-emerald-400">1.2s</p>
                        <p className="text-sm text-slateCool-400">Load Time</p>
                      </div>
                    </div>

                    {/* Task list preview */}
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      <p className="text-sm font-medium text-slateCool-200">Active Projects</p>
                      {["Website Redesign", "Mobile App", "Automation Setup"].map((task, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-brand-500" />
                          <span className="text-slateCool-400">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-medium shadow-lg shadow-emerald-500/30"
              >
                +32% conversions
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 text-ink-900 text-sm font-medium shadow-lg shadow-brand-500/30"
              >
                SSL Secured ✓
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 lg:mt-24 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-hero-gradient inline-block">{stat.value}</p>
                  <p className="text-sm text-slateCool-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
