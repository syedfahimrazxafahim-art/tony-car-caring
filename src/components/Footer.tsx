import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/businessData';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      aria-label="Site Footer"
      className="bg-[#0A0A0A] border-t border-white/10 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo and Brand Summary */}
          <div>
            <Logo size="sm" />
            <p className="text-xs text-[#AFAFAF] mt-3 max-w-sm">
              Professional mobile car washing and detailing delivered directly to your location in {BUSINESS_INFO.location}.
            </p>
          </div>

          {/* Minimal Navigation */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Services', href: '#services' },
              { label: 'Process', href: '#mobile-service' },
              { label: 'About', href: '#about' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs font-semibold uppercase tracking-wider text-[#D9D9D9] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact & Facebook */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
            <a
              id="footer-phone-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-white hover:text-[#D9D9D9] bg-[#181818] border border-white/15 px-3 py-2 rounded-sm"
              title={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#AFAFAF]" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>

            {/* Official Facebook Link (Supplied in instructions) */}
            <a
              id="footer-facebook-link"
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tony's Car Care on Facebook (opens in new tab)"
              className="flex items-center gap-2 text-white hover:text-[#D9D9D9] bg-[#181818] border border-white/15 px-3 py-2 rounded-sm"
            >
              {/* Facebook Icon */}
              <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="font-semibold">Facebook</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AFAFAF] gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-[#AFAFAF]" />
            <span>{BUSINESS_INFO.location}</span>
          </div>

          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
