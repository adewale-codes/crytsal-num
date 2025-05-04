import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-primary text-white min-h-screen flex items-center">
      <div className="container mx-auto p-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <p className="uppercase tracking-widest text-sm mb-4 text-gray-300">
            Welcome to Pixoto World
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-100">
            We are a digital <br /> videography house
          </h1>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ante
            velit nunc morbi pretium ut nullam dolor pulvinar proin viverra
            ullamcorper aceget.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-primary px-6 py-3 rounded shadow hover:bg-gray-200 transition">
              Get in touch →
            </button>
            <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-primary transition">
              Read More →
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src="/h2.png"
            alt="drone"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
