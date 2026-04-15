"use client";

import { motion } from "framer-motion";
import EventCard from "./EventCard";

type Props = {
  year: string;
  events: {
    title: string;
    image: string;
    description: string;
    details: string;
    participation: string;
  }[];
};

export default function YearSection({ year, events }: Props) {
  return (
    <motion.div
      id={`year-${year.toLowerCase()}`}
      className="py-24 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* HEADING */}
     <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 tracking-wide">

  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 
  bg-clip-text text-transparent 
  font-semibold
  drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]">
    EVENTS {year}
  </span>

</h2>

      {/* GRID LAYOUT */}
      <div className="flex flex-wrap justify-center gap-16 overflow-visible">

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <EventCard {...event} />
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}