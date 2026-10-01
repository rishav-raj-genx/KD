import { ScrollReveal } from './ScrollReveal';

const CLIENTS = [
  { id: 1, img: 'https://kdmachineries.com/images/partner/1751283958_client1.png' },
  { id: 2, img: 'https://kdmachineries.com/images/partner/1751283964_client2.png' },
  { id: 3, img: 'https://kdmachineries.com/images/partner/1751283958_client1.png' },
  { id: 4, img: 'https://kdmachineries.com/images/partner/1751283964_client2.png' },
  { id: 5, img: 'https://kdmachineries.com/images/partner/1751283958_client1.png' },
  { id: 6, img: 'https://kdmachineries.com/images/partner/1751283964_client2.png' },
];

const Network = () => {
  return (
    <section className="w-full px-4 py-16 bg-surface-container-lowest border-y border-outline-variant/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column */}
        <ScrollReveal variant="left" className="md:w-1/3 flex flex-col space-y-3 text-center md:text-left shrink-0">
          <h2 className="text-2xl md:text-3xl font-display-lg text-on-surface uppercase tracking-tight font-bold">
            Our Workshop <br />
            <span className="text-kd-red">Network</span>
          </h2>
          <p className="text-sm text-secondary font-body-md max-w-xs mx-auto md:mx-0">
            Trusted by top automobile brands and service centers across Northeast India.
          </p>
        </ScrollReveal>

        {/* Right Column: Seamless Marquee */}
        <ScrollReveal variant="right" className="md:w-2/3 w-full overflow-hidden relative">
          {/* Gradient masks for smooth fading on edges */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max group">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {/* First Set */}
              {CLIENTS.map((client, idx) => (
                <div key={`set1-${idx}`} className="w-32 md:w-40 h-20 mx-4 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                  <img 
                    src={client.img} 
                    alt="Client Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicated Set for Seamless Looping */}
              {CLIENTS.map((client, idx) => (
                <div key={`set2-${idx}`} className="w-32 md:w-40 h-20 mx-4 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0">
                  <img 
                    src={client.img} 
                    alt="Client Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Network;
