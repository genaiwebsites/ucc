'use client';

import { motion } from 'framer-motion';

export default function About() {
  const pillars = [
    {
      title: 'Direct Indenting & Agency',
      desc: 'Authorized channel representation for multinational petrochemical giants, facilitating container-load import indents to Kolkata & Haldia ports with complete customs handling.'
    },
    {
      title: 'Buffer Warehousing',
      desc: 'Extensive bonded and climate-controlled storage across Dankuni and Taratala. We maintain buffer reserves for contracted clients to prevent factory downtime.'
    },
    {
      title: 'Certified Lot Assurance',
      desc: 'Consignments are supplied with authentic Manufacturer Certificates of Analysis (COA), verifying Mooney Viscosity, Ash content, and ASTM standard conformance.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-3">
              Corporate Overview
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              Five decades of supply integrity.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-4">
              Founded in 1969 in Brabourne Road, Kolkata, Usha Commercial Corporation has grown into Eastern India&apos;s most reliable distribution partner for synthetic and natural rubbers, carbon black, and heavy vulcanizing chemicals.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
              We bridge global chemical manufacturing with regional tire, footwear, belting, and technical compounding plants, guaranteeing seamless continuity for production lines.
            </p>
          </div>
        </div>

        {/* 3 Clean Strategic Pillars with Minimalist Top Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="space-y-3">
              <span className="font-mono text-xs text-amber font-semibold">
                0{i + 1}
              </span>
              <h3 className="font-display font-bold text-lg text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
