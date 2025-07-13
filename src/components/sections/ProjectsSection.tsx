
import React from "react";
import CarouselRow from "../CarouselRow";
import ProjectCard from "../project/ProjectCard";

const ProjectsSection = () => (
  <section>
    <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Projects</h2>
    <CarouselRow items={[
      <ProjectCard
        project="Generative Art App"
        img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
        key="project-1"
      />,
      <ProjectCard
        project="NLP Chatbot"
        img="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
        key="project-2"
      />,
      <ProjectCard
        project="Smart Attendance"
        img="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
        key="project-3"
      />,
      <ProjectCard
        project="Pose Estimation Portal"
        img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        key="project-4"
      />
    ]} slidesPerView={{ base: 1, md: 2, lg: 3 }} />
  </section>
);

export default ProjectsSection;
