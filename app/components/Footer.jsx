import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------ Social Links ------------------ */
const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/sahilkourav_" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sahilkourav" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/sahil-kourav" },
  { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/sahilkourav_" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-16 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-transparent px-[7%]">

      {/* Gradient Divider */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto pt-14 pb-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* Brand */}
          <div className="space-y-4 max-w-sm">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sahil<span className="text-[#ff2d55]">.</span>
            </h2>

            <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400">
              Backend developer crafting scalable APIs and reliable systems
              with Node.js, microservices architecture, and clean code.
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">

            <span className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Follow Me!
            </span>

            <div className="flex gap-4">

              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-10 h-10
                  rounded-xl border border-gray-200 dark:border-gray-700
                  bg-gray-50 dark:bg-gray-800
                  text-gray-600 dark:text-gray-300
                  hover:text-blue-600 dark:hover:text-blue-400
                  hover:border-blue-400 dark:hover:border-blue-500
                  transition-all shadow-sm hover:shadow-lg"
                >
                  <Icon />
                </motion.a>
              ))}

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200 dark:border-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">

          <p>
            © {currentYear} Sahil Kourav. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Privacy
            </a>
            <a href="#terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Back To Top */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
          whileHover={prefersReducedMotion ? undefined : { y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center
          rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white
          shadow-lg hover:shadow-xl transition"
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;