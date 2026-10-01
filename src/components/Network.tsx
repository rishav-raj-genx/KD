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
    <section className="w-full px-4 py-16 bg-surface-container-lowest border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        <div className="md:w-1/3 flex flex-col space-y-3 text-center md:text-left shrink-0">
          <h2 className="text-2xl md:text-3xl font-display-lg text-on-surface uppercase tracking-tight">
            Our Workshop <br />
            <span className="text-tertiary">Network</span>
          </h2>
          <p className="text-sm text-secondary font-body-md">
            Trusted by top automobile brands and service centers across Northeast India.
          </p>
        </div>

        {/* Endless scrolling / flex wrap of logos */}
        <div className="md:w-2/3 w-full">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12 opacity-70">
            {CLIENTS.map((client, idx) => (
              <div key={`${client.id}-${idx}`} className="w-24 md:w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <img 
                  src={client.img} 
                  alt="Client Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Network;
