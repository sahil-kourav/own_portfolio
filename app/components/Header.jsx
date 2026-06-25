import Image from "next/image";
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const roles = [
  "Backend Developer",
  "Node.js Developer",
  "Backend Focused MERN Developer",
];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative w-full py-24 md:py-24 px-[5%] lg:px-[10%] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mt-5 mx-auto text-center space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
          <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-700 dark:text-gray-200">
            Available for Work
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Sahil Kourav
        </h1>

        {/* Typing Role */}
        <h2 className="text-2xl lg:text-3xl font-semibold flex justify-center items-center">
          <span className="bg-gradient-to-r from-gray-600 to-neutral-500 dark:from-gray-400 dark:to-neutral-300 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="ml-1 w-0.5 h-[1em] bg-gray-600 dark:bg-gray-400 animate-pulse" />
        </h2>

        {/* Description */}
        <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I build robust server-side applications and REST APIs using Node.js,
          Express, and MongoDB. Focused on scalable architecture, clean code,
          and efficient database design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
          <a
            href="#contact"
            className="px-24 md:px-14 py-2 rounded-full bg-gray-800 text-white flex items-center gap-2"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
          </a>

          <a
            href="/Sahil_Kourav_Nodejs_Developer.pdf"
            download
            className="px-24 md:px-14 py-2 rounded-full border border-gray-500 bg-white dark:text-black flex items-center gap-2"
          >
            My Resume
            <Image src={assets.download_icon} alt="download" className="w-4" />
          </a>
        </div>

        {/* Modern Scroll Indicator */}
        <motion.div
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center pt-8 cursor-pointer select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-[1px] h-6 bg-gradient-to-b from-gray-400 to-transparent" />

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-500 dark:text-gray-400"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
