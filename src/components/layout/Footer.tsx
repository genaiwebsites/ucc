'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, FileText, Globe } from 'lucide-react';
import { MolecularPolymerIcon, QualityCoaBadgeIcon, ContainerFreightIcon } from '@/components/icons/ChemicalIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);
  const [subEmail, setSubEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail) setSubscribed(true);
  };

  return (
    <footer className="bg-card border-t border-border pt-16 pb-12 text-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Tier 1: Raw Material Feedstock & Technical Bulletin Strip */}
        <div className="p-6 md:p-8 bg-secondary/50 border border-border rounded-xs mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber font-semibold uppercase mb-1.5">
              <FileText className="w-3.5 h-3.5" />
              Raw Material Market Intelligence
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-1">
              Polymer Feedstock &amp; Price Index Updates
            </h3>
            <p className="text-xs text-muted-foreground font-sans leading-relaxed">
              Receive bi-weekly rubber market reports, monomer price trends (Styrene/Butadiene), and ASTM technical compounding bulletins.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  required
                  type="email"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder="Enter procurement email..."
                  className="w-full px-3.5 py-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-foreground text-background font-sans font-semibold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-colors rounded-xs shrink-0 flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscription Active. Technical bulletins will be delivered to your inbox.</span>
              </div>
            )}
          </div>
        </div>

        {/* Tier 2: Comprehensive 5-Column Industrial Taxonomy Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-border">
          
          {/* Column 1: Corporate Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-foreground text-background flex items-center justify-center font-display font-bold text-xs tracking-tighter">
                UCC
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-foreground tracking-tight">
                  Usha Commercial Corporation
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase">
                  Established 1969 · Kolkata, India
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground font-sans leading-relaxed">
              Eastern India&apos;s institutional importer, stockist, and indenting agent for synthetic elastomers, natural rubber, carbon black, and heavy vulcanizing chemicals. Supplying continuous production lines for over 5.5 decades.
            </p>

            <div className="pt-2 space-y-2 text-xs font-sans text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                <span>33, Brabourne Road, 2nd Floor, Kolkata 700001, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-chem shrink-0" />
                <span>GSTIN &amp; Import-Export Code (IEC) Verified Sourcing</span>
              </div>
            </div>
          </div>

          {/* Column 2: Synthetic Elastomers (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <MolecularPolymerIcon className="w-3.5 h-3.5 text-cobalt" />
              <span>Synthetics</span>
            </div>
            <ul className="space-y-2 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#products" className="hover:text-foreground">SBR 1502 / 1712</Link></li>
              <li><Link href="#products" className="hover:text-foreground">NBR 3305 / 3345</Link></li>
              <li><Link href="#products" className="hover:text-foreground">EPDM 4045 / 5050</Link></li>
              <li><Link href="#products" className="hover:text-foreground">PBR 1220 High-Cis</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Butyl &amp; Chlorobutyl</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Chloroprene Rubber</Link></li>
            </ul>
          </div>

          {/* Column 3: Natural Rubber & Carbon Black (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <QualityCoaBadgeIcon className="w-3.5 h-3.5 text-amber" />
              <span>Natural &amp; Carbon</span>
            </div>
            <ul className="space-y-2 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#products" className="hover:text-foreground">Ribbed Smoked Sheet (RSS)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Block Rubber (ISNR 10/20)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Centrifuged Latex 60%</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Carbon Black N220 (ISAF)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Carbon Black N330 (HAF)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Carbon Black N550/N660</Link></li>
            </ul>
          </div>

          {/* Column 4: Vulcanizing Chemicals (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <ContainerFreightIcon className="w-3.5 h-3.5 text-emerald-chem" />
              <span>Additives</span>
            </div>
            <ul className="space-y-2 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#products" className="hover:text-foreground">Accelerators (CBS/TBBS)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Ultra Accelerators (TMTD)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Active Zinc Oxide 99.5%</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Rubber Grade Stearic Acid</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Antioxidants TMQ &amp; 6PPD</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Phenolic Tackifiers</Link></li>
            </ul>
          </div>

          {/* Column 5: Direct Commercial Hotlines (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Commercial Desks
            </div>
            <div className="space-y-2.5 text-xs font-sans text-muted-foreground">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber block font-semibold">Sales &amp; Indents:</span>
                <a href="tel:+919830037437" className="hover:text-foreground font-mono block">+91 98300 37437</a>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-amber block font-semibold">Technical Advisory:</span>
                <a href="tel:+919830080559" className="hover:text-foreground font-mono block">+91 98300 80559</a>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-amber block font-semibold">Official Email:</span>
                <a href="mailto:office@ushacommercialcorporation.com" className="hover:text-foreground block truncate">
                  office@ushacommercialcorporation.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Tier 3: Standards, Regulatory Protocols & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © 1969–{currentYear} Usha Commercial Corporation. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>ASTM D1418 · D1646 · D1765</span>
            <span className="text-border">|</span>
            <span>REACH COMPLIANT</span>
            <span className="text-border">|</span>
            <span>PORT CUSTOMS CLEARED</span>
            <span className="text-border">|</span>
            <a href="#hero" className="text-amber hover:underline">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
