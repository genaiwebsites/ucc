'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[900] flex items-center gap-3">
      <div className="flex bg-background/80 backdrop-blur-[10px] border border-border rounded-full p-1 shadow-lg transition-colors duration-600">
        <button
          onClick={() => setTheme('light')}
          aria-label="Light Mode"
          className={clsx(
            'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
            theme === 'light' ? 'bg-amber text-obsidian shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Sun className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('dark')}
          aria-label="Dark Mode"
          className={clsx(
            'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
            theme === 'dark' ? 'bg-amber text-obsidian shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
