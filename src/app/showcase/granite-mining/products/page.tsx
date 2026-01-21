"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mountain, Download, Eye, ChevronRight, Check, MapPin, FileText } from "lucide-react";

const products = [
  {
    id: "black-absolute",
    name: "Black Absolute Granite",
    origin: "Mutoko",
    color: "bg-gray-900",
    description: "Premium jet-black granite with consistent coloring and minimal veining. Perfect for luxury countertops, monuments, and architectural facades.",
    applications: ["Countertops", "Monuments", "Floor tiles", "Facades"],
    finishes: ["Polished", "Honed", "Flamed"],
    specs: {
      density: "2.85 g/cm³",
      absorption: "0.15%",
      flexuralStrength: "18 MPa",
      compressiveStrength: "220 MPa",
    },
  },
  {
    id: "zimbabwe-grey",
    name: "Zimbabwe Grey",
    origin: "Shamva",
    color: "bg-gray-500",
    description: "Elegant medium-grey granite with subtle crystalline patterns. Versatile choice for both interior and exterior applications.",
    applications: ["Kitchen counters", "Bathroom vanities", "Paving", "Cladding"],
    finishes: ["Polished", "Honed", "Brushed", "Flamed"],
    specs: {
      density: "2.75 g/cm³",
      absorption: "0.20%",
      flexuralStrength: "16 MPa",
      compressiveStrength: "200 MPa",
    },
  },
  {
    id: "tropical-green",
    name: "Tropical Green",
    origin: "Nyanga",
    color: "bg-emerald-700",
    description: "Distinctive green granite with natural veining. Unique aesthetic for statement pieces and luxury installations.",
    applications: ["Feature walls", "Decorative pieces", "High-end countertops", "Sculptures"],
    finishes: ["Polished", "Honed"],
    specs: {
      density: "2.80 g/cm³",
      absorption: "0.18%",
      flexuralStrength: "17 MPa",
      compressiveStrength: "210 MPa",
    },
  },
  {
    id: "african-red",
    name: "African Red",
    origin: "Bindura",
    color: "bg-red-800",
    description: "Warm reddish-brown granite with characteristic patterns. Adds warmth and character to any space.",
    applications: ["Interior flooring", "Fireplaces", "Accent walls", "Outdoor features"],
    finishes: ["Polished", "Flamed", "Sandblasted"],
    specs: {
      density: "2.78 g/cm³",
      absorption: "0.22%",
      flexuralStrength: "15 MPa",
      compressiveStrength: "195 MPa",
    },
  },
  {
    id: "sunrise-gold",
    name: "Sunrise Gold",
    origin: "Hwange",
    color: "bg-amber-600",
    description: "Stunning golden-yellow granite with natural sparkle. Creates bright, inviting spaces.",
    applications: ["Lobbies", "Retail spaces", "Residential counters", "Outdoor cladding"],
    finishes: ["Polished", "Honed", "Brushed"],
    specs: {
      density: "2.72 g/cm³",
      absorption: "0.25%",
      flexuralStrength: "14 MPa",
      compressiveStrength: "185 MPa",
    },
  },
  {
    id: "midnight-blue",
    name: "Midnight Blue",
    origin: "Masvingo",
    color: "bg-slate-800",
    description: "Rare dark blue-grey granite with subtle blue undertones. Exclusive choice for premium projects.",
    applications: ["Luxury countertops", "Jewelry displays", "Corporate lobbies", "Art installations"],
    finishes: ["Polished", "Honed"],
    specs: {
      density: "2.82 g/cm³",
      absorption: "0.16%",
      flexuralStrength: "19 MPa",
      compressiveStrength: "225 MPa",
    },
  },
];

export default function GraniteProducts() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

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
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Product<span className="text-emerald-500">Catalog</span>
              </span>
            </div>
            <Link href="/showcase/granite-mining/quote">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg text-sm"
              >
                Get Quote
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Premium Stone Collection
            </h1>
            <p className="text-gray-400">
              Explore our range of high-quality Zimbabwean granite
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product List */}
            <div className="space-y-3">
              {products.map((product, i) => (
                <motion.button
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${
                    selectedProduct.id === product.id
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg ${product.color}`} />
                  <div>
                    <span className="text-white font-medium block">{product.name}</span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {product.origin}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                    selectedProduct.id === product.id ? "rotate-90 text-emerald-500" : "text-gray-500"
                  }`} />
                </motion.button>
              ))}
            </div>

            {/* Product Details */}
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
            >
              {/* Product Image */}
              <div className={`h-48 ${selectedProduct.color} flex items-center justify-center`}>
                <div 
                  className="w-full h-full opacity-40"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
                    <p className="text-emerald-500 flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" />
                      Origin: {selectedProduct.origin}
                    </p>
                  </div>
                  <Link href="/showcase/granite-mining/quote">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg text-sm flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Request Quote
                    </motion.button>
                  </Link>
                </div>

                <p className="text-gray-400 mb-6">{selectedProduct.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm text-gray-500 uppercase mb-3">Applications</h3>
                    <ul className="space-y-2">
                      {selectedProduct.applications.map((app) => (
                        <li key={app} className="flex items-center gap-2 text-white">
                          <Check className="w-4 h-4 text-emerald-500" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 uppercase mb-3">Available Finishes</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.finishes.map((finish) => (
                        <span key={finish} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                          {finish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-sm text-gray-500 uppercase mb-3">Technical Specifications</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Density</p>
                      <p className="text-white font-medium">{selectedProduct.specs.density}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Water Absorption</p>
                      <p className="text-white font-medium">{selectedProduct.specs.absorption}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Flexural Strength</p>
                      <p className="text-white font-medium">{selectedProduct.specs.flexuralStrength}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Compressive Strength</p>
                      <p className="text-white font-medium">{selectedProduct.specs.compressiveStrength}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-white/5 text-gray-300 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Datasheet
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-white/5 text-gray-300 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    View Gallery
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

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

