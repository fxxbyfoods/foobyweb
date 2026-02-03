'use client';
import React, { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../components/font.css";
import { motion } from 'framer-motion';

/* =========================
   CAREER CONSTANTS
========================= */
const MAX_FILE_SIZE = 25 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby2ddnSkX4xUWIJpcNu6MZO1me_K__h8FCM7MwohZeEwZdl2W8mP62Q0lMY7Tx2X3QQ1A/exec";

const StudioPage = () => {
  /* =========================
     STUDIO DATA
  ========================= */
  const teamMembers = [
    {
      name: 'Jahanzaib Bhat',
      role: 'Principal Architect',
      image: `${process.env.PUBLIC_URL}/images/team/jahanzaib.webp`,
    },
    {
      name: 'Naveed Malik',
      role: 'Project Architect',
      image: `${process.env.PUBLIC_URL}/images/team/naveed.webp`,
    },
    {
      name: 'Faizan Shafi Bhat',
      role: 'Structure Engineer',
      image: `${process.env.PUBLIC_URL}/images/team/faizan.webp`,
    },
    {
      name: 'Bariq Ishtiaq Malik',
      role: 'Tech Expert',
      image: `${process.env.PUBLIC_URL}/images/team/barik.webp`,
    },
  ];

  const studioImages = useMemo(
    () => [
      `${process.env.PUBLIC_URL}/images/studio/studio1.jpg`,
      `${process.env.PUBLIC_URL}/images/studio/studio1.jpg`,
      `${process.env.PUBLIC_URL}/images/studio/studio1.jpg`,
      `${process.env.PUBLIC_URL}/images/studio/studio1.jpg`,
      `${process.env.PUBLIC_URL}/images/studio/studio1.jpg`,
      `${process.env.PUBLIC_URL}/images/studio/studio1.jpg`,
    ],
    []
  );

  /* =========================
     CAREER STATE
  ========================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const vacancies = [
    { id: 1, title: "Architect", type: "Full-time", location: "3–4 Years Experience" },
    { id: 2, title: "Interior Designer", type: "Full-time", location: "3–4 Years Experience" },
    { id: 3, title: "3D Visualizer", type: "Contract", location: "3–4 Years Experience" },
    { id: 4, title: "Junior Architect", type: "Full-time", location: "3–4 Years Experience" },
    { id: 5, title: "Interns", type: "6 Months", location: "Rhino, AutoCAD" },
    { id: 6, title: "Structure Engineer", type: "Full-time", location: "3–4 Years Experience" },
  ];

  const validateResume = (file) => {
    if (!file) return { ok: true };
    if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
      return { ok: false, msg: "Unsupported file type. PDF / DOC / DOCX only." };
    }
    if (file.size > MAX_FILE_SIZE) {
      return { ok: false, msg: "File too large. Max 25 MB." };
    }
    return { ok: true };
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0] || null;
      const v = validateResume(file);
      if (!v.ok) {
        setStatus({ type: "error", msg: v.msg });
        e.target.value = "";
        return;
      }
      setStatus(null);
      setFormData((p) => ({ ...p, resume: file }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.name || !formData.email || !formData.position) {
      setStatus({ type: "error", msg: "Please fill all required fields." });
      return;
    }

    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("position", formData.position);

      if (formData.resume) {
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(",")[1]);
          reader.onerror = reject;
          reader.readAsDataURL(formData.resume);
        });

        fd.append("filename", formData.resume.name);
        fd.append("file", base64);
      }

      const res = await fetch(API_ENDPOINT, { method: "POST", body: fd });
      const json = await res.json().catch(() => null);

      if (!res.ok) throw new Error(json?.message || "Server error");

      setStatus({ type: "success", msg: json?.message || "Application submitted successfully!" });
      setFormData({ name: "", email: "", position: "", resume: null });
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "Submission failed." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
  <img
    src={`${process.env.PUBLIC_URL}/images/hero/studiohero.jpg`}
    alt="Studio Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/70" />

  <motion.img
    src={`${process.env.PUBLIC_URL}/images/hero/studiotext2.png`} // change path yourself
    alt="The Studio"
    className="relative z-10 w-[70%] max-w-[600px] md:w-[50%]"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  />
</section>


      {/* ABOUT */}
<section className="py-32 px-8 md:px-20 bg-black text-gray-300">
  {/* HEADING — KEEP POSITION */}
  <motion.h2
    className="text-3xl md:text-5xl font-light mb-16 text-white"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    About the Studio
  </motion.h2>

  <div className="max-w-5xl">
    {/* LEAD STATEMENT */}
    <motion.p
      className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      JZB STUDIOZ is an architecture and design practice grounded in context,
      clarity, and restraint.
    </motion.p>

    {/* ACCENT DIVIDER */}
    <div
      className="h-px w-16 mb-10"
      style={{ backgroundColor: "#C4161C" }}
    />

    {/* BODY COPY */}
    <div className="grid md:grid-cols-2 gap-12 text-base md:text-lg leading-relaxed text-gray-400">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        The studio approaches architecture as a layered process — balancing
        material honesty, spatial depth, and environmental response. Each project
        begins with careful observation of place, climate, and culture.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Working across residential, hospitality, and institutional typologies,
        the practice focuses on proportion, light, and construction logic to
        create spaces that age with dignity and purpose.
      </motion.p>
    </div>
  </div>
</section>

      {/* TEAM — ORIGINAL ANIMATION RESTORED */}
      <section className="py-24 px-8 md:px-20">
        <h2 className="text-3xl md:text-5xl font-light mb-12">
          Our Team
        </h2>

        <div className="grid md:grid-cols-5 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="pointer-events-none absolute inset-x-0 bottom-6 px-6">
                  <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <h3 className="text-lg font-medium text-white text-left">
                      {member.name}
                    </h3>
                    <p className="text-sm text-red-500 text-left">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PEDAGOGY */}
