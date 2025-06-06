import "./globals.css";
import { BarChart2, PiggyBank, Wallet } from 'lucide-react';

export default function Home() {
  return (
    <section className="space-y-8 px-4 max-w-5xl mx-auto">
      <div className="text-center">
        <h1 className="font-merriweather font-bold text-primary dark:text-primary-dark w-full lg:w-2/3 mx-auto text-5xl sm:text-6xl leading-[1.1]">
          Mantén tus finanzas bajo control con 
          <span className="text-primary"> PerFi</span>
        </h1>
        <p className="text-muted-light dark:text-muted-dark text-lg mt-2 [text-wrap:balance]">
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
