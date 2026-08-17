'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Activity, Flame, ShieldAlert, CheckCircle2, RefreshCw } from 'lucide-react';
import { MooneyViscometerIcon, VulcanizationBridgeIcon } from '@/components/icons/ChemicalIcons';

export function CompoundRheologySimulator() {
  const [polymer, setPolymer] = useState<'sbr' | 'nbr' | 'epdm' | 'rss'>('sbr');
  const [carbonLoading, setCarbonLoading] = useState<number>(50); // phr
  const [temp, setTemp] = useState<number>(160); // °C
  const [cureSystem, setCureSystem] = useState<'cbs' | 'tbbs' | 'tmtd'>('cbs');

  // Scientific calculation model for Moving Die Rheometer (MDR)
  const baseSpecs = {
    sbr: { name: 'SBR 1502', baseMooney: 52, baseTensile: 18, baseHardness: 55, scorchBase: 3.2, t90Base: 7.8 },
    nbr: { name: 'NBR 3305', baseMooney: 50, baseTensile: 22, baseHardness: 60, scorchBase: 2.8, t90Base: 6.5 },
    epdm: { name: 'EPDM 4045', baseMooney: 44, baseTensile: 16, baseHardness: 50, scorchBase: 4.0, t90Base: 9.2 },
    rss: { name: 'Natural RSS-1', baseMooney: 65, baseTensile: 25, baseHardness: 52, scorchBase: 2.2, t90Base: 5.4 },
  };

  const selected = baseSpecs[polymer];

  // Calculations based on compounding parameters
  const tempFactor = (160 - temp) * 0.08;
  const carbonFactor = (carbonLoading - 50) * 0.2;
  const cureFactor = cureSystem === 'tmtd' ? -1.5 : cureSystem === 'tbbs' ? 0.8 : 0;

  const minTorqueML = (selected.baseMooney * 0.08 + carbonLoading * 0.05).toFixed(1);
  const maxTorqueMH = (selected.baseMooney * 0.35 + carbonLoading * 0.32).toFixed(1);
  const scorchTimeTs2 = Math.max(1.2, (selected.scorchBase + tempFactor + cureFactor)).toFixed(2);
  const optimumCureT90 = Math.max(3.0, (selected.t90Base + tempFactor * 1.5 + cureFactor * 1.2)).toFixed(2);
  const tensileMPa = (selected.baseTensile + (carbonLoading - 30) * 0.12).toFixed(1);
  const shoreAHardness = Math.min(90, Math.round(selected.baseHardness + carbonFactor * 0.7));

  // Dynamic SVG Rheometer Curve Path
  const generateCurve = () => {
    const ml = parseFloat(minTorqueML) * 8;
    const mh = parseFloat(maxTorqueMH) * 8;
    const ts2X = parseFloat(scorchTimeTs2) * 28;
    const t90X = parseFloat(optimumCureT90) * 28;

    return `M 20 ${180 - ml} Q ${20 + ts2X * 0.6} ${180 - ml} ${20 + ts2X} ${180 - ml - 5} C ${20 + ts2X + 25} ${180 - ml - 15}, ${20 + t90X - 25} ${180 - mh + 10}, ${20 + t90X} ${180 - mh} L 380 ${180 - mh}`;
  };

  return (
    <div className="bg-card border border-border p-6 md:p-8 rounded-sm shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xs bg-amber/15 text-amber flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-foreground">
              ASTM D5289 Rheological Cure Simulator
            </h3>
            <p className="text-xs font-mono text-muted-foreground">
              Interactive Moving Die Rheometer (MDR) &amp; Compounding Torque Analysis
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE SIMULATION
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left Column: Formulating Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Polymer Selector */}
          <div>
            <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
              1. Base Polymer Matrix
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['sbr', 'nbr', 'epdm', 'rss'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPolymer(p)}
                  className={`py-2 px-3 text-xs font-mono text-left rounded-xs border transition-all ${
                    polymer === p
                      ? 'bg-foreground text-background border-foreground font-bold shadow-xs'
                      : 'bg-secondary/40 text-muted-foreground border-border hover:text-foreground'
                  }`}
                >
                  {baseSpecs[p].name}
                </button>
              ))}
            </div>
          </div>

          {/* Carbon Black Loading Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1.5">
              <span className="text-muted-foreground">2. Carbon Black N220 / N330</span>
              <span className="font-bold text-amber">{carbonLoading} phr</span>
            </div>
            <input
              type="range"
              min="30"
              max="80"
              step="5"
              value={carbonLoading}
              onChange={(e) => setCarbonLoading(Number(e.target.value))}
              className="w-full accent-amber cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-0.5">
              <span>30 phr (Soft)</span>
              <span>55 phr (Standard)</span>
              <span>80 phr (Heavy Duty)</span>
            </div>
          </div>

          {/* Vulcanization Temperature */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-1.5">
              <span className="text-muted-foreground">3. Curing Temperature</span>
              <span className="font-bold text-cobalt">{temp}°C</span>
            </div>
            <input
              type="range"
              min="140"
              max="180"
              step="5"
              value={temp}
              onChange={(e) => setTemp(Number(e.target.value))}
              className="w-full accent-cobalt cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-0.5">
              <span>140°C (Steam Bag)</span>
              <span>160°C (Standard Press)</span>
              <span>180°C (Injection)</span>
            </div>
          </div>

          {/* Accelerator System */}
          <div>
            <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">
              4. Primary Accelerator System
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              {[
                { id: 'cbs', label: 'CBS (Standard)' },
                { id: 'tbbs', label: 'TBBS (Delayed)' },
                { id: 'tmtd', label: 'TMTD (Ultra Fast)' },
              ].map((acc) => (
                <button
                  key={acc.id}
                  onClick={() => setCureSystem(acc.id as any)}
                  className={`py-1.5 px-2 rounded-xs border text-center transition-all ${
                    cureSystem === acc.id
                      ? 'bg-amber/15 border-amber text-amber font-bold'
                      : 'bg-secondary/40 border-border text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {acc.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Live Rheometer Graph & Readouts (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          
          {/* Animated SVG Rheometer Chart */}
          <div className="p-4 bg-background border border-border rounded-xs relative">
            <div className="flex justify-between items-center text-[11px] font-mono text-muted-foreground mb-2">
              <span>MDR TORQUE (dNm) vs TIME (min)</span>
              <span className="text-amber font-semibold">T90 = {optimumCureT90} min</span>
            </div>

            <svg viewBox="0 0 400 200" className="w-full h-44 overflow-visible">
              {/* Grid Lines */}
              <line x1="20" y1="20" x2="380" y2="20" stroke="currentColor" strokeOpacity="0.08" />
              <line x1="20" y1="60" x2="380" y2="60" stroke="currentColor" strokeOpacity="0.08" />
              <line x1="20" y1="100" x2="380" y2="100" stroke="currentColor" strokeOpacity="0.08" />
              <line x1="20" y1="140" x2="380" y2="140" stroke="currentColor" strokeOpacity="0.08" />
              <line x1="20" y1="180" x2="380" y2="180" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
              <line x1="20" y1="20" x2="20" y2="180" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />

              {/* Dynamic Animated Curve */}
              <path
                d={generateCurve()}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300"
              />

              {/* Min Torque Marker */}
              <circle cx="20" cy={180 - parseFloat(minTorqueML) * 8} r="4" fill="#0ea5e9" />
              <text x="30" y={175 - parseFloat(minTorqueML) * 8} fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.8">
                ML: {minTorqueML} dNm
              </text>

              {/* Max Torque Marker */}
              <circle cx="360" cy={180 - parseFloat(maxTorqueMH) * 8} r="4" fill="#10b981" />
              <text x="290" y={170 - parseFloat(maxTorqueMH) * 8} fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.8">
                MH: {maxTorqueMH} dNm
              </text>
            </svg>
          </div>

          {/* Physical Performance Readouts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 bg-secondary/30 border border-border rounded-xs">
              <span className="text-[10px] text-muted-foreground block">SCORCH TS2</span>
              <span className="text-base font-bold text-foreground">{scorchTimeTs2} min</span>
            </div>
            <div className="p-3 bg-secondary/30 border border-border rounded-xs">
              <span className="text-[10px] text-muted-foreground block">OPTIMUM T90</span>
              <span className="text-base font-bold text-amber">{optimumCureT90} min</span>
            </div>
            <div className="p-3 bg-secondary/30 border border-border rounded-xs">
              <span className="text-[10px] text-muted-foreground block">EST. TENSILE</span>
              <span className="text-base font-bold text-emerald-chem">{tensileMPa} MPa</span>
            </div>
            <div className="p-3 bg-secondary/30 border border-border rounded-xs">
              <span className="text-[10px] text-muted-foreground block">SHORE A HARDNESS</span>
              <span className="text-base font-bold text-cobalt">{shoreAHardness} °A</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
