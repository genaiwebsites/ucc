'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductItem {
  id: string;
  category: string;
  name: string;
  code: string;
  specs: { label: string; value: string }[];
  applications: string;
  availability: string;
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [modalDone, setModalDone] = useState(false);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'synthetic', name: 'Synthetic Elastomers' },
    { id: 'natural', name: 'Natural Rubber' },
    { id: 'carbon', name: 'Carbon Black' },
    { id: 'chemicals', name: 'Rubber Chemicals' }
  ];

  const products: ProductItem[] = [
    {
      id: 'sbr-1502',
      category: 'synthetic',
      name: 'Styrene Butadiene Rubber (SBR 1502 / 1712)',
      code: 'Cold Emulsion SBR · ASTM D1418',
      specs: [
        { label: 'Mooney Viscosity', value: '48 – 58 (ML 1+4 @ 100°C)' },
        { label: 'Bound Styrene', value: '23.5% ± 1.0%' },
        { label: 'Volatile Matter', value: '< 0.50% max' }
      ],
      applications: 'Tire Treads, Footwear Soles, Conveyor Belting, Mechanical Moldings',
      availability: 'Ex-Stock (Kolkata/Dankuni) & Direct Indents'
    },
    {
      id: 'nbr-3305',
      category: 'synthetic',
      name: 'Nitrile Rubber (NBR 3305 / 3345)',
      code: 'Medium-High ACN · ASTM D3187',
      specs: [
        { label: 'Acrylonitrile Content', value: '33.0% – 34.5%' },
        { label: 'Mooney Viscosity', value: '45 – 55 (ML 1+4 @ 100°C)' },
        { label: 'Ash Content', value: '< 0.8% max' }
      ],
      applications: 'Fuel & Oil Hoses, Hydraulic O-Rings, Seals, Printing Rollers',
      availability: 'Ex-Stock (Dankuni Storage)'
    },
    {
      id: 'epdm-4045',
      category: 'synthetic',
      name: 'EPDM Terpolymer (EPDM 4045 / 5050)',
      code: 'High Diene EPDM · ASTM D3900',
      specs: [
        { label: 'Ethylene Content', value: '55% – 60%' },
        { label: 'ENB Diene Content', value: '4.0% – 5.0%' },
        { label: 'Mooney Viscosity', value: '40 – 48 (ML 1+4 @ 125°C)' }
      ],
      applications: 'Automotive Weatherstrips, Radiator Hoses, Roofing, Cables',
      availability: 'Ex-Stock & FCL Indenting'
    },
    {
      id: 'pbr-1220',
      category: 'synthetic',
      name: 'Polybutadiene Rubber (PBR 1220 High-Cis)',
      code: 'High-Cis 1,4-Polybutadiene · ASTM D1646',
      specs: [
        { label: 'Cis-1,4 Microstructure', value: '≥ 96.0% min' },
        { label: 'Mooney Viscosity', value: '42 – 48 (ML 1+4 @ 100°C)' },
        { label: 'Glass Transition', value: '-106°C' }
      ],
      applications: 'Radial Tires, High-Resilience Footwear, Conveyor Covers',
      availability: 'Ex-Stock (Kolkata)'
    },
    {
      id: 'natural-rss',
      category: 'natural',
      name: 'Natural Rubber (RSS-1 / RSS-3 / RSS-4)',
      code: 'Ribbed Smoked Sheet · IS 4588',
      specs: [
        { label: 'Dirt Content', value: '< 0.05% (RSS-1)' },
        { label: 'Ash Content', value: '< 0.50% max' },
        { label: 'Plasticity Po', value: '≥ 30 min' }
      ],
      applications: 'Heavy Commercial Tires, Anti-Vibration Mounts, Conveyors',
      availability: 'Ex-Stock (Kolkata Depot)'
    },
    {
      id: 'natural-isnr',
      category: 'natural',
      name: 'Technically Specified Rubber (ISNR-10 / 20)',
      code: 'Block Crumb Rubber · TSR Standard',
      specs: [
        { label: 'PRI Retention', value: '≥ 50 (ISNR 10)' },
        { label: 'Volatile Matter', value: '< 0.80% max' },
        { label: 'Dirt Retention', value: '< 0.10% max' }
      ],
      applications: 'Tire Retreading, Rollers, Footwear, Industrial Moldings',
      availability: 'Ex-Stock & Bulk Indent'
    },
    {
      id: 'carbon-n220',
      category: 'carbon',
      name: 'Furnace Carbon Black (N220 / ISAF)',
      code: 'Super Abrasion Furnace · ASTM D1765',
      specs: [
        { label: 'Iodine Number', value: '121 ± 5 g/kg' },
        { label: 'Oil Absorption (DBP)', value: '114 ± 5 cm³/100g' },
        { label: 'NSA Surface Area', value: '116 ± 5 m²/g' }
      ],
      applications: 'High-Performance Tire Treads, Heavy-Duty Belting',
      availability: 'Ex-Stock (Dankuni) & Bulk Bags'
    },
    {
      id: 'carbon-n330',
      category: 'carbon',
      name: 'Furnace Carbon Black (N330 / HAF)',
      code: 'High Abrasion Furnace · ASTM D1765',
      specs: [
        { label: 'Iodine Number', value: '82 ± 5 g/kg' },
        { label: 'Oil Absorption (DBP)', value: '102 ± 5 cm³/100g' },
        { label: 'Pour Density', value: '380 ± 20 kg/m³' }
      ],
      applications: 'Truck Tires, Industrial Belting Covers, Extrusions',
      availability: 'Ex-Stock (25kg Bags / 1MT Sacks)'
    },
    {
      id: 'chem-accelerators',
      category: 'chemicals',
      name: 'Vulcanizing Accelerators (CBS / TBBS / MBT / TMTD)',
      code: 'Sulfenamide & Thiazole Curing Systems',
      specs: [
        { label: 'Active Purity', value: '≥ 98.0% min' },
        { label: 'Melting Point (CBS)', value: '98.0°C – 102.0°C' },
        { label: 'Loss on Drying', value: '< 0.30% max' }
      ],
      applications: 'Tire Curing, Industrial Extrusions, Footwear Vulcanization',
      availability: 'Ex-Stock (Kolkata/Dankuni)'
    },
    {
      id: 'chem-activators',
      category: 'chemicals',
      name: 'Active Zinc Oxide 99.5% & Stearic Acid',
      code: 'Activator & Lubricant System · IS 3399',
      specs: [
        { label: 'ZnO Content', value: '≥ 99.5% min' },
        { label: 'Lead Impurity', value: '< 0.005% max' },
        { label: 'Surface Area', value: '4.5 – 6.0 m²/g' }
      ],
      applications: 'All Crosslinked Rubber & Tire Compounding',
      availability: 'Ex-Stock (25kg Bags)'
    }
  ];

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.applications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="products" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-3">
              Inventory &amp; Specifications
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Chemical &amp; Polymer Catalog
            </h2>
          </div>
          
          {/* Simple Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by grade..."
              className="w-full pl-9 pr-3 py-2 text-xs font-sans bg-card border border-border rounded-sm text-foreground focus:outline-hidden focus:border-foreground"
            />
          </div>
        </div>

        {/* Clean Text-Tab Navigation */}
        <div className="flex items-center gap-6 border-b border-border mb-10 overflow-x-auto pb-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-sans uppercase tracking-wider transition-colors pb-2 -mb-3 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'text-foreground font-bold border-b-2 border-amber'
                  : 'text-muted-foreground hover:text-foreground font-medium'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid - Clean Rectangular Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-card border border-border p-6 rounded-sm flex flex-col justify-between hover:border-foreground/40 transition-colors"
              >
                <div>
                  <div className="text-[11px] font-mono text-muted-foreground mb-1">
                    {item.code}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">
                    {item.name}
                  </h3>

                  {/* Clean Specs Table */}
                  <div className="space-y-1.5 py-3 border-y border-border mb-4 text-xs font-mono">
                    {item.specs.map((s) => (
                      <div key={s.label} className="flex justify-between">
                        <span className="text-muted-foreground">{s.label}:</span>
                        <span className="text-foreground font-semibold">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground font-sans mb-4">
                    <strong className="text-foreground font-medium">Applications:</strong> {item.applications}
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between gap-4 text-xs">
                  <span className="font-mono text-[11px] text-muted-foreground truncate">
                    {item.availability}
                  </span>
                  <button
                    onClick={() => { setModalProduct(item); setModalDone(false); }}
                    className="font-sans font-semibold text-xs text-amber hover:underline shrink-0"
                  >
                    Request TDS &rarr;
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Clean TDS Modal */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xs">
          <div className="bg-card border border-border p-6 md:p-8 rounded-sm max-w-lg w-full relative shadow-xl">
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            {!modalDone ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setModalDone(true); }}
                className="space-y-4"
              >
                <div>
                  <span className="font-mono text-xs text-amber uppercase font-semibold">
                    Technical Datasheet Request
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mt-1">
                    {modalProduct.name}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Company Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Rubber Industries"
                      className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Work Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="procurement@company.com"
                      className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91..."
                      className="w-full p-2.5 bg-background border border-border rounded-sm text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-colors rounded-sm"
                >
                  Download TDS &amp; COA
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-display font-bold text-lg text-foreground">
                  Request Dispatched
                </h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Our commercial team has received your inquiry for <strong>{modalProduct.name}</strong> and will email the certified data sheet promptly.
                </p>
                <button
                  onClick={() => setModalProduct(null)}
                  className="px-4 py-2 bg-secondary text-foreground text-xs uppercase font-semibold rounded-sm mt-2"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
