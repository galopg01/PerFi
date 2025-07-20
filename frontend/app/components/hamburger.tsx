import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [prestamosOpen, setPrestamosOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Inicio' },
    {
      label: 'Préstamos',
      dropdown: [
        { href: '/tablaAmortizacion', label: 'Tabla de amortización' },
        { href: '/calculadoraBonificacion', label: 'Calculadora de bonificaciones' },
        { href: '/calculadoraAmortizacion', label: 'Calculadora de amortización' },
      ],
    },
    { href: '/calculadoraInteresCompuesto', label: 'Calculadora de interés compuesto' },
  ];

  return (
    <div className="relative flex sm:hidden">
      <button
        type="button"
        className="btn inline-flex items-center p-2 w-13 h-8 justify-center text-sm text-text-light rounded-lg hover:bg-background-toggle-base focus:outline-none focus:ring-2 focus:ring-primary dark:text-text-dark dark:hover:bg-background-toggle-dark dark:focus:ring-primary-dark"
        aria-controls="navbar-mobile"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Open main menu</span>
        {open ? (
          // X icon
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          // Burger icon
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        )}
      </button>
      {open && (
        <div
          id="navbar-mobile"
          className="absolute top-full right-0 mt-2 w-64 rounded-lg bg-surface-light dark:bg-surface-dark shadow-lg p-2 z-50"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <li key={item.label}>
                  <span
                    className="py-2 px-3 font-semibold cursor-pointer select-none flex items-center"
                    onClick={() => setPrestamosOpen((prev) => !prev)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${prestamosOpen ? "rotate-90" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  {prestamosOpen && (
                    <ul className="ml-4 flex flex-col gap-1">
                      {item.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className={`block py-2 px-3 rounded transition-colors
                              ${pathname === sub.href
                                ? 'text-primary dark:text-primary-dark font-semibold'
                                : 'text-text-light dark:text-text-dark hover:bg-background-toggle-base dark:hover:bg-background-toggle-dark'}
                            `}
                            onClick={() => setOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 rounded transition-colors
                      ${pathname === item.href
                        ? 'text-primary dark:text-primary-dark font-semibold'
                        : 'text-text-light dark:text-text-dark hover:bg-background-toggle-base dark:hover:bg-background-toggle-dark'}
                    `}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}