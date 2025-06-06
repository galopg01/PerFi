import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/amortization', label: 'Amortización' },
    { href: '/bonification', label: 'Bonificación' },
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
          className="absolute top-full right-0 mt-2 w-40 rounded-lg bg-surface-light dark:bg-surface-dark shadow-lg p-2 z-50"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2 px-3 rounded transition-colors
                    ${pathname === href
                      ? 'text-primary dark:text-primary-dark font-semibold'
                      : 'text-text-light dark:text-text-dark hover:bg-background-toggle-base dark:hover:bg-background-toggle-dark'}
                  `}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}