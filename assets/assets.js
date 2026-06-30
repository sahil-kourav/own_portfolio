import user_image from "./user-image.jpeg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import docker from "./docker.png";
import vscode from "./vscode.png";
import postman from "./postman.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  docker,
  vscode,
  postman,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    id: 1,

    title: "EverCart — Microservices-Based E-Commerce Platform",

    description:
      "Scalable e-commerce backend built with a microservices architecture — independent services for auth, products, orders, cart, payments, notifications, and seller management, with RabbitMQ messaging and an automated CI/CD pipeline.",

    image:
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782377711/Screenshot_2026-06-25_141455_kxqxss.png",
    gallery: [
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782377711/Screenshot_2026-06-25_141455_kxqxss.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782377710/Screenshot_2026-06-25_140730_xymqsm.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782377710/Screenshot_2026-06-25_141408_wfbmpw.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782377710/Screenshot_2026-06-25_141318_ylhhq6.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782377710/Screenshot_2026-06-25_141329_pfkrhp.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782377711/Screenshot_2026-06-25_141703_jsbmop.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782377711/Screenshot_2026-06-25_141846_lhv0xa.png",
    ],

    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Microservices",
      "AWS",
      "Docker",
      "RabbitMQ",
      "Razorpay",
      "JWT",
      "CI/CD",
    ],

    demoUrl: "https://evercart-steel.vercel.app",
    githubUrl: "https://github.com/sahil-kourav/evercart_marketplace.git",

    longDescription:
      "EverCart is a microservices-based e-commerce backend separating core business domains — Authentication, Products, Orders, Cart, Payments, Notifications, and Seller Management — into independent services behind a centralized API Gateway. The system is containerized with Docker, deployed on AWS, and supports automated deployments through a GitHub Actions CI/CD pipeline.",

    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "JWT",
      "Docker",
      "AWS (EC2)",
      "Razorpay",
      "REST APIs",
      "GitHub Actions",
    ],

    features: [
      "Microservices architecture with a centralized API Gateway",
      "API Gateway handling request routing, authentication, authorization, and rate limiting",
      "JWT-based authentication with refresh tokens and Role-Based Access Control (RBAC)",
      "RabbitMQ for asynchronous, event-driven communication between services",
      "Razorpay integration for secure payment processing",
      "Dockerized services deployed on AWS (EC2)",
      "Automated CI/CD pipeline using GitHub Actions for streamlined deployment",
    ],

    highlight: {
      name: "API Gateway",
      description:
        "Built a centralized API Gateway to handle routing, authentication, authorization, and rate limiting across all services — simplifying communication between clients and the underlying microservices.",
    },

    architecture: [
      "API Gateway",
      "Auth Service",
      "Product Service",
      "Cart Service",
      "Order Service",
      "Payment Service",
      "Notification Service",
      "Seller Service",
    ],

    metrics: {
      services: "7 Microservices",
      auth: "JWT Authentication with RBAC",
      deployment: "Docker + AWS EC2 + GitHub Actions",
      cicd: "GitHub Actions",
    },

    challenges: [
      "Coordinating reliable communication between independent microservices",
      "Implementing consistent, secure JWT-based authentication across all services",
      "Integrating RabbitMQ for event-driven communication and ensuring message reliability",
      "Setting up an automated CI/CD pipeline for consistent deployments",
    ],

    whyBuilt:
      "I wanted to explore building a scalable backend system using microservices architecture, focusing on service separation, inter-service communication, and automated deployment pipelines.",

    learnings:
      "Built a strong understanding of microservices architecture, API Gateway patterns, Docker-based deployment, event-driven communication with RabbitMQ, secure JWT authentication, and setting up CI/CD pipelines with GitHub Actions.",
  },
  {
    id: 2,

    title: "UpSkale AI — AI-Powered Career Preparation Platform",

    description:
      "AI-powered platform that analyzes a user's resume, job description, and profile to generate tailored interview questions, a resume-to-JD match score, skill gap analysis, and an ATS-friendly resume — plus an AI mock interview system with performance feedback and a credit-based usage model.",

    image:
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782376144/Screenshot_2026-06-25_135459_ipxj2w.png",

    gallery: [
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782376144/Screenshot_2026-06-25_135459_ipxj2w.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782376478/Screenshot_2026-06-25_140414_pbtaox.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782376144/Screenshot_2026-06-25_135536_hgi6g7.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782376145/Screenshot_2026-06-25_135717_zuwxd0.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782376144/Screenshot_2026-06-25_135523_nzhbjp.png",
      "https://res.cloudinary.com/djmvmlwsg/image/upload/v1782376144/Screenshot_2026-06-25_135558_rc6f7e.png",
    ],

    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini",
      "OpenRouter",
      "Razorpay",
      "JWT",
      "PDF Reports",
    ],

    demoUrl: "https://upskaleai.onrender.com",
    githubUrl: "https://github.com/sahil-kourav/Upskale-Ai.git",

    longDescription:
      "UpSkale AI is an AI-powered career preparation platform. Users submit their resume, job description, and a self-description, and the platform uses Google Gemini to analyze the inputs, generate tailored interview questions, calculate a resume-to-JD match score, identify skill gaps, and produce a personalized preparation roadmap and ATS-friendly resume. A separate AI mock interview system, powered by OpenRouter, runs timed practice interviews across three difficulty levels and produces a performance dashboard scoring communication, correctness, and confidence, along with per-question feedback. Usage is managed through a credit-based system integrated with Razorpay for purchasing additional credits.",

    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google Gemini",
      "OpenRouter",
      "Razorpay",
      "Puppeteer",
      "REST APIs",
      "Vercel",
    ],

    features: [
      "AI-powered resume, JD, and self-description analysis using Google Gemini",
      "Resume-to-JD match score and AI-based skill gap analysis",
      "Personalized preparation roadmap and auto-generated ATS-friendly resume",
      "AI mock interview system (via OpenRouter) with timed questions across three difficulty levels",
      "Performance dashboard scoring communication, correctness, and confidence",
      "Per-question AI feedback with strengths, improvement areas, and example responses",
      "Downloadable PDF reports generated with Puppeteer",
      "Interview history with saved past reports",
      "Credit-based usage system with Razorpay integration for credit purchases",
    ],

    highlight: {
      name: "AI Analysis Engine",
      description:
        "The core of UpSkale AI is the AI Analysis Engine, which uses Google Gemini to analyze user inputs (resume, job description, self-description) and generate tailored interview questions, a resume-to-JD match score, skill gap analysis, and a personalized preparation roadmap. This engine ensures that users receive actionable insights for career preparation.",
    },

    architecture: [
      "React Frontend",
      "Node.js + Express Backend",
      "Auth Module",
      "Resume, JD, self description Analysis Module (Gemini)",
      "Mock Interview Module (OpenRouter)",
      "PDF Report Generator",
      "Mock Interview History Module",
      "Credit & Payment Module (Razorpay)",
      "Deployment (Vercel)",
    ],

    metrics: {
      reports: "PDF Report Generation",
      interviews: "AI Mock Interviews",
      payments: "Razorpay Credit System",
      deployment: "Vercel",
    },

    challenges: [
      "Generating structured, consistent AI responses from resume/JD/self-description inputs",
      "Designing a reliable PDF report generation pipeline with Puppeteer",
      "Managing mock interview history and report persistence",
      "Building a credit-based usage and billing flow with Razorpay",
    ],

    whyBuilt:
      "I wanted to explore AI integration in a real-world application, combining LLMs with a full-stack web application to provide users with actionable career preparation insights and practice tools.",

    learnings:
      "Gained hands-on experience integrating LLMs (Google Gemini, OpenRouter) into a full-stack application, managing AI response consistency, generating dynamic PDF reports, and implementing a credit-based payment system with Razorpay.",
  },
];

