import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/data";
import React from "react";

const Projects = () => {
  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Projects
      </h1>
      <div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add your project components here */}
          {projects.map((project: ProjectCardType) => (
            <ProjectCard
              key={project.github}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
