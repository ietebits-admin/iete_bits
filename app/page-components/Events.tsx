"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Orbitron, Poppins } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const events = [
  {
    name: "Vibe-a-thon",
    img: "/events/vbthn.jpeg",
    description:
      "I-driven coding competition focused on full-stack development. Built complete applications integrating frontend, backend, and AI features. Collaborated with peers and enhanced problem-solving, teamwork, and real-world development skills.",
    highlights: [
      "300+ Participants",
      "2 Rounds completed",
      "Highly competitive finale",
      "Organized successfully",
    ],
  },
  {
    name: "Clue-e-minati",
    img: "/events/clueminati.jpeg",
    description:
      "An engaging online competition with character-based clues on Instagram. Used logic, observation, and research to solve them, enhancing quick thinking, attention to detail, and problem-solving skills in an interactive environment.",
    highlights: [
      "500+ Participants",
      "10+ Character Clues",
      "Instagram-based hunt",
      "Highest accuracy wins",
    ],
  },
  {
    name: "Nexus 3.0",
    img: "/events/Nexus.jpeg",
    description:
      "Nexus 3.0 was a web development competition focused on building innovative, user-friendly websites. Qualified for Round 2, where the project was presented and explained, showcasing creativity, technical skills, and problem-solving ability.",
    highlights: [
      "100+ Website Submissions",
      "Campus-level Competition",
      "Top Teams Qualified",
      "Presentation Round Selection",
    ],
  },
  {
    name: "BGMI Campus Combat",
    img: "/events/bgmi1.jpeg",
    description:
      "BGMI Campus Combat was an esports tournament centered on Battlegrounds Mobile India. It tested teamwork, strategy, and real-time decision-making through competitive matches, fostering sportsmanship and gaming excellence.",
    highlights: [
      "100+ squads Participated",
      "Team-based Competition",
      "Strategic Battle Rounds",
      "Campus-level Esports",
      "High Engagement Event",
    ],
  },
  {
    name: "Tech Udbhav",
    img: "/events/techudbhav.JPG",
    description:
      "Tech Udbhav was a large-scale technical fest promoting innovation, creativity, and technology. It provided a platform to showcase skills, exchange ideas, and collaborative learning beyond the classroom. It also encouraged problem-solving and exposure to emerging technologies.",
    highlights: [
      "500+ Participants",
      "5+ Technical Events",
      "Campus-wide Participation",
      "Multi-domain Competitions",
      "Flagship Technical Fest",
    ],
  },
  {
    name: "Workshops",
    img: "/events/workshops.jpg",
    description:
      "A series of technical workshops offering hands-on learning with emerging tools and technologies. Focused on bridging theory with real-world application while enhancing core skills. Provided industry insights and promoted continuous learning and technical confidence.",
    highlights: [
      "Hands-on Learning Sessions",
      "Industry-relevant Topics",
      "Expert-led Training",
      "Skill Development Focus",
    ],
  },
  {
    name: "Webinars",
    img: "/events/webinar.jpeg",
    description:
      "Webinars by industry experts sharing insights on technologies, careers, and trends. Provided real-world understanding, broadened perspectives, and encouraged continuous learning while keeping participants updated with industry advancements.",
    highlights: [
      "Industry Speaker Talks",
      "Emerging Tech Topics",
      "Interactive Learning",
      "Career Guidance Focus",
    ],
  },
  {
    name: "30 Days Challenge",
    img: "/events/challenge.jpeg",
    description:
      "A 30 Days Coding Challenge solving 90 questions inspired by top tech companies. Strengthened problem-solving, consistency, and understanding of DSA, enhancing coding skills for technical growth and interview preparation.",
    highlights: [
      "30 Days Consistency",
      "90 Coding Questions",
      "16 Company Patterns",
      "Daily Problem Solving",
      "Interview Preparation Focus",
    ],
  },
  {
    name: "Kreatrix",
    img: "/events/kreatrix.jpeg",
    description:
      "Kreatrix was a poster-making competition focused on visual storytelling and design. It emphasized creativity, clarity of message, and impactful communication through artistic presentation, enhancing imagination and design skills.",
    highlights: [
      "50+ Creative Entries",
      "Design-based Competition",
      "Visual Storytelling Focus",
      "Campus-wide Participation",
      "Creativity Showcase Event",
    ],
  },
];

