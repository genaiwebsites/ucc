'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { NumberTicker } from '@/components/ui/NumberTicker';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden border-b border-border/80" id="hero">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Editorial Messaging & Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Main Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-foreground leading-[1.15] tracking-tight">
              Precision Polymers &amp; Heavy Industrial Chemicals.
            </h1>
            
            {/* Concise Subtitle */}
            <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed max-w-xl">
              Institutional importing, stockist, and indenting partner for synthetic elastomers, natural rubber, carbon black, and rubber chemicals across Eastern India and nationwide since 1969.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="#products"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-brand hover:text-primary-foreground transition-all rounded-xs shadow-xs"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-border bg-card/80 text-foreground font-sans font-semibold text-xs uppercase tracking-wider hover:border-foreground transition-all rounded-xs"
              >
                <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Contact Sales Desk</span>
              </Link>
            </div>

            {/* Compact Metric Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-border">
              <div>
                <div className="flex items-center gap-0.5 font-mono text-xl sm:text-2xl font-bold text-foreground">
                  <NumberTicker value={55} />
                  <span className="text-brand">+</span>
                </div>
                <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                  Years Active
                </div>
              </div>

              <div>
                <div className="flex items-center gap-0.5 font-mono text-xl sm:text-2xl font-bold text-foreground">
                  <NumberTicker value={100} />
                  <span className="text-brand">K+</span>
                </div>
                <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                  Sq.Ft Storage
                </div>
              </div>

              <div>
                <div className="flex items-center gap-0.5 font-mono text-xl sm:text-2xl font-bold text-foreground">
                  <NumberTicker value={25} />
                  <span className="text-brand">+</span>
                </div>
                <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                  Principals
                </div>
              </div>

              <div>
                <div className="flex items-center gap-0.5 font-mono text-xl sm:text-2xl font-bold text-foreground">
                  <NumberTicker value={100} />
                  <span className="text-brand">%</span>
                </div>
                <div className="font-sans text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                  ASTM Traceable
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Molecular Polymer Visual Stage (5 cols) */}
          <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-80 w-full rounded-xs overflow-hidden border border-border bg-card">
            <Image 
              src="/hero-bg.png" 
              alt="Polymer Molecular Structure & Covalent Bonds" 
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground bg-background/80 backdrop-blur-xs px-2.5 py-1.5 rounded-xs border border-border/80">
              <span>ASTM D1418 · D1646</span>
              <span className="text-foreground font-semibold">BATCH COA VERIFIED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
