// import { workData } from "@/assets/assets";
// import React, { useState } from "react";
// import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

// const Work = ({ isDarkMode }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section
//       id="work"
//       className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%] scroll-mt-20"
//     >
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
//         <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h4 className="inline-block text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
//             My Projects
//           </h4>
//           <h2 className="text-5xl font-Ovo font-semibold text-gray-800 dark:text-white mb-4">
//               Featured Work
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
//             A selection of projects showcasing my full-stack and front-end
//             expertise — each built with passion and precision.
//           </p>
//         </div>

//         {/* Project Cards */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {workData.map((project, index) => {
//             const isHovered = hoveredIndex === index;
            
//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group relative bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden 
//                   border border-gray-400 dark:border-gray-700
//                   hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10
//                   hover:bg-lightHover dark:hover:bg-darkHover
//                   hover:-translate-y-2 duration-500 cursor-pointer"
//               >
//                 {/* Project Image */}
//                 <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
                  
//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
//                     opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <div className="absolute bottom-4 left-4 right-4 flex gap-3">
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                         className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 
//                           backdrop-blur-sm rounded-lg text-sm font-medium 
//                           text-gray-800 dark:text-white
//                           hover:bg-white dark:hover:bg-gray-900 transition-all
//                           shadow-lg hover:shadow-xl hover:scale-105 duration-300"
//                       >
//                         <Github size={16} /> Code
//                       </a>
//                       <a
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                         className="flex items-center gap-2 px-4 py-2 
//                           bg-gradient-to-r from-blue-600 to-purple-600
//                           backdrop-blur-sm rounded-lg text-sm font-medium text-white
//                           hover:from-blue-700 hover:to-purple-700 transition-all
//                           shadow-lg hover:shadow-xl hover:scale-105 duration-300"
//                       >
//                         <ExternalLink size={16} /> Live Demo
//                       </a>
//                     </div>
//                   </div>

//                   {/* Featured badge */}
//                   {index === 0 && (
//                     <div className="absolute top-4 right-4">
//                       <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 
//                         text-white text-xs font-semibold rounded-full shadow-lg">
//                         <Sparkles size={12} />
//                         Featured
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Project Details */}
//                 <div className="p-5">
//                   {/* Title with arrow */}
//                   <div className="flex items-start justify-between gap-2 mb-3">
//                     <h3 className="text-lg font-semibold text-gray-800 dark:text-white 
//                       group-hover:text-transparent group-hover:bg-clip-text 
//                       group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600
//                       transition-all duration-500 flex-1">
//                       {project.title}
//                     </h3>
//                     <ArrowUpRight 
//                       className={`w-5 h-5 text-gray-400 dark:text-gray-500 
//                         transition-all duration-300 flex-shrink-0
//                         ${isHovered ? 'opacity-100 translate-x-1 -translate-y-1' : 'opacity-0'}`}
//                     />
//                   </div>

//                   {/* Description */}
//                   <p className="text-sm text-gray-600 dark:text-white/80 leading-relaxed mb-4 font-Ovo line-clamp-2">
//                     {project.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1.5 text-xs font-medium
//                           bg-gray-100 dark:bg-gray-800/50 
//                           border border-gray-300 dark:border-gray-700
//                           rounded-lg text-gray-700 dark:text-gray-300
//                           hover:border-gray-400 dark:hover:border-gray-600
//                           hover:bg-gray-200 dark:hover:bg-gray-800
//                           transition-all duration-300"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Bottom gradient accent */}
//                 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
//                   scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;


import { workData } from "@/assets/assets";
import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  X,
  Wrench,
  ListChecks,
  Lightbulb,
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

