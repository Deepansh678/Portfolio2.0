import {  frontend,  book } from "../assets";
import { sas, srm } from "../assets";
import { bhc, iitg,  } from "../assets";
import {SEO, Shopify,github, canva, figma,} from "../assets";

import {
  typescript,
  css,
  bootstrap,
  git,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
} from "../assets";
import { yt, portfolio, ide, india, chat } from "../assets";

export const summary = `I am a Frontend  Developer passionate about building modern, responsive, and high-performing web applications. I enjoy turning complex ideas into simple, intuitive user interfaces using technologies like React, JavaScript, and Tailwind CSS.

I have worked on multiple real-world projects where I developed scalable components, optimized performance, and enhanced user experience. `;

export const mainSkills = [
  {
    name: "FrontEnd Developer",
    logo: frontend,
  },
  {
    name: "Web Developer",
    logo: javascript,
  },
  {
    name: "Shopify Developer",
    logo: Shopify,
  },
];

export const educations = [
  {
    degree: "Bachelor of Technology",
    institute: "SRM Institute of Science and Technology",
    icon: srm,
    iconBg: "#fff",
    date: "Jun 2020 - Apr 2024",
    points: ["CGPA: 8.55 / 10", "Major in Computer Science and Engineering"],
  },
  {
    degree: "12th Standard",
    institute: "Hamirpur Public  Sr. Sec. School",
    icon: sas,
    iconBg: "#fff",
    date: "2019 - 2020",
    points: [
      "Major Subjects: Physics, Chemistry, Mathematics, Computer Science, English",
    ],
  },
  {
    degree: "10th Standard",
    institute: "Hamirpur Public  Sr. Sec. School",
    icon: sas,
    iconBg: "#fff",
    date: "2017 - 2018",
    points: [
      "Major Subjects: Mathematics, Science, Computer Science, English, Social Studies, Hindi",
    ],
  },
];

export const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Digital India Bhashini Division (MIETY)",
    icon: iitg,
    iconBg: "#fff",
    date: "Sept 2025 - Dec 2025",
    points: [
       "Enhanced UI/UX by redesigning documentation for better navigation.",
       "Developed responsive components improving performance and accessibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Webfictive Solutions ",
    icon: bhc,
    iconBg: "#fff",
    date: "Aug 2024 - Aug 2025",
    points: [
      "Developed responsive web interfaces across multiple pages and reusable components.",
      "Customized Shopify store UI using Liquid, HTML, and CSS for better user experience.",
    ],
  },
];

export const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Javascript", icon: javascript },
  { name: "Shopify", icon: Shopify },
  { name: "Typescript", icon: typescript },
  { name: "ReactJS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "SEO", icon: SEO },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Canva", icon: canva },
  { name: "Figma", icon: figma },
];

export const projects = [
  {
    title: "NextGen Designers",
    description: "Modern UI/UX website with responsive design using React and Tailwind CSS.",
    githubLink: "https://github.com/Deepansh678/NextGen-Designers",
    liveDemoLink: "https://next-gen-designers.vercel.app/",
    image: portfolio,
  },
  {
    title: "Virtual Bank",
    description:
      "Banking UI simulation with account features and clean interface.",
    githubLink: "https://github.com/Keshav76/virtual-bank",
    liveDemoLink: "https://virtual-bank-ashen.vercel.app/",
    image: yt,
  },
  {
    title: "DeepLearn",
    description:
      "A secure chat application built with React and Firebase using RSA encryption",
    githubLink: "https://github.com/Deepansh678/DeepLearn",
    liveDemoLink: "https://deep-learn-delta.vercel.app/#",
    image: chat,
  },
  {
    title: "ZestyBite",
    description:
      "Food ordering website with interactive UI and smooth user experience.",
    githubLink: "https://github.com/Deepansh678/ZestyBite",
    liveDemoLink: "https://zesty-bite-sigma.vercel.app/",
    image: ide,
  },
  {
    title: "ArenaX",
    description: "A modern esports platform featuring tournament management and an immersive user experience.",
    githubLink: "https://github.com/Deepansh678/ArenaX",
    liveDemoLink: "https://arena-x-topaz.vercel.app/",
    image: india,
  },
  {
    title: "Glowing",
    description: "A modern skincare e-commerce website featuring clean design and a seamless shopping experience.",
    githubLink: "https://github.com/Deepansh678/Glowing",
    liveDemoLink: "https://glowing-gold.vercel.app/",
    image: book,
  },
];
