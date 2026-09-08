import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_INFO, USER_ASSETS } from '../data/businessData';
import { MapPin, Phone, ArrowDown, Truck } from 'lucide-react';

interface HeroProps {
  onBookWashClick: () => void;
  onViewServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookWashClick, onViewServicesClick }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-20 pb-12"
    >
      {/* Background Animated Cinematic Automotive Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 origin-center"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.05, 1],
                  x: ['0%', '-1.5%', '0%'],
                  y: ['0%', '-0.8%', '0%'],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            id="hero-background-image"
            src={USER_ASSETS.bgAnim.local}
            alt={USER_ASSETS.bgAnim.alt}
            referrerPolicy="no-referrer"
            loading="eager"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== USER_ASSETS.bgAnim.remote) {
                target.src = USER_ASSETS.bgAnim.remote;
              }
            }}
            className="w-full h-full object-cover object-center filter contrast-125 brightness-[0.46]"
          />
        </motion.div>

        {/* Cinematic Gloss Sweep Animation across vehicle contour */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            }}
            aria-hidden="true"
          />
        )}

        {/* Cinematic Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#0A0A0A_95%)] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 max-w-3xl">
            {/* Location & Mobile Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#181818]/90 border border-white/20 rounded-sm mb-6 backdrop-blur-sm shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#AFAFAF]" />
              <span className="text-xs font-semibold tracking-widest text-[#D9D9D9] uppercase">
                {BUSINESS_INFO.location} • Mobile Car Care
              </span>
            </div>

            {/* Major Hero Headline */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PREMIUM CAR CARE,
              <span className="block text-[#D9D9D9] font-extrabold">
                WHEREVER YOU ARE.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-lg sm:text-xl text-[#D9D9D9] font-normal leading-relaxed mb-10 max-w-2xl"
            >
              Professional mobile car washing delivered directly to your home, office, or wherever your vehicle is.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                id="hero-primary-cta"
                onClick={onBookWashClick}
                className="bg-white text-black hover:bg-[#D9D9D9] active:bg-[#AFAFAF] px-8 py-4 text-sm font-extrabold uppercase tracking-widest rounded-sm transition-all duration-200 shadow-lg hover:shadow-white/10 transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                BOOK YOUR WASH
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onViewServicesClick}
                className="bg-[#181818]/60 hover:bg-white/10 text-white border border-white/40 hover:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm transition-all duration-200 text-center cursor-pointer backdrop-blur-xs"
              >
                VIEW SERVICES
              </button>
            </div>

            {/* Quick Direct Call & Feature Ribbon */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#AFAFAF]">
              <a
                id="hero-phone-call-link"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#D9D9D9] transition-colors"
              >
                <span className="w-8 h-8 rounded-sm bg-[#181818] border border-white/20 flex items-center justify-center text-white">
                  <Phone className="w-4 h-4" />
                </span>
                <span>Call or Text {BUSINESS_INFO.phone}</span>
              </a>

              <a
                id="hero-facebook-link"
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tony's Car Care Facebook"
                className="inline-flex items-center gap-2 text-[#D9D9D9] hover:text-white font-semibold transition-colors"
                title="Visit Tony's Car Care on Facebook"
              >
                <span className="w-8 h-8 rounded-sm bg-[#181818] border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
                <span className="hidden sm:inline">Facebook</span>
              </a>

              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                <span className="text-[#D9D9D9] tracking-wider uppercase text-xs">Direct to Your Location</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                <span className="text-[#D9D9D9] tracking-wider uppercase text-xs">On-Demand Service</span>
              </div>
            </div>
          </div>

          {/* On-Demand Mobile Service Active Tag (Desktop) */}
          <div className="hidden lg:col-span-4 lg:flex flex-col items-end">
            <div className="w-full max-w-xs p-4 bg-[#181818]/90 border border-white/20 rounded-sm backdrop-blur-md shadow-2xl">
              <div className="relative aspect-[16/10] rounded-xs overflow-hidden mb-3 border border-white/15">
                <img
                  src={USER_ASSETS.img1.local}
                  alt={USER_ASSETS.img1.alt}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = USER_ASSETS.img1.remote;
                  }}
                  className="w-full h-full object-cover filter contrast-125"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 border border-white/20 rounded-xs text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Truck className="w-3 h-3 text-white" />
                  <span>On-Site Van</span>
                </div>
              </div>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                We Come Directly To You
              </p>
              <p className="text-[11px] text-[#AFAFAF] leading-relaxed mb-3">
                Fully equipped mobile detailing unit servicing homes, apartments, and workplaces in Los Angeles.
              </p>
              <button
                onClick={onBookWashClick}
                className="w-full py-2 bg-white text-black text-[11px] font-bold uppercase tracking-wider rounded-xs hover:bg-[#D9D9D9] transition-colors cursor-pointer text-center"
              >
                Schedule Mobile Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        id="hero-scroll-indicator"
        onClick={onViewServicesClick}
        aria-label="Scroll down to services"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#AFAFAF] hover:text-white transition-colors p-2 hidden md:flex flex-col items-center gap-1 cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
