import React from "react";
import { FaStar, FaCircleCheck } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------ EDIT ME: swap in your real reviews ------------------ */
const TESTIMONIALS = [
  {
    name: "Ananya Rao",
    role: "Product Manager",
    quote:
      "Sahil picked up our half-built MERN app and shipped the missing pieces in two weeks flat. Communication was clear the whole way — no surprises, no scope creep.",
    rating: 5,
    initials: "AR",
  },

  {
    name: "Priya Yadav",
    role: "Team Lead",
    quote:
      "Sahil is a rare find: a backend developer who can also think about the user experience. He made our API faster, more secure, and easier to use, and he did it with a smile.",
    rating: 5,
    initials: "PY",
  },
  {
    name: "Devendra Choudhary",
    role: "Senior Developer",
    quote:
      "Joined our team for a six-month sprint and left the codebase cleaner than he found it. Tests included, which is rarer than it should be.",
    rating: 5,
    initials: "DC",
  },
  {
    name: "Anil Kumar",
    role: "Voice Support Executive",
    quote:
      "I'm not technical, and he never once made me feel behind. He just built the thing, explained it in plain English, and shipped on time.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Nikita Kourav",
    role: "Frontend Developer",
    quote:
      "Sahil is a pleasure to work with. He takes feedback well, communicates clearly, and delivers high-quality code that meets the design specs.",
    rating: 4,
    initials: "NK",
  },
];

const STAR_COUNT = 5;

const Stars = ({ rating }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: STAR_COUNT }).map((_, i) => (
      <FaStar
        key={i}
        size={12}
        className={
          i < rating
            ? "text-blue-500 dark:text-blue-400"
            : "text-gray-200 dark:text-gray-700"
        }
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, variants }) => (
  <motion.div
    variants={variants}
    className="flex flex-col h-full rounded-2xl border border-gray-200 dark:border-gray-800
    bg-white dark:bg-transparent shadow-lg dark:shadow-black/20 p-6"
  >
    <div className="flex items-center justify-between mb-5">
      <Stars rating={testimonial.rating} />
      <span className="flex items-center gap-1 font-mono text-[11px] text-green-600 dark:text-green-400">
        <FaCircleCheck size={10} />
        verified
      </span>
    </div>

    <p className="relative font-Ovo text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 flex-1">
      <span
        className="absolute -top-3 -left-1 text-4xl leading-none text-blue-100 dark:text-blue-500/20 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <span className="relative">{testimonial.quote}</span>
    </p>

    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-200 dark:border-gray-800">
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full shrink-0
        font-mono text-sm font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
      >
        {testimonial.initials}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
          {testimonial.name}
        </p>
        <p className="font-mono text-[11px] text-gray-500 dark:text-gray-400 truncate">
          {testimonial.role}
        </p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();

  const passCount = TESTIMONIALS.length;
  const avgRating = (
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / passCount
  ).toFixed(1);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <section
      id="testimonials"
      className="px-[7%] py-24 sm:py-28 bg-white dark:bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-Ovo text-gray-800 dark:text-white leading-tight">
            What clients are saying<span className="text-[#ff2d55]">.</span>
          </h2>

          <p className="max-w-xl mx-auto mt-5 font-Ovo leading-relaxed text-gray-600 dark:text-gray-300">
            A few notes from people I&rsquo;ve built things with — freelance
            clients, teammates, and collaborators.
          </p>
        </div>

        {/* Testimonial grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              variants={cardVariants}
            />
          ))}
        </motion.div>

        {/* Soft tie-in to Contact, continuing the "test case" idea lightly */}
        <p className="text-center font-mono text-xs text-gray-500 dark:text-gray-400 mt-12">
          Want to be the next one?{" "}
          <a
            href="#contact"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Let&rsquo;s talk
          </a>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
