import React from "react";

type ErrorAlertProps = {
  message: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

export default function ErrorAlert({ message, onClose, className = "" }: ErrorAlertProps) {
  return (
    <div className="fixed inset-x-0 top-16 z-50 sm:px-4 md:px-12 pointer-events-none">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-12 md:px-12 flex justify-center sm:justify-end">
        <div
          className={`pointer-events-auto flex items-center max-w-[200px] w-auto min-w-[140px] p-2 rounded-md bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-400 shadow-lg text-xs ${className}`}
          role="alert"
        >
          <svg className="shrink-0 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <div className="ms-2 font-medium flex-1 text-center sm:text-start">{message}</div>
          {onClose && (
            <button
              type="button"
              className="text-red-700 dark:text-red-400 rounded-md !bg-red-200 hover:!bg-red-300 dark:!bg-red-800 dark:hover:!bg-red-700 border border-red-300 dark:border-red-500 flex items-center justify-center px-1.5 h-5 leading-tight ms-2 transition-colors cursor-pointer group"
              aria-label="Cerrar"
              onClick={onClose}
            >
              <span className="sr-only">Cerrar</span>
              <svg
                className="w-3 h-3 stroke-red-700 dark:stroke-red-400 group-hover:stroke-red-900 dark:group-hover:stroke-red-200 transition-colors"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}