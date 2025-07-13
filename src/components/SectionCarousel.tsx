
import React from "react";

interface SectionCarouselProps {
  children: React.ReactNode;
}
const SectionCarousel: React.FC<SectionCarouselProps> = ({ children }) => (
  <div className="w-full">
    <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory py-4 px-2 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-white scroll-smooth">
      {children}
    </div>
  </div>
);

export default SectionCarousel;
