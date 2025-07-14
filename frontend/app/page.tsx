import "./globals.css";
import { BarChart2, PiggyBank, Wallet } from 'lucide-react';

export default function Home() {
  return (
    <section className="space-y-8 px-4 max-w-5xl mx-auto">
      <div className="text-center">
        {/* Badge "Alpha" */}
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-[0.7rem] font-semibold transition-colors focus:outline-none text-text border-text/10 gap-1 -mt-4 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap -ms-0.5 opacity-60" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          Versión Alpha
      </div>
        <h1 className="font-merriweather font-bold text-primary dark:text-primary-dark w-full lg:w-2/3 mx-auto text-5xl sm:text-6xl leading-[1.1]">
          Mantén tus finanzas bajo control con 
          <span className="text-primary"> PerFi</span>
        </h1>
        <p className="text-muted-light dark:text-muted-dark text-md sm:text-lg mt-2 [text-wrap:balance]">
          Simula tus préstamos, calcula el ahorro real de tus bonificaciones y visualiza cómo crecen tus inversiones con nuestras herramientas inteligentes. Todo en un solo lugar, claro y sin complicaciones.
        </p>
      </div>

      <section className="relative w-full max-w-5xl h-full grid grid-cols-1 min-[800px]:grid-cols-3 gap-8
  max-[950px]:gap-4
">
        {/* Tarjeta 1 */}
        <div className="w-full gap-2 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 max-[950px]:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-2">
            <BarChart2 className="w-10 h-10 max-[950px]:w-7 max-[950px]:h-7 text-primary dark:text-primary-dark" strokeWidth={2.5} />
          </div>
          <h3 className="text-xl max-[950px]:text-lg font-semibold mb-2 text-primary dark:text-primary-dark">
            Toma decisiones informadas
          </h3>
          <p className="text-muted-light dark:text-muted-dark [text-wrap:balance] max-[950px]:text-sm">
            Visualiza cómo afectan tus decisiones financieras a largo plazo. Compara escenarios y elige con confianza.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="w-full gap-2 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 max-[950px]:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-2">
            <PiggyBank className="w-10 h-10 max-[950px]:w-7 max-[950px]:h-7 text-primary dark:text-primary-dark" strokeWidth={2.5} />
          </div>
          <h3 className="text-xl max-[950px]:text-lg font-semibold mb-2 text-primary dark:text-primary-dark">
            Ahorra de forma inteligente
          </h3>
          <p className="text-muted-light dark:text-muted-dark [text-wrap:balance] max-[950px]:text-sm">
            Detecta oportunidades de ahorro real con nuestras simulaciones. Maximiza tu dinero sin esfuerzo.
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div className="w-full gap-2 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 max-[950px]:p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-2">
            <Wallet className="w-10 h-10 max-[950px]:w-7 max-[950px]:h-7 text-primary dark:text-primary-dark" strokeWidth={2.5} />
          </div>
          <h3 className="text-xl max-[950px]:text-lg font-semibold mb-2 text-primary dark:text-primary-dark">
            Ten el control total de tu dinero
          </h3>
          <p className="text-muted-light dark:text-muted-dark [text-wrap:balance] max-[950px]:text-sm">
            Centraliza tus análisis y gestiona tus finanzas personales desde un solo lugar. Claro, privado y gratuito.
          </p>
        </div>
      </section>
    </section>
  );
}
