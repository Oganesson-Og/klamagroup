import { Metadata } from "next";
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
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { Footer } from "@/components/marketing/Footer";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Industries",
  description: "Software solutions tailored for Zimbabwean industries: mining, retail, transport, manufacturing, agriculture, healthcare, education, and more.",
};

const industries = [
  {
    id: "mining",
    icon: Mountain,
    name: "Mining & Quarrying",
    description: "Digital solutions for mining operations: fleet tracking, safety compliance, production dashboards, and equipment maintenance.",
    challenges: [
      "Paper-based safety logs and compliance records",
      "No real-time visibility into equipment status",
      "Difficult communication with remote sites",
      "Manual production reporting",
    ],
    solutions: [
      "Digital safety and compliance system",
      "Equipment maintenance tracking",
      "Real-time production dashboards",
      "Mobile apps for field supervisors",
    ],
    clients: ["Green Valley Mining", "Masasa Quarries"],
  },
  {
    id: "retail",
    icon: ShoppingCart,
    name: "Retail & Trade",
    description: "Inventory management, POS integration, and multi-branch operations for retail businesses.",
    challenges: [
      "Stock-outs and over-ordering",
      "No visibility across branches",
      "Manual stock counts and spreadsheets",
      "Disconnected POS systems",
    ],
    solutions: [
      "Real-time inventory management",
      "Multi-branch synchronization",
      "Automated reorder alerts",
      "Customer loyalty programs",
    ],
    clients: ["Sunrise Supermarkets", "Metro Fashions"],
  },
  {
    id: "logistics",
    icon: Truck,
    name: "Transport & Logistics",
    description: "Fleet management, delivery tracking, and route optimization for transport companies.",
    challenges: [
      "No real-time delivery tracking",
      "Paper-based proof of delivery",
      "Customer complaints about visibility",
      "Fuel and route inefficiencies",
    ],
    solutions: [
      "GPS fleet tracking",
      "Driver mobile app with offline mode",
      "Customer delivery tracking portal",
      "Route optimization",
    ],
    clients: ["Swift Logistics", "Transfast Haulage"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description: "Production planning, quality control, and job card management for manufacturers.",
    challenges: [
      "Manual production scheduling",
      "Paper job cards and work orders",
      "Quality tracking in spreadsheets",
      "No real-time production visibility",
    ],
    solutions: [
      "Digital work orders and job cards",
      "Production scheduling system",
      "Quality control tracking",
      "Machine utilization dashboards",
    ],
    clients: ["ZimSteel Industries", "Proplastics"],
  },
  {
    id: "agriculture",
    icon: Wheat,
    name: "Agriculture & Agro",
    description: "Farm management, input tracking, and supply chain solutions for agribusinesses.",
    challenges: [
      "No traceability from farm to market",
      "Manual input and yield tracking",
      "Scattered farmer data",
      "Paper-based purchasing",
    ],
    solutions: [
      "Farm-to-market traceability",
      "Input management system",
      "Farmer mobile app",
      "Automated purchasing workflows",
    ],
    clients: ["AgriFresh Farms", "Valley Seeds"],
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    name: "Healthcare & Clinics",
    description: "Patient management, appointments, and electronic health records for healthcare providers.",
    challenges: [
      "Paper patient records",
      "Phone-based appointment booking",
      "Manual billing processes",
      "No patient communication system",
    ],
    solutions: [
      "Electronic health records",
      "Online appointment booking",
      "Automated billing and receipts",
      "Patient SMS/WhatsApp notifications",
    ],
    clients: ["Azure Medical Clinic", "HealthFirst Pharmacy"],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Private Schools",
    description: "School management portals for fees, grades, attendance, and parent communication.",
    challenges: [
      "Manual fee tracking and collection",
      "Paper report cards",
      "No parent communication platform",
      "Attendance in registers",
    ],
    solutions: [
      "Online fee payment and tracking",
      "Digital report cards and grades",
      "Parent communication portal",
      "Attendance management system",
    ],
    clients: ["Star Academy", "Sunrise Private School"],
  },
  {
    id: "construction",
    icon: HardHat,
    name: "Construction",
    description: "Project tracking, material management, and contractor coordination for construction firms.",
    challenges: [
      "No visibility into project progress",
      "Paper-based site diaries",
      "Manual quotation processes",
      "Contractor payment tracking",
    ],
    solutions: [
      "Project progress dashboards",
      "Digital site diary app",
      "Automated quotation system",
      "Contractor and payment management",
    ],
    clients: ["BuildRight Construction", "Mega Contractors"],
  },
  {
    id: "hospitality",
    icon: Hotel,
    name: "Hospitality",
    description: "Online booking, guest management, and operations for hotels and lodges.",
    challenges: [
      "Phone/email only bookings",
      "No real-time availability",
      "Manual guest records",
      "Disconnected POS and property system",
    ],
    solutions: [
      "Online booking engine",
      "Channel manager integration",
      "Guest management system",
      "Integrated POS and billing",
    ],
    clients: ["Victoria Falls Lodge", "Safari Plains Hotel"],
  },
  {
    id: "services",
    icon: Briefcase,
    name: "Professional Services",
    description: "Client portals, time tracking, and billing automation for service businesses.",
    challenges: [
      "Manual time tracking",
      "Excel-based invoicing",
      "No client portal",
      "Document sharing via email",
    ],
    solutions: [
      "Automated time tracking",
      "Invoice automation",
      "Client portal with project updates",
      "Secure document sharing",
    ],
    clients: ["Apex Legal", "Vista Consulting"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Solutions for Every Industry
              </h1>
              <p className="text-lg text-muted-foreground">
                We understand the unique challenges of Zimbabwean businesses.
                Our solutions are tailored to your industry&apos;s specific needs.
              </p>
            </div>

            {/* Industries Grid */}
            <div className="space-y-12">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="p-8 rounded-2xl border bg-card scroll-mt-20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{industry.name}</h2>
                  </div>
                  <p className="text-muted-foreground mb-8 max-w-3xl">
                    {industry.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-destructive mb-4">Common Challenges</h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-destructive">×</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-4">Our Solutions</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution) => (
                          <li key={solution} className="flex items-start gap-2 text-sm">
                            <span className="text-primary">✓</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Clients: {industry.clients.join(", ")}
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm">
                        Discuss Your Needs
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
