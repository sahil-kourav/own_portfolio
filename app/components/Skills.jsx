// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { skills, categories } from "@/assets/assets";

// export default function Skills() {
//   const [active, setActive] = useState("backend");

// const filtered = skills.filter((s) => s.category === active);

//   return (
//     <section id="skills" className="relative py-10 md:py-12 px-6">

//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-xs mb-4 tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
//             What I Know
//           </p>
//           <h2 className="text-5xl font-Ovo font-semibold text-gray-900 dark:text-white">
//             Skills & Tools
//           </h2>
//           <p className="text-center max-w-2xl mx-auto mt-5 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
//             A set of technologies I use to build modern, responsive, and
//             high-quality applications.
//           </p>
//         </div>

//         {/* Category Tabs */}
//         <div className="flex justify-center mb-10">
//           <div className="flex gap-0 md:gap-2 lg:gap-2 p-2 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white/70 dark:bg-neutral-900/10 backdrop-blur">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActive(cat)}
//                 className={`px-5 py-2 text-sm rounded-full capitalize transition-all duration-300
//                   ${
//                     active === cat
//                       ? "bg-black text-white dark:bg-white dark:text-black shadow"
//                       : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
//                   }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Skills Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {filtered.map((skill, i) => (
//               <div
//                 key={skill.name}
//                 className="group relative rounded-2xl p-6 bg-white dark:bg-neutral-900/10 border border-neutral-300 dark:border-neutral-800 hover:-translate-y-2 transition-all duration-300"
//               >
//                 {/* Subtle traditional frame */}
//                 <div className="absolute inset-0 rounded-2xl border border-dashed border-neutral-600 dark:border-neutral-400 opacity-0 group-hover:opacity-100 transition" />

//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-6">
//                     <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                       {skill.name}
//                     </h3>
//                     <span className="text-sm text-gray-500 dark:text-gray-400">
//                       {skill.level}%
//                     </span>
//                   </div>

//                   {/* Progress */}
//                   <div className="relative h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       transition={{ duration: 1.2, ease: "easeOut" }}
//                       className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300"
//                     />
//                   </div>

//                   {/* Category label */}
//                   <div className="mt-6 text-xs uppercase tracking-widest text-gray-400">
//                     {skill.category}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }
















import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, categories } from "@/assets/assets";

export default function Skills() {
  const [active, setActive] = useState("backend");

  const filtered = skills.filter((s) => s.category === active);
  const ticks = [0, 20, 40, 60, 80, 100];

  return (
    <section id="skills" className="relative py-10 md:py-12 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs mb-4 tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            What I Know
          </p>
          <h2 className="text-5xl font-Ovo font-semibold text-gray-900 dark:text-white">
            Skills & Tools
          </h2>
          <p className="text-center max-w-2xl mx-auto mt-5 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
            A set of technologies I use to build modern, responsive, and
            high-quality applications.
          </p>
        </div>

        {/* Mobile category nav */}
        <div className="flex md:hidden gap-6 overflow-x-auto pb-3 mb-8 -mx-6 px-6 border-b border-neutral-200 dark:border-neutral-800">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 flex items-center gap-2 pb-2 border-b-2 transition-colors ${
                active === cat
                  ? "border-blue-500 text-gray-900 dark:text-white"
                  : "border-transparent text-gray-500 dark:text-gray-400"
              }`}
            >
              <span className="font-mono text-[10px] text-gray-400 dark:text-gray-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="capitalize text-sm">{cat}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-12">
          {/* Desktop index rail */}
          <nav className="hidden md:flex md:flex-col md:sticky md:top-28 self-start gap-1">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`group flex items-center gap-3 py-2.5 pl-4 -ml-px border-l-2 text-left transition-all duration-300 ${
                  active === cat
                    ? "border-blue-500"
                    : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
                }`}
              >
                <span
                  className={`font-mono text-[11px] transition-colors ${
                    active === cat
                      ? "text-blue-500"
                      : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`capitalize font-Ovo text-base transition-colors ${
                    active === cat
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </nav>

          {/* Skill ledger */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col"
            >
              {filtered.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 py-5 border-b border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                >
                  <span className="sm:w-44 shrink-0 font-Ovo text-lg text-gray-800 dark:text-white">
                    {skill.name}
                  </span>

                  <div className="flex items-center gap-4 flex-1">
                    {/* Ruler */}
                    <div className="relative flex-1 h-6">
                      <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-200 dark:bg-neutral-800" />
                      {ticks.map((t) => (
                        <span
                          key={t}
                          style={{ left: `${t}%` }}
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-px h-2 bg-neutral-300 dark:bg-neutral-700"
                        />
                      ))}
                      <motion.div
                        initial={{ left: "0%" }}
                        whileInView={{ left: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: i * 0.06 }}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 ring-4 ring-blue-500/15 dark:ring-cyan-400/20 transition-transform duration-300 group-hover:scale-125"
                      />
                    </div>

                    <span className="font-mono text-sm text-gray-500 dark:text-gray-400 w-12 text-right shrink-0">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}