'use client'

import { useEffect, useRef, useState } from 'react'
import Chart from 'chart.js/auto'

interface CheeseGraphProps {
  title: string
  data: { label: string; value: number; color?: string }[]
}

function darken(hex: string, amount = 0.5) {
  let c = hex.replace('#', '')
  if (c.length === 3) c = c.split('').map(x => x + x).join('')
  const num = parseInt(c, 16)
  let r = Math.floor(((num >> 16) & 0xff) * amount)
  let g = Math.floor(((num >> 8) & 0xff) * amount)
  let b = Math.floor((num & 0xff) * amount)
  return `rgb(${r},${g},${b})`
}

export default function CheeseGraph({ title, data }: CheeseGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [tooltip, setTooltip] = useState<{ x: number; y: number; content: string } | null>(null)

  const originalColors = data.map(d => d.color ?? '#888888')

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const isDark = theme === 'dark'
    const textColor = getComputedStyle(document.documentElement)
      .getPropertyValue(isDark ? '--text-dark' : '--text-light')
      .trim() || (isDark ? '#fff' : '#1E1E1E')

    const total = data.reduce((sum, d) => sum + d.value, 0)

    // Plugin para mostrar siempre los porcentajes
    const percentPlugin = {
      id: 'showPercent',
      afterDraw(chart: any) {
        const { ctx } = chart
        ctx.save()
        chart.data.datasets.forEach((ds: any, i: number) => {
          const meta = chart.getDatasetMeta(i)
          meta.data.forEach((sector: any, j: number) => {
            const value = ds.data[j] as number
            const percent = ((value / total) * 100).toFixed(1)
            const { x, y } = sector.tooltipPosition(true)
            ctx.fillStyle = '#fff'
            ctx.font = 'bold 12px sans-serif'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(`${percent}%`, x, y)
          })
        })
        ctx.restore()
      }
    }

    const getBackgroundColor = (i: number) => {
      const base = data[i].color ?? '#888888'
      if (selectedIndex !== null) {
        return i === selectedIndex ? base : darken(base, 0.5)
      }
      if (hoveredIndex !== null) {
        return i === hoveredIndex ? base : darken(base, 0.5)
      }
      return base
    }
    const getBorderColor = (i: number) => {
      // Si está seleccionado, usa el color del borde según el tema
      if (selectedIndex === i) {
        return theme === 'dark'
          ? getComputedStyle(document.documentElement).getPropertyValue('--background-light').trim()
          : getComputedStyle(document.documentElement).getPropertyValue('--surface-dark').trim()
      }
      // Si NO está seleccionado, el borde es igual al fondo (desaparece visualmente)
      return theme === 'dark'
        ? getComputedStyle(document.documentElement).getPropertyValue('--surface-dark').trim()
        : getComputedStyle(document.documentElement).getPropertyValue('--surface-light').trim()
    }

    const chart = new Chart(canvasRef.current, {
      type: 'pie',
      data: {
        labels: data.map(d => d.label),
        datasets: [
          {
            data: data.map(d => d.value),
            backgroundColor: data.map((_, i) => getBackgroundColor(i)),
            borderColor: data.map((_, i) => getBorderColor(i)),
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              color: textColor,
              padding: 20,
              boxHeight: 10,
              boxWidth: 25,
              font: {
                size: 14
              },
              generateLabels(chart) {
                return data.map((d, i) => ({
                  text: d.label,
                  fillStyle: originalColors[i],
                  strokeStyle: 'transparent',
                  lineWidth: 0,
                  hidden: false,
                  index: i,
                  pointStyle: 'circle',
                  fontColor: textColor,
                  font: hoveredIndex === i
                    ? 'bold 14px sans-serif'
                    : 'normal 14px sans-serif'
                }))
              }
            },
            onHover: (_e: any, legendItem: any, legend: any) => {
              setHoveredIndex(legendItem.index);
              if (legend.chart.canvas.style) {
                legend.chart.canvas.style.cursor = 'pointer';
              }
            },
            onLeave: () => {
              setHoveredIndex(null);
              if (canvasRef.current?.style) {
                canvasRef.current.style.cursor = 'default';
              }
            },
            onClick: (_e: any, legendItem: any) => {
              setSelectedIndex(prev =>
                prev === legendItem.index ? null : legendItem.index
              )
            }
          },
          tooltip: {
            enabled: false // Desactiva el tooltip nativo
          }
        },
        animation: false,
        onHover: (event: any, elements: any[]) => {
          // Cambia el cursor a pointer si hay elementos bajo el mouse
          if (event?.native?.target?.style) {
            event.native.target.style.cursor = (elements && elements.length > 0) ? 'pointer' : 'default';
          }
          if (elements && elements.length > 0) {
            setHoveredIndex(elements[0].index)
          } else {
            setHoveredIndex(null)
          }
        },
        onClick: (event: any, elements: any[]) => {
          if (elements && elements.length > 0) {
            setSelectedIndex(prev =>
              prev === elements[0].index ? null : elements[0].index
            )
          }
        },
        interaction: {
          mode: 'nearest',
          intersect: true
        }
      },
      plugins: [percentPlugin],
    })

    // Tooltip HTML personalizado que sigue al cursor
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const points = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
      if (points.length > 0) {
        const idx = points[0].index
        const d = data[idx]
        const value = d.value
        const percent = ((value / total) * 100).toFixed(1)
        setTooltip({
          x: e.clientX + 10,
          y: e.clientY + 10,
          content: `<b>${d.label}</b>: ${value}€`
        })
      } else {
        setTooltip(null)
      }
    }

    const handleMouseLeave = () => {
      setHoveredIndex(null)
      setTooltip(null)
    }

    const canvas = canvasRef.current
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      chart.destroy()
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [data, theme, selectedIndex, hoveredIndex])

  return (
    <div className="w-full min-w-full shadow-md rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-4 md:p-6 relative mt-10">
      <h5 className="text-md sm:text-xl font-bold text-text-light dark:text-text-dark mb-4 text-start">
        {title}
      </h5>
      <canvas
        ref={canvasRef}
        className="mx-auto block max-w-xs w-full h-auto"
      />
      {tooltip && (
        <div
          className={`
            bg-surface-light dark:bg-surface-dark
            text-text-light dark:text-text-dark
            border border-border-light dark:border-border-dark
            rounded-lg shadow-lg
            px-3 py-2
            pointer-events-none
            select-none
            whitespace-nowrap
            z-50
            fixed
          `}
          style={{
            left: tooltip.x,
            top: tooltip.y,
            fontSize: 14,
            minWidth: 80,
            opacity: 0.9,
          }}
          dangerouslySetInnerHTML={{ __html: tooltip.content }}
        />
      )}
    </div>
  )
}