export const serviceData = [
  {
    title: "Backend for Web Applications",
    description:
      "Develop server-side functionality and APIs for MERN-based web applications.",
    link: "",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Design efficient database schemas, manage data operations using MongoDB and SQL, and optimize queries for performance and scalability.",
    link: "",
  },
  {
    title: "Microservices & Backend Integration",
    description:
      "Develop modular backend services and integrate third-party APIs, payment gateways, and cloud services into scalable applications.",
    link: "",
  },
  {
    title: "Backend Deployment",
    description:
      "Deployed backend applications on platforms like AWS EC2 and Render, managed environment variables, and handled basic server configuration.",
    link: "",
  },
  {
    title: "Cloud Deployment & Containerization",
    description:
      "Deploy backend applications using Docker and manage cloud infrastructure on AWS (EC2, ECS, S3) and other hosting platforms.",
    link: "",
  },
  {
    title: "AI Service Integration",
    description:
      "Worked on integrating AI services such as Google Gemini into backend applications to implement AI-driven features like intelligent responses and dynamic content processing.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "JavaScript, React, Node.js, Express, MongoDB",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Experience",
    description: "6 months of internship experience as a MERN stack developer.",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Freelance Work",
    description: "Built and delivered 3+ client projects.",
  },
];

export const toolsData = [
  assets.git,
  assets.mongodb,
  assets.docker,
  assets.postman,
  assets.vscode,
];

