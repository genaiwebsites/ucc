'use client';

import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { InstantQuoteConfigurator } from '@/components/ui/InstantQuoteConfigurator';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Corporate Desk (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-2">
                Institutional Contact Desk
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground">
                Commercial &amp; Indenting Sales Desk
              </h2>
              <p className="text-sm text-muted-foreground font-sans mt-3 leading-relaxed">
                Connect directly with our senior polymer traders for spot container indents, ex-warehouse bulk allotments, and contractual buffer warehousing.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-card border border-border rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-amber font-semibold uppercase">
                  <MapPin className="w-4 h-4" />
                  Corporate Headquarters
                </div>
                <div className="text-sm font-semibold text-foreground">
                  Usha Commercial Corporation
                </div>
                <div className="text-xs text-muted-foreground font-sans">
                  33, Brabourne Road, 2nd Floor, Kolkata 700001, West Bengal, India
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cobalt font-semibold uppercase">
                  <Phone className="w-4 h-4" />
                  Direct Procurement Hotlines
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sales &amp; Indents:</span>
                    <a href="tel:+919830037437" className="font-bold text-foreground hover:text-amber">+91 98300 37437</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Technical Advisory:</span>
                    <a href="tel:+919830080559" className="font-bold text-foreground hover:text-amber">+91 98300 80559</a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Office Landline:</span>
                    <span className="font-bold text-foreground">+91 33 2242 1234</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-chem font-semibold uppercase">
                  <Mail className="w-4 h-4" />
                  Official Written Inquiries
                </div>
                <a href="mailto:office@ushacommercialcorporation.com" className="text-xs font-mono font-bold text-foreground hover:underline block truncate">
                  office@ushacommercialcorporation.com
                </a>
              </div>
            </div>

            <div className="p-4 bg-secondary/30 border border-border rounded-xs text-xs font-mono text-muted-foreground space-y-1">
              <div className="flex items-center gap-1.5 text-foreground font-semibold">
                <Clock className="w-3.5 h-3.5 text-amber" />
                <span>OPERATIONAL HOURS (IST)</span>
              </div>
              <div>Monday – Saturday: 10:00 AM – 7:00 PM IST</div>
              <div>Port Customs Clearing: 24/7 Monitored Dispatch</div>
            </div>

          </div>

          {/* Right Column: Instant RFQ & Lot Configurator (7 cols) */}
          <div className="lg:col-span-7">
            <InstantQuoteConfigurator />
          </div>

        </div>

      </div>
    </section>
  );
}
