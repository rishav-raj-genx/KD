

import { ScrollReveal } from './ScrollReveal';

const CATEGORIES = [
  { id: 'ats', name: 'ATS ELGI Products' },
  { id: 'unipro', name: 'UNIPRO Products' },
  { id: 'other', name: 'Other Products' }
];

const PRODUCTS = [
  // ATS ELGI Products
  { id: 1, name: 'Automatic Car Washer', category: 'ats' },
  { id: 2, name: 'Automatic Brushless Car Washer', category: 'ats' },
  { id: 3, name: 'New Gen Under Chassis Washer', category: 'ats' },
  { id: 4, name: 'Under Chassis Washer', category: 'ats' },
  { id: 5, name: 'Automatic Bus Washer - 1', category: 'ats' },
  { id: 6, name: 'Automatic Bus Washer - 2', category: 'ats' },
  { id: 7, name: 'Automatic Two Wheeler Washer', category: 'ats' },
  { id: 8, name: 'Single Plunger - LL03', category: 'ats' },
  { id: 9, name: 'Wash kit', category: 'ats' },
  { id: 10, name: 'Triple Plunger - New Gen', category: 'ats' },
  { id: 11, name: 'Triple Plunger - P36/30', category: 'ats' },
  { id: 12, name: 'Triple Plunger - P12/28', category: 'ats' },
  
  // UNIPRO Products
  { id: 13, name: 'Gasline Pipe', category: 'unipro' },
  { id: 14, name: 'Metco Pipe', category: 'unipro' },
  { id: 15, name: 'Metco Plus Pipe', category: 'unipro' },
  { id: 16, name: 'PneuAir Pipe', category: 'unipro' },
  { id: 17, name: 'Brasstite Fittings', category: 'unipro' },
  { id: 18, name: 'Griptite Fittings', category: 'unipro' },
  { id: 19, name: 'Pipe Clamp', category: 'unipro' },
  { id: 20, name: 'Brass Threaded Ball Valves', category: 'unipro' },

  // Other Products
  { id: 21, name: 'Body Sealant(white)', category: 'other' },
  { id: 22, name: 'Windshield Sealant(black)', category: 'other' },
  { id: 23, name: 'Gasket Sealant(black/red/clear)', category: 'other' },
  { id: 24, name: 'Butyl Sealant Tape(black)', category: 'other' },
  { id: 25, name: 'OPS Masking Film', category: 'other' },
  { id: 26, name: 'Floor Filter', category: 'other' },
  { id: 27, name: 'Ceiling Filter', category: 'other' },
  { id: 28, name: 'Masking Tape 12 mm/24mm', category: 'other' },
];

const Products = () => {
  return (
    <section id="products" className="w-full bg-surface-container-lowest">
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="w-full px-4 py-16 border-t border-outline-variant/10 first:border-t-0">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <ScrollReveal variant="up" className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div className="flex flex-col">
                <h2 className="text-3xl font-display-lg text-on-surface font-bold tracking-tight">
                  {cat.name}
                </h2>
                <div className="w-12 h-1 bg-kd-red mt-3"></div>
              </div>
              <div className="max-w-xl text-secondary text-sm font-body-md leading-relaxed">
                We offer a diverse range of quality products including compressor oil, nitrogen tyre inflators, and essential machinery accessories, ensuring durability, reliability, and precision for industries.
              </div>
            </ScrollReveal>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {PRODUCTS.filter(p => p.category === cat.id).map((product, index) => {
                const colIndex = index % 4;
                let variant: 'left' | 'right' | 'up' = 'up';
                if (colIndex === 0) variant = 'left';
                else if (colIndex === 3) variant = 'right';

                return (
                  <ScrollReveal 
                    key={product.id} 
                    variant={variant} 
                    delay={colIndex * 100}
                    className="h-full flex flex-col"
                  >
                    <a 
                      href={`/product/${product.id}`} 
                      className="group flex flex-col bg-background border border-outline-variant/10 rounded-md overflow-hidden p-4 transition-all duration-300 hover:border-kd-red h-full"
                    >
                      {/* BRAND TAG - Above the image */}
                      <div className="mb-3">
                        <span className="inline-block text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-surface-container-highest text-on-surface group-hover:text-kd-red transition-colors">
                          {product.category === 'unipro' ? 'UNIPRO' : product.category === 'ats' ? 'ATS ELGI' : 'OTHERS'}
                        </span>
                      </div>

                      {/* FULL PRODUCT IMAGE - Contained with padding */}
                      <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center overflow-hidden rounded-md mb-4">
                        <img 
                          src="/image.png" 
                          alt={product.name} 
                          className="w-full h-full object-contain p-2 transition-all duration-300 group-hover:scale-[1.02] group-hover:brightness-[1.02]"
                        />
                      </div>

                      {/* PRODUCT NAME & ARROW */}
                      <div className="flex items-center justify-between mt-auto">
                        <h3 className="text-sm font-bold text-on-surface group-hover:text-kd-red transition-colors line-clamp-2 pr-2">
                          {product.name}
                        </h3>
                        <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-kd-red group-hover:translate-x-1 transition-all duration-300 shrink-0">arrow_forward</span>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
