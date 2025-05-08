// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const pages = [
  "About Us",
  "Our Services",
  "Gallery",
  "Blog Post",
  "Our Team",
  "Contact Us",
];

const otherPages = [
  "Photography",
  "Testimonial",
  "Style Guide",
  "Change Log",
  "License",
];

const Footer: FC = () => (
  <footer className="bg-[#1A2835] text-gray-300">
    <div className="container mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {/* LOGO + DESC + SOCIAL */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white">Pixoto</h2>
        <p>
          There are many variations passag of Lorem Ipsum available but the
        </p>
        <div className="flex flex-wrap gap-4">
          {[
            { icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }, // home placeholder
            { icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.51 2.04-4.51 4.55 0 .36.04.71.12 1.04A12.8 12.8 0 0 1 1.64.9a4.52 4.52 0 0 0-.61 2.29 4.56 4.56 0 0 0 2 3.8 4.5 4.5 0 0 1-2.05-.56v.06C2 10.21 4 12.2 6.56 12.49a4.52 4.52 0 0 1-2.03.08A4.53 4.53 0 0 0 8.29 16a9.1 9.1 0 0 1-5.63 1.94A9.28 9.28 0 0 1 0 17.88a12.8 12.8 0 0 0 6.92 2" }, // twitter placeholder
            { icon: "M12 2C6.48 2 2 6.48 2 12c0 4.84 3.66 8.87 8.36 9.77V14.9H7.9v-2.9h2.46V9.4c0-2.44 1.46-3.8 3.7-3.8 1.07 0 2.2.2 2.2.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.75l-.44 2.9h-2.3v6.88C18.34 20.87 22 16.84 22 12c0-5.52-4.48-10-10-10z" }, // facebook placeholder
            { icon: "M21.5 2h-19C1.22 2 1 2.22 1 2.5v19c0 .28.22.5.5.5h19c.28 0 .5-.22.5-.5v-19c0-.28-.22-.5-.5-.5zm-11 15.5h-3v-8h3v8zm-1.5-9.32c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm11 9.32h-3v-4.5c0-1.07-.02-2.45-1.5-2.45s-1.73 1.17-1.73 2.38v4.57h-3v-8h2.88v1.07h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.58v4.89z" }, // linkedin placeholder
          ].map((s, i) => (
            <button
              key={i}
              className="w-10 h-10 bg-[#223241] rounded flex items-center justify-center hover:bg-gray-700 transition"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={s.icon} />
              </svg>
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm">
          • Powered by{" "}
          <span className="font-semibold text-white">Webflow</span>
        </p>
      </div>

      {/* NAV COLUMNS */}
      <div>
        <h3 className="uppercase font-semibold mb-4 text-white">Pages</h3>
        <ul className="space-y-2">
          {pages.map((p) => (
            <li key={p}>
              <Link
                href={`/${p.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-white transition"
              >
                {p}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="uppercase font-semibold mb-4 text-white">
          Other Pages
        </h3>
        <ul className="space-y-2">
          {otherPages.map((p) => (
            <li key={p}>
              <Link
                href={`/${p.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-white transition"
              >
                {p}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* SUBSCRIBE */}
      <div>
        <h3 className="uppercase font-semibold mb-4 text-white">Subscribe</h3>
        <p className="mb-4 text-sm">
          There are many variations passag of Lorem Ipsum available.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none text-[#1A2835]"
          />
          <button
            type="submit"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-[#1A2835] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-6 pb-4 text-center text-sm text-gray-500">
      © 2023 Pixoto. All rights reserved.
    </div>
  </footer>
);

export default Footer;
