import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string, sectionId?: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownItemClick = (page: string, sectionId?: string, pageId?: string) => {
    if (pageId) {
      onPageChange(pageId);
    } else {
      onPageChange(page, sectionId);
    }
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    {
      id: 'products',
      label: 'Products & Services',
      dropdownItems: [
        { label: 'Biomass Fuel Supply', pageId: 'services/biomass-fuel-supply' },
        { label: 'RDF Processing & Supply', pageId: 'services/rdf-processing-supply' },
        { label: 'Biogas Plant Establishment', pageId: 'services/biogas-plant-establishment' },
        { label: 'Plant Machinery Supply & Consulting', pageId: 'services/plant-machinery-consulting' },
      ],
    },
    {
      id: 'impact',
      label: 'Impact & Operations',
      dropdownItems: [
        { label: 'Sustainability Performance', sectionId: 'dashboard-section' },
        { label: 'Punjab Biomass Cluster', sectionId: 'punjab' },
        { label: 'Karnataka Biogas Plant', sectionId: 'karnataka' },
        { label: 'Industrial RDF Supply Unit', sectionId: 'rdf-unit' },
      ],
    },
    { id: 'blog', label: 'Blog' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md shadow-md py-3 border-b border-teal-100/50'
            : 'bg-white/70 backdrop-blur-sm py-5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer select-none group" 
          onClick={() => onPageChange('home')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-display font-bold text-xl text-primary tracking-tight bg-gradient-to-r from-[#041523] via-[#034152] to-[#03818F] bg-clip-text text-transparent group-hover:text-[#00A8C6] transition-colors duration-300">
            Geoclaim Energy
          </span>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex flex-1 items-center justify-center flex-nowrap whitespace-nowrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-4">
          {navLinks.map((link) => {
            if (link.dropdownItems) {
              return (
                <div
                  key={link.id}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(link.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => onPageChange(link.id)}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-accent ${
                      currentPage === link.id ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-teal-50/50 p-2 flex flex-col items-start gap-1 transition-all duration-300 origin-top-left ${
                      activeDropdown === link.id
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    {link.dropdownItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleDropdownItemClick(link.id, (item as any).sectionId, (item as any).pageId)}
                        className="w-full text-left px-4 py-3 text-xs font-semibold text-gray-700 hover:text-primary hover:bg-teal-50/50 rounded-xl transition-all"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => onPageChange(link.id)}
                className={`text-sm font-semibold transition-colors hover:text-accent relative py-2 ${
                  currentPage === link.id ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA and Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onPageChange('contact')}
            className="hidden sm:flex items-center justify-center bg-gradient-to-r from-primary to-accent px-6 py-2.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#041523]/60 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl p-8 flex flex-col gap-6 shadow-2xl z-50 xl:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center pb-6 border-b border-teal-100/50">
          <span className="font-display font-bold text-lg text-primary tracking-tight bg-gradient-to-r from-[#041523] via-[#034152] to-[#03818F] bg-clip-text text-transparent">
            Navigation
          </span>
          <button 
            className="p-2 text-gray-500 hover:text-primary transition-colors bg-teal-50/50 rounded-full" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 overflow-y-auto pr-2">
          {navLinks.map((link) => (
            <div key={link.id} className="flex flex-col">
              <div className="flex items-center justify-between">
                <button
                  onClick={(e) => {
                    if (link.dropdownItems) {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === link.id ? null : link.id);
                    } else {
                      onPageChange(link.id);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`text-left text-base sm:text-lg font-bold flex-1 py-1 transition-colors ${
                    currentPage === link.id ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {link.label}
                </button>
                {link.dropdownItems && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(activeDropdown === link.id ? null : link.id);
                    }}
                    className="p-2 -mr-2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeDropdown === link.id ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Dropdown Options */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === link.id ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-teal-100 ml-2 py-2">
                  {link.dropdownItems?.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleDropdownItemClick(link.id, (item as any).sectionId, (item as any).pageId)}
                      className="text-left text-sm font-semibold text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-200" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <button
          onClick={() => {
            onPageChange('contact');
            setIsMobileMenuOpen(false);
          }}
          className="mt-auto w-full bg-gradient-to-r from-primary to-accent py-4 rounded-xl font-bold text-white shadow-lg text-center text-sm uppercase tracking-wider hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Get In Touch
        </button>
      </div>
    </>
  );
}
