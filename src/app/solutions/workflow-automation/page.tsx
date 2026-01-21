import { Metadata } from "next";
import Link from "next/link";
import { Workflow, FileCheck, Bell, Clock, RefreshCw, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description: "Eliminate manual processes with automated approvals, invoicing, payment reminders, stock alerts, and task management systems.",
};

const features = [
  { icon: FileCheck, title: "Approval Workflows", description: "Multi-step approvals with escalation rules" },
  { icon: Mail, title: "Auto-Invoicing", description: "Generate and send invoices automatically" },
  { icon: Bell, title: "Payment Reminders", description: "Automated follow-ups for overdue invoices" },
  { icon: Clock, title: "Stock Alerts", description: "Get notified when inventory runs low" },
  { icon: RefreshCw, title: "Task Assignment", description: "Automatically route work to the right people" },
  { icon: FileCheck, title: "Report Generation", description: "Scheduled reports delivered to your inbox" },
];

const benefits = [
  { value: "10+", label: "Hours saved weekly" },
  { value: "90%", label: "Fewer manual errors" },
  { value: "50%", label: "Faster approvals" },
  { value: "24/7", label: "Always running" },
];

export default function WorkflowAutomationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex p-4 rounded-2xl bg-orange-500/10 mb-6">
                <Workflow className="h-8 w-8 text-orange-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Workflow Automation
              </h1>
              <p className="text-lg text-muted-foreground">
                Eliminate manual processes and let your systems do the repetitive work 
                while you focus on growing your business.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="text-center p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                  <p className="text-3xl font-bold text-orange-500">{benefit.value}</p>
                  <p className="text-sm text-muted-foreground">{benefit.label}</p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl border bg-card">
                  <feature.icon className="h-8 w-8 text-orange-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">Starting from $1,500</h2>
              <p className="text-muted-foreground mb-6">
                Automation can be added to any existing system or built as part of a new project. 
                Let&apos;s identify the processes that will save you the most time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Discuss Automation
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
