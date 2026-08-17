'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-14 text-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Clean 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border">
          
          {/* Column 1: Corporate Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-foreground text-background flex items-center justify-center font-display font-bold text-xs tracking-tighter">
                UCC
              </div>
              <span className="font-display font-bold text-base text-foreground tracking-tight">
                Usha Commercial Corporation
              </span>
            </div>

            <p className="text-xs text-muted-foreground font-sans leading-relaxed max-w-sm">
              Eastern India&apos;s institutional importer, stockist, and indenting agent for synthetic polymers, natural rubber, carbon black, and rubber chemicals since 1969.
            </p>

            <div className="text-xs font-mono text-muted-foreground pt-1">
              33, Brabourne Road, 2nd Floor, Kolkata 700001, India
            </div>
          </div>

          {/* Column 2: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Product Portfolio
            </div>
            <ul className="space-y-2 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#products" className="hover:text-foreground">Synthetic Rubber (SBR / NBR / EPDM / PBR)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Natural Rubber (RSS / ISNR / Latex)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Furnace Carbon Black (N220 / N330 / N550)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Accelerators (CBS / TBBS / TMTD)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Active Zinc Oxide 99.5% &amp; Stearic Acid</Link></li>
            </ul>
          </div>

          {/* Column 3: Logistics & Quality (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Operations
            </div>
            <ul className="space-y-2 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#about" className="hover:text-foreground">About Heritage</Link></li>
              <li><Link href="#associates" className="hover:text-foreground">Global Principals</Link></li>
              <li><Link href="#geography" className="hover:text-foreground">Dankuni Central Hub</Link></li>
              <li><Link href="#geography" className="hover:text-foreground">Taratala Depot</Link></li>
              <li><Link href="#mission" className="hover:text-foreground">Quality Assurance</Link></li>
            </ul>
          </div>

          {/* Column 4: Commercial Contacts (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Direct Desk
            </div>
            <div className="space-y-2 text-xs font-sans text-muted-foreground">
              <div>
                <a href="tel:+919830037437" className="hover:text-foreground font-mono font-bold block">+91 98300 37437</a>
                <span className="text-[10px] text-muted-foreground">Sales &amp; Indents</span>
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

        {/* Bottom Legal & Standards */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © 1969–{currentYear} Usha Commercial Corporation. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>ASTM TESTED · COA CERTIFIED</span>
            <a href="#hero" className="text-amber hover:underline flex items-center gap-1">
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
