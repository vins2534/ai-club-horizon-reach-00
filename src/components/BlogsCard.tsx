
import { Link } from "lucide-react";

const BlogsCard = () => (
  <div className="group bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center border border-green-100 transition-transform hover:scale-105 hover:shadow-2xl hover:border-green-300 animate-fade-in min-h-[360px]">
    <div className="mb-4 flex items-center justify-center">
      <span className="inline-block rounded-full bg-gradient-to-br from-emerald-400 via-green-300 to-blue-400 p-4">
        <Link className="text-white" size={36} />
      </span>
    </div>
    <h2 className="font-playfair text-2xl font-bold mb-2 text-green-800 tracking-tight">Blogs & Articles</h2>
    <blockquote className="italic text-lg text-green-900 font-playfair leading-snug text-center py-2">
      “AI won’t replace you, but a person using AI might.”<br />
      <span className="block text-sm text-green-600 mt-2">– Sara S, AI Club Author</span>
    </blockquote>
    <a
      href="https://medium.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center gap-1 px-3 py-1.5 rounded bg-primary text-primary-foreground font-semibold transition hover:bg-indigo-600 shadow hover:scale-105"
    >
      Read full blog
      <Link size={18} />
    </a>
  </div>
);

export default BlogsCard;
