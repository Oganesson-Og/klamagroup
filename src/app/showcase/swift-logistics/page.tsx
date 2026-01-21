"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { 
  ArrowLeft, Truck, Package, MapPin, Clock, Shield, Globe, Phone, Mail, 
  ChevronRight, CheckCircle, Zap, Search, Calendar, Calculator, ArrowRight,
  BarChart3, Building2, Users, Star, FileText, Download, Play, X,
  MessageCircle, Send, Headphones, Fuel, Bell, Code, Layers, TrendingUp,
  Settings, HelpCircle, ChevronDown, MapPinned, Route, Timer, Boxes,
  BadgeCheck, Award, Lock, Smartphone, CreditCard, RefreshCw
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Same-day and next-day delivery across all major cities in Zimbabwe.",
    stat: "24hr",
    statLabel: "Average Delivery",
    features: ["Same-Day Express", "Next-Day Standard", "Weekend Delivery"],
    image: "/showcase/swift-logistics/services/service-express.png",
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Secure storage facilities with real-time inventory tracking.",
    stat: "50K",
    statLabel: "Sqm Storage",
    features: ["Climate Controlled", "24/7 Security", "Inventory System"],
    image: "/showcase/swift-logistics/services/service-freight.png",
  },
  {
    icon: Globe,
    title: "Cross-Border",
    description: "Reliable shipping to South Africa, Botswana, Zambia, and Mozambique.",
    stat: "4",
    statLabel: "Countries",
    features: ["Customs Clearance", "Documentation", "Border Expertise"],
    image: "/showcase/swift-logistics/services/service-ecommerce.png",
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    description: "Full coverage for all shipments with hassle-free claims.",
    stat: "100%",
    statLabel: "Coverage",
    features: ["Full Value Cover", "Quick Claims", "Peace of Mind"],
    image: "/showcase/swift-logistics/services/service-specialized.png",
  },
];

const stats = [
  { value: "15K+", label: "Deliveries Monthly" },
  { value: "99.2%", label: "On-Time Rate" },
  { value: "200+", label: "Fleet Vehicles" },
  { value: "50+", label: "Corporate Clients" },
];

const trackingSteps = [
  { status: "complete", label: "Order Received", time: "08:00 AM", location: "Harare Hub" },
  { status: "complete", label: "In Transit", time: "10:30 AM", location: "En Route" },
  { status: "current", label: "Out for Delivery", time: "02:15 PM", location: "Harare CBD" },
  { status: "pending", label: "Delivered", time: "Est. 04:00 PM", location: "Destination" },
];

// Service areas with coverage
const serviceAreas = [
  { city: "Harare", coverage: "Full", deliveryTime: "Same Day" },
  { city: "Bulawayo", coverage: "Full", deliveryTime: "Same Day" },
  { city: "Mutare", coverage: "Full", deliveryTime: "Next Day" },
  { city: "Gweru", coverage: "Full", deliveryTime: "Next Day" },
  { city: "Masvingo", coverage: "Full", deliveryTime: "Next Day" },
  { city: "Victoria Falls", coverage: "Limited", deliveryTime: "2-3 Days" },
];

// Testimonials
const testimonials = [
  {
    name: "Tendai Moyo",
    company: "OK Zimbabwe",
    role: "Supply Chain Manager",
    text: "Swift Logistics transformed our distribution network. Their tracking system gives us complete visibility, and the on-time delivery rate is unmatched.",
    rating: 5,
    avatar: "/showcase/swift-logistics/testimonial-business-owner.png",
  },
  {
    name: "Sarah Chen",
    company: "TechConnect Zim",
    role: "Operations Director",
    text: "We've reduced delivery complaints by 80% since switching to Swift. Their cross-border service to South Africa is seamless.",
    rating: 5,
    avatar: "/showcase/swift-logistics/testimonial-business-owner.png",
  },
  {
    name: "Mike Peterson",
    company: "Harvest Fresh",
    role: "Logistics Head",
    text: "Temperature-controlled delivery for our produce has been perfect. Not a single spoilage claim in 6 months!",
    rating: 5,
    avatar: "/showcase/swift-logistics/testimonial-business-owner.png",
  },
];

