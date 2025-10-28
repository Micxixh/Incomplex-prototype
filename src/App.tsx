import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import PortfolioSite from './components/PortfolioSite';
import CustomCursor from './components/CustomCursor';
import NewProjectModal from './components/NewProjectModal';
import LoadingScreen from './components/LoadingScreen';

const companyList = ["Company A", "Company B", "Company C"]; // your real project names here

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogoClick = (companyName: string) => {
    setSelectedCompany(companyName);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  const handleNextProject = () => {
    if (selectedCompany === null) return;

    const currentIndex = companyList.indexOf(selectedCompany);
    if (currentIndex < companyList.length - 1) {
      setSelectedCompany(companyList[currentIndex + 1]);
    } else {
      setSelectedCompany(null); // closes modal when done
    }
;
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="size-full">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      <CustomCursor />
      <PortfolioSite onLogoClick={handleLogoClick} isLoading={isLoading} />
      <NewProjectModal
        isOpen={selectedCompany !== null}
        onClose={handleCloseModal}
        onNextProject={handleNextProject}
        companyName={selectedCompany || ""}
      />
    </div>
  );
}
