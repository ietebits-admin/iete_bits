import { AnimatePresence } from 'framer-motion';
import ContactIntro from './ContactIntro';
import ContactDetails from './ContactDetails';

export default function LeftPanel({ showDetails, setShowDetails, orbitron }: any) {
  return (
    <div className="flex items-center justify-center px-10">
      <AnimatePresence mode="wait">
        {!showDetails ? (
          <ContactIntro
            orbitron={orbitron}
            onClick={() => setShowDetails(true)}
          />
        ) : (
          <ContactDetails
            onBack={() => setShowDetails(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}