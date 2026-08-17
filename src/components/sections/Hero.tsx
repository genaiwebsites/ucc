'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, Shield } from 'lucide-react';
import { MolecularPolymerIcon, VulcanizationBridgeIcon, MooneyViscometerIcon } from '@/components/icons/ChemicalIcons';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-38 md:pb-24 overflow-hidden" id="hero">
      
      {/* 3D Molecular Polymer Artwork - Crisp, Gradual, Vivid */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image 
            src="/hero-bg.png" 
            alt="Polymer Chain Molecular Structure & Covalent Bonds" 
            fill
            priority
            className="object-cover object-center lg:object-right opacity-80 dark:opacity-90 contrast-110"
          />
          {/* Smooth Gradual Fade: Strong on left where text lives, transparent on right to showcase the 3D molecule */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authoritative Editorial Messaging (7 cols) */}
          <div className="lg:col-span-7">
            
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
              className="flex flex-wrap items-center gap-4 mb-12"
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

          {/* Right Column: Floating Polymer Telemetry HUD Card (5 cols) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="w-full max-w-sm bg-card/85 backdrop-blur-md border border-border p-5 rounded-sm shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-foreground">POLYMERIC SPECIFICATION</span>
                </div>
                <span className="text-muted-foreground text-[11px]">ASTM D1418 / D1646</span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-border/60">
                  <span className="text-muted-foreground">Polymer Backbone</span>
                  <span className="font-semibold text-foreground">Cis-1,4-Polybutadiene / SBR</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-border/60">
                  <span className="text-muted-foreground">Mooney Viscosity</span>
                  <span className="font-semibold text-amber">ML (1+4 @ 100°C) 52.0 ± 2.0</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-border/60">
                  <span className="text-muted-foreground">Crosslink Density</span>
                  <span className="font-semibold text-cobalt">Sulfur Covalent Bridges (S8)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-muted-foreground">Consignment QA</span>
                  <span className="font-semibold text-emerald-chem">100% Manufacturer COA Verified</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-muted-foreground border-t border-border">
                <span>STOCK DISPATCH: KOLKATA / DANKUNI</span>
                <span className="text-amber font-semibold">ACTIVE</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Multi-Domain Metric Bar with Dedicated Color Accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-6 border-t border-border"
        >
          <div className="p-4 bg-card/60 border border-border/60 rounded-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-3xl md:text-4xl font-bold text-amber">55+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Years Institutional Trust
            </div>
          </div>

          <div className="p-4 bg-card/60 border border-border/60 rounded-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-3xl md:text-4xl font-bold text-cobalt">100K+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Sq.Ft Covered Warehousing
            </div>
          </div>

          <div className="p-4 bg-card/60 border border-border/60 rounded-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-3xl md:text-4xl font-bold text-emerald-chem">25+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-medium">
              Global Chemical Principals
            </div>
          </div>

          <div className="p-4 bg-card/60 border border-border/60 rounded-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-3xl md:text-4xl font-bold text-foreground">100%</span>
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
