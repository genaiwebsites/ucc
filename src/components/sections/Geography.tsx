'use client';

import { MapPin, Warehouse, Truck, Anchor } from 'lucide-react';
import { ContainerFreightIcon } from '@/components/icons/ChemicalIcons';

export default function Geography() {
  const hubs = [
    {
      name: 'Dankuni Central Logistics Park',
      role: 'Heavy Polymer Racking & Buffer Storage',
      location: 'Hooghly Industrial Corridor, West Bengal',
      capacity: '75,000 Sq.Ft Covered Space',
      inventory: '2,800 MT Active Buffer Stock',
      transit: 'Direct NH-19 / NH-16 Access',
      accentColor: 'text-amber'
    },
    {
      name: 'Taratala Urban Logistics Depot',
      role: 'Rapid Fleet & Same-Day Urban Dispatch',
      location: 'Taratala Industrial Estate, Kolkata 700088',
      capacity: '25,000 Sq.Ft Covered Buffer',
      inventory: '950 MT High-Turnover Stock',
      transit: '4-Hour Emergency Dispatch Window',
      accentColor: 'text-cobalt'
    },
    {
      name: 'Kolkata (SPM) Port Terminal',
      role: 'Direct Ocean Freight & Customs Clearance',
      location: 'Syama Prasad Mookerjee Port, Kolkata',
      capacity: 'Direct FCL / LCL Indenting Clearance',
      inventory: 'Bonded Custom Hold & De-stuffing',
      transit: 'Continuous SE Asia & Global Inflow',
      accentColor: 'text-emerald-chem'
    },
    {
      name: 'Jamshedpur Supply Corridor',
      role: 'Auto & Belting Tier-1 Plant Transit',
      location: 'Adityapur Industrial Area, Jharkhand',
      capacity: 'Dedicated Direct Transit Channel',
      inventory: 'Bulk Tyre & Belting Consignments',
      transit: '12-Hour Cross-State Line Haul',
      accentColor: 'text-foreground'
    }
  ];

  return (
    <section id="geography" className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-2">
              Logistics Network
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Strategic Warehousing &amp; Port Hubs
            </h2>
          </div>
          <div className="text-xs font-mono text-muted-foreground">
            100,000+ SQ.FT TOTAL COVERED STORAGE CAPACITY
          </div>
        </div>

        {/* 4 Clean Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub) => (
            <div
              key={hub.name}
              className="p-6 bg-card border border-border rounded-xs flex flex-col justify-between space-y-4 hover:border-foreground/40 transition-colors"
            >
              <div className="space-y-2">
                <span className={`font-mono text-xs font-bold uppercase ${hub.accentColor}`}>
                  {hub.capacity}
                </span>
                <h3 className="font-display font-bold text-base text-foreground">
                  {hub.name}
                </h3>
                <p className="text-xs text-muted-foreground font-sans">
                  {hub.role}
                </p>
              </div>

              <div className="pt-3 border-t border-border space-y-1 text-xs font-mono text-muted-foreground">
                <div>Loc: <span className="text-foreground">{hub.location}</span></div>
                <div>SLA: <span className="text-amber font-semibold">{hub.transit}</span></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
