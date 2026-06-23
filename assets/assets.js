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

  title: "EverCart — AI Powered Marketplace (Microservices)",

  description:
    "Production-ready AI-powered marketplace built with MERN and Microservices architecture featuring JWT authentication, real-time notifications, seller dashboard, AI shopping assistant, payments, and scalable deployment.",

  image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cxLaaQkpQGrymeq8Hjyb0n2RqT1ZWiQpcg&s",


  gallery: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cxLaaQkpQGrymeq8Hjyb0n2RqT1ZWiQpcg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPi9aYojed8UIvZZoWXeo-BSVoF6qQHyYBKw&s",
    "https://brightpixel.in/wp-content/uploads/2025/06/E-Commerce-Website.png",
    "https://www.vhv.rs/dpng/d/521-5212074_project-e-commerce-system-development-process-hd-png.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQeuE9O7NNp7Wv5Tu5lQwbQ0UKCGBjoWuwg&s",
  ],

  tags: [
    "React",
    "Node.js",
    "MongoDB",
    "Microservices",
    "AWS",
    "Redis",
    "RabbitMQ",
    "AI",
  ],

  demoUrl: "https://evercart-steel.vercel.app",

  githubUrl:
    "https://github.com/yourusername/evercart",

  longDescription:
    "EverCart is a full-scale AI-powered e-commerce platform developed using MERN Stack and Microservices Architecture. The system is divided into independent services including Authentication, Product, Cart, Order, Payment, Seller, Notification, and AI Buddy Service. Users can browse products, interact with an AI shopping assistant, place secure orders, manage seller stores, and receive real-time updates. The application is designed for scalability, maintainability, and production deployment.",

  techStack: [
    "React.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Redis",
    "RabbitMQ",
    "JWT",
    "Docker",
    "AWS ECS",
    "AWS ECR",
    "AWS S3",
    "Razorpay",
    "LangChain",
    "Google Gemini",
    "REST APIs",
    "CloudWatch",
  ],

  features: [
    "Microservices architecture with API Gateway",
    "JWT Authentication with Access + Refresh Tokens",
    "Role Based Access Control (RBAC)",
    "Google OAuth Login",
    "AI Shopping Assistant using Gemini + LangChain",
    "Real-time notifications and order updates",
    "Seller dashboard for product management",
    "Product search and filtering",
    "Cart and checkout flow",
    "Payment integration using Razorpay",
    "Redis caching for performance optimization",
    "RabbitMQ event-driven communication",
    "Image uploads using AWS S3",
    "Responsive UI with modern UX",
    "Cloud deployment with Docker and AWS",
  ],

  highlight: {
    name: "AIBuddyService",

    description:
      "Implemented an AI shopping assistant using LangChain + Google Gemini capable of product recommendations, answering shopping queries, and improving user purchase experience through contextual conversations."
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
    "AI Buddy Service"
  ],

  metrics: {
    services: "8+ Microservices",
    apis: "40+ REST APIs",
    auth: "JWT + Refresh Tokens",
    deployment: "Docker + AWS"
  },

  challenges: [
    "Managing communication between multiple services",
    "Implementing secure authentication across services",
    "Handling distributed state and API routing",
    "Optimizing response time using Redis caching"
  ],

  whyBuilt:
    "I wanted to move beyond basic CRUD projects and build a production-level marketplace that demonstrates backend architecture, scalability, AI integration, and real-world deployment concepts.",

  learnings:
    "Built strong understanding of Microservices Architecture, API Gateway patterns, Docker deployment, Redis caching, event-driven systems with RabbitMQ, secure authentication, cloud deployment, and integrating LLM-powered experiences into real products."
}
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
  description: "Built and delivered 4+ client projects."
}
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
  { name: "Node.js", level: 72, category: "backend" },
  { name: "Express.js", level: 70, category: "backend" },
  { name: "MongoDB", level: 68, category: "backend" },
  { name: "SQL", level: 60, category: "backend" },
  { name: "WebSockets", level: 62, category: "backend" },
  { name: "Redis", level: 60, category: "backend" },
  { name: "Microservices Architecture", level: 65, category: "backend" },
  { name: "MCP Servers", level: 50, category: "backend" },
  { name: "Jest", level: 58, category: "backend" },

  // ================= CLOUD & DEVOPS =================
  { name: "Docker", level: 68, category: "cloud" },
  { name: "AWS EC2", level: 65, category: "cloud" },
  { name: "AWS ECS", level: 60, category: "cloud" },
  { name: "AWS ECR", level: 60, category: "cloud" },
  { name: "AWS S3", level: 65, category: "cloud" },
  { name: "CI/CD Pipelines", level: 60, category: "cloud" },
  { name: "DDoS Protection Basics", level: 50, category: "cloud" },

  // ================= AI & LLM =================

  { name: "LLM Integration", level: 60, category: "ai" },
  { name: "RAG", level: 55, category: "ai" },
  { name: "LangChain", level: 55, category: "ai" },
  { name: "LangGraph", level: 45, category: "ai" },
  { name: "Groq AI", level: 50, category: "ai" },
  { name: "Google Gemini", level: 55, category: "ai" },
  { name: "Prompt Engineering", level: 65, category: "ai" },

    // ================= FRONTEND =================
  { name: "HTML5", level: 80, category: "frontend" },
  { name: "CSS3", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 75, category: "frontend" },
  { name: "React JS", level: 65, category: "frontend" },
];


export const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "Affimintus Technologies",
    location: "Indore",
    period: "Jan 2024 - Jun 2024",
    duration: "6 months",
    type: "Internship",
    description:
      "Worked as a MERN Stack Developer Intern with primary focus on backend development. Built scalable REST APIs, implemented authentication systems, optimized database queries, and contributed to full-stack feature development using MongoDB, Express.js, React, and Node.js.",
    achievements: [
      "Designed and developed RESTful APIs using Node.js and Express.js for user management, product handling, and order processing.",
      "Implemented JWT-based authentication and role-based authorization to secure application endpoints.",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"],
  },

  {
    id: 2,
    role: "Freelance Backend Developer",
    company: "Self Employed",
    location: "Remote",
    period: "Feb 2026 - Present",
    duration: "Present",
    type: "Freelance",

    description:
      "Delivered freelance web applications focused on backend architecture, REST APIs, authentication, and scalable systems.",

    achievements: [
      "Built and delivered 4+ client projects.",
      "Developed secure authentication and API systems.",
      "Integrated databases and optimized backend performance.",
    ],

    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Backend",
    ],
  },
];