// Integration partners
const integrationPartners = [
  { name: "Shopify", category: "E-commerce", logo: "/showcase/swift-logistics/partner-logo-placeholder.png" },
  { name: "WooCommerce", category: "E-commerce", logo: "/showcase/swift-logistics/partner-logo-placeholder.png" },
  { name: "SAP", category: "ERP", logo: "/showcase/swift-logistics/partner-logo-placeholder.png" },
  { name: "Odoo", category: "ERP", logo: "/showcase/swift-logistics/partner-logo-placeholder.png" },
  { name: "QuickBooks", category: "Accounting", logo: "/showcase/swift-logistics/partner-logo-placeholder.png" },
  { name: "Sage", category: "Accounting", logo: "/showcase/swift-logistics/partner-logo-placeholder.png" },
];

// FAQ data
const faqs = [
  {
    question: "What areas do you service?",
    answer: "We provide nationwide coverage across Zimbabwe, including all major cities. We also offer cross-border services to South Africa, Botswana, Zambia, and Mozambique.",
  },
  {
    question: "How do I track my shipment?",
    answer: "You can track your shipment using the tracking number provided at booking. Enter it on our tracking page or use our mobile app for real-time updates with push notifications.",
  },
  {
    question: "What happens if my delivery is late?",
    answer: "We have a 99.2% on-time delivery rate. In rare cases of delays, we proactively notify you and provide compensation according to our service guarantee.",
  },
  {
    question: "Do you offer business accounts?",
    answer: "Yes! Business accounts include volume discounts, dedicated account managers, priority handling, and monthly invoicing. Contact our sales team to set up an account.",
  },
  {
    question: "Is my cargo insured?",
    answer: "All shipments include basic coverage. For high-value items, we offer full value cargo insurance with easy online claims processing.",
  },
];

// Live notifications simulation
const liveNotifications = [
  { type: "delivered", message: "Package delivered to Bulawayo CBD", time: "2 min ago" },
  { type: "pickup", message: "Driver en route for pickup - Borrowdale", time: "5 min ago" },
  { type: "transit", message: "Cross-border shipment cleared customs", time: "12 min ago" },
];

// Pricing tiers for business
const businessTiers = [
  {
    name: "Starter",
    shipments: "Up to 50/month",
    discount: "10%",
    features: ["Standard tracking", "Email support", "Basic reports"],
  },
  {
    name: "Professional",
    shipments: "50-200/month",
    discount: "15%",
    features: ["Priority handling", "Phone support", "Advanced analytics", "API access"],
    popular: true,
  },
  {
    name: "Enterprise",
    shipments: "200+/month",
    discount: "20%+",
    features: ["Dedicated manager", "Custom solutions", "SLA guarantee", "White-label option"],
  },
];

// Fuel surcharge tracker
function FuelSurchargeWidget() {
  const [surcharge, setSurcharge] = useState(8.5);
  const lastUpdated = "Jan 15, 2026";

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-lg">
      <Fuel className="w-4 h-4 text-sky-500" />
      <div className="text-sm">
        <span className="text-gray-400">Fuel Surcharge:</span>
        <span className="text-sky-400 font-semibold ml-1">{surcharge}%</span>
        <span className="text-gray-500 text-xs ml-2">Updated {lastUpdated}</span>
      </div>
    </div>
  );
}

// Live fleet counter
function LiveFleetCounter() {
  const [activeVehicles, setActiveVehicles] = useState(156);
  const [inTransit, setInTransit] = useState(423);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVehicles(Math.floor(Math.random() * 30) + 140);
      setInTransit(Math.floor(Math.random() * 50) + 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm text-gray-400">
          <span className="text-white font-semibold">{activeVehicles}</span> vehicles active
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Package className="w-4 h-4 text-sky-500" />
        <span className="text-sm text-gray-400">
          <span className="text-white font-semibold">{inTransit}</span> packages in transit
        </span>
      </div>
    </div>
  );
}

