import React from "react";

const AboutSection = () => (
  <section className="relative py-14 overflow-visible px-4">
    <h2 className="text-3xl font-playfair font-bold mb-4 text-white dark:text-indigo-200 tracking-tight ml-4">
      About the Club
    </h2>

    <div
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-indigo-100 dark:border-gray-700 rounded-2xl shadow-md p-7 flex flex-col items-center max-w-2xl mx-auto animate-fade-in transition-transform duration-200 hover:scale-105 hover:shadow-xl select-none z-10"
      style={{ willChange: "transform" }}
    >
      <h3 className="font-bold text-xl text-slate-500 dark:text-indigo-300 mb-3">What We Do</h3>
      <p className="text-base text-slate-700 dark:text-slate-300 text-center">
        The AI Club is a community for anyone fascinated by artificial intelligence and machine learning.
        We organize hands-on workshops, engaging discussions, hackathons, and collaborative projects to help members explore, learn, and build with AI technologies. Whether you're just starting out or already experienced, you'll find opportunities to grow, connect, and contribute. Everyone is welcome — join us as we create, innovate, and make AI fun and accessible for all!
      </p>
    </div>
  </section>
);

export default AboutSection;
