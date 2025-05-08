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
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
      
      {/* IMAGES */}
      <div className="flex flex-col items-center gap-6">
        {/* Big pill */}
        <div className="w-56 h-80 md:w-64 md:h-96 overflow-hidden rounded-full">
          <Image
            src="/gear/large.jpg"
            alt="Main camera"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        {/* Two half-pills side by side */}
        <div className="flex gap-6">
          <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-tl-full rounded-tr-full">
            <Image
              src="/gear/top.jpg"
              alt="Lenses top view"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-bl-full rounded-br-full">
            <Image
              src="/gear/bottom.jpg"
              alt="Camera on gimbal"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex-1">
        <p className="uppercase text-sm text-gray-400 mb-2">What’s my gear?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          I have the experience to make of your photo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
          {gearItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="w-4 h-4 border-2 border-white rounded-full flex-shrink-0" />
              <span className="text-lg">{item}</span>
            </div>
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