<section className="py-28 px-8 md:px-20 bg-black text-gray-300">
  <motion.h2
    className="text-3xl md:text-5xl font-light mb-12 text-white"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Pedagogy
  </motion.h2>

  {/* LEAD PHILOSOPHY */}
  <motion.p
    className="text-lg md:text-xl text-gray-400 max-w-4xl mb-20 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1, duration: 0.6 }}
  >
    The studio’s pedagogy is not academic theory detached from practice.
    It is a working framework—developed through projects, failures, site
    realities, and continuous refinement—guiding how we think, build, and grow.
  </motion.p>

  <div className="grid lg:grid-cols-2 gap-20 items-start">
    {/* TEXT */}
    <div className="space-y-20">
      {[
        {
          title: "Thinking",
          text:
            "Design begins with questioning. Each project is unpacked through context, climate, culture, and constraints before any formal direction is established.",
          sub:
            "This phase prioritizes clarity over speed—ensuring that decisions are informed, deliberate, and rooted in place rather than assumption.",
        },
        {
          title: "Practice",
          text:
            "Architecture is approached as a disciplined craft where ideas are tested against construction logic, budgets, and execution realities.",
          sub:
            "Drawings are treated as instruments of precision, and details are resolved with equal attention to performance, durability, and experience.",
        },
        {
          title: "Learning",
          text:
            "The studio functions as a continuous learning environment driven by research, prototyping, and on-site feedback.",
          sub:
            "Each completed project becomes a reference—informing future work through reflection on what performed well and what demanded reconsideration.",
        },
        {
          title: "Expertise",
          text:
            "Experience across residential, institutional, and healthcare projects enables the studio to operate across scales and complexities.",
          sub:
            "This breadth informs an adaptable yet rigorous approach—balancing conceptual intent with technical resolution and long-term viability.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span
              className="h-px w-10"
              style={{ backgroundColor: "#C4161C" }}
            />
            <h3 className="text-xl text-white font-medium tracking-wide">
              {item.title}
            </h3>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-xl mb-3">
            {item.text}
          </p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            {item.sub}
          </p>
        </motion.div>
      ))}
    </div>

    {/* IMAGES */}
<div className="grid grid-cols-1 gap-6">
  {[
    "/images/studio/peda1.jpg",
    "/images/studio/peda2.jpg",
  ].map((src, i) => (
    <div
      key={i}
      className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10"
    >
      <img
        src={src}
        alt={`Pedagogy image ${i + 1}`}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
      />
    </div>
  ))}
</div>
</div>


  {/* CLOSING LINE */}
  <motion.div
    className="mt-24 max-w-4xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    <div
      className="h-px w-20 mb-6"
      style={{ backgroundColor: "#C4161C" }}
    />
    <p className="text-gray-400 leading-relaxed">
      This pedagogy is not static. It evolves with every commission,
      reinforcing a studio culture that values restraint, responsibility,
      and architectural longevity over momentary expression.
    </p>
  </motion.div>
</section>



      {/* CAREERS */}
<section className="py-24 px-6 md:px-20 bg-black text-gray-300">
  <h2 className="text-3xl md:text-5xl font-light mb-12 text-white">
    Careers
  </h2>

  <div className="grid lg:grid-cols-2 gap-16 items-start">
    {/* LEFT — CAREER STATEMENT */}
    <div className="flex flex-col justify-center">
      <div className="max-w-xl">
        <div
          className="h-px w-16 mb-8"
          style={{ backgroundColor: "#C4161C" }}
        />

        <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
          Therefore, we welcome curious, driven, and aligned individuals
          to be a part of our team.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          The studio is a place of continuous inquiry—where ideas are tested
          against context, construction, and consequence.
        </p>

        <p className="text-gray-400 leading-relaxed">
          We are constantly seeking new directions in contemporary Indian
          architecture through thoughtful practice, disciplined execution,
          and long-term relevance.
        </p>
      </div>
    </div>

    {/* RIGHT — FORM (UNCHANGED) */}
    <div>
      <h3 className="unbounded text-2xl mb-10 text-white">
        APPLY NOW
      </h3>

      <form
        onSubmit={handleSubmit}
        className="border border-white/10 p-8 rounded-2xl"
      >
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 bg-transparent border border-white/20 text-white placeholder-gray-500 p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 bg-transparent border border-white/20 text-white placeholder-gray-500 p-3 rounded-lg"
        />

        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="w-full mb-4 bg-black border border-white/20 text-gray-300 p-3 rounded-lg"
        >
          <option value="">Select Position</option>
          {vacancies.map((job) => (
            <option key={job.id} value={job.title}>
              {job.title}
            </option>
          ))}
        </select>

        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="w-full mb-6 text-gray-400"
        />

        {status && (
          <div
            className={`mb-4 text-sm ${
              status.type === "success"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status.msg}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full border border-white text-white py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default StudioPage;
