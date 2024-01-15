"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJs  Portfolio Website",
    description: "Web portfolio using nextjs and framer motion",
    image: "/images/projects/project-4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sebastian761/Next-Portfolio",
    previewUrl: "https://sebastian-ocando.vercel.app/",
  },
  {
    id: 2,
    title: "Company landing page",
    description: "Website of a construction company that offers its services",
    image: "/images/projects/project-2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sebastian761/SuccesBuild-FL",
    previewUrl: "https://success-build-fl.vercel.app/",
  },
  {
    id: 3,
    title: "NGO adoption web",
    description: "Website of NGO that is in charge of finding homes for animals for adoption.",
    image: "/images/projects/project-3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/No-Country/c15-29-ft-react-java",
    previewUrl: "https://pawfinders.vercel.app/",
  },
  {
    id: 4,
    title: "Web for home repairing and painting",
    description: "Web for home painting and repair company",
    image: "/images/projects/project-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sebastian761/Vanities-and-Sinks",
    previewUrl: "https://vanities-and-sinks.vercel.app/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
