import React from "react";

const products = [
  {
    id: 1,
    name: "Mango Puree",
    description: "Ultra-smooth Alphonso mangoes. 4mo+",
    price: "$4.50",
    emoji: "🥭",
    bg: "bg-pink-50",
  },
  {
    id: 2,
    name: "Avocado Pear",
    description: "Brain-boosting fats for tiny explorers. 6mo+",
    price: "$4.50",
    emoji: "🥑",
    bg: "bg-green-50",
  },
  {
    id: 3,
    name: "Rainbow Bites",
    description: "Soft roasted carrot cubes. Toddlers.",
    price: "$5.25",
    emoji: "🥕",
    bg: "bg-yellow-50",
  },
];

const ProductSection = () => {
  return (
    <section className="bg-white py-32">
      <div className="px-6 md:px-20 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Our Most Loved Meals
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Simple, nutritious recipes made fresh for every stage.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-[36px] border border-black/5 bg-white shadow-sm p-6 flex flex-col"
            >
              {/* IMAGE AREA */}
              <div
                className={`rounded-3xl ${product.bg} h-52 flex items-center justify-center mb-8`}
              >
                <span className="text-6xl">{product.emoji}</span>
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-800">
                    {product.name}
                  </h3>
                  <span className="text-pink-400 font-semibold">
                    {product.price}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-6">
                  {product.description}
                </p>
              </div>

              {/* CTA */}
              <button className="mt-auto rounded-xl bg-blue-200 py-3 text-sm font-semibold text-slate-800 hover:bg-blue-300 transition">
                Add to Box
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
