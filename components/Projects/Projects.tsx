"use client";

import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "./images/google-forms-clone-logo.svg",
      title: "Google Forms Clone",
      description:
        "A clone of Google Forms that allows you to create forms with questions and answers and have people complete them.",
      url: "http://localhost/google-forms-clone/",
      year: "2024",
      languages: [
        {
          name: "HTML",
          textColor: "text-gray-100",
          backgroundColor: "bg-orange-600",
        },
        {
          name: "CSS",
          textColor: "text-gray-100",
          backgroundColor: "bg-blue-600",
        },
        {
          name: "Tailwind CSS",
          textColor: "text-gray-100",
          backgroundColor: "bg-sky-500",
        },
        {
          name: "JavaScript",
          textColor: "text-gray-100",
          backgroundColor: "bg-yellow-400",
        },
        {
          name: "jQuery",
          textColor: "text-gray-100",
          backgroundColor: "bg-sky-700",
        },
        {
          name: "PHP",
          textColor: "text-gray-100",
          backgroundColor: "bg-indigo-500",
        },
        {
          name: "MySQL",
          textColor: "text-gray-100",
          backgroundColor: "bg-sky-600",
        },
      ],
    },
  ];

  const fadeInListElements = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index,
        },
      };
    },
  };

  return (
    <motion.section
      id="projects"
      className="section"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="px-5 py-[200px]">
          <h2 className="text-center text-3xl mb-10">Projects</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                variants={fadeInListElements}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <ProjectCard project={project}></ProjectCard>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
