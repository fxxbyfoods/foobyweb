'use client';

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ACCENT = "#C4161C";

/* ================= PRODUCT DATA ================= */
const products = [
  {
    name: "Apple Puree",
    slug: "apple-puree",
    age: "6+ months",
    description: "Smooth, naturally sweet and easy on tiny tummies.",
    image: `${process.env.PUBLIC_URL}/images/products/1.png`,
  },
  {
    name: "Banana Mash",
    slug: "banana-mash",
    age: "6+ months",
    description: "Naturally creamy and full of energy.",
    image: `${process.env.PUBLIC_URL}/images/products/2.png`,
  },
  {
    name: "Rice Cereal",
    slug: "rice-cereal",
    age: "4+ months",
    description: "Light, gentle first food for starting solids.",
    image: `${process.env.PUBLIC_URL}/images/products/3.png`,
  },
  {
    name: "Mixed Veg Blend",
    slug: "mixed-veg",
    age: "8+ months",
    description: "Balanced veggies for growing taste buds.",
    image: `${process.env.PUBLIC_URL}/images/products/4.png`,
  },
];

/* ================= ANIMATION ================= */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF7F4] text-gray-800">
      <Navbar />

      {/* PAGE INTRO */}
      <section className="pt-24 pb-14 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Our foods for little ones 🍎
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Simple, honest ingredients. Made for tiny tummies and growing smiles.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <main className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div
              key={product.slug}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <Link to={`/products/${product.slug}`} className="block">
                <div className="aspect-[4/3] overflow-hidden bg-[#FFF1EC]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-1">
                    {product.age}
                  </p>
                  <h2 className="text-xl font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>

                  <span
                    className="inline-block text-sm font-medium"
                    style={{ color: ACCENT }}
                  >
                    View details →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
