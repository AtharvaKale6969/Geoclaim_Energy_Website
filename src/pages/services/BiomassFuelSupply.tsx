// @ts-nocheck
import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Factory, TreePine, Leaf, Droplets, ShieldCheck, MapPin, CheckCircle2, TrendingUp, Users, Zap, Truck, Shield, Flame, Activity } from 'lucide-react';
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

export default function BiomassFuelSupply() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const applications = [
    { icon: <Droplets className="w-6 h-6" />, title: 'Industrial Boilers', desc: 'Continuous baseload fuel designed for heavy industrial boilers, replacing coal entirely.' },
    { icon: <Factory className="w-6 h-6" />, title: 'Manufacturing Industries', desc: 'Reliable thermal energy solutions tailored for continuous manufacturing processing.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Rural Energy Networks', desc: 'Decentralized energy distribution empowering agricultural and rural communities.' },
    { icon: <TreePine className="w-6 h-6" />, title: 'Agricultural Ecosystems', desc: 'Closing the loop by turning crop residue into high-value sustainable fuel.' }
  ];

  const additionalInfo = [
    { title: 'Fuel Types & Specifications', desc: 'We supply premium biomass briquettes and pellets, strictly quality-controlled for moisture (<10%) and net calorific value (4000+ kcal/kg) to ensure optimal industrial combustion.' },
    { title: 'Supply Network', desc: 'Our extensive logistics framework ensures uninterrupted fuel delivery. We operate a closed-loop supply chain, directly procuring from rural clusters and delivering to manufacturing hubs.' },
    { title: 'Quality Standards', desc: 'Every batch undergoes rigorous testing to guarantee low ash generation and high bulk density, offering a truly viable drop-in replacement for traditional fossil fuels.' }
  ];

  const dashboardStats = [
    { label: 'Reliable Network', value: 85, suffix: '+', icon: <MapPin className="w-5 h-5" />, desc: 'Strategic sourcing partners across rural belts.' },
    { label: 'Operational Support', value: 24, suffix: '/7', icon: <Users className="w-5 h-5" />, desc: 'Continuous logistics and supply chain assistance.' },
    { label: 'Industry Reliability', value: 95, suffix: '%', icon: <TrendingUp className="w-5 h-5" />, desc: 'Consistent combustion efficiency in boilers.' }
  ];

  const clients = [
    { title: 'Manufacturing Industries', image: '/Manufacturing Industries.jpg' },
    { title: 'Rural Communities', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80' },
    { title: 'Agricultural Ecosystems', image: '/Agriculture ecosystem.avif' },
    { title: 'Industrial Boilers', image: '/Industrial_Boilers.jpg' }
  ];

  // New Sections Data
  const highlights = [
    { icon: <Zap className="w-4 h-4" />, title: 'Sustainable Solutions' },
    { icon: <Leaf className="w-4 h-4" />, title: 'Cleaner Energy Ecosystem' },
    { icon: <Truck className="w-4 h-4" />, title: 'Reliable Supply Network' },
    { icon: <Factory className="w-4 h-4" />, title: 'Industry Ready' },
    { icon: <Shield className="w-4 h-4" />, title: 'Eco-Friendly Approach' }
  ];

  const workflowSteps = [
    { icon: <Activity />, title: 'Assessment', desc: 'Understanding fuel requirements and identifying suitable biomass sourcing opportunities.' },
    { icon: <TreePine />, title: 'Procurement', desc: 'Building reliable sourcing and vendor partnerships.' },
    { icon: <ShieldCheck />, title: 'Quality Verification', desc: 'Ensuring fuel consistency and industrial suitability.' },
    { icon: <Truck />, title: 'Distribution', desc: 'Coordinated logistics and supply support.' },
    { icon: <Users />, title: 'Support', desc: 'Ongoing assistance and supply coordination.' }
  ];

  const deliverables = [
    { text: 'Biomass Briquettes' },
    { text: 'Fuel Procurement Support' },
    { text: 'Vendor Network Support' },
    { text: 'Industrial Fuel Supply' }
  ];

  const challenges = [
    { challenge: 'High Fuel Costs', solution: 'Reliable alternative sourcing network' },
    { challenge: 'Waste Disposal Burden', solution: 'Sustainable conversion ecosystem' },
    { challenge: 'Operational Inefficiencies', solution: 'Continuous, high-grade fuel supply' }
  ];

  const faqs = [
    { question: 'Which biomass fuel types are supplied?', answer: 'We primarily supply high-density biomass briquettes and pellets manufactured from agricultural residue, designed specifically for industrial boilers.' },
    { question: 'Do you support rural procurement?', answer: 'Yes, our entire supply chain is built on a direct rural procurement model, empowering local farming communities while securing our feedstock.' },
    { question: 'Is biomass a viable coal replacement?', answer: 'Absolutely. Our processed biomass offers a comparable net calorific value to standard industrial coal but with a fraction of the greenhouse gas emissions.' }
  ];

  const standards = [
    { title: 'ISO Standards', icon: <ShieldCheck /> },
    { title: 'CPCB Alignment', icon: <Leaf /> },
    { title: 'Environmental Compliance', icon: <CheckCircle2 /> },
    { title: 'Safety Practices', icon: <Flame /> }
  ];

  const snapshotStats = [
    { label: 'Availability', textValue: 'Pan India' },
    { label: 'Support', textValue: '24/7' },
    { label: 'Industry Reach', textValue: 'Multiple Sectors' },
    { label: 'Network', textValue: 'Regional Ecosystem' }
  ];

  const impacts = [
    { before: 'High emissions fossil fuels', after: 'Cleaner biomass alternative' },
    { before: 'Volatile energy pricing', after: 'Stable local sourcing' },
    { before: 'Agricultural waste burning', after: 'Circular economy solutions' },
    { before: 'Unreliable fuel vendors', after: 'Unified supply ecosystem' }
  ];

  const ecosystemNodes = [
    { title: 'Agriculture', icon: <TreePine className="w-8 h-8" /> },
    { title: 'Procurement', icon: <Truck className="w-8 h-8" /> },
    { title: 'Supply Network', icon: <MapPin className="w-8 h-8" /> },
    { title: 'Industries', icon: <Factory className="w-8 h-8" /> },
    { title: 'Sustainability', icon: <Leaf className="w-8 h-8" /> }
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
            alt="Biomass Fuel Supply"
            className="w-full h-full object-cover opacity-40"
            src="/solutions-biomass-hero.webp"
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
              Biomass Fuel <span className="text-[#00A8C6]">Supply</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Delivering sustainable biomass fuel solutions for industries and rural ecosystems.
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
                Sustainable fuel bridging <br className="hidden md:block"/> agriculture and industry.
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              We manage a robust biomass fuel supply network, connecting the agricultural sector's surplus residue directly to heavy industrial consumers. By orchestrating a highly efficient procurement and distribution ecosystem, we provide continuous, high-grade briquettes and pellets to manufacturing plants.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              This operational model not only eliminates the environmental hazard of open-field stubble burning but also guarantees a stable, lower-emission thermal energy source for industries transitioning away from fossil fuels.
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
              <img src="/Briquettes & Pellets_Website.png" alt="Sustainable fuel bridging agriculture and industry" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(4,21,35,0.08)] border border-teal-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-[#03818F]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Supply Reliability</p>
                  <p className="text-2xl font-display font-bold text-[#041523] mt-1">Consistent</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WorkflowSteps steps={workflowSteps} />

      {/* 3. IMAGE EXPERIENCE SECTION */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 group relative h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-white border border-gray-100"
            >
              <img src="/Biomass_fuel_supply.png" alt="Biomass Fuel Supply Network" className="w-full h-full object-contain bg-white p-4 transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-[#041523]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10">
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Ecosystem</p>
                <h3 className="text-white text-3xl md:text-4xl font-display font-bold">Biomass Fuel Supply Network</h3>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6 md:col-span-1 h-auto md:h-[500px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative flex-1 rounded-[2rem] overflow-hidden cursor-pointer bg-white border border-gray-100"
              >
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" alt="Rural Biomass Ecosystem" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-display font-bold leading-tight">Rural Biomass Ecosystem</h3>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative flex-1 rounded-[2rem] overflow-hidden cursor-pointer bg-white border border-gray-100"
              >
                <img src="/Biogas_infrastructure_Solution.png" alt="Industrial Biomass Solutions" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-display font-bold leading-tight">Industrial Biomass Solutions</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. APPLICATIONS */}
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
                Fuel Specs & <br /> <span className="text-[#00A8C6]">Supply Ecosystem</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Consistency is critical for industrial thermal operations. Our biomass supply guarantees thermodynamic stability and strict adherence to environmental regulations.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[350px] rounded-[2rem] overflow-hidden cursor-pointer"
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
