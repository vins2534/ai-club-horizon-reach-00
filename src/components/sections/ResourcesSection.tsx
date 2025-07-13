
import React from "react";
import CarouselRow from "../CarouselRow";
import ResourceCard from "../resources/ResourceCard";
import { resourceCards } from "../../data/mockData";

const ResourcesSection = () => (
  <section>
    <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Resources</h2>
    <CarouselRow
      items={resourceCards.map((card) => (
        <ResourceCard
          key={card.title}
          title={card.title}
          description={card.description}
          img={card.img}
          link={card.link}
        />
      ))}
      slidesPerView={{ base: 1, md: 2, lg: 3 }}
    />
  </section>
);

export default ResourcesSection;
