'use client';

import { Link } from "react-router-dom";


const ACCENT = "#C4161C";

const posts = [
  {
    id: 1,
    title: "When Should You Start Solids?",
    excerpt:
      "Understanding the right time to introduce solids and how to make the transition smooth for your baby.",
    category: "Feeding Basics",
    date: "March 12, 2026",
    image: "/images/blogs/blog1/1.png",
  },
  {
    id: 2,
    title: "How to Handle Food Rejection",
    excerpt:
      "It’s normal for babies to reject new flavors. Here’s how to respond calmly and confidently.",
    category: "Parenting Tips",
    date: "March 8, 2026",
    image: "/images/blogs/blog1/2.png",
  },
  {
    id: 3,
    title: "Understanding Baby Nutrition",
    excerpt:
      "Key nutrients your baby needs in the first year and how to support healthy development.",
    category: "Nutrition",
    date: "March 2, 2026",
    image: "/images/blogs/blog1/3.png",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] px-6 md:px-10 py-16">

      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Feeding with confidence
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Honest guidance, nutrition insights, and parenting clarity — all in one place.
        </p>
      </div>

      {/* FEATURED POST */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl overflow-hidden border border-gray-200">
          
          <div className="h-64 md:h-full bg-gray-100">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <span
              className="text-xs font-medium uppercase tracking-wide"
              style={{ color: ACCENT }}
            >
              Featured • {posts[0].category}
            </span>

            <h2 className="text-2xl font-semibold text-gray-900 mt-3 mb-4">
              {posts[0].title}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {posts[0].excerpt}
            </p>

            <Link
              href={`/blog/${posts[0].id}`}
              className="inline-block px-6 py-3 rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: ACCENT }}
            >
              Read article
            </Link>
          </div>
        </div>
      </div>

      {/* GRID POSTS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {posts.slice(1).map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-md transition"
          >
            <div className="h-52 bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: ACCENT }}
              >
                {post.category}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-3">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.id}`}
                className="text-sm font-medium"
                style={{ color: ACCENT }}
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="max-w-3xl mx-auto mt-24 text-center bg-white border border-gray-200 rounded-3xl p-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Ready to make feeding easier?
        </h3>

        <p className="text-gray-600 mb-6">
          Explore Fooby products designed for gentle, confident transitions.
        </p>

        <Link
          href="/shop"
          className="inline-block px-8 py-3 rounded-full text-white font-medium"
          style={{ backgroundColor: ACCENT }}
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}
