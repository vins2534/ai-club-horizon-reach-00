
import { Calendar } from "lucide-react";

const EventsCard = () => (
  <div className="group bg-gradient-to-br from-white via-blue-50 to-purple-100 shadow-xl rounded-2xl p-8 flex flex-col items-center border border-blue-100 transition-transform hover:scale-105 hover:shadow-2xl hover:border-indigo-300 min-h-[360px] animate-fade-in">
    <div className="mb-4 flex items-center justify-center">
      <span className="inline-block rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-indigo-500 p-4">
        <Calendar className="text-white" size={40} />
      </span>
    </div>
    <h2 className="font-playfair text-2xl font-bold mb-2 text-indigo-900 tracking-tight">Events</h2>
    <p className="text-base text-slate-700 text-center mb-3">
      Annual hackathons, AI quizzes, hands-on workshops, speaker series, and more! <br />
      <span className="inline-block mt-2 text-primary font-semibold">Check out recent highlights and upcoming activities.</span>
    </p>
    {/* Placeholder, eventually insert carousel or grid of event photos here */}
    <div className="mt-auto flex gap-2 pt-2">
      <img
        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80"
        alt="Club Event"
        className="h-14 w-24 object-cover rounded shadow-md"
      />
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
        alt="AI Presentation"
        className="h-14 w-24 object-cover rounded shadow-md"
      />
    </div>
  </div>
);

export default EventsCard;
