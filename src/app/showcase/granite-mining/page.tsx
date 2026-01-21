"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { 
  ArrowLeft, Phone, Mail, MapPin, Mountain, Shield, Truck, Award, 
  ChevronRight, Play, CheckCircle, X, FileText, Eye, Globe, 
  Star, Download, Package, Sparkles, Clock, Users, Building2,
  Leaf, MessageCircle, Calendar, ArrowRight, Scale, BadgeCheck,
  ExternalLink, Hammer, Boxes, Ship, Factory, Ruler, Palette,
  ChevronDown, Send, Loader2, Quote
} from "lucide-react";

// Stats with animated counters
const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "K", label: "Tonnes Exported" },
  { value: 15, suffix: "", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const services = [
  {
    title: "Granite Extraction",
    description: "State-of-the-art quarrying techniques ensuring minimal environmental impact with precision wire cutting.",
    icon: Hammer,
    features: ["Wire Cutting", "Block Extraction", "Quality Grading"],
  },
  {
    title: "Processing & Finishing",
    description: "Precision cutting, polishing, and custom finishing to your exact specifications and dimensions.",
    icon: Factory,
    features: ["Gang Sawing", "Polishing", "Edge Profiling"],
  },
  {
    title: "Global Logistics",
    description: "Reliable shipping to any destination with full tracking, documentation, and customs support.",
    icon: Ship,
    features: ["Container Loading", "Freight Forwarding", "Customs Clearance"],
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and certification for all exported materials meeting international standards.",
    icon: Shield,
    features: ["Lab Testing", "ISO Certification", "Quality Reports"],
  },
];

const products = [
  { id: "black-absolute", name: "Black Absolute Granite", color: "bg-gray-900", origin: "Mutoko", price: "$85-120/m²", hardness: "7 Mohs", image: "/showcase/granite-mining/products/black-absolute-granite.png" },
  { id: "zimbabwe-grey", name: "Zimbabwe Grey", color: "bg-gray-500", origin: "Shamva", price: "$65-90/m²", hardness: "6.5 Mohs", image: "/showcase/granite-mining/products/zimbabwe-grey-granite.png" },
  { id: "tropical-green", name: "Tropical Green", color: "bg-emerald-700", origin: "Nyanga", price: "$95-140/m²", hardness: "7 Mohs", image: "/showcase/granite-mining/products/tropical-green-granite.png" },
  { id: "african-red", name: "African Red", color: "bg-red-800", origin: "Bindura", price: "$70-100/m²", hardness: "6.5 Mohs", image: "/showcase/granite-mining/products/african-red-granite.png" },
];

// Certifications
const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management", icon: BadgeCheck },
  { name: "ISO 14001", description: "Environmental Management", icon: Leaf },
  { name: "CE Marking", description: "European Conformity", icon: Shield },
  { name: "SABS Certified", description: "South African Standards", icon: Award },
];

// Project portfolio
const projects = [
  {
    name: "Dubai Marina Tower",
    location: "Dubai, UAE",
    product: "Black Absolute",
    volume: "15,000 m²",
    year: "2024",
    type: "Commercial",
    image: "/showcase/granite-mining/projects/project-dubai-tower.png",
  },
  {
    name: "Johannesburg Hilton",
    location: "South Africa",
    product: "Zimbabwe Grey",
    volume: "8,500 m²",
    year: "2023",
    type: "Hospitality",
    image: "/showcase/granite-mining/projects/project-joburg-hotel.png",
  },
  {
    name: "London Memorial",
    location: "United Kingdom",
    product: "Black Absolute",
    volume: "3,200 m²",
    year: "2023",
    type: "Monument",
    image: "/showcase/granite-mining/projects/project-london-memorial.png",
  },
  {
    name: "Shanghai Business Park",
    location: "China",
    product: "Tropical Green",
    volume: "22,000 m²",
    year: "2024",
    type: "Commercial",
    image: "/showcase/granite-mining/projects/project-shanghai-park.png",
  },
];

const aboutImages = [
  { src: "/showcase/granite-mining/about/about-quarry-panorama.png", alt: "ZimbabweStone quarry panorama", spanTwo: true },
  { src: "/showcase/granite-mining/about/about-processing.png", alt: "Granite processing facility" },
  { src: "/showcase/granite-mining/about/about-quality-check.png", alt: "Quality inspection of granite slabs" },
  { src: "/showcase/granite-mining/about/about-shipping.png", alt: "Granite export shipping operations" },
];

