import { Metadata } from "next";
import Link from "next/link";
import { Smartphone, Wifi, Bell, MapPin, Camera, Barcode, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Mobile Apps",
  description: "Native and cross-platform mobile apps with offline mode, push notifications, GPS tracking, and camera integration for your field teams.",
};

const features = [
  { icon: Smartphone, title: "iOS & Android", description: "Cross-platform apps that work on all devices" },
  { icon: Wifi, title: "Offline Mode", description: "Works without internet, syncs when connected" },
  { icon: Bell, title: "Push Notifications", description: "Real-time alerts and updates to your team" },
  { icon: MapPin, title: "GPS Tracking", description: "Location tracking for deliveries and field staff" },
  { icon: Camera, title: "Photo Capture", description: "Document proof of delivery with timestamped photos" },
  { icon: Barcode, title: "Barcode Scanning", description: "Scan products, equipment, and documents" },
];

const useCases = [
  "Driver & Delivery Apps",
  "Field Service Management",
  "Sales Rep Applications",
  "Inventory Scanners",
  "Time & Attendance",
  "Inspection Checklists",
];

export default function MobileAppsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex p-4 rounded-2xl bg-emerald-500/10 mb-6">
                <Smartphone className="h-8 w-8 text-emerald-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mobile Apps
              </h1>
              <p className="text-lg text-muted-foreground">
                Native and cross-platform mobile apps with offline support, 
                designed for Zimbabwe&apos;s connectivity challenges.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl border bg-card">
                  <feature.icon className="h-8 w-8 text-emerald-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">Starting from $5,000</h2>
              <p className="text-muted-foreground mb-6">
                Mobile apps are built alongside your web dashboard for a complete solution. 
                Get a quote for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Get a Quote
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
