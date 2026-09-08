import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/businessData';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onBookNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onBookNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll detection for compact styling and subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        ref={navRef}
        id="site-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] py-3 shadow-lg shadow-black/40'
            : 'bg-[#0A0A0A] border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="navbar-logo-link"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded py-1"
            aria-label="Tony's Car Care Home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  id={`nav-link-${targetId}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-sm font-medium tracking-wider uppercase transition-colors duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? 'text-white font-semibold border-b-2 border-white'
                      : 'text-[#D9D9D9] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Phone link, Facebook, and Book Now */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="navbar-phone-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D9D9D9] hover:text-white transition-colors duration-200 px-2 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              title={`Call Tony's Car Care at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#AFAFAF]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Facebook Link */}
            <a
              id="navbar-facebook-link"
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tony's Car Care on Facebook"
              className="p-1.5 text-[#D9D9D9] hover:text-white bg-[#181818] hover:bg-[#262626] border border-white/15 rounded-sm transition-colors"
              title="Visit Tony's Car Care on Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <button
              id="navbar-book-now-btn"
              onClick={onBookNowClick}
              className="bg-white text-black hover:bg-[#D9D9D9] active:bg-[#AFAFAF] px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] focus-visible:ring-white shadow-sm cursor-pointer"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Trigger & Quick Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-facebook-btn"
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tony's Car Care Facebook"
              className="p-2 text-white bg-[#181818] border border-white/15 rounded-sm hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              id="mobile-quick-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label={`Call Tony's Car Care at ${BUSINESS_INFO.phone}`}
              className="p-2 text-white bg-[#181818] border border-white/15 rounded-sm hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              ref={menuButtonRef}
              id="mobile-menu-toggle-btn"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white hover:text-[#D9D9D9] bg-[#181818] border border-white/15 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay (100dvh, Accessible, Scroll-Locked) */}
      <div
        id="mobile-menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
        style={{ height: '100dvh' }}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        <div className="relative w-full h-full bg-[#0A0A0A] flex flex-col justify-between p-6 overflow-y-auto safe-area-inset">
          {/* Header row in mobile overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Logo size="md" />
            <button
              ref={closeButtonRef}
              id="mobile-menu-close-btn"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-[#AFAFAF] bg-[#181818] border border-white/20 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links in Mobile overlay */}
          <div className="py-8 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.name}
                  id={`mobile-nav-${targetId}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-2xl font-bold uppercase tracking-wider py-2 px-1 transition-colors ${
                    isActive ? 'text-white border-l-4 border-white pl-4' : 'text-[#D9D9D9] hover:text-white'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Bottom CTAs in Mobile overlay */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              id="mobile-drawer-book-now-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNowClick();
              }}
              className="w-full bg-white text-black py-4 text-sm font-extrabold uppercase tracking-widest rounded-sm shadow-md hover:bg-[#D9D9D9] active:bg-[#AFAFAF] transition-colors"
            >
              BOOK YOUR WASH
            </button>

            <a
              id="mobile-drawer-phone-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#181818] text-white border border-white/20 rounded-sm font-semibold text-sm tracking-wider uppercase hover:border-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#AFAFAF]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <a
              id="mobile-drawer-facebook-link"
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 bg-[#181818] text-[#D9D9D9] hover:text-white border border-white/15 rounded-sm font-semibold text-xs tracking-wider uppercase hover:border-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Visit Us On Facebook</span>
            </a>

            <p className="text-[11px] text-center text-[#AFAFAF] tracking-wider uppercase">
              {BUSINESS_INFO.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
