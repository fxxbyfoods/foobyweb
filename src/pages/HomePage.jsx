import React from "react";
import HeroSection from "../components/HeroSection";
import WhyParentsLove from "../components/WhyParentsLove";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTASection from "../components/CTASection";

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Navbar />

        <HeroSection />
        <ProductSection />
        <WhyParentsLove />
        <CTASection />

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
