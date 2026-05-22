import { useState, useRef } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, X } from 'lucide-react';
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


interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Biofuels' | 'Circular Economy' | 'ESG' | 'Innovations';
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['All', 'Biofuels', 'Circular Economy', 'ESG', 'Innovations'];

  const articles: Article[] = [
    {
      id: 'rdf-manufacturing',
      title: 'The Role of RDF in Heavy Manufacturing Decarbonization',
      excerpt: 'How refuse-derived fuel is helping heavy manufacturing plants replace fossil coal, achieve compliance targets, and lower net emissions.',
      content: `Heavy industries such as cement manufacturing and power plants are under immense pressure to lower their dependency on traditional thermal coal. Refuse-Derived Fuel (RDF) offers a viable, highly structured alternative. Produced by shredding and dehydrating solid industrial and municipal waste, RDF contains a high calorific value, making it ideal for high-temperature kilns. By using RDF as a co-fuel, cement producers can offset up to 35% of their coal requirements. This not only reduces landfill pressure but also significantly cuts carbon dioxide output, keeping plants compliant with local emissions limits and carbon tax structures.`,
      category: 'Circular Economy',
      date: 'May 14, 2026',
      author: 'Dr. Sarah Thorne',
      readTime: '6 min read',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uhwZGO2srOB1EguTAlbE4UE1cSQBnvETCqJLAOlUhVjN4udOZp1k2O7Jb_pmJMOS89T-iG7-wekr-9ENmy_1CNTtRzpre-d3Sqsy-dJVJ1C5evFgetv-iND61xb3nyGfZC2yctW6fESwK34xbU2zo9yV3FWmk-LHWki7nCf9bDN7EK9TIB2T0nyBPndDFXvy2c6o-mcWauxnycky_gLBvQ4kNrxrCK3wwXAkZnYX8t3PJIuHpHOD8JRaTRq_80pVFGH7iT9TNV8w7Q',
    },
    {
      id: 'biomass-networks',
      title: 'Scaling Decentralized Agricultural Biomass Networks',
      excerpt: 'An in-depth look at gathering, sorting, and processing paddy straw directly from agricultural centers to reduce crop burning.',
      content: `Crop residue burning is a primary contributor to seasonal air pollution across Northern India. Establishing decentralized networks that source this residue directly from farmers presents a win-win solution. Our cluster models gather straw, compress it into briquettes and pellets, and supply it to industrial boilers. This process provides farmers with supplementary income, prevents open burning, and supplies clean biofuel to factories. Overcoming transport bottlenecks and building scalable farm-to-factory logistics remains the key to unlocking this massive renewable source.`,
      category: 'Biofuels',
      date: 'April 28, 2026',
      author: 'Marcus Vance',
      readTime: '8 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAelgPz4GM4ORurs7Hais_9ZTW8e6DIdAtH3y_LhdrHLwejJm2qXWbIcj0wp_plAI6UjwW1Go5fHfh9VO8Kdck2a0rvd7jwVmRs6GwSf-kjoZDV6jryp8hO1miUj0r7E0lpcU4YmmnFajnYOs6DWyAVU0ijuUwZbuCOvNgDz5kdD7mwPT3HE3Pe6b5vD0_EaywHJaIHEFTQZeuM0YPvO3dQGk88Xl5dAdc3KsjEULk0BXHDWpQZMkaLRV9OufUPQcirhJPr8Umo0Ckk',
    },
    {
      id: 'carbon-offsets',
      title: 'Understanding Carbon Offsets in the Indian Energy Market',
      excerpt: 'Evaluating local carbon credit structures and how waste-to-energy projects generate high-value credits for ESG compliance.',
      content: `The Indian carbon market is evolving rapidly with the introduction of new national compliance frameworks. Waste-to-Energy (WTE) projects play a double role: they prevent anaerobic decay in landfills (avoiding methane emissions) and replace fossil fuel combustion in industrial processing plants. This double-benefit makes credits generated by WTE operations highly sought after. Companies investing in these offsets gain verifiable, high-quality compliance credits that align with international ESG report standards, protecting them from future carbon regulatory adjustments.`,
      category: 'ESG',
      date: 'April 10, 2026',
      author: 'Julian Chen',
      readTime: '5 min read',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAop6Cf0QH0yjqs6aygRyKhj2dMfYjVafJqH0s9oEam8MQ7tFJVRtVgA_q6rJ3ULxpj0pLRuQ8ROu1ZJ10qTir03D_xa-rgcgIbST8tpHKw1c-ABe06X6ecoUAV2-yIgCEJ--JoZgk-MvKuwK3XdRXD6h8XouAyuNHVbRHJQ17zwEwzysjw9kVINkkpZNKaMiaH67kFPOdyFP4PQN2V1Dvq7hLLUEv9S0SzlaD05TvAUZH6mTgCwscaJkBWG8cxuLkBcU05loHVKPK2',
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            src="/blog-hero.jpg"
            alt="Sustainability and Knowledge Insights"
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
        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <div className="max-w-3xl space-y-6 text-left">
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex bg-[#00A8C6]/15 border border-[#00A8C6]/30 px-4 py-1.5 rounded-full text-accent font-semibold text-xs uppercase tracking-widest"
            >
              Insights Portal
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            >
              Blog & <span className="text-[#00A8C6]">Industry Insights</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light"
            >
              Stay up to date with the latest developments in waste-to-energy conversion, carbon policies, and ESG compliance.
            </motion.p>
          </div>
        </div>
      </section>


      {/* Filter and Search Bar */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-teal-50 pb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-primary border-primary text-white'
                    : 'bg-white border-teal-100/50 text-gray-600 hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-white border border-teal-100/50 rounded-xl py-3 pl-12 pr-4 text-sm text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-teal-50/10 border border-dashed border-teal-100 rounded-3xl">
            <p className="text-gray-500 text-sm">No articles match your search or filter settings.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white border border-teal-100/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Article Image */}
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {art.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-gray-500 text-xs font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {art.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {art.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-primary leading-snug group-hover:text-accent transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-teal-50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <User className="w-3.5 h-3.5" />
                    <span>{art.author}</span>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="text-primary hover:text-accent font-bold text-xs flex items-center gap-1 group/btn"
                  >
                    Read Article{' '}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-[#041523]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-teal-50 shadow-2xl relative">
            {/* Modal Header Image */}
            <div className="h-64 relative">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
                  {selectedArticle.category}
                </span>
                <h2 className="font-display font-bold text-lg sm:text-xl lg:text-2xl leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-xs font-semibold border-b border-teal-50 pb-4">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  Written by {selectedArticle.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <div className="text-gray-700 text-sm leading-relaxed space-y-4">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-teal-50 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
