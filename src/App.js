// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./font.css";

import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import PopUp from "./components/PopUp";
import OpeningIntro from "./components/OpeningIntro";

import ComingSoon from "./pages/ComingSoon";

import Homepage from "./pages/HomePage";
import Project from "./pages/ProjectsPage";
import Aboutpage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import StudioPage from "./pages/StudioPage";
import ArchPage from "./pages/ArchPage";
import BlogPage from "./pages/BlogPage";
import ElementsPage from "./pages/ElementsPage";

/* Project Pages */
import HillsideResidence from "./pages/projects/HillsideResidence";

/* Blog Pages */
import LightInArchitecture from "./blogs/LightInArchitecture";

/* -------------------------
   Animation variants
------------------------- */
const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const navbarVariants = {
  initial: { y: 0, opacity: 1 },
  exit: { y: -80, opacity: 0 },
  enter: { y: 0, opacity: 1 },
};

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {/* OPENING INTRO */}
      <AnimatePresence>
        {showIntro && (
          <OpeningIntro onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          <ScrollToTop />

          {/* Navbar */}
          <AnimatePresence>
            <motion.div
              key="navbar"
              variants={navbarVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Navbar />
            </motion.div>
          </AnimatePresence>

          {/* Page Transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/studio" element={<StudioPage />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/projects/architecture" element={<ArchPage />} />
                <Route path="/projects/elements" element={<ElementsPage />} />

                {/* Project Routes */}
                <Route
                  path="/projects/hillside-residence"
                  element={<HillsideResidence />}
                />
                <Route path="/projects/cantilever-house" element={<ComingSoon />} />
                <Route path="/projects/residence-nectar" element={<ComingSoon />} />
                <Route path="/projects/residence-zeal" element={<ComingSoon />} />
                <Route path="/projects/verde-suits" element={<ComingSoon />} />
                <Route path="/projects/aafiya-hospital" element={<ComingSoon />} />
                <Route path="/projects/mall-817" element={<ComingSoon />} />

                {/* Blog Routes */}
                <Route
                  path="/blogs/light-in-architecture"
                  element={<LightInArchitecture />}
                />
              </Routes>
            </motion.div>
          </AnimatePresence>

          {/* Global Popup */}
          <PopUp />
        </>
      )}
    </>
  );
}

export default App;
