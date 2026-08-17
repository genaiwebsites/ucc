'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Anchor, Warehouse, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ContainerFreightIcon } from '@/components/icons/ChemicalIcons';

export function LogisticsTerminalMap() {
  const [activeHub, setActiveHub] = useState<string>('dankuni');

  const hubs = [
    {
      id: 'dankuni',
      name: 'Dankuni Central Logistics Park',
      role: 'Heavy Polymer Racking & Buffer Storage',
      location: 'Hooghly Industrial Corridor, West Bengal',
      capacity: '75,000 Sq.Ft Covered Space',
      inventory: '2,800 MT Active Buffer Stock',
      transit: 'Direct NH-19 / NH-16 Freight Access',
      features: ['Climate-controlled synthetic storage', 'High-density heavy pallet racking', 'Weighbridge & multi-bay loading'],
      status: 'OPERATIONAL · DISPATCH ACTIVE',
      accentColor: 'text-amber',
      accentBg: 'bg-amber/15',
      accentBorder: 'border-amber'
    },
    {
      id: 'taratala',
      name: 'Taratala Urban Logistics Depot',
      role: 'Rapid Urban Fleet & Just-In-Time Dispatch',
      location: 'Taratala Industrial Estate, Kolkata 700088',
      capacity: '25,000 Sq.Ft Urban Buffer',
      inventory: '950 MT High-Turnover Inventory',
      transit: '4-Hour Emergency Dispatch Window',
      features: ['Same-day metropolitan dispatch', 'Rubber chemicals & accelerator stock', 'Dedicated express carrier fleet'],
      status: 'OPERATIONAL · SAME-DAY ACTIVE',
      accentColor: 'text-cobalt',
      accentBg: 'bg-cobalt/15',
      accentBorder: 'border-cobalt'
    },
    {
      id: 'kolkata-port',
      name: 'Kolkata Port & Haldia Dock Terminal',
      role: 'Direct Ocean Freight & Customs Clearance',
      location: 'Syama Prasad Mookerjee Port, Kolkata',
      capacity: 'Direct FCL / LCL Indenting Clearance',
      inventory: 'Bonded Custom Hold & De-stuffing',
      transit: 'Ocean Inflow from SE Asia & Europe',
      features: ['Direct bonded warehouse clearance', 'Port-side survey & testing', 'Multimodal container rail transport'],
      status: 'CUSTOMS CLEARED · INFLOW ACTIVE',
      accentColor: 'text-emerald-chem',
      accentBg: 'bg-emerald-500/15',
      accentBorder: 'border-emerald-500'
    },
    {
      id: 'jamshedpur',
      name: 'Jamshedpur Heavy Industrial Corridor',
      role: 'Auto & Belting Tier-1 Plant Supply',
      location: 'Adityapur Industrial Area, Jharkhand',
      capacity: 'Dedicated Direct Transit Channel',
      inventory: 'Bulk Tyre & Belting Consignments',
      transit: '12-Hour Cross-State Line Haul',
      features: ['Direct factory delivery SLA', 'Full truckload containerized cargo', 'OEM certified quality dossiers'],
      status: 'REGULAR TRANSIT CORRIDOR',
      accentColor: 'text-foreground',
      accentBg: 'bg-secondary',
      accentBorder: 'border-foreground'
    }
  ];

  const current = hubs.find((h) => h.id === activeHub) || hubs[0];

  return (
    <div className="bg-card border border-border p-6 md:p-8 rounded-sm shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-1">
            Logistics Infrastructure Network
          </span>
          <h3 className="font-display font-bold text-2xl text-foreground">
            Strategic Warehousing &amp; Port Hubs
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>100,000+ SQ.FT ACTIVE STORAGE CAPACITY</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left: Interactive Hub Buttons (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {hubs.map((hub) => (
            <button
              key={hub.id}
              onClick={() => setActiveHub(hub.id)}
              className={`w-full p-4 rounded-xs border text-left transition-all flex items-start justify-between ${
                activeHub === hub.id
                  ? `${hub.accentBg} ${hub.accentBorder} shadow-sm`
                  : 'bg-secondary/20 border-border hover:bg-secondary/40'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`font-display font-bold text-sm ${activeHub === hub.id ? 'text-foreground font-extrabold' : 'text-foreground'}`}>
                    {hub.name}
                  </span>
                </div>
                <div className="text-xs font-sans text-muted-foreground">
                  {hub.role}
                </div>
              </div>
              <ArrowUpRight className={`w-4 h-4 shrink-0 transition-transform ${activeHub === hub.id ? 'text-foreground translate-x-0.5 -translate-y-0.5' : 'text-muted-foreground'}`} />
            </button>
          ))}
        </div>

        {/* Right: Selected Hub Technical Dossier (7 cols) */}
        <div className="lg:col-span-7 bg-background border border-border p-6 rounded-xs flex flex-col justify-between space-y-6">
          
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border">
              <div>
                <span className="text-[10px] font-mono uppercase text-muted-foreground block">SELECTED TERMINAL</span>
                <h4 className="font-display font-bold text-xl text-foreground">
                  {current.name}
                </h4>
              </div>
              <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold ${current.accentBg} ${current.accentColor}`}>
                {current.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-b border-border text-xs font-mono">
              <div>
                <span className="text-muted-foreground block mb-0.5">LOCATION COORDINATES</span>
                <span className="font-semibold text-foreground">{current.location}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-0.5">COVERED CAPACITY</span>
                <span className="font-semibold text-amber">{current.capacity}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-0.5">ACTIVE INVENTORY</span>
                <span className="font-semibold text-cobalt">{current.inventory}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-0.5">DISPATCH SLA</span>
                <span className="font-semibold text-emerald-chem">{current.transit}</span>
              </div>
            </div>

            <div className="pt-4">
              <span className="text-[10px] font-mono uppercase text-muted-foreground block mb-2 font-semibold">
                INFRASTRUCTURE SPECIFICATIONS
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-muted-foreground">
                {current.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span>RAIL &amp; HIGHWAY CONNECTIVITY</span>
            <span className="text-foreground font-semibold">24/7 FLEET MONITORING</span>
          </div>

        </div>

      </div>

    </div>
  );
}
