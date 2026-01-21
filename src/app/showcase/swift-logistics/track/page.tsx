"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Truck, Package, MapPin, Clock, CheckCircle, Search, AlertCircle, Phone, Calendar, Navigation } from "lucide-react";

// Demo tracking data
const demoShipments: Record<string, {
  id: string;
  status: "processing" | "in_transit" | "out_for_delivery" | "delivered";
  origin: string;
  destination: string;
  estimatedDelivery: string;
  weight: string;
  service: string;
  history: { status: string; location: string; time: string; completed: boolean }[];
}> = {
  "SL-2026-08754": {
    id: "SL-2026-08754",
    status: "out_for_delivery",
    origin: "Msasa Industrial Park, Harare",
    destination: "123 Samora Machel Ave, Harare",
    estimatedDelivery: "Today, 4:00 PM",
    weight: "12.5 kg",
    service: "Express Delivery",
    history: [
      { status: "Order Received", location: "Harare Hub", time: "Jan 8, 2026 08:00 AM", completed: true },
      { status: "Package Processed", location: "Harare Hub", time: "Jan 8, 2026 09:15 AM", completed: true },
      { status: "In Transit", location: "En route to destination", time: "Jan 8, 2026 10:30 AM", completed: true },
      { status: "Out for Delivery", location: "Harare - Downtown", time: "Jan 8, 2026 02:15 PM", completed: true },
      { status: "Delivered", location: "123 Samora Machel Ave", time: "Est. 4:00 PM", completed: false },
    ],
  },
  "SL-2026-12345": {
    id: "SL-2026-12345",
    status: "in_transit",
    origin: "Bulawayo Depot",
    destination: "Gweru CBD",
    estimatedDelivery: "Jan 10, 2026",
    weight: "45.0 kg",
    service: "Standard Freight",
    history: [
      { status: "Order Received", location: "Bulawayo Depot", time: "Jan 7, 2026 02:00 PM", completed: true },
      { status: "Package Processed", location: "Bulawayo Depot", time: "Jan 7, 2026 04:30 PM", completed: true },
      { status: "In Transit", location: "En route to Gweru", time: "Jan 8, 2026 06:00 AM", completed: true },
      { status: "Arrived at Hub", location: "Gweru Hub", time: "Pending", completed: false },
      { status: "Out for Delivery", location: "Gweru CBD", time: "Pending", completed: false },
      { status: "Delivered", location: "Destination", time: "Pending", completed: false },
    ],
  },
  "SL-2026-99999": {
    id: "SL-2026-99999",
    status: "delivered",
    origin: "Johannesburg, SA",
    destination: "Harare CBD",
    estimatedDelivery: "Delivered",
    weight: "120.0 kg",
    service: "Cross-Border Freight",
    history: [
      { status: "Order Received", location: "Johannesburg Hub", time: "Jan 2, 2026 10:00 AM", completed: true },
      { status: "Customs Clearance", location: "Beitbridge Border", time: "Jan 3, 2026 08:00 AM", completed: true },
      { status: "In Transit", location: "En route to Harare", time: "Jan 3, 2026 02:00 PM", completed: true },
      { status: "Arrived at Hub", location: "Harare Hub", time: "Jan 4, 2026 06:00 AM", completed: true },
      { status: "Out for Delivery", location: "Harare CBD", time: "Jan 4, 2026 09:00 AM", completed: true },
      { status: "Delivered", location: "Harare CBD", time: "Jan 4, 2026 11:30 AM", completed: true },
    ],
  },
};

const statusColors = {
  processing: "bg-yellow-500/20 text-yellow-400",
  in_transit: "bg-blue-500/20 text-blue-400",
  out_for_delivery: "bg-sky-500/20 text-sky-400",
  delivered: "bg-green-500/20 text-green-400",
};

const statusLabels = {
  processing: "Processing",
  in_transit: "In Transit",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
};

export default function SwiftLogisticsTrack() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState<typeof demoShipments["SL-2026-08754"] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShipment(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const found = demoShipments[trackingNumber.toUpperCase()];
    if (found) {
      setShipment(found);
    } else {
      setError("Tracking number not found. Try: SL-2026-08754, SL-2026-12345, or SL-2026-99999");
    }
    setLoading(false);
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
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Track<span className="text-sky-500">Shipment</span>
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
              Track Your Shipment
            </h1>
            <p className="text-gray-400">
              Enter your tracking number to see real-time updates
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSearch}
            className="mb-8"
          >
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., SL-2026-08754)"
                  className="w-full pl-12 pr-4 py-4 bg-[#111827] border border-sky-500/20 rounded-xl text-white placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <motion.button
                type="submit"
                disabled={!trackingNumber || loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 bg-sky-500 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                Track
              </motion.button>
            </div>
          </motion.form>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-400">{error}</p>
            </motion.div>
          )}

          {/* Shipment Details */}
          {shipment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Status Header */}
              <div className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Tracking Number</p>
                    <p className="text-xl font-bold text-white">{shipment.id}</p>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${statusColors[shipment.status]}`}>
                    {statusLabels[shipment.status]}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Origin</p>
                      <p className="text-white">{shipment.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <Navigation className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Destination</p>
                      <p className="text-white">{shipment.destination}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-800">
                  <div>
                    <p className="text-gray-500 text-sm">Est. Delivery</p>
                    <p className="text-white font-medium">{shipment.estimatedDelivery}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Weight</p>
                    <p className="text-white font-medium">{shipment.weight}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Service</p>
                    <p className="text-white font-medium">{shipment.service}</p>
                  </div>
                </div>
              </div>

              {/* Tracking History */}
              <div className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-sky-500/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Shipment History</h3>
                <div className="relative">
                  {shipment.history.map((event, i) => (
                    <div key={i} className="flex items-start gap-4 mb-6 last:mb-0">
                      <div className="relative">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            event.completed
                              ? "bg-sky-500"
                              : i === shipment.history.findIndex((e) => !e.completed)
                              ? "bg-sky-500 animate-pulse"
                              : "bg-gray-700"
                          }`}
                        >
                          {event.completed ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <div className={`w-2 h-2 rounded-full ${i === shipment.history.findIndex((e) => !e.completed) ? "bg-white" : "bg-gray-500"}`} />
                          )}
                        </div>
                        {i < shipment.history.length - 1 && (
                          <div
                            className={`absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-10 ${
                              event.completed ? "bg-sky-500" : "bg-gray-700"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className={`font-medium ${event.completed ? "text-white" : "text-gray-500"}`}>
                              {event.status}
                            </p>
                            <p className="text-sm text-gray-500">{event.location}</p>
                          </div>
                          <p className="text-sm text-gray-500">{event.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+263242789456" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-sky-500/10 text-sky-400 font-semibold rounded-xl border border-sky-500/20 flex items-center justify-center gap-2 hover:bg-sky-500/20 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Support
                  </motion.button>
                </a>
                <Link href="/showcase/swift-logistics" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#111827] text-gray-300 font-semibold rounded-xl border border-gray-700 flex items-center justify-center gap-2 hover:bg-[#1a2535] transition-colors"
                  >
                    Track Another
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}

          {/* Demo Notice */}
          <p className="text-center text-xs text-gray-600 mt-12">
            Demo tracking numbers: SL-2026-08754, SL-2026-12345, SL-2026-99999
            <br />
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

