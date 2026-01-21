"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Coffee, Leaf, Flame, Clock, ShoppingBag } from "lucide-react";
import { useState } from "react";

const menuCategories = [
  { id: "breakfast", name: "Breakfast", icon: Coffee },
  { id: "mains", name: "Main Courses", icon: Flame },
  { id: "vegetarian", name: "Vegetarian", icon: Leaf },
  { id: "drinks", name: "Drinks", icon: Coffee },
  { id: "desserts", name: "Desserts", icon: Coffee },
];

const menuItems = {
  breakfast: [
    {
      name: "Sunrise Breakfast Platter",
      description: "Farm-fresh eggs, local sausages, grilled tomatoes, sautéed mushrooms, and sourdough toast",
      price: 12,
      tag: "Popular",
      dietary: [],
    },
    {
      name: "African Eggs Benedict",
      description: "Poached eggs on grilled chakalaka, hollandaise, and sadza cakes",
      price: 14,
      tag: "Chef's Pick",
      dietary: [],
    },
    {
      name: "Tropical Açaí Bowl",
      description: "Organic açaí, local fruits, granola, coconut flakes, and honey drizzle",
      price: 14,
      tag: "Vegan",
      dietary: ["vegan", "gluten-free"],
    },
    {
      name: "Avocado Toast Deluxe",
      description: "Smashed avocado, cherry tomatoes, feta, poached egg, on artisan sourdough",
      price: 11,
      tag: "",
      dietary: ["vegetarian"],
    },
    {
      name: "Savanna Omelette",
      description: "Three-egg omelette with cheese, onions, peppers, and your choice of bacon or mushrooms",
      price: 10,
      tag: "",
      dietary: [],
    },
    {
      name: "Banana Pancakes",
      description: "Fluffy pancakes with caramelized bananas, maple syrup, and whipped cream",
      price: 9,
      tag: "",
      dietary: ["vegetarian"],
    },
  ],
  mains: [
    {
      name: "Nyama Choma Bowl",
      description: "Flame-grilled beef with sadza, seasonal greens, chakalaka, and peanut butter relish",
      price: 18,
      tag: "Signature",
      dietary: ["gluten-free"],
    },
    {
      name: "Safari Grilled Chicken",
      description: "Marinated half chicken, peri-peri glaze, roasted vegetables, and hand-cut fries",
      price: 16,
      tag: "Popular",
      dietary: ["gluten-free"],
    },
    {
      name: "Cape Malay Lamb Curry",
      description: "Slow-braised lamb in fragrant spices, served with basmati rice and sambals",
      price: 22,
      tag: "Chef's Pick",
      dietary: ["gluten-free"],
    },
    {
      name: "Mozambican Prawns",
      description: "Jumbo prawns in garlic and peri-peri butter, rice, and fresh salad",
      price: 28,
      tag: "",
      dietary: ["gluten-free"],
    },
    {
      name: "Oxtail Stew",
      description: "Traditional slow-cooked oxtail, root vegetables, mashed potatoes",
      price: 24,
      tag: "Local Favorite",
      dietary: ["gluten-free"],
    },
    {
      name: "Fish of the Day",
      description: "Fresh catch, grilled or pan-fried, seasonal vegetables, lemon butter sauce",
      price: 20,
      tag: "",
      dietary: ["gluten-free"],
    },
  ],
  vegetarian: [
    {
      name: "Garden Buddha Bowl",
      description: "Quinoa, roasted vegetables, chickpeas, tahini dressing, and microgreens",
      price: 14,
      tag: "Vegan",
      dietary: ["vegan", "gluten-free"],
    },
    {
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms, parmesan, and truffle oil",
      price: 16,
      tag: "Popular",
      dietary: ["vegetarian", "gluten-free"],
    },
    {
      name: "Vegetable Curry",
      description: "Seasonal vegetables in coconut curry, basmati rice, naan bread",
      price: 13,
      tag: "Vegan",
      dietary: ["vegan"],
    },
    {
      name: "Grilled Halloumi Salad",
      description: "Golden halloumi, mixed greens, roasted beetroot, walnuts, honey dressing",
      price: 15,
      tag: "",
      dietary: ["vegetarian", "gluten-free"],
    },
    {
      name: "Stuffed Bell Peppers",
      description: "Bell peppers filled with spiced rice, beans, and cheese, tomato sauce",
      price: 14,
      tag: "",
      dietary: ["vegetarian", "gluten-free"],
    },
  ],
  drinks: [
    {
      name: "Ethiopian Coffee Ceremony",
      description: "Freshly roasted single-origin beans, traditional preparation, served with dates",
      price: 8,
      tag: "Signature",
      dietary: ["vegan"],
    },
    {
      name: "Zimbabwean Black Tea",
      description: "Premium local tea, served with honey and lemon",
      price: 4,
      tag: "",
      dietary: ["vegan"],
    },
    {
      name: "Fresh Mango Smoothie",
      description: "Ripe mangoes, yogurt, honey, and a hint of ginger",
      price: 7,
      tag: "Popular",
      dietary: ["vegetarian"],
    },
    {
      name: "Baobab Lemonade",
      description: "Refreshing lemonade infused with baobab and mint",
      price: 6,
      tag: "Unique",
      dietary: ["vegan"],
    },
    {
      name: "Rooibos Latte",
      description: "South African rooibos tea with steamed milk and vanilla",
      price: 5,
      tag: "",
      dietary: ["vegetarian"],
    },
    {
      name: "African Sunset Cocktail",
      description: "Amarula, passion fruit, orange juice, grenadine (Non-alcoholic available)",
      price: 10,
      tag: "",
      dietary: [],
    },
  ],
  desserts: [
    {
      name: "Malva Pudding",
      description: "Traditional South African sponge pudding with warm custard",
      price: 8,
      tag: "Signature",
      dietary: ["vegetarian"],
    },
    {
      name: "Koeksister Platter",
      description: "Sweet braided doughnuts soaked in syrup, served with vanilla ice cream",
      price: 7,
      tag: "Traditional",
      dietary: ["vegetarian"],
    },
    {
      name: "Tropical Fruit Pavlova",
      description: "Crisp meringue, whipped cream, fresh passion fruit, mango, and kiwi",
      price: 9,
      tag: "",
      dietary: ["vegetarian", "gluten-free"],
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, vanilla bean ice cream",
      price: 10,
      tag: "Popular",
      dietary: ["vegetarian"],
    },
    {
      name: "Amarula Cheesecake",
      description: "Creamy cheesecake infused with Amarula liqueur, chocolate drizzle",
      price: 9,
      tag: "",
      dietary: ["vegetarian"],
    },
  ],
};

