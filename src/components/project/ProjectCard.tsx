
import React from "react";
import { Book } from "lucide-react";

const ProjectCard: React.FC<{ project: string; img: string }> = ({
  project,
  img,
}) => (
  <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 shadow-xl rounded-2xl p-6 flex flex-col items-center border border-indigo-100 w-80 min-h-[250px] snap-center shrink-0 hover:scale-105 transition-transform">
    <span className="inline-block rounded-full bg-gradient-to-br from-indigo-700 via-blue-400 to-violet-300 p-3 mb-2">
      <Book className="text-white" size={28} />
    </span>
    <h4 className="font-bold text-blue-800 mb-2">{project}</h4>
    <img src={img} alt={project} className="h-20 w-full object-cover rounded shadow" />
    <span className="text-xs text-slate-500 mt-2">AI Project</span>
  </div>
);

export default ProjectCard;
