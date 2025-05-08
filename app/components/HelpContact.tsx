import Image from "next/image";
import { FC } from "react";

const HelpContact: FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image + dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/help-bg.jpg"
          alt="Camera gear"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between text-white">
        {/* Text */}
        <div className="max-w-xl">
          <p className="uppercase tracking-wide text-sm text-gray-300 mb-4">
            Simple Easy Quick Steps
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Need any help with Our photographer?
          </h2>
        </div>

        {/* Contact box */}
        <div className="mt-10 md:mt-0 bg-white rounded-xl p-8 flex flex-col sm:flex-row gap-10 text-[#1A2835] shadow-lg">
          <div>
            <p className="text-sm mb-1">Contact us</p>
            <p className="font-semibold">demo@gmail.com</p>
          </div>
          <div>
            <p className="text-sm mb-1">Call us 24/7</p>
            <p className="font-semibold">+00 123 456 789</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpContact;
