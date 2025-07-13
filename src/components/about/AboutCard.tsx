
import React from "react";
import { Image } from "lucide-react";

const AboutCard: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => (
  <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center border border-blue-100 w-72 min-h-[240px] snap-center shrink-0 hover:scale-105 transition-transform">
    <span className="inline-block rounded-full bg-gradient-to-br from-indigo-400 via-sky-400 to-violet-500 p-3 mb-2">
      <Image className="text-white" size={28} />
    </span>
    <h4 className="font-bold text-indigo-800 mb-2">{title}</h4>
    <p className="text-slate-700 text-center text-sm">{text}</p>
  </div>
);

export default AboutCard;
