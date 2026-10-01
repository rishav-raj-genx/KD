const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'ats', name: 'ATS ELGI Equipment' },
  { id: 'unipro', name: 'UNIPRO Piping' },
  { id: 'spares', name: 'Specialized Spares' }
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Automatic Car Washer',
    category: 'ats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDv0UT-P67NWC0KfcUifbPOIrXheQJqactQ-lrkXlYlaTjYYWYRR7GPK2yZKcPH_oYoVJYah-ZEFCGf6Z2RFdTQG6y1fJesxwNLYelN95ThuEyCYh8aVHpOLRlSk-FJXdjlKHBztwgjZznbl_JoX8BAzT0fAFGSSarYbJ59W0v5KcT32Esz5Lhl-m9vp4C05gAs6q-No7hIL2y1gnzpaiu5a4c4huw6Ggx1Ml65-yWuZ48zVyAflm7YE0QTpJRma_iDw',
  },
  {
    id: 2,
    name: 'Automatic Brushless Car Washer',
    category: 'ats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcE7iV7evFMQs2j27tyWlpno2KUJg6KMzK_K9ITrcMP3OlQrfI0nkGyknnbyw6DQhQ4lzIm-6D30oyae5vr5hGEAqUN5SzM1DNOcW4wawwX8OQTCtfMbWdawXGGFvdQP_NWaypW0IJnrpcge04-ikssuOZwBkUXpIWeNEO749mO9BjVTr0YBcSbxiCBQVMroo29Hm61isKZPwwGkEtpAkTexGDRGEJ5hzFqmyH_9sturxvdoOU6eVVP9R1Pr_oZCcpiw',
  },
  {
    id: 3,
    name: 'New Gen Under Chassis Washer',
    category: 'ats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChUfkOPWLPODVAj7F9n8vYC-8rE6mAVvc5wcI2ZF-7r8B3P650bwNJ7ddQzJ1wnI2dbU1tGbPzmxmchHQ6r1_GlVBOk3fD6TKabnk3J0-qV67m4_h1bm2nOf2sjOfTlgpeHxjIROIS7rjNC_pE0Bi8yqxoOM7dRRkzeXQHtbfKvfHqJ4x8HlWv0KcQUzNHbwQ4gYdGtQZ_JXkG14ml8_CkGDLGXD52AY6WCjz6Mv8mrW8fDfQ-Cmaus1dGkAPmaYnY0Q',
  },
  {
    id: 4,
    name: 'Two Post Lift 4000kg',
    category: 'ats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO_kZ2X1RQ58LjDZ-kFABqtsKpL17VntiEiWpCb6wkrREPUkFCchjf-hybc5ki8pkZqIwyewf_oU7MWFbMahAf3O9MetkgmtfYM0x-IzEyDVYpYDk_isd0DFY71SBq0-VQd-lnS57JEannDJQ0WYfSxZmW-p85Ev5PRzfnOMuSiMnfLOJz3DGaFCVxn3q0Ammz-0k66VbY0cSGhXQh_Can5qafQpyOxCOJs_mt9m5k0exXH2UcWI0M5LofUSDFDDDLCQ',
  },
  {
    id: 5,
    name: 'Single Post Lift 4 Ton',
    category: 'ats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8ybHXcfDFRNZn_CO_mT58odi3cNO9mB0ZUPSSAtEzTYV-Ix244hURGNO0-4nXFk8YeEpqYvaZ5ZxAVTF1NTweb0JaE7JVAUPqzzJ2U0dUbwfZ6y57L437iY9znPLWQQiptVO9C3kEq5q_2yTtQXp25Pi9ll4ybZT7iXK0ZaUMtjUWN-7Mu5HxdI8hcAnbvNr2tC0fd-8oJAAzmJ_t-nIesGOBrepcp_R2h0WUmBxV9lWezRqzQghdHX9i8gib8g7jyQ',
  },
  {
    id: 6,
    name: 'Dent Puller Pro+ Spot Welder',
    category: 'ats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2OYE-LnIJj3ShwGrcp-14k8RZ__Lvm04tP_nkfkobu6OkwVP4eKs1LO4mm8_qTaz7FVdK5LkD9xPmf_hF7JEsxmCNWu4JPdTFfH1uU7X_D8aLlNrGWcBN-MWIbJS2z8ON1K7plSM5zZJdsXArrfhhuQATz6Xwp3tlS6IY9QJ72w1uzteS3sN9zzzqc-F44c0AQa3XW3uu8Wvcald2lXU6mYesmhrWvF08Tceo2tTO_kqTbeEWucw3k7x6QZug7oH6AA',
  },
  {
    id: 7,
    name: 'Power Washer 115C / 115T',
    category: 'ats',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyEXV9WoZ9stztXkXq8IYOyc397nF-TikWbr5_TGvy4ijBLYSWs7LinvwT7i6ZX2jaTFnbLm650OwiWTYIeO06mG0c5oIYv_2T3DACY04DHPfWNWdB3xlWK94KM4GOaHuNNYESFAxoZ9rgyVSf-2rFx9v2wrUpXxSlf7AD2bZ5Go46m21fhycR3G2LCCIZSKHvfEQNUaEpibhzy19qaFH0L9myt53OLEiHwPUVeu-Ev4S-PoTNtSxcihMy89zUO-W16w',
  },
  {
    id: 8,
    name: 'UNIPRO Piping Solutions',
    category: 'unipro',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCrYGUC5l_4XpZGbSICuK__4RGDw2_Sh9ufXMMZ17M4WMi3AuId4fHZ0DB1hwIj9T1VLWbGvCXHwXGtXaOZ27R_uNOmVRENChVFXHrgofilr6Er4Z9OnPhZDoaTx5uqPZTnBsfHUTdf3VCAEoMZ2X13-bT4ZY2boHWDhz3uSfkYbvo5XPjkHLdCpz94TJDU8Gpd79VIoWaJUc2I8p_Wv635k5xmnb52TI_f-8xDyuAdoxub7DqrVVKIiOFwslyCBfOMA',
  }
];

