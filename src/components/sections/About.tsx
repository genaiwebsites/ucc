'use client';

import { ContainerFreightIcon, MooneyViscometerIcon, VulcanizationBridgeIcon } from '@/components/icons/ChemicalIcons';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export default function About() {
  const pillars = [
    {
      icon: ContainerFreightIcon,
      domain: 'Direct Indenting & Agency',
      title: 'Global Port-to-Plant Supply',
      desc: 'Authorized channel representation for multinational petrochemical conglomerates. We facilitate direct container-load import indents to Kolkata and Haldia ports with complete customs clearance, ocean shipping logistics, and port-side de-stuffing.'
    },
    {
      icon: VulcanizationBridgeIcon,
      domain: 'Buffer Warehousing',
      title: '100,000+ Sq.Ft Strategic Storage',
      desc: 'Extensive bonded, heavy-racking, and climate-controlled storage across Dankuni Logistics Park and Taratala Industrial Depot. We maintain 30 to 60-day buffer reserves for contracted clients to neutralize international shipping bottlenecks.'
    },
    {
      icon: MooneyViscometerIcon,
      domain: 'Quality Governance',
      title: 'ASTM & REACH Compliance',
      desc: 'Every consignment undergoes rigid testing for Mooney Viscosity ML(1+4), Ash content, Bound Styrene, and Specific Gravity. 100% accompanied by authentic manufacturer Certificates of Analysis (COA).'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase font-semibold block mb-3">
              Corporate Overview · Est. 1969
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
              Five decades of supply integrity.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base text-muted-foreground font-sans leading-relaxed mb-4">
              Founded in 1969 in Brabourne Road, Kolkata, Usha Commercial Corporation has grown into Eastern India&apos;s oldest and most formidable distribution partner for heavy chemical and polymer manufacturing.
            </p>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              We supply critical raw material feeds to Tier-1 automotive tyre, footwear, industrial conveyor belting, and technical rubber compounding plants, ensuring zero production downtime.
            </p>
          </div>
        </div>

        {/* 3 Scientific Pillar Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
          {pillars.map((pillar) => (
            <SpotlightCard
              key={pillar.domain}
              spotlightColor="rgba(37, 99, 235, 0.10)"
              className="space-y-4 p-6"
            >
              <div className="flex items-center justify-between">
                <pillar.icon className="w-6 h-6 text-foreground" />
                <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider font-semibold">
                  {pillar.domain}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                {pillar.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