export default function SavannaCafeMenu() {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const [cart, setCart] = useState<{ name: string; price: number; quantity: number }[]>([]);

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name, price, quantity: 1 }];
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
                <span className="text-sm">Back to Home</span>
              </motion.div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-serif font-bold text-amber-100">Menu</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-4 py-2 bg-amber-500 text-[#1a1410] font-semibold rounded-full text-sm flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              ${cartTotal.toFixed(2)}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-4">
              Our Menu
            </h1>
            <p className="text-amber-200/60 max-w-xl mx-auto">
              Fresh, locally-sourced ingredients prepared with love. Celebrating African flavors and traditions.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-amber-200/50">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Breakfast until 11:30 AM
              </span>
              <span>•</span>
              <span>Lunch & Dinner all day</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-[#1a1410]/95 backdrop-blur-lg py-4 border-b border-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {menuCategories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-amber-500 text-[#1a1410]"
                    : "bg-amber-900/20 text-amber-200/70 hover:bg-amber-900/40"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 rounded-2xl p-6 border border-amber-500/10 hover:border-amber-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {item.tag && (
                      <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full">
                        {item.tag}
                      </span>
                    )}
                    {item.dietary.includes("vegan") && (
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                        Vegan
                      </span>
                    )}
                    {item.dietary.includes("gluten-free") && (
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                        GF
                      </span>
                    )}
                  </div>
                  <span className="text-2xl font-bold text-amber-500">${item.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-amber-200/50 text-sm mb-4">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addToCart(item.name, item.price)}
                  className="w-full py-2 bg-amber-500/10 text-amber-500 font-medium rounded-lg border border-amber-500/20 hover:bg-amber-500 hover:text-[#1a1410] transition-all text-sm"
                >
                  Add to Order
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 border-t border-amber-900/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-amber-200/40 text-sm mb-4">
            All prices are in USD. Please inform our staff of any allergies.
          </p>
          <Link href="/showcase/savanna-cafe">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="text-amber-500 hover:text-amber-400 text-sm underline underline-offset-4"
            >
              Back to Savanna Café Home
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Demo Notice */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto">
        <div className="bg-[#1a1410]/95 backdrop-blur-lg border border-amber-500/20 rounded-xl p-4 text-center md:text-left">
          <p className="text-xs text-amber-200/50">
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

