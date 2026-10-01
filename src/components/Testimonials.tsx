const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sonia Saxena',
    image: 'https://kdmachineries.com/images/testimonial/1751283819_team-2.jpg',
    text: 'Excellent service and quality products! K D Machineries delivers reliability and professionalism every time.'
  },
  {
    id: 2,
    name: 'Amit Sharma',
    image: 'https://kdmachineries.com/images/testimonial/1751283773_team-5.jpg',
    text: 'Prompt delivery, helpful staff, and quality products! K D Machineries is a trusted partner always.'
  },
  {
    id: 3,
    name: 'Mohan Sharma',
    image: 'https://kdmachineries.com/images/testimonial/1751283736_team-4.jpg',
    text: 'Highly recommend K D Machineries for top-notch products and seamless service every single time!'
  }
];

const Testimonials = () => {
  return (
    <section className="w-full px-4 py-24 bg-background relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="text-sm uppercase tracking-widest text-primary font-bold">Client Success</span>
            <span className="w-8 h-[2px] bg-primary"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display-lg text-on-surface uppercase tracking-tight">
            Trusted by <br className="md:hidden" />
            <span className="text-primary-container">Professionals</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 relative group transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              {/* Quote Mark Decoration */}
              <span className="material-symbols-outlined text-[60px] text-surface-bright absolute top-6 right-6 opacity-30 group-hover:text-primary/20 transition-colors pointer-events-none">
                format_quote
              </span>
              
              <div className="flex flex-col h-full gap-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-outline-variant/20 p-1">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-headline-sm font-bold text-on-surface">{testimonial.name}</h4>
                    <div className="flex text-tertiary mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[14px]">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-secondary text-base font-body-lg leading-relaxed mt-2 italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section embedded to save space and create a powerful closing */}
        <div className="mt-24 bg-primary-container rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(255,84,71,0.2)] relative overflow-hidden">
          {/* Decorative shapes inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex flex-col space-y-3 max-w-2xl relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-display-lg text-on-primary font-bold uppercase tracking-tight">
              Do you need any help?
            </h3>
            <p className="text-on-primary/90 text-lg font-body-md">
              Need expert help? We’re here to support, guide, and provide reliable solutions for your needs!
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <a href="/contact" className="px-8 py-4 rounded-lg bg-surface-container-lowest text-primary text-sm uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
              <span className="material-symbols-outlined text-[20px]">headset_mic</span>
              Contact Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
