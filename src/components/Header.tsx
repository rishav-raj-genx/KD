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
      {/* Top Bar */}
      <div className={`bg-surface-container-low transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Left: ESTD 1968 */}
          <div className="flex items-center">
            <span className="font-semibold text-kd-red text-xs tracking-widest uppercase">ESTD 1968</span>
          </div>
          {/* Right: Contact info — progressively revealed */}
          <div className="flex items-center gap-4 text-xs font-medium text-secondary">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-kd-red">call</span>
              <span>+91-9365246256 / +91-9435706902</span>
            </div>
            <span className="text-outline-variant hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-kd-red">mail</span>
              <span>info@kdmachineries.com</span>
            </div>
            <span className="text-outline-variant hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-kd-red">location_on</span>
              <span>Guwahati, Assam - 781009</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <img 
            alt="K D Machineries" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD87vkq07lDrEEILSSdkgAbYwADEaqqJN6Ed041zgeHuYKaSk8Y231iAy4YH-5PImxBaACyZhbe3NRKe1W7C4KHPUeGILLhmrNjfs4boz9_qCYgS1wcF_bjQA1YinIBAyi9g8oGvWfqpPSg2g6NpTPwl7s0D_2gS_JuyUX0tPBUOtidJp1odfShar4Ahh-z62ppisyc1AR5G9h-56UPO0N3jfChMddBxV6WO3TF7gsflpOYOgm7outwacvWTThchc36Qg" 
          />
        </a>


        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          <a href="#" className="text-sm font-semibold uppercase text-kd-red transition-colors hover:text-kd-red/80">Home</a>
          
          <div className="relative group h-full flex items-center">
            <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-kd-red flex items-center gap-1 transition-colors">
              About <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">expand_more</span>
            </a>
            <div className="absolute top-16 left-0 hidden group-hover:flex flex-col w-48 bg-surface-container-high border border-outline-variant/30 shadow-xl py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-bright hover:text-kd-red transition-colors">About Us</a>
              <a href="#" className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-bright hover:text-kd-red transition-colors">About Founder</a>
            </div>
          </div>

          <div className="relative group h-full flex items-center">
            <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-kd-red flex items-center gap-1 transition-colors">
              Our Product <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">expand_more</span>
            </a>
            {/* Mega Menu */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 hidden group-hover:grid grid-cols-3 gap-6 w-[800px] bg-surface-container border border-outline-variant/30 shadow-2xl p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="space-y-3">
                <div className="flex items-center pb-2 border-b border-outline-variant/20">
                  <span className="text-sm text-kd-red uppercase font-bold">ATS ELGI</span>
                </div>
                <div className="flex flex-col space-y-2 text-sm text-secondary">
                  <a href="#" className="hover:text-kd-red transition-colors">Vehicle Washing System</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Lifting Equipment</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Body Shop Equipment</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Wheel Service Equipment</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Air Compressor Series</a>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center pb-2 border-b border-outline-variant/20">
                  <span className="text-sm text-tertiary uppercase font-bold">UNIPRO Piping</span>
                </div>
                <div className="flex flex-col space-y-2 text-sm text-secondary">
                  <a href="#" className="hover:text-kd-red transition-colors">Gasline Pipe System</a>
                  <a href="#" className="hover:text-kd-red transition-colors">PneuAir Aluminium Pipes</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Brasstite Fittings</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Heavy Duty Pipe Clamp</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Brass Threaded Ball Valves</a>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center pb-2 border-b border-outline-variant/20">
                  <span className="text-sm text-secondary uppercase font-bold">Specialized & Spares</span>
                </div>
                <div className="flex flex-col space-y-2 text-sm text-secondary">
                  <a href="#" className="hover:text-kd-red transition-colors">Agnes Alpha Series</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Car Detailing Chemistry</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Workshop Spare Parts</a>
                  <a href="#" className="hover:text-kd-red transition-colors">Pneumatic Quick Couplers</a>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-kd-red transition-colors">Our Services</a>
          <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-kd-red transition-colors">Blog</a>
          <a href="#" className="text-sm font-semibold uppercase text-on-surface-variant hover:text-kd-red transition-colors">Contact Us</a>
        </nav>

        {/* Socials & CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3 pr-4 border-r border-outline-variant/30">
            <a href="http://www.facebook.com" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-kd-red transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="http://www.twitter.com" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-kd-red transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="http://www.linkedin.com" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-kd-red transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="http://www.youtube.com" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-kd-red transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <button className="text-on-surface-variant hover:text-kd-red transition-colors">
              <span className="material-symbols-outlined text-[18px]">search</span>
            </button>
          </div>

          <a href="#" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-kd-red hover:bg-kd-red/90 text-white text-xs font-bold uppercase tracking-wide transition-all shadow-lg hover:-translate-y-0.5">
            Get a Quote
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
            <a href="#" className="p-3 text-kd-red font-bold uppercase rounded-md bg-kd-red/10">Home</a>
            <a href="#" className="p-3 text-on-surface-variant uppercase font-medium hover:bg-surface-container rounded-md">About</a>
            <div className="p-3 rounded-md bg-surface-container-low flex flex-col gap-3">
              <span className="text-on-surface-variant uppercase font-medium">Our Product</span>
              <div className="pl-4 flex flex-col gap-2 border-l-2 border-outline-variant/30">
                <a href="#" className="text-sm text-secondary hover:text-kd-red py-1">ATS ELGI Equipment</a>
                <a href="#" className="text-sm text-secondary hover:text-kd-red py-1">UNIPRO Piping</a>
                <a href="#" className="text-sm text-secondary hover:text-kd-red py-1">Specialized Spares</a>
              </div>
            </div>
            <a href="#" className="p-3 text-on-surface-variant uppercase font-medium hover:bg-surface-container rounded-md">Our Services</a>
            <a href="#" className="p-3 text-on-surface-variant uppercase font-medium hover:bg-surface-container rounded-md">Blog</a>
            <a href="#" className="p-3 text-on-surface-variant uppercase font-medium hover:bg-surface-container rounded-md">Contact Us</a>
            
            <div className="flex gap-4 p-3 mt-2 border-t border-outline-variant/20">
              <a href="http://www.facebook.com" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-kd-red">
                 <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="http://www.twitter.com" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-kd-red">
                 <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="http://www.linkedin.com" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-kd-red">
                 <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="http://www.youtube.com" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-kd-red">
                 <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            <a href="#" className="mt-2 p-3 text-center bg-kd-red text-white rounded-md uppercase font-bold">Get a Quote</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
