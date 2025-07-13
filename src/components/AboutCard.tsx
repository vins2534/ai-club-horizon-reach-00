
import { Image } from "lucide-react";

const AboutCard = () => (
  <div className="group bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center border border-blue-100 transition-transform hover:scale-105 hover:shadow-2xl hover:border-indigo-300 animate-fade-in min-h-[360px]">
    <div className="mb-4 flex items-center justify-center">
      <span className="inline-block rounded-full bg-gradient-to-br from-indigo-400 via-sky-400 to-violet-500 p-4">
        <Image className="text-white" size={40} />
      </span>
    </div>
    <h2 className="font-playfair text-2xl font-bold mb-2 text-white tracking-tight">About the Club</h2>
    <p className="text-base text-slate-700 text-center mb-4">
      Welcome to the AI Club! We're a group of students passionate about Artificial Intelligence, Machine Learning,
      and pushing the boundaries of tech together — from workshops and competitions to thought-provoking discussions and cool projects.
    </p>
  </div>
);

export default AboutCard;
