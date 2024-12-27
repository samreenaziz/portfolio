import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuBaby } from "react-icons/lu";
import { LuHeartHandshake } from "react-icons/lu";
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
  // {
  //   name: "Education",
  //   hash: "#education",
  // },
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
    title: "Finished Masters of Applied Sciences Degree @ Carleton University",
    location: "Ottawa, ON, Canada",
    description:
      "Completed a Master's in Biomedical Engineering with a specialization in Data Science. Developed a cutting-edge algorithm for neonatal motion detection using pressure signals, achieving 87.29% accuracy, which enhanced patient monitoring in NICU environments.",
    icon: React.createElement(LuGraduationCap),
    date: "December 2021",
  },
  {
    title: "Cognitive & Analytics Consultant @ IBM",
    location: "Ottawa/Toronto, ON, Canada",
    description:
      "Worked as a technical consultant leveraging data-driven insights to support clients. Focused on virtual assistant development and user-centric solutions as an associate, later expanding to project leadership, enabling enterprise-level analytics and process optimization.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2020 - December 2020",
  },
  {
    title: "Intermediate Statistical Analyst @ Aviva",
    location: "Toronto, ON, Canada",
    description:
      "Built machine learning models and analytics tools to improve marketing efficiency, detect fraud, and forecast business outcomes. Automated data pipelines using Python, improving analysis speed and decision-making. Led initiatives to improve team onboarding and collaboration.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2020 - July 2022",
  },
  {
    title: "Engagement Manager @ Validere",
    location: "Toronto, ON, Canada",
    description:
      "Led the implementation of a large-scale software solution, achieving a 700% ROI. Designed metrics for performance scorecards to improve product readiness, reduced downtime, and enhanced data quality. Delivered key client-requested features and contributed to product development.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - November 2024",
  },
  {
    title: "Mama to a Future Unicorn",
    location: "Toronto, ON, Canada",
    description:
      "Embarked on the transformative journey of motherhood, embracing new challenges and perspectives. Balanced personal growth with professional endeavors, continuing to pursue impactful projects.",
    icon: React.createElement(LuBaby),
    date: "August 2023",
  },
  {
    title: "Graduated from a Software Engineering Bootcamp @ BrainStation",
    location: "Toronto, Canada",
    description:
      "Completed an intensive bootcamp, mastering software engineering concepts like React, JavaScript, DevOps, and deployment. Built and deployed full-stack applications, including the Cuppa digital health app, showcasing technical and design skills.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2024",
  },
  {
    title: "Founded AmiLife Digital Solutions",
    location: "Toronto, Canada",
    description:
      "Founded a company focused on creating innovative digital solutions for healthcare, insurance, and lifestyle sectors. Specialized in designing user-first products and algorithms, combining technical expertise with empathetic design.",
    icon: React.createElement(LuHeartHandshake),
    date: "November 2024",
  },
] as const;


export const softwareProjectsData = [
  {
    title: "Cuppa",
    description:
      "This is an MVP of a postpartum peer-support application that I am building as part of my efforts to support women's digital health resources. I am the full-stack developer for this project and am currently working to build a more comprehensive iOS version of this app with SwiftUI.",
    link: "https://cuppa-io.netlify.app/",
    tags: ["React", "Express", "Node.js", "MySQL", "CSS/Sass", "Google Cloud Console", "Google API", "Heroku CLI", "JawsDB"],
    industries: ["Digital Health", "Postpartum Care", "Biomedical Engineering", "Medical Technologies"],
    images: [cuppaImg],
  },
  {
    title: "Hunter Safety Education Booking Site",
    description:
      "A course-booking website for a Canadian Hunter Safety Education academy in Toronto. This website is largely a SPA and integrates a booking widget and Framer Motion flip-cards for interactivity",
    link: "https://topgunacademy.netlify.app/",
    tags: ["React", "Express.js", "Node.js", "MySQL", "CSS/Sass", "Framer Motion"],
    industries: ["Commercial Business"],
    images: [topgunImg],
  },
  {
    title: "Promotional Band Site",
    description:
      "An promotional website for a new community group/band. A simple SPA pulling data from a public API using component re-rendering.",
    link:"https://demobandsite.netlify.app/",
    tags: ["React", "CSS/Sass"],
    industries: ["Art/Music"],
    images: [bandSiteImg],
  },
  {
    title: "AirCall",
    description:
      "A web application that enables seamless Wi-Fi calling and communication. Designed for modern businesses, it integrates with various tools to enhance productivity and streamline customer communication.",
    link:"https://app.netlify.com/sites/aircall993fa7b4/overview",
    tags: ["React.js", "CSS/Sass", "Public API"],
    industries: ["Social Media/Networking"],
    images: [aircallImg],
  },
] as const;

