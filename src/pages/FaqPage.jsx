'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#C4161C";

const faqs = [
  {
    category: "Product & Ingredients",
    items: [
      {
        q: "What ingredients do you use?",
        a: "We use simple, real ingredients with no artificial additives. Every recipe is designed to support early nutrition with clarity and transparency.",
      },
      {
        q: "Do your products contain preservatives?",
        a: "No. Fooby products are made without artificial preservatives, added sugars, or unnecessary fillers.",
      },
      {
        q: "Is Fooby organic?",
        a: "We prioritize high-quality sourcing and clean processing. Specific organic certifications will always be clearly mentioned on the product.",
      },
      {
        q: "Are there added sugars or salt?",
        a: "Never. Babies do not need added sugars or salt, so we don’t include them.",
      },
    ],
  },
  {
    category: "Feeding & Safety",
    items: [
      {
        q: "What age is this suitable for?",
        a: "Each product clearly mentions the recommended age range. Always consult your pediatrician before introducing new foods.",
      },
      {
        q: "How do I introduce solids safely?",
        a: "Start gradually, introduce one ingredient at a time, and monitor for reactions. Our textures are designed for smooth transitions.",
      },
      {
        q: "Are your products allergen tested?",
        a: "We follow strict safety standards. Please check packaging for allergen information before feeding.",
      },
      {
        q: "What if my baby rejects it?",
        a: "That’s completely normal. Babies often need multiple attempts before accepting new flavors. Try again after a few days.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    items: [
      {
        q: "Where do you ship?",
        a: "We currently ship across India. Delivery timelines vary depending on location.",
      },
      {
        q: "How long does delivery take?",
        a: "Orders are typically delivered within 3–7 business days.",
      },
      {
        q: "Can I cancel or modify my order?",
        a: "Orders can be modified within a limited window after placing them. Contact support immediately for assistance.",
      },
      {
        q: "What if my package arrives damaged?",
        a: "Please contact us within 24 hours with photos, and we’ll resolve it quickly.",
      },
    ],
  },
  {
    category: "Storage & Usage",
    items: [
      {
        q: "How should I store Fooby products?",
        a: "Store in a cool, dry place. Follow packaging instructions for best results.",
      },
      {
        q: "How long do they last once opened?",
        a: "Once opened, refrigerate and consume within the recommended time mentioned on packaging.",
      },
      {
        q: "Can I refrigerate after opening?",
        a: "Yes. Ensure the lid is sealed tightly before storing in the refrigerator.",
      },
      {
        q: "Can I freeze them?",
        a: "Freezing is not recommended unless explicitly mentioned on the product label.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#FFF9F6] px-6 md:px-10 py-16">
      
      {/* HERO */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Everything you need to know
        </h1>
        <p className="text-gray-600 text-lg">
          Honest answers to help you feed with confidence.
        </p>
      </div>

      {/* FAQ SECTIONS */}
      <div className="max-w-4xl mx-auto space-y-14">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.items.map((item, itemIndex) => {
                const index = `${sectionIndex}-${itemIndex}`;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl bg-white overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="w-full flex justify-between items-center px-6 py-5 text-left"
                    >
                      <span className="font-medium text-gray-900">
                        {item.q}
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400"
                      >
                        ▼
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* SUPPORT CTA */}
      <div className="max-w-3xl mx-auto mt-20 text-center bg-white border border-gray-200 rounded-3xl p-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          We're here to help you make confident feeding decisions.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-full text-white font-medium"
          style={{ backgroundColor: ACCENT }}
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}
