import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, ChevronDown, CheckCircle2, Send } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

function GreenParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(10)].map((_, i) => {
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

export default function Contact() {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ State
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Hero Parallax Setup
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const faqs = [
    {
      q: 'What types of organic waste do you process?',
      a: 'We process a wide range of organic waste streams, including municipal food waste, agricultural residues (paddy straw, wheat stubble), and industrial food processing byproducts (sugarcane bagasse, dairy sludge).',
    },
    {
      q: 'How do you calculate carbon offset credits?',
      a: 'Our offsets are calculated based on clean energy generation replacing grid fossil fuels and avoided landfill decay. We utilize ISO-certified greenhouse gas quantification protocols backed by regional verification audits.',
    },
    {
      q: 'Do you supply heavy sorting machinery separately?',
      a: 'Yes, through our Plant Machinery Supply division, we consult on, source, and deliver heavy shredders, trommel screens, and briquetting equipment, providing installation and operation maintenance services.',
    },
    {
      q: 'What is the typical setup timeline for a biogas plant?',
      a: 'Turnkey biogas projects generally take between 6 to 12 months from feasibility audits, regulatory board clearances, civil construction, biochemical stabilization, and final commissioning.',
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Full name is required.';
    if (!email) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!message) errors.message = 'Please write a message description.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setSubject('general');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Animated subtle zoom on load */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src="/contact-hero.png" 
              alt="Sustainable Business Partnerships" 
              className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
            />
          </motion.div>

          {/* Gradients and Overlays */}
          <div className="absolute inset-0 bg-[#041523]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041523] via-[#034152]/80 to-transparent" />
          
          {/* Moving Light Sweep */}
          <motion.div 
            className="absolute inset-0 w-[200%] h-full opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,168,198,0.2) 50%, transparent 100%)',
            }}
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <GreenParticles />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A8C6]/15 border border-[#00A8C6]/30 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#00A8C6] shadow-[0_0_10px_#00A8C6]" />
                <span className="text-[#00A8C6] text-[10px] font-bold uppercase tracking-widest">
                  Connect & Collaborate
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-7xl text-white mb-6 leading-[1.1]">
                Partner for a Sustainable Future
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                Let us collaborate to optimize waste recovery, reduce your carbon footprint, and build the clean energy infrastructure of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade to Content */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* Main Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 md:px-8">
        {/* Contact Form */}
        <div className="bg-teal-50/10 border border-teal-100/50 p-8 sm:p-12 rounded-[2rem] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          
          <h2 className="font-display font-bold text-2xl text-primary mb-2 relative z-10 text-center">Send Us a Message</h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-8 relative z-10 text-center max-w-xl mx-auto">
            Fill out the details below, and our business development team will respond within 24 hours.
          </p>

          {isSubmitted ? (
            <div className="space-y-6 py-12 text-center relative z-10">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-lg text-primary">Inquiry Submitted Successfully</h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Thank you for reaching out. We have logged your request and sent a confirmation ticket to your inbox.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-teal-100/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
                    placeholder="Enter your name"
                  />
                  {formErrors.name && <p className="text-rose-500 text-xs">{formErrors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary">Business Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-teal-100/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
                    placeholder="name@company.com"
                  />
                  {formErrors.email && <p className="text-rose-500 text-xs">{formErrors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary">Subject of Inquiry</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-white border border-teal-100/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
                >
                  <option value="general">General Corporate Inquiry</option>
                  <option value="biomass">Biomass Fuel Sourcing</option>
                  <option value="rdf-processing-supply">RDF Processing & Supply</option>
                  <option value="biogas">Biogas Turnkey Projects</option>
                  <option value="machinery">Plant Machinery Supply</option>
                  <option value="consulting">Strategic EHS Consulting</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary">Message Details</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-white border border-teal-100/50 rounded-xl p-4 text-sm focus:outline-none focus:border-primary/50"
                  placeholder="Describe your query or facility capacity..."
                />
                {formErrors.message && <p className="text-rose-500 text-xs">{formErrors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Headquarters Map Section */}
      <section className="py-24 bg-[#041523] border-t border-[#034152]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00A8C6]/15 text-[#00A8C6] border border-[#00A8C6]/30 font-semibold text-xs uppercase tracking-widest mb-6">
              Our Locations
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Geoclaim Headquarters</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* Left: HQ Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-[#034152]/30 backdrop-blur-md border border-[#03818F]/20 p-8 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A8C6]/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00A8C6]/20 text-[#00A8C6] mb-6 shadow-[0_0_15px_rgba(0,168,198,0.3)]">
                  <MapPin className="w-6 h-6" />
                </div>
                
                <h3 className="font-display font-bold text-2xl text-white mb-2">Geoclaim Energy Headquarters</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Primary operational and business hub driving sustainability initiatives, renewable energy solutions and waste-to-energy operations.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                      <MapPin className="w-4 h-4 text-[#00A8C6]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Address</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Plot No 12A, 1st Floor, Smruti Nagar Rd,<br/>
                        Smruti Nagar, Koradi, Bokara,<br/>
                        Nagpur, Maharashtra 441111
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                      <Phone className="w-4 h-4 text-[#00A8C6]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-gray-400 text-sm">+91 7123100024</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                      <Mail className="w-4 h-4 text-[#00A8C6]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-gray-400 text-sm">business@geoclaimenergy.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Map */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 h-[400px] lg:h-auto min-h-[400px] rounded-[2rem] overflow-hidden border border-[#03818F]/20 relative shadow-2xl group"
            >
              <div className="absolute inset-0 bg-[#00A8C6]/20 mix-blend-overlay pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <iframe
                src="https://maps.google.com/maps?q=Plot%20No%2012A,%201st%20Floor,%20Smruti%20Nagar%20Rd,%20Smruti%20Nagar,%20Koradi,%20Bokara,%20Nagpur,%20Maharashtra%20441111&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[20%] contrast-125"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-24 bg-teal-50/10 border-t border-teal-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">
              Find fast answers to common questions about waste processing clearances.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isActive = activeFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-teal-100/50 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isActive ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 font-display font-bold text-sm sm:text-base text-primary"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        isActive ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>
                  {isActive && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-teal-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
