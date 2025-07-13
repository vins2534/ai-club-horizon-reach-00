import { Book } from "lucide-react";

const AibyssCard = () => (
  <div className="group bg-card text-card-foreground shadow-xl rounded-2xl p-8 flex flex-col items-center border border-indigo-100 dark:border-zinc-700 transition-transform hover:scale-105 hover:shadow-2xl hover:border-violet-300 animate-fade-in min-h-[360px] transition-colors duration-300">
    <div className="mb-4 flex items-center justify-center">
      <span className="inline-block rounded-full bg-gradient-to-br from-violet-600 via-indigo-200 to-violet-400 dark:from-indigo-700 dark:via-indigo-400 dark:to-violet-600 p-4">
        <Book className="text-white" size={40} />
      </span>
    </div>
    <h2 className="font-playfair text-2xl font-bold mb-2 text-violet-800 dark:text-indigo-200 tracking-tight">AIBYSS</h2>
    <p className="text-base text-slate-700 dark:text-slate-300 text-center mb-4">
      Dive into <span className="font-semibold text-violet-900 dark:text-indigo-300">AIBYSS</span>—our annual flagship event exploring the latest in AI. Keynotes, hands-on sessions, and loads of learning (and fun)!
    </p>
    <div className="mt-auto flex gap-2 pt-2">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
        alt="AIBYSS"
        className="h-14 w-24 object-cover rounded shadow-md"
      />
    </div>
  </div>
);

export default AibyssCard;
