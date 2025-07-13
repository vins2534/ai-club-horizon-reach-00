
import React from "react";
import { Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  session: string;
  speaker?: string;
  img?: string;
  id?: string;
}

const AibyssCard: React.FC<Props> = ({
  session,
  speaker,
  img,
  id,
}) => {
  const navigate = useNavigate();

  // If id prop, make it clickable/navigable
  const handleCardClick = () => {
    if (id) {
      navigate(`/symbitech/${id}`);
    }
  };

  return (
    <div
      className={`bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center border border-indigo-100 w-72 min-h-[250px] snap-center shrink-0 hover:scale-105 transition-transform cursor-pointer`}
      onClick={id ? handleCardClick : undefined}
      tabIndex={id ? 0 : undefined}
      role={id ? "button" : undefined}
      aria-label={id ? `${session} SymbiTech details` : undefined}
    >
      <span className="inline-block rounded-full bg-gradient-to-br from-violet-600 via-indigo-200 to-violet-400 p-3 mb-2">
        <Book className="text-white" size={28} />
      </span>
      <span className="font-bold text-violet-900">{session}</span>
      {speaker && <span className="text-xs text-slate-600">Speaker: {speaker}</span>}
      {img && (
        <img
          src={img}
          alt="AIBYSS session"
          className="h-20 w-full object-cover rounded shadow mt-2"
        />
      )}
    </div>
  );
};

export default AibyssCard;
