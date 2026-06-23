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
import { motion, useReducedMotion } from "framer-motion";

/* ------------------ EDIT ME: your real details ------------------ */
const CONTACT = {
  email: "sahilkourav02@gmail.com",   // TODO: replace with your real email
  phone: "+91 91316 35893",          // TODO: replace with your real phone
  location: "Remote · India (IST)",  // TODO: replace / remove if you prefer
};

/* ------------------ EDIT ME: availability status ------------------ */
const STATUS = {
  available: true,                  // TODO: flip to false when you're booked up
  responseTime: "~12h",
  timezone: "IST (UTC+5:30)",
  stack: "MERN + GenAi",
};

/* ------------------ EDIT ME: what people usually reach out for ------------------ */
const TOPICS = [
  { id: "freelance", label: "Freelance project", subject: "Freelance project inquiry" },
  { id: "fulltime", label: "Full-time role", subject: "Full-time opportunity" },
  { id: "collab", label: "Open-source collab", subject: "Open-source collaboration" },
  { id: "hi", label: "Just say hi", subject: "Hey Sahil" },
];

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/sahilkourav_" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sahilkourav" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/sahil-kourav" },
  { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/sahilkourav_" },
];

/* A single key:value "response" row with copy-to-clipboard */
const ResponseRow = ({ icon: Icon, label, value, copyValue }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard not available, fail silently */
    }
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <div className="flex items-center gap-3 min-w-0">
        <Icon className="text-blue-500 dark:text-blue-400 shrink-0" />
        <span className="font-mono text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 shrink-0">
          {label}
        </span>
        <span className="font-mono text-sm text-gray-900 dark:text-gray-100 truncate">
          {value}
        </span>
      </div>

      <button
        onClick={handleCopy}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="ml-3 flex items-center justify-center w-8 h-8 rounded-md
        text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400
        hover:bg-blue-50 dark:hover:bg-gray-800 transition shrink-0"
      >
        {copied ? <FaCheck className="text-green-500 dark:text-green-400" /> : <FaCopy />}
      </button>
    </div>
  );
};

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [topic, setTopic] = useState(TOPICS[0]);

  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    topic.subject
  )}`;

  return (
    <section className="px-[7%] py-20 bg-white dark:bg-transparent">
      <div className="max-w-3xl mx-auto">
         {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-Ovo text-gray-800 dark:text-white mb-6">
            Let&rsquo;s talk shop<span className="text-[#ff2d55]">.</span>
          </h2>

          <p className="max-w-2xl mx-auto font-Ovo leading-relaxed text-gray-700 dark:text-gray-300">
            No forms, no friction — here&rsquo;s the raw response. Copy what you need,
          pick what this is about, and fire off a request below.
          </p>
        </div>



        {/* Terminal-style card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-800
          bg-white dark:bg-gray-800 shadow-lg dark:shadow-black/40 overflow-hidden"
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-gray-600 dark:text-gray-400">
                ~/sahil/contact
              </span>
            </div>

            <span className="flex items-center gap-1.5 font-mono text-xs text-green-600 dark:text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              200 OK
            </span>
          </div>

          {/* Response headers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-5 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30">
            <div className="font-mono text-[11px]">
              <p className="uppercase tracking-widest text-gray-500 dark:text-gray-400">Response-Time</p>
              <p className="flex items-center gap-1.5 mt-1 text-sm text-gray-800 dark:text-gray-200">
                <FaClock size={10} className="text-blue-500 dark:text-blue-400" /> {STATUS.responseTime}
              </p>
            </div>
            <div className="font-mono text-[11px]">
              <p className="uppercase tracking-widest text-gray-500 dark:text-gray-400">Timezone</p>
              <p className="mt-1 text-gray-800 text-sm dark:text-gray-200">{STATUS.timezone}</p>
            </div>
            <div className="font-mono text-[11px] col-span-2 sm:col-span-1">
              <p className="uppercase tracking-widest text-gray-500 dark:text-gray-400">Stack</p>
              <p className="mt-1 text-gray-800 text-sm dark:text-gray-200 truncate">{STATUS.stack}</p>
            </div>
          </div>

          {/* Response body */}
          <div className="px-5 py-2">
            <ResponseRow icon={FaEnvelope} label="email" value={CONTACT.email} />
            <ResponseRow icon={FaPhone} label="phone" value={CONTACT.phone} />
            <ResponseRow icon={FaLocationDot} label="based" value={CONTACT.location} copyValue={CONTACT.location} />
          </div>

          {/* Topic selector — params for the request, not a form */}
          <div className="px-5 py-4 border-t border-gray-200 dark:border-gray-800">
            <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5">
              params.reason
            </p>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTopic(t)}
                  className={`px-3 py-1.5 rounded-full font-mono text-xs border transition ${
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
            className="group flex items-center gap-2 px-5 py-4 border-t border-gray-200 dark:border-gray-800
            font-mono text-sm text-gray-800 dark:text-gray-200
            hover:bg-blue-50 dark:hover:bg-gray-800/60 transition"
          >
            <span className="text-blue-500 dark:text-blue-400">$</span>
            <span className="truncate">
              curl -X POST sahilkourav.dev/contact -d reason=&quot;{topic.id}&quot;
            </span>
            <span className="ml-auto text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition whitespace-nowrap">
              send →
            </span>
          </a>
        </motion.div>

        {/* Socials below the card */}
        <div className="flex items-center gap-4 mt-8">
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
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.08 }}
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