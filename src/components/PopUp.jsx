import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ACCENT = "#C4161C";

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
          bg-black text-white px-5 py-2.5
          rounded-full text-sm tracking-wide
          hover:bg-gray-900 transition
        "
      >
        Start a Conversation
      </motion.button>

      {/* MOBILE CTA (ICON) */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed bottom-6 right-6 z-[1000]
          w-12 h-12 rounded-full
          flex items-center justify-center
          text-white text-xl
        "
        style={{ backgroundColor: ACCENT }}
        aria-label="Start conversation"
      >
        💬
      </motion.button>

      {/* Overlay + Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-[1000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="
                fixed bottom-6 right-6 z-[1001]
                w-[300px] max-w-[90vw]
                bg-[#0f0f0f] text-white
                border border-white/10
                rounded-lg p-6
              "
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-base font-semibold tracking-wide mb-2">
                  Let’s Talk
                </h3>

                {/* Accent rule */}
                <div
                  className="h-px w-10"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>

              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                We begin every project with a conversation.
                Reach out and we’ll guide you through the next steps.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:studiozjzb@gmail.com"
                  className="block border border-white/20 rounded-md px-4 py-2 hover:border-white transition"
                >
                  Email the Studio
                </a>

                <a
                  href="https://wa.me/916006010530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-white/20 rounded-md px-4 py-2 hover:border-white transition"
                >
                  WhatsApp Inquiry
                </a>

                <button
                  disabled
                  className="w-full text-left border border-white/10 rounded-md px-4 py-2 text-white/40 cursor-not-allowed"
                >
                  Schedule a Call (Coming Soon)
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
