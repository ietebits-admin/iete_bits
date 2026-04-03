'use client';

import { useState } from 'react';
import { Orbitron } from 'next/font/google';
import ThreeBackground from './components/ThreeBackground';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Navbar from '../components/Navbar';
import SocialSidebar from '../components/SocialSidebar';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export default function Page() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
        <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="z-50">
        <SocialSidebar />
      </div>
      <ThreeBackground />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-screen">
        <LeftPanel
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          orbitron={orbitron.className}
        />

        <RightPanel showDetails={showDetails} />
      </div>
    </main>
  );
}