// Testimonials
const testimonials = [
  {
    name: "Ahmed Al-Hassan",
    company: "Emirates Construction Group",
    location: "Dubai, UAE",
    text: "ZimbabweStone has been our exclusive granite supplier for 5 years. Their Black Absolute quality is unmatched in the region, and their export documentation is always impeccable.",
    rating: 5,
  },
  {
    name: "Sarah Müller",
    company: "Deutsche Naturstein GmbH",
    location: "Germany",
    text: "Reliable, consistent quality, and excellent communication. The Zimbabwe Grey we sourced exceeded our expectations for the Munich project.",
    rating: 5,
  },
  {
    name: "Chen Wei",
    company: "Shanghai Stone Imports",
    location: "China",
    text: "We've worked with many African suppliers. ZimbabweStone stands out for their professionalism and on-time delivery across multiple large projects.",
    rating: 5,
  },
];

// News/Updates
const newsItems = [
  {
    date: "Jan 2026",
    title: "New Quarry Expansion in Mutoko",
    description: "Increasing Black Absolute production capacity by 40%",
    tag: "Expansion",
  },
  {
    date: "Dec 2025",
    title: "ISO 14001 Environmental Certification",
    description: "Achieved environmental management certification",
    tag: "Certification",
  },
  {
    date: "Nov 2025",
    title: "Partnership with Dubai Ports",
    description: "Streamlined shipping to Middle East markets",
    tag: "Partnership",
  },
];

// Partners
const partners = [
  "Maersk Logistics",
  "SGS Inspection",
  "Bureau Veritas",
  "Emirates Shipping",
  "SAFMARINE",
  "Mediterranean Shipping",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  );
}

