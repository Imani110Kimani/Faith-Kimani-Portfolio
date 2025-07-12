import Link from 'next/link';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-mainblue text-white">
      <div className="flex items-center gap-2">
        <Menu className="block md:hidden" aria-label="Open menu" />
        <Link href="/" className="font-bold text-lg tracking-tight">Faith Muthoni</Link>
      </div>
      <div className="hidden md:flex gap-6">
        <Link href="/about" className="hover:underline focus:underline">About</Link>
        <Link href="/projects" className="hover:underline focus:underline">Projects</Link>
        <Link href="/blog" className="hover:underline focus:underline">Blog</Link>
        <Link href="/contact" className="hover:underline focus:underline">Contact</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
