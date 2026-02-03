'use client';
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const ACCENT = "#C4161C";

const ProjectLayout = ({ data }) => {
  return (
    <>
      <section className="bg-black text-gray-300 px-6 md:px-20 py-32">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mb-28"
        >
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
            {data.title}
          </h1>

          <div
            className="h-px w-20 mb-6"
            style={{ backgroundColor: ACCENT }}
          />

          <p className="text-gray-400 text-lg leading-relaxed">
            {data.description}
          </p>

          <p className="text-sm text-gray-500 mt-6 tracking-wide">
            {data.location} · {data.year} · {data.category}
          </p>
        </motion.div>

        {/* SECTIONS */}
        <div className="space-y-40">
          {data.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* TEXT */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="h-px w-12"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <h2 className="text-2xl text-white font-light">
                    {section.title}
                  </h2>
                </div>

                <p className="text-gray-400 leading-relaxed max-w-xl">
                  {section.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GALLERY */}
        {data.gallery && data.gallery.length > 0 && (
          <div className="mt-48">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {data.gallery.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[16/9] overflow-hidden bg-black"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default ProjectLayout;
