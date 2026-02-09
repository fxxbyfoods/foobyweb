import React from "react";

export default function WhyFooby() {
  return (
    <section className="bg-[#FFF7F0] px-4 md:px-20 py-20">
      
      {/* HERO */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-32">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Food you can trust.<br />
            Even on hard days.
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            Fooby is made for parents who want to feed their baby
            without second-guessing every spoon.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[450px] rounded-[32px] overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/images/ybaby.png`}
            alt="Fooby baby character"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>
      </div>

      {/* CORE REASONS */}
      <div className="max-w-6xl mx-auto mb-32">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="font-semibold mb-2">Clean Ingredients</h3>
            <p className="text-sm text-gray-600">
              No preservatives, no fillers, no shortcuts.
              Just food your baby understands.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="text-3xl mb-4">🛡</div>
            <h3 className="font-semibold mb-2">Safety First</h3>
            <p className="text-sm text-gray-600">
              Prepared with hygiene, care, and food safety
              standards suitable for babies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="text-3xl mb-4">👶</div>
            <h3 className="font-semibold mb-2">Baby-Focused</h3>
            <p className="text-sm text-gray-600">
              Designed for tiny tummies,
              not adult convenience.
            </p>
          </div>
        </div>
      </div>

      {/* VISUAL STORY */}
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center mb-32">
  <div className="w-full h-[380px] rounded-[32px] overflow-hidden">
    <img
      src={`${process.env.PUBLIC_URL}/images/zbaby.png`}
      alt="Fooby baby character illustration"
      className="w-full h-full object-contain"
      draggable="false"
    />
  </div>


        <div>
          <h2 className="text-3xl font-semibold mb-5">
            Simple food. Calm parents.
          </h2>
          <p className="text-gray-600 mb-4">
            We believe baby food should feel reassuring —
            not overwhelming.
          </p>
          <p className="text-gray-600">
            Fooby keeps ingredients, preparation, and communication
            intentionally simple.
          </p>
        </div>
      </div>

      {/* DIFFERENCE */}
      <div className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold text-center mb-14">
          What makes Fooby different
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="font-semibold mb-3">We don’t overprocess</h3>
            <p className="text-gray-600 text-sm">
              Minimal processing to preserve
              what food is supposed to be.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="font-semibold mb-3">We don’t hide behind labels</h3>
            <p className="text-gray-600 text-sm">
              Clear ingredients, clear intent,
              clear communication.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="font-semibold mb-3">We design for parents</h3>
            <p className="text-gray-600 text-sm">
              Real routines. Real mess.
              Real peace of mind.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="font-semibold mb-3">We grow with your baby</h3>
            <p className="text-gray-600 text-sm">
              Age-appropriate food,
              not one-size-fits-all.
            </p>
          </div>
        </div>
      </div>

      {/* CLOSING */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl font-medium text-gray-700 mb-3">
          Fooby is food you don’t have to worry about.
        </p>
        <p className="text-gray-500">
          And that matters more than anything.
        </p>
      </div>

    </section>
  );
}
