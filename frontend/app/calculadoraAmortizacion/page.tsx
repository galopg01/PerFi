"use client";

import "../globals.css";
import GenericForm from "../components/form";
import ErrorAlert from "../components/errorAlert";
import { useEffect, useState } from "react";

export default function BonificationCalculator() {
  const [result, setResult] = useState<any>(null);
  const [formValues, setFormValues] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos al montar
  useEffect(() => {
    const savedForm = sessionStorage.getItem("amortizationCalculatorFormValues");
    if (savedForm) setFormValues(JSON.parse(savedForm));
  }, []);

  // Save data
  useEffect(() => {
    if (formValues)
      sessionStorage.setItem("amortizationCalculatorFormValues", JSON.stringify(formValues));
    if (result)
      sessionStorage.setItem("amortizationCalculatorResult", JSON.stringify(result));
  }, [formValues, result]);

  // Error handling
  useEffect(() => {
    if (!error) return;
    const timeout = setTimeout(() => setError(null), 10000);
    return () => clearTimeout(timeout);
  }, [error]);

  const handleSubmit = async (formData: any) => {
    try {
      setFormValues(formData);
      sessionStorage.setItem("amortizationCalculatorFormValues", JSON.stringify(formData));
      const payload = {
        loanAmount: Number(formData.loanAmount),
        loanTerm: Number(formData.loanTerm),
        interestRate: Number(formData.interestRate),
        commission: Number(formData.commission),
        prepaymentAmount: Number(formData.prepaymentAmount),
      };

      const response = await fetch("http://localhost:4000/api/amortizationCalculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Error al obtener los resultados");

      const resultData = await response.json();
      setResult(resultData);
      sessionStorage.setItem("amortizationCalculatorResult", JSON.stringify(resultData));
      setError(null);
    } catch (err) {
      setError("No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.");
    }
  };

  // Convierte meses a "X años Y meses" o "X años" si es múltiplo de 12
  function formatTerm(months: number) {
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    if (years > 0 && remMonths === 0) return `${years} año${years > 1 ? "s" : ""}`;
    if (years > 0) return `${years} año${years > 1 ? "s" : ""} y ${remMonths} mes${remMonths > 1 ? "es" : ""}`;
    return `${months} mes${months > 1 ? "es" : ""}`;
  }

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
            Calculadora de amortización anticipada
          </h1>
          <p className="text-muted-light dark:text-muted-dark text-lg mt-2">
            Calcula cuánto puedes ahorrar amortizando tu préstamo y cuándo compensa adelantar dinero.
          </p>
        </div>
      )}

      {!result ? (
        <div className="flex flex-col gap-6 [@media(min-width:793px)]:flex-row [@media(min-width:793px)]:justify-center">
          <div className="py-3 px-2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full md:w-1/2 mx-auto md:[text-wrap:balance]">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">¿Cómo funciona?</h2>
            <ul className="list-disc pl-5 text-sm xl:text-base text-muted-light dark:text-muted-dark space-y-4">
              <li>Introduce los datos de tu préstamo y la cantidad que deseas amortizar.</li>
              <li>La calculadora te mostrará dos escenarios: reducir la cuota mensual o reducir el plazo del préstamo.</li>
              <li>Podrás comparar el ahorro total en intereses en cada opción y decidir cuál te conviene más.</li>
            </ul>
          </div>
          <div className="card max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full md:w-1/2 mx-auto">
            <GenericForm
              fields={[
                { name: "loanAmount", label: "Capital pendiente", type: "number", step: "0.01", placeholder: "150000", min: 1, required: true, unit: "€" },
                { name: "loanTerm", label: "Plazo pendiente", type: "number", placeholder: "360", min: 0, max: 480, required: true, unit: "meses" },
                { name: "interestRate", label: "Interés anual", type: "number", step: "0.01", placeholder: "2,5", min: 0.01, max: 100, required: true, unit: "%" },
                { name: "commission", label: "Comisión", type: "number", step: "0.01", placeholder: "1", min: 0, max: 100, required: true, unit: "%" },
                {
                  name: "prepaymentAmount",
                  label: "Cantidad a amortizar",
                  type: "number",
                  placeholder: "10000",
                  min: 0,
                  max: formValues?.loanAmount ? Number(formValues.loanAmount) : 0,
                  required: true,
                  unit: "€",
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
              sessionStorage.removeItem("amortizationCalculatorFormValues");
            }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver
          </a>

          {result && (
            <div className="space-y-6">
              <div className="max-w-7xl mx-auto mb-4 px-4 text-sm md:text-base">
                <div className="flex justify-between py-1 originalResult">
                  <span>Capital pendiente:</span>
                  <span><b id="resultPending">{result.original.loanAmount} €</b></span>
                </div>
                <div className="flex justify-between py-1 originalResult">
                  <span>Cantidad a amortizar:</span>
                  <span><b id="resultPending">{result.original.prepaymentAmount} €</b></span>
                </div>
                <div className="flex justify-between py-1 gap-x-6 originalResult">
                  <span>Plazo pendiente:</span>
                  <span><b id="resultPeriodPending">{formatTerm(Number(result.original.term))}</b></span>
                </div>
                <div className="flex justify-between py-1 originalResult">
                  <span>Intereses:</span>
                  <span><b id="resultInterestPending">{result.original.interest} €</b></span>
                </div>
              </div>

              {/* Card */}
              <div className="p-4 border border-border-light rounded-lg bg-surface-light dark:bg-surface-dark max-w-7xl mx-auto text-sm md:text-base">
                <div className="flex flex-col md:flex-row px-2 gap-6">
                  {/* Reducing payment */}
                  <div className="flex-1 basis-0">
                    <h4 className="font-semibold mb-4 text-center md:text-left text-lg">Reduciendo cuota</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between py-1 gap-x-4 md:gap-x-20 lg:gap-x-42">
                        <span className="whitespace-nowrap">Nueva cuota:</span>
                        <span className="font-semibold whitespace-nowrap">{result.reducePayment.payment} €</span>
                      </div>
                      <div className="flex justify-between py-1 gap-x-4 md:gap-x-20 lg:gap-x-42">
                        <span className="whitespace-nowrap">Plazo:</span>
                        <span className="font-semibold whitespace-nowrap">{formatTerm(Number(result.reducePayment.term))}</span>
                      </div>
                      <div className="flex justify-between py-1 gap-x-4 md:gap-x-20 lg:gap-x-42">
                        <span className="whitespace-nowrap">Intereses:</span>
                        <span className="font-semibold whitespace-nowrap">{result.reducePayment.interest} €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 mt-4 gap-x-4  md:gap-x-20 lg:gap-x-42">
                        <span className="text-base whitespace-nowrap">Ahorro:</span>
                        <span className="font-bold text-xl md:text-2xl whitespace-nowrap">{result.reducePayment.interestSaved} €</span>
                      </div>
                    </div>
                  </div>
                  {/* Vertical bar */}
                  <div className="hidden md:flex">
                    <div className="border border-border-light h-full"></div>
                  </div>
                  {/* Horizontal bar */}
                  <div className="block md:hidden">
                    <div className="border-t border-border-light w-full"></div>
                  </div>
                  {/* Reducing temp */}
                  <div className="flex-1 basis-0 mt-0">
                    <h4 className="font-semibold mb-4 text-center md:text-left text-lg">Reduciendo plazo</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between py-1 gap-x-4 sm:gap-x-8 md:gap-x-10 lg:gap-x-32">
                        <span className="whitespace-nowrap">Cuota:</span>
                        <span className="font-semibold whitespace-nowrap">{result.reduceTerm.payment} €</span>
                      </div>
                      <div className="flex justify-between py-1 gap-x-4 sm:gap-x-8 md:gap-x-10 lg:gap-x-32">
                        <span className="whitespace-nowrap">Nuevo plazo:</span>
                        <span className="font-semibold whitespace-nowrap">{formatTerm(Number(result.reduceTerm.term))}</span>
                      </div>
                      <div className="flex justify-between py-1 gap-x-4 sm:gap-x-8 md:gap-x-10 lg:gap-x-32">
                        <span className="whitespace-nowrap">Intereses:</span>
                        <span className="font-semibold whitespace-nowrap">{result.reduceTerm.interest} €</span>
                      </div>
                      <div className="flex justify-between items-center py-2 mt-4 gap-x-4 sm:gap-x-8 md:gap-x-10 lg:gap-x-32">
                        <span className="text-base whitespace-nowrap">Ahorro:</span>
                        <span className="font-bold text-xl md:text-2xl whitespace-nowrap">{result.reduceTerm.interestSaved} €</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
