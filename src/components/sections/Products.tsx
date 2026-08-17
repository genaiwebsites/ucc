'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, CheckCircle2, FileDown } from 'lucide-react';

interface ProductItem {
  id: string;
  category: 'synthetic' | 'natural' | 'carbon' | 'chemicals';
  name: string;
  chemicalCode: string;
  familyTag: string;
  accentColor: string;
  astmStandard: string;
  specs: { label: string; value: string }[];
  applications: string;
  availability: string;
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);
  const [modalDone, setModalDone] = useState(false);

  const categories = [
    { id: 'all', name: 'All Product Lines' },
    { id: 'synthetic', name: 'Synthetic Elastomers' },
    { id: 'natural', name: 'Natural Rubber' },
    { id: 'carbon', name: 'Carbon Black Fillers' },
    { id: 'chemicals', name: 'Vulcanizing Additives' }
  ];

  const products: ProductItem[] = [
    {
      id: 'sbr-1502',
      category: 'synthetic',
      name: 'Styrene Butadiene Rubber (SBR 1502 / 1712)',
      chemicalCode: 'CAS 9003-55-8 · Cold Emulsion SBR',
      familyTag: 'Synthetic SBR',
      accentColor: 'text-cobalt',
      astmStandard: 'ASTM D1418 / D1646',
      specs: [
        { label: 'Mooney Viscosity', value: '48 – 58 (ML 1+4 @ 100°C)' },
        { label: 'Bound Styrene Content', value: '23.5% ± 1.0%' },
        { label: 'Volatile Matter', value: '< 0.50% max' }
      ],
      applications: 'Tire Treads & Carcass, Footwear Soles, Conveyor Belting, Mechanical Moldings',
      availability: 'Ex-Stock (Kolkata/Dankuni) & Direct Import Indents'
    },
    {
      id: 'nbr-3305',
      category: 'synthetic',
      name: 'Acrylonitrile Butadiene (NBR 3305 / 3345)',
      chemicalCode: 'CAS 9003-18-3 · Medium-High ACN Nitrile',
      familyTag: 'Synthetic NBR',
      accentColor: 'text-cobalt',
      astmStandard: 'ASTM D3187 / D1646',
      specs: [
        { label: 'Acrylonitrile (ACN)', value: '33.0% – 34.5%' },
        { label: 'Mooney Viscosity', value: '45 – 55 (ML 1+4 @ 100°C)' },
        { label: 'Ash Content', value: '< 0.8% max' }
      ],
      applications: 'Fuel & Hydraulic Hoses, O-Rings, Oil Seals, Gaskets, Printing Rollers',
      availability: 'Ex-Stock (Dankuni Storage Depot)'
    },
    {
      id: 'epdm-4045',
      category: 'synthetic',
      name: 'EPDM Terpolymer (EPDM 4045 / 5050)',
      chemicalCode: 'CAS 25038-36-2 · ENB Diene Terpolymer',
      familyTag: 'Synthetic EPDM',
      accentColor: 'text-cobalt',
      astmStandard: 'ASTM D3900 / D1646',
      specs: [
        { label: 'Ethylene Content', value: '55% – 60%' },
        { label: 'ENB Diene Content', value: '4.0% – 5.0%' },
        { label: 'Mooney Viscosity', value: '40 – 48 (ML 1+4 @ 125°C)' }
      ],
      applications: 'Automotive Weatherstrips, Radiator Coolant Hoses, Roofing, Cable Insulation',
      availability: 'Ex-Stock & FCL Container Indents'
    },
    {
      id: 'pbr-1220',
      category: 'synthetic',
      name: 'Polybutadiene Rubber (PBR 1220 High-Cis)',
      chemicalCode: 'CAS 9003-17-2 · High-Cis 1,4-Polybutadiene',
      familyTag: 'Synthetic PBR',
      accentColor: 'text-cobalt',
      astmStandard: 'ASTM D1646',
      specs: [
        { label: 'Cis-1,4 Microstructure', value: '≥ 96.0% min' },
        { label: 'Mooney Viscosity', value: '42 – 48 (ML 1+4 @ 100°C)' },
        { label: 'Glass Transition (Tg)', value: '-106°C' }
      ],
      applications: 'Commercial Radial Tires, Conveyor Belt Covers, High-Resilience Footwear',
      availability: 'Ex-Stock (Kolkata Central)'
    },
    {
      id: 'natural-rss',
      category: 'natural',
      name: 'Ribbed Smoked Sheets (RSS-1 / RSS-3 / RSS-4)',
      chemicalCode: 'Natural Cis-1,4-Polyisoprene Smoked Sheet',
      familyTag: 'Natural Rubber',
      accentColor: 'text-amber',
      astmStandard: 'IS 4588 / Green Book Standard',
      specs: [
        { label: 'Dirt Content', value: '< 0.05% (RSS-1)' },
        { label: 'Ash Content', value: '< 0.50% max' },
        { label: 'Plasticity (Po)', value: '≥ 30 min' }
      ],
      applications: 'Heavy Commercial Tires, Anti-Vibration Mounts, Industrial Belting',
      availability: 'Ex-Stock (Kolkata & Dankuni Depots)'
    },
    {
      id: 'natural-isnr',
      category: 'natural',
      name: 'Technically Specified Rubber (ISNR-10 / ISNR-20)',
      chemicalCode: 'TSR Block Crumb Natural Rubber',
      familyTag: 'Natural Rubber',
      accentColor: 'text-amber',
      astmStandard: 'IS 4588 / TSR Standard',
      specs: [
        { label: 'PRI Retention', value: '≥ 50 (ISNR 10)' },
        { label: 'Volatile Matter', value: '< 0.80% max' },
        { label: 'Nitrogen Content', value: '< 0.60% max' }
      ],
      applications: 'Tire Retreading Compounds, Industrial Rollers, Footwear Moldings',
      availability: 'Ex-Stock (1.2 MT Pallets) & Bulk Indent'
    },
    {
      id: 'carbon-n220',
      category: 'carbon',
      name: 'Furnace Carbon Black (N220 / ISAF)',
      chemicalCode: 'Intermediate Super Abrasion Furnace Black',
      familyTag: 'Carbon Black',
      accentColor: 'text-muted-foreground',
      astmStandard: 'ASTM D1765 / D3037',
      specs: [
        { label: 'Iodine Adsorption Number', value: '121 ± 5 g/kg' },
        { label: 'Oil Absorption (DBP)', value: '114 ± 5 cm³/100g' },
        { label: 'NSA Surface Area', value: '116 ± 5 m²/g' }
      ],
      applications: 'Ultra High-Performance Tire Treads, Heavy-Duty Conveyor Covers',
      availability: 'Ex-Stock (Dankuni) & Bulk Bags'
    },
    {
      id: 'carbon-n330',
      category: 'carbon',
      name: 'Furnace Carbon Black (N330 / HAF)',
      chemicalCode: 'High Abrasion Furnace Reinforcing Black',
      familyTag: 'Carbon Black',
      accentColor: 'text-muted-foreground',
      astmStandard: 'ASTM D1765',
      specs: [
        { label: 'Iodine Adsorption Number', value: '82 ± 5 g/kg' },
        { label: 'Oil Absorption (DBP)', value: '102 ± 5 cm³/100g' },
        { label: 'Pour Density', value: '380 ± 20 kg/m³' }
      ],
      applications: 'Truck Tire Carcass, Belting Covers, Extruded Cable Jackets',
      availability: 'Ex-Stock (25kg Kraft Bags / 1MT Sacks)'
    },
    {
      id: 'chem-accelerators',
      category: 'chemicals',
      name: 'Vulcanizing Accelerators (CBS / TBBS / MBT / TMTD)',
      chemicalCode: 'Sulfenamide & Thiazole Curing Systems',
      familyTag: 'Rubber Chemicals',
      accentColor: 'text-emerald-chem',
      astmStandard: 'ASTM D4936 / ISO Standards',
      specs: [
        { label: 'Active Purity', value: '≥ 98.0% min' },
        { label: 'Melting Point (CBS)', value: '98.0°C – 102.0°C' },
        { label: 'Loss on Drying', value: '< 0.30% max' }
      ],
      applications: 'Tire Curing Lines, Industrial Extrusions, Footwear Vulcanization',
      availability: 'Ex-Stock (Kolkata/Dankuni)'
    },
    {
      id: 'chem-activators',
      category: 'chemicals',
      name: 'Active Zinc Oxide 99.5% & Stearic Acid (Rubber Grade)',
      chemicalCode: 'Inorganic Activator / Lubricant System',
      familyTag: 'Rubber Chemicals',
      accentColor: 'text-emerald-chem',
      astmStandard: 'IS 3399 / IS 1675',
      specs: [
        { label: 'Active ZnO Content', value: '≥ 99.5% min' },
        { label: 'Lead (Pb) Impurity', value: '< 0.005% max' },
        { label: 'Surface Area (BET)', value: '4.5 – 6.0 m²/g' }
      ],
      applications: 'All Crosslinked Rubber & Tire Compounding Formulation',
      availability: 'Ex-Stock (25kg HDPE Bags)'
    }
  ];

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.chemicalCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.applications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="products" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-2">
              Certified Raw Material Inventory
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Chemical &amp; Polymer Portfolio
            </h2>
          </div>
          
          {/* Simple Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search grade or CAS..."
              className="w-full pl-9 pr-3 py-2 text-xs font-sans bg-card border border-border rounded-xs text-foreground focus:outline-hidden focus:border-foreground"
            />
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-6 border-b border-border mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-sans uppercase tracking-wider transition-colors pb-2 -mb-2.5 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'text-foreground font-bold border-b-2 border-amber'
                  : 'text-muted-foreground hover:text-foreground font-medium'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-card border border-border p-6 rounded-xs flex flex-col justify-between hover:border-foreground/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {item.chemicalCode}
                    </span>
                    <span className={`text-[11px] font-mono font-bold uppercase ${item.accentColor}`}>
                      {item.familyTag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-foreground mb-4">
                    {item.name}
                  </h3>

                  {/* Clean Technical Specs */}
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
                    className="inline-flex items-center gap-1 font-sans font-semibold text-xs text-amber hover:underline shrink-0"
                  >
                    <span>Request Spec &amp; COA</span>
                    <FileDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* TDS Modal */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xs">
          <div className="bg-card border border-border p-6 md:p-8 rounded-xs max-w-lg w-full relative shadow-xl">
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
                    Technical Datasheet &amp; COA Request
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mt-1">
                    {modalProduct.name}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">
                    Standard: {modalProduct.astmStandard}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Company / Plant Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Rubber Mills"
                      className="w-full p-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="procurement@company.com"
                      className="w-full p-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91..."
                      className="w-full p-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-colors rounded-xs"
                >
                  Download Certified TDS &amp; COA
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-display font-bold text-lg text-foreground">
                  Technical Request Dispatched
                </h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Our raw material desk has received your request for <strong>{modalProduct.name}</strong>. Certified TDS and recent batch COA test reports are dispatched to your email.
                </p>
                <button
                  onClick={() => setModalProduct(null)}
                  className="px-4 py-2 bg-secondary text-foreground text-xs uppercase font-semibold rounded-xs mt-2"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
