'use client';

import { useState } from 'react';
import { Orbitron } from 'next/font/google';
// import ThreeBackground from './components/ThreeBackground';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Navbar from '../components/Navbar';
import SocialSidebar from '../components/SocialSidebar';
import dynamic from "next/dynamic";



const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export default function Page() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="fixed z-40">
        <SocialSidebar />
      </div>

      {/* <ThreeBackground /> */}

      <div className="relative z-10 flex-1 pt-20 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          <LeftPanel
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            orbitron={orbitron.className}
          />

          <RightPanel showDetails={showDetails} />
        </div>
      </div>


    </main>
  );
}