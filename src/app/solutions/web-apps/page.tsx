import { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Users, Database, Lock, RefreshCw, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Web Applications",
  description: "Custom web applications, dashboards, customer portals, inventory systems, and CRM solutions tailored to your business operations.",
};

const features = [
  { icon: LayoutDashboard, title: "Custom Dashboards", description: "Real-time business metrics and KPIs at a glance" },
  { icon: Users, title: "Client Portals", description: "Self-service portals for your customers to track orders and invoices" },
  { icon: Database, title: "Inventory Management", description: "Track stock levels, automate reorders, sync across locations" },
  { icon: Lock, title: "Role-Based Access", description: "Control who sees what with granular permissions" },
  { icon: RefreshCw, title: "API Integrations", description: "Connect with your existing systems and third-party services" },
  { icon: BarChart3, title: "Reports & Analytics", description: "Automated reports delivered to your inbox" },
];

const useCases = [
  "Customer Relationship Management (CRM)",
  "Project Management & Task Tracking",
  "Inventory & Warehouse Management",
  "Order Processing & Fulfillment",
  "Staff Scheduling & HR",
  "Document Management",
];

export default function WebAppsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex p-4 rounded-2xl bg-violet-500/10 mb-6">
                <LayoutDashboard className="h-8 w-8 text-violet-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web Applications
              </h1>
              <p className="text-lg text-muted-foreground">
                Custom dashboards, customer portals, inventory systems, and business 
                management tools designed for how you actually work.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl border bg-card">
                  <feature.icon className="h-8 w-8 text-violet-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Common Use Cases</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                    <div className="h-2 w-2 rounded-full bg-violet-500" />
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">Starting from $8,000</h2>
              <p className="text-muted-foreground mb-6">
                Every web application is custom-built to your specifications. 
                Let&apos;s discuss your requirements and provide a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline">
                    View Examples
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
