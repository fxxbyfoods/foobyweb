import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5">
      <nav className="h-[72px] px-6 md:px-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/fooby-logo.svg`}
            alt="Fooby"
            className="h-8 md:h-9 w-auto select-none"
            draggable="false"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
          <NavLink to="/products" className="hover:text-slate-900">
            Products
          </NavLink>
          <NavLink to="/why-fooby" className="hover:text-slate-900">
            Why Fooby
          </NavLink>
          <NavLink to="/faq" className="hover:text-slate-900">
            FAQ
          </NavLink>
          <NavLink to="/contact" className="hover:text-slate-900">
            Contact
          </NavLink>
        </div>

        {/* CTA */}
        <Link
          to="/shop"
          className="ml-4 inline-flex items-center justify-center
                     rounded-full bg-pink-300 px-6 py-2
                     text-sm font-semibold text-slate-800
                     hover:bg-pink-400 transition"
        >
          Shop Now
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