const Products = () => {
  return (
    <section id="products" className="w-full px-4 py-24 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-tertiary"></span>
              <span className="text-sm uppercase tracking-widest text-tertiary font-bold">Our Catalog</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display-lg text-on-surface uppercase tracking-tight">
              Industrial <br />
              <span className="text-primary-container">Equipment</span>
            </h2>
          </div>
          <div className="max-w-md text-secondary text-sm font-body-md leading-relaxed border-l-2 border-outline-variant/20 pl-4">
            We offer a diverse range of quality products including vehicle washing systems, lifting equipment, and essential machinery accessories, ensuring durability, reliability, and precision for industries.
          </div>
        </div>

        {/* Categories Tab (Visual only for redesign purposes) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-outline-variant/10 pb-4">
          {CATEGORIES.map((cat, idx) => (
            <button 
              key={cat.id} 
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-colors ${
                idx === 0 
                  ? 'bg-primary-container text-on-primary' 
                  : 'bg-transparent text-secondary hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid - Less dense, larger images, premium feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col bg-surface-container border border-outline-variant/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:border-primary/30">
              {/* Product Image Area */}
              <div className="relative w-full aspect-square bg-surface-container-highest p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#343a41_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
                
                {/* Brand Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full ${
                    product.category === 'unipro' 
                      ? 'bg-tertiary-container text-on-tertiary-container'
                      : 'bg-surface-dim text-secondary border border-outline-variant/30'
                  }`}>
                    {product.category === 'unipro' ? 'UNIPRO' : 'ATS ELGI'}
                  </span>
                </div>
              </div>

              {/* Product Details Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-headline-md text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-outline-variant/10">
                  <a href="#" className="text-xs uppercase tracking-wider font-bold text-secondary group-hover:text-primary transition-colors flex items-center gap-1">
                    View Details
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]">mail</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 flex justify-center">
          <a href="#" className="px-8 py-3.5 rounded-lg border-2 border-outline-variant/30 hover:border-primary text-on-surface hover:text-primary text-sm uppercase tracking-widest font-bold transition-colors">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
