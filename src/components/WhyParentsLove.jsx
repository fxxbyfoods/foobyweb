import React from "react";

const features = [
  {
    icon: "🌱",
    title: "100% Organic",
    desc: "Cleanest ingredients from trusted farmers.",
    bg: "bg-pink-100",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    desc: "Tested for 500+ toxins and heavy metals.",
    bg: "bg-blue-100",
  },
  {
    icon: "❄️",
    title: "Fresh Never Frozen",
    desc: "Made to order and delivered chilled.",
    bg: "bg-green-100",
  },
];

const WhyParentsLove = () => {
  return (
    <section className="bg-white py-32">
      <div className="px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-12">
            Why Parents Love <br /> Fooby
          </h2>

          <div className="space-y-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-sm border border-black/5"
              >
                <div
                  className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center text-2xl`}
                >
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT TESTIMONIAL */}
        <div className="relative">
          <div className="rounded-[48px] bg-yellow-200 p-12 text-center shadow-sm">
            <div className="text-4xl mb-6">💛</div>

            <h3 className="text-2xl font-extrabold text-slate-800 mb-6">
              50k+ Happy Babies
            </h3>

            <p className="text-slate-700 leading-relaxed mb-6">
              “The subscription makes my life so much easier.
              I know my baby is getting the best nutrition
              every single day.”
            </p>

            <p className="text-sm font-semibold text-slate-800">
              — Jessica, Austin TX
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyParentsLove;
