import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  solutions: [
    { name: "Website Upgrades", href: "/solutions/website-upgrades" },
    { name: "Web Applications", href: "/solutions/web-apps" },
    { name: "Mobile Apps", href: "/solutions/mobile-apps" },
    { name: "Workflow Automation", href: "/solutions/workflow-automation" },
    { name: "AI Solutions", href: "/solutions/ai-solutions" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  industries: [
    { name: "Mining & Quarrying", href: "/industries#mining" },
    { name: "Retail & Trade", href: "/industries#retail" },
    { name: "Transport & Logistics", href: "/industries#logistics" },
    { name: "Manufacturing", href: "/industries#manufacturing" },
    { name: "Healthcare", href: "/industries#healthcare" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
  ],
};

const whatsappNumber = "+263774569384";

export function Footer() {
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  return (
    <footer className="bg-ink-900 text-slateCool-200 border-t border-white/5">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-slateCool-100 mb-2">
                Ready to <span className="text-hero-gradient">modernize</span> your business?
              </h2>
              <p className="text-slateCool-400 max-w-lg">
                Get a free website audit or book a consultation to discuss your project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-website-audit">
                <Button size="lg" variant="outline">
                  Free Website Audit
                </Button>
              </Link>
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="whatsapp">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/brand/klama logo.png" alt="Klama" className="h-10 w-auto" />
              <span className="font-bold text-2xl text-slateCool-100">Klama</span>
            </Link>
            <p className="text-slateCool-400 mb-6 max-w-xs">
              Modern software solutions for Zimbabwean businesses. Websites, apps, automation, and AI.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slateCool-400 hover:text-brand-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                {whatsappNumber}
              </a>
              <a
                href="tel:+263774569384"
                className="flex items-center gap-2 text-slateCool-400 hover:text-brand-500 transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-500" />
                +263 77 456 9384
              </a>
              <a
                href="mailto:hello@klama.co.zw"
                className="flex items-center gap-2 text-slateCool-400 hover:text-brand-500 transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-500" />
                hello@klama.co.zw
              </a>
              <p className="flex items-start gap-2 text-slateCool-400">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-500" />
                Harare, Zimbabwe
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-slateCool-100 mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slateCool-400 hover:text-brand-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-slateCool-100 mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slateCool-400 hover:text-brand-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slateCool-100 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slateCool-400 hover:text-brand-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slateCool-500">
              &copy; {new Date().getFullYear()} Klama Technologies (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slateCool-500 hover:text-brand-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
