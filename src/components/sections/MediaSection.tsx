
import React from "react";
import CarouselRow from "../CarouselRow";
import MediaPostCard from "../media/MediaPostCard";

const MediaSection = () => (
  <section>
    <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Concept Media Posts</h2>
    <CarouselRow items={[
      <MediaPostCard title="Intro to GANs" subtitle="Infographic" key="media-1" />,
      <MediaPostCard title="What is NLP?" subtitle="Quick Guide" key="media-2" />,
      <MediaPostCard title="Future of Robotics" subtitle="Explainer" key="media-3" />,
      <MediaPostCard title="ML vs DL" subtitle="Visual Deep Dive" key="media-4" />
    ]} slidesPerView={{ base: 1, md: 2, lg: 3 }} />
  </section>
);

export default MediaSection;
