import { Metadata } from "next";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Klama's terms of service outlining the conditions for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>
            
            <div className="prose prose-invert max-w-none">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using Klama&apos;s website and services, you agree to be bound by these 
                Terms of Service. If you disagree with any part of these terms, you may not access 
                our services.
              </p>

              <h2>2. Services</h2>
              <p>
                Klama provides software development services including:
              </p>
              <ul>
                <li>Website design and development</li>
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>Workflow automation</li>
                <li>AI and machine learning solutions</li>
                <li>Consulting and support services</li>
              </ul>

              <h2>3. Project Engagement</h2>
              <p>
                All projects are governed by individual project agreements that specify:
              </p>
              <ul>
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Pricing and payment terms</li>
                <li>Intellectual property rights</li>
                <li>Confidentiality provisions</li>
              </ul>

              <h2>4. Payment Terms</h2>
              <ul>
                <li>Deposits are typically 50% upfront</li>
                <li>Final payment is due upon project completion</li>
                <li>We accept bank transfers (USD/ZWL), EcoCash, and international transfers</li>
                <li>Late payments may incur interest charges</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                Upon full payment, clients receive ownership of custom code developed specifically 
                for their project. We retain rights to reuse general-purpose components, frameworks, 
                and methodologies.
              </p>

              <h2>6. Warranties and Limitations</h2>
              <p>
                We warrant that our services will be performed professionally and to industry 
                standards. However, we do not guarantee specific business results from using 
                our solutions.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                Klama&apos;s liability is limited to the amount paid for services. We are not liable 
                for indirect, incidental, or consequential damages.
              </p>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate services with written notice. Upon termination, the 
                client pays for work completed to date.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These terms are governed by the laws of Zimbabwe. Any disputes shall be resolved 
                in the courts of Zimbabwe.
              </p>

              <h2>10. Contact</h2>
              <p>
                For questions about these terms, contact us at:
              </p>
              <ul>
                <li>Email: legal@klama.co.zw</li>
                <li>Phone: +263 77 456 9384</li>
                <li>Address: Harare, Zimbabwe</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
