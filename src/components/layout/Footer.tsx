'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, Phone, Mail, Clock, ArrowUp, Globe } from 'lucide-react';
import { MolecularPolymerIcon, QualityCoaBadgeIcon, ContainerFreightIcon } from '@/components/icons/ChemicalIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTimeString(now.toLocaleTimeString('en-GB', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-card border-t border-border pt-16 pb-12 text-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Top Operational Status Bar */}
        <div className="p-4 bg-secondary/40 border border-border rounded-xs mb-14 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-muted-foreground uppercase">Port Operations:</span>
              <span className="font-bold text-foreground">KOLKATA (SPM) &amp; HALDIA ACTIVE</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="text-muted-foreground uppercase">Buffer Storage:</span>
              <span className="font-bold text-foreground">100K+ SQ.FT (DANKUNI/TARATALA)</span>
            </div>
          </div>
          {timeString && (
            <div className="text-muted-foreground">
              Kolkata Terminal Time: <span className="text-foreground font-bold">{timeString}</span>
            </div>
          )}
        </div>

        {/* 5-Column Enterprise Taxonomy Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-border">
          
          {/* Column 1: Corporate Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-foreground text-background flex items-center justify-center font-display font-black text-sm tracking-tighter">
                UCC
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base text-foreground tracking-tight">
                  Usha Commercial Corporation
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase">
                  Institutional Importer &amp; Stockist · Est. 1969
                </span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground font-sans leading-relaxed">
              Eastern India&apos;s oldest and most reliable raw material distributor for synthetic elastomers, natural rubber, furnace carbon black, and heavy vulcanizing chemicals.
            </p>

            <div className="pt-2 space-y-2 text-xs font-sans text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                <span>33, Brabourne Road, 2nd Floor, Kolkata 700001, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-chem shrink-0" />
                <span>GSTIN Registered · Import-Export Code (IEC) Verified</span>
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
                <a href="tel:+919830037437" className="hover:text-foreground font-mono block font-semibold">+91 98300 37437</a>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-amber block font-semibold">Technical Advisory:</span>
                <a href="tel:+919830080559" className="hover:text-foreground font-mono block font-semibold">+91 98300 80559</a>
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

        {/* Bottom Legal & Standards */}
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
            <a href="#hero" className="text-amber hover:underline flex items-center gap-1">
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
