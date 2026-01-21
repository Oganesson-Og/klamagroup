"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Clock, Headphones, FileCheck, Globe } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SSL encryption, secure authentication, and data protection built into every project.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays in your control. We follow international privacy best practices.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Reliable hosting with automatic backups and disaster recovery.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Local team available via phone, WhatsApp, and email whenever you need us.",
  },
  {
    icon: FileCheck,
    title: "Clear Contracts",
    description: "Transparent pricing, detailed proposals, and fixed-price projects.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "We understand Zimbabwean business challenges, infrastructure, and regulations.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Trust Klama
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Security, Support & Peace of Mind
          </h2>
          <p className="text-lg text-muted-foreground">
            We take your business as seriously as you do. Enterprise-grade practices for every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