export const categories = ["backend", "ai", "cloud", "frontend"];

export const skills = [
  // ================= BACKEND =================
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "Rest APIs", level: 85, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "SQL", level: 55, category: "backend" },
  { name: "WebSockets", level: 62, category: "backend" },
  { name: "Redis", level: 55, category: "backend" },
  { name: "Microservices Architecture", level: 65, category: "backend" },
  { name: "MCP Servers", level: 50, category: "backend" },
  { name: "JWT Authentication", level: 75, category: "backend" },
  { name: "API Gateway", level: 60, category: "backend" },
  { name: "RabbitMQ", level: 55, category: "backend" },

  // ================= CLOUD & DEVOPS =================
  { name: "Docker", level: 68, category: "cloud" },
  { name: "CI/CD Pipelines", level: 60, category: "cloud" },
  { name: "AWS EC2", level: 65, category: "cloud" },
  { name: "AWS ECS", level: 60, category: "cloud" },
  { name: "AWS ECR", level: 60, category: "cloud" },
  { name: "AWS S3", level: 65, category: "cloud" },
  { name: "DDoS Protection Basics", level: 50, category: "cloud" },

  // ================= AI & LLM =================

  { name: "LLM Integration", level: 60, category: "ai" },
  { name: "RAG", level: 55, category: "ai" },
  { name: "LangChain", level: 55, category: "ai" },
  { name: "LangGraph", level: 45, category: "ai" },
  { name: "Groq AI", level: 50, category: "ai" },
  { name: "Google Gemini", level: 55, category: "ai" },
  { name: "OpenRouter", level: 55, category: "ai" },
  { name: "Prompt Engineering", level: 65, category: "ai" },

  // ================= FRONTEND =================
  { name: "HTML5", level: 70, category: "frontend" },
  { name: "CSS3", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 75, category: "frontend" },
  { name: "React JS", level: 65, category: "frontend" },
];

export const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Self-Employed (Freelance)",
    location: "Remote",
    period: "Mar 2026 - Present",
    duration: "Present",
    type: "Freelance",

    description:
      "Backend Developer in a 3-member freelance team, building RESTful APIs and server-side services for multiple clients using Node.js, Express.js, and MongoDB.",

    achievements: [
      "Served as Backend Developer in a 3-member freelance team, delivering RESTful APIs and server-side services for 3+ clients.",
      "Managed the backend project lifecycle — requirement gathering, development, testing, and deployment — coordinating with the team to ensure timely delivery.",
      "Built authentication systems, third-party API integrations, and database schemas tailored to client needs.",
      "Applied RESTful API design and performance optimization principles to build secure, scalable backend systems for client production use.",
    ],

    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Google OAuth",
      "Digital Ocean",
      "Vercel",
      "Render",
      "VPS Hosting",
      "Razorpay",
    ],
  },
  {
    id: 2,
    role: "MERN Stack Developer Intern",
    company: "Affimintus Technologies Pvt. Ltd.",
    location: "Indore, India",
    period: "Sep 2025 - Mar 2026",
    duration: "6 months",
    type: "Internship",

    description:
      "Backend-focused MERN Stack intern building and maintaining backend services for multiple web apps as part of a development team.",

    achievements: [
      "Built and maintained backend services for multiple web apps using Node.js and Express.js as part of a development team.",
      "Designed and developed RESTful APIs adhering to industry-standard best practices, ensuring smooth communication between frontend and backend systems.",
      "Integrated third-party APIs and managed asynchronous data flows within application workflows.",
      "Collaborated within a cross-functional team to deliver consistent, well-structured backend solutions across multiple projects.",
    ],

    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Google OAuth",
      "Razorpay",
      "Google Maps API",
      "Cloudinary",
    ],
  },
];
