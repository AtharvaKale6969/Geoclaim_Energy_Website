const clients = [
  {
    id: 1,
    name: 'Foodverse Global Pvt. Ltd.',
    image: '/food-verse-global-Logo.png',
  },
  {
    id: 2,
    name: 'Sampurn(e)arth Environment Solutions Pvt. Ltd.',
    image: '/Sampurnaearth Solutions.png',
  },
  {
    id: 3,
    name: 'Saoner Biomass Supplier',
  },
  {
    id: 4,
    name: 'Grampanchayat Dhanla',
    image: '/Gram_Panchayat_Dhanla.png',
  }
];

const strategicPartners = [
  {
    id: 1,
    name: 'Plastroots Waste Management & Solutions Pvt. Ltd.',
    role: 'Waste Management & Sustainability Partner',
    image: '/PWMSPL_LOGO.jpg',
  },

  {
    id: 3,
    name: 'Shetahit Farm & Solutions Pvt. Ltd.',
    role: 'Agricultural Ecosystem Partner',
    image: '/Shetahit.webp',
  }
];

export default function ClientsAndPartners() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Clients Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-12 text-center">
        <span className="inline-block bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full font-semibold text-xs tracking-wider uppercase mb-4">
          Trusted Network
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#041523] mb-6">
          Trusted Clients
        </h2>
      </div>

      <div className="w-full relative py-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-gray-50 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-gray-50 after:to-transparent after:z-10">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] whitespace-nowrap group">
          {[1, 2, 3, 4].map((loopIndex) => (
            <div key={`clients-${loopIndex}`} className="flex gap-6 md:gap-8 shrink-0 pr-6 md:pr-8">
              {clients.map((client) => (
                <div
                  key={`${loopIndex}-${client.id}`}
                  className="bg-white border border-gray-100 p-8 rounded-3xl w-[320px] md:w-[380px] inline-flex flex-col items-center text-center shrink-0 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-2 transition-all duration-500 cursor-pointer group/card h-full min-h-[280px]"
                >
                  <div className="w-28 h-28 mb-auto flex items-center justify-center transition-transform duration-500 group-hover/card:scale-105">
                    {client.image ? (
                      <img 
                        src={client.image} 
                        alt={client.name} 
                        className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" 
                      />
                    ) : (
                      <div className="w-full h-full rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 font-medium text-sm">Logo Area</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 whitespace-normal w-full">
                    <h4 className="font-display font-bold text-lg text-gray-900 leading-tight">
                      {client.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Partners Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mt-20 mb-12 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#041523] mb-6">
          Strategic Partners
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Collaborating with organizations supporting sustainability, innovation and environmental impact.
        </p>
      </div>

      <div className="w-full relative py-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-gray-50 before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-gray-50 after:to-transparent after:z-10">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] whitespace-nowrap group [animation-direction:reverse]">
          {[1, 2, 3, 4].map((loopIndex) => (
            <div key={`partners-${loopIndex}`} className="flex gap-6 md:gap-8 shrink-0 pr-6 md:pr-8">
              {strategicPartners.map((partner) => (
                <div
                  key={`${loopIndex}-${partner.id}`}
                  className="bg-white border border-gray-100 p-8 rounded-3xl w-[320px] md:w-[380px] inline-flex flex-col items-center text-center shrink-0 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-2 transition-all duration-500 cursor-pointer group/card h-full min-h-[280px]"
                >
                  <div className="w-28 h-28 mb-auto flex items-center justify-center transition-transform duration-500 group-hover/card:scale-105">
                    {partner.image ? (
                      <img 
                        src={partner.image} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain transition-all duration-500 mix-blend-multiply" 
                      />
                    ) : (
                      <div className="w-full h-full rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 font-medium text-sm">Logo Area</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 whitespace-normal w-full">
                    <h4 className="font-display font-bold text-lg text-gray-900 mb-2 leading-tight">
                      {partner.name}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {partner.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
