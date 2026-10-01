import { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    image: 'https://kdmachineries.com/images/slider/1758188304_1.webp',
  },
  {
    id: 2,
    image: 'https://kdmachineries.com/images/slider/1758188311_2.webp',
  },
  {
    id: 3,
    image: 'https://kdmachineries.com/images/slider/1758188320_3.webp',
  },
  {
    id: 4,
    image: 'https://kdmachineries.com/images/slider/1758188328_4.webp',
  },
  {
    id: 5,
    image: 'https://kdmachineries.com/images/slider/1758188337_5.webp',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[800px] flex items-center bg-surface-container-lowest overflow-hidden pt-20">
      {/* Dynamic Background Image Slider */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={slide.image} 
            alt="K D Machineries Equipment" 
            className="w-full h-full object-cover object-center"
          />
          {/* Elegant dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
        </div>
      ))}

      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Strong B2B Copy */}
        <div className="lg:col-span-7 flex flex-col space-y-6 lg:pr-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
              Authorized Distributor
            </span>
            <span className="text-outline-variant text-sm">|</span>
            <span className="text-xs text-secondary uppercase tracking-widest font-semibold">Since 1968</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface uppercase tracking-tight leading-[1.1] font-display-lg">
              Premium Industrial & <br />
              <span className="text-primary-container bg-clip-text">Workshop Equipment</span>
            </h1>
            <p className="text-base md:text-lg text-secondary max-w-2xl font-body-lg leading-relaxed">
              Leading supplier of auto garage equipment, compressed air systems, and pneumatic solutions in Guwahati, Assam. Serving automotive businesses across Northeast India with uncompromising quality.
            </p>
          </div>

          {/* Key Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              { icon: 'verified', title: 'Certified', desc: 'Equipment' },
              { icon: 'support_agent', title: 'Expert', desc: 'Support' },
              { icon: 'precision_manufacturing', title: 'Precision', desc: 'Engineered' },
              { icon: 'handyman', title: 'Service', desc: 'Network' },
            ].map((prop, idx) => (
              <div key={idx} className="bg-surface-container-low/80 backdrop-blur-sm border border-outline-variant/10 p-4 rounded-xl flex flex-col items-start transform transition-transform hover:-translate-y-1 hover:bg-surface-container">
                <span className={`material-symbols-outlined text-[24px] mb-2 ${idx % 2 === 0 ? 'text-primary' : 'text-tertiary'}`}>
                  {prop.icon}
                </span>
                <span className="text-xs uppercase text-on-surface font-bold tracking-wider">{prop.title}</span>
                <span className="text-xs text-secondary mt-0.5">{prop.desc}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <a href="tel:+919365246256" className="px-8 py-4 rounded-lg bg-primary-container hover:bg-inverse-primary text-on-primary text-sm uppercase tracking-widest font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,84,71,0.3)] hover:shadow-[0_0_30px_rgba(255,84,71,0.5)] hover:-translate-y-0.5">
              <span className="material-symbols-outlined text-[20px]">call</span>
              Contact Us Today
            </a>
            <a href="#products" className="px-8 py-4 rounded-lg bg-surface-container-high border border-outline-variant/30 hover:bg-surface-bright text-on-surface text-sm uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:-translate-y-0.5">
              Explore Products
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Carousel Indicator / Focus Area */}
        <div className="lg:col-span-5 relative hidden lg:flex flex-col items-end justify-end h-full mt-20">
           {/* Custom Slide Controls */}
           <div className="bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/20 p-4 rounded-2xl flex flex-col gap-4">
             <div className="flex items-center gap-3">
               {SLIDES.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setCurrentSlide(idx)}
                   className={`h-1.5 transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-8 bg-primary-container' : 'w-2 bg-secondary-container hover:bg-outline'}`}
                   aria-label={`Go to slide ${idx + 1}`}
                 />
               ))}
             </div>
             <div className="flex gap-2 justify-end">
               <button 
                 onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
                 className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors border border-outline-variant/20"
               >
                 <span className="material-symbols-outlined">chevron_left</span>
               </button>
               <button 
                 onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
                 className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors border border-outline-variant/20"
               >
                 <span className="material-symbols-outlined">chevron_right</span>
               </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
