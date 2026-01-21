"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  variant?: "default" | "dark" | "gradient";
  title?: string;
  description?: string;
}

export function CTASection({
  variant = "default",
  title = "Ready to Transform Your Business?",
  description = "Get a free consultation and website audit. Let's discuss how modern software can solve your challenges.",
}: CTASectionProps) {
  const whatsappLink = "https://wa.me/263774569384?text=Hi%20Klama!%20I'm%20interested%20in%20learning%20more%20about%20your%20services.";

  const bgClasses = {
    default: "bg-ink-900",
    dark: "bg-ink-900 border-t border-white/5",
    gradient: "bg-gradient-to-r from-brand-600 to-brand-500",
  };

  return (
    <section className={`section-padding ${bgClasses[variant]}`}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            variant === "gradient" ? "text-ink-900" : "text-slateCool-100"
          }`}>
            {title}
          </h2>
          <p
            className={`text-lg mb-10 ${
              variant === "gradient" ? "text-ink-800/80" : "text-slateCool-400"
            }`}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="xl"
                variant={variant === "gradient" ? "secondary" : "default"}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="xl"
                variant={variant === "gradient" ? "secondary" : "whatsapp"}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </Link>

            <Link href="/free-website-audit">
              <Button
                size="xl"
                variant={variant === "gradient" ? "outline" : "ghost"}
                className={variant === "gradient" ? "border-ink-800/30 text-ink-900 hover:bg-ink-900/10" : ""}
              >
                <FileSearch className="mr-2 h-5 w-5" />
                Free Audit
              </Button>
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`mt-8 text-sm ${
              variant === "gradient" ? "text-ink-800/60" : "text-slateCool-500"
            }`}
          >
            No commitment required. We respond within 2 hours during business hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
