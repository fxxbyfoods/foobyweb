import React, { useState } from "react";

export default function CartPage() {
  const PRICE = 299;
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const subtotal = PRICE * quantity;

  return (
    <section className="min-h-screen bg-[#FFF7F0] px-4 md:px-16 py-12">
      <h1 className="text-2xl font-semibold mb-8">
        Your Baby’s Cart 🍼
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl" />

            <div className="flex-1">
              <h3 className="font-medium">
                Organic Rice Cereal
              </h3>
              <p className="text-sm text-gray-500">
                Suitable for 6+ months
              </p>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={decrement}
                    className="px-3 py-1 text-lg"
                  >
                    −
                  </button>

                  <span className="px-3">
                    {quantity}
                  </span>

                  <button
                    onClick={increment}
                    className="px-3 py-1 text-lg"
                  >
                    +
                  </button>
                </div>

                <button className="text-sm text-red-500">
                  Remove
                </button>
              </div>
            </div>

            <div className="font-medium">
              ₹{subtotal}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
          <h2 className="font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹0</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-medium">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
          </div>

          <button
            className="
              w-full mt-6
              bg-[#F47C20] text-white
              py-3 rounded-xl
              font-medium
              hover:opacity-90 transition
            "
          >
            Proceed to Checkout
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Clean ingredients • No preservatives • Baby-safe
          </p>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <span>🛡 FSSAI Approved</span>
          <span>🌱 No Preservatives</span>
          <span>👶 Baby-Safe</span>
        </div>

        <p className="text-sm text-gray-500">
          🚚 Delivered in 3–5 days • Easy refunds if unopened
        </p>

        <p className="text-sm font-medium text-gray-700">
          👶 Trusted by 1,200+ parents across India
        </p>
      </div>
    </section>
  );
}
