'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import ThemeToggle from './themeToggle';
import HamburgerMenu from './hamburger';
import { usePathname } from 'next/navigation';
import { on } from 'events';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/amortization', label: 'Tabla de amortización' },
  ];

 

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    onScroll(); // Check initial scroll position

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-20 mx-auto px-4 md:px-12 flex w-full max-w-6xl items-center justify-between gap-4 py-3 transition-all bg-background-header backdrop-blur-xs bg-background-header"
    >
      <div className="flex gap-12">
        {/* Logo */}  
        <Link href="/" className="flex items-center justify-start gap-2 text-xl font-bold">
            <img alt="Logo" width="40" height="40" decoding="async" data-nimg="1" src="/logo1.png"></img>
            <span className="hidden md:block">PerFi</span>
        </Link>
        
        {/* Menú desktop */}
        <nav className="hidden sm:flex items-center justify-start gap-2 ">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex py-2 px-2 font-semibold transition-colors
                ${pathname === href
                  ? 'text-primary dark:text-primary-dark'
                  : 'text-text-light dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark'}
              `}
            >
              {label}
            </Link>
          ))}
        </nav>    
      </div>
      <div className="flex gap-2">
            <div className='sm:mr-0 mr-4'>
                <ThemeToggle />
            </div>
            <HamburgerMenu />
        </div> 

      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="fixed inset-0 z-40 flex flex-col p-6 pt-20 space-y-6 xl:hidden">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
