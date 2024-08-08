"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (e, section) => {
    // Add navigation logic here if needed
  };

  const routes = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Artists", href: "/artists" },
  ];

  return (
    <nav className="relative w-full font-medium drop-shadow-md">
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#FFFFFF] nav">
        <div>
          <h1 className="text-5xl font-signature ml-2">
            <a
              className="link-underline link-underline-black"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <Image src="./Logo.svg" alt="logo" height={50} width={50} />
            </a>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-grow justify-center items-center space-x-4">
            {routes.map(({ name, href }, index) => (
              <Link
                key={index}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 link-underline"
                href={href}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              className="navbtn border border-black rounded-full uppercase text-black
           p-2 w-full sm:w-[211px] flex justify-evenly items-center gap-2 text-sm md:text-[16px]"
            >
              How it Works{" "}
              <Image src="./arrow.svg" alt="arrow" height={15} width={15} />
            </button>
            <button className="navbtn rounded-full text-black uppercase bg-[#FFDA79] p-2 w-full sm:w-[142px] flex justify-evenly items-center gap-2 text-sm md:text-[16px] shadow-[10px_10px_20px_-5px] shadow-slate-300">
              JOIN{" "}
              <Image src="./arrow.svg" alt="arrow" height={15} width={15} />
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-grow flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 hover:text-rose-600 focus:outline-none focus:text-rose-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white z-20 text-center">
          <div className="py-2 space-y-1">
            {["Categories", "Products", "Artists"].map((section) => (
              <Link
                key={section}
                onClick={(e) => handleNavigation(e, section.toLowerCase())}
                href={`/${section.toLowerCase()}`}
                className="nav-links px-4 py-2 block cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 link-underline"
              >
                {section}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
