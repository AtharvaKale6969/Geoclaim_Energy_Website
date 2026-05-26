import { useEffect, useRef, useState } from 'react';
import heroImg from "../assets/Image_Hero.png";
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Recycle, Flame, Factory, ShieldCheck, Settings, Droplets } from 'lucide-react';
import ClientsAndPartners from '../components/home/ClientsAndPartners';

interface HomeProps {
  onPageChange: (page: string, sectionId?: string) => void;
}

// Custom Counter Component for metrics animation
const AnimatedCounter = ({ target, duration = 2000, suffix = '' }: { target: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentValue = startValue + easedProgress * (target - startValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  const formatCount = () => {
    if (target % 1 === 0) {
      return Math.floor(count).toLocaleString();
    }
    return count.toFixed(1);
  };

  return (
    <span ref={ref} className="font-display font-bold tabular-nums">
      {formatCount()}{suffix}
    </span>
  );
};

export default function Home({ onPageChange }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const circularJourney = [
    { step: '01', title: 'Site Assessment', desc: 'Conducting site evaluation, waste audits, feasibility studies and requirement estimation before solution planning.', icon: <Recycle className="w-8 h-8" /> },
    { step: '02', title: 'Waste Source Alignment', desc: 'Identifying, aligning and validating suitable waste streams and feedstock sources for optimal processing and energy recovery.', icon: <Settings className="w-8 h-8" /> },
    { step: '03', title: 'Processing', desc: 'Conversion into RDF, biomass, or biogas precursors.', icon: <Factory className="w-8 h-8" /> },
    { step: '04', title: 'Energy Conversion', desc: 'Thermal, fuel & chemical recovery into grid-ready power.', icon: <Flame className="w-8 h-8" /> },
    { step: '05', title: 'Sustainability', desc: 'Reduced carbon footprint and circular economy metrics.', icon: <ShieldCheck className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-32 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Geoclaim Energy Industrial Plant"
            className="w-full h-full object-cover object-[center_top] md:object-center"
            src={heroImg}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/50 to-transparent"></div>
        </div>

        {/* Floating Abstract Particles */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="absolute w-72 h-72 bg-accent/10 rounded-full blur-[80px] top-[10%] left-[10%] animate-pulse" />
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-[100px] bottom-[10%] right-[10%] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-block bg-primary/30 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-accent font-semibold text-xs tracking-wider uppercase mb-6">
              RENEWABLE FUTURE
            </span>
            <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-7xl mb-6 leading-tight">
              Powering Sustainable Energy Through <span className="text-accent">Waste Transformation</span>
            </h1>
            <p className="text-sm sm:text-base text-white/80 mb-8 max-w-lg leading-relaxed">
              Transforming waste into clean fuels and renewable energy solutions for industries, governments and institutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => onPageChange('contact')}
                className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-black/20 w-full sm:w-auto"
              >
                Partner With Us
              </button>
              <button
                onClick={() => onPageChange('products')}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all w-full sm:w-auto"
              >
                Explore Services
              </button>
            </div>

            {/* Trusted Logos */}
            <div className="pt-12 border-t border-white/10 mt-4 pb-8 md:pb-12 lg:pb-16">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-8">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap gap-8 opacity-40 font-display font-bold text-sm tracking-wider">
                <span>INDUS-CORP</span>
                <span>ECO-POWER</span>
                <span>META-GRID</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { target: 450, suffix: 'k+', label: 'Waste Processed (t)' },
            { target: 32, suffix: '%', label: 'Carbon Reduced' },
            { target: 120, suffix: '+', label: 'Clients Served' },
            { target: 1.2, suffix: 'GW', label: 'Energy Generated' },
          ].map((metric, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-primary text-4xl sm:text-5xl lg:text-6xl mb-2 font-display font-bold">
                <AnimatedCounter target={metric.target} suffix={metric.suffix} />
              </div>
              <div className="text-gray-500 font-semibold text-xs tracking-wider uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="py-24 bg-teal-50/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Bridging the gap between businesses waste output and renewable sustainability through cutting-edge waste-to-energy technologies.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Recycle className="w-6 h-6" />,
                title: 'Biomass Fuel Supply',
                desc: 'Reliable sourcing and sustainable distribution of high-grade biomass fuels supporting industries, Government bodies & commercials and cleaner energy ecosystems.',
                path: 'services/biomass-fuel-supply',
              },
              {
                icon: <Factory className="w-6 h-6" />,
                title: 'RDF Processing & Supply',
                desc: 'Refuse Derived Fuel production systems that convert municipal and industrial waste into high-calorific energy sources.',
                path: 'services/rdf-processing-supply',
              },
              {
                icon: <Droplets className="w-6 h-6" />,
                title: 'Biogas Plant Establishment',
                desc: 'Turnkey anaerobic digestion solutions for organic waste processing and renewable natural gas production.',
                path: 'services/biogas-plant-establishment',
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: 'Plant Machinery Supply & Consulting',
                desc: 'Specialized machinery supply and strategic consulting for waste management infrastructure optimization.',
                path: 'services/plant-machinery-consulting',
              },
            ].map((srv, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-teal-100/50 flex flex-col items-start h-full hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {srv.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-4">{srv.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">{srv.desc}</p>
                <button
                  onClick={() => onPageChange(srv.path)}
                  className="text-primary hover:text-accent text-xs font-bold flex items-center gap-2 group/btn"
                >
                  Learn More{' '}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Circular Journey (Timeline) */}
      <section className="py-28 bg-gradient-to-br from-[#041523] via-[#034152] to-[#041523] relative overflow-hidden">
        {/* Animated Background shapes & wave graphics */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute w-80 h-80 bg-[#00A8C6]/5 rounded-full blur-[90px] top-[15%] left-[5%]"
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-[#03818F]/5 rounded-full blur-[110px] bottom-[15%] right-[5%]"
            animate={{
              x: [0, -30, 0],
              y: [0, -45, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Faint eco-tech circular economy illustration in background */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.03] text-white" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="0.2" strokeDasharray="5 5" />
            <path d="M 100 8 A 92 92 0 0 1 192 100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
            <path d="M 100 192 A 92 92 0 0 1 8 100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
            {/* Subtle waves */}
            <path d="M 30 100 Q 65 80, 100 100 T 170 100" stroke="currentColor" strokeWidth="0.2" />
            <path d="M 30 110 Q 65 90, 100 110 T 170 110" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <span className="inline-block bg-[#03818F]/20 border border-[#00A8C6]/30 px-4 py-1.5 rounded-full text-[#00A8C6] font-semibold text-xs tracking-wider uppercase mb-4">
              Decarbonization Workflow
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              The Circular Journey
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              How we transform businesses waste streams into clean, value-driven energy products.
            </p>
          </div>

          <div className="relative px-4">
            {/* Softly glowing animated pathway */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-[3px] hidden md:block overflow-visible pointer-events-none">
              {/* Static path track */}
              <div className="absolute inset-0 bg-white/10 rounded-full" />
              {/* Pathway drawing animation */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#03818F] via-[#00A8C6] to-[#03818F] rounded-full shadow-[0_0_12px_#00A8C6]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              {/* Living process flow / tiny moving particle */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <motion.div
                  className="absolute h-full w-40 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{
                    left: ['-30%', '130%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>

            {/* Staggered Grid Container */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.18 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10"
            >
              {circularJourney.map((step, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                  }}
                  className="text-center group flex flex-col items-center bg-white/[0.01] border border-white/[0.03] p-6 rounded-2xl hover:bg-white/[0.03] hover:border-white/[0.08] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(4,21,35,0.7)] transition-all duration-500 cursor-default"
                >
                  <div className="w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-md relative transition-all duration-500 group-hover:scale-110 group-hover:border-[#00A8C6]/50 group-hover:shadow-[0_0_25px_rgba(0,168,198,0.3)]">
                    {/* Pulsing ring for active nodes */}
                    <div className="absolute inset-0 bg-[#00A8C6]/5 rounded-full animate-pulse pointer-events-none scale-105" />

                    {/* Glowing highlight */}
                    <div className="absolute inset-0 bg-[#00A8C6]/5 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="text-[#00A8C6] relative z-10 transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>
                  <span className="block text-[10px] font-semibold text-[#00A8C6] uppercase tracking-wider mb-2">
                    Step {step.step}
                  </span>
                  <h4 className="font-display font-bold text-white text-base mb-3 group-hover:text-[#00A8C6] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed px-1">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-24 bg-teal-50/10 border-t border-teal-50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-16 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary">
              Client Success Stories
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              See how we help industrial corporations and local utilities meet zero-waste emission standards.
            </p>
          </div>

          {/* Infinite Scroll Testimonials Container */}
          <div className="w-full overflow-hidden relative py-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused] whitespace-nowrap">
              {[1, 2].map((loop) => (
                <div key={loop} className="flex gap-6 md:gap-8 shrink-0 pr-6 md:pr-8">
                  {[
                    {
                      quote: "Geoclaim helped us establish a more structured waste management and resource utilization process for our local community. Their practical approach has supported cleaner surroundings and better waste handling practices.",
                      author: "Grampanchayat Dhanla",
                      company: "Local Government Body",
                      initial: "G",
                      highlights: ['Rural waste stream optimization', 'Community sustainability support', 'Cleaner local environmental impact']
                    },
                    {
                      quote: "By working with Geoclaim, we were able to explore cleaner fuel alternatives and improve operational sustainability. Their solutions helped us move toward a more efficient and environmentally responsible process.",
                      author: "Jayant",
                      company: "Foodverse Global Pvt. Ltd.",
                      initial: "J",
                      highlights: ['Biomass fuel support', 'Reduced dependency on conventional fuel', 'Improved sustainability initiatives']
                    },
                    {
                      quote: "Geoclaim provided valuable guidance and support throughout our sustainability planning journey. Their team understood operational requirements and offered practical solutions tailored to our needs.",
                      author: "Debarth Banerjee",
                      company: "Sampurna Solutions Pvt. Ltd.",
                      initial: "D",
                      highlights: ['Sustainability consultation', 'Waste-to-energy planning', 'Customized implementation support']
                    },
                    {
                      quote: "Working with Geoclaim strengthened our biomass procurement and supply operations. Their collaboration helped create a more reliable and efficient supply ecosystem.",
                      author: "Shree Khahshyam Baba",
                      company: "Saoner Biomass Supplier",
                      initial: "S",
                      highlights: ['Biomass procurement partnership', 'Rural sourcing network support', 'Streamlined supply chain operations']
                    }
                  ].map((t, idx) => (
                    <div
                      key={idx}
                      className="bg-white/90 border border-teal-100/50 p-6 md:p-8 rounded-2xl w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] inline-flex flex-col whitespace-normal shrink-0 shadow-sm hover:shadow-[0_12px_30px_rgba(0,188,212,0.18)] hover:border-accent/40 hover:scale-[1.03] transition-all duration-500 cursor-pointer h-full"
                    >
                      <div className="flex-grow">
                        <div className="flex gap-1 text-accent mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-sm font-semibold">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 italic text-sm mb-6 leading-relaxed">"{t.quote}"</p>
                        {t.highlights && (
                          <ul className="mb-6 space-y-1.5">
                            {t.highlights.map((hl, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                                <span className="text-primary mt-0.5">•</span>
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-teal-50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs shrink-0">
                          {t.initial}
                        </div>
                        <div>
                          <div className="font-display font-bold text-xs text-primary">{t.author}</div>
                          {t.company && <div className="text-[10px] text-gray-500 mt-0.5">{t.company}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <ClientsAndPartners />
    </div>
  );
}
