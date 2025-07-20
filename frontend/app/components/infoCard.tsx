import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  value: ReactNode;
  description?: string;
  icon?: ReactNode;
  color?: string;
  info?: string; // Nuevo campo
}

export default function InfoCard({
  title,
  value,
  description,
  icon,
  color = "border-border-light",
  info, // Nuevo prop
}: InfoCardProps) {
  return (
    <div
      className={`flex flex-col justify-between gap-2 rounded-xl border-2 ${color} bg-surface-light dark:bg-surface-dark p-4 shadow-sm transition-all hover:shadow-md w-full`}
    >
      <div className="flex items-center gap-3 text-base font-medium text-text-light dark:text-text-dark">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="flex items-center gap-1">
          {title}
          {info && (
            <span className="relative group">
              <svg
                className="w-5 h-5 text-primary dark:text-dark cursor-pointer"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
              </svg>
              <div className="absolute right-0 z-10 hidden group-hover:block bg-surface-light dark:bg-surface-dark text-xs text-text-light dark:text-text-dark rounded shadow-lg px-3 py-2 mt-2 w-56 border border-border-light dark:border-border-dark whitespace-pre-line">
                {info}
              </div>
            </span>
          )}
        </span>
      </div>
      <div className="text-2xl font-bold text-text-light dark:text-text-dark">
        {value}
      </div>
      {description && (
        <div className="text-sm text-muted-light dark:text-muted-dark">
          {description}
        </div>
      )}
    </div>
  );
}
