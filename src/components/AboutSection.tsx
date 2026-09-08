import React from 'react';
import { BUSINESS_INFO, USER_ASSETS } from '../data/businessData';
import { ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onBookNowClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookNowClick }) => {
  return (
    <section
      id="about"
      aria-label="About Tony's Car Care"
      className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7">
            <h2
              id="about-heading"
              className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              CAR CARE WITHOUT THE HASSLE.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#D9D9D9] leading-relaxed mb-8">
              <p>
                Tony’s Car Care provides professional mobile car washing and automotive detailing delivered directly to your home, office, or wherever your vehicle is parked in Los Angeles, California.
              </p>
              <p className="text-[#AFAFAF] text-base">
                Instead of taking time out of your day to drive to a facility and wait in long lines, our mobile setup brings clean water, premium hand wash supplies, and meticulous care straight to you. We focus on quality presentation, clean finishes, and an effortless customer experience.
              </p>
            </div>

            {/* Core Values / Focus Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Mobile Convenience
                  </h3>
                  <p className="text-xs text-[#AFAFAF]">
                    Service performed right at your driveway or designated parking spot.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Quality Presentation
                  </h3>
                  <p className="text-xs text-[#AFAFAF]">
                    Careful hand washing and interior wipedown for a polished look.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Flexible Scheduling
                  </h3>
                  <p className="text-xs text-[#AFAFAF]">
                    Book your wash according to your schedule and daily location.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Los Angeles Focused
                  </h3>
                  <p className="text-xs text-[#AFAFAF]">
                    Dedicated to prompt, professional service across the local area.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onBookNowClick}
                className="bg-white text-black hover:bg-[#D9D9D9] px-6 py-3 text-xs font-extrabold uppercase tracking-widest rounded-sm transition-colors cursor-pointer"
              >
                BOOK YOUR WASH
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-xs font-bold uppercase tracking-widest text-[#D9D9D9] hover:text-white px-4 py-3 border border-white/20 hover:border-white rounded-sm transition-colors"
              >
                CALL {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Pair */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/20 bg-[#181818] rounded-sm overflow-hidden shadow-2xl">
              <img
                src={USER_ASSETS.img6.local}
                alt={USER_ASSETS.img6.alt}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = USER_ASSETS.img6.remote;
                }}
                className="w-full h-auto aspect-[4/3] object-cover filter contrast-125 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

              <div className="p-6 bg-[#181818] border-t border-white/10">
                <p className="text-xs uppercase tracking-widest font-semibold text-white mb-1">
                  On-Location Detailing
                </p>
                <p className="text-xs text-[#AFAFAF]">
                  Vehicle care at your home, workplace, or private driveway in Los Angeles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
