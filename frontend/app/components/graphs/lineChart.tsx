"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import Chart from "chart.js/auto";

interface LineChartProps<T extends Record<string, any>> {
  title?: string;
  data: T[];
  groupBy?: (row: T) => string;
  fields: string[];
  labels: string[];
  colors: string[];
  xLabel: string;
  yLabel: string;
  info?: string; 
}

function groupByKey<T extends Record<string, any>>(
  data: T[],
  groupBy: ((row: T) => string) | undefined,
  fields: string[]
) {
  if (!groupBy) {
    return data.map((row, idx) => ({
      group: String(idx + 1),
      ...fields.reduce((acc, f) => ({ ...acc, [f]: Number(row[f]) || 0 }), {}),
    }));
  }
  const grouped: Record<string, Record<string, number>> = {};
  data.forEach((row) => {
    const key = groupBy(row);
    if (!grouped[key]) grouped[key] = Object.fromEntries(fields.map(f => [f, 0]));
    fields.forEach((f) => {
      // Normalization of values
      // Convert string values to numbers, handling commas and dots
      // Example: "1.234,56" -> 1234.56
      let val = row[f];
      if (typeof val === "string") {
        val = val.replace(/\./g, '').replace(',', '.');
      }
      grouped[key][f] += Number(val) || 0;
    });
  });
  return Object.entries(grouped).map(([group, values]) => ({
    group,
    ...values,
  }));
}

export default function LineChart<T extends Record<string, any>>({
  title,
  data,
  groupBy,
  fields,
  labels,
  colors,
  xLabel,
  yLabel,
  info = "",
}: LineChartProps<T>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [theme, setTheme] = useState(
    typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  // Agrupa los datos por la clave indicada
  const groupedData = useMemo(() => groupByKey(data, groupBy, fields), [data, groupBy, fields]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: groupedData.map((row) => row.group),
        datasets: fields.map((field, i) => ({
          label: labels[i] || field,
          data: groupedData.map(row => (row as any)[field]),
          borderColor: colors[i],
          backgroundColor: theme === "dark"
            ? colors[i] + "33"
            : colors[i] + "33",
          tension: 0.4,
          pointBackgroundColor: colors[i],
          pointBorderColor: colors[i],
        })),
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              color:
                theme === "dark"
                  ? getComputedStyle(document.documentElement).getPropertyValue("--text-dark").trim() || "#fff"
                  : getComputedStyle(document.documentElement).getPropertyValue("--text-light").trim() || "#1E1E1E",
              padding: 20,
              boxHeight: 10,
              boxWidth: 25,
              generateLabels: (chart) => {
                const defaultLabels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                return defaultLabels.map((item, i) => ({
                  ...item,
                  fillStyle: colors[i],
                  strokeStyle: "transparent",
                  lineWidth: 0,
                  pointStyle: "circle",
                  fontColor:
                    theme === "dark"
                      ? getComputedStyle(document.documentElement).getPropertyValue("--text-dark").trim() || "#fff"
                      : getComputedStyle(document.documentElement).getPropertyValue("--text-light").trim() || "#1E1E1E",
                }));
              },
            },
            onHover: (_e: any, _legendItem: any, legend: any) => {
              if (legend.chart.canvas.style) {
                legend.chart.canvas.style.cursor = "pointer";
              }
            },
            onLeave: () => {
              if (canvasRef.current?.style) {
                canvasRef.current.style.cursor = "default";
              }
            },
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (ctx: any) =>
                `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString("es-ES", {
                  minimumFractionDigits: 2,
                })} €`,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: xLabel, // Usar el prop
              color:
                theme === "dark"
                  ? getComputedStyle(document.documentElement).getPropertyValue("--text-dark").trim() || "#fff"
                  : getComputedStyle(document.documentElement).getPropertyValue("--text-light").trim() || "#1E1E1E",
            },
            ticks: {
              color:
                theme === "dark"
                  ? getComputedStyle(document.documentElement).getPropertyValue("--text-dark").trim() || "#fff"
                  : getComputedStyle(document.documentElement).getPropertyValue("--text-light").trim() || "#1E1E1E",
            },
            grid: {
              color:
                theme === "dark"
                  ? getComputedStyle(document.documentElement).getPropertyValue("--border-dark").trim() || "#333"
                  : getComputedStyle(document.documentElement).getPropertyValue("--border-light").trim() || "#eee",
            },
          },
          y: {
            title: {
              display: true,
              text: yLabel, // Usar el prop
              color:
                theme === "dark"
                  ? getComputedStyle(document.documentElement).getPropertyValue("--text-dark").trim() || "#fff"
                  : getComputedStyle(document.documentElement).getPropertyValue("--text-light").trim() || "#1E1E1E",
            },
            ticks: {
              color:
                theme === "dark"
                  ? getComputedStyle(document.documentElement).getPropertyValue("--text-dark").trim() || "#fff"
                  : getComputedStyle(document.documentElement).getPropertyValue("--text-light").trim() || "#1E1E1E",
            },
            grid: {
              color:
                theme === "dark"
                  ? getComputedStyle(document.documentElement).getPropertyValue("--border-dark").trim() || "#333"
                  : getComputedStyle(document.documentElement).getPropertyValue("--border-light").trim() || "#eee",
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [groupedData, theme, fields, labels, colors, xLabel, yLabel]);

  return (
    <div className="w-full shadow-md rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-4 md:p-6 relative mt-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h5 className="text-md sm:text-xl font-bold text-text-light dark:text-text-dark text-start">
            {title}
          </h5>
          {info && (
            <div className="relative group">
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
            </div>
          )}
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <canvas ref={canvasRef} className="w-full max-w-xs sm:max-w-md md:max-w-2xl aspect-[2/1] mx-auto block" />
      </div>
    </div>
  );
}