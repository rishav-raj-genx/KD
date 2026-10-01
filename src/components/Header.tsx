import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-container-lowest/95 backdrop-blur-md shadow-md' : 'bg-surface-container-lowest'}`}>
      {/* Top Bar - Hidden on mobile, visible on tablet+ */}
      <div className={`bg-surface-container-low transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-medium text-secondary">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-primary">call</span>
              <span>+91-9365246256 / +91-9435706902</span>
            </div>
            <span className="text-outline-variant hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-primary">mail</span>
              <span>info@kdmachineries.com</span>
            </div>
            <span className="text-outline-variant hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
              <span>Guwahati, Assam - 781009</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="font-semibold text-tertiary tracking-wider">ESTD 1968</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <a href="/" className="flex items-center gap-3 group">
          <img 
            alt="K D Machineries" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD87vkq07lDrEEILSSdkgAbYwADEaqqJN6Ed041zgeHuYKaSk8Y231iAy4YH-5PImxBaACyZhbe3NRKe1W7C4KHPUeGILLhmrNjfs4boz9_qCYgS1wcF_bjQA1YinIBAyi9g8oGvWfqpPSg2g6NpTPwl7s0D_2gS_JuyUX0tPBUOtidJp1odfShar4Ahh-z62ppisyc1AR5G9h-56UPO0N3jfChMddBxV6WO3TF7gsflpOYOgm7outwacvWTThchc36Qg" 
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-xl font-bold tracking-tight text-on-surface leading-none uppercase font-display-lg">
              K D MACHINERIES
            </span>
            <span className="text-[10px] text-primary tracking-widest uppercase mt-1 font-semibold">
              Automobile & Workshop Solutions
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          <a href="#" className="text-sm font-semibold uppercase text-primary transition-colors hover:text-primary-container">Home</a>
          
          <div className="relative group h-full flex items-center">
            <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-on-surface flex items-center gap-1 transition-colors">
              About <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">expand_more</span>
            </a>
            <div className="absolute top-16 left-0 hidden group-hover:flex flex-col w-48 bg-surface-container-high border border-outline-variant/30 shadow-xl py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-bright hover:text-on-surface transition-colors">About Us</a>
              <a href="#" className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-bright hover:text-on-surface transition-colors">About Founder</a>
            </div>
          </div>

          <div className="relative group h-full flex items-center">
            <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-on-surface flex items-center gap-1 transition-colors">
              Products <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">expand_more</span>
            </a>
            {/* Mega Menu */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 hidden group-hover:grid grid-cols-3 gap-6 w-[800px] bg-surface-container border border-outline-variant/30 shadow-2xl p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="space-y-3">
                <div className="flex items-center pb-2 border-b border-outline-variant/20">
                  <span className="text-sm text-primary uppercase font-bold">ATS ELGI</span>
                </div>
                <div className="flex flex-col space-y-2 text-sm text-secondary">
                  <a href="#" className="hover:text-primary transition-colors">Vehicle Washing System</a>
                  <a href="#" className="hover:text-primary transition-colors">Lifting Equipment</a>
                  <a href="#" className="hover:text-primary transition-colors">Body Shop Equipment</a>
                  <a href="#" className="hover:text-primary transition-colors">Wheel Service Equipment</a>
                  <a href="#" className="hover:text-primary transition-colors">Air Compressor Series</a>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center pb-2 border-b border-outline-variant/20">
                  <span className="text-sm text-tertiary uppercase font-bold">UNIPRO Piping</span>
                </div>
                <div className="flex flex-col space-y-2 text-sm text-secondary">
                  <a href="#" className="hover:text-tertiary transition-colors">Gasline Pipe System</a>
                  <a href="#" className="hover:text-tertiary transition-colors">PneuAir Aluminium Pipes</a>
                  <a href="#" className="hover:text-tertiary transition-colors">Brasstite Fittings</a>
                  <a href="#" className="hover:text-tertiary transition-colors">Heavy Duty Pipe Clamp</a>
                  <a href="#" className="hover:text-tertiary transition-colors">Brass Threaded Ball Valves</a>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center pb-2 border-b border-outline-variant/20">
                  <span className="text-sm text-secondary uppercase font-bold">Specialized & Spares</span>
                </div>
                <div className="flex flex-col space-y-2 text-sm text-secondary">
                  <a href="#" className="hover:text-on-surface transition-colors">Agnes Alpha Series</a>
                  <a href="#" className="hover:text-on-surface transition-colors">Car Detailing Chemistry</a>
                  <a href="#" className="hover:text-on-surface transition-colors">Workshop Spare Parts</a>
                  <a href="#" className="hover:text-on-surface transition-colors">Pneumatic Quick Couplers</a>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-on-surface transition-colors">Services</a>
          <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-on-surface transition-colors">Blog</a>
          <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-on-surface transition-colors">Contact</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a href="https://wa.me/919365246256" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-surface-container-high hover:bg-surface-bright text-on-surface transition-colors border border-outline-variant/20">
            <span className="material-symbols-outlined text-[18px] text-tertiary">chat</span>
          </a>
          <a href="#" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary-container hover:bg-inverse-primary text-on-primary text-sm font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5">
            <span className="material-symbols-outlined text-[18px]">request_quote</span>
            Get Quote
          </a>
          <button 
            className="lg:hidden p-2 text-on-surface hover:bg-surface-container-high rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface-container-lowest border-t border-outline-variant/20 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <nav className="flex flex-col p-4 gap-2">
            <a href="#" className="p-3 text-primary font-bold uppercase rounded-md bg-primary/10">Home</a>
            <a href="#" className="p-3 text-on-surface-variant uppercase font-medium hover:bg-surface-container rounded-md">About</a>
            <div className="p-3 rounded-md bg-surface-container-low flex flex-col gap-3">
              <span className="text-on-surface-variant uppercase font-medium">Products</span>
              <div className="pl-4 flex flex-col gap-2 border-l-2 border-outline-variant/30">
                <a href="#" className="text-sm text-secondary hover:text-primary py-1">ATS ELGI Equipment</a>
                <a href="#" className="text-sm text-secondary hover:text-tertiary py-1">UNIPRO Piping</a>
                <a href="#" className="text-sm text-secondary hover:text-on-surface py-1">Specialized Spares</a>
              </div>
            </div>
            <a href="#" className="p-3 text-on-surface-variant uppercase font-medium hover:bg-surface-container rounded-md">Services</a>
            <a href="#" className="p-3 text-on-surface-variant uppercase font-medium hover:bg-surface-container rounded-md">Contact Us</a>
            <a href="#" className="mt-2 p-3 text-center bg-primary-container text-on-primary rounded-md uppercase font-bold">Get a Quote</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
