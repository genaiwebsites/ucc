'use client';

export default function Geography() {
  const hubs = [
    {
      name: 'Kolkata Port & Commercial HQ',
      location: '33 Brabourne Road & SPM Port',
      role: 'Direct ocean bulk and container intake, port clearance, and central administration.',
      spec: 'Customs Bonded Intake · Direct Sea Freight'
    },
    {
      name: 'Dankuni Central Storage Park',
      location: 'Hooghly Industrial Hub',
      role: 'Primary storage facility for synthetic elastomers, carbon black bulk, and specialty chemicals.',
      spec: '60,000+ Sq.Ft · Heavy Racking · Climate Controlled'
    },
    {
      name: 'Taratala Industrial Depot',
      location: 'South Kolkata Industrial Area',
      role: 'Urban rapid-fulfillment terminal serving Kolkata and Howrah rubber compounders.',
      spec: '30,000+ Sq.Ft · Same-Day Emergency Delivery'
    },
    {
      name: 'Jamshedpur Supply Corridor',
      location: 'Jharkhand Automotive Belt',
      role: 'Scheduled freight connections feeding Tier-1 automotive component and anti-vibration manufacturers.',
      spec: '18-24h Transit · Dedicated Road Freight'
    },
    {
      name: 'Rourkela & Odisha Corridor',
      location: 'Mining & Heavy Belting Belt',
      role: 'High-abrasion polymer delivery for industrial conveyor belting and heavy rubber lining plants.',
      spec: '24-36h Transit · Heavy Freight'
    },
    {
      name: 'Guwahati Distribution Gateway',
      location: 'North-East Regional Hub',
      role: 'Supplying polymer requirements across Assam and North-Eastern industrial centres.',
      spec: '48h Transit · Regional Logistics'
    }
  ];

  return (
    <section id="geography" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-3">
            Infrastructure &amp; Reach
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Eastern India Logistics Grid
          </h2>
          <p className="text-base text-muted-foreground font-sans leading-relaxed">
            Multi-depot storage capacity spanning over 100,000 sq.ft across critical transport arteries, ensuring uninterrupted factory feed.
          </p>
        </div>

        {/* Clean Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <div
              key={hub.name}
              className="bg-card border border-border p-6 rounded-sm space-y-3 hover:border-foreground/40 transition-colors"
            >
              <div className="text-[11px] font-mono text-amber font-semibold uppercase">
                {hub.location}
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                {hub.name}
              </h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                {hub.role}
              </p>
              <div className="pt-3 border-t border-border text-[11px] font-mono text-foreground font-medium">
                {hub.spec}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
