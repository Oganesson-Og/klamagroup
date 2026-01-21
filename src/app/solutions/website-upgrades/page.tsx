import { Metadata } from "next";
import Link from "next/link";
import { Check, Globe, Zap, Shield, Search, Smartphone, BarChart3, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Website Upgrades",
  description: "Transform your outdated website into a fast, secure, mobile-friendly lead generation machine. SSL, SEO optimization, and WhatsApp integration included.",
};

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Page loads under 2 seconds with optimized images and code" },
  { icon: Smartphone, title: "Mobile-First Design", description: "Perfect on phones, tablets, and desktops" },
  { icon: Shield, title: "SSL Security", description: "HTTPS encryption protects your visitors and improves SEO" },
  { icon: Search, title: "SEO Optimized", description: "Structured for Google visibility with proper meta tags" },
  { icon: MessageCircle, title: "WhatsApp Integration", description: "Click-to-chat buttons for instant customer contact" },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Track visitors, leads, and conversions" },
];

const process = [
  { step: "1", title: "Discovery", description: "We review your current site and understand your goals" },
  { step: "2", title: "Design", description: "Modern mockups tailored to your brand and industry" },
  { step: "3", title: "Build", description: "Fast, secure development with regular previews" },
  { step: "4", title: "Launch", description: "Go live with training and 24/7 support" },
];

export default function WebsiteUpgradesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex p-4 rounded-2xl bg-brand-500/10 mb-6">
                <Globe className="h-8 w-8 text-brand-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Website Upgrades
              </h1>
              <p className="text-lg text-muted-foreground">
                Transform your outdated website into a fast, secure, mobile-friendly 
                lead generation machine that converts visitors into customers.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl border bg-card">
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">Starting from $1,500</h2>
              <p className="text-muted-foreground mb-6">
                Includes modern design, SSL, SEO setup, WhatsApp integration, 
                and 1 month of support. See our pricing page for full details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <Button size="lg">
                    View Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/free-website-audit">
                  <Button size="lg" variant="outline">
                    Get Free Audit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
