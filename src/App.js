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
import Product from "./pages/ProductsPage";
import Aboutpage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import StudioPage from "./pages/StudioPage";
import ArchPage from "./pages/ArchPage";
import BlogPage from "./pages/BlogPage";
import WhyFooby from "./pages/WhyFooby";
import CartPage from "./pages/CartPage";


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
  <motion.main
    key={location.pathname}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
    className="pt-[69px]"
  >
    <Routes location={location}>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/products" element={<Product />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/studio" element={<StudioPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/projects/architecture" element={<ArchPage />} />
      <Route path="/cart" element={<CartPage />} />
        <Route path="/why-fooby" element={<WhyFooby />} />
      
    </Routes>
  </motion.main>
</AnimatePresence>

          {/* Global Popup */}
          <PopUp />
        </>
      )}
    </>
  );
}

export default App;
