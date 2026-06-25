import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaCopy,
  FaCheck,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaClock,
  FaCircleCheck,
} from "react-icons/fa6";
import { LuSendHorizontal } from "react-icons/lu";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------ EDIT ME: your real details ------------------ */
const Contacts = {
  email: "sahilkourav02@gmail.com",
  phone: "+91 91316 35893",
  location: "Gurgaon, Haryana",
};

/* ------------------ EDIT ME: availability status ------------------ */
const STATUS = {
  available: true,
  responseTime: "~12h",
  timezone: "IST (UTC+5:30)",
  stack: "MERN + GenAi",
};

/* ------------------ EDIT ME: what people usually reach out for ------------------ */
const TOPICS = [
  {
    id: "freelance",
    label: "Freelance project",
    subject: "Freelance project inquiry",
  },
  { id: "fulltime", label: "Full-time role", subject: "Full-time opportunity" },
  {
    id: "collab",
    label: "Open-source collaboration",
    subject: "Open-source collaboration",
  },
  { id: "hi", label: "Just say hello", subject: "Hey Sahil" },
];

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/sahilkourav_" },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahilkourav",
  },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/sahil-kourav" },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/sahilkourav_",
  },
];

/* A single key:value "response" row with copy-to-clipboard */
const ResponseRow = ({ icon: Icon, label, value, copyValue }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
      <div className="flex items-center gap-3.5 min-w-0">
        <Icon className="text-blue-500 dark:text-blue-400 shrink-0" size={14} />
        <span className="font-mono text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 shrink-0 w-14">
          {label}
        </span>
        <span className="font-mono text-sm text-gray-900 dark:text-gray-100 truncate">
          {value}
        </span>
      </div>

      <button
        onClick={handleCopy}
        aria-label={`Copy ${label.toString()}`}
        className="flex items-center justify-center w-8 h-8 rounded-md
        text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400
        hover:bg-blue-50 dark:hover:bg-gray-800 transition shrink-0"
      >
        {copied ? (
          <FaCheck className="text-green-500 dark:text-green-400" size={13} />
        ) : (
          <FaCopy size={13} />
        )}
      </button>
    </div>
  );
};

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [topic, setTopic] = useState(TOPICS[0]);

  const mailHref = `mailto:${Contacts.email}?subject=${encodeURIComponent(
    topic.subject,
  )}`;

  return (
    <section className="px-[7%] py-24 sm:py-28 bg-white dark:bg-transparent">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14 sm:mb-16">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-semibold font-Ovo text-gray-800 dark:text-white leading-tight">
            Let&rsquo;s talk shop<span className="text-[#ff2d55]">.</span>
          </h2>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto mt-5 font-Ovo leading-relaxed text-gray-600 dark:text-gray-300">
            I&rsquo;m always open to connecting with like-minded people. Whether
            you have an idea, opportunity, or just want to say hello — feel free
            to reach out!
          </p>
        </div>

        {/* Terminal-style card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-800
          bg-white dark:bg-transparent shadow-lg dark:shadow-black/20 overflow-hidden"
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                ~/sahil/contact
              </span>
            </div>

            <span className="flex items-center gap-1.5 font-mono text-xs text-green-600 dark:text-gray-300">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  STATUS.available
                    ? "bg-green-500 animate-pulse"
                    : "bg-gray-400"
                }`}
              />
              {STATUS.available ? "200 OK" : "503"}
            </span>
          </div>

          {/* Response headers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-3 px-6 py-5 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
            <div className="font-mono text-[11px]">
              <p className="uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Response-Time
              </p>
              <p className="flex items-center gap-1.5 mt-1.5 text-sm text-gray-800 dark:text-gray-200">
                <FaClock
                  size={10}
                  className="text-blue-500 dark:text-blue-400"
                />{" "}
                {STATUS.responseTime}
              </p>
            </div>
            <div className="font-mono text-[11px]">
              <p className="uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Timezone
              </p>
              <p className="mt-1.5 text-gray-800 text-sm dark:text-gray-200">
                {STATUS.timezone}
              </p>
            </div>
            <div className="font-mono text-[11px] col-span-2 sm:col-span-1">
              <p className="uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Stack
              </p>
              <p className="mt-1.5 text-gray-800 text-sm dark:text-gray-200 truncate">
                {STATUS.stack}
              </p>
            </div>
          </div>

          {/* Response body */}
          <div className="px-6 py-5 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
            {/* Heading */}
            <p className="font-medium text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 my-2">
              Contact Details
            </p>

            {/* Content */}
            <div className="space-y-1 divide-y divide-gray-200 dark:divide-gray-800">
              <div className="font-serif">
                <ResponseRow
                  icon={FaEnvelope}
                  label={
                    <span className="font-sans font-semibold uppercase text-[11px]">
                      email
                    </span>
                  }
                  value={
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {Contacts.email}
                    </span>
                  }
                />
              </div>

              <div className="font-sans">
                <ResponseRow
                  icon={FaPhone}
                  label={
                    <span className="font-sans font-semibold uppercase text-[11px]">
                      phone
                    </span>
                  }
                  value={
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {Contacts.phone}
                    </span>
                  }
                />
              </div>

              <div className="font-sans">
                <ResponseRow
                  icon={FaLocationDot}
                  label={
                    <span className="font-sans font-semibold  uppercase text-[11px]">
                      based 
                    </span>
                  }
                  value={
                    <span className="font-medium text-gray-800 dark:text-white">
                      {Contacts.location}
                    </span>
                  }
                  copyValue={Contacts.location}
                />
              </div>
            </div>
          </div>

          {/* Topic selector — params for the request, not a form */}
          <div className="px-6 py-5 border-t border-gray-200 dark:border-gray-800">
            <div className="mb-3 capitalize font-sans text-[15px]  font-semibold tracking-normal text-gray-700 dark:text-gray-300">
              What are you reaching out for?
            </div>

            <div className="flex flex-wrap gap-2.5">
              {TOPICS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTopic(t)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs border transition ${
                    topic.id === t.id
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* curl-style CTA, no form involved — updates with the chosen topic */}
          <a
            href={mailHref}
            className="group flex items-center gap-2.5 px-6 py-5 border-t border-gray-200 dark:border-gray-800
            font-mono text-sm text-gray-800 dark:text-gray-200
            hover:bg-blue-50 dark:hover:bg-gray-800/60 transition"
          >
            <span className="text-blue-500 dark:text-blue-400">$</span>
            <span className="truncate">
              curl -X POST {Contacts.email} -d &quot;subject={topic.subject}
              &quot;
            </span>
            <span className="ml-auto flex items-center justify-center  gap-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition whitespace-nowrap">
              Send Email
              <LuSendHorizontal size={17} />
            </span>
          </a>
        </motion.div>

        {/* Socials below the card */}
        <div className="flex items-center gap-4 mt-10">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            or find me on
          </span>
          <div className="flex gap-3">
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -3, scale: 1.08 }
                }
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-9 h-9 rounded-lg
                border border-gray-200 dark:border-gray-700
                text-gray-600 dark:text-gray-400
                hover:text-blue-500 hover:border-blue-400 dark:hover:text-blue-400 transition"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
