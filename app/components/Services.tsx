import Link from "next/link";

const services = [
  {
    title: "Photography",
    description:
      "Our photography packages vary depending on the type of service you require.",
    href: "/services/photography",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 .19 1.65 1.65 0 0 1-1.51 0 1.65 1.65 0 0 0-1-.19 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-.19-1 1.65 1.65 0 0 1 0-1.51 1.65 1.65 0 0 0 .19-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-.19 1.65 1.65 0 0 1 1.51 0 1.65 1.65 0 0 0 1 .19h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 .19 1 1.65 1.65 0 0 1 0 1.51 1.65 1.65 0 0 0-.19 1z" />
      </svg>
    ),
  },
  {
    title: "Videography",
    description:
      "Our photography packages vary depending on the type of service you require.",
    href: "/services/videography",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        <circle cx="8" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: "Aerial Photography",
    description:
      "Our photography packages vary depending on the type of service you require.",
    href: "/services/aerial",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
        <path d="M12 11v10m4-8l4-4m-8 0L8 3m8 4l4 4M4 7l4 4" />
      </svg>
    ),
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
          <Link href="/services">
            <div className="bg-white text-[#1A2835] px-6 py-3 rounded shadow hover:bg-gray-100 transition">
              All Services &rarr;
            </div>
          </Link>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-transparent md:border-gray-700">
          {services.map((s, i) => (
            <div
              key={i}
              className={`
                p-8
                ${i < services.length - 1 ? "md:border-r md:border-gray-700" : ""}
              `}
            >
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-300 mb-6">{s.description}</p>
              <Link href={s.href}>
                <div className="inline-flex items-center font-medium">
                  Read More &rarr;
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
