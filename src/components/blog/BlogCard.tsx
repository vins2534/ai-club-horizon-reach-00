
import React from "react";
import { Link as LinkIcon } from "lucide-react";

const BlogCard: React.FC<{ quote: string; author: string; link: string }> = ({
  quote,
  author,
  link,
}) => (
  <div className="bg-white border border-green-100 shadow-xl rounded-2xl w-80 min-h-[250px] p-6 flex flex-col snap-center shrink-0 hover:scale-105 transition-transform">
    <span className="inline-block rounded-full bg-gradient-to-br from-emerald-400 via-green-300 to-blue-400 p-3 mb-2 self-center">
      <LinkIcon className="text-white" size={28} />
    </span>
    <blockquote className="italic text-base text-green-900 leading-snug mb-2">
      “{quote}”
    </blockquote>
    <span className="block mb-3 text-green-700 font-medium text-sm text-right">
      – {author}
    </span>
    <a
      className="inline-flex items-center gap-1 mt-auto px-3 py-1 rounded bg-primary text-primary-foreground text-sm font-semibold hover:bg-indigo-600 shadow"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      Full blog <LinkIcon size={16} />
    </a>
  </div>
);

export default BlogCard;
