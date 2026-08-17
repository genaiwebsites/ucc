'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Calculator, ShieldCheck, FileCheck, Phone } from 'lucide-react';
import { BorderBeam } from '@/components/ui/BorderBeam';

export function InstantQuoteConfigurator() {
  const [grade, setGrade] = useState('sbr-1502');
  const [tonnage, setTonnage] = useState(25);
  const [terms, setTerms] = useState('ex-dankuni');
  const [packaging, setPackaging] = useState('pallets');
  
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const gradeNames: Record<string, string> = {
    'sbr-1502': 'SBR 1502 (Styrene Butadiene)',
    'sbr-1712': 'SBR 1712 (Oil Extended)',
    'nbr-3305': 'NBR 3305 (Nitrile 33% ACN)',
    'epdm-4045': 'EPDM 4045 (Diene Terpolymer)',
    'rss-1': 'Natural Rubber RSS-1',
    'isnr-20': 'TSR Block Rubber ISNR-20',
    'carbon-n220': 'Furnace Carbon Black N220',
    'carbon-n330': 'Furnace Carbon Black N330',
    'zinc-oxide': 'Active Zinc Oxide 99.5%',
    'accelerator-cbs': 'Vulcanizing Accelerator CBS'
  };

  const deliveryTerms: Record<string, string> = {
    'ex-dankuni': 'Ex-Warehouse (Dankuni Logistics Park, WB)',
    'ex-taratala': 'Ex-Warehouse (Taratala Urban Depot, Kolkata)',
    'cif-kolkata': 'CIF / Bonded Port Terminal (Kolkata Port)',
    'door-delivery': 'Delivered to Manufacturing Plant (All India)'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (company && email && phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative bg-card border border-border p-6 md:p-8 rounded-sm shadow-2xl overflow-hidden">
      <BorderBeam size={250} duration={14} colorFrom="#f59e0b" colorTo="#0ea5e9" />

      {/* Header */}
      <div className="pb-6 border-b border-border mb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber font-semibold uppercase mb-1.5">
          <Calculator className="w-3.5 h-3.5" />
          Interactive B2B Procurement Desk
        </div>
        <h3 className="font-display font-bold text-2xl text-foreground">
          Instant Lot Requisition &amp; RFQ Builder
        </h3>
        <p className="text-xs text-muted-foreground font-sans mt-1">
          Configure material grade, batch tonnage, and delivery logistics for formal proforma quotation and test COA issuance within 2 business hours.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Step 1: Grade Selection */}
          <div>
            <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
              1. Required Chemical / Polymer Grade *
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-3 bg-background border border-border rounded-xs text-xs font-mono font-semibold text-foreground focus:outline-hidden focus:border-foreground"
            >
              <optgroup label="Synthetic Elastomers">
                <option value="sbr-1502">SBR 1502 (Styrene Butadiene Rubber - Non-Staining)</option>
                <option value="sbr-1712">SBR 1712 (Oil Extended 37.5 phr Aromatic)</option>
                <option value="nbr-3305">NBR 3305 (Medium ACN Nitrile Rubber)</option>
                <option value="epdm-4045">EPDM 4045 (Medium Mooney Terpolymer)</option>
              </optgroup>
              <optgroup label="Natural Rubber Grades">
                <option value="rss-1">Natural Rubber RSS-1 (Ribbed Smoked Sheet)</option>
                <option value="isnr-20">Technically Specified Rubber ISNR-20 (Block)</option>
              </optgroup>
              <optgroup label="Carbon Black &amp; Fillers">
                <option value="carbon-n220">Furnace Carbon Black N220 (ISAF High Abrasion)</option>
                <option value="carbon-n330">Furnace Carbon Black N330 (HAF Standard)</option>
              </optgroup>
              <optgroup label="Vulcanizing Chemicals">
                <option value="zinc-oxide">Active Zinc Oxide 99.5% (Rubber Grade)</option>
                <option value="accelerator-cbs">Accelerator CBS (N-Cyclohexyl-2-benzothiazole)</option>
              </optgroup>
            </select>
          </div>

          {/* Step 2: Tonnage Quantity Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <span className="text-muted-foreground uppercase">2. Required Consignment Volume</span>
              <span className="font-bold text-base text-amber">{tonnage} Metric Tonnes (MT)</span>
            </div>
            <input
              type="range"
              min="1"
              max="150"
              step="1"
              value={tonnage}
              onChange={(e) => setTonnage(Number(e.target.value))}
              className="w-full accent-amber cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-1">
              <span>1 MT (Trial Lot)</span>
              <span>20 MT (1x FCL Container)</span>
              <span>150 MT (Monthly Contract)</span>
            </div>
          </div>

          {/* Step 3: Delivery Terms & Packaging */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
                3. Logistics &amp; Inco-Terms
              </label>
              <select
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                className="w-full p-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
              >
                <option value="ex-dankuni">Ex-Warehouse (Dankuni Logistics Park)</option>
                <option value="ex-taratala">Ex-Warehouse (Taratala Depot, Kolkata)</option>
                <option value="cif-kolkata">CIF Kolkata Port / Haldia Dock</option>
                <option value="door-delivery">Door Delivery to Plant (All India)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
                4. Packaging Standard
              </label>
              <select
                value={packaging}
                onChange={(e) => setPackaging(e.target.value)}
                className="w-full p-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
              >
                <option value="pallets">1.2 MT Wooden Palletized &amp; Shrink-Wrapped</option>
                <option value="bags">25 kg Multi-Wall Kraft / HDPE Bags</option>
                <option value="jumbo">1,000 kg Bulk Jumbo Bags</option>
              </select>
            </div>
          </div>

          {/* Step 4: Company Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-border">
            <div>
              <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                Company / Plant Name *
              </label>
              <input
                required
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Apex Polymer Mills"
                className="w-full p-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                Official Work Email *
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="purchase@company.com"
                className="w-full p-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-muted-foreground mb-1">
                Direct Mobile / WhatsApp *
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91..."
                className="w-full p-2.5 bg-background border border-border rounded-xs text-xs font-sans text-foreground focus:outline-hidden focus:border-foreground"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-foreground text-background font-sans font-bold text-xs uppercase tracking-wider hover:bg-amber hover:text-foreground transition-all rounded-xs shadow-md flex items-center justify-center gap-2"
          >
            <span>Generate Official Lot RFQ &amp; Proforma Invoice</span>
            <Send className="w-3.5 h-3.5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-muted-foreground pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-chem" />
              100% Manufacturer COA Guaranteed
            </span>
            <span className="flex items-center gap-1">
              <FileCheck className="w-3.5 h-3.5 text-amber" />
              GST Compliant Billing
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-cobalt" />
              2-Hour Commercial Response
            </span>
          </div>

        </form>
      ) : (
        <div className="py-12 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h4 className="font-display font-bold text-2xl text-foreground">
            Official RFQ Registered Successfully
          </h4>
          <p className="text-xs font-mono text-muted-foreground max-w-md mx-auto leading-relaxed">
            Requisition for <strong>{tonnage} MT of {gradeNames[grade]}</strong> under <strong>{deliveryTerms[terms]}</strong> has been forwarded to our senior chemical sales desk.
          </p>
          <div className="p-4 bg-secondary/30 border border-border rounded-xs max-w-sm mx-auto text-xs font-mono text-left space-y-1">
            <div className="text-muted-foreground">Requisition Ref: <span className="text-foreground font-bold">UCC-{Date.now().toString().slice(-6)}</span></div>
            <div className="text-muted-foreground">Recipient: <span className="text-foreground">{company} ({email})</span></div>
            <div className="text-muted-foreground">Desk Contact: <span className="text-amber font-bold">+91 98300 37437</span></div>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-secondary text-foreground text-xs uppercase font-semibold rounded-xs mt-4 hover:bg-border transition-colors"
          >
            Configure Another Lot
          </button>
        </div>
      )}

    </div>
  );
}
