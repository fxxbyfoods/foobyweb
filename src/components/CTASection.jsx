import React from "react";

const CTASection = () => {
  return (
    <section className="w-full py-40 px-6 md:px-20 bg-gradient-to-b from-pink-300 to-pink-200 text-center">
      <div className="max-w-3xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Start Their Flavor Journey
        </h2>

        {/* SUBTEXT */}
        <p className="text-base md:text-lg text-white/90 mb-12">
          Get 25% off your first box today. Healthy, delicious, and delivered
          right to your doorstep.
        </p>

        {/* CTA BUTTON */}
        <button className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold text-pink-400 hover:bg-pink-100 transition">
          Get Started Now
        </button>

      </div>
    </section>
  );
};

export default CTASection;
