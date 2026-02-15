'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

const ACCENT = "#C4161C";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyqHmDXL56Tq5z_LdOJX2sZQYOj9r2___9rGeL6nLH2xs4rF9eV83RUE9iwv_5tDltOgQ/exec";

export default function FoobyFeedbackForm() {
  const initialState = {
    product: "",
    age: "",
    stage: "",
    liking: 0,
    texture: "",
    rebuy: "",
    improvement: "",
  };

  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const products = [
    "Apple Puree",
    "Banana Mash",
    "Rice Cereal",
    "Mixed Veg Blend",
  ];

  const babyStages = [
    "Just starting solids",
    "Somewhere in between",
    "Eating almost everything",
  ];

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.product || !form.age || !form.stage || form.liking === 0) {
      alert("Please complete all required fields.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(form));

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // 🔥 critical fix
      });

      // If fetch didn't throw → treat as success
      alert("Thanks for helping us make better food 💛");

      setForm(initialState);

    } catch (error) {
      console.error("Network error:", error);
      alert("Submission failed. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section className="px-4">
      <div className="mx-auto max-w-2xl bg-white rounded-[32px] shadow-lg px-6 py-8 md:px-10 md:py-10">
        <form onSubmit={handleSubmit} className="space-y-10">

          {/* SECTION 1 */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Which product did you try?
              </label>
              <select
                value={form.product}
                onChange={(e) => updateField("product", e.target.value)}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3"
              >
                <option value="">Select product</option>
                {products.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Baby’s age
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["4–6 months", "6–9 months", "9–12 months", "12+ months"].map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => updateField("age", a)}
                    className={`rounded-xl py-3 text-sm border transition ${
                      form.age === a
                        ? "bg-[#C4161C] text-white border-transparent shadow-sm"
                        : "bg-white border-gray-200 text-gray-700"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* SECTION 2 */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Baby’s eating stage
              </label>
              <div className="space-y-2">
                {babyStages.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => updateField("stage", s)}
                    className={`w-full rounded-xl py-3 text-sm border transition ${
                      form.stage === s
                        ? "bg-[#C4161C] text-white border-transparent shadow-sm"
                        : "bg-white border-gray-200 text-gray-700"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Did your baby like it?
              </label>

              <div className="flex gap-3 items-center">
                {[1, 2, 3, 4, 5].map((rating) => {
                  const isActive = form.liking >= rating;
                  const imgSrc = `/images/rating/${
                    isActive ? `${rating}.png` : `${rating}g.png`
                  }`;

                  return (
                    <button
                      type="button"
                      key={rating}
                      onClick={() => updateField("liking", rating)}
                      className="transition-transform hover:scale-110"
                    >
                      <img
                        src={imgSrc}
                        alt={`${rating} rating`}
                        className="w-10 h-10 object-contain"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* SECTION 3 */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How was the texture?
              </label>
              <div className="flex gap-3">
                {["Perfect", "Too thick", "Too thin"].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => updateField("texture", t)}
                    className={`flex-1 rounded-xl py-3 text-sm border transition ${
                      form.texture === t
                        ? "bg-[#C4161C] text-white border-transparent shadow-sm"
                        : "bg-white border-gray-200 text-gray-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Would you buy it again?
              </label>
              <div className="flex gap-3">
                {["Yes", "Maybe", "No"].map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => updateField("rebuy", r)}
                    className={`flex-1 rounded-xl py-3 text-sm border transition ${
                      form.rebuy === r
                        ? "bg-[#C4161C] text-white border-transparent shadow-sm"
                        : "bg-white border-gray-200 text-gray-700"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Anything you’d like us to improve? (optional)
            </label>
            <textarea
              rows={3}
              value={form.improvement}
              onChange={(e) => updateField("improvement", e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full rounded-full py-4 text-white font-medium text-base shadow-md disabled:opacity-60"
            style={{ backgroundColor: ACCENT }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? "Submitting..." : "Submit feedback"}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
