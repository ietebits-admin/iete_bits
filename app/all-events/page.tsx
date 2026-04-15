
"use client";
// import Navbar from ".//components/Navbar";

import EventHero from "./components/EventHero";
import YearSection from "./components/YearSection";
import eventsData from "./data/eventsData";
import Footer from "./components/Footer";
import Navbar from "../components/Navbar";

export default function EventPage() {
  return (
    <main className="text-white">
     <Navbar/>
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