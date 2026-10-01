const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mohan Sharma',
    image: 'https://kdmachineries.com/images/testimonial/1751283736_team-4.jpg',
    text: 'Highly recommend K D Machineries for top-notch products and seamless service every single time!'
  },
  {
    id: 2,
    name: 'Sonia Saxena',
    image: 'https://kdmachineries.com/images/testimonial/1751283819_team-2.jpg',
    text: 'Excellent service and quality products! K D Machineries delivers reliability and professionalism every time.'
  },
  {
    id: 3,
    name: 'Amit Sharma',
    image: 'https://kdmachineries.com/images/testimonial/1751283773_team-5.jpg',
    text: 'Prompt delivery, helpful staff, and quality products! K D Machineries is a trusted partner always.'
  }
];

const Testimonials = () => {
  return (
    <section className="w-full px-4 py-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-display-lg text-on-surface font-bold">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-kd-red mt-4"></div>
        </div>

        {/* Testimonials Grid & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-surface-container-lowest border border-outline-variant/10 rounded-md p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-outline-variant/10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-4">{testimonial.name}</h4>
              <p className="text-secondary text-sm font-body-md leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}

          {/* CTA Box */}
          <div className="bg-kd-red p-8 flex flex-col justify-center text-white h-full shadow-lg rounded-md">
            <h3 className="text-2xl font-bold uppercase mb-4 leading-tight">
              Do you need any<br />help?
            </h3>
            <p className="text-white/90 text-sm mb-8 leading-relaxed">
              Need expert help? We're here to support, guide, and provide reliable solutions for your needs!
            </p>
            <a href="/contact" className="px-6 py-3 bg-white text-on-surface text-sm font-bold uppercase tracking-wide text-center transition-colors hover:bg-surface-container-low">
              Contact Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
