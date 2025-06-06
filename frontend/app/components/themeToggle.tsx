import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita errores de hidratación

  const isDark = resolvedTheme === 'dark';

  return (
    <label
      htmlFor="darkToggler"
      className="flex h-8 w-15 cursor-pointer items-center justify-center rounded-full bg-background-toggle-base dark:bg-surface-light transition-colors gap-0.5 border border-border-light dark:border-border-dark"
    >
      <input
        id="darkToggler"
        className="absolute left-0 top-0 w-px h-px opacity-0 overflow-hidden pointer-events-none"
        aria-label="darkToggler"
        type="checkbox"
        checked={isDark}
        onChange={() => setTheme(isDark ? 'light' : 'dark')}
      />
      <span
        className={`flex size-6 items-center justify-center rounded-full transition-colors
          ${!isDark ? 'bg-primary' : ''}
        `}
      >
        {/* Sun */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className={`fill-current transition-colors ${isDark ? 'text-muted-dark' : 'text-surface-light'}
          `}
        >
          <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"></path>
        </svg>
      </span>
      <span
        className={`flex size-6 items-center justify-center rounded-full transition-colors
          ${isDark ? 'bg-primary-dark' : ''}
        `}
      >
        {/* Moon */}
        <svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
          className={`fill-current transition-colors ${isDark ? 'text-surface-light' : 'text-muted-dark'}
          `}
        >
          <path d="M10.6111 12.855C11.591 12.1394 12.3151 11.1979 12.7723 10.1623C10.4824 10.4065 8.1342 9.46314 6.67948 7.47109C5.22476 5.47905 5.04093 2.95516 5.97054 0.848179C4.84491 0.968503 3.72768 1.37162 2.74781 2.08719C-0.224105 4.25747 -0.874706 8.43084 1.29558 11.4028C3.46586 14.3747 7.63923 15.0253 10.6111 12.855Z"></path>
        </svg>
      </span>
    </label>
  );
}