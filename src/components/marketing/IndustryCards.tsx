"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mountain,
  ShoppingCart,
  Truck,
  Factory,
  Wheat,
  Stethoscope,
  GraduationCap,
  HardHat,
  Hotel,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: Mountain,
    name: "Mining & Quarrying",
    description: "Fleet tracking, safety compliance, production dashboards",
    examples: ["Equipment maintenance logs", "Shift management", "Ore tracking"],
  },
  {
    icon: ShoppingCart,
    name: "Retail & Trade",
    description: "POS integration, inventory, multi-branch sync",
    examples: ["Stock alerts", "Supplier portals", "Sales analytics"],
  },
  {
    icon: Truck,
    name: "Transport & Logistics",
    description: "GPS tracking, delivery confirmations, route optimization",
    examples: ["Driver apps", "Customer tracking", "Fuel management"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Production planning, quality control, job cards",
    examples: ["Work orders", "Machine scheduling", "Inventory"],
  },
  {
    icon: Wheat,
    name: "Agriculture & Agro",
    description: "Farm-to-market tracking, input management, weather data",
    examples: ["Harvest records", "Supplier payments", "Yield analytics"],
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Clinics",
    description: "Patient management, appointments, electronic records",
    examples: ["Online booking", "Lab results", "Billing"],
  },
  {
    icon: GraduationCap,
    name: "Private Schools",
    description: "Fee management, grades, parent communication",
    examples: ["Report cards", "Timetables", "Fee tracking"],
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Project tracking, material orders, contractor management",
    examples: ["Site diaries", "Quotations", "Safety logs"],
  },
  {
    icon: Hotel,
    name: "Hospitality",
    description: "Online booking, guest management, POS integration",
    examples: ["Room availability", "Reviews", "Staff scheduling"],
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Client portals, time tracking, invoice automation",
    examples: ["Document sharing", "Project tracking", "Billing"],
  },
];

export function IndustryCards() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Solutions for Every Sector
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the unique challenges of Zimbabwean businesses. 
            Our solutions are tailored to your industry&apos;s specific needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-5 rounded-xl border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <industry.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm">{industry.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {industry.examples.slice(0, 2).map((example) => (
                  <span
                    key={example}
                    className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            See all industries and case studies →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
