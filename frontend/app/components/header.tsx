'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import ThemeToggle from './themeToggle';
import HamburgerMenu from './hamburger';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prestamosOpen, setPrestamosOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Inicio' },
    {
      label: 'Préstamos',
      dropdown: [
        { href: '/amortizacion', label: 'Tabla de amortización' },
        { href: '/calculadoraBonificacion', label: 'Calculadora de bonificaciones' },
        { href: '/calculadoraAmortizacion', label: 'Calculadora de amortización' },
      ],
    },
    { href: '/calculadoraInteresCompuesto', label: 'Calculadora de interés compuesto' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPrestamosOpen(false);
      }
    }
    if (prestamosOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [prestamosOpen]);

  return (
    <header className="sticky top-0 z-20 mx-auto px-4 md:px-12 flex w-full max-w-6xl items-center justify-between gap-4 py-3 transition-all bg-background-header backdrop-blur-xs bg-background-header">
      <div className="flex gap-12">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-start gap-2 text-xl font-bold">
          <img alt="Logo" width="40" height="40" decoding="async" data-nimg="1" src="/logo1.png" />
          <span className="hidden md:block">PerFi</span>
        </Link>

        {/* Menú desktop */}
        <nav className="hidden sm:flex items-center justify-start gap-2 ">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span
                  className={`flex py-2 px-2 font-semibold transition-colors rounded bg-transparent border-none outline-none cursor-pointer
                    ${item.dropdown.some((d) => d.href === pathname) || openDropdown === item.label
                      ? 'text-primary dark:text-primary-dark'
                      : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-dark'}
                  `}
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  tabIndex={0} // Opcional: para accesibilidad con teclado
                  role="menuitem"
                >
                  {item.label}
                </span>
                {openDropdown === item.label && (
                  <div className="absolute left-0 w-56 rounded-lg bg-surface-light dark:bg-surface-dark shadow-lg p-2 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block py-2 px-3 rounded transition-colors
                          ${pathname === sub.href
                            ? 'text-primary dark:text-primary-dark font-semibold'
                            : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-dark'}
                        `}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`flex py-2 px-2 font-semibold transition-colors rounded
                  ${pathname === item.href
                    ? 'text-primary dark:text-primary-dark'
                    : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-dark'}
                `}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
      <div className="flex gap-2">
        <div className="sm:mr-0 mr-4">
          <ThemeToggle />
        </div>
        <HamburgerMenu />
      </div>
      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="fixed inset-0 z-40 flex flex-col p-6 pt-20 space-y-6 xl:hidden bg-background-header">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <span className="text-lg font-semibold">{item.label}</span>
                <div className="ml-4 flex flex-col space-y-2 mt-2">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base hover:text-primary transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
