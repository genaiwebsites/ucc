'use client';

import { MooneyViscometerIcon, QualityCoaBadgeIcon, VulcanizationBridgeIcon, MolecularPolymerIcon } from '@/components/icons/ChemicalIcons';

export default function Mission() {
  const commitments = [
    {
      icon: MooneyViscometerIcon,
      accentColor: 'text-amber',
      title: 'Rheological & Mooney Consistency',
      standard: 'ASTM D1646 Protocol',
      desc: 'Strict Mooney Viscosity ML(1+4 @ 100°C) and cure rate (MDR/ODR) verification across consignments to prevent compounding scorch or curing anomalies in factory Banbury mixers.'
    },
    {
      icon: QualityCoaBadgeIcon,
      accentColor: 'text-emerald-chem',
      title: '100% Certified Manufacturer COA',
      standard: 'ISO 9001 Batch Protocol',
      desc: 'Every single raw material delivery is accompanied by authentic manufacturer Certificate of Analysis verifying bound styrene, ash content, volatile matter, and specific gravity compliance.'
    },
    {
      icon: VulcanizationBridgeIcon,
      accentColor: 'text-cobalt',
      title: 'Dedicated Client Buffer Reserves',
      standard: '30 to 60-Day Buffer Allotments',
      desc: 'Contracted client buffer stock held in our Dankuni logistics park, insulating continuous 24/7 manufacturing schedules from global shipping bottlenecks and container crunches.'
    },
    {
      icon: MolecularPolymerIcon,
      accentColor: 'text-foreground',
      title: 'Hot-Run Emergency Dispatch',
      standard: '4-Hour Urban Delivery Response',
      desc: 'Same-day emergency truckload dispatch for contracted plants across West Bengal, Howrah, and the Hooghly industrial belts within 4 hours of requisition.'
    }
  ];

  return (
    <section id="mission" className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-3">
            Quality Assurance &amp; Standards
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Zero-Halt Supply Commitment
          </h2>
          <p className="text-base text-muted-foreground font-sans leading-relaxed">
            In heavy tire, footwear, and conveyor manufacturing, chemical variability or delayed raw materials halt entire shifts. We eliminate that risk.
          </p>
        </div>

        {/* 4 Scientific Quality Pillars - No Arbitrary Numbering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-card border border-border rounded-xs space-y-3 flex flex-col justify-between hover:border-foreground/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <item.icon className={`w-7 h-7 ${item.accentColor}`} />
                  <span className="font-mono text-[10px] text-muted-foreground uppercase font-medium">
                    {item.standard}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-border/80 text-[11px] font-mono text-foreground/80 font-medium">
                INSTITUTIONAL SLA
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
