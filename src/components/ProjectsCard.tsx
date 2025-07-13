
import { Book } from "lucide-react";

const ProjectsCard = () => (
  <div className="group bg-gradient-to-br from-indigo-50 via-white to-blue-100 shadow-xl rounded-2xl p-8 flex flex-col items-center border border-indigo-100 transition-transform hover:scale-105 hover:shadow-2xl hover:border-indigo-400 min-h-[360px] animate-fade-in">
    <div className="mb-4 flex items-center justify-center">
      <span className="inline-block rounded-full bg-gradient-to-br from-indigo-700 via-blue-400 to-violet-300 p-4">
        <Book className="text-white" size={40} />
      </span>
    </div>
    <h2 className="font-playfair text-2xl font-bold mb-2 text-blue-800 tracking-tight">Projects</h2>
    <p className="text-base text-slate-700 text-center mb-4">
      Explore our best projects, built with passion and AI! <br />
      Machine learning, creative automation, generative art & more.
    </p>
    {/* Example project image */}
    <div className="mt-auto flex gap-2 pt-2">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
        alt="AI Project"
        className="h-14 w-24 object-cover rounded shadow-md"
      />
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
        alt="Coding Project"
        className="h-14 w-24 object-cover rounded shadow-md"
      />
    </div>
  </div>
);

export default ProjectsCard;
