import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { PricingCard } from "@/components/marketing/PricingCard";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for website upgrades, web applications, mobile apps, and automation. Fixed-price projects with clear deliverables.",
};

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    period: "one-time",
    description: "Perfect for small businesses needing a professional online presence.",
    features: [
      "Modern responsive website",
      "Up to 5 pages",
      "SSL certificate",
      "Contact form with email",
      "WhatsApp integration",
      "Basic SEO setup",
      "Google Analytics",
      "1 month support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$3,500",
    period: "one-time",
    description: "For growing businesses that need more functionality and customization.",
    features: [
      "Everything in Starter",
      "Up to 15 pages",
      "Blog/News section",
      "Product/Service catalog",
      "Lead capture with CRM",
      "Advanced SEO",
      "Speed optimization",
      "3 months support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$8,000+",
    period: "starting from",
    description: "Custom web applications, dashboards, and complex integrations.",
    features: [
      "Custom web application",
      "User authentication",
      "Admin dashboard",
      "Database integration",
      "API connections",
      "Workflow automation",
      "Role-based access",
      "6 months support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const addOns = [
  { name: "Mobile App", price: "From $5,000", description: "iOS and Android apps with offline support" },
  { name: "E-commerce", price: "From $2,000", description: "Online store with payment integration" },
  { name: "Workflow Automation", price: "From $1,500", description: "Automated approvals and notifications" },
  { name: "AI Chatbot", price: "From $1,000", description: "24/7 customer support automation" },
  { name: "Monthly Maintenance", price: "$150/month", description: "Updates, backups, and priority support" },
  { name: "Content Updates", price: "$50/update", description: "Quick content changes as needed" },
];

export default function PricingPage() {
  const whatsappLink = "https://wa.me/263774569384?text=Hi%20Klama!%20I'd%20like%20to%20discuss%20pricing%20for%20my%20project.";

  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                Fixed-price projects with clear deliverables. No hidden fees, no surprises.
                All prices in USD.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {plans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>

            {/* Add-ons */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Add-Ons & Extras</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {addOns.map((addon) => (
                  <div key={addon.name} className="p-4 rounded-xl border bg-card">
                    <h3 className="font-semibold">{addon.name}</h3>
                    <p className="text-primary font-medium">{addon.price}</p>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Quote CTA */}
            <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Quote?</h2>
              <p className="text-muted-foreground mb-6">
                Every business is unique. Let&apos;s discuss your specific requirements
                and create a tailored proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="whatsapp">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
}