const techUdbhavEvents = [
  // {
  //   name: "Robo Soccer",
  //   img: "/events/robosoccer.png",
  //   description:
  //     "A football match where the bots compete with each other to make goals instead of real people. The event was transformed by adding balloons and giving points for bursting them.",
  // },
  {
    name: "Minefield Rescue",
    img: "/events/minefieldrescue.png",
    description:
      "Teams develop and control manual bots to navigate a simulated minefield and save hostages. This intense competition unfolds in rounds with diverse challenges, testing precision, strategy, and teamwork under pressure.",
  },
  {
    name: "Cloak Coding",
    img: "/events/cloak coding.png",
    description:
      "An exciting coding challenge where participants solve the coding questions without looking the desktop screen. In this, participants must depend solely on their coding expertise and mental agility.",
  },
  {
    name: "Tech Trivia",
    img: "/events/techtrivia.png",
    description:
      "It is a competitive event where participants engage in a fast-paced quiz covering diverse technical subjects like artificial intelligence, programming languages, algorithms, electronics, robotics, and cutting-edge technologies.",
  },
  {
    name: "Innovation Tank",
    img: "/events/innovationtank.png",
    description:
      "Teams showcase inventive solutions for industrial and environment challenges, reminiscent of the popular show Shark Tank. Participants present their business ideas, highlighting key concepts, market feasibility, and societal or environmental benefits.",
  },
  {
    name: "Cyber Battleground",
    img: "/events/cyberbattleground.png",
    description:
      "Participants search for hidden flags in diverse forms like code, databases, servers, and encrypted files, requiring a range of expertise to uncover. They engage in a simulated cyber warfare scenario, showcasing their cybersecurity skills to retrieve the flags.",
  },
];

