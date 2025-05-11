// components/Gear.tsx
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const gearItems = [
  "Sony ILME-FX30",
  "Alpha 7 IV Full-Frame",
  "Lenavo E Lenses LME-FR7",
  "Samsung ILME-FR7",
  "Sony Alpha 330 DSLR-A330",
  "Sony Wide Angle Lenses",
];

const Gear: FC = () => (
  <section className="bg-[#1A2835] text-white py-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
      
      {/* IMAGES: mobile=column, md=grid */}
      <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-[3fr_2fr] md:grid-rows-2 md:gap-6">
        {/* Big pill spanning both rows on md+ */}
        <div className="relative w-56 h-80 overflow-hidden rounded-full md:row-span-2">
          <Image
            src="/g1.jpg"
            alt="Main camera"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Top half-pill */}
        <div className="relative w-40 h-40 overflow-hidden rounded-tl-full rounded-tr-full">
          <Image
            src="/g2.jpg"
            alt="Lenses top view"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Bottom half-pill */}
        <div className="relative w-40 h-40 overflow-hidden rounded-bl-full rounded-br-full">
          <Image
            src="/g3.jpg"
            alt="Camera on gimbal"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* TEXT & list */}
      <div className="flex-1">
        <p className="uppercase text-sm text-gray-400 mb-2">What’s my gear?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          I have the experience to make of your photo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
          {gearItems.map((item) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer">
              <span className="w-5 h-5 border-2 border-white rounded-full flex-shrink-0" />
              <span className="text-lg">{item}</span>
            </label>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-block bg-white text-[#1A2835] px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Read more our blog
        </Link>
      </div>
    </div>
  </section>
);

export default Gear;
