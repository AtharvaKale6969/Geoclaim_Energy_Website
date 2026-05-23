import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Flame, Factory, Droplets, Settings, CheckCircle2, ChevronRight } from 'lucide-react';

interface ServiceShowcaseCardProps {
  image: string | string[];
  title: string;
  desc: string;
  integrationTime: string;
  idx: number;
  onPageChange: (page: string, targetSectionId?: string) => void;
}

function ServiceShowcaseCard({ image, title, desc, integrationTime, idx, onPageChange }: ServiceShowcaseCardProps) {
  const images = Array.isArray(image) ? image : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length > 1 && !isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length, isHovered]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 80, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 80, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left - width / 2;
    const mouseYPos = event.clientY - rect.top - height / 2;
    x.set((mouseXPos / (width / 2)) * 8);
    y.set((mouseYPos / (height / 2)) * 8);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex-1 w-full bg-teal-50/20 rounded-3xl p-6 border border-teal-100/50 relative overflow-hidden group shadow-lg hover:shadow-[0_15px_30px_rgba(0,168,198,0.12)] hover:border-[#00A8C6]/20 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#00A8C6]/5 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Floating Eco-Tech Particles */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-3xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#00A8C6]/30"
            style={{
              top: `${20 + i * 25}%`,
              left: `${15 + (i * 35) % 70}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.55, 0.15],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* The Inner Card Container */}
      <div className="relative border border-primary/10 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm overflow-hidden flex flex-col h-full">
        {/* Top Image Section (Full Width) */}
        <div 
          className="relative overflow-hidden h-44 sm:h-48 w-full border-b border-primary/5 group/slider bg-white/40 flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Parallax & Zoom Image Carousel */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              alt={`${title} - slide ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none origin-center p-3 md:p-4"
              src={images[currentImageIndex]}
              style={{ x: mouseX, y: mouseY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [1, 1.03, 1] }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 18, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.06 }}
            />
          </AnimatePresence>

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-30">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-accent w-4' : 'bg-white/50 hover:bg-white/100'}`}
                />
              ))}
            </div>
          )}

          {/* Nav Arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity z-30 hover:bg-black/40"
              >
                &#10094;
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev + 1) % images.length);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity z-30 hover:bg-black/40"
              >
                &#10095;
              </button>
            </>
          )}

          {/* Dark Teal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/60 via-transparent to-transparent pointer-events-none z-10" />

          {/* Light Sweep Effect */}
          <motion.div
            className="absolute inset-y-0 -left-[100%] w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-20 pointer-events-none"
            animate={{
              left: ['-100%', '200%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: idx * 2
            }}
          />
        </div>

        {/* Content Section below image */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-primary mb-3">{title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">{desc}</p>
          </div>

          <div className="flex items-center justify-between text-xs text-primary font-bold border-t border-teal-100/50 pt-4 mt-auto">
            <span>{integrationTime}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPageChange('contact');
              }}
              className="flex items-center gap-1 hover:text-accent transition-colors cursor-pointer"
            >
              Request Spec <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}



interface ProductsProps {
  sectionId?: string;
  onPageChange: (page: string, targetSectionId?: string) => void;
}

