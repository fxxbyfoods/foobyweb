'use client';

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoobyFeedbackForm from "../components/FoobyFeedbackForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF7F4] text-gray-800">
      <Navbar />

      {/* Page Intro */}
      <section className="pt-24 pb-10 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">
          Help us make better foods for little ones 👶
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Your feedback helps us improve recipes, textures, and flavours.
          This takes less than a minute.
        </p>
      </section>

      {/* Feedback Form */}
      <main className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <FoobyFeedbackForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
