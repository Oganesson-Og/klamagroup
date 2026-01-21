import { StickyNav } from "@/components/marketing/StickyNav";
import { Hero } from "@/components/marketing/Hero";
import { OutcomesSection } from "@/components/marketing/OutcomesSection";
import { IndustryCards } from "@/components/marketing/IndustryCards";
import { BeforeAfter } from "@/components/marketing/BeforeAfter";
import { TestimonialsCarousel } from "@/components/marketing/TestimonialsCarousel";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { CTASection } from "@/components/marketing/CTASection";
import { TrustSection } from "@/components/marketing/TrustSection";
import { Footer } from "@/components/marketing/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <Hero />
        <OutcomesSection />
        <IndustryCards />
        <BeforeAfter />
        <TestimonialsCarousel />
        <ProcessTimeline />
        <TrustSection />
        <FAQAccordion />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
