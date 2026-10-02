import { ScrollReveal } from './ScrollReveal';

const About = () => {
  return (
    <section className="w-full px-4 py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Content */}
        <ScrollReveal variant="left" className="lg:col-span-6 flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display-lg text-on-surface uppercase tracking-tight leading-[1.1]">
              About <br />
              <span className="text-tertiary-container">K D Machineries</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-secondary font-body-md leading-relaxed">
            <p>
              KD Machineries is a trusted partner for automobile workshop equipment, compressed air systems, and pneumatic solutions across North East India. We build on over five decades of industry legacy—bringing modern, reliable, and scalable solutions to today’s workshops and manufacturing floors.
            </p>
            <p className="text-base text-secondary/80">
              Our story begins in 1968, when our founding business launched as a trading unit for tools, garage equipment, and automotive parts. Over the years, we have evolved in step with the region’s expanding industrial and automotive sectors, developing deeper technical capabilities and a sharp understanding of customer needs.
            </p>
          </div>

          <div className="flex items-center gap-6 py-4">
            <div className="flex items-center gap-4 bg-surface-container-low p-5 rounded-2xl border border-outline-variant/10 shadow-sm transition-transform hover:-translate-y-1">
              <div className="text-4xl font-display-lg font-bold text-kd-red">
                1968
              </div>
              <div className="flex flex-col border-l border-outline-variant/20 pl-4">
                <span className="text-sm font-bold text-on-surface uppercase tracking-wider">Foundation</span>
                <span className="text-xs text-secondary mt-1">Decades of Excellence</span>
              </div>
            </div>
          </div>

          <div>
            <a href="#about" className="group/cta inline-flex items-center gap-3 px-8 py-3.5 rounded-lg bg-surface-container-high border border-outline-variant/20 hover:bg-surface-bright text-on-surface text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:-translate-y-0.5">
              <span>Read Our Full Story</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover/cta:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Right Side: Visual Editorial Composition */}
        <ScrollReveal variant="right" className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/10 group">
            <img 
              alt="K D Machineries Automotive Bay & Workshop Equipment" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1UTyBJIkdnyF1-Irmf4p-YG7US0f47Yx2HzLIX25RE_EN1_3ih33B6rlXjex19tkOHrIlXwvCz0rZxuQMlg_f6-algSgB20Dn8hu1rfT34CY6Gwllv5edMu6GubUxWC_pe_Jc7M_YtpQbaJhqqY5mbuyn5A3t3RbwJXq8Gmr6kB1BDAZQRahIkta3-HfXMVMB5QR9ylXtxPF5PDV1X6UpRZmj4vksNebyi4t9ksebh0rI3EbJeQF2bkPjc"
            />
            
            {/* Elegant overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80"></div>
            
            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
               <div className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl border border-outline-variant/20 shadow-lg">
                 <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-kd-red">engineering</span>
                   <span className="text-sm font-bold text-on-surface uppercase tracking-wider">Expert Team</span>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#39485a_2px,transparent_2px)] [background-size:12px_12px] opacity-40 -z-10 rounded-xl"></div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
