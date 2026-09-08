import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const categories = ['All', 'Mobile Service', 'Exterior', 'Interior', 'Wax & Gloss'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showNextImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  const showPrevImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  // Lightbox keyboard navigation: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, showNextImage, showPrevImage]);

  // Focus management when lightbox opens
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
  }, [activeLightboxIndex]);

  const currentItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section
      id="gallery"
      aria-label="Automotive Detailing Gallery"
      className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              DETAILING SHOWCASE
            </h2>
            <p className="text-base sm:text-lg text-[#D9D9D9] max-w-xl">
              High-contrast automotive presentation highlighting exterior hand washing, interior cabin cleanliness, and reflective gloss.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery category filters">
            {categories.map((category) => (
              <button
                key={category}
                id={`gallery-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-[#181818] text-[#D9D9D9] hover:text-white border border-white/15 hover:border-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Informative Note: Illustrative Photography Note */}
        <div className="mb-8 flex items-center gap-2 text-xs text-[#AFAFAF] bg-[#181818]/60 border border-white/10 px-4 py-2 rounded-sm w-fit">
          <Camera className="w-3.5 h-3.5 text-white flex-shrink-0" />
          <span>Illustrative automotive detailing photography showcasing service standards and surface finish.</span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              className="group relative bg-[#181818] border border-white/15 rounded-sm overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
              tabIndex={0}
              role="button"
              aria-label={`View full image: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (item.fallbackSrc) e.currentTarget.src = item.fallbackSrc;
                  }}
                  className="w-full h-full object-cover filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Hover overlay action */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-black/70 border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <h3
                    className="text-sm font-bold text-white uppercase tracking-wider"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#AFAFAF] px-1.5 py-0.5 bg-black/50 border border-white/10 rounded-xs">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-[#AFAFAF] line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {currentItem && (
        <div
          ref={lightboxRef}
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
        >
          {/* Top Bar with title and Close button */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4 max-w-7xl mx-auto w-full">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#AFAFAF]">
                {currentItem.category} • {activeLightboxIndex! + 1} of {filteredItems.length}
              </p>
              <h4
                className="text-base sm:text-lg font-bold text-white uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {currentItem.title}
              </h4>
            </div>

            <button
              ref={closeButtonRef}
              id="lightbox-close-btn"
              onClick={closeLightbox}
              className="p-2 bg-[#181818] border border-white/20 hover:border-white text-white rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              aria-label="Close image lightbox (Escape)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image Viewport with Previous & Next controls */}
          <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4 overflow-hidden">
            <button
              id="lightbox-prev-btn"
              onClick={showPrevImage}
              aria-label="Previous image (Left Arrow)"
              className="absolute left-2 sm:left-4 z-10 p-3 bg-black/70 hover:bg-black text-white border border-white/20 hover:border-white rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              id="lightbox-active-image"
              src={currentItem.src}
              alt={currentItem.alt}
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (currentItem.fallbackSrc) e.currentTarget.src = currentItem.fallbackSrc;
              }}
              className="max-h-[70vh] max-w-full object-contain filter contrast-125 border border-white/10 rounded-sm shadow-2xl"
            />

            <button
              id="lightbox-next-btn"
              onClick={showNextImage}
              aria-label="Next image (Right Arrow)"
              className="absolute right-2 sm:right-4 z-10 p-3 bg-black/70 hover:bg-black text-white border border-white/20 hover:border-white rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar Caption */}
          <div className="max-w-3xl mx-auto text-center border-t border-white/15 pt-3 w-full">
            <p className="text-xs sm:text-sm text-[#D9D9D9]">
              {currentItem.caption}
            </p>
            <p className="text-[10px] text-[#AFAFAF] mt-1 uppercase tracking-widest">
              Keyboard: [Esc] Close • [←] Previous • [→] Next
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
