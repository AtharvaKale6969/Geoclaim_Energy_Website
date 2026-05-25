import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      desc: 'Reliable sourcing and distribution of high-grade biomass fuels for industrial boilers, processing plants, and commercial kitchens.',
      image: '/Briquettes & Pellets_Website.png',
      link: 'services/biomass-fuel-supply'
    },
    {
      id: 'rdf-processing-supply',
      title: 'RDF Processing & Supply',
      desc: 'Advanced shredding and separation technologies designed to process municipal solid waste and dry industrial waste into Refuse-Derived Fuel.',
      image: '/RDF_Processing&Supply.jpg',
      link: 'services/rdf-processing-supply'
    },
    {
      id: 'biogas-plant-establishment',
      title: 'Biogas Plant Establishment',
      desc: 'End-to-end design, construction, and operational setup for industrial biogas plants, converting organic waste into clean biogas.',
      image: '/Biogas_Plant.png',
      link: 'services/biogas-plant-establishment'
    },
    {
      id: 'plant-machinery-supply-consulting',
      title: 'Plant Machinery Supply & Consulting',
      desc: 'Strategic sourcing and supply of heavy machinery for waste management infrastructure, backed by full installation support.',
      image: '/Composting Machine.jpeg',
      link: 'services/plant-machinery-consulting'
    }
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
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group bg-teal-50/20 border border-teal-100/50 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,168,198,0.1)] hover:border-[#00A8C6]/30 transition-all duration-500 cursor-pointer h-full"
              onClick={() => onPageChange(srv.link)}
            >
              {/* Top: Large Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img 
                  src={srv.image} 
                  alt={srv.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Darker overlay on hover for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/80 via-[#041523]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                
                {/* Floating Eco Particles inside image on hover */}
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-[#00A8C6]/40"
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
              </div>

              {/* Middle & Bottom: Title, Desc, CTA */}
              <div className="p-8 sm:p-10 flex flex-col flex-1 relative bg-white/80 backdrop-blur-md">
                <div className="absolute -top-10 left-8 right-8 h-10 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
                
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary mb-4 group-hover:text-[#00A8C6] transition-colors duration-300">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-1 font-light">
                  {srv.desc}
                </p>
                
                <div className="mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPageChange(srv.link);
                    }}
                    className="w-full bg-[#03818F] hover:bg-[#00A8C6] text-white px-6 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#03818F]/20 hover:shadow-[#00A8C6]/40 hover:-translate-y-1 flex items-center justify-center gap-2 group/btn"
                  >
                    Explore Service
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
