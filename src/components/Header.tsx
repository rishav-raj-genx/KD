import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const path = typeof window !== 'undefined' ? window.location.pathname : '/';


  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-container-lowest/95 backdrop-blur-md shadow-md' : 'bg-surface-container-lowest'}`}>
      {/* Top Bar - Hidden below 800px */}
      <div className={`hidden min-[800px]:block bg-surface-container-low transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Left: ESTD 1968 */}
          <div className="flex items-center">
            <span className="font-semibold text-kd-red text-xs tracking-widest uppercase">ESTD 1968</span>
          </div>
          {/* Right: Contact info */}
          <div className="flex items-center gap-4 text-xs font-medium text-secondary">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-kd-red">call</span>
              <span>+91-9365246256 / +91-9435706902</span>
            </div>
            <span className="text-outline-variant">|</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px] text-kd-red">mail</span>
              <span>info@kdmachineries.com</span>
            </div>
            <span className="text-outline-variant hidden lg:inline">|</span>
            <div className="hidden min-[1250px]:flex items-center gap-1.5">
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

        {/* Desktop Nav - Visible 1250px and up */}
        <nav className="hidden min-[1250px]:flex items-center gap-5 lg:gap-8 h-full">
          <a href="/" className={`text-[13px] font-bold uppercase transition-colors ${path === '/' ? 'text-kd-red' : 'text-white hover:text-kd-red'}`}>Home</a>
          
          <div className="relative group h-full flex items-center">
            <a href="#" className={`text-[13px] font-bold uppercase flex items-center gap-1 transition-colors ${path === '/about' ? 'text-kd-red' : 'text-white hover:text-kd-red'}`}>
              About <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">expand_more</span>
            </a>
            <div className="absolute top-[calc(100%-10px)] left-0 w-48 bg-white border border-gray-200 shadow-xl py-2 rounded-xl opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
              <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-kd-red transition-colors">About Us</a>
              <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-kd-red transition-colors">About Founder</a>
            </div>
          </div>

          <div className="relative group h-full flex items-center">
            {/* Active page styling logic: text-kd-red if active, else text-white hover:text-kd-red */}
            <a href="#" className={`text-[13px] font-bold uppercase flex items-center gap-1 transition-colors h-full px-4 ${path.startsWith('/product') ? 'text-kd-red' : 'text-white hover:text-kd-red'}`}>
              Our Product <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:rotate-180">expand_more</span>
            </a>
            {/* Mega Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] lg:w-[850px] bg-white border border-gray-200 shadow-xl p-6 lg:p-8 rounded-xl opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250 ease-out z-50 flex gap-6 lg:gap-8">
              {/* Column 1: ATS ELGI */}
              <div className="flex-1">
                <div className="pb-3 mb-3 border-b border-gray-200">
                  <span className="text-sm text-black font-bold uppercase tracking-wide">ATS ELGI</span>
                </div>
                <div className="flex flex-col space-y-2.5">
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Vehicle Washing System</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Lifting Equipment</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Body Shop Equipment</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Wheel Service Equipment</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Automated Testing Station Equipment</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Registered Vehicle Scrapping Facility</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Pneumatic Tools</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">AC Recovery And Recharge Unit</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Lube Equipment</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Exhaust Extraction Systems</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Mobile Service Unit</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Special Equipments</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Air Compressor</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">EV Equipment</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors uppercase">BATTERY MANAGEMENT</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Car Detailing Products</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Car Spare Parts</a>
                </div>
              </div>

              {/* Column 2: UNIPRO */}
              <div className="flex-1">
                <div className="pb-3 mb-3 border-b border-gray-200">
                  <span className="text-sm text-black font-bold uppercase tracking-wide">UNIPRO</span>
                </div>
                <div className="flex flex-col space-y-2.5">
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Gasline Pipe</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Metco Pipe</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Metco Plus Pipe</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">PneuAir Pipe</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Brasstite Fittings</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Griptite Fittings</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Pipe Clamp</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Brass Threaded Ball Valves</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Brass Gas Valves</a>
                </div>
              </div>

              {/* Column 3: Others */}
              <div className="flex-1">
                <div className="pb-3 mb-3 border-b border-gray-200">
                  <span className="text-sm text-black font-bold uppercase tracking-wide">Others</span>
                </div>
                <div className="flex flex-col space-y-2.5">
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Agnes Alpha</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Spare Parts</a>
                  <a href="#" className="text-[13px] text-gray-600 font-medium hover:text-kd-red transition-colors">Pneumatic Fittings</a>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="text-[13px] font-bold uppercase text-white hover:text-kd-red transition-colors">Our Services</a>
          <a href="#" className="text-[13px] font-bold uppercase text-white hover:text-kd-red transition-colors">Blog</a>
          <a href="#" className="text-[13px] font-bold uppercase text-white hover:text-kd-red transition-colors">Contact Us</a>
        </nav>

        {/* Socials & CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 h-full">
          {/* Socials - Visible 800px and up */}
          <div className="hidden min-[1250px]:flex items-center gap-3 pr-4 min-[1250px]:pr-6 border-r border-outline-variant/30 h-8">
            <a href="http://www.facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-kd-red transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="http://www.twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-kd-red transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="http://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-kd-red transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="http://www.youtube.com" target="_blank" rel="noreferrer" className="text-white hover:text-kd-red transition-colors">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <button className="text-white hover:text-kd-red transition-colors ml-2">
              <span className="material-symbols-outlined text-[18px]">search</span>
            </button>
          </div>

          <a href="#" className="hidden min-[1250px]:flex items-center gap-2 px-5 py-2.5 rounded bg-kd-red hover:bg-kd-red/90 text-white text-[13px] font-bold uppercase tracking-wide transition-all shadow-md">
            Get a Quote
          </a>
          <button 
            className="min-[1250px]:hidden p-2 text-white hover:text-kd-red rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`min-[1250px]:hidden absolute top-full left-0 w-full bg-surface-container-lowest border-t border-outline-variant/20 shadow-2xl overflow-y-auto transition-all duration-300 origin-top flex flex-col ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 max-h-[calc(100vh-80px)] visible' : 'opacity-0 -translate-y-2 max-h-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-4 gap-2 pb-10">
          <a href="#" className="p-3 text-white font-bold uppercase rounded hover:bg-surface-container transition-colors">Home</a>
          
          {/* About Accordion */}
          <div className="flex flex-col rounded overflow-hidden">
            <button 
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="flex items-center justify-between p-3 text-white font-bold uppercase hover:bg-surface-container transition-colors"
            >
              About
              <span className={`material-symbols-outlined transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180 text-kd-red' : ''}`}>expand_more</span>
            </button>
            <div className={`flex flex-col bg-background transition-all duration-300 ease-out overflow-hidden ${mobileAboutOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <a href="#" className="py-2.5 pl-6 text-sm text-secondary hover:text-white transition-colors">About Us</a>
              <a href="#" className="py-2.5 pl-6 pb-4 text-sm text-secondary hover:text-white transition-colors">About Founder</a>
            </div>
          </div>

          {/* Products Accordion */}
          <div className="flex flex-col rounded overflow-hidden">
            <button 
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className={`flex items-center justify-between p-3 font-bold uppercase transition-colors ${mobileProductsOpen ? 'bg-kd-red text-white' : 'text-white hover:bg-surface-container'}`}
            >
              Our Product
              <span className={`material-symbols-outlined transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180 text-white' : ''}`}>expand_more</span>
            </button>
            <div className={`flex flex-col bg-background transition-all duration-300 ease-out overflow-hidden ${mobileProductsOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {/* ATS ELGI */}
              <div className="pt-4 pb-2 px-5 border-b border-white/5 mx-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">ATS ELGI</span>
              </div>
              <div className="flex flex-col py-2">
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Vehicle Washing System</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Lifting Equipment</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Body Shop Equipment</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Wheel Service Equipment</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Automated Testing Station Equipment</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Registered Vehicle Scrapping Facility</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Pneumatic Tools</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">AC Recovery And Recharge Unit</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Lube Equipment</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Exhaust Extraction Systems</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Mobile Service Unit</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Special Equipments</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Air Compressor</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">EV Equipment</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors uppercase">BATTERY MANAGEMENT</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Car Detailing Products</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Car Spare Parts</a>
              </div>
              
              {/* UNIPRO */}
              <div className="pt-4 pb-2 px-5 border-b border-white/5 mx-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">UNIPRO</span>
              </div>
              <div className="flex flex-col py-2">
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Gasline Pipe</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Metco Pipe</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Metco Plus Pipe</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">PneuAir Pipe</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Brasstite Fittings</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Griptite Fittings</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Pipe Clamp</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Brass Threaded Ball Valves</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Brass Gas Valves</a>
              </div>

              {/* Others */}
              <div className="pt-4 pb-2 px-5 border-b border-white/5 mx-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Others</span>
              </div>
              <div className="flex flex-col py-2 pb-4">
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Agnes Alpha</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Spare Parts</a>
                <a href="#" className="py-2 pl-6 pr-4 text-sm text-secondary hover:text-white transition-colors">Pneumatic Fittings</a>
              </div>
            </div>
          </div>

          <a href="#" className="p-3 text-white font-bold uppercase rounded hover:bg-surface-container transition-colors">Our Services</a>
          <a href="#" className="p-3 text-white font-bold uppercase rounded hover:bg-surface-container transition-colors">Blog</a>
          <a href="#" className="p-3 text-white font-bold uppercase rounded hover:bg-surface-container transition-colors">Contact Us</a>
          
          <div className="flex gap-5 p-3 mt-4 justify-center border-t border-outline-variant/20 pt-6">
            <a href="http://www.facebook.com" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="http://www.twitter.com" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="http://www.linkedin.com" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="http://www.youtube.com" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors">
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          <a href="#" className="mt-4 p-3 text-center bg-kd-red hover:bg-kd-red/90 text-white rounded uppercase font-bold transition-colors mx-3">Get a Quote</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
