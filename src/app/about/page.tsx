import { Metadata } from "next";
import Link from "next/link";
import { Target, Shield, Lightbulb, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyNav } from "@/components/marketing/StickyNav";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { CTASection } from "@/components/marketing/CTASection";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Klama is a Zimbabwe-based software company building modern websites, applications, and automation tools for local businesses.",
};

const team = [
  {
    name: "Keith Satuku",
    role: "Founder & Full Stack Developer",
    bio: "AI Engineer with 5+ years experience building modern web applications. Worked internationally in Dubai, Johannesburg and Abu Dhabi before focusing on building Zimbabwe's digital future.",
    image: "/marketing/team/keith-satuku.JPG",
  },
  {
    name: "Lyn Satuku",
    role: "Account Executive",
    bio: "Dedicated to understanding client needs and delivering exceptional service. Manages client relationships and ensures every project exceeds expectations.",
    image: "/marketing/team/lyn-satuku.jpeg",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description: "We measure success by your business outcomes, not just deliverables.",
  },
  {
    icon: Shield,
    title: "Security-First",
    description: "Every project includes proper security measures. No shortcuts.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description: "We use modern tech that works in Zimbabwe's context, not just what's trendy.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    description: "We're here for the long haul, not just the initial project.",
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Active Clients" },
  { value: "5+", label: "Years Experience" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <StickyNav />
      <main className="flex-1">
        <div className="section-padding">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building Zimbabwe&apos;s Digital Future
              </h1>
              <p className="text-lg text-muted-foreground">
                We&apos;re a team of Zimbabwean engineers and designers on a mission to help
                local businesses compete with modern software solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mission */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To empower Zimbabwean businesses with modern, reliable, and affordable software
                  solutions that drive real growth. We believe every company, regardless of size,
                  deserves access to world-class technology.
                </p>
              </div>
            </div>

            {/* Workspace */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Our Workspace</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden border bg-card">
                  <img
                    src="/marketing/hero-working.png"
                    alt="Klama team collaborating"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border bg-card">
                  <img
                    src="/marketing/office-harare.png"
                    alt="Klama office in Harare"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value) => (
                  <div key={value.title} className="text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-4">Meet the Team</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A dedicated team combining international experience with local expertise
                to deliver exceptional software solutions.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {team.map((member) => (
                  <div key={member.name} className="p-6 rounded-2xl border bg-card text-center">
                    <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Join us */}
            <div id="careers" className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-6">
                We&apos;re always looking for talented developers, designers, and project managers
                who share our mission. Remote-friendly positions available.
              </p>
              <Link href="/contact">
                <Button>
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <ProcessTimeline />
        <CTASection variant="dark" />
      </main>
      <Footer />
    </div>
  );
}
