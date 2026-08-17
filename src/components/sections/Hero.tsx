'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { NumberTicker } from '@/components/ui/NumberTicker';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden min-h-[82vh] flex flex-col justify-center" id="hero">
      
      {/* 3D Molecular Polymer Artwork - Crisp, Gradual, Disciplined */}
      <div className="absolute top-0 right-0 w-full lg:w-[58%] h-full pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image 
            src="/hero-bg.png" 
            alt="Polymer Chain Molecular Structure & Covalent Bonds" 
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center lg:object-right opacity-80 dark:opacity-90 contrast-105"
          />
          {/* Smooth Gradual Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        
        {/* Main Content Area */}
        <div className="max-w-2xl lg:max-w-3xl mb-8 md:mb-10">
          
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.12] mb-4 tracking-tight"
          >
            Precision Polymers &amp; Heavy Industrial Chemicals.
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed mb-6 max-w-xl"
          >
            Institutional importing, stockist, and indenting partner for synthetic elastomers, natural rubber, carbon black, and rubber chemicals across Eastern India and nationwide since 1969.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <Link
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-brand hover:text-primary-foreground transition-all rounded-xs shadow-xs"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-card/80 text-foreground font-sans font-semibold text-xs uppercase tracking-wider hover:border-foreground transition-all rounded-xs"
            >
              <FileText className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Contact Sales Desk</span>
            </Link>
          </motion.div>

        </div>

        {/* Disciplined Metric Bar - Unified Cohesive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-border"
        >
          <div className="space-y-0.5">
            <div className="flex items-center gap-1 font-mono text-2xl sm:text-3xl font-bold text-foreground">
              <NumberTicker value={55} />
              <span className="text-brand">+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Years Active Legacy
            </div>
            <div className="text-[11px] font-mono text-muted-foreground/70">Est. 1969 · Brabourne Rd</div>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1 font-mono text-2xl sm:text-3xl font-bold text-foreground">
              <NumberTicker value={100} />
              <span className="text-brand">K+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Sq.Ft Covered Storage
            </div>
            <div className="text-[11px] font-mono text-muted-foreground/70">Dankuni &amp; Taratala Hubs</div>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1 font-mono text-2xl sm:text-3xl font-bold text-foreground">
              <NumberTicker value={25} />
              <span className="text-brand">+</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Global Principals
            </div>
            <div className="text-[11px] font-mono text-muted-foreground/70">Direct Indenting Channels</div>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center gap-1 font-mono text-2xl sm:text-3xl font-bold text-foreground">
              <NumberTicker value={100} />
              <span className="text-brand">%</span>
            </div>
            <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Batch Traceability
            </div>
            <div className="text-[11px] font-mono text-muted-foreground/70">ASTM &amp; Manufacturer COA</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
