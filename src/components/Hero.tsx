import { useState, useEffect, useCallback, useRef } from 'react';

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
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-lowest shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          {/* Aspect ratio: ~16:9 on mobile, ~16:7 on desktop — shows full banner content */}
          <div className="relative w-full pt-[56%] md:pt-[46%] lg:pt-[43.75%]">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
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
                  className="absolute inset-0 w-full h-full object-contain object-center select-none"
                  draggable={false}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-surface-container-lowest/70 backdrop-blur-sm border border-outline-variant/20 flex items-center justify-center text-on-surface hover:bg-brand-red hover:text-white hover:border-brand-red transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              aria-label="Previous slide"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={next}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 md:w-11 md:h-11 rounded-full bg-surface-container-lowest/70 backdrop-blur-sm border border-outline-variant/20 flex items-center justify-center text-on-surface hover:bg-brand-red hover:text-white hover:border-brand-red transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              aria-label="Next slide"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red ${
                    currentSlide === idx
                      ? 'w-7 h-2 bg-brand-red'
                      : 'w-2 h-2 bg-on-surface/30 hover:bg-on-surface/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={currentSlide === idx ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
