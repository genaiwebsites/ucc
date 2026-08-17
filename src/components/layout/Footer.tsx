'use client';

import Link from 'next/link';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 text-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-border">
          
          {/* Column 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xs bg-foreground text-background flex items-center justify-center font-display font-black text-xs">
                UCC
              </div>
              <span className="font-display font-bold text-base text-foreground tracking-tight">
                Usha Commercial Corporation
              </span>
            </div>

            <p className="text-xs text-muted-foreground font-sans leading-relaxed max-w-sm">
              Eastern India&apos;s institutional importer, stockist, and indenting agent for synthetic polymers, natural rubber, carbon black, and rubber chemicals since 1969.
            </p>

            <div className="text-xs font-mono text-muted-foreground pt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber shrink-0" />
              <span>33, Brabourne Road, 2nd Floor, Kolkata 700001, India</span>
            </div>
          </div>

          {/* Column 2: Materials (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Chemical Portfolio
            </div>
            <ul className="space-y-1.5 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#products" className="hover:text-foreground">Synthetic Rubber (SBR/NBR/EPDM)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Natural Rubber (RSS/ISNR/Latex)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Furnace Carbon Black (N220-N660)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Accelerators (CBS/TBBS/TMTD)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Zinc Oxide 99.5% &amp; Stearic Acid</Link></li>
            </ul>
          </div>

          {/* Column 3: Logistics (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Operations
            </div>
            <ul className="space-y-1.5 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#about" className="hover:text-foreground">About Heritage</Link></li>
              <li><Link href="#associates" className="hover:text-foreground">Global Principals</Link></li>
              <li><Link href="#geography" className="hover:text-foreground">Warehousing Hubs</Link></li>
              <li><Link href="#mission" className="hover:text-foreground">Quality Assurance</Link></li>
              <li><Link href="#contact" className="hover:text-foreground">Procurement Desk</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Commercial Desk
            </div>
            <div className="space-y-2 text-xs font-sans text-muted-foreground">
              <div>
                <a href="tel:+919830037437" className="hover:text-foreground font-mono font-bold block">+91 98300 37437</a>
                <span className="text-[10px] text-muted-foreground">Sales &amp; Indenting</span>
              </div>
              <div>
                <a href="tel:+919830080559" className="hover:text-foreground font-mono font-bold block">+91 98300 80559</a>
                <span className="text-[10px] text-muted-foreground">Technical Support</span>
              </div>
              <div>
                <a href="mailto:office@ushacommercialcorporation.com" className="hover:text-foreground block truncate font-mono text-[11px]">
                  office@ushacommercialcorporation.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © 1969–{currentYear} Usha Commercial Corporation. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>ASTM TESTED · ISO/COA VERIFIED</span>
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
