'use client';

export default function Mission() {
  const commitments = [
    {
      title: 'Rheological & Mooney Consistency',
      desc: 'Strict Mooney Viscosity (ASTM D1646) and cure rate verification across consignments to prevent compounding variances in automated factory banburys.'
    },
    {
      title: '100% Certified COA Documentation',
      desc: 'Every consignment is delivered with authentic manufacturer Certificates of Analysis verifying bound styrene, ash content, and volatile matter.'
    },
    {
      title: 'Dedicated Client Buffer Reserves',
      desc: 'Contracted client buffer stock held in our Dankuni facility, insulating manufacturing schedules from global container crunches.'
    },
    {
      title: 'Hot-Run Emergency Dispatch',
      desc: 'Same-day emergency truckload dispatch for contracted plants across West Bengal and Howrah within 4 hours of requisition.'
    }
  ];

  return (
    <section id="mission" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest text-amber uppercase font-semibold block mb-3">
            Quality &amp; Standards
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Zero-Halt Supply Commitment
          </h2>
          <p className="text-base text-muted-foreground font-sans leading-relaxed">
            In heavy tire, footwear, and conveyor manufacturing, compound variability or delayed consignments halt entire shifts. We eliminate that risk.
          </p>
        </div>

        {/* 4 Clean Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, i) => (
            <div
              key={item.title}
              className="p-6 bg-card border border-border rounded-sm space-y-3"
            >
              <div className="font-mono text-xs text-amber font-semibold">
                0{i + 1}
              </div>
              <h3 className="font-display font-bold text-base text-foreground">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
