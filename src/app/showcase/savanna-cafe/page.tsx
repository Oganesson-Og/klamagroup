"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, MapPin, Phone, Star, Instagram, Facebook, ChevronRight, Coffee, Leaf, Heart, Utensils, Users, Award, Calendar, Gift, Sparkles, X, CreditCard, Check, Loader2, Timer, ChefHat, Wine, Music, Cake, Send, Mail, Bell, QrCode, ArrowRight, Twitter, Download } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const menuHighlights = [
  {
    name: "Sunrise Breakfast Platter",
    description: "Farm-fresh eggs, local sausages, grilled tomatoes, and sourdough toast",
    price: 12,
    tag: "Popular",
    calories: 680,
    dietary: [],
    image: "/showcase/savanna-cafe/menu/menu-breakfast-platter.png",
  },
  {
    name: "Nyama Choma Bowl",
    description: "Flame-grilled beef with sadza, seasonal greens, and chakalaka",
    price: 18,
    tag: "Chef's Pick",
    calories: 850,
    dietary: ["gluten-free"],
    image: "/showcase/savanna-cafe/menu/menu-nyama-choma.png",
  },
  {
    name: "Ethiopian Coffee Ceremony",
    description: "Freshly roasted beans, traditional preparation, served with dates",
    price: 8,
    tag: "Signature",
    calories: 45,
    dietary: ["vegan"],
    image: "/showcase/savanna-cafe/menu/menu-coffee-ceremony.png",
  },
  {
    name: "Tropical Açaí Bowl",
    description: "Organic açaí, local fruits, granola, and honey drizzle",
    price: 14,
    tag: "Vegan",
    calories: 420,
    dietary: ["vegan", "gluten-free"],
    image: "/showcase/savanna-cafe/menu/menu-acai-bowl.png",
  },
];

const features = [
  { icon: Coffee, label: "Specialty Coffee", desc: "Single-origin African beans" },
  { icon: Leaf, label: "Farm to Table", desc: "Local ingredients" },
  { icon: Heart, label: "Made with Love", desc: "Family recipes" },
  { icon: Utensils, label: "Full Kitchen", desc: "Breakfast to dinner" },
];

const teamMembers = [
  { name: "Chef Tendai Moyo", role: "Head Chef", bio: "15 years of culinary experience across Africa", specialty: "Grilled meats & traditional", image: "/showcase/savanna-cafe/team/team-chef.png" },
  { name: "Rumbidzai Makoni", role: "Pastry Chef", bio: "Award-winning baker and dessert creator", specialty: "African-fusion desserts", image: "/showcase/savanna-cafe/team/team-manager.png" },
  { name: "David Chikwava", role: "Barista Master", bio: "Certified specialty coffee expert", specialty: "Ethiopian ceremony", image: "/showcase/savanna-cafe/team/team-barista.png" },
];

// Events data
const upcomingEvents = [
  {
    date: "Jan 25",
    day: "Sat",
    title: "Live Jazz Night",
    time: "7:00 PM",
    description: "Live performance by Harare Jazz Collective",
    icon: Music,
    spots: 24,
    image: "/showcase/savanna-cafe/events/event-live-music.png",
  },
  {
    date: "Jan 30",
    day: "Thu",
    title: "Wine Tasting Evening",
    time: "6:30 PM",
    description: "South African wines paired with local cheeses",
    icon: Wine,
    spots: 18,
    image: "/showcase/savanna-cafe/events/event-wine-tasting.png",
  },
  {
    date: "Feb 14",
    day: "Fri",
    title: "Valentine's Dinner",
    time: "6:00 PM",
    description: "Special 5-course romantic dinner",
    icon: Heart,
    spots: 40,
    image: "/showcase/savanna-cafe/events/event-private-dining.png",
  },
];

// Gift card options
const giftCardOptions = [
  { amount: 25, label: "Treat" },
  { amount: 50, label: "Dinner for Two" },
  { amount: 100, label: "Celebration" },
  { amount: 200, label: "Ultimate Experience" },
];

