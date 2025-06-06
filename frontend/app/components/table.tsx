'use client';
import React, { useState } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type TableProps = {
  columns: { key: string; label: string }[];
  data: Record<string, React.ReactNode>[];
  selectable?: boolean;
  pageSize?: number;
};

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

export default function GenericTable({ columns, data, pageSize = 10 }: TableProps) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(pageSize);
  const [showExportMenu, setShowExportMenu] = useState(false);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  // Exportar a Excel
  const handleExportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Tabla");

    worksheet.addRow(columns.map(col => col.label));
    data.forEach(row => {
      worksheet.addRow(columns.map(col => row[col.key]));
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), "tabla_amortizacion.xlsx");
  };

  // Exportar a PDF
  const handleExportPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [columns.map(col => col.label)],
      body: data.map(row => columns.map(col => {
        const value = row[col.key];
        if (value === undefined || value === null) return '';
        if (typeof value === 'string' || typeof value === 'number') return value;
        if (typeof value === 'object' && 'toString' in value) return value.toString();
        return '';
      })),
      styles: { font: "helvetica", fontSize: 10, halign: 'center' },
      headStyles: { fillColor: [46, 204, 113], halign: 'center' },
    });
    doc.save("tabla_amortizacion.pdf");
  };

  // Helper for pagination numbers (responsive)
  const getPages = () => {
    const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 855;
    const maxButtons = isSmallScreen ? 3 : 5;
    const pages = [];
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= Math.ceil(maxButtons / 2)) {
        for (let i = 1; i <= maxButtons; i++) pages.push(i);
      } else if (page >= totalPages - Math.floor(maxButtons / 2)) {
        for (let i = totalPages - maxButtons + 1; i <= totalPages; i++) pages.push(i);
      } else {
        for (let i = page - Math.floor(maxButtons / 2); i <= page + Math.floor(maxButtons / 2); i++) pages.push(i);
      }
    }
    return pages;
  };

  // Reset page if rowsPerPage changes
  React.useEffect(() => {
    setPage(1);
  }, [rowsPerPage]);

  // En el componente:
  React.useEffect(() => {
    const handleResize = () => setPage(page => Math.min(page, Math.ceil(data.length / rowsPerPage)));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [data.length, rowsPerPage]);

  return (
    <>
      <div className="shadow-md sm:rounded-lg">
        <div className="relative overflow-x-auto">
          <table className="min-w-full w-full text-sm text-left bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
            <thead className="text-xs uppercase bg-surface-light dark:bg-background-dark text-text-light dark:text-muted-dark border-b border-border-light dark:border-border-dark">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} scope="col" className="px-4 py-3 font-semibold text-center">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, i) => {
                const globalIndex = (page - 1) * rowsPerPage + i;
                return (
                  <tr
                    key={i}
                    className={
                      "text-text-light dark:text-text-dark border-b border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-background-dark transition-colors " +
                      (globalIndex === data.length - 1
                        ? "bg-background-light dark:bg-surface-dark text-text-light"
                        : globalIndex % 12 === 0
                          ? "bg-primary !text-muted-dark"
                          : (i % 2 === 1
                              ? "text-muted-light dark:text-text-muted-dark bg-surface-light dark:bg-background-dark"
                              : "text-muted-light dark:text-text-muted-dark"))
                    }
                  >
                    {columns.map((col, j) =>
                      j === 0 ? (
                        <th
                          key={col.key}
                          scope="row"
                          className="px-1 py-2 font-medium whitespace-nowrap text-center"
                        >
                          {row[col.key]}
                        </th>
                      ) : (
                        <td key={col.key} className="px-1 py-2 text-center">
                          {row[col.key]}
                        </td>
                      )
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav
          className="w-full flex flex-row flex-wrap items-stretch sm:items-center justify-between border-x border-b border-t-0 border-border-light dark:border-border-dark p-2 sm:p-4 gap-y-3 gap-x-2 bg-surface-light dark:bg-background-dark"
          aria-label="Table navigation"
        >
          {/* Select Pages */}
          <div className="flex flex-row flex-wrap items-start sm:items-center gap-1 sm:gap-4 whitespace-nowrap mb-1 sm:mb-0 min-w-0">
            <label className="ml-1 text-[10px] sm:text-xs text-muted-light dark:text-muted-dark flex items-center gap-1">
              Filas:
              <select
                className="ml-1 sm:w-20 min-w-[68px] max-w-[68px] rounded  sm:text-xs  py-0.5"
                value={rowsPerPage}
                onChange={e => setRowsPerPage(Number(e.target.value))}
              >
                {PAGE_SIZE_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <span className="text-[10px] sm:text-sm mr-2 font-normal text-muted-light dark:text-muted-dark">
              <span className="text-text-light dark:text-text-dark">
                {(page - 1) * rowsPerPage + 1}-{Math.min(page * rowsPerPage, data.length)}
              </span>{" "}
              de{" "}
              <span className="text-text-light dark:text-text-dark">
                {data.length}
              </span>
            </span>
            </label>
            
          </div>
          {/* Pagination + export */}
          <div className="flex flex-row flex-wrap items-start gap-1 sm:gap-4 min-w-0">
            <ul className="inline-flex -space-x-px text-[10px] sm:text-sm rounded-lg overflow-hidden">
              {/* Button go to start */}
              <li>
                <button
                  onClick={() => setPage(1)}
                  disabled={page === 1}
                  className="btn-secondary text-muted-light dark:text-muted-dark bg-surface-light dark:bg-surface-dark border flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 leading-tight"
                  aria-label="Primera página"
                >
                  <span className="sr-only">Primera</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 19l-7-7 7-7" />
                  </svg>
                </button>
              </li>
              {/* Button previous */}
              <li>
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="btn-secondary text-muted-light dark:text-muted-dark bg-surface-light dark:bg-surface-dark border flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 leading-tight"
                  aria-label="Anterior"
                >
                  <span className="sr-only">Anterior</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              {/* Page buttons */}
              {getPages().map((p, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setPage(Number(p))}
                    aria-current={page === p ? "page" : undefined}
                    className={`btn-secondary flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 leading-tight border  
                      ${
                        page === p
                          ? "text-text-light bg-background-light dark:text-text-dark dark:bg-surface-dark border-primary font-semibold"
                          : "text-muted-light dark:text-muted-dark bg-surface-light dark:bg-surface-dark"
                      }`}
                  >
                    {p}
                  </button>
                </li>
              ))}
              {/* Button following */}
              <li>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="btn-secondary text-muted-light dark:text-muted-dark bg-surface-light dark:bg-surface-dark border flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 leading-tight"
                  aria-label="Siguiente"
                >
                  <span className="sr-only">Siguiente</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              {/* Button go to end */}
              <li>
                <button
                  onClick={() => setPage(totalPages)}
                  disabled={page === totalPages}
                  className="btn-secondary text-muted-light dark:text-muted-dark bg-surface-light dark:bg-surface-dark border flex items-center justify-center px-2 sm:px-3 h-6 sm:h-8 leading-tight"
                  aria-label="Última página"
                >
                  <span className="sr-only">Última</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5l7 7-7 7" />
                  </svg>
                </button>
              </li>
            </ul>
            {/* Export button */}
            <div className="relative ml-0 sm:ml-2">
              <button
                className="btn-secondary text-muted-light dark:text-muted-dark bg-surface-light dark:bg-surface-dark border h-6 sm:h-8 w-10 sm:w-[42px] min-w-0 rounded-md flex items-center justify-center transition-colors"
                onClick={() => setShowExportMenu((v) => !v)}
                aria-label="Exportar"
                type="button"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
              </button>
              {showExportMenu && (
                <div className="absolute right-0 mt-2 w-32 sm:w-36 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded shadow-lg z-10">
                  <button
                    className="btn-secondary w-full text-left text-muted-light px-2 py-1 transition-colors text-[10px] sm:text-sm "
                    onClick={() => {
                      handleExportExcel();
                      setShowExportMenu(false);
                    }}
                  >
                    Exportar a Excel
                  </button>
                  <button
                    className="btn-secondary w-full text-left text-muted-light px-2 py-1 transition-colors text-[10px] sm:text-sm "
                    onClick={() => {
                      handleExportPDF();
                      setShowExportMenu(false);
                    }}
                  >
                    Exportar a PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}