"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Coffee, Calendar, Clock, Users, Phone, Mail, Check, Loader2 } from "lucide-react";

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, "9+"];

export default function SavannaCafeReservation() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
  };

  const today = new Date().toISOString().split("T")[0];

  if (success) {
    return (
      <div className="min-h-screen bg-[#1a1410] flex items-center justify-center px-4">
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
          <h1 className="text-3xl font-serif font-bold text-amber-50 mb-2">
            Reservation Confirmed!
          </h1>
          <p className="text-amber-200/60 mb-6">
            We&apos;ve sent a confirmation to {formData.email}. We look forward to seeing you!
          </p>
          <div className="bg-amber-900/20 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-semibold text-amber-100 mb-4">Reservation Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-amber-200/50">Date</span>
                <span className="text-amber-100">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-200/50">Time</span>
                <span className="text-amber-100">{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-200/50">Guests</span>
                <span className="text-amber-100">{formData.guests} people</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-200/50">Name</span>
                <span className="text-amber-100">{formData.name}</span>
              </div>
            </div>
          </div>
          <Link href="/showcase/savanna-cafe">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-amber-500 text-[#1a1410] font-semibold rounded-full"
            >
              Back to Savanna Café
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1410]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1410]/95 backdrop-blur-lg border-b border-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/showcase/savanna-cafe" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-amber-200/70 hover:text-amber-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back</span>
              </motion.div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-serif font-bold text-amber-100">Reserve</span>
            </div>
            <div className="w-20" /> {/* Spacer */}
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
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-50 mb-2">
              Reserve Your Table
            </h1>
            <p className="text-amber-200/60">
              Book your dining experience at Savanna Café
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step >= s
                      ? "bg-amber-500 text-[#1a1410]"
                      : "bg-amber-900/30 text-amber-200/50"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-12 h-0.5 ${
                      step > s ? "bg-amber-500" : "bg-amber-900/30"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-2xl p-6 md:p-8 border border-amber-500/20"
            >
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-amber-100 mb-4">
                    Select Date & Time
                  </h2>
                  
                  <div>
                    <label className="block text-sm text-amber-200/70 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#1a1410] border border-amber-500/20 rounded-xl text-amber-100 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-amber-200/70 mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Time
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`py-2 px-3 rounded-lg text-sm transition-all ${
                            formData.time === time
                              ? "bg-amber-500 text-[#1a1410]"
                              : "bg-amber-900/20 text-amber-200/70 hover:bg-amber-900/40"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-amber-200/70 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Number of Guests
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {guestOptions.map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setFormData({ ...formData, guests: typeof n === 'number' ? n : 9 })}
                          className={`w-12 h-12 rounded-full text-sm font-medium transition-all ${
                            formData.guests === (typeof n === 'number' ? n : 9)
                              ? "bg-amber-500 text-[#1a1410]"
                              : "bg-amber-900/20 text-amber-200/70 hover:bg-amber-900/40"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep(2)}
                    disabled={!formData.date || !formData.time}
                    className="w-full py-4 bg-amber-500 text-[#1a1410] font-semibold rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </motion.button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-amber-100 mb-4">
                    Your Details
                  </h2>
                  
                  <div>
                    <label className="block text-sm text-amber-200/70 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-[#1a1410] border border-amber-500/20 rounded-xl text-amber-100 placeholder:text-amber-200/30 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-amber-200/70 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@email.com"
                      className="w-full px-4 py-3 bg-[#1a1410] border border-amber-500/20 rounded-xl text-amber-100 placeholder:text-amber-200/30 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-amber-200/70 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+263 77 456 9384"
                      className="w-full px-4 py-3 bg-[#1a1410] border border-amber-500/20 rounded-xl text-amber-100 placeholder:text-amber-200/30 focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-amber-200/70 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      rows={3}
                      placeholder="Birthday celebration, dietary requirements, etc."
                      className="w-full px-4 py-3 bg-[#1a1410] border border-amber-500/20 rounded-xl text-amber-100 placeholder:text-amber-200/30 focus:border-amber-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 bg-amber-900/30 text-amber-200 font-semibold rounded-full"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(3)}
                      disabled={!formData.name || !formData.email || !formData.phone}
                      className="flex-1 py-4 bg-amber-500 text-[#1a1410] font-semibold rounded-full disabled:opacity-50"
                    >
                      Continue
                    </motion.button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-amber-100 mb-4">
                    Confirm Reservation
                  </h2>

                  <div className="bg-[#1a1410] rounded-xl p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200/50">Date</span>
                      <span className="text-amber-100">{formData.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200/50">Time</span>
                      <span className="text-amber-100">{formData.time}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200/50">Guests</span>
                      <span className="text-amber-100">{formData.guests} people</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200/50">Name</span>
                      <span className="text-amber-100">{formData.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200/50">Email</span>
                      <span className="text-amber-100">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-200/50">Phone</span>
                      <span className="text-amber-100">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep(2)}
                      className="flex-1 py-4 bg-amber-900/30 text-amber-200 font-semibold rounded-full"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      className="flex-1 py-4 bg-amber-500 text-[#1a1410] font-semibold rounded-full flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Confirm Reservation"
                      )}
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          </form>

          {/* Demo Notice */}
          <p className="text-center text-xs text-amber-200/30 mt-8">
            This is a demo website by{" "}
            <Link href="/" className="text-amber-500 hover:underline">
              Klama
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
