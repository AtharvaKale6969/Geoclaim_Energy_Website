import { useState, useEffect, useRef } from 'react';
import { MapPin, CheckCircle2, ArrowDown, Leaf, TrendingUp, Cpu, X, ShieldCheck, FlaskConical, Settings, Activity } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

interface ImpactProps {
  sectionId?: string;
  onPageChange: (page: string) => void;
}

function GreenParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(15)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const size = Math.random() * 3 + 2;
        const duration = Math.random() * 12 + 10;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00A8C6]/20 blur-[1px]"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: size,
              height: size,
            }}
            animate={{
              y: [0, -120],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}

function CountUp({ from, to, duration = 2, delay = 0, suffix = "", prefix = "" }: { from: number, to: number, duration?: number, delay?: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const currentVal = Math.floor(progress * (to - from) + from);
      setCount(currentVal);
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    const timeout = setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, from, to, duration, delay]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

function CO2Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute px-2 py-0.5 rounded-full bg-[#00A8C6]/10 text-[8px] text-[#00A8C6] font-bold flex items-center justify-center border border-[#00A8C6]/20"
          style={{
            bottom: '10%',
            left: `${15 + i * 15}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.7, 0],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.8,
          }}
        >
          CO₂
        </motion.div>
      ))}
    </div>
  );
}

function RadialProgress({ percentage }: { percentage: number }) {
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="relative w-40 h-40 flex items-center justify-center bg-teal-50/20 rounded-full border border-teal-100/40 shadow-[inset_0_0_12px_rgba(3,129,143,0.03)]">
      {/* Orbiting particles */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00A8C6] shadow-[0_0_8px_#00A8C6] animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#03818F] shadow-[0_0_6px_#03818F]" />
      </motion.div>
      
      <svg className="w-36 h-36 transform -rotate-90 relative z-10">
        {/* Base circle */}
        <circle
          cx="72"
          cy="72"
          r={radius}
          className="stroke-teal-100/30"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress circle */}
        <motion.circle
          cx="72"
          cy="72"
          r={radius}
          className="stroke-[#00A8C6]"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{ strokeLinecap: 'round' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-display font-bold text-[#041523]">
          <CountUp from={0} to={92} duration={1.5} suffix=".4%" />
        </span>
        <span className="text-[9px] uppercase tracking-wider text-[#034152]/70 font-bold mt-0.5">Diverted</span>
      </div>
    </div>
  );
}

function AreaChart() {
  const points = [
    { x: 10, y: 80 },
    { x: 55, y: 70 },
    { x: 100, y: 45 },
    { x: 145, y: 55 },
    { x: 190, y: 25 },
    { x: 235, y: 35 },
    { x: 280, y: 15 }
  ];
  // Map points to SVG coordinates
  const pathD = `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`;
  const areaD = `${pathD} L 280 95 L 10 95 Z`;

  return (
    <div className="w-full bg-white border border-teal-100/50 rounded-2xl p-6 relative overflow-hidden shadow-[0_4px_20px_rgba(3,129,143,0.02)]">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-[#034152]/70 font-semibold uppercase tracking-wider">Historical Offset Yield</span>
        <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">+14.2% YoY</span>
      </div>
      <div className="relative h-40">
        <svg viewBox="0 0 290 100" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00A8C6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00A8C6" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <motion.path
            d={areaD}
            fill="url(#chartGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          {/* Line stroke */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="#00A8C6"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Animated data points */}
          {points.map((p, idx) => (
            <motion.circle
              key={idx}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="white"
              stroke="#00A8C6"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 * idx }}
            />
          ))}
        </svg>
        {/* Float particles representing CO2 */}
        <CO2Particles />
      </div>
    </div>
  );
}

function EnergyBars() {
  return (
    <div className="w-full bg-white border border-teal-100/50 rounded-2xl p-6 space-y-6 relative overflow-hidden shadow-[0_4px_20px_rgba(3,129,143,0.02)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,rgba(3,129,143,0.03)_0%,transparent_50%)]" />
      
      {[
        { label: 'Thermal Output', value: 820, max: 1000, suffix: ' MW', color: 'from-[#03818F] to-[#00A8C6]' },
        { label: 'Grid-Ready Power', value: 380, max: 1000, suffix: ' MW', color: 'from-[#00A8C6] to-emerald-400' },
        { label: 'Factory Powering', value: 24, max: 50, suffix: ' Units', color: 'from-emerald-500 to-[#03818F]' }
      ].map((item, idx) => {
        const ratio = (item.value / item.max) * 100;
        return (
          <div key={idx} className="space-y-2 relative z-10">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#034152]/70 font-semibold">{item.label}</span>
              <span className="text-[#041523] font-bold">
                <CountUp from={0} to={item.value} duration={1.5} suffix={item.suffix} />
              </span>
            </div>
            <div className="w-full h-3 bg-teal-50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${ratio}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.2 }}
                className={`h-full bg-gradient-to-r ${item.color} relative`}
              >
                {/* Energy pulse line */}
                <motion.div
                  className="absolute inset-y-0 w-8 bg-white/30 skew-x-12"
                  animate={{ left: ['-20%', '120%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: idx * 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}



export default function Impact({ sectionId }: ImpactProps) {
  const [activeTab, setActiveTab] = useState<'waste' | 'carbon' | 'energy'>('waste');
  const [activeReportProject, setActiveReportProject] = useState<any | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

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

  const dashboardTabs = [
    {
      id: 'waste' as const,
      label: 'Waste Diversion',
      metric: '1000+',
      desc: 'Proportion of incoming feedstock diverted from landfills directly into fuel production streams.',
      subMetrics: [
        { label: 'Total Diverted', value: '1,000+ Tons' },
        { label: 'Recycled Byproducts', value: '150 Tons' },
        { label: 'Landfill Avoidance', value: '98%' },
      ],
    },
    {
      id: 'carbon' as const,
      label: 'Carbon Offsets',
      metric: '32%',
      desc: 'Tons of CO2 equivalent offset through replacement of fossil fuels and reduction of landfill methane emissions.',
      subMetrics: [
        { label: 'Overall Reduction', value: '32%' },
        { label: 'Fossil Displacement', value: '18%' },
        { label: 'Landfill Gas Capture', value: '14%' },
      ],
    },
    {
      id: 'energy' as const,
      label: 'Renewable Yield',
      metric: '1.2GW',
      desc: 'Total electrical and thermal energy generated through bio-conversion and processing plants.',
      subMetrics: [
        { label: 'Thermal Output', value: '820 MW' },
        { label: 'Grid-Ready Power', value: '380 MW' },
        { label: 'Clients Served', value: '20+' },
      ],
    },

  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Immersive Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[65vh] sm:h-[75vh] min-h-[520px] flex items-center bg-[#041523] overflow-hidden pt-28 pb-20"
      >
        {/* Parallax & Zooming Background Image */}
        <motion.div 
          className="absolute inset-0 z-0 origin-center pointer-events-none"
          style={{ y: yBg }}
        >
          <motion.img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2000&q=80"
            alt="Sustainability & Clean Energy Impact"
            className="w-full h-full object-cover select-none pointer-events-none origin-center opacity-40 scale-105"
            animate={{
              scale: [1.05, 1.10, 1.05],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Ambient Overlays (Deep Navy, Dark Teal, and Vignette) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041523] via-[#034152]/85 to-[#041523]/80 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#041523]/10 to-[#041523]/95 z-10 pointer-events-none" />

        {/* Ambient glowing orb in top right */}
        <motion.div 
          className="absolute top-10 right-10 w-96 h-96 bg-[#00A8C6]/15 rounded-full blur-[120px] z-10 pointer-events-none hidden md:block"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Moving Light Sweep */}
        <motion.div
          className="absolute inset-y-0 -left-[100%] w-1/2 bg-gradient-to-r from-transparent via-[#00A8C6]/5 to-transparent skew-x-12 z-10 pointer-events-none"
          animate={{
            left: ['-100%', '200%']
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Sustainability Particles */}
        <GreenParticles />

        {/* Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            {/* Staggered Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#00A8C6]/15 border border-[#00A8C6]/30 px-4 py-1.5 rounded-full text-accent font-semibold text-xs uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Operations & Metrics</span>
            </motion.div>

            {/* Staggered Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-bold text-3xl md:text-5xl lg:text-7xl text-white leading-tight"
            >
              Realizing True <br className="hidden sm:inline" />
              <span className="text-[#00A8C6]">Sustainability Impact</span>
            </motion.h1>

            {/* Staggered Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light"
            >
              Delivering measurable environmental outcomes through systematic operational excellence, advanced biomass, biogas & RDF processing, and transparent ESG validation.
            </motion.p>

            {/* Staggered CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => {
                  const dashboard = document.getElementById('dashboard-section');
                  if (dashboard) {
                    dashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-[#03818F] hover:bg-[#00A8C6] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#03818F]/20 flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
              >
                Explore Metrics
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Dashboard */}
      <section 
        id="dashboard-section" 
        className="py-24 bg-gradient-to-b from-white via-teal-50/20 to-white border-y border-teal-100/30 relative overflow-hidden text-[#041523] scroll-mt-28"
      >
        {/* Background Grid Lines & Glowing Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(3,129,143,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(3,129,143,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#03818F]/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A8C6]/5 rounded-full blur-[100px] animate-pulse" />
          
          {/* Subtle eco-tech sustainability line graphics */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04] text-[#03818F]" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100,100 C200,150 400,50 600,180 C800,310 1000,100 1300,220 C1500,300 1700,150 2000,250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M-50,300 C250,220 500,380 750,260 C1000,140 1200,320 1500,240 C1750,160 1900,280 2100,200" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>

          {/* Soft floating green/cyan ecological particles at very low opacity */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#03818F]/20"
                style={{
                  left: `${15 + i * 15}%`,
                  bottom: `${10 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, -120],
                  x: [0, (i % 2 === 0 ? 15 : -15)],
                  opacity: [0, 0.4, 0],
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

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#03818F] text-xs font-bold uppercase tracking-widest bg-[#03818F]/8 px-4 py-1.5 rounded-full border border-[#03818F]/15"
            >
              Live Analytics Dashboard
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-[#041523]"
            >
              Sustainability Performance Dashboard
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#034152]/70 text-xs sm:text-sm max-w-2xl mx-auto"
            >
              Toggle between metrics below to review real-time impact performance.
            </motion.p>
          </div>

          {/* Top Horizontal Toggle Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 max-w-4xl mx-auto p-1.5 bg-teal-50/20 border border-teal-100/40 rounded-3xl backdrop-blur-md relative z-20 shadow-[0_8px_30px_rgba(3,129,143,0.02)]">
            {dashboardTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 select-none cursor-pointer flex-1 min-w-[140px] text-center"
                  style={{
                    color: isActive ? '#03818F' : '#6B7280',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white border border-[#00A8C6]/20 rounded-full shadow-[0_4px_12px_rgba(3,129,143,0.06)] z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dashboard Main Visualizer Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/70 border border-teal-100/50 rounded-[2rem] p-8 sm:p-12 backdrop-blur-md shadow-[0_20px_50px_rgba(3,129,143,0.04)] relative overflow-hidden border-t-[#00A8C6]/20"
          >
            {/* Soft decorative glow orb inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A8C6]/3 rounded-full blur-[80px]" />

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Left Pane: Detailed stats and information */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="flex items-center gap-3 text-accent text-xs font-bold uppercase tracking-wider mb-2">
                    {activeTab === 'waste' && <Leaf className="w-4 h-4 text-emerald-600" />}
                    {activeTab === 'carbon' && <TrendingUp className="w-4 h-4 text-[#03818F]" />}
                    {activeTab === 'energy' && <Cpu className="w-4 h-4 text-amber-600" />}

                    <span>{dashboardTabs.find(t => t.id === activeTab)?.label} Insights</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#041523] mb-4">
                    {activeTab === 'waste' && "Landfill Diversion & Recovery"}
                    {activeTab === 'carbon' && "Carbon Mitigation Offsets"}
                    {activeTab === 'energy' && "Operational Renewable Yield"}

                  </h3>
                  <p className="text-[#034152]/80 text-sm sm:text-base leading-relaxed font-light">
                    {dashboardTabs.find(t => t.id === activeTab)?.desc}
                  </p>
                </div>

                {/* Submetrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {activeTab === 'waste' && (
                    <>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Total Diverted</span>
                        <div className="text-lg font-bold text-[#041523]">
                          <CountUp from={0} to={1000} duration={1.5} suffix="+" />
                          <span className="text-xs font-medium text-[#034152]/60 block sm:inline sm:ml-1">Tons</span>
                        </div>
                      </div>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Recycled Byproducts</span>
                        <div className="text-lg font-bold text-[#041523]">
                          <CountUp from={0} to={150} duration={1.5} />
                          <span className="text-xs font-medium text-[#034152]/60 block sm:inline sm:ml-1">Tons</span>
                        </div>
                      </div>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Landfill Avoidance</span>
                        <div className="text-lg font-bold text-emerald-600">
                          <CountUp from={0} to={98} duration={1.5} suffix="%" />
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'carbon' && (
                    <>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Overall Reduction</span>
                        <div className="text-lg font-bold text-[#041523]">
                          <CountUp from={0} to={32} duration={1.5} suffix="%" />
                        </div>
                      </div>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Fossil Displacement</span>
                        <div className="text-lg font-bold text-[#041523]">
                          <CountUp from={0} to={18} duration={1.5} suffix="%" />
                        </div>
                      </div>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Landfill Gas Capture</span>
                        <div className="text-lg font-bold text-[#00A8C6]">
                          <CountUp from={0} to={14} duration={1.5} suffix="%" />
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'energy' && (
                    <>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Thermal Output</span>
                        <div className="text-lg font-bold text-[#041523]">
                          <CountUp from={0} to={820} duration={1.5} suffix=" MW" />
                        </div>
                      </div>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Grid-Ready Power</span>
                        <div className="text-lg font-bold text-[#041523]">
                          <CountUp from={0} to={380} duration={1.5} suffix=" MW" />
                        </div>
                      </div>
                      <div className="bg-teal-50/15 border border-teal-100/30 p-5 rounded-2xl shadow-[0_4px_12px_rgba(3,129,143,0.01)]">
                        <span className="text-[#034152]/60 text-xs font-semibold block mb-1">Clients Served</span>
                        <div className="text-lg font-bold text-amber-600">
                          <CountUp from={0} to={20} duration={1.5} suffix="+" />
                        </div>
                      </div>
                    </>
                  )}


                </div>


              </div>

              {/* Right Pane: Dynamic visualization graphic */}
              <div className="lg:col-span-5 flex justify-center items-center w-full">
                {activeTab === 'waste' && (
                  <div className="w-full flex flex-col items-center gap-6">
                    <RadialProgress percentage={92.4} />
                    {/* Mini bar chart stream breakdown */}
                    <div className="w-full bg-white border border-teal-100/50 rounded-2xl p-6 relative shadow-[0_4px_20px_rgba(3,129,143,0.02)]">
                      <span className="text-xs text-[#034152]/70 font-semibold uppercase tracking-wider block mb-4">Feedstock Stream Breakdown</span>
                      <div className="flex items-end justify-between h-24 gap-4">
                        {[
                          { label: 'Agriloops', val: 85, color: '#00A8C6' },
                          { label: 'MSW Sorts', val: 68, color: '#03818F' },
                          { label: 'Ind. Scrap', val: 92, color: '#10B981' }
                        ].map((bar, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center">
                            <div className="w-full bg-teal-50 rounded-t-md h-20 flex items-end">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${bar.val}%` }}
                                transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                                className="w-full rounded-t-md relative"
                                style={{ backgroundColor: bar.color }}
                              >
                                <div className="absolute top-[-18px] left-0 right-0 text-[9px] text-center font-bold text-white">{bar.val}%</div>
                              </motion.div>
                            </div>
                            <span className="text-[9px] text-[#034152]/70 mt-2 font-semibold uppercase tracking-widest">{bar.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'carbon' && (
                  <div className="w-full">
                    <AreaChart />
                  </div>
                )}

                {activeTab === 'energy' && (
                  <div className="w-full">
                    <EnergyBars />
                  </div>
                )}


              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Regulatory Compliance Timeline */}
      <section 
        id="compliance-timeline-section"
        className="py-24 bg-white relative overflow-hidden border-t border-teal-50"
      >
        {/* Light background enhancements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Grid backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(3,129,143,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(3,129,143,0.012)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Faint eco-tech waves */}
          <div className="absolute bottom-0 left-0 right-0 opacity-5 pointer-events-none">
            <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,112C1120,96,1280,96,1360,96L1440,96L1440,200L1360,200C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200L0,200Z" fill="url(#waveGradLight)" />
              <defs>
                <linearGradient id="waveGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#03818F" />
                  <stop offset="100%" stopColor="#00A8C6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating low-opacity particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#00A8C6]/15"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-10, 80],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-10 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#03818F] text-xs font-bold uppercase tracking-widest bg-[#03818F]/5 border border-[#03818F]/20 px-4 py-1.5 rounded-full"
            >
              CPCB Integration Pipeline
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl text-[#041523]"
            >
              Regulatory Compliance Framework
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#034152]/70 text-xs sm:text-sm max-w-2xl mx-auto"
            >
              Our step-by-step verification pipeline ensures absolute environmental safety and full transparent tracking.
            </motion.p>
          </div>

          {/* Subtle animated progress percentage */}
          <div className="max-w-md mx-auto mb-16 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#034152]/80 uppercase tracking-widest">
              <span>Pipeline Readiness Score:</span>
              <span className="text-[#03818F]">
                <CountUp from={0} to={100} suffix="%" duration={2.5} delay={0.5} />
              </span>
            </div>
            <div className="w-full h-2 bg-teal-50 border border-teal-100/50 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#03818F] to-[#00A8C6]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </div>

          <div className="relative">
            {/* Desktop connecting line path */}
            <div className="absolute inset-x-12 top-[60px] h-[2px] pointer-events-none hidden lg:block z-0">
              <svg className="w-full h-full overflow-visible">
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="rgba(3,129,143,0.1)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <motion.line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="#00A8C6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Mobile connecting line path */}
            <div className="absolute left-[38px] top-10 bottom-10 w-[2px] pointer-events-none lg:hidden z-0">
              <svg className="w-full h-full overflow-visible">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="rgba(3,129,143,0.1)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <motion.line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="#00A8C6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Source Verification',
                  desc: 'Thorough review of the waste source location, sorting facilities, and potential toxicity risk checks before delivery agreement.',
                  status: 'Verified',
                  icon: <ShieldCheck className="w-6 h-6 text-[#03818F]" />
                },
                {
                  step: '02',
                  title: 'Feedstock Analysis',
                  desc: 'Testing waste calorific values, moisture percentages, heavy metal residues, and ash output properties in certified labs.',
                  status: 'Tested',
                  icon: <FlaskConical className="w-6 h-6 text-[#03818F]" />
                },
                {
                  step: '03',
                  title: 'Secure Conversion',
                  desc: 'Processing materials within strict combustion and digestion thermal profiles, avoiding harmful greenhouse gas slip.',
                  status: 'Secure',
                  icon: <Settings className="w-6 h-6 text-[#03818F]" />
                },
                {
                  step: '04',
                  title: 'Emission Monitoring',
                  desc: 'Running online real-time stack monitoring linked to Central Pollution Control Board servers for 100% transparency.',
                  status: 'Monitored',
                  icon: <Activity className="w-6 h-6 text-[#03818F]" />
                }
              ].map((stage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  className="bg-white/70 backdrop-blur-md border border-teal-100/50 hover:border-[#00A8C6]/50 rounded-[20px] p-6 sm:p-8 shadow-[0_10px_30px_rgba(3,129,143,0.04)] hover:shadow-[0_15px_35px_rgba(0,168,198,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
                >
                  <div>
                    {/* Header: Step Number & Status Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <motion.span 
                        className="font-mono text-3xl font-bold bg-gradient-to-br from-[#03818F] to-[#00A8C6] bg-clip-text text-transparent opacity-80"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        {stage.step}
                      </motion.span>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center gap-1 shadow-sm">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                        <span>{stage.status}</span>
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#00A8C6]/10 group-hover:border-[#00A8C6]/30 transition-all duration-300 mb-4 shadow-[inset_0_2px_4px_rgba(3,129,143,0.02)]">
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        {stage.icon}
                      </motion.div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display font-bold text-lg text-[#041523] mb-2">{stage.title}</h3>
                    <p className="text-[#034152]/80 text-xs sm:text-[13px] leading-relaxed mb-6">{stage.desc}</p>
                  </div>

                  {/* Micro-interaction inside card */}
                  <div>
                    {stage.step === '01' && (
                      <div className="h-10 w-full flex items-center gap-2 bg-teal-50/20 border border-teal-100/30 rounded-xl px-3 mt-auto">
                        <div className="flex gap-1.5">
                          {[...Array(3)].map((_, i) => (
                            <motion.svg 
                              key={i}
                              className="w-3.5 h-3.5 text-emerald-500" 
                              viewBox="0 0 20 20" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.25 }}
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </motion.svg>
                          ))}
                        </div>
                        <span className="text-[9px] text-[#034152]/60 font-semibold uppercase tracking-wider">Audit Pass</span>
                      </div>
                    )}

                    {stage.step === '02' && (
                      <div className="h-10 w-full flex items-center justify-between bg-teal-50/20 border border-teal-100/30 rounded-xl px-3 mt-auto">
                        <div className="flex items-end gap-1 h-5">
                          {[40, 80, 60].map((val, i) => (
                            <div key={i} className="w-1.5 h-full bg-[#03818F]/5 rounded-t-[1px] flex items-end">
                              <motion.div 
                                className="w-full bg-[#03818F] rounded-t-[1px]"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${val}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.15 }}
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-[9px] text-[#034152]/60 font-semibold uppercase tracking-wider">Specs Verified</span>
                      </div>
                    )}

                    {stage.step === '03' && (
                      <div className="h-10 w-full flex items-center justify-between bg-teal-50/20 border border-teal-100/30 rounded-xl px-3 mt-auto">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          >
                            <Settings className="w-3.5 h-3.5 text-[#03818F]" />
                          </motion.div>
                          <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div 
                                key={i}
                                className="w-1 h-1 rounded-full bg-[#00A8C6]"
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-[9px] text-[#034152]/60 font-semibold uppercase tracking-wider">Zero Gas Slip</span>
                      </div>
                    )}

                    {stage.step === '04' && (
                      <div className="h-10 w-full flex items-center justify-between bg-teal-50/20 border border-teal-100/30 rounded-xl px-3 mt-auto">
                        <div className="w-14 h-5">
                          <svg viewBox="0 0 60 20" className="w-full h-full overflow-visible">
                            <motion.path 
                              d="M 2 10 Q 15 2 30 12 T 58 8"
                              fill="none"
                              stroke="#00A8C6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2 }}
                            />
                          </svg>
                        </div>
                        <span className="text-[9px] text-[#034152]/60 font-semibold uppercase tracking-wider">CPCB Linked</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Glassmorphism Report Modal */}
      <AnimatePresence>
        {activeReportProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReportProject(null)}
              className="absolute inset-0 bg-[#041523]/80 backdrop-blur-md animate-fade-in"
            />
            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#034152]/90 border border-[#03818F]/40 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,168,198,0.25)] relative max-w-lg w-full overflow-hidden text-white backdrop-blur-xl z-10"
            >
              {/* Top Close Button */}
              <button 
                onClick={() => setActiveReportProject(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Glowing Accent Ring */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00A8C6]/20 rounded-full blur-[50px] pointer-events-none" />

              <div className="space-y-6 relative z-10 text-left">
                <div className="flex items-center gap-2 text-[#00A8C6] font-semibold text-xs uppercase tracking-widest">
                  <MapPin className="w-4 h-4" />
                  <span>{activeReportProject.location}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {activeReportProject.title} Impact Report
                </h3>
                
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {activeReportProject.id === 'punjab' && "Annual stubble burning reduced significantly while supporting local rural economy and creating alternative fuel streams."}
                    {activeReportProject.id === 'karnataka' && "Organic waste converted into Bio-CNG and compost while reducing landfill dependency."}
                    {activeReportProject.id === 'rdf-unit' && "Recovered industrial-grade RDF reducing fossil fuel demand in manufacturing sectors."}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Achievements</h4>
                  <ul className="space-y-2.5">
                    {activeReportProject.highlights.map((hl: string, hlIdx: number) => (
                      <li key={hlIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-xs text-gray-400">Status: <strong className="text-emerald-400">Active</strong></span>
                  <button 
                    onClick={() => setActiveReportProject(null)}
                    className="bg-gradient-to-r from-[#03818F] to-[#00A8C6] text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer"
                  >
                    Close Report
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
