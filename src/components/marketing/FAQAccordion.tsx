"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a website redesign cost?",
    answer: "Website redesigns typically range from $1,500 to $5,000 depending on complexity. This includes modern design, mobile responsiveness, SSL, SEO optimization, and content management. We provide detailed quotes after understanding your specific needs in a free consultation.",
  },
  {
    question: "How long does it take to build a custom web application?",
    answer: "Most web applications take 6-12 weeks from kickoff to launch. Simple dashboards can be ready in 4-6 weeks, while complex systems with multiple integrations may take 3-4 months. We break projects into phases so you see progress throughout.",
  },
  {
    question: "Do you work with companies outside Harare?",
    answer: "Absolutely! We work with businesses across Zimbabwe and even regionally. We use video calls, screen sharing, and our project portal to collaborate effectively. Many of our clients are in Bulawayo, Mutare, Victoria Falls, and mining areas.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies: Next.js and React for web apps, React Native for mobile, PostgreSQL databases, and cloud hosting on AWS or Azure. This stack ensures fast performance, security, and easy maintenance.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes, integration is one of our specialties. We regularly connect with accounting software like Pastel and QuickBooks, ERP systems, mobile money platforms like EcoCash, and custom databases. We'll assess your current setup during discovery.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we offer flexible support packages. This includes security updates, bug fixes, minor enhancements, and 24/7 emergency support. Most clients choose monthly retainers for peace of mind.",
  },
  {
    question: "What if I'm not happy with the design?",
    answer: "We include revision rounds in every project. You'll review and approve designs before any coding begins. If something isn't right, we iterate until you're satisfied. Your feedback shapes the final product.",
  },
  {
    question: "How do you handle payments?",
    answer: "We accept bank transfers (USD or ZWL), EcoCash, and international wire transfers. Projects typically require 50% upfront and 50% on delivery. For larger projects, we can arrange milestone-based payments.",
  },
];

export function FAQAccordion() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about working with Klama.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
