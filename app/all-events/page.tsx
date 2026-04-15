
"use client";

import EventHero from "./components/EventHero";
import YearSection from "./components/YearSection";
import eventsData from "./data/eventsData";
import Footer from "./components/Footer";

export default function EventPage() {
  return (
    <main className="text-white">

      <EventHero />

      {eventsData.map((yearData, index) => (
        <YearSection
          key={index}
          year={yearData.year}
          events={yearData.events}
        />
      ))}

      <Footer />

    </main>
  );
}