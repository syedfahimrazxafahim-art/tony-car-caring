import React from 'react';
import { BUSINESS_INFO, USER_ASSETS } from '../data/businessData';
import { Phone } from 'lucide-react';

interface FinalCtaSectionProps {
  onBookWashClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onBookWashClick }) => {
  return (
    <section
      id="final-cta"
      aria-label="Call to Action"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/15"
    >
      {/* Background Image with Deep Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={USER_ASSETS.img7.local}
          alt={USER_ASSETS.img7.alt}
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = USER_ASSETS.img7.remote;
          }}
          className="w-full h-full object-cover object-center filter contrast-150 brightness-[0.28]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#AFAFAF] uppercase block mb-4">
          Tony’s Car Care • Los Angeles
        </span>

        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          YOUR CAR DESERVES
          <span className="block text-[#D9D9D9]">THE CAR CARE.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#D9D9D9] max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Book professional mobile car washing without leaving your driveway.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-book-btn"
            onClick={onBookWashClick}
            className="w-full sm:w-auto bg-white text-black hover:bg-[#D9D9D9] active:bg-[#AFAFAF] px-10 py-4 text-sm font-black uppercase tracking-widest rounded-sm transition-all duration-200 shadow-xl hover:shadow-white/10 cursor-pointer"
          >
            BOOK YOUR WASH
          </button>

          <a
            id="final-cta-phone-btn"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#181818] text-white hover:text-white border border-white/20 hover:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-[#AFAFAF]" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
