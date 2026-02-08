import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2f4154] text-white">
      <div className="px-6 md:px-20 py-20">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold text-pink-300 mb-4">Fooby</h2>
            <p className="text-sm text-white/70 max-w-xs mb-6">
              We're on a mission to make fresh, organic baby food accessible
              to every family. Because every tummy deserves to be happy.
            </p>

            <div className="flex gap-4 text-lg text-white/80">
              <a href="www.instagram.com/foobybaby/" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">
              Shop
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Subscription Plans</li>
              <li>Single Purchases</li>
              <li>Gift Cards</li>
              <li>Refer a Friend</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Help Center</li>
              <li>Shipping Policy</li>
              <li>Taste Guarantee</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* LEARN */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">
              Learn
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Nutritional Standards</li>
              <li>Sourcing</li>
              <li>Our Story</li>
              <li>Blog</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
