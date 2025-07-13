
import AboutCard from "./AboutCard";
import EventsCard from "./EventsCard";
import AibyssCard from "./AibyssCard";
import MediaPostsCard from "./MediaPostsCard";
import BlogsCard from "./BlogsCard";
import ProjectsCard from "./ProjectsCard";

// SIMPLE HORIZONTAL SCROLLABLE CAROUSEL -- snap, scroll, beautiful on desktop/tablet.
// Each card section has its own component for clarity/extensibility.
const HeroCarousel = () => {
  return (
    <section className="w-full relative">
      <div
        className="flex space-x-8 overflow-x-auto snap-x snap-mandatory py-4 px-2 scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-white scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="snap-center shrink-0 w-96 max-w-[94vw]">
          <AboutCard />
        </div>
        <div className="snap-center shrink-0 w-96 max-w-[94vw]">
          <EventsCard />
        </div>
        <div className="snap-center shrink-0 w-96 max-w-[94vw]">
          <AibyssCard />
        </div>
        <div className="snap-center shrink-0 w-96 max-w-[94vw]">
          <MediaPostsCard />
        </div>
        <div className="snap-center shrink-0 w-96 max-w-[94vw]">
          <BlogsCard />
        </div>
        <div className="snap-center shrink-0 w-96 max-w-[94vw]">
          <ProjectsCard />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