// Reviews
const reviews = [
  {
    name: "Michelle K.",
    rating: 5,
    date: "2 days ago",
    text: "Absolutely loved the Ethiopian coffee ceremony! The ambiance is perfect for a relaxed afternoon. Staff was incredibly friendly.",
    helpful: 12,
  },
  {
    name: "Tapiwa M.",
    rating: 5,
    date: "1 week ago",
    text: "Best Nyama Choma in Harare, hands down. The sadza was perfectly prepared and the chakalaka had just the right kick!",
    helpful: 8,
  },
  {
    name: "Sarah L.",
    rating: 4,
    date: "2 weeks ago",
    text: "Great vegan options! The açaí bowl was fresh and delicious. Would love to see more plant-based mains on the menu.",
    helpful: 5,
  },
];

// Loyalty tiers
const loyaltyTiers = [
  { name: "Bean", points: 0, benefits: ["Birthday treat", "Member prices"] },
  { name: "Roast", points: 500, benefits: ["10% off", "Early event access", "Free coffee upgrade"] },
  { name: "Brew Master", points: 1500, benefits: ["15% off", "Priority reservations", "Exclusive events", "Free dessert monthly"] },
];

// Instagram feed mock
const instagramPosts = [
  { likes: 234, comments: 18, type: "food", image: "/showcase/savanna-cafe/instagram/insta-1.png" },
  { likes: 189, comments: 12, type: "interior", image: "/showcase/savanna-cafe/instagram/insta-2.png" },
  { likes: 567, comments: 45, type: "coffee", image: "/showcase/savanna-cafe/instagram/insta-3.png" },
  { likes: 321, comments: 23, type: "dessert", image: "/showcase/savanna-cafe/instagram/insta-4.png" },
  { likes: 445, comments: 31, type: "event", image: "/showcase/savanna-cafe/instagram/insta-5.png" },
  { likes: 278, comments: 15, type: "team", image: "/showcase/savanna-cafe/instagram/insta-6.png" },
];

const aboutImages = [
  { src: "/showcase/savanna-cafe/hero-cafe.png", alt: "Savanna Cafe interior" },
  { src: "/showcase/savanna-cafe/menu/menu-coffee-ceremony.png", alt: "Ethiopian coffee ceremony" },
  { src: "/showcase/savanna-cafe/events/event-live-music.png", alt: "Live music night at Savanna Cafe" },
  { src: "/showcase/savanna-cafe/events/catering-spread.png", alt: "Catering spread" },
];

// Catering packages
const cateringPackages = [
  { name: "Coffee Break", serves: "10-20", price: 150, includes: ["Specialty coffees", "Pastries", "Fresh fruit"] },
  { name: "Brunch Spread", serves: "20-40", price: 400, includes: ["Full breakfast", "Juices", "Coffee station"] },
  { name: "Corporate Lunch", serves: "30-50", price: 650, includes: ["3-course meal", "Beverages", "Dessert"] },
  { name: "Private Event", serves: "50+", price: "Custom", includes: ["Full venue hire", "Custom menu", "Dedicated staff"] },
];

function WaitTimeIndicator() {
  const [waitTime, setWaitTime] = useState(15);
  const [occupancy, setOccupancy] = useState(68);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaitTime(Math.floor(Math.random() * 20) + 5);
      setOccupancy(Math.floor(Math.random() * 40) + 50);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4 text-amber-500" />
        <span className="text-sm text-amber-200">
          <span className="font-semibold">{waitTime} min</span> wait
        </span>
      </div>
      <div className="w-px h-4 bg-amber-500/30" />
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-amber-500" />
        <span className="text-sm text-amber-200">{occupancy}% full</span>
      </div>
    </div>
  );
}

