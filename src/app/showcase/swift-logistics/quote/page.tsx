"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Truck, Package, MapPin, Scale, Box, Calendar, Calculator, Check, Loader2, Mail, Phone } from "lucide-react";

const serviceTypes = [
  { id: "express", name: "Express Delivery", time: "Same day / Next day", multiplier: 2.0 },
  { id: "standard", name: "Standard Delivery", time: "2-3 business days", multiplier: 1.0 },
  { id: "economy", name: "Economy", time: "5-7 business days", multiplier: 0.7 },
  { id: "freight", name: "Freight", time: "Custom timeline", multiplier: 0.5 },
];

const packageTypes = [
  { id: "document", name: "Documents", icon: "📄", maxWeight: 2 },
  { id: "small", name: "Small Parcel", icon: "📦", maxWeight: 10 },
  { id: "medium", name: "Medium Parcel", icon: "📦", maxWeight: 30 },
  { id: "large", name: "Large Parcel", icon: "📦", maxWeight: 70 },
  { id: "pallet", name: "Pallet", icon: "🏗️", maxWeight: 1000 },
];

const cities = [
  "Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru", "Kwekwe",
  "Kadoma", "Masvingo", "Chinhoyi", "Victoria Falls",
];

export default function SwiftLogisticsQuote() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<{ price: number; service: string; time: string } | null>(null);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    packageType: "",
    weight: "",
    service: "",
    pickupDate: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });

  const calculateQuote = () => {
    const baseRate = 5; // $5 base
    const perKgRate = 0.5;
    const selectedService = serviceTypes.find((s) => s.id === formData.service);
    const weight = parseFloat(formData.weight) || 1;
    
    let price = baseRate + weight * perKgRate;
    price *= selectedService?.multiplier || 1;
    
    // Distance factor (simplified)
    if (formData.origin !== formData.destination) {
      price *= 1.5;
    }
    
    return {
      price: Math.round(price * 100) / 100,
      service: selectedService?.name || "Standard",
      time: selectedService?.time || "2-3 days",
    };
  };

  const handleGetQuote = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setQuote(calculateQuote());
    setLoading(false);
    setStep(3);
  };

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-[#0a0e14]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e14]/95 backdrop-blur-lg border-b border-sky-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/showcase/swift-logistics" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back</span>
              </motion.div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Get<span className="text-sky-500">Quote</span>
              </span>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          {step < 4 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Get a Quote
                </h1>
                <p className="text-gray-400">
                  Instant pricing for your shipment
                </p>
              </motion.div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-4 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        step >= s
                          ? "bg-sky-500 text-white"
                          : "bg-gray-800 text-gray-500"
                      }`}
                    >
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    {s < 3 && (
                      <div className={`w-12 h-0.5 ${step > s ? "bg-sky-500" : "bg-gray-800"}`} />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 1: Shipment Details */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6 md:p-8"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Shipment Details</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Origin City
                    </label>
                    <select
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white focus:border-sky-500 focus:outline-none"
                    >
                      <option value="">Select city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Destination City
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white focus:border-sky-500 focus:outline-none"
                    >
                      <option value="">Select city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    <Box className="w-4 h-4 inline mr-2" />
                    Package Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {packageTypes.map((pkg) => (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, packageType: pkg.id })}
                        className={`p-4 rounded-xl border text-center transition-all ${
                          formData.packageType === pkg.id
                            ? "border-sky-500 bg-sky-500/10"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <span className="text-2xl block mb-1">{pkg.icon}</span>
                        <span className="text-sm text-white">{pkg.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    <Scale className="w-4 h-4 inline mr-2" />
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="Enter weight"
                    className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <motion.button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.origin || !formData.destination || !formData.packageType || !formData.weight}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-sky-500 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Service Selection */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6 md:p-8"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Select Service</h2>
              
              <div className="space-y-4 mb-6">
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: service.id })}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      formData.service === service.id
                        ? "border-sky-500 bg-sky-500/10"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div>
                      <span className="text-white font-medium">{service.name}</span>
                      <p className="text-sm text-gray-400">{service.time}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.service === service.id ? "border-sky-500 bg-sky-500" : "border-gray-600"
                    }`}>
                      {formData.service === service.id && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Pickup Date
                </label>
                <input
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={() => setStep(1)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 bg-gray-800 text-gray-300 font-semibold rounded-xl"
                >
                  Back
                </motion.button>
                <motion.button
                  type="button"
                  onClick={handleGetQuote}
                  disabled={!formData.service || loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 bg-sky-500 text-white font-semibold rounded-xl disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Calculator className="w-5 h-5" />
                      Get Quote
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Quote Result & Contact */}
          {step === 3 && quote && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Quote Display */}
              <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-2xl border border-sky-500/30 p-8 text-center">
                <p className="text-gray-400 mb-2">Estimated Price</p>
                <p className="text-5xl font-bold text-white mb-2">
                  ${quote.price.toFixed(2)}
                </p>
                <p className="text-sky-400">{quote.service} • {quote.time}</p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmitRequest} className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6 md:p-8">
                <h2 className="text-xl font-semibold text-white mb-6">Contact Details</h2>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Company (Optional)</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="+263 77 456 9384"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Additional Notes</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      placeholder="Special handling requirements, etc."
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      type="button"
                      onClick={() => setStep(2)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-gray-800 text-gray-300 font-semibold rounded-xl"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.phone || loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-sky-500 text-white font-semibold rounded-xl disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        "Submit Request"
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-green-400" />
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-2">Quote Submitted!</h1>
              <p className="text-gray-400 mb-8">
                Our team will contact you within 2 hours with a detailed quote.
              </p>
              <div className="bg-[#111827]/80 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <p className="text-gray-400 text-sm mb-2">Reference Number</p>
                <p className="text-xl font-mono font-bold text-sky-400">
                  QR-{Date.now().toString().slice(-8)}
                </p>
              </div>
              <Link href="/showcase/swift-logistics">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-sky-500 text-white font-semibold rounded-xl"
                >
                  Back to Home
                </motion.button>
              </Link>
            </motion.div>
          )}

          {/* Demo Notice */}
          <p className="text-center text-xs text-gray-600 mt-12">
            This is a demo website by{" "}
            <Link href="/" className="text-sky-500 hover:underline">
              Klama
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

