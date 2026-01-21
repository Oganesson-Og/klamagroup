import { Metadata } from "next";
import { CheckCircle, Zap, Shield, Search, Smartphone, BarChart3 } from "lucide-react";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { AuditRequestForm } from "@/components/forms/AuditRequestForm";
import { AuditPreviewWidget } from "@/components/marketing/AuditPreviewWidget";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description: "Get a comprehensive analysis of your website's performance, security, SEO, and mobile-friendliness. Free audit report delivered within 48 hours.",
};

const auditIncludes = [
  { icon: Zap, title: "Performance Score", description: "Page load speed, Core Web Vitals, optimization opportunities" },
  { icon: Smartphone, title: "Mobile Analysis", description: "Responsiveness, touch targets, mobile usability issues" },
  { icon: Shield, title: "Security Check", description: "SSL certificate, security headers, vulnerability scan" },
  { icon: Search, title: "SEO Review", description: "Meta tags, structured data, indexability, search visibility" },
  { icon: BarChart3, title: "Competitor Comparison", description: "How you stack up against similar businesses" },
  { icon: CheckCircle, title: "Action Plan", description: "Prioritized recommendations with effort estimates" },
];

export default function FreeWebsiteAuditPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                100% Free • No Obligation
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get a Free Website Audit
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover what&apos;s holding your website back. We&apos;ll analyze performance,
                security, SEO, and mobile-friendliness, then provide actionable recommendations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Form */}
              <div className="order-2 lg:order-1">
                <div className="p-8 rounded-2xl border bg-card">
                  <h2 className="text-2xl font-bold mb-2">Request Your Free Audit</h2>
                  <p className="text-muted-foreground mb-6">
                    Enter your details below and we&apos;ll analyze your website within 48 hours.
                  </p>
                  <AuditRequestForm />
                </div>
              </div>

              {/* Right Column - Preview & Benefits */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* Audit Preview Widget */}
                <AuditPreviewWidget />

                {/* What's included */}
                <div className="p-6 rounded-2xl border bg-muted/30">
                  <h3 className="font-semibold mb-4">What&apos;s Included in Your Audit:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {auditIncludes.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <item.icon className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 200+ Zimbabwean businesses
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
                <span>Green Valley Mining</span>
                <span>•</span>
                <span>Sunrise Supermarkets</span>
                <span>•</span>
                <span>Swift Logistics</span>
                <span>•</span>
                <span>BuildRight Construction</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
