import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const MOCK_DATA: Record<string, Record<string, any>> = {
  event: {
    "annual-hackathon": {
      title: "Annual Hackathon",
      date: "March 2025",
      description:
        "Join our flagship hackathon and compete with teams to build the future using AI and ML. Great prizes, fun vibes, and awesome learning!",
      photos: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "ai-quiz-bowl": {
      title: "AI Quiz Bowl",
      date: "Feb 2025",
      description:
        "Test your AI knowledge and compete in a fun, challenging quiz with peers.",
      photos: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "industry-talks": {
      title: "Industry Talks",
      date: "Ongoing",
      description:
        "Connect with AI industry leaders! Discover the latest trends, breakthroughs, and real-world applications of artificial intelligence in our ongoing speaker series.",
      photos: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "ml-bootcamp": {
      title: "ML Bootcamp",
      date: "April 2025",
      description:
        "A hands-on bootcamp introducing machine learning concepts, coding exercises, and real-world problem solving for beginners and intermediate learners.",
      photos: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "genai-exhibition": {
      title: "GenAI Exhibition",
      date: "Coming Soon",
      description:
        "Showcase and celebrate generative AI projects from our club members. Explore creative art, music, code, and more—powered by the latest in generative AI!",
      photos: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=700&q=80",
      ],
    },
    workshop: {
      title: "Workshop",
      date: "Coming Soon",
      description:
        "Join our upcoming workshop for hands-on learning! Get practical experience with AI tools, libraries, and frameworks in a friendly, collaborative environment.",
      photos: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "expert-speaker": {
      title: "Expert Speaker",
      date: "Coming Soon",
      description:
        "Attend a special guest session with an AI expert! Gain insights from their journey, projects, and advice for breaking into the industry.",
      photos: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=700&q=80",
      ],
    },
  },
  symbitech: {
    "aibyss": {
      title: "AIBYSS (RL Based Maze Solver)",
      date: "SymbiTech 2025 - Coming Soon",
      description: "Explore the fascinating world of reinforcement learning with our RL-based maze solver! Learn the theory and see agents in action, solving real mazes step-by-step.",
      photos: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "prompt-painters": {
      title: "Prompt Painters (Prompt Engineering)",
      date: "SymbiTech 2025 - Coming Soon",
      description: "Dive deep into the art and science of prompt engineering! Discover how to craft effective prompts to get the most out of generative AI models in text and art.",
      photos: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "tba-event": {
      title: "TBA (Placeholder Event)",
      date: "SymbiTech 2025 - Coming Soon",
      description: "Stay tuned for an exciting new session announcement! We're planning something special for our next SymbiTech slot.",
      photos: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "upcoming-event": {
      title: "Upcoming Event",
      date: "SymbiTech 2025 - Coming Soon",
      description: "More technical wonders are on the horizon in SymbiTech! Check back for workshop topics, speakers, and more.",
      photos: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "stay-tuned": {
      title: "Stay Tuned",
      date: "To Be Announced",
      description: "We're always cooking up new ideas for SymbiTech! Keep an eye out for future events and hands-on sessions.",
      photos: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=700&q=80",
      ],
    },
    "more-coming-soon": {
      title: "More Coming Soon",
      date: "Stay Tuned!",
      description: "We'll be announcing new speakers, demonstrations, and hands-on learning opportunities as part of the SymbiTech series.",
      photos: [
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
      ],
    },
  },
  // ... other types (symbitech, media, blog, project, resource) can be added in a similar fashion

  
};

const DetailPage = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();

  const details = MOCK_DATA[type ?? ""]?.[id ?? ""];

  if (!details) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <p className="text-xl font-semibold">Not found.</p>
        <button
          className="text-primary underline mt-2"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Link to="/home" className="text-indigo-600 hover:underline mb-4 inline-block">
        &larr; Back
      </Link>
      <h1 className="text-3xl font-bold mb-2">{details.title}</h1>
      <p className="text-lg text-primary mb-2">{details.date}</p>
      <p className="mb-4 text-slate-700">{details.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {details.photos?.map((src: string, i: number) => (
          <img
            key={i}
            src={src}
            alt={details.title}
            className="w-full h-52 object-cover rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
