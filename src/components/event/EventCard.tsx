import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const EventCard: React.FC<{ title: string; date: string; img: string; id: string }> = ({
  title,
  date,
  img,
  id,
}) => (
  <Link
    to={`/event/${id}`}
    className="bg-gradient-to-br from-white via-blue-50 to-purple-100 shadow-xl rounded-2xl p-6 flex flex-col items-center border border-blue-100 w-80 min-h-[250px] snap-center shrink-0 hover:scale-105 transition-transform no-underline"
    style={{ color: "inherit" }}
    tabIndex={0}
    aria-label={`${title} event details`}
  >
    <span className="inline-block rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-indigo-500 p-3 mb-2">
      <Calendar className="text-white" size={32} />
    </span>
    <h3 className="font-bold text-lg mb-1 text-indigo-900">{title}</h3>
    <span className="text-sm text-primary mb-2">{date}</span>
    <img
      src={img}
      alt="Event"
      className="h-20 w-full object-cover rounded shadow mb-2"
    />
    <span className="text-xs text-slate-500">Highlight</span>
  </Link>
);

export default EventCard;
