'use client';

import { LogisticsTerminalMap } from '@/components/ui/LogisticsTerminalMap';

export default function Geography() {
  return (
    <section id="geography" className="py-20 md:py-32 border-t border-border bg-card/25">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <LogisticsTerminalMap />
      </div>
    </section>
  );
}
