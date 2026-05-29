// @ts-nocheck
import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Factory, Cog, Flame, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Users, Leaf, Truck, Activity, Shield } from 'lucide-react';
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

export default function RdfProcessingSupply() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const applications = [
    { icon: <Factory className="w-6 h-6" />, title: 'Cement Plants', desc: 'Direct drop-in replacement for coal in high-temperature cement kilns.' },
    { icon: <Cog className="w-6 h-6" />, title: 'Manufacturing Units', desc: 'Sustained thermal energy for intensive heavy manufacturing processes.' },
    { icon: <Flame className="w-6 h-6" />, title: 'Industrial Boilers', desc: 'Stable combustion fuel designed for large-scale boiler operations.' },
    { icon: <ArrowRight className="w-6 h-6" />, title: 'Heavy Industries', desc: 'High-calorie thermal support for metal, paper, and textile manufacturing.' }
  ];

  const additionalInfo = [
    { title: 'Fuel Characteristics', desc: 'Our refined RDF maintains a high Net Calorific Value (NCV) and controlled moisture content, engineered to provide consistent thermal output that closely matches traditional fossil fuels.' },
    { title: 'Waste Conversion Ecosystem', desc: 'We intercept and extract value from dry municipal and industrial waste streams using advanced separation technologies, ensuring maximum energy recovery and preventing landfill overflow.' },
    { title: 'Industrial Suitability', desc: 'Perfectly suited for heavy industries, RDF significantly lowers overall fuel procurement costs while enabling companies to hit ambitious ESG and zero-landfill targets.' }
  ];

  const dashboardStats = [
    { label: 'Strategic Partners', value: 50, suffix: '+', icon: <Users className="w-5 h-5" />, desc: 'Collaborating with municipalities and heavy industries.' },
    { label: 'Landfill Diversion', value: 90, suffix: '%', icon: <ArrowRight className="w-5 h-5" />, desc: 'High-volume dry waste successfully diverted from dumpsites.' },
    { label: 'Thermal Efficiency', value: 98, suffix: '%', icon: <TrendingUp className="w-5 h-5" />, desc: 'Optimized combustion substituting legacy fossil fuels.' }
  ];

  const clients = [
    { title: 'Cement Plants', image: '/Cement_Plants.png' },
    { title: 'Heavy Industries', image: '/Heavy_Industry.avif' },
    { title: 'Manufacturing Units', image: '/Manufacturing Industries.jpg' }
  ];

  // New Sections Data
  const highlights = [
    { icon: <ShieldCheck className="w-4 h-4" />, title: 'Sustainable Solutions' },
    { icon: <Leaf className="w-4 h-4" />, title: 'Cleaner Energy Ecosystem' },
    { icon: <Truck className="w-4 h-4" />, title: 'Reliable Supply Network' },
    { icon: <Factory className="w-4 h-4" />, title: 'Industry Ready' },
    { icon: <Flame className="w-4 h-4" />, title: 'Eco-Friendly Approach' }
  ];

  const workflowSteps = [
    { icon: <Truck />, title: 'Collection', desc: 'Identifying and sourcing suitable waste streams.' },
    { icon: <Activity />, title: 'Segregation', desc: 'Sorting waste into high-value processing categories.' },
    { icon: <Cog />, title: 'Processing', desc: 'Converting waste into usable fuel alternatives.' },
    { icon: <ArrowRight />, title: 'Supply', desc: 'Coordinated industrial fuel delivery.' },
    { icon: <Users />, title: 'Support', desc: 'Continuous operational guidance.' }
  ];

  const deliverables = [
    { text: 'Waste Fuel Conversion' },
    { text: 'RDF Supply Support' },
    { text: 'Industrial Fuel Alternatives' },
    { text: 'Landfill Diversion Certification' }
  ];

  const challenges = [
    { challenge: 'High Fossil Fuel Costs', solution: 'Economical RDF alternative sourcing' },
    { challenge: 'Waste Disposal Burden', solution: 'Sustainable conversion ecosystem' },
    { challenge: 'Missing ESG Targets', solution: 'Certified carbon-offset through waste fuel' }
  ];

  const faqs = [
    { question: 'Which industries use RDF?', answer: 'RDF is predominantly used by high-temperature heavy industries such as cement plants, steel manufacturers, and large-scale industrial boiler operators as a direct coal substitute.' },
    { question: 'What is the calorific value of your RDF?', answer: 'Our Refuse-Derived Fuel is engineered to maintain a highly stable Net Calorific Value (NCV) customized to the specific thermal requirements of your combustion systems.' },
    { question: 'How do you ensure consistent supply?', answer: 'We operate massive material recovery facilities continuously processing municipal solid waste, guaranteeing a steady, uninterrupted output of premium RDF year-round.' }
  ];

  const standards = [
    { title: 'ISO Standards', icon: <ShieldCheck /> },
    { title: 'CPCB Alignment', icon: <Leaf /> },
    { title: 'Environmental Compliance', icon: <CheckCircle2 /> },
    { title: 'Safety Practices', icon: <Shield /> }
  ];

  const snapshotStats = [
    { label: 'Availability', textValue: 'Pan India' },
    { label: 'Support', textValue: '24/7' },
    { label: 'Industry Reach', textValue: 'Multiple Sectors' },
    { label: 'Network', textValue: 'Regional Ecosystem' }
  ];

  const impacts = [
    { before: 'High cost industrial coal', after: 'Economical RDF fuel' },
    { before: 'Mounting landfill waste', after: 'Diverted resource recovery' },
    { before: 'High carbon footprint', after: 'Sustainable ESG compliance' },
    { before: 'Volatile fuel markets', after: 'Stable alternative sourcing' }
  ];

  const ecosystemNodes = [
    { title: 'Municipal Waste', icon: <Trash2Icon className="w-8 h-8" /> },
    { title: 'Material Recovery', icon: <Cog className="w-8 h-8" /> },
    { title: 'RDF Processing', icon: <Flame className="w-8 h-8" /> },
    { title: 'Heavy Industries', icon: <Factory className="w-8 h-8" /> },
    { title: 'Zero Landfill', icon: <Leaf className="w-8 h-8" /> }
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
            alt="RDF Processing Supply"
            className="w-full h-full object-cover opacity-40"
            src="/RDF_Supply.avif"
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
              RDF Processing & <span className="text-[#00A8C6]">Supply</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Converting waste into high-value industrial fuel alternatives.
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
                Engineering fuel from <br className="hidden md:block"/> non-recyclable waste.
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Refuse-Derived Fuel (RDF) forms the backbone of sustainable heavy manufacturing. We operate a highly efficient supply and processing ecosystem that converts dry municipal solid waste and non-recyclable industrial byproducts into a powerful combustible fuel. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              By redirecting vast volumes of waste from landfills, we supply high-temperature industries—like cement manufacturing and steel processing—with an economical, high-calorie fuel source that dramatically lowers their reliance on raw coal.
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
              <img src="/RDF_Processing&Supply.jpg" alt="RDF Processing" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(4,21,35,0.08)] border border-teal-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-[#03818F]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">ESG Compliance</p>
                  <p className="text-2xl font-display font-bold text-[#041523] mt-1">Certified</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WorkflowSteps steps={workflowSteps} />

      {/* 3. IMAGE EXPERIENCE SECTION */}
      <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6 md:col-span-1 h-auto md:h-[500px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative flex-1 rounded-[2rem] overflow-hidden cursor-pointer bg-white border border-gray-100"
              >
                <img src="/Industrial_RDF.jpg" alt="Industrial RDF Applications" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-display font-bold leading-tight">Industrial RDF Applications</h3>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative flex-1 rounded-[2rem] overflow-hidden cursor-pointer bg-white border border-gray-100"
              >
                <img src="/Fuel_Distribute.avif" alt="Sustainable Fuel Distribution" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-display font-bold leading-tight">Sustainable Fuel Distribution</h3>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 group relative h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-white border border-gray-100"
            >
              <img src="/Waste to fuel.webp" alt="Waste-to-Fuel Operations" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-[#041523]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10">
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Ecosystem</p>
                <h3 className="text-white text-3xl md:text-4xl font-display font-bold">Waste-to-Fuel Operations</h3>
              </div>
            </motion.div>
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

      <ComplianceStandards standards={standards} />

      <KeyDeliverables deliverables={deliverables} />

      <ChallengeSolution items={challenges} />

      {/* 5. ADDITIONAL INFORMATION SECTION */}
      <section className="py-24 bg-[#041523] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
                Fuel Specs & <br /> <span className="text-[#00A8C6]">Ecosystem Data</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                We engineer our Refuse-Derived Fuel to meet the exact thermodynamic demands of industrial kilns, ensuring reliability and high thermal efficiency.
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
    </div>
  );
}
// Add the missing Trash2Icon import fallback
function Trash2Icon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>;
}
