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

  const handleDropdownItemClick = (page: string, sectionId: string) => {
    onPageChange(page, sectionId);
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
        { label: 'Biomass Fuel Supply', sectionId: 'biomass' },
        { label: 'RDF Processing Unit', sectionId: 'rdf' },
        { label: 'Biogas Plant Establishment', sectionId: 'biogas' },
        { label: 'Plant Machinery Supply', sectionId: 'machinery' },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-md py-3 border-b border-teal-100/50'
          : 'bg-white/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
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
          <span className="font-display font-bold text-xl text-primary tracking-tight hidden sm:block bg-gradient-to-r from-[#041523] via-[#034152] to-[#03818F] bg-clip-text text-transparent group-hover:text-[#00A8C6] transition-colors duration-300">
            Geoclaim Energy
          </span>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-8">
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
                    className={`absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-teal-50/50 p-2 transition-all duration-300 origin-top-left ${
                      activeDropdown === link.id
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    {link.dropdownItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleDropdownItemClick(link.id, item.sectionId)}
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

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#041523]/60 backdrop-blur-sm z-40 xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-[#041523] p-8 flex flex-col gap-8 border-l border-white/10 z-50 xl:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="self-end p-2 text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
          <X className="w-6 h-6" />
        </button>

        <nav className="flex flex-col gap-5 overflow-y-auto pr-2">
          {navLinks.map((link) => (
            <div key={link.id} className="flex flex-col gap-2">
              <button
                onClick={() => {
                  if (!link.dropdownItems) {
                    onPageChange(link.id);
                    setIsMobileMenuOpen(false);
                  } else {
                    setActiveDropdown(activeDropdown === link.id ? null : link.id);
                  }
                }}
                className={`text-left text-lg font-bold text-white flex items-center justify-between ${
                  currentPage === link.id ? 'text-accent' : ''
                }`}
              >
                {link.label}
                {link.dropdownItems && (
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeDropdown === link.id ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              {link.dropdownItems && activeDropdown === link.id && (
                <div className="flex flex-col gap-3 pl-4 border-l border-white/10 mt-2">
                  {link.dropdownItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleDropdownItemClick(link.id, item.sectionId)}
                      className="text-left text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          onClick={() => {
            onPageChange('contact');
            setIsMobileMenuOpen(false);
          }}
          className="mt-auto w-full bg-gradient-to-r from-primary to-accent py-4 rounded-full font-semibold text-white shadow-lg text-center"
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
}
