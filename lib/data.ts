import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cuppaImg from "@/public/cuppa.png";
import topgunImg from "@/public/topgun.png";
import travelSiteImg from "@/public/travelsite.png";
import bandSiteImg from "@/public/bandsite1.png";
import coffeeShopImg from "@/public/coffeeshop.png";


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

export const projectsData = [
  {
    title: "Cuppa",
    description:
      "This is an MVP of a postpartum peer-support application that I am building as part of my efforts to support women's digital health resources. I am the full-stack developer for this project.",
    tags: ["React", "Express", "Node.js", "MySQL", "CSS/Sass", "Google Cloud Console", "Google API", "Heroku CLI", "JawsDB"],
    imageUrl: cuppaImg,
  },
  {
    title: "Hunter Safety Education Booking Site",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Express.js", "Node.js", "MySQL", "CSS/Sass", "Framer Motion"],
    imageUrl: topgunImg,
  },
  {
    title: "Promotional Band Site",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Express.js", "Node.js", "MySQL", "CSS/Sass"],
    imageUrl: bandSiteImg,
  },
] as const;

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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
