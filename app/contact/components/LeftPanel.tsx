'use client';

import { AnimatePresence } from 'framer-motion';
import ContactIntro from './ContactIntro';
import ContactDetails from './ContactDetails';

export default function LeftPanel({ showDetails, setShowDetails, orbitron }: any) {
  return (
    <div className="flex items-center justify-center w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-0">
      <div className="w-full max-w-[600px] flex justify-center items-center">
        <AnimatePresence mode="wait">
          {!showDetails ? (
            <ContactIntro
              key="intro"
              orbitron={orbitron}
              onClick={() => setShowDetails(true)}
            />
          ) : (
            <ContactDetails
              key="details"
              onBack={() => setShowDetails(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}