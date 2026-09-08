/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MobileProcessSection } from './components/MobileProcessSection';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ServiceId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId | ''>('mobile-car-wash');

  // Scroll spy to detect active section for navbar highlighting
  useEffect(() => {
    const sections = ['home', 'services', 'mobile-service', 'about', 'why-us', 'gallery', 'reviews', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceId: ServiceId) => {
    setSelectedServiceId(serviceId);
    const bookingForm = document.getElementById('contact');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF] flex flex-col selection:bg-white selection:text-black">
      {/* Sticky Compact Header */}
      <Navbar
        activeSection={activeSection}
        onBookNowClick={scrollToBooking}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Cinematic Hero */}
        <Hero
          onBookWashClick={scrollToBooking}
          onViewServicesClick={scrollToServices}
        />

        {/* 2. Structured Services */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* 3. Mobile Service Feature (We Come To You) */}
        <MobileProcessSection
          onBookNowClick={scrollToBooking}
        />

        {/* 4. Concise Company About */}
        <AboutSection
          onBookNowClick={scrollToBooking}
        />

        {/* 5. Why Tony's Car Care Editorial Benefits */}
        <WhyUsSection />

        {/* 6. Detailing Showcase & Accessible Lightbox Gallery */}
        <GallerySection />

        {/* 7. Client Feedback Slider (Sample Content Disclosed) */}
        <ReviewsSection />

        {/* 8. Booking and Contact Form with Preselection */}
        <BookingSection
          selectedServiceId={selectedServiceId}
          onServiceSelect={setSelectedServiceId}
        />

        {/* 9. Cinematic Final Call To Action */}
        <FinalCtaSection
          onBookWashClick={scrollToBooking}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
