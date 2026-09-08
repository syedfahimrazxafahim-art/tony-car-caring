import React from 'react';
import { BENEFITS } from '../data/businessData';

export const WhyUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      aria-label="Why Choose Tony's Car Care"
      className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/10">
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            WHY TONY’S CAR CARE
          </h2>
          <p className="text-base sm:text-lg text-[#D9D9D9] max-w-2xl">
            A customer-centered mobile approach designed for seamless convenience and consistent presentation.
          </p>
        </div>

        {/* Clean Editorial Layout with Subtle Silver Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative pt-6 border-t border-[#333333] hover:border-white transition-colors duration-300 group"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#AFAFAF] group-hover:text-white transition-colors">
                  0{index + 1}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#737373]">
                  Standard of Service
                </span>
              </div>

              <h3
                className="text-xl sm:text-2xl font-black text-white uppercase tracking-normal mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {benefit.title}
              </h3>

              <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
