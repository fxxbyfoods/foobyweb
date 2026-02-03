'use client';
import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#C4161C";

const ComingSoon = () => {
  return (
    <section className="min-h-screen bg-black text-gray-300 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide mb-6">
          Coming Soon
        </h1>

        {/* ACCENT LINE */}
        <div
          className="mx-auto h-px w-20 mb-8"
          style={{ backgroundColor: ACCENT }}
        />

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-lg leading-relaxed">
          This section is currently under development.  
          We are refining the content and spatial narrative to align with the
          studio’s design philosophy.
        </p>

        {/* OPTIONAL FOOT NOTE */}
        <p className="text-sm text-gray-500 mt-10 tracking-wide">
          JZB STUDIOZ — Architecture & Design
        </p>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
