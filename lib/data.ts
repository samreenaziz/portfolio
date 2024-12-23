import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cuppaImg from "@/public/cuppa.png";
import topgunImg from "@/public/topgun.png";
import bandSiteImg from "@/public/bandsite1.png";
import bandSiteImg2 from "@/public/bandsite2.png";
import aircallImg from "@/public/aircall.png";
import thesisImg from "@/public/thesisImg.png";
import thesisImg2 from "@/public/thesisImg2.png";
import thesisAwardImg from "@/public/best-student-paper.png"




export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const softwareProjectsData = [
  {
    title: "Cuppa",
    description:
      "This is an MVP of a postpartum peer-support application that I am building as part of my efforts to support women's digital health resources. I am the full-stack developer for this project.",
    tags: ["React", "Express", "Node.js", "MySQL", "CSS/Sass", "Google Cloud Console", "Google API", "Heroku CLI", "JawsDB"],
    industries: ["Digital Health", "Postpartum Care", "Biomedical Engineering", "Medical Technologies"],
    images: [cuppaImg],
  },
  {
    title: "Hunter Safety Education Booking Site",
    description:
      "A course-booking website for a Canadian Hunter Safety Education academy in Toronto. This website is largely a SPA and integrates a booking widget and Framer Motion flip-cards for interactivity",
    tags: ["React", "Express.js", "Node.js", "MySQL", "CSS/Sass", "Framer Motion"],
    industries: ["Commercial Business"],
    images: [topgunImg],
  },
  {
    title: "Promotional Band Site",
    description:
      "An promotional website for a new community group/band. A simple SPA pulling data from a public API using component re-rendering.",
    tags: ["React", "CSS/Sass"],
    industries: ["Art/Music"],
    images: [bandSiteImg],
  },
  {
    title: "AirCall",
    description:
      "A web application that enables seamless Wi-Fi calling and communication. Designed for modern businesses, it integrates with various tools to enhance productivity and streamline customer communication.",
    tags: ["React.js", "CSS/Sass", "Public API"],
    industries: ["Social Media/Networking"],
    images: [aircallImg],
  },
] as const;

export const researchData = [
  {
    title: "Master's Thesis",
    description:
      "This thesis investigates using centre of pressure (COP) signals from a pressure-sensitive mat to detect patient movement.",
    tags: ["MATLAB", "Python", "Machine Learning", "Data Science"],
    industries: ["Biomedical Engineering", "Medical Technologies"],
    images: [thesisImg2, thesisAwardImg, thesisImg],
  },
];


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
