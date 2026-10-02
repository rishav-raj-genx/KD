import { useState, useEffect, useCallback, useRef } from 'react';

import { ScrollReveal } from './ScrollReveal';

const SLIDES = [
  {
    id: 1,
    image: 'https://kdmachineries.com/images/slider/1758188304_1.webp',
    alt: 'K D Machineries — Auto Garage Equipment & Workshop Solutions',
  },
  {
    id: 2,
    image: 'https://kdmachineries.com/images/slider/1758188311_2.webp',
    alt: 'K D Machineries — Industrial Equipment & Machinery',
  },
  {
    id: 3,
    image: 'https://kdmachineries.com/images/slider/1758188320_3.webp',
    alt: 'K D Machineries — Compressed Air & Pneumatic Solutions',
  },
  {
    id: 4,
    image: 'https://kdmachineries.com/images/slider/1758188328_4.webp',
    alt: 'K D Machineries — Vehicle Lifting & Washing Equipment',
  },
  {
    id: 5,
    image: 'https://kdmachineries.com/images/slider/1758188337_5.webp',
    alt: 'K D Machineries — Piping & Workshop Infrastructure',
  },
];

const AUTOPLAY_INTERVAL = 5000;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const goTo = useCallback((index: number) => {
    setCurrentSlide((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Keyboard accessibility
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    },
    [prev, next],
  );

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setIsPaused(true);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const handleTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaX.current < -threshold) next();
    else if (touchDeltaX.current > threshold) prev();
    setIsPaused(false);
  };

  return (
    <section
      className="relative w-full bg-background overflow-hidden pt-[120px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero image carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Contained carousel module — matches content width */}
      <ScrollReveal variant="up" className="w-full max-w-7xl mx-auto px-4 pb-12">
        <div className="relative w-full rounded-xl overflow-hidden bg-background flex flex-col shadow-2xl">
          {/* Container with smooth padding around the image */}
          <div className="relative w-full p-6 md:p-10 lg:p-12">
            {/* Aspect ratio container for the image */}
            <div className="relative w-full pt-[56%] md:pt-[46%] lg:pt-[43.75%]">
              {SLIDES.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
                  aria-hidden={index !== currentSlide}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 w-full h-full object-contain object-center select-none ${index === currentSlide ? 'animate-kenburns' : ''}`}
                    draggable={false}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation arrows (inside the padding, over the image area) */}
            <button
              onClick={prev}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-surface-container-highest/80 backdrop-blur-sm border border-outline-variant/20 flex items-center justify-center text-white hover:bg-kd-red hover:text-white hover:border-kd-red transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-kd-red"
              aria-label="Previous slide"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-surface-container-highest/80 backdrop-blur-sm border border-outline-variant/20 flex items-center justify-center text-white hover:bg-kd-red hover:text-white hover:border-kd-red transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-kd-red"
              aria-label="Next slide"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>

          {/* Slide indicators - Placed BELOW the image on the same dark background */}
          <div className="w-full flex items-center justify-center gap-2 pb-8 bg-background">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-kd-red ${
                  currentSlide === idx
                    ? 'w-8 h-2 bg-kd-red shadow-[0_0_8px_rgba(255,22,23,0.4)]'
                    : 'w-2 h-2 bg-surface-variant hover:bg-outline-variant/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={currentSlide === idx ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Hero;
