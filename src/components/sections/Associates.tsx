'use client';

import { useState } from 'react';

export default function Associates() {
  const [activeTab, setActiveTab] = useState<'principals' | 'clients'>('principals');

  const principals = [
    { name: 'Reliance Industries', logo: 'reliance' },
    { name: 'LANXESS', logo: 'lanxess' },
    { name: 'BASF', logo: 'basf' },
    { name: 'Dow Chemical', logo: 'dow' },
    { name: 'Evonik', logo: 'evonik' },
    { name: 'Wacker Chemie', logo: 'wacker' },
    { name: 'AkzoNobel', logo: 'akzonobel' },
    { name: 'Solvay', logo: 'solvay' },
    { name: 'Pidilite', logo: 'pidilite' },
    { name: '3M Industrial', logo: '3m' },
    { name: 'Tata Chemicals', logo: 'tatachemicals' },
    { name: 'Godrej Chemicals', logo: 'godrej' }
  ];

  const clients = [
    { name: 'MRF Tyres', logo: 'mrftyres' },
    { name: 'Apollo Tyres', logo: 'apollotyres' },
    { name: 'Bata India', logo: 'bata' },
    { name: 'Tata Motors', logo: 'tatamotors' },
    { name: 'Mahindra & Mahindra', logo: 'mahindra' },
    { name: 'Exide Industries', logo: 'exide' }
  ];

  return (
    <section id="associates" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-3">
              Institutional Network
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Global Principals &amp; Clients
            </h2>
          </div>

          {/* Simple Clean Tabs */}
          <div className="flex items-center gap-6 border-b border-border pb-2">
            <button
              onClick={() => setActiveTab('principals')}
              className={`text-xs font-sans uppercase tracking-wider transition-colors pb-1 ${
                activeTab === 'principals'
                  ? 'text-foreground font-bold border-b-2 border-amber'
                  : 'text-muted-foreground hover:text-foreground font-medium'
              }`}
            >
              Chemical Principals
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`text-xs font-sans uppercase tracking-wider transition-colors pb-1 ${
                activeTab === 'clients'
                  ? 'text-foreground font-bold border-b-2 border-amber'
                  : 'text-muted-foreground hover:text-foreground font-medium'
              }`}
            >
              Consuming Industries
            </button>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {(activeTab === 'principals' ? principals : clients).map((item) => (
            <div
              key={item.name}
              className="bg-card border border-border p-6 rounded-sm flex flex-col items-center justify-center aspect-3/2 hover:border-foreground/40 transition-colors group"
            >
              <img
                src={`/logos/${item.logo}.svg`}
                alt={`${item.name} logo`}
                className="max-h-10 max-w-full object-contain filter grayscale contrast-125 dark:invert dark:brightness-150 group-hover:grayscale-0 group-hover:dark:invert-0 transition-all duration-200"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <span className="hidden text-xs font-display font-semibold text-foreground text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
