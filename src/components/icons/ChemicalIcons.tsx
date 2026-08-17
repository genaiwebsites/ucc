import React from 'react';

export function MolecularPolymerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Central Polymer Repeating Unit */}
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" className="fill-current/10" />
      {/* Monomer Functional Nodes */}
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
      <circle cx="19" cy="8" r="1.5" fill="currentColor" />
      <circle cx="19" cy="16" r="1.5" fill="currentColor" />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
      <circle cx="5" cy="16" r="1.5" fill="currentColor" />
      <circle cx="5" cy="8" r="1.5" fill="currentColor" />
      {/* Covalent & Conjugated Double Bonds */}
      <path d="M12 6.5V9.5M17.5 9L14.5 10.5M17.5 15L14.5 13.5M12 17.5V14.5M6.5 15L9.5 13.5M6.5 9L9.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function VulcanizationBridgeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Upper Polymer Backbone */}
      <path d="M3 6C7 6 9 8 13 8C17 8 19 6 21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Lower Polymer Backbone */}
      <path d="M3 18C7 18 9 16 13 16C17 16 19 18 21 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sulfur Crosslink Bridges (S-S-S) */}
      <circle cx="8" cy="12" r="1.5" fill="currentColor" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" />
      <path d="M8 7.5V10.5M8 13.5V16.5M16 7.5V10.5M16 13.5V16.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1 1" />
    </svg>
  );
}

export function MooneyViscometerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Testing Die Chamber */}
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Central Rotating Rotor Shaft */}
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
      {/* Serrated Rotor Disc Head */}
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" className="fill-current/20" />
      <path d="M9 12H15M12 9V15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function CarbonBlackAggregateIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Colloidal Primary Particles Cluster */}
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3" className="fill-current/30" />
      <circle cx="15" cy="10" r="2.8" stroke="currentColor" strokeWidth="1.3" className="fill-current/40" />
      <circle cx="11" cy="15" r="3.2" stroke="currentColor" strokeWidth="1.3" className="fill-current/50" />
      <circle cx="16" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.3" className="fill-current/20" />
      <circle cx="6" cy="14" r="2" stroke="currentColor" strokeWidth="1.3" className="fill-current/20" />
    </svg>
  );
}

export function QualityCoaBadgeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Verified Shield */}
      <path d="M12 3L20 6.5V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Inner Chemical Compliance Check */}
      <path d="M9 12L11 14L15 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContainerFreightIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Intermodal Freight Container */}
      <rect x="3" y="6" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
      {/* Vertical Reinforcing Ribs */}
      <line x1="7" y1="6" x2="7" y2="18" stroke="currentColor" strokeWidth="1.2" />
      <line x1="11" y1="6" x2="11" y2="18" stroke="currentColor" strokeWidth="1.2" />
      <line x1="15" y1="6" x2="15" y2="18" stroke="currentColor" strokeWidth="1.2" />
      {/* Locking Mechanism */}
      <rect x="9.5" y="10.5" width="3" height="3" fill="currentColor" />
    </svg>
  );
}
