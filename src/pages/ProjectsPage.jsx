'use client';
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/font.css";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#C4161C";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    title: "Hillside Residence",
    slug: "hillside-residence",
    location: "Kashmir, India",
    year: "2024",
    category: "Architecture",
    image: `${process.env.PUBLIC_URL}/images/projects/AFrame/thumb.webp`,
  },
  {
    title: "Canteliver House",
    slug: "cantilever-house",
    location: "New Delhi, India",
    year: "2023",
    category: "Architecture",
    image: `${process.env.PUBLIC_URL}/images/projects/Canteliverhouse/thumb.webp`,
  },
  {
    title: "Recidence Nectar",
    slug: "residence-nectar",
    location: "Himachal Pradesh, India",
    year: "2023",
    category: "Architecture",
    image: `${process.env.PUBLIC_URL}/images/projects/Nectar/thumb.webp`,
  },
  {
    title: "Residence Zeal",
    slug: "residence-zeal",
    location: "Bandipora, Kashmir",
    year: "2022",
    category: "Interior",
    image: `${process.env.PUBLIC_URL}/images/projects/ResidenceZeal/thumb.webp`,
  },
  {
    title: "Verde Suits",
    slug: "verde-suits",
    location: "Gurugram, India",
    year: "2024",
    category: "Architecture",
    image: `${process.env.PUBLIC_URL}/images/projects/VerdeSuites/thumb.webp`,
  },
  {
    title: "Aafiya - Multi-Speciality Hospital",
    slug: "aafiya-hospital",
    location: "Bandipora, India",
    year: "2024",
    category: "Hospital",
    image: `${process.env.PUBLIC_URL}/images/projects/Aafiya/thumb.webp`,
  },
  {
    title: "Mall 817",
    slug: "mall-817",
    location: "Sringar, India",
    year: "2024",
    category: "Architecture",
    image: `${process.env.PUBLIC_URL}/images/projects/Mall817/thumb.webp`,
  },
];

const categoryFilters = [
  "All",
  "Architecture",
  "Interior",
  "Hospitality",
  "Institutional",
];

/* ================= ANIMATION ================= */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const NAVBAR_DELAY = 800;

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowProjects(true), NAVBAR_DELAY);
    return () => clearTimeout(t);
  }, []);

  const yearFilters = useMemo(() => {
    const years = Array.from(new Set(projects.map((p) => p.year)));
    return ["All", ...years.sort((a, b) => b - a)];
  }, []);

  const filteredProjects = projects.filter((p) => {
    const categoryMatch =
      activeCategory === "All" || p.category === activeCategory;
    const yearMatch = activeYear === "All" || p.year === activeYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      <section className="pt-32 pb-32 px-6 md:px-20">
        {/* ================= MOBILE FILTER ================= */}
        <div className="lg:hidden mb-12">
          <button
            onClick={() => setMobileFilterOpen((p) => !p)}
            className="text-sm tracking-[0.3em] text-gray-400 uppercase"
          >
            Filter
          </button>

          <AnimatePresence>
            {mobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-8 space-y-12"
              >
                {/* CATEGORY */}
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                    CATEGORY
                  </p>
                  <div className="flex flex-col gap-4">
                    {categoryFilters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setActiveCategory(filter);
                          setMobileFilterOpen(false);
                        }}
                        className="text-sm tracking-wide text-left"
                        style={{
                          color:
                            activeCategory === filter
                              ? ACCENT
                              : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* YEAR */}
                <div>
                  <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
                    YEAR
                  </p>
                  <div className="flex flex-col gap-4">
                    {yearFilters.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setActiveYear(year);
                          setMobileFilterOpen(false);
                        }}
                        className="text-sm tracking-wide text-left"
                        style={{
                          color:
                            activeYear === year
                              ? ACCENT
                              : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-20">
          {/* ================= PROJECT GRID ================= */}
          {showProjects && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={cardVariants}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-700" />
                    </div>

                    <div className="mt-6">
                      <h2 className="text-2xl md:text-3xl font-light relative inline-block">
                        {project.title}
                        <span
                          className="absolute left-0 -bottom-1 h-[1px] w-0 group-hover:w-full transition-all duration-500"
                          style={{ backgroundColor: ACCENT }}
                        />
                      </h2>
                      <p className="text-sm text-gray-400 mt-1">
                        {project.location}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ================= DESKTOP FILTER ================= */}
          <aside className="hidden lg:flex flex-col pt-4">
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-6">
              CATEGORY
            </p>
            <div className="flex flex-col gap-4 mb-14">
              {categoryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveCategory(filter)}
                  className="text-sm tracking-wide text-left flex items-center gap-2"
                  style={{
                    color:
                      activeCategory === filter
                        ? ACCENT
                        : "rgba(255,255,255,0.5)",
                  }}
                >
                  {activeCategory === filter && (
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  )}
                  {filter}
                </button>
              ))}
            </div>

            <p className="text-xs tracking-[0.3em] text-gray-500 mb-6">
              YEAR
            </p>
            <div className="flex flex-col gap-4">
              {yearFilters.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className="text-sm tracking-wide text-left flex items-center gap-2"
                  style={{
                    color:
                      activeYear === year
                        ? ACCENT
                        : "rgba(255,255,255,0.5)",
                  }}
                >
                  {activeYear === year && (
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  )}
                  {year}
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
