import React from 'react';
import { SERVICES } from '../data/businessData';
import { ServiceId } from '../types';
import { Droplets, Sparkles, Car, Shield, Flame, Crown, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'Car':
        return <Car className="w-5 h-5 text-white" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-white" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-white" />;
      case 'Crown':
        return <Crown className="w-5 h-5 text-white" />;
      default:
        return <Car className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Automotive Services"
      className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-b border-[#181818] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <h2
              id="services-heading"
              className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              CAR CARE SERVICES
            </h2>
            <p className="text-base sm:text-lg text-[#D9D9D9]">
              Professional mobile washing and detailing delivered directly to your driveway, office parking, or designated location.
            </p>
          </div>

          <div className="text-xs uppercase tracking-widest text-[#AFAFAF] font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>Mobile Service • Los Angeles, CA</span>
          </div>
        </div>

        {/* Services Structured Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = service.id === 'mobile-car-wash' || service.id === 'full-detail';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`flex flex-col justify-between bg-[#181818] border ${
                  isFeatured ? 'border-white/30 shadow-lg shadow-black/60' : 'border-white/10'
                } rounded-sm p-6 sm:p-8 hover:border-white/50 transition-colors duration-200 relative group`}
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-sm bg-[#0A0A0A] border border-white/15 flex items-center justify-center group-hover:border-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#AFAFAF]">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white uppercase tracking-normal mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#D9D9D9] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Bullet checklist */}
                  <ul className="space-y-2.5 mb-8 pt-4 border-t border-white/10">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AFAFAF]">
                        <Check className="w-3.5 h-3.5 text-white flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    id={`book-service-btn-${service.id}`}
                    onClick={() => onSelectServiceForBooking(service.id)}
                    className="w-full flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-white text-white hover:text-black border border-white/20 hover:border-white py-3 px-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>BOOK THIS SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
