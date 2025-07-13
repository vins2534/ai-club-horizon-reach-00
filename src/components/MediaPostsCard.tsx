
import { Image } from "lucide-react";

const MediaPostsCard = () => (
  <div className="group bg-gradient-to-br from-blue-50 via-white to-teal-50 shadow-xl rounded-2xl p-8 flex flex-col items-center border border-cyan-100 transition-transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 animate-fade-in min-h-[360px]">
    <div className="mb-4 flex items-center justify-center">
      <span className="inline-block rounded-full bg-gradient-to-br from-cyan-500 via-blue-300 to-emerald-400 p-4">
        <Image className="text-white" size={40} />
      </span>
    </div>
    <h2 className="font-playfair text-2xl font-bold mb-2 text-cyan-700 tracking-tight">Concept Media Posts</h2>
    <p className="text-base text-slate-700 text-center mb-4">
      From generative art to deep dives — our Media Team creates stunning concept posts, infographics, and explainer content on everything AI!
    </p>
    {/* Example Media Card */}
    <div className="mt-auto w-full flex justify-center gap-2 pt-2">
      <div className="bg-white shadow rounded p-2 flex-1 text-xs text-center">
        <span className="font-bold block text-blue-700">Intro to GANs</span>
        <span className="text-slate-500">Infographic</span>
      </div>
      <div className="bg-white shadow rounded p-2 flex-1 text-xs text-center">
        <span className="font-bold block text-blue-700">What is NLP?</span>
        <span className="text-slate-500">Quick Guide</span>
      </div>
    </div>
  </div>
);

export default MediaPostsCard;
