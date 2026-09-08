import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SAMPLE_REVIEWS } from '../data/businessData';
import { Star, ChevronLeft, ChevronRight, Pause, Play, AlertCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const totalReviews = SAMPLE_REVIEWS.length;

  // Reduced motion preference detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Pause when browser tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab hidden
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Gentle Autoplay Timer
  useEffect(() => {
    if (!isPlaying || isHovered || isFocused || prefersReducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      if (!document.hidden) {
        handleNext();
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isFocused, prefersReducedMotion, handleNext]);

  // Touch swipe support
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews"
      className="py-20 lg:py-28 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-6">
          <div>
            <h2
              id="reviews-heading"
              className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              CLIENT FEEDBACK
            </h2>
            <p className="text-sm sm:text-base text-[#D9D9D9]">
              Representative client perspectives on mobile car washing service in Los Angeles.
            </p>
          </div>

          {/* Controls: Play/Pause, Prev, Next */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              id="reviews-toggle-play-btn"
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? 'Pause review slider' : 'Resume review slider'}
              className="p-2 bg-[#181818] border border-white/20 hover:border-white text-white rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              title={isPlaying ? 'Pause slider' : 'Play slider'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              id="reviews-prev-btn"
              type="button"
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="p-2 bg-[#181818] border border-white/20 hover:border-white text-white rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              id="reviews-next-btn"
              type="button"
              onClick={handleNext}
              aria-label="Next reviews"
              className="p-2 bg-[#181818] border border-white/20 hover:border-white text-white rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mandatory Sample Content Disclosure Notice */}
        <div
          id="reviews-preview-notice"
          className="mb-8 p-3.5 bg-[#181818] border border-white/20 rounded-sm flex items-start sm:items-center gap-3"
        >
          <AlertCircle className="w-4 h-4 text-[#AFAFAF] flex-shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs text-[#D9D9D9] leading-normal flex-1">
            <span className="font-bold text-white uppercase tracking-wider mr-2">
              SAMPLE REVIEW — PREVIEW CONTENT:
            </span>
            <span>
              These entries represent illustrative template feedback for preview demonstration. Verified public reviews can be integrated directly.
            </span>
          </div>
        </div>

        {/* Slider Container with Touch Support */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Responsive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show 3 consecutive cards rotated by currentIndex for desktop */}
            {[0, 1, 2].map((offset) => {
              const reviewIndex = (currentIndex + offset) % totalReviews;
              const review = SAMPLE_REVIEWS[reviewIndex];
              const isHiddenOnTablet = offset === 2; // only 2 on tablet
              const isHiddenOnMobile = offset >= 1; // only 1 on mobile

              return (
                <div
                  key={`${review.id}-${offset}`}
                  id={`review-card-${review.id}`}
                  className={`bg-[#181818] border border-white/15 rounded-sm p-6 flex flex-col justify-between hover:border-white/40 transition-colors duration-200 ${
                    isHiddenOnMobile ? 'hidden sm:hidden lg:flex' : isHiddenOnTablet ? 'hidden lg:flex' : 'flex'
                  }`}
                >
                  <div>
                    {/* Stars & Sample Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-white text-white"
                          />
                        ))}
                      </div>

                      <span className="text-[10px] font-mono tracking-widest text-[#AFAFAF] uppercase px-1.5 py-0.5 bg-[#0A0A0A] border border-white/10 rounded-xs">
                        Sample
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-sm text-[#D9D9D9] leading-relaxed italic mb-6">
                      “{review.text}”
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        {review.name}
                      </p>
                      <p className="text-[11px] text-[#AFAFAF]">
                        {review.location}
                      </p>
                    </div>

                    <span className="text-[10px] uppercase tracking-wider text-[#AFAFAF] bg-[#0A0A0A] px-2 py-1 border border-white/10 rounded-xs">
                      {review.serviceUsed}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {SAMPLE_REVIEWS.map((_, index) => (
            <button
              key={index}
              id={`review-dot-${index}`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
