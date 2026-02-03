import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#fffaf0] overflow-hidden">
      <div className="min-h-screen px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="pt-24 md:pt-0">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            🥕 Fresh & Organic
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-800 max-w-xl">
            Better food for{" "}
            <span className="text-pink-400">little bellies.</span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 max-w-md text-base text-slate-600">
            Pediatrician-designed meals delivered cold to your door.
            Fresh ingredients, zero junk.
          </p>

          {/* CTA */}
          <button className="mt-10 inline-flex items-center justify-center rounded-full bg-pink-300 px-8 py-4 text-sm font-semibold text-slate-800 hover:bg-pink-400 transition">
            Build Your Box
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center h-full">
          {/* BACKGROUND CIRCLE */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-green-100 to-blue-100" />

          {/* MAIN CARD */}
          <div className="relative z-10 w-[260px] h-[220px] rounded-3xl bg-white shadow-lg flex items-center justify-center">
            <span className="text-6xl">🥑</span>
          </div>

          {/* FLOATING ICON */}
          <div className="absolute top-20 right-20 z-20 w-14 h-14 rounded-full bg-pink-200 flex items-center justify-center shadow">
            🍓
          </div>

          {/* TRUST BADGE */}
          <div className="absolute bottom-24 right-10 z-20 rounded-xl bg-white px-4 py-3 shadow-md flex items-center gap-2 text-xs text-slate-600">
            👩‍⚕️
            <span>
              <strong>Expert Approved</strong>
              <br />
              By Pediatricians
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
