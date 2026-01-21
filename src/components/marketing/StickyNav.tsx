"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Globe,
  Smartphone,
  Workflow,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const solutions = [
  {
    name: "Website Upgrades",
    href: "/solutions/website-upgrades",
    description: "Modernize your web presence with speed, security & SEO",
    icon: Globe,
  },
  {
    name: "Web Applications",
    href: "/solutions/web-apps",
    description: "Custom dashboards, portals & business systems",
    icon: ArrowUpRight,
  },
  {
    name: "Mobile Apps",
    href: "/solutions/mobile-apps",
    description: "Native & cross-platform mobile solutions",
    icon: Smartphone,
  },
  {
    name: "Workflow Automation",
    href: "/solutions/workflow-automation",
    description: "Streamline approvals, invoices & operations",
    icon: Workflow,
  },
  {
    name: "AI Solutions",
    href: "/solutions/ai-solutions",
    description: "Chatbots, document AI & intelligent automation",
    icon: Sparkles,
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function StickyNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-ink-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-wide">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/brand/klama logo.png" alt="Klama" className="h-8 w-auto" />
              <span className="font-bold text-xl text-slateCool-100">Klama</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname.startsWith("/solutions")
                          ? "text-brand-500"
                          : "text-slateCool-400 hover:text-slateCool-100 hover:bg-white/5"
                      )}
                      onMouseEnter={() => setSolutionsOpen(true)}
                      onMouseLeave={() => setSolutionsOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === item.href
                          ? "text-brand-500"
                          : "text-slateCool-400 hover:text-slateCool-100 hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Solutions Dropdown */}
                  {item.hasDropdown && solutionsOpen && (
                    <motion.div
                      className="absolute top-full left-0 pt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onMouseEnter={() => setSolutionsOpen(true)}
                      onMouseLeave={() => setSolutionsOpen(false)}
                    >
                      <div className="w-80 rounded-xl border border-white/10 bg-ink-800/95 backdrop-blur-xl p-2 shadow-xl shadow-black/30">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <div className="mt-0.5 p-2 rounded-md bg-brand-500/10">
                              <solution.icon className="h-4 w-4 text-brand-500" />
                            </div>
                            <div>
                              <div className="font-medium text-sm text-slateCool-200">{solution.name}</div>
                              <div className="text-xs text-slateCool-400">
                                {solution.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-white/10 mt-2 pt-2">
                          <Link
                            href="/solutions"
                            className="flex items-center justify-center gap-2 p-3 text-sm text-brand-500 font-medium hover:bg-white/5 rounded-lg transition-colors"
                          >
                            View all solutions
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/free-website-audit">
                <Button variant="outline" size="sm">
                  Free Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="sm">
                  <Phone className="h-4 w-4 mr-1" />
                  Book a Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-slateCool-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.div
            className="absolute top-16 right-0 bottom-0 w-full max-w-sm bg-ink-900/98 backdrop-blur-xl border-l border-white/10 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <Link
                        href={item.href}
                        className="block px-4 py-3 font-medium text-slateCool-200 rounded-lg hover:bg-white/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            href={solution.href}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-slateCool-400 hover:text-slateCool-100 rounded-lg hover:bg-white/5"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <solution.icon className="h-4 w-4 text-brand-500" />
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 font-medium text-slateCool-200 rounded-lg hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link
                  href="/free-website-audit"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Free Website Audit
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
