"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return (
    <button
      aria-label="Toggle dark mode"
      className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-mainblue"
      disabled
    >
      <Moon className="w-5 h-5" />
    </button>
  );
  const isDark = (theme === 'dark') || (theme === 'system' && systemTheme === 'dark');
  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-mainblue"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
