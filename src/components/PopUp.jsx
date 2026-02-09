import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ACCENT = "#F47C20"; // Fooby warm orange

export default function StartConversation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP CTA */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(true)}
        className="
          hidden md:flex
          fixed bottom-6 right-6 z-[1000]
          bg-[#F47C20] text-white
          px-5 py-2.5
          rounded-full text-sm font-medium
          hover:opacity-90 transition
          shadow-lg
        "
      >
        Talk to Fooby
      </motion.button>

      {/* MOBILE CTA */}
      <motion.button
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed bottom-6 right-6 z-[1000]
          w-14 h-14 rounded-full
          flex items-center justify-center
          text-white text-xl
          shadow-xl
        "
        style={{ backgroundColor: ACCENT }}
        aria-label="Talk to Fooby"
      >
        🍼
      </motion.button>

      {/* Overlay + Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-[1000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="
                fixed bottom-6 right-6 z-[1001]
                w-[320px] max-w-[92vw]
                bg-white text-gray-800
                border border-black/5
                rounded-2xl p-6
                shadow-2xl
              "
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-base font-semibold mb-2">
                  Let’s Talk About Your Baby 👶
                </h3>
                <div
                  className="h-[2px] w-10 rounded"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>

              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Questions about ingredients, nutrition, or choosing the right
                food for your little one? We’re here to help.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:hello@foobyfoods.com"
                  className="
                    block rounded-xl px-4 py-2.5
                    border border-gray-200
                    hover:border-gray-400 transition
                  "
                >
                  Email Fooby Support
                </a>

                <a
                  href="https://wa.me/916006010530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block rounded-xl px-4 py-2.5
                    border border-gray-200
                    hover:border-gray-400 transition
                  "
                >
                  WhatsApp Us
                </a>

                <button
                  disabled
                  className="
                    w-full text-left
                    rounded-xl px-4 py-2.5
                    border border-gray-100
                    text-gray-400 cursor-not-allowed
                  "
                >
                  Nutrition Call (Coming Soon)
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