/* ------------------------------ Image Gallery ------------------------------ */
const ImageGallery = ({ images, title, onExpand }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    else if (delta < -50) goNext();
    touchStartX.current = null;
  };

  return (
    <div>
      {/* Main image */}
      <div
        className="relative w-full h-64 sm:h-80 bg-gray-100 dark:bg-gray-800 overflow-hidden group/gallery"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          onClick={() => onExpand(activeIndex)}
          className="w-full h-full object-cover cursor-zoom-in"
        />

        {/* expand hint */}
        <button
          onClick={() => onExpand(activeIndex)}
          aria-label="Expand image"
          className="absolute bottom-3 right-3 flex items-center justify-center w-8 h-8 rounded-full
            bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/60
            opacity-70 sm:opacity-0 sm:group-hover/gallery:opacity-100"
        >
          <Maximize2 size={14} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center
                w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm
                transition-all duration-300 opacity-70 sm:opacity-0 sm:group-hover/gallery:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center
                w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm
                transition-all duration-300 opacity-70 sm:opacity-0 sm:group-hover/gallery:opacity-100"
            >
              <ChevronRight size={18} />
            </button>

            {/* counter */}
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 p-3 overflow-x-auto bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300
                ${
                  activeIndex === i
                    ? "border-blue-600 dark:border-purple-500"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
            >
              <img src={img} alt={`thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* --------------------------------- Lightbox --------------------------------- */
const Lightbox = ({ images, startIndex, onClose }) => {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full
          bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={() => setIndex((p) => (p - 1 + images.length) % images.length)}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center
              w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => setIndex((p) => (p + 1) % images.length)}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center
              w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt={`Full view ${index + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
      />

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

/* ----------------------------- Project Modal ----------------------------- */
const ProjectModal = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightbox, setLightbox] = useState(null); // index or null

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape" && lightbox === null) onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose, lightbox]);

  if (!project) return null;

  const images = project.gallery?.length ? project.gallery : [project.image];
  const techStack = project.techStack?.length ? project.techStack : project.tags;
  const longDescription = project.longDescription || project.description;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <div
        onClick={handleBackdropClick}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6
          bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`relative flex flex-col w-full max-w-4xl max-h-[92vh] overflow-hidden
            bg-white dark:bg-gray-900 rounded-2xl border border-gray-300 dark:border-gray-700
            shadow-2xl transition-all duration-300
            ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
        >
          {/* Fixed header */}
          <div className="flex items-start justify-between gap-4 p-5 sm:p-4 border-b border-gray-200 dark:border-gray-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-Ovo font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
           </div>
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full
                bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
                text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
            <ImageGallery images={images} title={project.title} onExpand={(i) => setLightbox(i)} />

            <div className="p-6 sm:p-8 space-y-7">
              {/* Overview */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  <Layers size={14} /> Overview
                </h4>
                <p className="text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
                  {longDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  <Wrench size={14} /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg
                        bg-gray-100 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700
                        text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {project.features?.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                    <ListChecks size={14} /> Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={16} className="text-blue-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Component Spotlight */}
              {project.highlight && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-gray-300 dark:border-gray-700">
                  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    <Sparkles size={14} /> Component Spotlight — {project.highlight.name}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.highlight.description}
                  </p>
                </div>
              )}

              {/* Why I built this */}
              {project.whyBuilt && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Why I Built This
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.whyBuilt}
                  </p>
                </div>
              )}

              {/* What I learned */}
              {project.learnings && (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    <Lightbulb size={14} /> What I Learned
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.learnings}
                  </p>
                </div>
              )}
            </div>

            {/* Footer actions */}
            <div className="sticky bottom-0 flex gap-3 p-5 border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
                  border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Github size={16} /> View Code
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white
                  bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                  shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox images={images} startIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
};

//* --------------------------------- Work --------------------------------- */
const Work = ({ isDarkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => setSelectedProject(project);

  return (
    <section
      id="work"
      className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%] scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h4 className="inline-block text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            My Projects
          </h4>
          <h2 className="text-5xl font-Ovo font-semibold text-gray-800 dark:text-white mb-4">
            Featured Work
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
            A selection of projects showcasing my full-stack and front-end
            expertise — each built with passion and precision.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workData.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const visibleTags = project.tags.slice(0, 3);
            const extraTagCount = project.tags.length - visibleTags.length;

            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openProject(project);
                  }
                }}
                className="group relative bg-white dark:bg-gray-900/50 rounded-2xl overflow-hidden
                  border border-gray-200 dark:border-gray-800
                  shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30
                  hover:-translate-y-1.5 duration-500 cursor-pointer
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600
                  dark:focus-visible:ring-purple-500 focus-visible:ring-offset-2
                  focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
              >
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover gradient + case study cue */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="absolute bottom-0 inset-x-0 p-4 flex items-center gap-1.5
                      text-white text-sm font-medium
                      opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-500"
                  >
                    View Case Study
                    <ArrowUpRight size={14} />
                  </div>

                  {/* Quick links */}
                  <div className="absolute top-3 left-3 flex gap-2
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                  
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="View code on GitHub"
                      className="flex items-center justify-center w-8 h-8 rounded-full
                        bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white
                        transition-all duration-300 hover:scale-110"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Open live demo"
                      className="flex items-center justify-center w-8 h-8 rounded-full
                        bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white
                        transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Featured badge */}
                  {index === 0 && (
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 
                        text-white text-xs font-semibold rounded-full shadow-lg">
                        <Sparkles size={12} />
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white
                      group-hover:text-blue-600 dark:group-hover:text-purple-400
                      transition-colors duration-300 flex-1">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      className={`w-5 h-5 text-gray-400 dark:text-gray-500 
                        transition-all duration-300 flex-shrink-0
                        ${isHovered ? 'opacity-100 translate-x-1 -translate-y-1' : 'opacity-0'}`}
                    />
                  </div>

                  <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed mb-4 font-Ovo line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {visibleTags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md
                          bg-gray-100 dark:bg-gray-800/60
                          border border-gray-200 dark:border-gray-700
                          text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {extraTagCount > 0 && (
                      <span className="px-2.5 py-1 text-[11px] font-medium rounded-md
                        bg-gray-100 dark:bg-gray-800/60
                        border border-gray-200 dark:border-gray-700
                        text-gray-500 dark:text-gray-500">
                        +{extraTagCount}
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Work;