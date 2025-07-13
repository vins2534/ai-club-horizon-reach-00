import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Welcome = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-200 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-black flex flex-col items-center justify-center p-4">
    <div className="flex flex-col items-center animate-fade-in">
      {/* Club Logo Placeholder */}
      <div className="rounded-full bg-gradient-to-br from-indigo-500 via-sky-400 to-teal-400 shadow-lg p-8 mb-6">
        <Sparkles className="text-white" size={56} />
      </div>
      <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary mb-1 tracking-tight text-center select-none dark:text-white">
        AI Club
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 mt-2 max-w-xl dark:text-gray-300">
        Welcome to the hub of innovation, learning, and creativity – where tech enthusiasts thrive together!
      </p>
      <Link to="/home" tabIndex={-1}>
        <Button className="text-lg px-8 py-6 shadow animate-scale-in" size="lg">
          Enter the Club
        </Button>
      </Link>
    </div>
  </div>
);

export default Welcome;
