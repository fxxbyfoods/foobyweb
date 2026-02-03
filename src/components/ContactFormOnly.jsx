import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const MAX_WIDTH_CLASS = "max-w-3xl";
const VERTICAL_PADDING_CLASS = "py-6";
const TOP_MARGIN_CLASS = "mt-0";
const TEXTAREA_ROWS = 3;

const ACCENT = "#C4161C";

export default function ContactFormOnly() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const iframeRef = useRef(null);

  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbwBzjFyn2t8rUFRGN9xkyq3TAoBhPSzomPT3Y3DRDZsWnfdefZ5XvfemHz2VMIdWJ0llw/exec";
  const SECRET_TOKEN = "jzb-studioz-data";

  const subjects = [
    { value: "general", label: "General Inquiry" },
    { value: "project-consultation", label: "Project Consultation" },
    { value: "media", label: "Media Inquiry" },
    { value: "contractor", label: "Contractor / Bid" },
    { value: "vendor", label: "Vendor / Collaboration" },
    { value: "other", label: "Other" },
  ];

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function onIframeLoad() {
    if (!submitting) return;
    setSubmitting(false);
    alert("Message sent successfully. Thank you!");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    });
  }

  return (
    <section className="bg-black">
      <div
        className={`
          ${MAX_WIDTH_CLASS}
          ${VERTICAL_PADDING_CLASS}
          ${TOP_MARGIN_CLASS}
          mx-auto
          px-6
        `}
      >
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-3">
            Start a Conversation
          </h2>
          <div
            className="h-px w-12"
            style={{ backgroundColor: ACCENT }}
          />
        </div>

        {/* Hidden iframe */}
        <iframe
          name="hidden_iframe"
          ref={iframeRef}
          title="hidden_iframe"
          style={{ display: "none" }}
          onLoad={onIframeLoad}
        />

        <form
          className="space-y-6"
          action={GAS_URL}
          method="POST"
          target="hidden_iframe"
          onSubmit={() => setSubmitting(true)}
        >
          <input type="hidden" name="token" value={SECRET_TOKEN} />

          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            { id: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
          ].map((field) => (
            <div key={field.id}>
              <label className="block text-sm text-white/70 mb-2">
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                value={form[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="
                  w-full
                  bg-black
                  text-white
                  border-b border-white/20
                  px-1 py-2
                  placeholder-white/40
                  focus:outline-none
                "
                style={{
                  borderBottomColor: "rgba(255,255,255,0.2)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderBottomColor = ACCENT)
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderBottomColor =
                    "rgba(255,255,255,0.2)")
                }
              />
            </div>
          ))}

          {/* Subject */}
          <div>
            <label className="block text-sm text-white/70 mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="
                w-full
                bg-black
                text-white
                border-b border-white/20
                px-1 py-2
                focus:outline-none
              "
              onFocus={(e) =>
                (e.currentTarget.style.borderBottomColor = ACCENT)
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderBottomColor =
                  "rgba(255,255,255,0.2)")
              }
            >
              {subjects.map((s) => (
                <option key={s.value} value={s.value} className="bg-black">
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-white/70 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={TEXTAREA_ROWS}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
              className="
                w-full
                bg-black
                text-white
                border-b border-white/20
                px-1 py-2
                placeholder-white/40
                focus:outline-none
                resize-none
              "
              onFocus={(e) =>
                (e.currentTarget.style.borderBottomColor = ACCENT)
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderBottomColor =
                  "rgba(255,255,255,0.2)")
              }
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="
              mt-8
              inline-flex
              items-center
              text-sm
              tracking-wide
              text-white
              border-b border-white/40
              hover:border-white
              transition
            "
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message →
          </motion.button>
        </form>
      </div>
    </section>
  );
}
