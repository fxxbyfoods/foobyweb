'use client';

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ================= PAGE ================= */
export default function BlogPage() {
  const blogs = [
    {
      slug: "light-in-architecture",
      title: "Poetics of Light",
      date: "1st January, 2026",
      image: `${process.env.PUBLIC_URL}/images/blogs/LightInArchitecture/7.webp`,
    },

    // ADD MORE BLOGS LIKE THIS
    // {
    //   slug: "architecture-and-emotion",
    //   title: "Architecture & Human Emotion",
    //   date: "April 2026",
    //   image: `${process.env.PUBLIC_URL}/images/blogs/blog2.jpg`,
    // },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero/studiohero.jpg`}
          alt="Blog Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.img
          src={`${process.env.PUBLIC_URL}/images/hero/journal.png`}
          alt="Blog Title"
          className="relative z-10 h-20 md:h-28 lg:h-36"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          draggable="false"
        />
      </section>

      {/* GRID */}
      <section className="px-6 md:px-20 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {blogs.map((blog) => (
            <Link to={`/blogs/${blog.slug}`} key={blog.slug}>
              <motion.article
                className="cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="aspect-[16/9] overflow-hidden bg-black">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />
                </div>

                {/* DATE */}
                <p className="mt-4 text-xs tracking-widest text-gray-500 uppercase">
                  {blog.date}
                </p>

                {/* TITLE */}
                <h2 className="mt-2 text-2xl font-light group-hover:underline underline-offset-4">
                  {blog.title}
                </h2>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
