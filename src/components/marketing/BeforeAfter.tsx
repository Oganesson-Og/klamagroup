"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const comparisons = [
  {
    category: "Website",
    before: [
      "Slow loading (10+ seconds)",
      "Not mobile-friendly",
      "No SSL security",
      "No lead capture forms",
      "Outdated design",
    ],
    after: [
      "Lightning fast (< 2 seconds)",
      "Responsive on all devices",
      "Full SSL encryption",
      "Smart contact forms with WhatsApp",
      "Modern, professional look",
    ],
  },
  {
    category: "Operations",
    before: [
      "Paper-based approvals",
      "Excel spreadsheets everywhere",
      "WhatsApp chaos for tasks",
      "Manual invoice creation",
      "No real-time visibility",
    ],
    after: [
      "Digital approval workflows",
      "Centralized dashboard",
      "Organized task management",
      "Automated invoicing",
      "Live business metrics",
    ],
  },
  {
    category: "Customer Experience",
    before: [
      "No online presence",
      "Slow response times",
      "Manual order tracking",
      "Limited payment options",
      "Poor communication",
    ],
    after: [
      "Professional web presence",
      "Instant notifications",
      "Real-time order status",
      "Multiple payment methods",
      "Automated updates",
    ],
  },
];

export function BeforeAfter() {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            The Transformation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            From Outdated to Outstanding
          </h2>
          <p className="text-lg text-slate-300">
            See the real difference our solutions make for Zimbabwean businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {comparisons.map((comparison, i) => (
            <motion.div
              key={comparison.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-center text-primary">
                {comparison.category}
              </h3>

              {/* Before */}
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1 rounded-full bg-red-500/20">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                  <span className="font-medium text-red-400">Before</span>
                </div>
                <ul className="space-y-2">
                  {comparison.before.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="h-6 w-6 text-primary rotate-90 md:rotate-0" />
              </div>

              {/* After */}
              <div className="p-5 rounded-xl bg-primary/10 border border-primary/30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1 rounded-full bg-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-primary">After Klama</span>
                </div>
                <ul className="space-y-2">
                  {comparison.after.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-200"
                    >
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
