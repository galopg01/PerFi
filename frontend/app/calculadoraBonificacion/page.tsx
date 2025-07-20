"use client";

import "../globals.css";
import GenericForm from "../components/form";
import ErrorAlert from "../components/errorAlert";
import InfoCard from "../components/infoCard";
import { useEffect, useState } from "react";

export default function BonificationCalculator() {
  const [result, setResult] = useState<any>(null);
  const [formValues, setFormValues] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedForm = sessionStorage.getItem("bonificationFormValues");
    if (savedForm) {
      setFormValues(JSON.parse(savedForm));
    }
  }, []);

  useEffect(() => {
    if (formValues) {
      sessionStorage.setItem("bonificationFormValues", JSON.stringify(formValues));
    }
  }, [formValues]);

  useEffect(() => {
    if (!error) return;
    const timeout = setTimeout(() => setError(null), 10000);
    return () => clearTimeout(timeout);
  }, [error]);

  const handleSubmit = async (formData: any) => {
    try {
      setFormValues(formData);
      sessionStorage.setItem("bonificationFormValues", JSON.stringify(formData));
      const payload = {
        loanAmount: Number(formData.loanAmount),
        termMonths: Number(formData.termMonths),
        baseRate: Number(formData.baseRate),
        bonifiedRate: Number(formData.bonusRate),
        productsBankCost: Number(formData.productsBankCost),
        bonificationCost: Number(formData.productsCost),
      };

      const response = await fetch("http://localhost:4000/api/bonification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Error al obtener los resultados");

      const resultData = await response.json();
      setResult(resultData);
      setError(null);
    } catch (err) {
      setError("No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.");
    }
  };

  const parseEuro = (str: string) =>
    Number(str.replace(/[^\d,-.]/g, "").replace(",", "."));

  return (
    <section className="space-y-12 px-4 max-w-4xl mx-auto">
      {error && (
        <ErrorAlert
          message={error}
          onClose={() => setError(null)}
          className="max-w-xs w-full"
        />
      )}

      {!result && (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary dark:text-primary-dark">
            Calculadora de bonificaciones hipotecarias
          </h1>
          <p className="text-muted-light dark:text-muted-dark text-lg mt-2">
            Calcula si te compensa contratar productos (seguros, nómina, etc.) para reducir el tipo de interés de tu hipoteca.
          </p>
        </div>
      )}

      {!result ? (
        <div className="flex flex-col gap-6 [@media(min-width:815px)]:flex-row [@media(min-width:815px)]:justify-center">
          <div className="py-3 px-2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full md:w-1/2 mx-auto md:[text-wrap:balance]">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">¿Cómo funciona?</h2>
            <ul className="list-disc pl-5 text-sm xl:text-base text-muted-light dark:text-muted-dark space-y-4">
              <li>Introduce los datos de tu hipoteca y la bonificación que te ofrece el banco.</li>
              <li>A continuación se calcula si realmente te compensa aceptar los productos vinculados o buscar alternativas externas.</li>
              <li>El resultado te mostrará si el ahorro por intereses supera el coste del producto exigido.</li>
            </ul>
          </div>
          <div className="card max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full md:w-1/2 mx-auto">
            <GenericForm
              fields={[
                { name: "loanAmount", label: "Capital pendiente", type: "number", step: "0.01", placeholder: "150000", min: 1, max: 100000000, required: true, unit: "€" },
                { name: "termMonths", label: "Plazo restante", type: "number", placeholder: "360", min: 1, max: 480, required: true, unit: "meses" },
                { name: "baseRate", label: "Interés anual", type: "number", step: "0.01", placeholder: "2,5", min: 0.01, max: 10000, required: true, unit: "%" },
                { name: "bonusRate", label: "Bonificación", type: "number", step: "0.01", placeholder: "0,25", min: 0.01, max: formValues?.baseRate ? Number(formValues.baseRate) - 0.01 : 100, required: true, unit: "%" },
                {
                  name: "productsBankCost",
                  label: "Coste producto bancario",
                  type: "number",
                  placeholder: "350",
                  min: 0,
                  max: 10000,
                  required: true,
                  unit: "€/año"
                },
                {
                  name: "productsCost",
                  label: "Coste producto externo",
                  type: "number",
                  placeholder: "175",
                  min: 0,
                  max: 10000,
                  required: true,
                  unit: "€/año"
                },
              ]}
              onSubmit={handleSubmit}
              onChange={setFormValues}
              buttonText="Calcular ahorro"
              initialValues={formValues || {}}
              columns={2}
            />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-light hover:underline text-[12px] sm:text-base font-medium transition-colors"
            onClick={e => {
              e.preventDefault();
              setResult(null);
              sessionStorage.removeItem("bonificationFormValues");
            }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver
          </a>
        
        {/* Cuotas mensuales */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
            Cuotas
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard
              title="Cuota sin bonificar"
              value={`${result.baseMonthly} €`}
              description="Cuota mensual sin productos vinculados."
            />
            <InfoCard
              title="Cuota bonificada"
              value={`${result.bonusMonthly} €`}
              description="Cuota mensual con bonificación."
            />
            <InfoCard
              title="Ahorro mensual"
              value={`${result.monthlySavings} €`}
              description="Diferencia mensual entre cuotas."
            />
            <InfoCard
              title="Ahorro anual"
              value={`${result.annualSavings} €`}
              description="Ahorro total anual."
            />
          </div>
        </div>
        

        {/* Ahorros netos */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
            Costes
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard
              title="Coste anual del producto bancario"
              value={
                <>
                  {result.productsBankCost} €
                  <span className="text-muted-light dark:text-muted-dark">
                    {" "}
                    ({(parseEuro(result.productsBankCost) + parseEuro(result.annualSavings)).toFixed(2)} €)
                  </span>
                </>
              }
              description="Coste total del producto restando el ahorro anual."
            />
            <InfoCard
              title="Coste anual del producto externo"
              value={`${result.bonificationCost} €`}
              description="Coste total del producto externo."
            />
            <InfoCard
              title="Diferencia mensual"
              value={`${
                String(result.monthlyDifference).includes("-")
                  ? result.monthlyDifference
                  : `+${result.monthlyDifference}`
              } €`}
              description="Comparación mensual del coste de ambos productos."
              info="Si es positivo, el producto externo es más barato. En caso contrario, lo es el producto bancario."
            />
            <InfoCard
              title="Diferencia anual"
              value={`${
                String(result.annualDifference).includes("-")
                  ? result.annualDifference
                  : `+${result.annualDifference}`
              } €`}
              description="Diferencia total al año incluyendo bonificación."
            />
          </div>
        </div>
        

        {/* Intereses ahorrados por año */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-2">
            Intereses ahorrados por año
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((year) => {
              const interest = result[`savedInterest${year}`];
              const annualDiff = result[`annualInterestDifference${year}`];
              const monthlyDiff = result[`monthlyInterestDifference${year}`];
              console.log("Result")
              const isFavorable = Number((annualDiff || "0").replace(",", ".").replace("€", "")) >= 0;
              return (
                <InfoCard
                  key={year}
                  title={`Año ${year}`}
                  value={`${interest} €`}
                  description={`Diferencia de costes considerando únicamente intereses: ${annualDiff} € (${monthlyDiff} €/mes) a favor del ${isFavorable ? "externo" : "banco"}.`}
                />
              );
            })}
          </div>
        </div>

        {/* Veredicto comparado: ¿cuál compensa más según el flujo anual? */}
        {(() => {
          console.log("Result:", result.annualDifference);
          const annualDiff = Number((result.annualDifference || "0").replace(",", ".").replace("€", ""));
          const interestDiff = Number(result.annualInterestDifference1.replace(",", ".").replace("€", ""));

          const betterByFlow = annualDiff < 0;
          const betterByInterest = interestDiff < 0;

          let verdict: string;
          let explanation: string;

          if (betterByFlow && betterByInterest) {
            verdict = "Sí";
            explanation = "Con la bonificación pagarás menos cada mes y además reducirás los intereses del préstamo. Es una buena opción, especialmente si ya planeabas contratar ese producto.";
          } else if (!betterByFlow && !betterByInterest) {
            verdict = "No";
            explanation = "Ni el ahorro en intereses ni el ahorro en la cuota justifican el coste del producto bonificado.";
          } else {
            verdict = "Compensa si priorizas el ahorro en intereses";
            explanation = "A corto plazo pagarás menos intereses con la bonificación, aunque tu cuota mensual sea más alta. Es conveniente si quieres minimizar el coste del préstamo.";
          }

          return (
            <InfoCard
              title="¿Compensa la bonificación?"
              value={verdict}
              description={explanation}
              color={
                betterByFlow && betterByInterest
                  ? "border-green-500"
                  : !betterByFlow && !betterByInterest
                  ? "border-red-500"
                  : "border-yellow-500"
              }
            />
          );
        })()}
      </div>
      )}
    </section>
  );
}
