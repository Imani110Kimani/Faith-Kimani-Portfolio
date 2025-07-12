"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
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
