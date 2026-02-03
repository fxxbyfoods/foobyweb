'use client';
import React from "react";
import ContactFormOnly from "../components/ContactFormOnly";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <Navbar />

      {/* HERO — SAME AS STUDIO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero/studiohero.jpg`}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* PNG TEXT — replace path only */}
        <img
          src={`${process.env.PUBLIC_URL}/images/hero/ctatext.png`}
          alt="Get in Touch"
          className="relative z-10 h-20 md:h-28 lg:h-36"
          draggable="false"
        />
      </section>

      {/* CONTACT + MAP */}
      <main className="py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* LEFT — FORM */}
            <div className="flex justify-start">
              <div className="w-full max-w-xl">
                <ContactFormOnly />
              </div>
            </div>

            {/* RIGHT — MAP + INFO */}
            <aside className="flex flex-col gap-12">

              {/* MAP */}
              <div className="w-full h-[480px] rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1634367921574!2d77.23174786296453!3d28.55012546717994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2312ce8f077%3A0xbd049acbd84c015f!2sS492%2C%20Greater%20Kailash-1%2C%20Block%20S%2C%20Greater%20Kailash%20I%2C%20Greater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048!5e0!3m2!1sen!2sin!4v1755794518044!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* OPENING HOURS */}
              <div className="p-6 border border-white/10 rounded-2xl">
                <h3 className="text-lg font-medium text-white mb-3">
                  Opening Hours
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Mon — Fri: 9:30 AM — 6:30 PM<br />
                  Sat: 10:00 AM — 2:00 PM<br />
                  Sun: Closed
                </p>
              </div>

              {/* RESPONSE NOTE */}
              <div className="text-sm text-gray-500 max-w-md">
                We aim to respond within 2 business days. For urgent matters,
                please call the phone number listed below.
              </div>

            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
