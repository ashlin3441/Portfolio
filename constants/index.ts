import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import carhubImg from "@/public/MindGraph.png";
import realtorImg from "@/public/BioEnergy.png";

// Navigation links
export const LINKS = [
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

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/ashlin-k-s3441/",
  github: "https://github.com/ashlin3441",
  resume: "/resume.pdf",
  source_code: "https://github.com/ashlin3441/portfolio",
  email: "ashlinks3441@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Passed Bachelors",
    description:
      "Completed my Under Graduation curriculum, gaining a solid foundation in various subjects and essential skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Python Development Intern",
    description:
      "Successfully completed an intensive 1-month Internship at Aurotech Solutions pvt ltd. Developed some applications using python.",
    icon: React.createElement(FaPython),
    date: "2024",
  },
  {
    title: "Software Development Intern",
    description:
      "Successfully Completed 4 month Internship as a Full Stack Developer at WeberFox Technologies, I have collaborated with various clients to create responsive and dynamic web applications based upon MERN Technology.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Completed Graduation",
    description:
      "Completed Master of Computer Applications from Cochin University of Science and Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "MindGraph",
    description:
      " a Fullstack Generative AI application to identify hidden patterns from unstructured data to a 3-dimensional knowledge graph.",
    tags: ["React", "GraphRAG", "Cassandra", "Langchain", "Ollama","Llama 3.1", "Fast API"],
    imageUrl: carhubImg,
  },
  {
    title: "EnergyON",
    description:
      " Developed an online marketplace for bioenergy solutions with integrated Chatbot functionality powered by IBM Watsonx.",
    tags: ["HTML", "CSS", "IBM WATSONX",],
    imageUrl: realtorImg,
    
  },
  
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Materia-ui",
  "Three.js",
  "MySQL",
  "MongoDB",
  "Express",
  "Redux",
  "Python",
  "Machine Learning",
  "Deep Learning",
] as const;

// Owner name
export const OWNER_NAME = "Ashlin k s";
