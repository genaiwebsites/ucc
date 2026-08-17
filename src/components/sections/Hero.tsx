'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { MolecularPolymerIcon } from '@/components/icons/ChemicalIcons';
import { NumberTicker } from '@/components/ui/NumberTicker';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-38 md:pb-24 overflow-hidden" id="hero">
      
      {/* 3D Molecular Polymer Artwork - Crisp, Gradual, Vivid */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image 
            src="/hero-bg.png" 
            alt="Polymer Chain Molecular Structure & Covalent Bonds" 
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center lg:object-right opacity-85 dark:opacity-90 contrast-110"
          />
          {/* Smooth Gradual Fade: Strong on left where text lives, transparent on right to showcase the 3D molecule */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Main Content Area */}
        <div className="max-w-2xl lg:max-w-3xl mb-12">
          
          {/* Scientific Tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/80 border border-border text-xs font-mono tracking-widest text-amber uppercase font-semibold mb-5 rounded-xs"
          >
            <MolecularPolymerIcon className="w-4 h-4 text-amber" />
            <span>RAW MATERIAL DISTRIBUTION · EST. 1969</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6"
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
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-colors rounded-xs shadow-xs"
            >
              <span>Explore Polymer Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-border bg-card/80 text-foreground font-sans font-semibold text-xs uppercase tracking-wider hover:border-foreground transition-colors rounded-xs"
            >
              <FileText className="w-3.5 h-3.5 text-amber" />
              <span>Submit Procurement RFQ</span>
            </Link>
          </motion.div>

        </div>

        {/* Multi-Domain Metric Bar with NumberTicker Integration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border"
        >
          <div className="p-4 bg-card/60 border border-border/60 rounded-xs">
            <div className="flex items-center gap-1 font-mono text-3xl md:text-4xl font-bold text-amber mb-1">
              <NumberTicker value={55} />
              <span>+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Years Institutional Trust
            </div>
          </div>

          <div className="p-4 bg-card/60 border border-border/60 rounded-xs">
            <div className="flex items-center gap-1 font-mono text-3xl md:text-4xl font-bold text-cobalt mb-1">
              <NumberTicker value={100} />
              <span>K+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Sq.Ft Covered Warehousing
            </div>
          </div>

          <div className="p-4 bg-card/60 border border-border/60 rounded-xs">
            <div className="flex items-center gap-1 font-mono text-3xl md:text-4xl font-bold text-emerald-chem mb-1">
              <NumberTicker value={25} />
              <span>+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Global Chemical Principals
            </div>
          </div>

          <div className="p-4 bg-card/60 border border-border/60 rounded-xs">
            <div className="flex items-center gap-1 font-mono text-3xl md:text-4xl font-bold text-foreground mb-1">
              <NumberTicker value={100} />
              <span>%</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-medium">
              ASTM &amp; COA Batch Traceability
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
