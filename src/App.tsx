import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Impact from './pages/Impact';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sectionId, setSectionId] = useState<string | undefined>(undefined);

  // Sync state with location hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        setSectionId(undefined);
        return;
      }
      
      const parts = hash.split('-');
      const page = parts[0];
      const section = parts.slice(1).join('-');
      
      setCurrentPage(page);
      setSectionId(section || undefined);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Call initially
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on page transition when no anchor section is targeted
  useEffect(() => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [currentPage, sectionId]);

  const handlePageChange = (page: string, targetSectionId?: string) => {
    let newHash = page;
    if (targetSectionId) {
      newHash = `${page}-${targetSectionId}`;
    }
    window.location.hash = newHash;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'about':
        return <About onPageChange={handlePageChange} />;
      case 'products':
        return <Products sectionId={sectionId} onPageChange={handlePageChange} />;
      case 'impact':
        return <Impact sectionId={sectionId} onPageChange={handlePageChange} />;
      case 'blog':
        return <Blog />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 selection:bg-accent selection:text-primary">
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
