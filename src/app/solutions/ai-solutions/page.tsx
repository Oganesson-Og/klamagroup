import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, MessageSquare, FileText, Search, TrendingUp, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "AI Solutions",
  description: "Intelligent chatbots, document automation, knowledge base Q&A, and data-driven insights for smarter business decisions.",
};

const features = [
  { icon: MessageSquare, title: "Customer Chatbots", description: "24/7 customer support that never sleeps" },
  { icon: FileText, title: "Document Q&A", description: "Ask questions about your contracts and policies" },
  { icon: Search, title: "Invoice Extraction", description: "Automatically extract data from invoices and receipts" },
  { icon: TrendingUp, title: "Anomaly Detection", description: "Spot unusual patterns in your business data" },
  { icon: Brain, title: "Lead Qualification", description: "Automatically score and prioritize sales leads" },
  { icon: FileText, title: "Report Summarization", description: "Get AI-generated summaries of long documents" },
];

const useCases = [
  "Customer Service Automation",
  "Document Processing",
  "Knowledge Management",
  "Sales Intelligence",
  "Financial Analysis",
  "Content Generation",
];

export default function AISolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex p-4 rounded-2xl bg-pink-500/10 mb-6">
                <Sparkles className="h-8 w-8 text-pink-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Solutions
              </h1>
              <p className="text-lg text-muted-foreground">
                Harness the power of artificial intelligence to automate tasks, 
                extract insights, and make smarter business decisions.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl border bg-card">
                  <feature.icon className="h-8 w-8 text-pink-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                    <div className="h-2 w-2 rounded-full bg-pink-500" />
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">Starting from $1,000</h2>
              <p className="text-muted-foreground mb-6">
                AI solutions range from simple chatbots to complex document processing systems. 
                Let&apos;s discuss which AI tools would benefit your business most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Explore AI Options
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
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
