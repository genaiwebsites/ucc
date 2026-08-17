'use client';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none bg-background">
      {/* Subtle, soft ambient background gradient - Zero noisy grids */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] rounded-full bg-amber/[0.03] dark:bg-amber/[0.02] blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] rounded-full bg-foreground/[0.02] blur-[150px]" />
    </div>
  );
}
