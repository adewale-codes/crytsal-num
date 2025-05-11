// components/Services.tsx
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Photography",
    description:
      "Our photography packages vary depending on the type of service you require.",
    href: "/services/photography",
    icon: "/i1.svg",
  },
  {
    title: "Videography",
    description:
      "Our videography packages vary depending on the type of service you require.",
    href: "/services/videography",
    icon: "/i2.svg",
  },
  {
    title: "Aerial Photography",
    description:
      "Our aerial photography packages vary depending on the type of service you require.",
    href: "/services/aerial",
    icon: "/i3.svg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#1A2835] text-white p-5 md:p-20">
      <div className="container mx-auto px-6">
        {/* header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <p className="uppercase text-sm text-gray-400">My Services</p>
            <h2 className="mt-2 max-w-xl text-4xl md:text-5xl font-bold leading-tight">
              I have the experience to make of your photo
            </h2>
          </div>
          <Link
            href="/services"
            className="bg-white text-[#1A2835] px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            All Services &rarr;
          </Link>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-transparent md:border-gray-700">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`
                p-8
                ${i < services.length - 1 ? "md:border-r md:border-gray-700" : ""}
              `}
            >
              <div className="mb-6">
                <Image
                  src={s.icon}
                  alt={`${s.title} icon`}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-300 mb-6">{s.description}</p>
              <Link
                href={s.href}
                className="inline-flex items-center font-medium hover:underline"
              >
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
