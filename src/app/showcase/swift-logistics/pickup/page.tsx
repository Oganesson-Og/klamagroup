"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Truck, Package, MapPin, Calendar, Clock, User, Mail, Phone, Building, Check, Loader2 } from "lucide-react";

const timeWindows = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

export default function SwiftLogisticsPickup() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Sender
    senderName: "",
    senderPhone: "",
    senderEmail: "",
    senderCompany: "",
    pickupAddress: "",
    pickupCity: "",
    pickupDate: "",
    pickupTime: "",
    // Recipient
    recipientName: "",
    recipientPhone: "",
    recipientAddress: "",
    recipientCity: "",
    // Package
    packageDescription: "",
    weight: "",
    specialInstructions: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const today = new Date().toISOString().split("T")[0];

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0e14] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-green-400" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">Pickup Scheduled!</h1>
          <p className="text-gray-400 mb-6">
            Your pickup has been confirmed. Our driver will arrive during your selected time window.
          </p>
          <div className="bg-[#111827]/80 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-semibold text-white mb-4">Pickup Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Reference</span>
                <span className="text-sky-400 font-mono">PU-{Date.now().toString().slice(-8)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date</span>
                <span className="text-white">{formData.pickupDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time</span>
                <span className="text-white">{formData.pickupTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">From</span>
                <span className="text-white">{formData.pickupCity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">To</span>
                <span className="text-white">{formData.recipientCity}</span>
              </div>
            </div>
          </div>
          <Link href="/showcase/swift-logistics">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-xl"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

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
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Request<span className="text-sky-500">Pickup</span>
              </span>
            </div>
            <div className="w-20" />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Request a Pickup
            </h1>
            <p className="text-gray-400">
              Schedule a pickup and we&apos;ll come to you
            </p>
          </motion.div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s ? "bg-sky-500 text-white" : "bg-gray-800 text-gray-500"
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-sky-500" : "bg-gray-800"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Sender & Pickup */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Sender & Pickup Details</h2>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.senderName}
                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.senderCompany}
                        onChange={(e) => setFormData({ ...formData, senderCompany: e.target.value })}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.senderPhone}
                        onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                        required
                        placeholder="+263 77 456 9384"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                        required
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Pickup Address *
                    </label>
                    <input
                      type="text"
                      value={formData.pickupAddress}
                      onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                      required
                      placeholder="123 Main Street, Building Name"
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">City *</label>
                    <select
                      value={formData.pickupCity}
                      onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white focus:border-sky-500 focus:outline-none"
                    >
                      <option value="">Select city</option>
                      <option value="Harare">Harare</option>
                      <option value="Bulawayo">Bulawayo</option>
                      <option value="Mutare">Mutare</option>
                      <option value="Gweru">Gweru</option>
                      <option value="Masvingo">Masvingo</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Pickup Date *
                      </label>
                      <input
                        type="date"
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        min={today}
                        required
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Time Window *
                      </label>
                      <select
                        value={formData.pickupTime}
                        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white focus:border-sky-500 focus:outline-none"
                      >
                        <option value="">Select time</option>
                        {timeWindows.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.senderName || !formData.senderPhone || !formData.senderEmail || !formData.pickupAddress || !formData.pickupCity || !formData.pickupDate || !formData.pickupTime}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-sky-500 text-white font-semibold rounded-xl disabled:opacity-50"
                  >
                    Continue
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Recipient */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Recipient Details</h2>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Recipient Name *</label>
                      <input
                        type="text"
                        value={formData.recipientName}
                        onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                        required
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Recipient Phone *</label>
                      <input
                        type="tel"
                        value={formData.recipientPhone}
                        onChange={(e) => setFormData({ ...formData, recipientPhone: e.target.value })}
                        required
                        placeholder="+263 77 987 6543"
                        className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Delivery Address *</label>
                    <input
                      type="text"
                      value={formData.recipientAddress}
                      onChange={(e) => setFormData({ ...formData, recipientAddress: e.target.value })}
                      required
                      placeholder="456 Other Street"
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Destination City *</label>
                    <select
                      value={formData.recipientCity}
                      onChange={(e) => setFormData({ ...formData, recipientCity: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white focus:border-sky-500 focus:outline-none"
                    >
                      <option value="">Select city</option>
                      <option value="Harare">Harare</option>
                      <option value="Bulawayo">Bulawayo</option>
                      <option value="Mutare">Mutare</option>
                      <option value="Gweru">Gweru</option>
                      <option value="Masvingo">Masvingo</option>
                    </select>
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
                      onClick={() => setStep(3)}
                      disabled={!formData.recipientName || !formData.recipientPhone || !formData.recipientAddress || !formData.recipientCity}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-sky-500 text-white font-semibold rounded-xl disabled:opacity-50"
                    >
                      Continue
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Package & Confirm */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-6">Package Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      <Package className="w-4 h-4 inline mr-2" />
                      Package Description *
                    </label>
                    <input
                      type="text"
                      value={formData.packageDescription}
                      onChange={(e) => setFormData({ ...formData, packageDescription: e.target.value })}
                      required
                      placeholder="e.g., Documents, Electronics, Clothing"
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Estimated Weight (kg)</label>
                    <input
                      type="number"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      placeholder="5"
                      className="w-full px-4 py-3 bg-[#0a0e14] border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Special Instructions</label>
                    <textarea
                      value={formData.specialInstructions}
                      onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                      rows={3}
                      placeholder="Fragile items, gate code, etc."
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
                      disabled={!formData.packageDescription || loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-4 bg-sky-500 text-white font-semibold rounded-xl disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        "Schedule Pickup"
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
            <Link href="/" className="text-sky-500 hover:underline">
              Klama
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
