"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
];

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Background */}
      <div className="fixed inset-x-0 top-0 -z-20 dark:hidden opacity-70">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full object-cover"
        />
      </div>

      {/* NAV */}
      <nav
        className={`fixed left-1/2 top-5 z-50
        -translate-x-1/2 transition-all duration-500
        
        ${isScroll ? "w-[95%] lg:w-[88%]" : "w-[98%] lg:w-[92%]"}`}
      >
        <div
          className={`
          rounded-[28px]
          border
          px-6
          lg:px-10
          py-1.5

          ${
            isScroll
              ? `
                bg-white/75
                dark:bg-[#0E1016]/80
                backdrop-blur-2xl
                border-white/20
                shadow-[0_20px_80px_rgba(0,0,0,.08)]
              `
              : `
                bg-white/40
                dark:bg-[#0E1016]/50
                backdrop-blur-xl
                border-white/10
              `
          }
        `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-3"
            >
              <div>
                <h2
                  className="
                  text-xl
                  font-black
                  dark:text-white
                "
                >
                  Sahil
                </h2>

                <p
                  className="
                  text-xs
                  text-gray-500
                "
                >
                  Backend Developer
                </p>
              </div>
            </button>

            {/* Desktop */}
            <ul
              className="
              hidden
              lg:flex
              items-center
              gap-2
            "
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => handleClick(item.label)}
                    className={`
                    relative
                    px-5
                    py-3
                    rounded-full
                    transition
                    text-sm

                    ${
                      active === item.label
                        ? `
                          bg-black
                          text-white
                          dark:bg-white
                          dark:text-black
                        `
                        : `
                          hover:bg-black/5
                          dark:hover:bg-white/10
                        `
                    }
                  `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDarkMode((v) => !v)}
                className="
                h-11
                w-11
                rounded-full
                border
                flex
                items-center
                justify-center
                hover:rotate-180
                duration-500
              "
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="#contact"
                className="
                hidden
                md:flex
                items-center
                gap-2
                px-6
                py-2
                rounded-full
                text-gray-800
                dark:text-white
                font-semibold
                hover:scale-105
                duration-300
              "
              >
                Let's Talk
                <ArrowUpRight size={18} />
              </a>

              {/* Mobile */}
              <button onClick={() => setMenuOpen(true)} className="lg:hidden">
                <Menu />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        <div
          className={`
          fixed
          inset-0
          transition

          ${menuOpen ? "visible" : "invisible"}
        `}
        >
          <div
            className="
            absolute
            inset-0
            bg-black/40
          "
            onClick={() => setMenuOpen(false)}
          />

          <div
            className={`
            absolute
            right-0
            top-0
            h-screen
            w-[300px]
            bg-white
            dark:bg-[#101218]
            p-8

            transition-all

            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          >
            <button onClick={() => setMenuOpen(false)} className="mb-10">
              <X />
            </button>

            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => handleClick(item.label)}
                    className="
                    text-lg
                    font-medium
                  "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
