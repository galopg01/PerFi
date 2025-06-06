"use client";

import "../globals.css";
import GenericTable from "../components/table";
import GenericForm from "../components/form";
import { useEffect, useState } from 'react';


export default function Amortization() {
  const [showTable, setShowTable] = useState(false);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState<any>(null); // Nuevo estado para los datos del form

  // Restore stored data
  useEffect(() => {
    const savedColumns = localStorage.getItem("amortizationColumns");
    const savedData = localStorage.getItem("amortizationData");
    const savedShowTable = sessionStorage.getItem("amortizationShowTable");
    const savedForm = sessionStorage.getItem("amortizationFormValues"); // Recupera el form

    if (savedColumns && savedData) {
      setColumns(JSON.parse(savedColumns));
      setData(JSON.parse(savedData));
      setShowTable(savedShowTable === "true");
    }
    if (savedForm) {
      setFormValues(JSON.parse(savedForm));
    }
  }, []);

  // Store data each time it changes
  useEffect(() => {
    if (columns.length && data.length) {
      localStorage.setItem("amortizationColumns", JSON.stringify(columns));
      localStorage.setItem("amortizationData", JSON.stringify(data));
      sessionStorage.setItem("amortizationShowTable", showTable ? "true" : "false");
    }
  }, [columns, data, showTable]);

  // Guarda los datos del formulario
  const handleSubmit = async (formData: any) => {
    try {
      setFormValues(formData);
      sessionStorage.setItem("amortizationFormValues", JSON.stringify(formData)); // Guarda el form
      const response = await fetch("http://localhost:4000/api/amortization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error("Failed to fetch amortization table");

      const result = await response.json();
      setColumns(result.columns);
      setData(result.data);
      setShowTable(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="space-y-12 px-4 max-w-5xl mx-auto">
      {!showTable && (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary dark:text-primary-dark">
            Tabla de amortización de préstamos
          </h1>
          <p className="text-muted-light dark:text-muted-dark text-lg mt-2">
            Introduce los datos de tu préstamo y obtén una tabla detallada de pagos mensuales.
          </p>
        </div>
      )}
      {showTable ? (
        <div className="space-y-3">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-light hover:underline text-base font-medium transition-colors"
            onClick={e => {
              e.preventDefault();
              setShowTable(false);
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver
          </a>
          <GenericTable 
          columns={columns}
          data={data}
        />
        </div>
        
      ) : (
        <div className="flex flex-col gap-6 md:flex-row md:justify-center">
          <div className="py-3 px-2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full md:w-1/2 mx-auto md:[text-wrap:balance]">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Cómo funciona</h2>
            <ul className="list-disc pl-5 text-sm xl:text-base text-muted-light dark:text-muted-dark space-y-4">
              <li>Introduce la cantidad, el interés anual y el tiempo restante.</li>
              <li>Se utiliza el sistema de amortización francés, en el que las cuotas son constantes, pero la proporción entre capital e intereses varía en el tiempo.</li>
              <li>Al inicio pagarás más intereses y menos capital; con el tiempo, el capital amortizado será mayor.</li>
              <li>Obtendrás una tabla detallada con el desglose de cada cuota .</li>
            </ul>
          </div>
          <div className="card max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full md:w-1/2 mx-auto">
            <GenericForm 
              fields={[
                { name: 'loanAmount', label: 'Cantidad', type: 'number', placeholder: '10000', min: 0, required: true },
                { name: 'interestRate', label: 'Interés anual (%)', type: 'number', placeholder: '2,5', min: 0, step: '0.01', required: true },
                { name: 'loanTerm', label: 'Plazo (meses)', type: 'number', placeholder: '360', min: 0, max: 480, required: true },
              ]}
              onSubmit={handleSubmit}
              buttonText="Calcular tabla de amortización"
              initialValues={formValues || {}}
            />
          </div>
        </div>
      )}
    </section>
  );
}