export default function SwiftLogisticsShowcase() {
  const [trackingInput, setTrackingInput] = useState("");
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showApiModal, setShowApiModal] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingInput) {
      window.location.href = `/showcase/swift-logistics/track?q=${trackingInput}`;
    }
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e14]">
      {/* API Documentation Modal */}
      <AnimatePresence>
        {showApiModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowApiModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#111827] rounded-2xl overflow-hidden border border-sky-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-sky-600 to-blue-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Swift API</h3>
                      <p className="text-sky-100 text-sm">Integrate shipping into your platform</p>
                    </div>
                  </div>
                  <button onClick={() => setShowApiModal(false)} className="text-white/80 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-[#0a0e14] rounded-xl p-4 mb-6">
                  <code className="text-sm text-sky-400">
                    <pre>{`// Create a shipment
POST /api/v1/shipments

{
  "origin": "Harare",
  "destination": "Bulawayo",
  "weight": 5.2,
  "service": "express"
}`}</pre>
                  </code>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-sky-500/10 rounded-xl border border-sky-500/20">
                    <p className="text-2xl font-bold text-sky-400">REST</p>
                    <p className="text-sm text-gray-400">RESTful API</p>
                  </div>
                  <div className="p-4 bg-sky-500/10 rounded-xl border border-sky-500/20">
                    <p className="text-2xl font-bold text-sky-400">Webhooks</p>
                    <p className="text-sm text-gray-400">Real-time events</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 py-3 bg-sky-500 text-white font-semibold rounded-xl"
                  >
                    View Documentation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/10"
                  >
                    Get API Key
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Chat Widget */}
      <AnimatePresence>
        {showChatWidget && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-80 bg-[#111827] rounded-2xl border border-sky-500/20 shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-sky-600 to-blue-600 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Support Team</p>
                  <p className="text-sky-100 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full" /> Online • Avg reply 2 min
                  </p>
                </div>
              </div>
            </div>
            <div className="h-64 p-4 bg-[#0a0e14]">
              <div className="bg-sky-500/10 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-white">Hello! How can we help with your shipment today?</p>
                <p className="text-xs text-gray-500 mt-1">Support Team • Just now</p>
              </div>
              <div className="mt-4 space-y-2">
                {["Track my package", "Request pickup", "Get a quote"].map((option) => (
                  <button
                    key={option}
                    className="block w-full text-left px-3 py-2 bg-sky-500/10 text-sky-400 text-sm rounded-lg hover:bg-sky-500/20 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-[#0a0e14] border border-gray-700 rounded-full text-white text-sm placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                />
                <button className="p-2 bg-sky-500 rounded-full text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setShowChatWidget(!showChatWidget)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/30"
      >
        {showChatWidget ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </motion.button>

      {/* Back to case studies */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/case-studies">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </motion.div>
        </Link>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0a0e14]/90 backdrop-blur-lg border-b border-sky-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Swift<span className="text-sky-500">Logistics</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-white transition-colors">Services</button>
              <Link href="/showcase/swift-logistics/track" className="text-gray-400 hover:text-white transition-colors">Track</Link>
              <button onClick={() => scrollToSection("business")} className="text-gray-400 hover:text-white transition-colors">Business</button>
              <button onClick={() => setShowApiModal(true)} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                <Code className="w-3 h-3" />
                API
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-white transition-colors">Contact</button>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/showcase/swift-logistics/quote">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors text-sm"
                >
                  Get Quote
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/showcase/swift-logistics/hero-fleet.png"
            alt="Swift Logistics fleet"
            fill
            className="object-cover hidden md:block"
            priority
          />
          <Image
            src="/showcase/swift-logistics/hero-fleet-mobile.png"
            alt="Swift Logistics delivery truck"
            fill
            className="object-cover md:hidden"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e14]/80 via-[#0d1520]/85 to-[#0a0e14]" />
          <motion.div 
            className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div style={{ opacity: heroOpacity }} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm"
                >
                  <Zap className="w-4 h-4" />
                  Zimbabwe&apos;s #1 Logistics Partner
                </motion.div>
                <FuelSurchargeWidget />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Delivering
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  Excellence,
                </span>
                <span className="block">On Time.</span>
              </h1>

              <p className="text-xl text-gray-400 mb-6 max-w-lg">
                Fast, reliable, and secure delivery solutions for businesses across 
                Zimbabwe and the SADC region. Track every shipment in real-time.
              </p>

              {/* Live fleet counter */}
              <div className="mb-8">
                <LiveFleetCounter />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/showcase/swift-logistics/pickup">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Request Pickup
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/showcase/swift-logistics/track">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 flex items-center justify-center gap-2"
                  >
                    <Package className="w-5 h-5" />
                    Track Shipment
                  </motion.button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-sky-400">15K+</p>
                  <p className="text-sm text-gray-500">Monthly Deliveries</p>
                </div>
                <div className="w-px h-12 bg-gray-800" />
                <div>
                  <p className="text-3xl font-bold text-sky-400">99.2%</p>
                  <p className="text-sm text-gray-500">On-Time Rate</p>
                </div>
                <div className="w-px h-12 bg-gray-800" />
                <div>
                  <p className="text-3xl font-bold text-sky-400">200+</p>
                  <p className="text-sm text-gray-500">Fleet Vehicles</p>
                </div>
              </div>
            </motion.div>

            {/* Live tracking preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Tracking #SL-2026-08754</p>
                      <p className="text-sm text-gray-500">Express Delivery</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                    In Transit
                  </span>
                </div>

                {/* Progress steps */}
                <div className="relative mb-6">
                  {trackingSteps.map((step, i) => (
                    <div key={step.label} className="flex items-start gap-4 mb-4 last:mb-0">
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.status === 'complete' ? 'bg-sky-500' :
                          step.status === 'current' ? 'bg-sky-500 animate-pulse' :
                          'bg-gray-700'
                        }`}>
                          {step.status === 'complete' ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <div className={`w-2 h-2 rounded-full ${step.status === 'current' ? 'bg-white' : 'bg-gray-500'}`} />
                          )}
                        </div>
                        {i < trackingSteps.length - 1 && (
                          <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 ${
                            step.status === 'complete' ? 'bg-sky-500' : 'bg-gray-700'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`font-medium ${step.status === 'pending' ? 'text-gray-500' : 'text-white'}`}>
                              {step.label}
                            </p>
                            <p className="text-xs text-gray-500">{step.location}</p>
                          </div>
                          <p className="text-sm text-gray-500">{step.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery info */}
                <div className="bg-[#0a0e14] rounded-xl p-4 border border-gray-800 mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Delivering to</p>
                      <p className="text-white font-medium">123 Samora Machel Ave, Harare</p>
                    </div>
                  </div>
                </div>

                {/* Quick track */}
                <form onSubmit={handleQuickTrack}>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={trackingInput}
                      onChange={(e) => setTrackingInput(e.target.value)}
                      placeholder="Enter tracking number..."
                      className="flex-1 px-4 py-2 bg-[#0a0e14] border border-gray-700 rounded-lg text-white placeholder:text-gray-500 text-sm focus:border-sky-500 focus:outline-none"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-sky-500 text-white rounded-lg"
                    >
                      <Search className="w-4 h-4" />
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* Live notifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 top-1/3"
              >
                <div className="bg-[#111827]/90 backdrop-blur-lg rounded-xl p-3 border border-sky-500/20 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="w-4 h-4 text-sky-500" />
                    <span className="text-xs text-gray-400">Live Updates</span>
                  </div>
                  <div className="space-y-2">
                    {liveNotifications.slice(0, 2).map((notif, i) => (
                      <div key={i} className="text-xs">
                        <p className="text-white">{notif.message}</p>
                        <p className="text-gray-500">{notif.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl px-4 py-2 shadow-lg"
              >
                <p className="text-white font-bold flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Live Tracking
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0d1117] border-y border-sky-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  {stat.value}
                </p>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sky-500 text-sm uppercase tracking-widest mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-End Logistics Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From local deliveries to cross-border freight, we&apos;ve got you covered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(56, 189, 248, 0.3)' }}
                className="bg-[#111827]/50 rounded-2xl overflow-hidden border border-gray-800 transition-all group"
              >
                <div className="relative aspect-video">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-sky-500/30 group-hover:to-blue-500/30 transition-colors">
                    <service.icon className="w-7 h-7 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-3 h-3 text-sky-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-2xl font-bold text-sky-400">{service.stat}</p>
                    <p className="text-xs text-gray-500">{service.statLabel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Link href="/showcase/swift-logistics/quote">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-sky-500/10 text-sky-400 font-semibold rounded-lg border border-sky-500/20 flex items-center gap-2 hover:bg-sky-500/20 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Get Instant Quote
              </motion.button>
            </Link>
            <Link href="/showcase/swift-logistics/pickup">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-sky-500/10 text-sky-400 font-semibold rounded-lg border border-sky-500/20 flex items-center gap-2 hover:bg-sky-500/20 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule Pickup
              </motion.button>
            </Link>
            <motion.button
              onClick={() => setShowApiModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-sky-500/10 text-sky-400 font-semibold rounded-lg border border-sky-500/20 flex items-center gap-2 hover:bg-sky-500/20 transition-colors"
            >
              <Code className="w-5 h-5" />
              API Integration
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Operations Gallery */}
      <section className="py-24 bg-[#0d1117] border-t border-sky-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sky-500 text-sm uppercase tracking-widest mb-4 block">Operations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Inside Our Logistics Network
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fleet, warehousing, and tracking technology designed for speed and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: "/showcase/swift-logistics/fleet/fleet-trucks.png", alt: "Swift Logistics fleet trucks" },
              { src: "/showcase/swift-logistics/fleet/warehouse-interior.png", alt: "Swift Logistics warehouse interior" },
              { src: "/showcase/swift-logistics/fleet/tracking-technology.png", alt: "Driver using tracking technology" },
              { src: "/showcase/swift-logistics/fleet/customer-delivery.png", alt: "Customer delivery experience" },
            ].map((image) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Map Section */}
      <section className="py-24 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sky-500 text-sm uppercase tracking-widest mb-4 block">Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Areas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nationwide coverage with express options for major cities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-sky-500/20"
            >
              <Image
                src="/showcase/swift-logistics/coverage-map-zimbabwe.png"
                alt="Swift Logistics coverage map of Zimbabwe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* Service area list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {serviceAreas.map((area, i) => (
                <motion.div
                  key={area.city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-[#111827]/50 rounded-xl border border-gray-800 hover:border-sky-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-sky-500" />
                    <div>
                      <p className="font-semibold text-white">{area.city}</p>
                      <p className="text-xs text-gray-500">{area.deliveryTime}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    area.coverage === "Full" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {area.coverage} Coverage
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Accounts Section */}
      <section id="business" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sky-500 text-sm uppercase tracking-widest mb-4 block">Business Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Business Accounts
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Volume discounts, dedicated support, and enterprise features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {businessTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-[#111827]/50 rounded-2xl p-6 border ${
                  tier.popular ? "border-sky-500" : "border-gray-800"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sky-500 text-white text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-sky-400 mb-1">{tier.discount}</p>
                <p className="text-sm text-gray-500 mb-4">{tier.shipments}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-sky-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold ${
                    tier.popular
                      ? "bg-sky-500 text-white"
                      : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Integration partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-500 mb-6">Integrates with your existing tools</p>
            <div className="flex flex-wrap justify-center gap-6">
              {integrationPartners.map((partner) => (
                <div key={partner.name} className="flex items-center gap-3 px-4 py-2 bg-[#111827]/50 rounded-lg border border-gray-800">
                  <div className="relative w-10 h-6">
                    <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium">{partner.name}</p>
                    <p className="text-xs text-gray-500">{partner.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sky-500 text-sm uppercase tracking-widest mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Businesses</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-gradient-to-br from-sky-900/20 to-blue-900/10 rounded-2xl p-8 border border-sky-500/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xl text-white/90 mb-6 italic">
                  &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-sky-500/30">
                    <Image
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-gray-400">{testimonials[activeTestimonial].role}</p>
                    <p className="text-sm text-sky-400">{testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeTestimonial ? "bg-sky-500 w-8" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sky-500 text-sm uppercase tracking-widest mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Common Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111827]/50 rounded-xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-sky-500 transition-transform ${expandedFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4"
                    >
                      <p className="text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#0d1117]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-sky-900/30 to-blue-900/30 rounded-3xl p-12 md:p-16 border border-sky-500/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Streamline Your Logistics?
                </h2>
                <p className="text-gray-400 mb-6">
                  Get a custom quote for your business needs. Our team is ready to help 24/7.
                </p>
                <div className="space-y-4">
                  <a href="mailto:sales@swiftlogistics.co.zw" className="flex items-center gap-3 text-white hover:text-sky-400 transition-colors">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-sky-500" />
                    </div>
                    sales@swiftlogistics.co.zw
                  </a>
                  <a href="tel:+263242789456" className="flex items-center gap-3 text-white hover:text-sky-400 transition-colors">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-sky-500" />
                    </div>
                    +263 242 789 456
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-sky-500" />
                    </div>
                    Msasa Industrial Park, Harare
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/showcase/swift-logistics/quote">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-sky-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                    >
                      <Calculator className="w-5 h-5" />
                      Get Quote
                    </motion.button>
                  </Link>
                  <Link href="/showcase/swift-logistics/pickup">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-white/10 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule Pickup
                    </motion.button>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    onClick={() => setShowApiModal(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-white/5 text-gray-300 font-semibold rounded-xl flex items-center justify-center gap-2 border border-gray-700"
                  >
                    <Code className="w-5 h-5" />
                    API Docs
                  </motion.button>
                  <motion.button
                    onClick={() => setShowChatWidget(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-white/5 text-gray-300 font-semibold rounded-xl flex items-center justify-center gap-2 border border-gray-700"
                  >
                    <Headphones className="w-5 h-5" />
                    Live Chat
                  </motion.button>
                </div>
                <p className="text-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 inline mr-1" />
                  24/7 Support Available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Swift<span className="text-sky-500">Logistics</span>
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Zimbabwe&apos;s premier logistics partner. Fast, reliable, and always on time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-sky-400">Nationwide Delivery</a></li>
                <li><a href="#services" className="hover:text-sky-400">Cross-Border</a></li>
                <li><a href="#services" className="hover:text-sky-400">Warehousing</a></li>
                <li><a href="#services" className="hover:text-sky-400">Cargo Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/showcase/swift-logistics/track" className="hover:text-sky-400">Track Shipment</Link></li>
                <li><Link href="/showcase/swift-logistics/quote" className="hover:text-sky-400">Get Quote</Link></li>
                <li><Link href="/showcase/swift-logistics/pickup" className="hover:text-sky-400">Schedule Pickup</Link></li>
                <li><button onClick={() => setShowApiModal(true)} className="hover:text-sky-400">API Documentation</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Msasa Industrial Park</li>
                <li>Harare, Zimbabwe</li>
                <li className="text-sky-400">sales@swiftlogistics.co.zw</li>
                <li>+263 242 789 456</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© 2026 Swift Logistics. All rights reserved.</p>
            <p className="text-sm text-gray-600">
              This is a demo website template by{" "}
              <Link href="/" className="text-sky-500 hover:underline">Klama</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
