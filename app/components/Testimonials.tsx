"use client";
import Image from "next/image";
import { FC, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const data: Testimonial[] = [
  {
    name: "Tammy Powell",
    role: "Photo Viewer",
    image: "/a1.jpg",      // ← put your image here
    quote:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    name: "Mark Johnson",
    role: "Professional Photographer",
    image: "/a1.jpg",      // ← another image
    quote:
      "Working with Pixoto Studio was a game-changer. Their attention to detail, creativity, and professionalism made every shot perfect. Highly recommended!",
  },
];

const Testimonials: FC = () => {
  const [idx, setIdx] = useState(0);
  const { name, role, image, quote } = data[idx];

  const prev = () => setIdx((i) => (i - 1 + data.length) % data.length);
  const next = () => setIdx((i) => (i + 1) % data.length);

  return (
    <section className="bg-[#1A2835] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Testimonial image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        {/* RIGHT: Text + card + nav */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <p className="uppercase text-sm text-gray-400 mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Don't take our word for it, take theirs!
          </h2>

          {/* Card */}
          <div className="w-full bg-[#223241] rounded-xl p-8">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-gray-300 mb-4">{role}</p>
            <p className="text-gray-300 leading-relaxed">{quote}</p>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white text-[#1A2835] rounded-full flex items-center justify-center shadow focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-white text-[#1A2835] rounded-full flex items-center justify-center shadow focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
