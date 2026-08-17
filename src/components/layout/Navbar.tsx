'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-[1000] px-[5vw] h-[72px] flex items-center justify-between transition-all duration-400 group/interactive',
        scrolled
          ? 'bg-background/80 backdrop-blur-[20px] border-b border-border'
          : 'bg-transparent'
      )}
    >
      <Link href="#" className="flex items-center gap-3 no-underline">
        <div className="w-[38px] h-[38px] border-[1.5px] border-amber rounded flex items-center justify-center relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(200,146,42,0.15)] before:to-transparent">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-colors duration-600 relative z-10">
            <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" className="text-amber" strokeWidth="1.5" />
            <circle cx="10" cy="3" r="1.5" fill="currentColor" className="text-amber" />
            <circle cx="16.2" cy="6.5" r="1.5" fill="currentColor" className="text-amber" />
            <circle cx="16.2" cy="13.5" r="1.5" fill="currentColor" className="text-amber" />
            <circle cx="10" cy="17" r="1.5" fill="currentColor" className="text-amber" />
            <circle cx="3.8" cy="13.5" r="1.5" fill="currentColor" className="text-amber" />
            <circle cx="3.8" cy="6.5" r="1.5" fill="currentColor" className="text-amber" />
            <line x1="10" y1="4.5" x2="10" y2="7" stroke="currentColor" className="text-amber opacity-60" strokeWidth="0.8" />
            <line x1="15.3" y1="7.3" x2="12.8" y2="8.7" stroke="currentColor" className="text-amber opacity-60" strokeWidth="0.8" />
            <line x1="15.3" y1="12.7" x2="12.8" y2="11.3" stroke="currentColor" className="text-amber opacity-60" strokeWidth="0.8" />
            <line x1="10" y1="15.5" x2="10" y2="13" stroke="currentColor" className="text-amber opacity-60" strokeWidth="0.8" />
            <line x1="4.7" y1="12.7" x2="7.2" y2="11.3" stroke="currentColor" className="text-amber opacity-60" strokeWidth="0.8" />
            <line x1="4.7" y1="7.3" x2="7.2" y2="8.7" stroke="currentColor" className="text-amber opacity-60" strokeWidth="0.8" />
          </svg>
        </div>
        <div className="flex flex-col gap-[1px]">
          <span className="font-sans font-medium text-[13px] tracking-[0.12em] uppercase text-foreground transition-colors duration-600">
            Usha Commercial
          </span>
          <span className="font-mono text-[9px] tracking-[0.08em] text-amber uppercase transition-colors duration-600">
            Est. 1969 · Kolkata
          </span>
        </div>
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {['About', 'Products', 'Associates', 'Values', 'Reach'].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-[12px] font-normal tracking-[0.14em] uppercase text-muted-foreground no-underline transition-all duration-300 hover:text-foreground"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="hidden md:inline-block px-6 py-2.5 border border-amber text-amber font-sans text-[12px] font-medium tracking-[0.12em] uppercase no-underline transition-all duration-300 shadow-[0_0_0_transparent] hover:bg-amber hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(200,146,42,0.4)] hover:-translate-y-[1px]"
      >
        Enquire
      </Link>
    </nav>
  );
}
