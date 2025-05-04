import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="p-5 md:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center justify-center border-2 p-5 rounded-t-full rounded-b-full">
            <Image
              src="/a1.jpg"
              alt="Photographer"
              width={600}
              height={600}
              className="rounded-t-full rounded-b-full"
            />
          </div>
        </div>
        <div>
          <p className="uppercase text-sm text-gray-400 mb-2">About me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We’re the leading photo studio in the country
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text.
          </p>
          <button className="bg-white text-[#1A2835] px-6 py-3 rounded shadow hover:bg-gray-100 transition">
            About us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
