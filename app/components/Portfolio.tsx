import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface Album {
  title: string
  image: string
  tags: { icon: React.ReactNode; label: string }[]
  href: string
}

const albums: Album[] = [
  {
    title: "Life in Focus",
    image: "/d4.jpg",
    href: "/portfolio/life-in-focus",
    tags: [
      {
        icon: (
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5.5 20a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-3h13m-6.5-3V3m7.5 9V3" />
          </svg>
        ),
        label: "Sony Alpha",
      },
      {
        icon: (
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 10l-9-7-9 7v8a2 2 0 0 0 2 2h3m14-1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8l9-7 9 7v8z" />
          </svg>
        ),
        label: "New York",
      },
    ],
  },
  {
    title: "Faces of the World",
    image: "/d1.jpeg",
    href: "/portfolio/faces-of-the-world",
    tags: [
      {
        icon: (
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5.5 20a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-3h13m-6.5-3V3m7.5 9V3" />
          </svg>
        ),
        label: "Sony Alpha",
      },
      {
        icon: (
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 10l-9-7-9 7v8a2 2 0 0 0 2 2h3m14-1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8l9-7 9 7v8z" />
          </svg>
        ),
        label: "New York",
      },
    ],
  },
  {
    title: "Essence of Nature",
    image: "/d2.jpg",
    href: "/portfolio/essence-of-nature",
    tags: [
      {
        icon: (
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5.5 20a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-3h13m-6.5-3V3m7.5 9V3" />
          </svg>
        ),
        label: "Sony Alpha",
      },
      {
        icon: (
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 10l-9-7-9 7v8a2 2 0 0 0 2 2h3m14-1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8l9-7 9 7v8z" />
          </svg>
        ),
        label: "New York",
      },
    ],
  },
  {
    title: "Reflections of Life",
    image: "/d3.jpg",
    href: "/portfolio/reflections-of-life",
    tags: [
      {
        icon: (
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5.5 20a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-3h13m-6.5-3V3m7.5 9V3" />
          </svg>
        ),
        label: "Sony Alpha",
      },
      {
        icon: (
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 10l-9-7-9 7v8a2 2 0 0 0 2 2h3m14-1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8l9-7 9 7v8z" />
          </svg>
        ),
        label: "New York",
      },
    ],
  },
]

const Portfolio: FC = () => (
    <section className="bg-[#1A2835] text-white py-20">
      <div className="container mx-auto px-6 text-center mb-12">
        <p className="uppercase text-sm text-gray-400">My Album</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">
          Photography portfolio <br /> by Pixoto Studio
        </h2>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        {albums.map((a, i) => (
          <div key={i} className="relative h-64 sm:h-80 rounded overflow-hidden">
            <Image
              src={a.image}
              alt={a.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <div className="flex flex-wrap items-center justify-between">
                <Link
                  href={a.href}
                  className="bg-white text-[#1A2835] px-4 py-1 rounded text-sm"
                >
                  Read More
                </Link>
                <div className="flex space-x-2 text-xs text-gray-200">
                  {a.tags.map((t, j) => (
                    <span
                      key={j}
                      className="bg-white bg-opacity-20 backdrop-blur-sm px-2 py-1 rounded flex items-center"
                    >
                      {t.icon}
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/portfolio"
          className="underline text-sm text-gray-300 hover:text-gray-100"
        >
          View All Portfolio &rarr;
        </Link>
      </div>
    </section>
  );
  
  export default Portfolio;
