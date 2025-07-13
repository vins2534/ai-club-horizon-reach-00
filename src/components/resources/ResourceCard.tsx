
import React from "react";

interface ResourceCardProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, img, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-lg rounded-xl p-5 flex flex-col items-center border border-blue-100 w-72 min-h-[230px] snap-center shrink-0 hover:scale-105 hover:shadow-xl transition-transform group no-underline"
    aria-label={title}
  >
    <img src={img} alt={title} className="w-20 h-20 object-cover rounded mb-3 shadow group-hover:shadow-md" />
    <h3 className="font-bold text-lg mb-1 text-indigo-900 text-center">{title}</h3>
    <p className="text-sm text-slate-600 text-center mb-2">{description}</p>
    <span className="text-xs text-primary hover:underline mt-auto">Visit Resource</span>
  </a>
);

export default ResourceCard;
