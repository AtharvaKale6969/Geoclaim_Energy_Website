import React, { useState } from 'react';
import { Mail, Globe, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string, targetSectionId?: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#041523] text-white pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(3,129,143,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Col 1: About & Socials */}
        <div className="space-y-6">
          <span className="font-display font-bold text-2xl text-accent block">Geoclaim Energy</span>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Pioneering high-capacity industrial waste-to-energy conversion systems for a carbon-neutral future. Join us in powering a circular future.
          </p>
          <div className="flex gap-4">
            {['globe', 'mail'].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer text-white/60 hover:text-white"
              >
                {icon === 'globe' ? <Globe className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Solutions Links */}
        <div>
          <h5 className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-6">Solutions</h5>
          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <button onClick={() => onPageChange('products', 'biomass-fuel-supply')} className="hover:text-white transition-colors">
                Biomass Fuel Supply
              </button>
            </li>
            <li>
              <button onClick={() => onPageChange('products', 'rdf-processing-unit')} className="hover:text-white transition-colors">
                RDF Processing Unit
              </button>
            </li>
            <li>
              <button onClick={() => onPageChange('products', 'biogas-plant-establishment')} className="hover:text-white transition-colors">
                Biogas Plant Establishment
              </button>
            </li>
            <li>
              <button onClick={() => onPageChange('products', 'plant-machinery-supply-consulting')} className="hover:text-white transition-colors">
                Plant Machinery Supply & Consulting
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Company Links */}
        <div>
          <h5 className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-6">Company</h5>
          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <button onClick={() => onPageChange('about')} className="hover:text-white transition-colors">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => onPageChange('impact')} className="hover:text-white transition-colors">
                Sustainability Impact
              </button>
            </li>
            <li>
              <button onClick={() => onPageChange('careers')} className="hover:text-white transition-colors">
                Career Opportunities
              </button>
            </li>
            <li>
              <button onClick={() => onPageChange('contact')} className="hover:text-white transition-colors">
                Contact Center
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h5 className="font-display font-semibold text-sm uppercase tracking-widest text-accent mb-6">Stay Updated</h5>
          <p className="text-white/60 text-sm mb-4">Receive industry insights and carbon market updates.</p>
          
          {isSubmitted ? (
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Subscription successful!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl p-1.5 focus-within:border-accent/50 focus-within:ring-1 focus-within:ring-accent/50 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="bg-transparent border-0 outline-none text-white text-sm px-3 py-2 flex-grow min-w-0"
                />
                <button type="submit" className="bg-primary hover:bg-primary-light px-4 py-2 rounded-lg transition-colors flex items-center justify-center text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {error && <p className="text-rose-400 text-xs mt-1">{error}</p>}
            </form>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© 2026 Geoclaim Energy Solutions Pvt. Ltd. All Rights Reserved.</p>
        <div className="flex gap-6">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <button className="hover:text-white transition-colors">Cookie Settings</button>
        </div>
      </div>
    </footer>
  );
}
