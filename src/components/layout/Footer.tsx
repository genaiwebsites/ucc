'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border">
          
          {/* Col 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-sm bg-foreground text-background flex items-center justify-center font-display font-bold text-xs">
                UCC
              </div>
              <span className="font-display font-bold text-base text-foreground">
                Usha Commercial Corporation
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-sans leading-relaxed max-w-sm">
              Eastern India&apos;s premier importing, stockist, and indenting agency for synthetic rubbers, natural rubber, carbon black, and rubber chemicals since 1969.
            </p>
            <div className="text-[11px] font-mono text-muted-foreground">
              33, Brabourne Road, 2nd Floor, Kolkata 700001, India
            </div>
          </div>

          {/* Col 2: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Product Categories
            </div>
            <ul className="space-y-2 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#products" className="hover:text-foreground">Synthetic Elastomers (SBR/NBR/EPDM)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Natural Rubber (RSS/ISNR/Latex)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Furnace Carbon Black (N220-N660)</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Accelerators &amp; Vulcanizers</Link></li>
              <li><Link href="#products" className="hover:text-foreground">Zinc Oxide &amp; Stearic Acid</Link></li>
            </ul>
          </div>

          {/* Col 3: Company & Reach (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Company
            </div>
            <ul className="space-y-2 text-xs font-sans text-muted-foreground list-none p-0 m-0">
              <li><Link href="#about" className="hover:text-foreground">About Heritage</Link></li>
              <li><Link href="#associates" className="hover:text-foreground">Global Principals</Link></li>
              <li><Link href="#geography" className="hover:text-foreground">Warehousing Hubs</Link></li>
              <li><Link href="#mission" className="hover:text-foreground">Quality &amp; Standards</Link></li>
              <li><Link href="#contact" className="hover:text-foreground">Commercial Desk</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display font-bold text-xs uppercase tracking-wider text-foreground">
              Direct Desk
            </div>
            <div className="space-y-2 text-xs font-sans text-muted-foreground">
              <a href="tel:+919830037437" className="block hover:text-foreground font-mono">+91 98300 37437</a>
              <a href="tel:+919830080559" className="block hover:text-foreground font-mono">+91 98300 80559</a>
              <a href="mailto:office@ushacommercialcorporation.com" className="block hover:text-foreground truncate">
                office@ushacommercialcorporation.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © 1969–{currentYear} Usha Commercial Corporation. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>ASTM / REACH TESTED</span>
            <span>KOLKATA · DANKUNI · TARATALA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