export default function Products({ sectionId, onPageChange }: ProductsProps) {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 120]);

  useEffect(() => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [sectionId]);

  const services = [
    {
      id: 'biomass-fuel-supply',
      title: 'Biomass Fuel Supply',
      icon: <Flame className="w-8 h-8 text-primary" />,
      tagline: 'High-Efficiency Biomass Briquettes & Pellets',
      desc: 'Reliable sourcing and distribution of high-grade biomass fuels for industrial boilers, processing plants, and commercial kitchens. Our premium fuel options are designed to offer seamless combustion properties and reduce dependency on traditional fossil fuels.',
      benefits: ['Reduced carbon emissions by up to 80%', 'Fully compliant with pollution control norms', 'High calorific density for longer burns', 'Cost-effective alternative to coal'],
      applications: ['Industrial Boilers', 'Cement Kilns', 'Commercial Kitchens', 'District Heating'],
      image: '/biomass-fuels.jpg',
      cardTitle: 'Industrial Setup',
      cardDesc: 'Tailored layout designed to match client facilities. Deployed with certified compliance guarantees.',
      cardIntegration: 'Integration Time: ~4 Weeks'
    },
    {
      id: 'rdf-processing-supply',
      title: 'RDF Processing & Supply',
      icon: <Factory className="w-8 h-8 text-primary" />,
      tagline: 'Refuse-Derived Fuel Processing Systems',
      desc: 'Advanced shredding and separation technologies designed to process municipal solid waste and dry industrial waste into Refuse-Derived Fuel (RDF). This process redirects non-recyclable high-calorific materials from landfills directly into energy recovery cycles.',
      benefits: ['Diverts up to 90% of dry waste from landfills', 'Provides stable high-calorific alternative fuels', 'Reduces fuel processing costs', 'Meets strict waste management guidelines'],
      applications: ['Cement Industries', 'Waste-to-Energy Plants', 'Industrial Processing Units'],
      image: '/RDF_Processing&Supply.jpg',
      cardTitle: 'Processing Layout',
      cardDesc: 'Shredding and separation systems optimized for maximum RDF calorific output.',
      cardIntegration: 'Setup Time: ~6 Weeks'
    },
    {
      id: 'biogas-plant-establishment',
      title: 'Biogas Plant Establishment',
      icon: <Droplets className="w-8 h-8 text-primary" />,
      tagline: 'Turnkey Anaerobic Digestion Solutions',
      desc: 'End-to-end design, construction, and operational setup for industrial biogas plants. We convert organic waste, food waste, and agricultural byproducts into clean biogas for heating, electricity generation, or vehicle fuel, along with organic compost.',
      benefits: ['Zero-waste organic processing', 'Produces green electricity and heating fuel', 'Generates nutrient-rich organic bio-fertilizer', 'Reduces methane emissions from organic decay'],
      applications: ['Municipal Organic Waste Hubs', 'Food Processing Facilities', 'Dairy & Poultry Farms'],
      image: '/Biogas_Plant.png',
      cardTitle: 'AD Digester Design',
      cardDesc: 'Custom engineered anaerobic digesters for continuous waste-to-energy conversion.',
      cardIntegration: 'Commissioning: ~12 Weeks'
    },
    {
      id: 'plant-machinery-supply-consulting',
      title: 'Plant Machinery Supply & Consulting',
      icon: <Settings className="w-8 h-8 text-primary" />,
      tagline: 'Specialized Waste Processing Machinery',
      desc: 'Strategic sourcing and supply of heavy machinery for waste management infrastructure. We provide custom shredders, separators, trommels, and briquetting machines from top global manufacturers, backed by full installation and maintenance support.',
      benefits: ['Highly durable machinery engineered for heavy-duty sorting', 'Custom system design fitting client footprints', 'Full operational training for site engineers', '24/7 technical support and parts availability'],
      applications: ['Municipal Corporations', 'Private Waste Sorters', 'Biomass Plant Operators'],
      image: ['/Composting Machine.jpeg', '/Belt Conveyer.jpeg', '/Bailing Machine.jpeg'],
      cardTitle: 'Technical Integration',
      cardDesc: 'Heavy-duty sorting and briquetting lines integrated into existing plant flows.',
      cardIntegration: 'Delivery Time: ~8 Weeks'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center bg-[#041523] pt-32 pb-20 overflow-hidden border-b border-white/5">
        {/* Background Image Wrapper with Parallax & Ken Burns */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ y: yParallax }}
        >
          <motion.img
            alt="Sustainability Clean Energy Infrastructure"
            className="w-full h-full object-cover opacity-25 filter blur-[1px]"
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Ambient Brand Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041523] via-[#041523]/95 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041523] via-transparent to-[#041523]/60 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(3,129,143,0.15)_0%,transparent_60%)] pointer-events-none z-0" />
        {/* Vignette effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(4,21,35,0.8)] pointer-events-none z-0" />

        {/* Floating Particles, Waves & Energy Lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle Sustainability Waves */}
          <svg className="absolute bottom-0 left-0 w-full opacity-[0.06] text-white" viewBox="0 0 1440 200" fill="none">
            <path d="M 0 120 Q 360 60, 720 120 T 1440 100 L 1440 200 L 0 200 Z" fill="currentColor" />
            <path d="M 0 140 Q 360 80, 720 140 T 1440 120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>

          {/* Floating Eco Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#00A8C6]/20"
              style={{
                top: `${20 + i * 9}%`,
                left: `${10 + (i * 21) % 60}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.15, 0.6, 0.15],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Content Container (Aligned Left) */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 w-full">
          <div className="max-w-2xl text-left space-y-6">
            {/* Tagline / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block bg-[#03818F]/25 border border-[#00A8C6]/25 px-4 py-1.5 rounded-full text-accent font-semibold text-xs uppercase tracking-widest">
                Our Offerings
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="font-display font-bold text-3xl md:text-5xl lg:text-7xl text-white leading-tight tracking-tight"
            >
              Products & <span className="text-accent">Services</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              Discover our comprehensive suite of sustainable solutions designed to facilitate clean energy generation, reduce carbon footprints, and maximize circular resource recovery.
            </motion.p>

            {/* CTAs Staggered */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <button
                onClick={() => onPageChange('products', 'biomass-fuel-supply')}
                className="bg-accent hover:bg-accent/90 text-primary px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5 text-center cursor-pointer w-full sm:w-auto"
              >
                View Products
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-24 md:space-y-32">
        {services.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={srv.id}
              id={srv.id}
              className={`flex flex-col lg:flex-row items-center gap-16 scroll-mt-28 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Service Info */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    {srv.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-primary">{srv.title}</h3>
                    <p className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {srv.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{srv.desc}</p>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-primary">Key Advantages:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {srv.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="pt-4">
                  <h4 className="font-display font-bold text-sm text-primary mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {srv.applications.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-3.5 py-1.5 bg-teal-50 border border-teal-100/50 rounded-full text-xs font-semibold text-primary"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Illustration / Showcase Card */}
              <ServiceShowcaseCard
                image={srv.image}
                title={srv.cardTitle}
                desc={srv.cardDesc}
                integrationTime={srv.cardIntegration}
                idx={idx}
                onPageChange={onPageChange}
              />
            </div>
          );
        })}
      </section>

    </div>
  );
}
