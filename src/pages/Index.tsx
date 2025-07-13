import Footer from "../components/Footer";
import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";
import SymbiTechSection from "../components/sections/SymbiTechSection";
import MediaSection from "../components/sections/MediaSection";
import BlogsSection from "../components/sections/BlogsSection";
import ResourcesSection from "../components/sections/ResourcesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col overflow-x-hidden transition-colors duration-300">
      
      {/* Dark mode toggle */}
      <ThemeToggle />

      {/* Shared background for header + About section */}
      <div className="bg-[url('https://plus.unsplash.com/premium_photo-1705440332779-359bc0421fc1?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                  dark:bg-[url('https://images.unsplash.com/photo-1673526759327-54f1f5b27322?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                  bg-cover bg-center bg-no-repeat brightness-110 contrast-125 w-full transition-colors duration-300">
        <div className="w-full h-full bg-black/30 dark:bg-black/60 transition-colors duration-300">
          <header className="pt-10 pb-6 flex flex-col items-center text-white">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-2 tracking-tight">AI Club</h1>
            <p className="text-xl md:text-2xl max-w-2xl text-center mt-2">
              Exploring Technology · Unleashing Potential · Building Together
            </p>
          </header>

          {/* About Section inherits dark styles now */}
          <AboutSection />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-12 flex flex-col gap-12 flex-1 w-full">
        <EventsSection />
        <SymbiTechSection />
        <MediaSection />
        <BlogsSection />
        <ResourcesSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
