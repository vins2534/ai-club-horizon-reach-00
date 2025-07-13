import React from "react";
import CarouselRow from "../CarouselRow";
import EventCard from "../event/EventCard";
import { eventsData } from "../../data/mockData";

const EventsSection = () => (
  <section className="relative py-10 overflow-visible bg-card text-card-foreground transition-colors duration-300">
    <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">
      Events
    </h2>
    <CarouselRow
      className=""
      itemClassName="transition-transform duration-200 hover:scale-105 hover:z-10"
      items={eventsData.map(event => (
        <EventCard {...event} key={event.id} />
      ))}
      slidesPerView={{ base: 1, md: 2, lg: 3 }}
    />
  </section>
);

export default EventsSection;
