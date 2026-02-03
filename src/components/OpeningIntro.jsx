'use client';
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OpeningIntro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] },
        }}
      >
        <motion.video
          src={`${process.env.PUBLIC_URL}/images/opener.mp4`}
          className="w-40 md:w-56"
          autoPlay
          muted
          playsInline
          preload="auto"
          initial={{ opacity: 0, scale: 3 }}
          animate={{ opacity: 1, scale: 3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningIntro;
