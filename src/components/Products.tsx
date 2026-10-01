

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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div className="flex flex-col">
                <h2 className="text-3xl font-display-lg text-on-surface font-bold tracking-tight">
                  {cat.name}
                </h2>
                <div className="w-12 h-1 bg-kd-red mt-3"></div>
              </div>
              <div className="max-w-xl text-secondary text-sm font-body-md leading-relaxed">
                We offer a diverse range of quality products including compressor oil, nitrogen tyre inflators, and essential machinery accessories, ensuring durability, reliability, and precision for industries.
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {PRODUCTS.filter(p => p.category === cat.id).map((product) => (
                <a 
                  key={product.id} 
                  href={`/product/${product.id}`} 
                  className="group flex flex-col bg-surface-container-low border border-outline-variant/10 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-kd-red/50 hover:-translate-y-1"
                >
                  {/* Product Image Area */}
                  <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center overflow-hidden border-b border-outline-variant/5">
                    <img 
                      src="/image.png" 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Compact Brand Badge */}
                    <div className="absolute top-2 left-2 z-20">
                      <span className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm shadow-sm ${
                        product.category === 'unipro' 
                          ? 'bg-surface-container-highest text-on-surface'
                          : product.category === 'ats' 
                            ? 'bg-on-surface text-surface' 
                            : 'bg-surface-variant text-on-surface'
                      }`}>
                        {product.category === 'unipro' ? 'UNIPRO' : product.category === 'ats' ? 'ATS ELGI' : 'OTHERS'}
                      </span>
                    </div>
                  </div>

                  {/* Product Details Area */}
                  <div className="p-4 flex flex-col flex-grow bg-surface-container-lowest relative">
                    <h3 className="text-sm font-bold text-on-surface mb-2 group-hover:text-kd-red transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="mt-auto pt-3 flex items-center justify-between border-t border-outline-variant/10">
                      <span className="w-6 h-1 bg-kd-red/20 group-hover:bg-kd-red transition-colors"></span>
                      <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-kd-red transition-colors">arrow_forward</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
