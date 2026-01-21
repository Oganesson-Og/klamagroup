"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mountain, Package, MapPin, Scale, Globe, Mail, Phone, Building, Check, Loader2, FileText, Truck } from "lucide-react";

const stoneTypes = [
  { id: "black-absolute", name: "Black Absolute Granite", origin: "Mutoko", color: "bg-gray-900" },
  { id: "zimbabwe-grey", name: "Zimbabwe Grey", origin: "Shamva", color: "bg-gray-500" },
  { id: "tropical-green", name: "Tropical Green", origin: "Nyanga", color: "bg-emerald-700" },
  { id: "african-red", name: "African Red", origin: "Bindura", color: "bg-red-800" },
  { id: "sunrise-gold", name: "Sunrise Gold", origin: "Hwange", color: "bg-amber-600" },
  { id: "custom", name: "Custom / Other", origin: "Various", color: "bg-gray-600" },
];

const finishTypes = [
  { id: "polished", name: "Polished" },
  { id: "honed", name: "Honed" },
  { id: "flamed", name: "Flamed" },
  { id: "brushed", name: "Brushed" },
  { id: "sandblasted", name: "Sandblasted" },
];

const countries = [
  "South Africa", "Botswana", "Namibia", "Mozambique", "Zambia",
  "United Arab Emirates", "Saudi Arabia", "China", "India", "United Kingdom",
  "United States", "Germany", "France", "Italy", "Other"
];

const quantityUnits = [
  { id: "sqm", name: "Square Meters (m²)" },
  { id: "tonnes", name: "Tonnes" },
  { id: "containers", name: "Containers (20ft)" },
  { id: "slabs", name: "Slabs" },
];

export default function GraniteMiningQuote() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    stoneType: "",
    finish: "",
    quantity: "",
    quantityUnit: "sqm",
    dimensions: "",
    // Shipping
    destination: "",
    deliveryAddress: "",
    incoterms: "FOB",
    // Contact
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0f0d] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-emerald-400" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">Quote Request Received!</h1>
          <p className="text-gray-400 mb-6">
            Our export team will prepare a detailed quotation and send it to {formData.email} within 24-48 hours.
          </p>
          <div className="bg-white/5 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-semibold text-white mb-4">Request Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Reference</span>
                <span className="text-emerald-400 font-mono">QT-{Date.now().toString().slice(-8)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Stone Type</span>
                <span className="text-white">{stoneTypes.find(s => s.id === formData.stoneType)?.name || formData.stoneType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Quantity</span>
                <span className="text-white">{formData.quantity} {formData.quantityUnit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Destination</span>
                <span className="text-white">{formData.destination}</span>
              </div>
            </div>
          </div>
          <Link href="/showcase/granite-mining">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f0d]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f0d]/95 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/showcase/granite-mining" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back</span>
              </motion.div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Request<span className="text-emerald-500">Quote</span>
              </span>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Request Export Quote
            </h1>
            <p className="text-gray-400">
              Get detailed pricing for premium Zimbabwean granite
            </p>
          </motion.div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s ? "bg-emerald-500 text-white" : "bg-gray-800 text-gray-500"
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-emerald-500" : "bg-gray-800"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Product Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Product Selection</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">
                      <Mountain className="w-4 h-4 inline mr-2" />
                      Stone Type *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {stoneTypes.map((stone) => (
                        <button
                          key={stone.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, stoneType: stone.id })}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            formData.stoneType === stone.id
                              ? "border-emerald-500 bg-emerald-500/10"
                              : "border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg ${stone.color} mb-2`} />
                          <span className="text-sm text-white block">{stone.name}</span>
                          <span className="text-xs text-gray-500">{stone.origin}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-3">Finish Type *</label>
                    <div className="flex flex-wrap gap-2">
                      {finishTypes.map((finish) => (
                        <button
                          key={finish.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, finish: finish.id })}
                          className={`px-4 py-2 rounded-lg text-sm transition-all ${
                            formData.finish === finish.id
                              ? "bg-emerald-500 text-white"
                              : "bg-white/5 text-gray-300 hover:bg-white/10"
                          }`}
                        >
                          {finish.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Scale className="w-4 h-4 inline mr-2" />
                        Quantity *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="100"
                          className="flex-1 px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                        />
                        <select
                          value={formData.quantityUnit}
                          onChange={(e) => setFormData({ ...formData, quantityUnit: e.target.value })}
                          className="px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white focus:border-emerald-500 focus:outline-none"
                        >
                          {quantityUnits.map((unit) => (
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Package className="w-4 h-4 inline mr-2" />
                        Dimensions (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.dimensions}
                        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                        placeholder="e.g., 60x60cm, 30x30cm"
                        className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.stoneType || !formData.finish || !formData.quantity}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-emerald-500 text-white font-semibold rounded-xl disabled:opacity-50"
                  >
                    Continue
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Shipping */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Shipping Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      Destination Country *
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="">Select country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Delivery Address / Port
                    </label>
                    <input
                      type="text"
                      value={formData.deliveryAddress}
                      onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                      placeholder="City, Port name, or full address"
                      className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <Truck className="w-4 h-4 inline mr-2" />
                      Incoterms Preference
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["FOB", "CIF", "CFR", "DDP", "EXW"].map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => setFormData({ ...formData, incoterms: term })}
                          className={`px-4 py-2 rounded-lg text-sm transition-all ${
                            formData.incoterms === term
                              ? "bg-emerald-500 text-white"
                              : "bg-white/5 text-gray-300 hover:bg-white/10"
                          }`}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <motion.button
                      type="button"
                      onClick={() => setStep(1)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-white/5 text-gray-300 font-semibold rounded-xl"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.destination}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-emerald-500 text-white font-semibold rounded-xl disabled:opacity-50"
                    >
                      Continue
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Position / Title</label>
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        placeholder="Procurement Manager"
                        className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      placeholder="Your Company Ltd"
                      className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                    />
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
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
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
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Additional Requirements</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder="Any specific requirements, certifications needed, project timeline, etc."
                      className="w-full px-4 py-3 bg-[#0a0f0d] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-emerald-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <motion.button
                      type="button"
                      onClick={() => setStep(2)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-white/5 text-gray-300 font-semibold rounded-xl"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.phone || !formData.company || loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-emerald-500 text-white font-semibold rounded-xl disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        "Submit Quote Request"
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </form>

          {/* Demo Notice */}
          <p className="text-center text-xs text-gray-600 mt-12">
            This is a demo website by{" "}
            <Link href="/" className="text-emerald-500 hover:underline">
              Klama
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

