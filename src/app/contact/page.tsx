import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Klama. Book a free consultation, request a quote, or ask us anything about our software solutions for Zimbabwean businesses.",
};

export default function ContactPage() {
  const whatsappLink = "https://wa.me/263774569384?text=Hi%20Klama!%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s Build Something Great
              </h1>
              <p className="text-lg text-muted-foreground">
                Whether you need a website upgrade, custom application, or workflow automation,
                we&apos;re here to help. Get in touch and let&apos;s discuss your project.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl border hover:border-primary/50 hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-[#25D366]/10">
                        <MessageCircle className="h-6 w-6 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-muted-foreground">+263 77 456 9384</p>
                        <p className="text-sm text-primary mt-1">Fastest response →</p>
                      </div>
                    </Link>

                    {/* Phone */}
                    <a
                      href="tel:+263774569384"
                      className="flex items-start gap-4 p-4 rounded-xl border hover:border-primary/50 hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground">+263 77 456 9384</p>
                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri 8am-5pm CAT</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:hello@klama.co.zw"
                      className="flex items-start gap-4 p-4 rounded-xl border hover:border-primary/50 hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">hello@klama.co.zw</p>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-start gap-4 p-4 rounded-xl border">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">Harare, Zimbabwe</p>
                        <p className="text-sm text-muted-foreground mt-1">We work with clients across Zimbabwe</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book a Call CTA */}
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">Prefer a Video Call?</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Book a free 30-minute consultation. We&apos;ll discuss your project,
                    answer questions, and provide a preliminary quote.
                  </p>
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full" variant="whatsapp">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Schedule via WhatsApp
                    </Button>
                  </Link>
                </div>

                {/* Response time */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Average response time: 2 hours during business hours</span>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="p-8 rounded-2xl border bg-card">
                  <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we&apos;ll get back to you promptly.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
