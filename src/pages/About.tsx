import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, Cpu, Award, Compass, Eye, ShieldCheck, Globe, Users } from 'lucide-react';

interface AboutProps {
  onPageChange: (page: string) => void;
}

export default function About({ onPageChange }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Sprawling cinematic industrial landscape"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAop6Cf0QH0yjqs6aygRyKhj2dMfYjVafJqH0s9oEam8MQ7tFJVRtVgA_q6rJ3ULxpj0pLRuQ8ROu1ZJ10qTir03D_xa-rgcgIbST8tpHKw1c-ABe06X6ecoUAV2-yIgCEJ--JoZgk-MvKuwK3XdRXD6h8XouAyuNHVbRHJQ17zwEwzysjw9kVINkkpZNKaMiaH67kFPOdyFP4PQN2V1Dvq7hLLUEv9S0SzlaD05TvAUZH6mTgCwscaJkBWG8cxuLkBcU05loHVKPK2"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1d2b]/85 via-[#0c1d2b]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/30 text-accent border border-white/10 font-semibold text-xs uppercase tracking-widest mb-6">
              About Geoclaim
            </span>
            <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-7xl mb-6 leading-tight">
              Pioneering the <br />
              <span className="text-accent">Eco-Business</span> Frontier
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mb-8 leading-relaxed">
              Revolutionizing global energy through advanced circular economy technologies and sustainable business infrastructure.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => onPageChange('impact')}
                className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-black/20 w-full sm:w-auto text-center"
              >
                Explore Our Impact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Redefining Industrial Power Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary mb-6">
                Redefining Business Power
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
            </div>
            <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Geoclaim Energy Pvt. Ltd. is Nagpur based waste to energy company who engaged in providing innovative and sustainable solutions in the field of renewable energy and waste management. The company aims to bridge the gap between waste generation and energy demand by converting organic and non-recyclable waste into usable fuels and resources.
              </p>
              <p>
                By leveraging cutting-edge circular economy models, we transform industrial byproduct and urban waste into high-density energy solutions, closing the loop on manufacturing while powering the next generation of sustainable cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-teal-50/20 via-white to-teal-50/10 relative overflow-hidden">
        {/* Ambient floating elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#03818F]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-[#00A8C6]/5 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="group bg-white/70 backdrop-blur-md rounded-[24px] border border-teal-100/50 shadow-[0_15px_35px_rgba(3,129,143,0.06)] hover:shadow-[0_25px_50px_rgba(0,168,198,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden transform translate-z-0 flex flex-col justify-between h-full">
              <div>
                {/* Image at Top */}
                <div className="relative h-60 w-full overflow-hidden rounded-t-[23px] transform translate-z-0">
                  <img
                    src="/mission-compass.jpg"
                    alt="Compass pointing towards mission"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                  />
                  {/* Dark teal gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-[#034152]/40 to-transparent" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00A8C6] text-[#041523] px-3.5 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-md">
                      Zero Waste Future
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 sm:p-10 pb-0">
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-[inset_0_0_10px_rgba(3,129,143,0.05)]">
                      <Compass className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-primary">Our Mission</h3>
                  </div>

                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 font-light">
          To create a cleaner and more sustainable future by helping businesses and communities transform waste into meaningful resources. We are committed to reducing environmental impact through practical, eco-friendly solutions that support a greener tomorrow.
        </p>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="p-8 sm:p-10 pt-0">
                <div className="w-full h-[1px] bg-teal-100/50 mb-6" />
                <ul className="space-y-4">
                  {[
                    'Reduce waste and create cleaner environment.',
                    'Provide sustainable energy alternatives',
                    'Support environmental and community initiatives',
                    'Deliver practical and eco-friendly solutions',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group bg-[#041523]/95 backdrop-blur-md rounded-[24px] border border-[#03818F]/20 shadow-[0_15px_35px_rgba(4,21,35,0.2)] hover:shadow-[0_25px_50px_rgba(0,168,198,0.25)] hover:-translate-y-2 transition-all duration-500 overflow-hidden transform translate-z-0 flex flex-col justify-between h-full relative">
              {/* Radial backdrop glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

              <div>
                {/* Image at Top */}
                <div className="relative h-60 w-full overflow-hidden rounded-t-[23px] transform translate-z-0">
                  <img
                    src="/vision-binoculars.jpg"
                    alt="Binoculars overlooking clean energy transition future"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                  />
                  {/* Dark teal gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041523]/90 via-[#034152]/40 to-transparent" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00A8C6] text-[#041523] px-3.5 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-md">
                      Clean Energy Transition
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 sm:p-10 pb-0 relative z-10">
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-accent shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                      <Eye className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">Our Vision</h3>
                  </div>

                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
          To inspire a future where sustainability becomes a way of life and cleaner energy solutions create lasting impact for businesses, communities and the environment.
        </p>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="p-8 sm:p-10 pt-0 relative z-10">
                <div className="w-full h-[1px] bg-white/10 mb-6" />
                <ul className="space-y-4">
                  {[
                      'Build a more sustainable future for businesses.',
                      'Encourage smarter and cleaner energy practices.',
                      'Strengthen communities through meaningful impact.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-white/85">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#0c1d2b] text-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Guided by Excellence
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Our four core values define every project we undertake and every innovation we deploy.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: 'Sustainability',
                desc: 'Beyond compliance; we aim for environmental restoration in every business energy cycle we engineer.',
                icon: <Leaf className="w-6 h-6" />,
              },
              {
                title: 'Innovation',
                desc: 'Pushing the thermodynamic limits of waste conversion with proprietary processing layouts.',
                icon: <Cpu className="w-6 h-6" />,
              },
              {
                title: 'Compliance',
                desc: 'Rigorous adherence to global environmental safety standards ensures long-term businesses reliability.',
                icon: <ShieldCheck className="w-6 h-6" />,
              },
              {
                title: 'Reliability',
                desc: 'Delivering consistent, high-yield energy output that powers critical industrial processes 24/7.',
                icon: <Award className="w-6 h-6" />,
              },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {val.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-4">{val.title}</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
