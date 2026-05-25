import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Plus, ArrowDown, MapPin } from 'lucide-react';

/* 1. Service Highlights Strip */
export function ServiceHighlights({ highlights }: { highlights: { icon: React.ReactNode, title: string }[] }) {
  return (
    <div className="w-full bg-[#041523] py-6 md:py-8 border-y border-white/10 z-30 relative mt-[-1px]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start md:justify-center gap-4 md:gap-8 min-w-max">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="text-[#00A8C6] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-white text-sm font-medium whitespace-nowrap tracking-wide">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 2. How It Works (Workflow Steps) */
export function WorkflowSteps({ steps }: { steps: { title: string, desc?: string, icon?: React.ReactNode }[] }) {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-16 text-center">
          <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Process Flow</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#041523]">How It Works</h2>
        </div>
        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative h-full"
              >
                {/* Connecting Arrow Mobile */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-6 text-gray-300">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                )}
                <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center text-[#03818F] mb-6 relative group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                  {step.icon}
                  {/* Active dot */}
                  <div className="absolute -bottom-2 w-4 h-4 bg-[#00A8C6] rounded-full border-4 border-gray-50 md:block hidden opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-bold text-[#041523] text-lg mb-2">{step.title}</h3>
                {step.desc && <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. Key Deliverables */
export function KeyDeliverables({ deliverables }: { deliverables: { text: string }[] }) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <div className="mb-12">
        <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Outcomes</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-[#041523]">Key Deliverables</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {deliverables.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition-all duration-300 flex items-start gap-4 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#03818F] shrink-0 group-hover:bg-[#03818F] group-hover:text-white transition-colors">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="font-semibold text-[#041523] text-sm md:text-base pt-1">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* 4. Industry Challenges -> Solutions */
export function ChallengeSolution({ items }: { items: { challenge: string, solution: string }[] }) {
  return (
    <section className="py-24 bg-[#041523] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-[#00A8C6] font-bold tracking-widest uppercase text-xs mb-3 block">Problem Solving</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl">Challenges vs. Solutions</h2>
        </div>
        <div className="grid gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="flex-1 p-8 md:p-10 bg-black/20 border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
                <span className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4 block">Industry Challenge</span>
                <p className="text-xl md:text-2xl font-light leading-snug">{item.challenge}</p>
              </div>
              <div className="flex-1 p-8 md:p-10 relative">
                <div className="absolute top-1/2 -left-5 md:-left-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#00A8C6] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,168,198,0.4)] z-10 hidden md:flex">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#00A8C6] text-xs font-bold uppercase tracking-widest mb-4 block">Geoclaim Solution</span>
                <p className="text-xl md:text-2xl font-semibold leading-snug text-white">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. FAQ Section */
export function ServiceFAQ({ faqs }: { faqs: { question: string, answer: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Clarifications</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#041523]">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#00A8C6] shadow-md bg-teal-50/20' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-display font-bold text-lg ${isOpen ? 'text-[#03818F]' : 'text-[#041523]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#00A8C6] text-white rotate-45' : 'bg-gray-100 text-gray-500'}`}>
                    <Plus className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed font-light border-t border-teal-100/50 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 6. Compliance & Standards */
export function ComplianceStandards({ standards }: { standards: { title: string, icon: React.ReactNode }[] }) {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Validation</span>
            <h2 className="font-display font-bold text-3xl text-[#041523]">Compliance & Standards</h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm">We strictly adhere to national and global environmental safety frameworks.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {standards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-[#00A8C6] hover:shadow-[0_10px_30px_rgba(0,168,198,0.1)] transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#00A8C6] group-hover:bg-teal-50 group-hover:scale-110 transition-all mb-4">
                {item.icon}
              </div>
              <span className="font-semibold text-[#041523] text-sm">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7. Regional Coverage */
export function RegionalCoverage() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Footprint</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#041523] leading-tight mb-6">
              Strategic Regional <br /> Coverage
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
              Headquartered in Nagpur, we maintain a vast operational radius that enables us to efficiently source, process, and distribute sustainable energy solutions across critical industrial zones.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                <MapPin className="text-[#00A8C6]" />
                <div>
                  <p className="font-bold text-[#041523]">Nagpur HQ</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Central Command</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <MapPin className="text-gray-400" />
                <div>
                  <p className="font-bold text-[#041523]">Pan-India Logistics</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Supply Network</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] bg-[#041523] rounded-[3rem] overflow-hidden shadow-2xl p-8 flex items-center justify-center"
          >
            {/* Abstract animated map nodes */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00A8C6] to-transparent" />
            <div className="relative w-full h-full">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-[#00A8C6] rounded-full shadow-[0_0_15px_#00A8C6]"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-[#00A8C6] rounded-full animate-ping opacity-30" />
                </motion.div>
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="w-6 h-6 bg-white rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-[#00A8C6] rounded-full" />
                </div>
                <span className="text-white font-bold tracking-widest text-sm uppercase">Nagpur</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* 8. Quick Service Snapshot (Counter Component hook) */
function SnapshotCounter({ value, suffix = '', textValue = '' }: { value?: number, suffix?: string, textValue?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (value !== undefined && isInView && ref.current) {
      animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (cv) => {
          if (ref.current) ref.current.textContent = Math.round(cv) + suffix;
        }
      });
    }
  }, [isInView, value, suffix]);

  if (textValue) return <span>{textValue}</span>;
  return <span ref={ref}>0{suffix}</span>;
}

export function QuickSnapshot({ stats }: { stats: { label: string, value?: number, textValue?: string, suffix?: string }[] }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col justify-center text-center hover:bg-teal-50/30 hover:border-teal-100 transition-colors"
            >
              <h4 className="text-2xl md:text-3xl font-display font-bold text-[#041523] mb-1">
                <SnapshotCounter value={stat.value} textValue={stat.textValue} suffix={stat.suffix} />
              </h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 9. Before vs After Impact */
export function BeforeAfterImpact({ impacts }: { impacts: { before: string, after: string }[] }) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-[#03818F] font-bold tracking-widest uppercase text-xs mb-3 block">Impact</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#041523]">Transformation Driven</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-red-50/50 p-6 border-b border-gray-100">
                <span className="text-red-400 font-bold uppercase text-[10px] tracking-widest mb-2 block">Traditional Approach</span>
                <p className="font-semibold text-gray-600 line-through decoration-red-300 decoration-2">{item.before}</p>
              </div>
              <div className="bg-teal-50/30 p-6 group-hover:bg-[#03818F] transition-colors duration-300">
                <span className="text-[#03818F] group-hover:text-teal-100 font-bold uppercase text-[10px] tracking-widest mb-2 block transition-colors">Geoclaim Impact</span>
                <p className="font-bold text-[#041523] group-hover:text-white text-lg transition-colors">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 10. Industry Connected Ecosystem */
export function ConnectedEcosystem({ nodes }: { nodes: { title: string, icon: React.ReactNode }[] }) {
  return (
    <section className="py-24 bg-[#041523] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-[#00A8C6] font-bold tracking-widest uppercase text-xs mb-3 block">Ecosystem</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Value Chain</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto py-10">
          {/* Animated curved background line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-white/10 -translate-y-1/2" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {nodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#00A8C6]/10 border border-[#00A8C6]/30 flex items-center justify-center text-[#00A8C6] backdrop-blur-md hover:bg-[#00A8C6] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,168,198,0.1)] hover:shadow-[0_0_30px_rgba(0,168,198,0.4)] cursor-pointer">
                    {node.icon}
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center w-32">
                    <p className="text-white font-semibold text-sm">{node.title}</p>
                  </div>
                </motion.div>
                
                {/* Connector mobile */}
                {idx !== nodes.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + 0.1 }}
                    className="md:hidden text-white/20"
                  >
                    <ArrowDown className="w-6 h-6" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
