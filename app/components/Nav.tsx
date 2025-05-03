"use client";
import Link from "next/link";
import Image from "next/image";
// import logo from "../../assets/logo.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="bg-primary grid lg:grid-cols-[200px_minmax(400px,_1fr)_200px] grid-cols-[1fr_50px] items-center lg:px-28 px-4 py-5 h-24">
        <Link href="/">
          {/* <Image src={logo} height={40} width={186} alt="Brytatutors logo" /> */}
          <div>Crystal-num</div>
        </Link>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Services">Services</Link>
        </div>
        <Link href="/">
          <div className="bg-white p-5 flex justify-center items-center rounded-lg hidden lg:flex">
            <div className="text-black">Contact Us</div>
          </div>
        </Link>
        <div className="lg:hidden -mt-14 flex justify-self-end cursor-pointer">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" onClick={() => setIsOpen(false)} />
          ) : (
            <Bars3Icon className="h-6 w-6" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      <div
        className={`block lg:hidden fixed h-64 -mt-4  transform left-0 w-full bg-white transition-transform duration-300 ease-in-out overflow-auto text-black ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}
      >
        <div className="flex flex-col space-y-5 ml-5">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Services">Services</Link>
          <Link href="/">
          
            <div className="">Contact Us</div>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