export default function GraniteMiningShowcase() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [sampleForm, setSampleForm] = useState({ name: "", email: "", company: "", products: [] as string[], message: "" });
  const [submitting, setSubmitting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSampleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    setShowSampleModal(false);
    // Show success toast
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f0d]">
      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-[#0a0f0d] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src="/showcase/granite-mining/video-thumbnail.png"
                  alt="Virtual quarry tour preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 flex flex-col items-center justify-center text-center px-6">
                  <Mountain className="w-20 h-20 text-emerald-400/40 mb-4" />
                  <p className="text-white text-xl font-semibold mb-2">Virtual Quarry Tour</p>
                  <p className="text-gray-300 text-sm max-w-md">
                    Experience our quarries, processing facilities, and export operations 
                    through immersive 360° footage.
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-gray-300 text-sm">Virtual tour loading...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sample Request Modal */}
      <AnimatePresence>
        {showSampleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowSampleModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#111816] rounded-2xl overflow-hidden border border-emerald-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">Request Free Samples</h3>
                <p className="text-sm text-gray-400 mt-1">We&apos;ll ship sample pieces to your location</p>
              </div>
              <form onSubmit={handleSampleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={sampleForm.name}
                    onChange={(e) => setSampleForm({ ...sampleForm, name: e.target.value })}
                    className="px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={sampleForm.email}
                    onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                    className="px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={sampleForm.company}
                  onChange={(e) => setSampleForm({ ...sampleForm, company: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                />
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Select Products</label>
                  <div className="grid grid-cols-2 gap-2">
                    {products.map((p) => (
                      <label key={p.id} className="flex items-center gap-2 p-2 rounded-lg border border-white/10 hover:border-emerald-500/30 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-600 text-emerald-500 focus:ring-emerald-500" />
                        <div className={`w-4 h-4 rounded ${p.color}`} />
                        <span className="text-sm text-white">{p.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <textarea
                  placeholder="Additional notes or requirements..."
                  rows={3}
                  value={sampleForm.message}
                  onChange={(e) => setSampleForm({ ...sampleForm, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none resize-none"
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSampleModal(false)}
                    className="flex-1 py-3 bg-white/5 text-gray-300 rounded-xl hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-emerald-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                  >
                    {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Package className="w-5 h-5" />}
                    {submitting ? "Submitting..." : "Request Samples"}
                  </motion.button>
                </div>
              </form>
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
            className="fixed bottom-24 right-6 z-40 w-80 bg-[#111816] rounded-2xl border border-emerald-500/20 shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Export Team</p>
                  <p className="text-emerald-100 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full" /> Online now
                  </p>
                </div>
              </div>
            </div>
            <div className="h-64 p-4 bg-[#0a0f0d]">
              <div className="bg-emerald-500/10 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-white">Hello! How can we help you with your granite needs today?</p>
                <p className="text-xs text-gray-500 mt-1">Export Team • Just now</p>
              </div>
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-[#0a0f0d] border border-white/10 rounded-full text-white text-sm placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                />
                <button className="p-2 bg-emerald-500 rounded-full text-white">
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
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30"
      >
        {showChatWidget ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </motion.button>

      {/* Back to case studies */}
      <div className="fixed top-4 left-4 z-40">
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
        className="fixed top-0 left-0 right-0 z-30 bg-[#0a0f0d]/90 backdrop-blur-lg border-b border-white/5"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Zimbabwe<span className="text-emerald-500">Stone</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/showcase/granite-mining/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              <button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollToSection("projects")} className="text-gray-400 hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-white transition-colors">Contact</button>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => setShowSampleModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex px-4 py-2 bg-white/5 text-emerald-400 font-medium rounded-lg border border-emerald-500/30 hover:bg-emerald-500/10 transition-colors text-sm items-center gap-2"
              >
                <Package className="w-4 h-4" />
                Free Samples
              </motion.button>
              <Link href="/showcase/granite-mining/quote">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors text-sm"
                >
                  Request Quote
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/showcase/granite-mining/hero-quarry-wide.png"
            alt="ZimbabweStone quarry landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/70 via-[#1a2420]/80 to-[#0a0f0d]" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
        <motion.div 
          className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10 pt-20">
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
                  className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  Premium Quality
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm"
                >
                  <Award className="w-4 h-4" />
                  ISO 9001 Certified
                </motion.div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Premium African
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                  Granite & Stone
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-lg">
                Supplying the world with Zimbabwe&apos;s finest natural stone since 1998. 
                Quality, reliability, and sustainability guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/showcase/granite-mining/quote">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Request Quote
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <motion.button
                  onClick={() => setShowVideoModal(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Virtual Quarry Tour
                </motion.button>
              </div>

              {/* Quick actions */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <button
                  onClick={() => setShowSampleModal(true)}
                  className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Package className="w-4 h-4" />
                  Request Free Samples
                </button>
                <span className="text-gray-600">•</span>
                <a href="tel:+263242123456" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  +263 242 123 456
                </a>
              </div>
            </motion.div>

            {/* Hero visual - Product Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/showcase/granite-mining/hero-quarry.png"
                  alt="ZimbabweStone granite quarry"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/10 to-black/40" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">15</p>
                    <p className="text-xs text-gray-400">Countries</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -right-6 bg-emerald-500 rounded-xl p-4"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-white fill-white" />
                  <div>
                    <p className="text-xl font-bold text-white">4.9</p>
                    <p className="text-xs text-emerald-100">Rating</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Live availability indicator */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/2 -right-8 transform -translate-y-1/2"
              >
                <div className="bg-[#111816] rounded-xl p-3 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-white font-medium">Live Stock</span>
                  </div>
                  <div className="space-y-1">
                    {products.slice(0, 3).map((p) => (
                      <div key={p.id} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded ${p.color}`} />
                        <span className="text-xs text-gray-400">{p.name.split(' ')[0]}</span>
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-[#0d1210] border-y border-white/5">
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
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="py-12 bg-[#0a0f0d] border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BadgeCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">Certifications & Accreditations</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/5"
              >
                <cert.icon className="w-5 h-5 text-emerald-500" />
                <div>
                  <p className="text-white text-sm font-medium">{cert.name}</p>
                  <p className="text-gray-500 text-xs">{cert.description}</p>
                </div>
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
            <span className="text-emerald-500 text-sm uppercase tracking-widest mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">End-to-End Stone Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From quarry to your project site, we handle every step with expertise
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
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <service.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-[#0d1210]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-500 text-sm uppercase tracking-widest mb-4 block">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium Stone Collection</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Premium granite varieties sourced from Zimbabwe&apos;s richest deposits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <Link key={product.id} href="/showcase/granite-mining/products">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group cursor-pointer"
                >
                  <div className={`relative aspect-square rounded-2xl ${product.color} mb-4 overflow-hidden`}>
                    <Image
                      src={product.image}
                      alt={`${product.name} granite`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-sm flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        View Details
                      </span>
                    </div>
                    {/* Price tag */}
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-emerald-400 text-xs font-medium">{product.price}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-500">Origin: {product.origin}</p>
                    <p className="text-xs text-gray-500">{product.hardness}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link href="/showcase/granite-mining/products">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 mx-auto"
              >
                View Full Catalog
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <motion.button
              onClick={() => setShowSampleModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-emerald-500/10 text-emerald-400 font-semibold rounded-lg border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors flex items-center gap-2 mx-auto"
            >
              <Package className="w-5 h-5" />
              Request Free Samples
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Portfolio */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-500 text-sm uppercase tracking-widest mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Global Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our granite adorns landmark projects across the world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl overflow-hidden border border-white/10 group hover:border-emerald-500/30 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} project`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{project.type}</span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <span className="text-xs text-gray-500">{project.product}</span>
                    <span className="text-xs text-emerald-400 font-medium">{project.volume}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0d1210]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-500 text-sm uppercase tracking-widest mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Reviews</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 rounded-3xl p-8 md:p-12 border border-emerald-500/20 text-center"
              >
                <Quote className="w-12 h-12 text-emerald-500/30 mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-white/90 mb-8 italic">
                  &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-lg font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                <p className="text-emerald-400">{testimonials[activeTestimonial].company}</p>
                <p className="text-sm text-gray-500">{testimonials[activeTestimonial].location}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeTestimonial ? "bg-emerald-500 w-8" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News/Updates */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-emerald-500 text-sm uppercase tracking-widest mb-2 block">Latest</span>
              <h2 className="text-3xl font-bold text-white">News & Updates</h2>
            </div>
            <button className="text-emerald-400 text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">{item.tag}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0d1210]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-500 text-sm uppercase tracking-widest mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                A Legacy of Quality Since 1998
              </h2>
              <p className="text-gray-400 mb-6">
                ZimbabweStone has been at the forefront of the African granite industry for over 25 years. 
                Our commitment to quality, sustainability, and customer satisfaction has made us the 
                preferred supplier for projects across 15 countries.
              </p>
              <p className="text-gray-400 mb-8">
                From our state-of-the-art quarries in Mutoko, Shamva, and Nyanga, we extract and process 
                the finest granite, delivering products that meet the highest international standards.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Sustainable Mining</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Quality Certified</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Fair Trade</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>Carbon Neutral by 2028</span>
                </div>
              </div>
              <Link href="/showcase/granite-mining/quote">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg flex items-center gap-2"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {aboutImages.map((image) => (
                <div
                  key={image.src}
                  className={`${image.spanTwo ? "col-span-2" : ""} relative aspect-video rounded-2xl overflow-hidden border border-white/5`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 border-t border-b border-white/5">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted Logistics Partners</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50">
            {partners.map((partner) => (
              <span key={partner} className="text-white/60 text-sm font-medium">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-900/50 to-emerald-800/30 rounded-3xl p-12 md:p-16 border border-emerald-500/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Source Premium Granite?
                </h2>
                <p className="text-gray-400 mb-6">
                  Get in touch with our export team for quotes, samples, and specifications. 
                  We respond within 24 hours.
                </p>
                <div className="space-y-3">
                  <a href="mailto:export@zimbabwestone.com" className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-500" />
                    export@zimbabwestone.com
                  </a>
                  <a href="tel:+263242123456" className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-500" />
                    +263 242 123 456
                  </a>
                  <p className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    14 Industrial Road, Harare, Zimbabwe
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/showcase/granite-mining/quote">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-emerald-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                    >
                      <FileText className="w-5 h-5" />
                      Request Quote
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={() => setShowSampleModal(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-white/10 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                  >
                    <Package className="w-5 h-5" />
                    Free Samples
                  </motion.button>
                </div>
                <a href="#" className="block text-center text-emerald-400 text-sm hover:underline">
                  Download Product Catalog (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#0a0f0d]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Zimbabwe<span className="text-emerald-500">Stone</span>
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Premium African granite exported worldwide since 1998.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-500/20 transition-colors">
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/showcase/granite-mining/products" className="hover:text-emerald-400">Black Absolute</Link></li>
                <li><Link href="/showcase/granite-mining/products" className="hover:text-emerald-400">Zimbabwe Grey</Link></li>
                <li><Link href="/showcase/granite-mining/products" className="hover:text-emerald-400">Tropical Green</Link></li>
                <li><Link href="/showcase/granite-mining/products" className="hover:text-emerald-400">African Red</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-emerald-400">Extraction</a></li>
                <li><a href="#services" className="hover:text-emerald-400">Processing</a></li>
                <li><a href="#services" className="hover:text-emerald-400">Global Shipping</a></li>
                <li><a href="#services" className="hover:text-emerald-400">Quality Assurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>14 Industrial Road</li>
                <li>Harare, Zimbabwe</li>
                <li className="text-emerald-400">export@zimbabwestone.com</li>
                <li>+263 242 123 456</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© 2026 ZimbabweStone. All rights reserved.</p>
            <p className="text-sm text-gray-600">
              This is a demo website template by{" "}
              <Link href="/" className="text-emerald-500 hover:underline">Klama</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
