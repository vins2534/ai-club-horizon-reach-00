
import React from "react";
import CarouselRow from "../CarouselRow";
import MediaPostCard from "../media/MediaPostCard";
import { useMediaPosts } from "../../hooks/useMediaPosts";

const MediaSection = () => {
  const { mediaPosts, isLoading } = useMediaPosts();

  if (isLoading) {
    return (
      <section>
        <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Concept Media Posts</h2>
        <div className="text-center py-8">Loading...</div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Concept Media Posts</h2>
      <CarouselRow 
        items={mediaPosts.map(post => (
          <MediaPostCard 
            title={post.title} 
            subtitle={post.subtitle || "Media Post"} 
            key={post.id} 
          />
        ))} 
        slidesPerView={{ base: 1, md: 2, lg: 3 }} 
      />
    </section>
  );
};

export default MediaSection;
