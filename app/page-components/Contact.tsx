'use client';

import { useState } from 'react';
import { Orbitron } from 'next/font/google';
// import ThreeBackground from '../contact/components/ThreeBackground';
import LeftPanel from '../contact/components/LeftPanel';
import RightPanel from '../contact/components/RightPanel';


const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export default function Contact() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
        
      {/* <ThreeBackground /> */}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-screen">
        <LeftPanel
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          orbitron={orbitron.className}
        />

        <RightPanel showDetails={showDetails} />
      </div>
    </>
  );
}