'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, ShieldCheck, ChevronRight } from 'lucide-react';
import { MolecularPolymerIcon } from '@/components/icons/ChemicalIcons';
import { NumberTicker } from '@/components/ui/NumberTicker';
import { BorderBeam } from '@/components/ui/BorderBeam';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="hero">
      
      {/* 3D Molecular Polymer Artwork - Crisp, Gradual, Vivid */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image 
            src="/hero-bg.png" 
            alt="Polymer Chain Molecular Structure & Covalent Bonds" 
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center lg:object-right opacity-85 dark:opacity-95 contrast-110"
          />
          {/* Smooth Gradual Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main Content Area */}
        <div className="max-w-2xl lg:max-w-3xl mb-14">
          


          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.08] mb-6 tracking-tight"
          >
            Precision Polymers &amp; Heavy Industrial Chemicals.
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed mb-8 max-w-2xl"
          >
            Eastern India&apos;s institutional importer, stockist, and indenting partner for synthetic elastomers, natural rubbers, carbon black, and rubber chemicals for over 55 continuous years.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background font-sans font-bold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-all rounded-xs shadow-md"
            >
              <span>Explore Polymer Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-border bg-card/80 text-foreground font-sans font-bold text-xs uppercase tracking-wider hover:border-foreground transition-all rounded-xs"
            >
              <FileText className="w-3.5 h-3.5 text-amber" />
              <span>Submit Lot RFQ</span>
            </Link>
          </motion.div>

        </div>

        {/* Multi-Domain Metric Bar with NumberTicker Integration & BorderBeam */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-card/70 backdrop-blur-md border border-border rounded-sm shadow-xl overflow-hidden"
        >
          <BorderBeam size={300} duration={16} colorFrom="#f59e0b" colorTo="#0ea5e9" />

          <div className="space-y-1">
            <div className="flex items-center gap-1 font-mono text-3xl md:text-4xl font-black text-amber">
              <NumberTicker value={55} />
              <span>+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Years Active Legacy
            </div>
            <div className="text-[11px] font-mono text-muted-foreground/80">Est. 1969 · Brabourne Rd</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 font-mono text-3xl md:text-4xl font-black text-cobalt">
              <NumberTicker value={100} />
              <span>K+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Sq.Ft Covered Storage
            </div>
            <div className="text-[11px] font-mono text-muted-foreground/80">Dankuni &amp; Taratala Hubs</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 font-mono text-3xl md:text-4xl font-black text-emerald-chem">
              <NumberTicker value={25} />
              <span>+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Global Principals
            </div>
            <div className="text-[11px] font-mono text-muted-foreground/80">Direct Indenting Channels</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1 font-mono text-3xl md:text-4xl font-black text-foreground">
              <NumberTicker value={100} />
              <span>%</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Batch Traceability
            </div>
            <div className="text-[11px] font-mono text-muted-foreground/80">ASTM &amp; Manufacturer COA</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
