// @ts-nocheck
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { Cog, Wrench, Settings2, Replace, Factory, Repeat, LayoutDashboard, ShieldCheck, CheckCircle2, TrendingUp, Users, Settings, LineChart, Search, Leaf, Droplets } from 'lucide-react';
import { 
  ServiceHighlights, WorkflowSteps, KeyDeliverables, ChallengeSolution, 
  ServiceFAQ, ComplianceStandards, RegionalCoverage, QuickSnapshot, 
  BeforeAfterImpact, ConnectedEcosystem 
} from '../../components/services/PremiumSections';

function AnimatedCounter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (cv) => {
          if (ref.current) ref.current.textContent = Math.round(cv) + suffix;
        }
      });
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// Add Drill component polyfill if not exported by lucide-react (using standard Wrench as fallback if needed, but Drill is valid in current lucide-react)
export default function PlantMachineryConsulting() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const applications = [
    { icon: <Factory className="w-6 h-6" />, title: 'Waste Processing Facilities', desc: 'Robust machinery setups designed for high-volume municipal and industrial waste separation.' },
    { icon: <Repeat className="w-6 h-6" />, title: 'Recycling Systems', desc: 'Precision sorting and material recovery infrastructure for circular material lifecycles.' },
    { icon: <Settings2 className="w-6 h-6" />, title: 'Industrial Plants', desc: 'Integrated shredding and baling lines directly feeding manufacturing ecosystems.' },
    { icon: <LayoutDashboard className="w-6 h-6" />, title: 'Infrastructure Projects', desc: 'Custom engineered turnkey mechanical solutions for large-scale environmental projects.' }
  ];

  const additionalInfo = [
    { title: 'Equipment Categories', desc: 'We source and supply a comprehensive range of heavy machinery including primary shredders, secondary crushers, advanced trommel screens, wind sifters, and high-density baling presses tailored to specific material densities.' },
    { title: 'Installation Support', desc: 'Our involvement goes beyond procurement. Dedicated engineering teams ensure seamless mechanical and electrical integration into your existing plant flow to minimize downtime and maximize immediate output.' },
    { title: 'Maintenance Support', desc: 'We secure your investment with robust post-installation service contracts. This includes rigorous operational training for site engineers and a rapid-response network for critical spare parts.' }
  ];

  const dashboardStats = [
    { label: 'Installed Systems', value: 120, suffix: '+', icon: <Settings2 className="w-5 h-5" />, desc: 'Heavy machinery units successfully integrated.' },
    { label: 'Technical Uptime', value: 98, suffix: '%', icon: <TrendingUp className="w-5 h-5" />, desc: 'Operational consistency backed by fast maintenance.' },
    { label: 'Consulting Reach', value: 15, suffix: '+', icon: <Users className="w-5 h-5" />, desc: 'Regions supported with engineering expertise.' }
  ];

  const clients = [
    { title: 'Waste Operators', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80' },
    { title: 'Processing Plants', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },
    { title: 'Recycling Infrastructure', image: '/Recycling_Infrastructure.avif' }
  ];

  const slideshowImages = [
    { src: '/Composting Machine.jpeg', caption: 'Processing Equipment Solutions' },
    { src: '/Belt Conveyer.jpeg', caption: 'Conveyor Systems' },
    { src: '/Bailing Machine.jpeg', caption: 'Baling Machinery' },
    { src: '/Consultancy.webp', caption: 'Machinery Consulting Support' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  // New Sections Data
  const highlights = [
    { icon: <Settings2 className="w-4 h-4" />, title: 'Strategic Engineering' },
    { icon: <Cog className="w-4 h-4" />, title: 'Heavy Machinery' },
    { icon: <Wrench className="w-4 h-4" />, title: 'Seamless Installation' },
    { icon: <ShieldCheck className="w-4 h-4" />, title: 'Operational Uptime' },
    { icon: <LineChart className="w-4 h-4" />, title: 'Lifecycle Support' }
  ];

  const workflowSteps = [
    { icon: <Search />, title: 'Requirement Analysis', desc: 'Understanding infrastructure needs.' },
    { icon: <Settings />, title: 'Planning', desc: 'Selecting suitable machinery systems.' },
    { icon: <Wrench />, title: 'Installation', desc: 'Deployment and setup assistance.' },
    { icon: <Factory />, title: 'Implementation', desc: 'Supporting operational integration.' },
    { icon: <Users />, title: 'Support', desc: 'Long-term maintenance and consulting.' }
  ];

  const deliverables = [
    { text: 'Equipment Consultation' },
    { text: 'Installation Support' },
    { text: 'Maintenance Guidance' },
    { text: 'Operational Training' }
  ];

  const challenges = [
    { challenge: 'Frequent Equipment Breakdowns', solution: 'Robust machinery & preventative maintenance' },
    { challenge: 'Incorrect Technology Sourcing', solution: 'Expert technical blueprinting & consultation' },
    { challenge: 'Complex Installation Processes', solution: 'Turnkey mechanical & electrical integration' }
  ];

  const faqs = [
    { question: 'Do you provide installation support?', answer: 'Yes, our engineering teams manage the entire mechanical and electrical installation process to ensure seamless integration into your existing infrastructure.' },
    { question: 'What types of processing machinery do you consult on?', answer: 'We specialize in heavy processing equipment including high-torque shredders, trommel screens, bailing presses, and continuous conveyor networks.' },
    { question: 'Is operational training included?', answer: 'Absolutely. We provide extensive on-site training for your staff to ensure they can operate and maintain the machinery safely and efficiently.' }
  ];

  const standards = [
    { title: 'ISO Manufacturing', icon: <ShieldCheck /> },
    { title: 'CE Certification', icon: <CheckCircle2 /> },
    { title: 'Safety Compliance', icon: <ShieldCheck /> },
    { title: 'Emissions Control', icon: <Leaf /> }
  ];

  const snapshotStats = [
    { label: 'Availability', textValue: 'Pan India' },
    { label: 'Support', textValue: '24/7' },
    { label: 'Industry Reach', textValue: 'Multiple Sectors' },
    { label: 'Network', textValue: 'Regional Ecosystem' }
  ];

  const impacts = [
    { before: 'Incompatible legacy machinery', after: 'Optimized integrated systems' },
    { before: 'High operational downtime', after: 'Guaranteed technical uptime' },
    { before: 'Fragmented vendor sourcing', after: 'Single-point engineering' },
    { before: 'Inefficient waste sorting', after: 'Automated recovery flows' }
  ];

  const ecosystemNodes = [
    { title: 'Facility Audit', icon: <Search className="w-8 h-8" /> },
    { title: 'Tech Blueprint', icon: <Settings2 className="w-8 h-8" /> },
    { title: 'Procurement', icon: <Cog className="w-8 h-8" /> },
    { title: 'Integration', icon: <Wrench className="w-8 h-8" /> },
    { title: 'Optimization', icon: <TrendingUp className="w-8 h-8" /> }
  ];

  const equipmentSolutions = [
    { title: 'Weighing Machine', desc: 'Accurate industrial weighing solutions supporting waste handling, sorting and material management workflows.', icon: <Settings2 />, image: '/weighing_machine.png' },
    { title: 'Conveyor Belt Systems', desc: 'Efficient material transfer systems designed to streamline waste processing and industrial operations.', icon: <Repeat />, image: '/conveyor_belt.png' },
    { title: 'Grinder Machines', desc: 'Heavy-duty grinding equipment used for material size reduction and waste preparation processes.', icon: <Cog />, image: '/grinder_machine.png' },
    { title: 'Organic Waste Composter', desc: 'Sustainable composting systems enabling effective conversion of organic waste into valuable outputs.', icon: <Leaf />, image: '/organic_composter.png' },
    { title: 'Baling Machine', desc: 'Compaction systems designed for efficient waste handling, storage and transportation.', icon: <Factory />, image: '/baling_machine.png' },
    { title: 'Washing Machine', desc: 'Industrial cleaning systems supporting recycling and waste processing operations.', icon: <Droplets />, image: '/washing_machine.png' },
    { title: 'Agglomeration Systems', desc: 'Material densification equipment supporting recycling and processing applications.', icon: <Replace />, image: '/agglomeration_system.png' },
    { title: 'Extruder Machines', desc: 'Industrial processing equipment used for material shaping and manufacturing support.', icon: <Wrench />, image: '/extruder_machine.png' },
    { title: 'Sewing Machines', desc: 'Industrial bagging and packaging support equipment for material handling workflows.', icon: <Search />, image: '/sewing_machine.png' },
    { title: 'Dust Remover Machine', desc: 'Specialized equipment designed to remove dust, fine particles and unwanted impurities from waste streams, improving material quality and processing efficiency.', icon: <ShieldCheck />, image: '/dust_remover.png' },
    { title: 'Additional Industrial Equipment Solutions', desc: 'Customized machinery sourcing and consulting support tailored to operational requirements.', icon: <Settings />, image: '/additional_equipment.png' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center bg-[#041523] overflow-hidden pt-28 pb-10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            alt="Plant Machinery Supply"
            className="w-full h-full object-cover opacity-40"
            src="/machinery_hero.png"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#041523] via-[#041523]/60 to-transparent pointer-events-none z-10" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-left"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 tracking-tight">
              Machinery Supply & <span className="text-[#00A8C6]">Consulting</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Advanced machinery and consulting solutions for waste processing ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Service Overview</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#041523] leading-tight">
                Empowering facilities <br className="hidden md:block"/> with robust technology.
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Achieving true operational excellence in waste processing demands the exact right alignment of heavy technology. We provide strategic machinery procurement and engineering consulting to ensure your facility deploys the absolute best shredding, sorting, and baling systems available.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              From initial technical blueprinting to final equipment commissioning, our consulting teams support every step. We ensure that the integration of heavy machinery aligns perfectly with your facility's unique operational footprint and processing loads.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative bg-gray-50 flex items-center justify-center p-4">
              <img src="/Consultancy.webp" alt="Consulting" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(4,21,35,0.08)] border border-teal-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-[#03818F]">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Engineering</p>
                  <p className="text-2xl font-display font-bold text-[#041523] mt-1">End-to-End</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WorkflowSteps steps={workflowSteps} />

      {/* 3. IMAGE EXPERIENCE SECTION (SLIDESHOW) */}
      <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#041523]">Machinery Showcase</h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 bg-white flex items-center justify-center p-4 md:p-12 border border-gray-100"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12"
              >
                <img 
                  src={slideshowImages[currentImageIndex].src} 
                  alt={slideshowImages[currentImageIndex].caption} 
                  className="w-full h-full object-contain mb-8 rounded-xl shadow-sm"
                />
                <div className="absolute bottom-8 left-0 right-0 text-center z-20">
                  <span className="bg-[#041523]/90 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest font-semibold shadow-xl">
                    {slideshowImages[currentImageIndex].caption}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-30">
              {slideshowImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'bg-[#03818F] w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MACHINERY AND EQUIPMENT SOLUTIONS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="mb-16 text-center">
            <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Machinery Sourcing</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#041523] mb-4">Machinery & Equipment Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Supporting waste management and industrial ecosystems through strategic machinery sourcing, supply and consulting solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentSolutions.map((eq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,168,198,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col group h-full"
              >
                <div className="h-48 bg-gray-50/50 p-6 flex items-center justify-center border-b border-gray-100 relative overflow-hidden">
                  <img 
                    src={eq.image} 
                    alt={eq.title} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="absolute -top-6 right-8 w-12 h-12 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-center text-[#03818F] group-hover:text-white group-hover:bg-[#00A8C6] transition-colors duration-300 z-10">
                    {eq.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#041523] mb-3 pr-10">{eq.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{eq.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATIONS (CATEGORIES) */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-16 text-center md:text-left">
          <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Utilization Areas</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#041523]">Primary Applications</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white group p-8 rounded-3xl border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:border-[#00A8C6]/30 hover:shadow-[0_20px_40px_rgba(0,168,198,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-[#03818F] mb-6 group-hover:scale-110 group-hover:bg-[#03818F] group-hover:text-white transition-all duration-300">
                {app.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-[#041523] mb-3">{app.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <KeyDeliverables deliverables={deliverables} />

      <ChallengeSolution items={challenges} />

      {/* 5. ADDITIONAL INFORMATION SECTION */}
      <section className="py-24 bg-[#041523] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
                Technical <br /> Specifications & <br /> <span className="text-[#00A8C6]">Support Services</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Superior processing hardware must be matched with superior support. We guarantee the longevity and efficiency of every line we commission.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {additionalInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors ${idx === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <h3 className="font-display font-bold text-xl text-white mb-4">{info.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{info.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      <ServiceFAQ faqs={faqs} />

      <ComplianceStandards standards={standards} />

      {/* 7. WHOM WE CATER TO (CINEMATIC CARDS) */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Target Audiences</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#041523]">Whom We Cater To</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <img src={client.image} alt={client.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-[#041523]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-display font-bold text-xl md:text-2xl text-white leading-snug group-hover:text-[#00A8C6] transition-colors duration-300">
                  {client.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
