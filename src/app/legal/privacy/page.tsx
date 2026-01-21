import { Metadata } from "next";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Klama's privacy policy explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-narrow">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2026</p>
            
            <div className="prose prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Klama Technologies (Pvt) Ltd (&quot;Klama,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is 
                committed to protecting your personal data. This privacy policy explains how we collect, use, 
                and safeguard your information when you visit our website or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>Information you provide:</h3>
              <ul>
                <li>Contact information (name, email, phone number)</li>
                <li>Company information</li>
                <li>Website URL (for audit requests)</li>
                <li>Project requirements and messages</li>
              </ul>

              <h3>Information collected automatically:</h3>
              <ul>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to your inquiries and provide services</li>
                <li>Deliver website audits and consultation services</li>
                <li>Send project updates and important notifications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>7. Contact Us</h2>
              <p>
                For privacy-related questions, please contact us at:
              </p>
              <ul>
                <li>Email: privacy@klama.co.zw</li>
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