export default function SavannaCafeShowcase() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showGiftCardModal, setShowGiftCardModal] = useState(false);
  const [showLoyaltyModal, setShowLoyaltyModal] = useState(false);
  const [selectedGiftAmount, setSelectedGiftAmount] = useState(50);
  const [giftCardEmail, setGiftCardEmail] = useState("");
  const [giftCardMessage, setGiftCardMessage] = useState("");
  const [giftCardLoading, setGiftCardLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"events" | "catering">("events");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 1000));
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setNewsletterEmail("");
  };

  const handleGiftCardPurchase = async () => {
    if (!giftCardEmail) {
      alert("Please enter the recipient's email address");
      return;
    }
    
    setGiftCardLoading(true);
    // Demo mode - simulate success
    await new Promise(r => setTimeout(r, 1000));
    alert(`Demo: Gift card purchase of $${selectedGiftAmount} would be processed.\n\nRecipient: ${giftCardEmail}\nMessage: ${giftCardMessage || "No message"}`);
    setShowGiftCardModal(false);
    setGiftCardEmail("");
    setGiftCardMessage("");
    setGiftCardLoading(false);
  };

  // Auto rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1410]">
      {/* Gift Card Modal */}
      <AnimatePresence>
        {showGiftCardModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowGiftCardModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-[#1e1813] rounded-2xl overflow-hidden border border-amber-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6">
                <div className="flex items-center gap-3">
                  <Gift className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Gift Cards</h3>
                    <p className="text-amber-100 text-sm">Share the Savanna experience</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-6 border border-amber-500/20">
                  <Image
                    src="/showcase/savanna-cafe/gift-card-design.png"
                    alt="Savanna Cafe gift card"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-amber-200/70 text-sm mb-4">Select an amount:</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {giftCardOptions.map((option) => (
                    <button
                      key={option.amount}
                      onClick={() => setSelectedGiftAmount(option.amount)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedGiftAmount === option.amount
                          ? "border-amber-500 bg-amber-500/10"
                          : "border-amber-500/20 hover:border-amber-500/40"
                      }`}
                    >
                      <p className="text-2xl font-bold text-amber-500">${option.amount}</p>
                      <p className="text-xs text-amber-200/60">{option.label}</p>
                    </button>
                  ))}
                </div>
                <input
                  type="email"
                  value={giftCardEmail}
                  onChange={(e) => setGiftCardEmail(e.target.value)}
                  placeholder="Recipient's email *"
                  className="w-full px-4 py-3 bg-[#1a1410] border border-amber-500/20 rounded-xl text-amber-100 placeholder:text-amber-200/30 focus:border-amber-500 focus:outline-none mb-4"
                />
                <textarea
                  value={giftCardMessage}
                  onChange={(e) => setGiftCardMessage(e.target.value)}
                  placeholder="Add a personal message (optional)"
                  rows={2}
                  className="w-full px-4 py-3 bg-[#1a1410] border border-amber-500/20 rounded-xl text-amber-100 placeholder:text-amber-200/30 focus:border-amber-500 focus:outline-none resize-none mb-4"
                />
                <motion.button
                  onClick={handleGiftCardPurchase}
                  disabled={giftCardLoading || !giftCardEmail}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-[#1a1410] font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {giftCardLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <CreditCard className="w-5 h-5" />
                  )}
                  {giftCardLoading ? "Processing..." : `Purchase $${selectedGiftAmount} Gift Card`}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loyalty Modal */}
      <AnimatePresence>
        {showLoyaltyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowLoyaltyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#1e1813] rounded-2xl overflow-hidden border border-amber-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">Savanna Rewards</h3>
                      <p className="text-amber-100 text-sm">Earn points, get perks</p>
                    </div>
                  </div>
                  <button onClick={() => setShowLoyaltyModal(false)} className="text-white/80 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-6 border border-amber-500/20">
                  <Image
                    src="/showcase/savanna-cafe/loyalty-card.png"
                    alt="Savanna Cafe loyalty card"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-amber-200/70 text-sm mb-6">
                  Earn 1 point for every $1 spent. Redeem for free items and exclusive experiences!
                </p>
                <div className="space-y-4">
                  {loyaltyTiers.map((tier, i) => (
                    <div
                      key={tier.name}
                      className={`p-4 rounded-xl border ${
                        i === 1 ? "border-amber-500 bg-amber-500/10" : "border-amber-500/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Coffee className={`w-5 h-5 ${i === 0 ? "text-amber-700" : i === 1 ? "text-amber-500" : "text-amber-300"}`} />
                          <span className="font-semibold text-amber-100">{tier.name}</span>
                        </div>
                        <span className="text-sm text-amber-200/60">{tier.points}+ points</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tier.benefits.map((benefit) => (
                          <span key={benefit} className="text-xs px-2 py-1 bg-amber-500/10 text-amber-300 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 mt-6 bg-gradient-to-r from-amber-500 to-orange-500 text-[#1a1410] font-bold rounded-xl"
                >
                  Join Savanna Rewards — It&apos;s Free!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to case studies */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/case-studies">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-lg rounded-full text-white/80 hover:text-white hover:bg-black/50 transition-all text-sm"
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
        className="fixed top-0 left-0 right-0 z-40 bg-[#1a1410]/80 backdrop-blur-lg border-b border-amber-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-serif font-bold text-amber-100">
                Savanna Café
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollToSection("menu")} className="text-amber-200/70 hover:text-amber-200 transition-colors">Menu</button>
              <button onClick={() => scrollToSection("events")} className="text-amber-200/70 hover:text-amber-200 transition-colors">Events</button>
              <button onClick={() => scrollToSection("about")} className="text-amber-200/70 hover:text-amber-200 transition-colors">About</button>
              <button onClick={() => scrollToSection("contact")} className="text-amber-200/70 hover:text-amber-200 transition-colors">Contact</button>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => setShowGiftCardModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex px-4 py-2 text-amber-400 font-medium text-sm items-center gap-2 hover:text-amber-300"
              >
                <Gift className="w-4 h-4" />
                Gift Cards
              </motion.button>
              <Link href="/showcase/savanna-cafe/reserve">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-amber-500 text-[#1a1410] font-semibold rounded-full hover:bg-amber-400 transition-colors text-sm"
                >
                  Reserve Table
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero background image */}
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/showcase/savanna-cafe/hero-cafe.png"
            alt="Savanna Cafe interior"
            fill
            className="object-cover hidden md:block"
            priority
          />
          <Image
            src="/showcase/savanna-cafe/hero-cafe-mobile.png"
            alt="Savanna Cafe interior"
            fill
            className="object-cover md:hidden"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a1f18]/70 via-[#1a1410]/80 to-[#1a1410]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent" />
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 border border-amber-500/10 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/3 w-64 h-64 border border-amber-500/5 rounded-full"
        />

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div
            style={{ opacity }}
            className="max-w-3xl"
          >
            {/* Live wait time indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <WaitTimeIndicator />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span className="text-amber-200/70 text-sm">4.9 rating • 500+ reviews</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-amber-50 mb-6 leading-tight"
            >
              Where African
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Flavors Meet
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-amber-200/60 mb-8 max-w-xl"
            >
              Experience the warmth of African hospitality with locally sourced ingredients, 
              specialty coffee, and recipes passed down through generations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link href="/showcase/savanna-cafe/menu">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-[#1a1410] font-bold rounded-full shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 hover:shadow-amber-500/50 transition-shadow"
                >
                  View Menu
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/showcase/savanna-cafe/reserve">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/5 text-amber-100 font-semibold rounded-full border border-amber-500/30 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Reserve Table
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 text-sm"
            >
              <button
                onClick={() => setShowLoyaltyModal(true)}
                className="flex items-center gap-2 text-amber-200/60 hover:text-amber-400 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Join Rewards
              </button>
              <span className="text-amber-500/30">•</span>
              <button
                onClick={() => setShowGiftCardModal(true)}
                className="flex items-center gap-2 text-amber-200/60 hover:text-amber-400 transition-colors"
              >
                <Gift className="w-4 h-4" />
                Gift Cards
              </button>
              <span className="text-amber-500/30">•</span>
              <div className="flex items-center gap-2 text-amber-200/50">
                <Clock className="w-4 h-4" />
                Open daily 7AM - 10PM
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating order QR */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
        >
          <div className="bg-[#1e1813]/80 backdrop-blur-lg rounded-2xl p-4 border border-amber-500/20">
            <div className="w-24 h-24 bg-amber-500/10 rounded-xl flex items-center justify-center mb-3">
              <QrCode className="w-12 h-12 text-amber-500/50" />
            </div>
            <p className="text-xs text-amber-200/60 text-center">Scan to order<br />at your table</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-amber-500/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-amber-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1e1813]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-amber-100 mb-1">{feature.label}</h3>
                <p className="text-sm text-amber-200/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-500 text-sm uppercase tracking-widest mb-4 block">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-4">
              Chef&apos;s Selection
            </h2>
            <p className="text-amber-200/50 max-w-xl mx-auto">
              Handcrafted dishes celebrating the rich culinary heritage of Africa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {menuHighlights.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-2xl overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {item.dietary.includes("vegan") && (
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Vegan</span>
                    )}
                    {item.dietary.includes("gluten-free") && (
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">GF</span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-500">${item.price}</span>
                      <p className="text-xs text-amber-200/40">{item.calories} cal</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-amber-200/50 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link href="/showcase/savanna-cafe/menu">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-amber-500 font-semibold rounded-full border-2 border-amber-500 hover:bg-amber-500 hover:text-[#1a1410] transition-all"
              >
                View Full Menu
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-amber-500/10 text-amber-400 font-semibold rounded-full border border-amber-500/30 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Menu PDF
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Events & Catering Section */}
      <section id="events" className="py-24 bg-[#1e1813]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-amber-500 text-sm uppercase tracking-widest mb-4 block">Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-4">
              Events & Catering
            </h2>
          </motion.div>

          {/* Tab Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-amber-900/20 rounded-full p-1 flex">
              <button
                onClick={() => setActiveTab("events")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "events" ? "bg-amber-500 text-[#1a1410]" : "text-amber-200/70"
                }`}
              >
                <Calendar className="w-4 h-4 inline mr-2" />
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("catering")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "catering" ? "bg-amber-500 text-[#1a1410]" : "text-amber-200/70"
                }`}
              >
                <ChefHat className="w-4 h-4 inline mr-2" />
                Catering
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "events" ? (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                {upcomingEvents.map((event, i) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-2xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all group cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur rounded-lg px-3 py-1">
                        <span className="text-xs text-amber-100">{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-center bg-amber-500/10 rounded-xl px-4 py-2">
                        <p className="text-xs text-amber-400 uppercase">{event.day}</p>
                        <p className="text-2xl font-bold text-amber-100">{event.date.split(' ')[1]}</p>
                      </div>
                      <event.icon className="w-8 h-8 text-amber-500/50" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-100 mb-1 group-hover:text-amber-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-amber-200/50 mb-3">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-amber-400">{event.time}</span>
                      <span className="text-xs text-amber-200/50">{event.spots} spots left</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="catering"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {cateringPackages.map((pkg, i) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-2xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-amber-100 mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-amber-500 mb-1">
                      {typeof pkg.price === "number" ? `$${pkg.price}` : pkg.price}
                    </p>
                    <p className="text-xs text-amber-200/50 mb-4">Serves {pkg.serves} people</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-amber-200/60">
                          <Check className="w-4 h-4 text-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/showcase/savanna-cafe/reserve">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-amber-500 text-[#1a1410] font-bold rounded-full"
              >
                {activeTab === "events" ? "Reserve for an Event" : "Inquire About Catering"}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-amber-500 text-sm uppercase tracking-widest mb-4 block">Reviews</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-4">
              What Our Guests Say
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-2xl p-8 border border-amber-500/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(reviews[activeReview].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-lg text-amber-100 mb-6 italic">&ldquo;{reviews[activeReview].text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-amber-100">{reviews[activeReview].name}</p>
                    <p className="text-sm text-amber-200/50">{reviews[activeReview].date}</p>
                  </div>
                  <button className="text-xs text-amber-400 flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {reviews[activeReview].helpful} found helpful
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeReview ? "bg-amber-500 w-8" : "bg-amber-500/20 hover:bg-amber-500/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#1e1813]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 text-sm uppercase tracking-widest mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-6">
                A Passion for African Cuisine
              </h2>
              <p className="text-amber-200/60 mb-6">
                Founded in 2018, Savanna Café was born from a simple dream: to share the rich, 
                diverse flavors of African cuisine with our community. What started as a small 
                coffee corner has grown into Harare&apos;s beloved gathering place.
              </p>
              <p className="text-amber-200/60 mb-8">
                We partner directly with local farmers and artisans, ensuring every dish tells 
                a story of our heritage while supporting sustainable practices.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">6+</div>
                  <div className="text-sm text-amber-200/50">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">50K+</div>
                  <div className="text-sm text-amber-200/50">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">15</div>
                  <div className="text-sm text-amber-200/50">Team Members</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {aboutImages.map((image, i) => (
                <div
                  key={image.src}
                  className={`${i === 0 ? "col-span-2" : ""} relative aspect-square rounded-2xl overflow-hidden`}
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

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm uppercase tracking-widest mb-4 block">Our Team</span>
              <h3 className="text-3xl font-serif font-bold text-amber-50">
                Meet the Culinary Artists
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-2xl p-6 border border-amber-500/10"
                >
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border border-amber-500/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-amber-100">{member.name}</h4>
                  <p className="text-amber-500 text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-amber-200/50 mb-3">{member.bio}</p>
                  <span className="text-xs px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full">
                    {member.specialty}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <span className="text-amber-500 text-sm uppercase tracking-widest mb-2 block">Follow Us</span>
              <h2 className="text-3xl font-serif font-bold text-amber-50">@savannacafe</h2>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-amber-400 hover:text-amber-300">
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {instagramPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gradient-to-br from-amber-900/40 to-orange-900/20 rounded-xl overflow-hidden cursor-pointer group relative"
              >
                <Image
                  src={post.image}
                  alt="Savanna Cafe Instagram post"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <span className="text-white text-sm flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-white" />
                    {post.likes}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gradient-to-r from-amber-900/30 to-orange-900/20 border-y border-amber-500/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-100">Stay in the Loop</h3>
                <p className="text-sm text-amber-200/60">Get updates on events, specials, and new menu items</p>
              </div>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 md:w-64 px-4 py-3 bg-[#1a1410] border border-amber-500/20 rounded-xl text-amber-100 placeholder:text-amber-200/30 focus:border-amber-500 focus:outline-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-amber-500 text-[#1a1410] font-semibold rounded-xl flex items-center gap-2"
              >
                {subscribed ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                {subscribed ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact & Reservation CTA */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 rounded-3xl p-12 md:p-16 border border-amber-500/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-50 mb-4">
                  Visit Us Today
                </h2>
                <p className="text-amber-200/50 mb-6">
                  Experience the warmth of African hospitality. Book online or walk in!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-amber-100">Shop 12, Sam Levy&apos;s Village</p>
                      <p className="text-sm text-amber-200/60">Borrowdale, Harare</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-amber-100">Daily 7:00 AM - 10:00 PM</p>
                      <p className="text-sm text-amber-200/60">Kitchen closes at 9:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-amber-100">+263 77 456 9384</p>
                      <p className="text-sm text-amber-200/60">For reservations & inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Link href="/showcase/savanna-cafe/reserve">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-[#1a1410] font-bold rounded-xl flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Reserve a Table
                  </motion.button>
                </Link>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    onClick={() => setShowGiftCardModal(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 bg-white/5 text-amber-100 font-semibold rounded-xl flex items-center justify-center gap-2 border border-amber-500/20"
                  >
                    <Gift className="w-5 h-5" />
                    Gift Card
                  </motion.button>
                  <motion.button
                    onClick={() => setShowLoyaltyModal(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-4 bg-white/5 text-amber-100 font-semibold rounded-xl flex items-center justify-center gap-2 border border-amber-500/20"
                  >
                    <Sparkles className="w-5 h-5" />
                    Rewards
                  </motion.button>
                </div>
                <div className="flex justify-center gap-4 pt-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-colors">
                    <Instagram className="w-5 h-5 text-amber-400" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-colors">
                    <Facebook className="w-5 h-5 text-amber-400" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-colors">
                    <Twitter className="w-5 h-5 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-serif font-bold text-amber-100">
                  Savanna Café
                </span>
              </div>
              <p className="text-sm text-amber-200/50">
                Where African flavors meet. Locally sourced, lovingly prepared.
              </p>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-amber-200/60">
                <li><Link href="/showcase/savanna-cafe/menu" className="hover:text-amber-400">Menu</Link></li>
                <li><Link href="/showcase/savanna-cafe/reserve" className="hover:text-amber-400">Reservations</Link></li>
                <li><button onClick={() => setShowGiftCardModal(true)} className="hover:text-amber-400">Gift Cards</button></li>
                <li><button onClick={() => setShowLoyaltyModal(true)} className="hover:text-amber-400">Rewards Program</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-sm text-amber-200/60">
                <li>Mon-Fri: 7:00 AM - 10:00 PM</li>
                <li>Sat-Sun: 8:00 AM - 11:00 PM</li>
                <li>Holidays: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-amber-200/60">
                <li>Shop 12, Sam Levy&apos;s Village</li>
                <li>Borrowdale, Harare</li>
                <li className="text-amber-400">hello@savannacafe.co.zw</li>
                <li>+263 77 456 9384</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-amber-900/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-amber-200/50">© 2026 Savanna Café. All rights reserved.</p>
            <p className="text-sm text-amber-200/30">
              This is a demo website template by{" "}
              <Link href="/" className="text-amber-500 hover:underline">Klama</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
