import React from 'react';
import { PROCESS_STEPS, USER_ASSETS } from '../data/businessData';
import { MapPin, Calendar, Truck, Sparkles } from 'lucide-react';

interface MobileProcessSectionProps {
  onBookNowClick: () => void;
}

export const MobileProcessSection: React.FC<MobileProcessSectionProps> = ({ onBookNowClick }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-5 h-5 text-white" />;
      case 1:
        return <MapPin className="w-5 h-5 text-white" />;
      case 2:
        return <Truck className="w-5 h-5 text-white" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section
      id="mobile-service"
      aria-label="Mobile Process"
      className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-white/15 rounded-sm mb-4">
            <span className="text-xs font-semibold tracking-widest text-[#D9D9D9] uppercase">
              On-Demand Mobile Convenience
            </span>
          </div>
          <h2
            id="mobile-process-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            WE COME TO YOU.
          </h2>
          <p className="text-lg text-[#D9D9D9] font-normal leading-relaxed">
            Professional car care brought directly to your location.
          </p>
        </div>

        {/* Feature Layout with Image & 4-Step Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase: Mobile Technician in Driveway */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/20 bg-[#181818] shadow-2xl">
              <img
                src={USER_ASSETS.img2.local}
                alt={USER_ASSETS.img2.alt}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = USER_ASSETS.img2.remote;
                }}
                className="w-full h-auto aspect-[16/10] object-cover filter contrast-125 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

              {/* Bottom tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Mobile Automotive Care
                  </p>
                  <p className="text-[11px] text-[#AFAFAF]">
                    Home • Office • Driveway
                  </p>
                </div>
                <button
                  onClick={onBookNowClick}
                  className="px-3 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#D9D9D9] cursor-pointer"
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>

          {/* 4 Steps Column */}
          <div className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.step}
                id={`process-step-${step.step}`}
                className="flex items-start gap-4 sm:gap-6 p-5 sm:p-6 bg-[#181818] border border-white/10 rounded-sm hover:border-white/40 transition-colors duration-200"
              >
                {/* Step number badge & icon */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-sm bg-[#0A0A0A] border border-white/20 flex items-center justify-center mb-1">
                    {getStepIcon(index)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#AFAFAF]">
                    {step.step}
                  </span>
                </div>

                {/* Step details */}
                <div className="flex-1">
                  <h3
                    className="text-base sm:text-lg font-extrabold text-white uppercase tracking-wide mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#D9D9D9] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
