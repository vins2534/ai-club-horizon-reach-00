
import React from "react";
import CarouselRow from "../CarouselRow";
import AibyssCard from "../aibyss/AibyssCard";
import { symbitechData } from "../../data/mockData";

const SymbiTechSection = () => (
  <section className="relative py-10 overflow-visible">
    <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">SymbiTech</h2>
    <CarouselRow
      className=""
      itemClassName="transition-transform duration-200 hover:scale-105 hover:z-10"
      items={symbitechData.map(card => (
        <AibyssCard
          key={card.id}
          session={card.session}
          speaker={card.speaker}
          img={card.img}
          id={card.id}
        />
      ))}
      slidesPerView={{ base: 1, md: 2, lg: 3 }}
    />
  </section>
);

export default SymbiTechSection;
