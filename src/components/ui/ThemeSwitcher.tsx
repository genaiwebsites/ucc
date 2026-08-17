'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <aside aria-label="Visual Theme Toggle" className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <div className="flex items-center bg-card/90 backdrop-blur-md border border-border rounded-full p-1 shadow-lg">
        <button
          onClick={() => setTheme('light')}
          aria-label="Switch to Light Theme"
          title="Light Theme"
          className={clsx(
            'w-8 h-8 rounded-full flex items-center justify-center transition-all',
            theme === 'light' 
              ? 'bg-amber text-primary-foreground shadow-xs' 
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Sun className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          aria-label="Switch to Dark Theme"
          title="Dark Theme"
          className={clsx(
            'w-8 h-8 rounded-full flex items-center justify-center transition-all',
            theme === 'dark' 
              ? 'bg-amber text-primary-foreground shadow-xs' 
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Moon className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
