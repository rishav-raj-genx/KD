const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-highest text-on-surface pt-20 pb-8 mt-20 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                alt="K D Machineries" 
                className="h-10 w-auto object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD87vkq07lDrEEILSSdkgAbYwADEaqqJN6Ed041zgeHuYKaSk8Y231iAy4YH-5PImxBaACyZhbe3NRKe1W7C4KHPUeGILLhmrNjfs4boz9_qCYgS1wcF_bjQA1YinIBAyi9g8oGvWfqpPSg2g6NpTPwl7s0D_2gS_JuyUX0tPBUOtidJp1odfShar4Ahh-z62ppisyc1AR5G9h-56UPO0N3jfChMddBxV6WO3TF7gsflpOYOgm7outwacvWTThchc36Qg" 
              />
            </div>
            <p className="text-sm font-body-md text-secondary leading-relaxed max-w-xs">
              KD Machineries is a trusted partner for automobile workshop equipment, compressed air systems, and pneumatic solutions across North East India since 1968.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/20">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface">Official Partner: ATS ELGI & UNIPRO</span>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-on-surface">Useful Links</h4>
            <ul className="space-y-3 text-sm text-secondary">
              {['Home', 'About Us', 'Blog', 'Contact Us', 'Location'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant group-hover:bg-primary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-on-surface">Our Products</h4>
            <ul className="space-y-3 text-sm text-secondary">
              {['Vehicle Washing System', 'Lifting Equipments', 'Wheel Service Equipment', 'Body Shop Equipment', 'EV Equipment'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-tertiary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant group-hover:bg-tertiary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-on-surface">Reach Us</h4>
            <div className="space-y-4 text-sm text-secondary">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">location_on</span>
                <span className="leading-relaxed">46, KRB Road, Bharalumukh, <br /> Guwahati, Assam - 781009 India</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">call</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919365246256" className="hover:text-on-surface transition-colors">+91-9365246256</a>
                  <a href="tel:+919435706902" className="hover:text-on-surface transition-colors">+91-9435706902</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">mail</span>
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@kdmachineries.com" className="hover:text-on-surface transition-colors">info@kdmachineries.com</a>
                  <a href="mailto:kdmachineries@gmail.com" className="hover:text-on-surface transition-colors">kdmachineries@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary text-center md:text-left">
            Copyright © 2026-2027 K D Machineries All Rights Reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>Managed by Vyapar Infotech® Best Digital Marketing Agency
          </p>
          <div className="flex items-center gap-3">
            {[
              { id: 'fb', icon: 'thumb_up' },
              { id: 'tw', icon: 'alternate_email' },
              { id: 'yt', icon: 'smart_display' },
              { id: 'in', icon: 'work' },
            ].map((social) => (
              <a 
                key={social.id}
                href="#" 
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary hover:bg-primary-container hover:text-on-primary transition-all hover:-translate-y-0.5"
                aria-label={`Follow on ${social.id}`}
              >
                <span className="material-symbols-outlined text-[16px]">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
