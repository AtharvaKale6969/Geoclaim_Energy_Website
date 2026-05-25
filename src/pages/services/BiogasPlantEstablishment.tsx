import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Settings, Trash2, Sprout, Building2, Droplets, LeafyGreen, ShieldCheck, CheckCircle2, TrendingUp, Users, Leaf, Shield, Activity, Flame, Zap } from 'lucide-react';
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

export default function BiogasPlantEstablishment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const applications = [
    { icon: <Trash2 className="w-6 h-6" />, title: 'Municipal Waste', desc: 'Transforming urban organic decay into renewable baseline energy.' },
    { icon: <Sprout className="w-6 h-6" />, title: 'Agriculture', desc: 'Harnessing crop residue and dairy manure for circular power.' },
    { icon: <Building2 className="w-6 h-6" />, title: 'Community Infrastructure', desc: 'Decentralized biogas networks powering local rural communities.' },
    { icon: <LeafyGreen className="w-6 h-6" />, title: 'Organic Waste Ecosystems', desc: 'Targeted digestion of food and wet processing byproducts.' }
  ];

  const additionalInfo = [
    { title: 'Feedstock Compatibility', desc: 'Engineered for versatility, our anaerobic digestion systems can process a wide spectrum of biodegradable matter including municipal solid waste, cow dung, agricultural sludge, and food processing decay.' },
    { title: 'Energy Output Applications', desc: 'The generated biogas can be combusted directly for industrial thermal heating, utilized in CHP engines for electricity, or upgraded to Bio-CNG for vehicular application.' },
    { title: 'Infrastructure Requirements', desc: 'Our turnkey establishments require detailed initial feedstock assessment to determine exact digester volume, ensuring structural longevity and optimized gas yields over decades of operation.' }
  ];

  const dashboardStats = [
    { label: 'Project Scale', value: 30, suffix: '+', icon: <Building2 className="w-5 h-5" />, desc: 'Large scale municipal & agricultural setups.' },
    { label: 'Engineering Support', value: 24, suffix: '/7', icon: <Settings className="w-5 h-5" />, desc: 'Continuous lifecycle and maintenance tracking.' },
    { label: 'Methane Capture', value: 99, suffix: '%', icon: <TrendingUp className="w-5 h-5" />, desc: 'Near-total elimination of organic off-gassing.' }
  ];

  const clients = [
    { title: 'Municipal Corporations', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80' },
    { title: 'Agriculture Sector', image: '/Agriculture ecosystem.avif' },
    { title: 'Community Infrastructure', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80' }
  ];

  // New Sections Data
  const highlights = [
    { icon: <Leaf className="w-4 h-4" />, title: 'Renewable Power' },
    { icon: <ShieldCheck className="w-4 h-4" />, title: 'Turnkey Establishments' },
    { icon: <Droplets className="w-4 h-4" />, title: 'Zero Waste Output' },
    { icon: <Flame className="w-4 h-4" />, title: 'Bio-CNG Ready' },
    { icon: <Users className="w-4 h-4" />, title: 'Community Focused' }
  ];

  const workflowSteps = [
    { icon: <Activity />, title: 'Assessment', desc: 'Evaluating site requirements and project feasibility.' },
    { icon: <Settings />, title: 'Design', desc: 'Planning efficient plant infrastructure.' },
    { icon: <Building2 />, title: 'Development', desc: 'Constructing and deploying systems.' },
    { icon: <Flame />, title: 'Operations', desc: 'Supporting implementation and optimization.' },
    { icon: <Users />, title: 'Support', desc: 'Long-term operational guidance.' }
  ];

  const deliverables = [
    { text: 'Plant Planning' },
    { text: 'Renewable Energy Systems' },
    { text: 'Infrastructure Support' },
    { text: 'Bio-Fertilizer Production' }
  ];

  const challenges = [
    { challenge: 'Organic Waste Overflow', solution: 'Anaerobic digestion infrastructure' },
    { challenge: 'High Local Energy Costs', solution: 'Decentralized biogas grids' },
    { challenge: 'Methane Emissions', solution: '100% closed-loop gas capture' }
  ];

  const faqs = [
    { question: 'What feedstock can be used?', answer: 'Our digesters are highly versatile, accepting cow dung, poultry litter, agricultural crop residue, municipal solid waste, and industrial food processing byproducts.' },
    { question: 'How long does establishment take?', answer: 'Depending on the digester volume and scope, a standard industrial setup typically takes between 4 to 8 months from initial civil works to gas generation.' },
    { question: 'Do you provide operational training?', answer: 'Yes, we provide end-to-end commissioning including extensive operational training for your on-site engineering team to ensure long-term self-sufficiency.' }
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
    { before: 'Open organic rotting', after: 'Contained gas capture' },
    { before: 'Reliance on grid power', after: 'Self-sustaining energy' },
    { before: 'Chemical fertilizers', after: 'Rich bio-slurry output' },
    { before: 'Toxic methane release', after: 'Clean combustion' }
  ];

  const ecosystemNodes = [
    { title: 'Organic Waste', icon: <Trash2 className="w-8 h-8" /> },
    { title: 'Digestion Phase', icon: <Droplets className="w-8 h-8" /> },
    { title: 'Biogas Capture', icon: <Flame className="w-8 h-8" /> },
    { title: 'Energy Output', icon: <Zap className="w-8 h-8" /> },
    { title: 'Bio-Fertilizer', icon: <LeafyGreen className="w-8 h-8" /> }
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
            alt="Biogas Plant Establishment"
            className="w-full h-full object-cover opacity-40"
            src="/biogas_hero.png"
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
              Biogas Plant <span className="text-[#00A8C6]">Establishment</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Turnkey bio-energy infrastructure for sustainable growth.
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
                Harnessing nature’s <br className="hidden md:block"/> anaerobic power.
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              We provide comprehensive consulting, design, and turnkey establishment for industrial and municipal biogas facilities. Our infrastructure projects utilize advanced anaerobic digestion technology to capture the immense latent energy within decaying organic matter.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              This completely closed-loop system mitigates severe methane pollution while equipping facilities, agricultural hubs, and municipalities with a continuous, reliable supply of clean biogas and high-value nutrient-rich fertilizer.
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
              <img src="/Biogas_Plant.png" alt="Biogas Establishment" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(4,21,35,0.08)] border border-teal-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-[#03818F]">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Zero Waste</p>
                  <p className="text-2xl font-display font-bold text-[#041523] mt-1">100% Circular</p>
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
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 group relative h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer bg-white border border-gray-100"
            >
              <img src="/Biogas_infrastructure_Solution.png" alt="Biogas Infrastructure Solutions" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-[#041523]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10">
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Facilities</p>
                <h3 className="text-white text-3xl md:text-4xl font-display font-bold">Biogas Infrastructure Solutions</h3>
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
                <img src="/Organice_waste.webp" alt="Organic Waste Conversion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-display font-bold leading-tight">Organic Waste Conversion</h3>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative flex-1 rounded-[2rem] overflow-hidden cursor-pointer bg-white border border-gray-100"
              >
                <img src="/Renewable_energy_system.webp" alt="Renewable Energy Systems" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-display font-bold leading-tight">Renewable Energy Systems</h3>
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
                Technical <br /> Specifications & <br /> <span className="text-[#00A8C6]">Ecosystem Data</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Biogas plant viability relies heavily on exact feedstock biochemistry and structural engineering. We guide operations through every technical nuance.
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
