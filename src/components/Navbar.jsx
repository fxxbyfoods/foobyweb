import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Why Fooby", path: "/why-fooby" },
    { name: "FAQ", path: "/fa-q" },
    { name: "Flogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5">
      <nav className="h-[72px] px-6 md:px-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/images/fooby-logo.svg`}
            alt="Fooby"
            className="h-8 md:h-9 w-auto select-none"
            draggable="false"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="hover:text-slate-900 transition"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* CART */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center
                       w-10 h-10 rounded-full
                       hover:bg-black/5 transition"
            aria-label="Cart"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .96.343 1.087.836L5.82 8.25m0 0h11.63c.874 0 1.55.79 1.385 1.65l-1.2 7.2a1.406 1.406 0 01-1.385 1.17H7.125a1.406 1.406 0 01-1.385-1.17L4.5 4.5m1.32 3.75L7.5 18.75M9.75 21a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm8.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>

          {/* SHOP CTA (desktop only) */}
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center justify-center
                       rounded-full bg-pink-300 px-6 py-2
                       text-sm font-semibold text-slate-800
                       hover:bg-pink-400 transition"
          >
            Shop Now
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 text-slate-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-6">
          <div className="flex flex-col gap-6 text-base font-medium text-slate-700">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="hover:text-slate-900 transition"
              >
                {link.name}
              </NavLink>
            ))}

            {/* MOBILE SHOP CTA */}
            <Link
              to="/shop"
              onClick={closeMenu}
              className="mt-4 inline-flex justify-center rounded-full
                         bg-pink-300 px-6 py-3
                         text-sm font-semibold text-slate-800
                         hover:bg-pink-400 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