export default function Event() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-x-hidden">
      {/* ================= HERO : MAJOR EVENTS ================= */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-[14%] left-1/2 -translate-x-[53%] w-[120%] h-[120%] pointer-events-none">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2
                 w-[80%] h-[85%]
                 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.45),rgba(0,0,0,0)_65%)]"
          />
        </div>

        <h1
          className={`${orbitron.className} 
          absolute top-[38%] left-1/2 -translate-x-1/2
          text-[clamp(2.8rem,6vw,4.8rem)]
          tracking-[0.18em] md:tracking-[0.25em]
          font-semibold z-10 text-center`}
        >
          MAJOR EVENTS
        </h1>

        <div
          className="absolute bottom-[3.5rem] w-[70%] h-[0.45rem]
               bg-gradient-to-r
               from-slate-700/40 via-slate-200/40 to-slate-700/40
               shadow-[0_-0.6rem_1.6rem_rgba(0,0,0,0.75)]
               before:absolute before:inset-0
               before:bg-gradient-to-t
               before:from-black/40 before:to-white/10"
        />
      </section>

      {/* ================= THICK STRIP ================= */}
      <section className="w-full py-[1.5rem] bg-white/5 backdrop-blur-md text-center text-white/60 tracking-widest text-sm">
        INNOVATE &nbsp; • &nbsp; THROUGH &nbsp; • &nbsp; TECHNOLOGY
      </section>

      {/* ================= EVENT SLIDER ================= */}
      <section className="py-[0.2rem]">
        <div className="relative w-full px-[6vw]">
          <div
            className="flex gap-[3rem] overflow-x-auto scrollbar-hide py-[1rem]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {events.map((event, i) => (
              <motion.div
                key={i}
                onHoverStart={() => setActiveEvent(event)}
                onClick={() => setActiveEvent(event)}
                className="relative flex-shrink-0 overflow-visible cursor-pointer"
              >
                <div className="w-[18rem] md:w-[20rem] h-[24rem] overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 14 }}
                    className="relative w-full h-full rounded-2xl
                         bg-white/10 backdrop-blur-xl
                         shadow-[0_2rem_4rem_rgba(0,0,0,0.65)]
                         hover:shadow-cyan-400/30
                         will-change-transform"
                  >
                    <img
                      src={event.img}
                      alt={event.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-2xl" />
                    <div
                      className="absolute bottom-0 w-full px-[1.2rem] py-[2rem]
                           bg-[linear-gradient(180deg,rgba(255,255,255,0.25),rgba(255,255,255,0.05))]
                           backdrop-blur-1.6xl
                           border-t border-white/30"
                    >
                      <p
                        className={`${poppins.className} text-xl font-semibold tracking-wide text-center`}
                      >
                        {event.name}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EVENT DETAIL PREVIEW ================= */}
      <section className="px-[6vw] py-[4rem]">
        <div
          className="grid md:grid-cols-3 gap-6 items-stretch"
          style={{ perspective: "1200px" }}
        >
          {/* MAIN CARD — DESCRIPTION */}
          <motion.div
            key={activeEvent.name + "-main"}
            initial={{ opacity: 0, rotateY: -10, x: -40 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            whileHover={{ rotateY: 6, rotateX: 4, scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden
                    p-[1.5rem] md:p-[2rem]
                    border border-white/10
                    shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundColor: "black",
                backgroundImage: `
                linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,1) 2px, transparent 2px)
              `,
                backgroundSize: "40px 40px, 40px 40px, 120px 120px",
              }}
            />
            <div className="absolute inset-0 bg-black/50 rounded-3xl" />
            <div className="relative z-10 text-center space-y-3">
              <h3 className="text-cyan-400 text-[clamp(1.6rem,3vw,2.2rem)] break-words font-semibold tracking-wide">
                {activeEvent.name}
              </h3>
              <p
                className={`${poppins.className} text-white/80 leading-relaxed text-sm max-w-[60ch] mx-auto`}
              >
                {activeEvent.description}
              </p>
            </div>
          </motion.div>

          {/* HIGHLIGHTS CARD */}
          <motion.div
            key={activeEvent.name + "-highlights"}
            initial={{ opacity: 0, rotateY: 10, x: 40 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            whileHover={{ rotateY: -6, rotateX: 4, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl relative overflow-hidden p-[2rem]
                    border border-cyan-400/20
                    shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                    hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]
                    flex flex-col items-center justify-center text-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundColor: "black",
                backgroundImage: `
                linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px),
                radial-gradient(circle, rgba(255,255,255,1) 2px, transparent 2px)
              `,
                backgroundSize: "40px 40px, 40px 40px, 120px 120px",
              }}
            />
            <div className="absolute inset-0 bg-black/50 rounded-3xl" />
            <div className="relative z-10">
              <h4 className="text-xl text-center mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                EVENT HIGHLIGHTS
              </h4>
              <ul className="space-y-2 text-white/90">
                {activeEvent.highlights?.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STRIP =================*/}
      <section className="w-full py-[1.5rem] bg-white/5 backdrop-blur-md text-center text-white/60 tracking-widest text-sm">
        INNOVATE &nbsp; • &nbsp; THROUGH &nbsp; • &nbsp; TECHNOLOGY
      </section>

      {/* ================= TECH UDBHAV ================= */}
      <section className="relative py-[6rem] overflow-hidden">
        <div className="relative min-h-[40vh] flex items-center justify-center mb-[3rem]">
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[120%] h-[120%]">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2
                       w-[70%] h-[100%]
                       bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.4),rgba(0,0,0,0)_65%)]"
            />
          </div>
          <h2
            className={`${orbitron.className} absolute 
            top-[38%] md:top-[32%] lg:top-[26%]
            left-1/2 -translate-x-1/2
            text-center
            text-[clamp(2.2rem,5vw,4rem)]
            tracking-[0.35em] font-semibold z-10`}
          >
            TECH UDBHAV
          </h2>
          <div
            className="absolute bottom-[1.1rem] w-[70%] h-[0.45rem]
                 bg-gradient-to-r
                 from-slate-700/40 via-slate-200/40 to-slate-700/40
                 shadow-[0_-0.6rem_1.6rem_rgba(0,0,0,0.75)]
                 before:absolute before:inset-0
                 before:bg-gradient-to-t
                 before:from-black/40 before:to-white/10"
          />
        </div>

        <div className="relative w-full px-[6vw]">
          <div
            className="flex gap-[3rem] overflow-x-auto scrollbar-hide py-[2.5rem]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {techUdbhavEvents.map((event, i) => (
              <motion.div
                key={i}
                className="relative flex-shrink-0 overflow-visible"
                whileHover={{ y: -12 }}
              >
                <div className="w-[18rem] md:w-[20rem] h-[24rem] overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 180, damping: 15 }}
                    className="relative w-full h-full rounded-2xl overflow-hidden
                           shadow-[0_2rem_4rem_rgba(0,0,0,0.65)]"
                  >
                    <img
                      src={event.img}
                      alt={event.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    <div
                      className="absolute bottom-[40%] left-1/2 -translate-x-1/2
                             w-[100%] py-[0.95rem]
                             bg-white/25
                             backdrop-blur-1.3xl
                             border border-white/30
                             text-center"
                    >
                      <span className="text-sm font-semibold tracking-wide text-white">
                        {event.name}
                      </span>
                    </div>
                    <div
                      className="absolute bottom-0 w-full h-[40%]
                      px-[1.2rem] flex items-center justify-center text-center
                      overflow-hidden rounded-b-2xl"
                    >
                      <div className="absolute inset-0 bg-black">
                        <div
                          className="absolute inset-0
                          bg-[linear-gradient(rgba(255,255,255,0.32)_1px,transparent_1px),
                               linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                          bg-[size:40px_40px]"
                        />
                        <div
                          className="absolute inset-0
                          bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)]
                          bg-[size:40px_40px]"
                        />
                        <div
                          className="absolute inset-0
                          bg-[radial-gradient(circle,rgba(255,255,255,0.9)_2px,transparent_2px)]
                          bg-[size:120px_120px]"
                        />
                      </div>
                      <p
                        className={`${poppins.className} relative z-10 text-sm text-white/90 leading-relaxed`}
                      >
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}