'use client';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background overflow-hidden flex items-center justify-center">
      
      {/* Vibrant Ambient Gradient Fluid Background */}
      {/* Static gradients to provide ambient color without disturbing animations. */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vh] bg-[#d97706]/10 dark:bg-amber/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[70vh] bg-[#ea580c]/10 dark:bg-amber/5 rounded-full blur-[120px]" />
    </div>
  );
}
