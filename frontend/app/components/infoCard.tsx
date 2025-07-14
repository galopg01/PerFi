import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  value: ReactNode; // <-- Cambia aquí
  description?: string;
  icon?: ReactNode;
  color?: string;
}

export default function InfoCard({
  title,
  value,
  description,
  icon,
  color = "border-border-light",
}: InfoCardProps) {
  return (
    <div
      className={`flex flex-col justify-between gap-2 rounded-xl border-2 ${color} bg-surface-light dark:bg-surface-dark p-4 shadow-sm transition-all hover:shadow-md w-full`}
    >
      <div className="flex items-center gap-3 text-base font-medium text-text-light dark:text-text-dark">
        {icon && <span className="text-xl">{icon}</span>}
        {title}
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
