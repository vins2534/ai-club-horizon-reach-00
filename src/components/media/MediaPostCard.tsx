
import React from "react";
import { Image } from "lucide-react";

const MediaPostCard: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 shadow rounded-2xl p-4 flex flex-col items-center border border-cyan-100 w-64 min-h-[160px] snap-center shrink-0 hover:scale-105 transition-transform">
    <span className="inline-block rounded-full bg-gradient-to-br from-cyan-500 via-blue-300 to-emerald-400 p-3 mb-2">
      <Image className="text-white" size={28} />
    </span>
    <span className="font-bold text-blue-700">{title}</span>
    <span className="text-slate-500 text-xs mb-2">{subtitle}</span>
  </div>
);

export default MediaPostCard;