export const researchData = [
  {
    title: "Master's Thesis",
    link:"https://repository.library.carleton.ca/concern/etds/vh53ww68b",
    description:
      "This thesis investigates using centre of pressure (COP) signals from a pressure-sensitive mat to detect patient movement and classify its directionality in real-time. The study achieved improved motion detection with precision = 0.84 and recall = 0.71, and a classifier accuracy of 87.29%, precision = 0.90, and recall = 0.84 after incorporating additional hand-annotated data." ,
    tags: ["MATLAB", "Python", "Machine Learning", "Data Science", "Electrical Engineering", "Systems Engineering", "Support Vector Machines", "kNN", "Synthetic Minority Oversampling Technique", "Medical Systems AI"],
    industries: ["Biomedical Engineering", "Medical Technologies"],
    images: [thesisImg2, thesisAwardImg, thesisImg],
  },
];


export const softwareSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Axios",
  "REST API",
  "Postman",
  "Sass",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Live Deployment",
  "Figma Design",
  "Miro Workshopping",
  "Asana",
  "Jira"
] as const;

export const mldsSkills = ["Python",
  "MATLAB", "SQL", "Hadoop",
  "Spark", "TensorFlow",
  "PyTorch", "Scikit-learn",
  "Keras", "Pandas", "NumPy",
  "Matplotlib", "Seaborn",
  "Docker", "Git", "Data preprocessing",
  "Feature engineering",
  "Model selection",
  "Hyperparameter tuning",
  "Data visualization",
  "Exploratory data analysis (EDA)",
  "Supervised learning", "Unsupervised learning",
  "Deep learning", "NLP", "Time series analysis",
  "Ensemble methods", "Statistical analysis",
  "Model deployment"] as const;

  export const businessSkills = [
    "Strategic planning",
    "Project management",
    "Stakeholder communication",
    "Client relationship management",
    "Data-driven decision making",
    "Problem Solving",
    "Market analysis",
    "Business development",
    "Risk assessment",
    "Process optimization",
    "Team leadership",
    "Cross-functional collaboration",
    "Change management",
    "Presentation skills",
    "Financial analysis",
    "Customer journey mapping",
    "Operations management"
  ];

  // export const businessSkills = [
  //   "Making boss moves (Strategic planning)",
  //   "Keeping the vibes on track (Project management)",
  //   "Talking to the big dogs (Stakeholder communication)",
  //   "Building connections like a pro (Client relationship management)",
  //   "Counting coins and planning flexes (Budgeting and forecasting)",
  //   "Making data the main character (Data-driven decision making)",
  //   "Fixing messes ASAP (Problem-solving)",
  //   "Spying on the market (Market analysis)",
  //   "Sealing the deal (Business development)",
  //   "Avoiding L’s (Risk assessment)",
  //   "Streamlining the grind (Process optimization)",
  //   "Leading the squad (Team leadership)",
  //   "Shaking hands, making plans (Negotiation)",
  //   "Teamwork makes the dream work (Cross-functional collaboration)",
  //   "Tracking the wins (Performance tracking)",
  //   "Rolling with the punches (Change management)",
  //   "Presenting like a TEDx star (Presentation skills)",
  //   "Money talks, spreadsheets walk (Financial analysis)",
  //   "Mapping the glow-up (Customer journey mapping)",
  //   "Running the show (Operations management)"
  // ];
