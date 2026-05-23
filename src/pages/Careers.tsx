import { useState, useRef } from 'react';
import { Briefcase, MapPin, Clock, ChevronDown, CheckCircle2, X, Factory, Handshake } from 'lucide-react';
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

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  icon: React.ElementType;
}

export default function Careers() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedJobForModal, setSelectedJobForModal] = useState<Job | null>(null);
  const [isTalentPoolSubmitted, setIsTalentPoolSubmitted] = useState(false);
  const [talentEmail, setTalentEmail] = useState('');

  // Apply Modal Form State
  const [applyName, setApplyName] = useState('');
  const [applyEmail, setApplyEmail] = useState('');
  const [applyPhone, setApplyPhone] = useState('');
  const [applyResume, setApplyResume] = useState('');
  const [applyMessage, setApplyMessage] = useState('');
  const [applyErrors, setApplyErrors] = useState<Record<string, string>>({});
  const [isApplySubmitted, setIsApplySubmitted] = useState(false);

  const jobs: Job[] = [
    {
      id: 'operation-executive',
      title: 'Operation Executive',
      department: 'Operations',
      location: 'Nagpur, Maharashtra',
      type: 'Full-time',
      summary: 'Lead decentralized agricultural biomass processing clusters, ensuring secure raw stubble collection, sorting quality metrics, and local factory delivery schedules.',
      responsibilities: [
        'Coordinate daily feedstock collection with farming community leaders.',
        'Manage machinery sorting and briquetting performance KPIs.',
        'Ensure local compliance with emission and noise directives.',
        'Prepare weekly yield and delivery logs for regional management.',
      ],
      requirements: [
        '5+ years experience in agricultural supply chains or bioenergy systems.',
        'Strong community relations and vernacular communication skills.',
        'Bachelor’s degree in Agricultural Engineering, Environmental Science, or related fields.',
      ],
      icon: Factory,
    },
    {
      id: 'business-development',
      title: 'Business Development Executive',
      department: 'Business Development',
      location: 'Nagpur, Maharashtra',
      type: 'Full-time',
      summary: 'Drive B2B growth by establishing strategic partnerships with industries seeking to decarbonize their thermal energy operations through biomass alternatives.',
      responsibilities: [
        'Identify and pitch to industrial clients (FMCG, Textiles, Pharmaceuticals).',
        'Analyze client energy consumption and present Geoclaim ROI savings.',
        'Negotiate long-term biomass supply contracts and service agreements.',
        'Collaborate with engineering teams for seamless client onboarding.',
      ],
      requirements: [
        '3+ years in B2B sales, energy sector, or industrial equipment sales.',
        'Excellent presentation, negotiation, and client relationship skills.',
        'Bachelor’s degree in Business Administration, Marketing, or Engineering.',
      ],
      icon: Handshake,
    },
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!applyName) errors.name = 'Full name is required.';
    if (!applyEmail) {
      errors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(applyEmail)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!applyPhone) errors.phone = 'Phone number is required.';
    if (!applyResume) {
      errors.resume = 'Resume link or profile URL is required.';
    } else if (!applyResume.startsWith('http')) {
      errors.resume = 'Please provide a valid URL starting with http:// or https://.';
    }

    if (Object.keys(errors).length > 0) {
      setApplyErrors(errors);
      return;
    }

    setApplyErrors({});
    setIsApplySubmitted(true);
    // Reset fields
    setApplyName('');
    setApplyEmail('');
    setApplyPhone('');
    setApplyResume('');
    setApplyMessage('');
  };

  const handleTalentPoolSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (talentEmail && /\S+@\S+\.\S+/.test(talentEmail)) {
      setIsTalentPoolSubmitted(true);
      setTalentEmail('');
    }
  };

  const closeModal = () => {
    setSelectedJobForModal(null);
    setIsApplySubmitted(false);
    setApplyErrors({});
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-white">
      {/* Immersive Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] sm:h-[70vh] min-h-[480px] flex items-center bg-[#041523] overflow-hidden pt-28 pb-20"
      >
        {/* Parallax & Zooming Background Image */}
        <motion.div
          className="absolute inset-0 z-0 origin-center pointer-events-none"
          style={{ y: yBg }}
        >
          <motion.img
            src="/careers-hero.png"
            alt="Sustainability Careers and Clean Energy Team"
            className="w-full h-full object-cover select-none pointer-events-none origin-center opacity-40 scale-105"
            animate={{
              scale: [1.05, 1.10, 1.05],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
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
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Moving Light Sweep */}
        <motion.div
          className="absolute inset-y-0 -left-[100%] w-1/2 bg-gradient-to-r from-transparent via-[#00A8C6]/5 to-transparent skew-x-12 z-10 pointer-events-none"
          animate={{
            left: ['-100%', '200%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Sustainability Particles */}
        <GreenParticles />

        {/* Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex bg-[#00A8C6]/15 border border-[#00A8C6]/30 px-4 py-1.5 rounded-full text-accent font-semibold text-xs uppercase tracking-widest"
            >
              Careers Portal
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-bold text-3xl md:text-5xl lg:text-7xl text-white leading-tight"
            >
              Join the Clean <span className="text-[#00A8C6]">Energy Revolution</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light"
            >
              Collaborate with an elite multidisciplinary team of engineers, operations heads, and researchers to design next-gen circular economy platforms.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary">Open Positions</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Click on any role below to review responsibilities and qualifications.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-white border border-teal-100/50 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-primary/20"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                      <job.icon className="w-3.5 h-3.5" />
                      {job.department}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-primary">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {/* Accordion Expandable Content */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 border-t border-teal-50/55 pt-6 space-y-6 bg-teal-50/10">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{job.summary}</p>

                    <div className="grid sm:grid-cols-2 gap-8">
                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-primary">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2.5">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="space-y-3">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-primary">
                          Required Qualifications:
                        </h4>
                        <ul className="space-y-2.5">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-teal-50 flex justify-end">
                      <button
                        onClick={() => setSelectedJobForModal(job)}
                        className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                      >
                        Apply for this Role
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Talent Pool Section */}
      <section className="py-20 bg-teal-50/20 border-t border-teal-50">
        <div className="max-w-xl mx-auto px-4 md:px-8 text-center">
          <Briefcase className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="font-display font-bold text-2xl text-primary mb-4">Don't see the right role?</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-8 leading-relaxed">
            Submit your contact credentials to our talent pool database. We will notify you immediately once an opening matching your background arises.
          </p>

          {isTalentPoolSubmitted ? (
            <div className="flex items-center gap-2.5 text-emerald-600 bg-emerald-500/5 border border-emerald-500/20 p-5 rounded-2xl text-sm justify-center">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>You've successfully joined our Talent Pool!</span>
            </div>
          ) : (
            <form onSubmit={handleTalentPoolSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={talentEmail}
                onChange={(e) => setTalentEmail(e.target.value)}
                placeholder="Submit your email"
                required
                className="flex-grow w-full bg-white border border-teal-100/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                Join Pool
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedJobForModal && (
        <div className="fixed inset-0 bg-[#041523]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-teal-50 shadow-2xl p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
              Applying for
            </span>
            <h3 className="font-display font-bold text-xl text-primary mb-6">
              {selectedJobForModal.title}
            </h3>

            {isApplySubmitted ? (
              <div className="space-y-6 py-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-lg text-primary">Application Submitted</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Thank you for applying. Our EHS team will evaluate your files and reach out within 5-7 working days.
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Close Modal
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary">Full Name</label>
                  <input
                    type="text"
                    value={applyName}
                    onChange={(e) => setApplyName(e.target.value)}
                    className="w-full bg-white border border-teal-100/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
                    placeholder="Enter your name"
                  />
                  {applyErrors.name && <p className="text-rose-500 text-xs">{applyErrors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary">Email Address</label>
                  <input
                    type="email"
                    value={applyEmail}
                    onChange={(e) => setApplyEmail(e.target.value)}
                    className="w-full bg-white border border-teal-100/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
                    placeholder="name@company.com"
                  />
                  {applyErrors.email && <p className="text-rose-500 text-xs">{applyErrors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary">Phone Number</label>
                  <input
                    type="tel"
                    value={applyPhone}
                    onChange={(e) => setApplyPhone(e.target.value)}
                    className="w-full bg-white border border-teal-100/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {applyErrors.phone && <p className="text-rose-500 text-xs">{applyErrors.phone}</p>}
                </div>

                {/* Resume Link */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary">Resume Link / Portfolio URL</label>
                  <input
                    type="url"
                    value={applyResume}
                    onChange={(e) => setApplyResume(e.target.value)}
                    className="w-full bg-white border border-teal-100/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
                    placeholder="https://drive.google.com/..."
                  />
                  {applyErrors.resume && <p className="text-rose-500 text-xs">{applyErrors.resume}</p>}
                </div>

                {/* Cover Letter */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary">Cover Letter / Note (Optional)</label>
                  <textarea
                    value={applyMessage}
                    onChange={(e) => setApplyMessage(e.target.value)}
                    rows={4}
                    className="w-full bg-white border border-teal-100/50 rounded-xl p-4 text-sm focus:outline-none focus:border-primary/50"
                    placeholder="Tell us why you are a great fit..."
                  />
                </div>

                <div className="pt-4 flex gap-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 border border-teal-100/50 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
