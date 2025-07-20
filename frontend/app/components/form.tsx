import React from "react";

type Field = {
  name?: string;
  label?: string;
  type: "text" | "email" | "password" | "number" | "checkbox" | "double";
  placeholder?: string;
  min?: number;
  max?: number;
  step?: string;
  required?: boolean;
  unit?: string;
};

type GenericFormProps = {
  fields: Field[];
  buttonText: string;
  onSubmit?: (values: Record<string, any>) => void;
  onChange?: (values: Record<string, any>) => void; // Añade esto
  initialValues?: Record<string, any>;
  columns?: number;
};

export default function GenericForm({
  fields,
  buttonText,
  onSubmit,
  onChange, // Añade esto
  initialValues = {},
  columns = 1,
}: GenericFormProps) {
  const [values, setValues] = React.useState<Record<string, any>>(initialValues);

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    const newValues = {
      ...values,
      [name]: type === "checkbox" ? checked : value,
    };
    setValues(newValues);
    if (onChange) onChange(newValues); // Llama a onChange
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(values);
  };

  const gridColsClass =
    columns > 1
      ? `grid grid-cols-1 md:grid-cols-${columns} gap-4`
      : "";

  return (
    <form className="py-2 max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className={gridColsClass}>
        {fields.map((field, idx) => {
          const isLast = idx === fields.length - 1;
          const isSingleInLastRow = columns > 1 && fields.length % columns !== 0 && isLast;
          return (
            <div
              className={`mb-5 ${isSingleInLastRow ? "md:col-span-full" : ""}`}
              key={field.name || idx}
            >
              {field.type !== "checkbox" && (
                <label
                  htmlFor={field.name}
                  className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark"
                >
                  {field.label}
                </label>
              )}
              {field.type === "checkbox" ? (
                <div className="flex items-start">
                  <input
                    id={field.name}
                    name={field.name}
                    type="checkbox"
                    checked={!!values[field.name!]}
                    onChange={handleChange}
                    className="w-4 h-4 border border-border-light rounded-sm bg-surface-light focus:ring-3 focus:ring-primary dark:bg-surface-dark dark:border-border-dark dark:focus:ring-primary dark:ring-offset-background-dark dark:focus:ring-offset-background-dark"
                    required={field.required}
                  />
                  <label
                    htmlFor={field.name}
                    className="ms-2 text-sm font-medium text-text-light dark:text-text-dark"
                  >
                    {field.label}
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={values[field.name!] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    className={`shadow-xs bg-surface-light border border-border-light text-text-light text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 ${field.unit ? "pr-20" : ""} dark:bg-surface-dark dark:border-border-dark dark:placeholder-muted-dark dark:text-text-dark dark:focus:ring-primary dark:focus:border-primary appearance-none`}
                    style={field.type === "number" ? { MozAppearance: "textfield" } : {}}
                  />
                  {field.type === "number" && (
                    <style jsx>{`
                      input[type="number"]::-webkit-outer-spin-button,
                      input[type="number"]::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                      }
                    `}</style>
                  )}
                  {field.unit && (
                    <span
                      className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center h-[70%] pl-2 border-l border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark select-none bg-inherit
                      ${field.unit.length > 4 ? "text-[10px]" : "text-xs"}
                    `}
                    style={{ pointerEvents: "none" }}
                  >
                    {field.unit}
                  </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button
        type="submit"
        className="btn w-full font-medium text-sm px-5 py-2.5 text-center"
      >
        {buttonText}
      </button>
    </form>
  );
}