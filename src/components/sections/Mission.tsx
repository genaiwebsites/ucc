'use client';

import { MooneyViscometerIcon, QualityCoaBadgeIcon, VulcanizationBridgeIcon, MolecularPolymerIcon } from '@/components/icons/ChemicalIcons';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export default function Mission() {
  const commitments = [
    {
      icon: MooneyViscometerIcon,
      title: 'Rheological & Mooney Consistency',
      standard: 'ASTM D1646 Protocol',
      desc: 'Strict Mooney Viscosity ML(1+4 @ 100°C) and cure rate (MDR/ODR) verification across consignments to prevent compounding scorch or curing anomalies in factory Banbury mixers.'
    },
    {
      icon: QualityCoaBadgeIcon,
      title: '100% Certified Manufacturer COA',
      standard: 'ISO 9001 Batch Protocol',
      desc: 'Every single raw material delivery is accompanied by authentic manufacturer Certificate of Analysis verifying bound styrene, ash content, volatile matter, and specific gravity compliance.'
    },
    {
      icon: VulcanizationBridgeIcon,
      title: 'Dedicated Client Buffer Reserves',
      standard: '30 to 60-Day Buffer Allotments',
      desc: 'Contracted client buffer stock held in our Dankuni logistics park, insulating continuous 24/7 manufacturing schedules from global shipping bottlenecks and container crunches.'
    },
    {
      icon: MolecularPolymerIcon,
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
          <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold block mb-3">
            Quality Assurance &amp; Standards
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Zero-Halt Supply Commitment
          </h2>
          <p className="text-base text-muted-foreground font-sans leading-relaxed">
            In heavy tire, footwear, and conveyor manufacturing, chemical variability or delayed raw materials halt entire shifts. We eliminate that risk.
          </p>
        </div>

        {/* 4 Scientific Quality Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => (
            <SpotlightCard
              key={item.title}
              spotlightColor="rgba(37, 99, 235, 0.10)"
              className="space-y-3 flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <item.icon className="w-6 h-6 text-foreground" />
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

              <div className="pt-3 border-t border-border/80 text-[11px] font-mono text-muted-foreground font-semibold">
                INSTITUTIONAL SLA
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
