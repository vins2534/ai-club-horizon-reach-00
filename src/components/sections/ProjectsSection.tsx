
import React from "react";
import CarouselRow from "../CarouselRow";
import ProjectCard from "../project/ProjectCard";
import { useProjects } from "../../hooks/useProjects";

const ProjectsSection = () => {
  const { projects, isLoading } = useProjects();

  if (isLoading) {
    return (
      <section>
        <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Projects</h2>
        <div className="text-center py-8">Loading...</div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Projects</h2>
      <CarouselRow 
        items={projects.map(project => (
          <ProjectCard
            project={project.project}
            img={project.img || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"}
            key={project.id}
          />
        ))} 
        slidesPerView={{ base: 1, md: 2, lg: 3 }} 
      />
    </section>
  );
};

export default ProjectsSection;
